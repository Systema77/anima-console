/* IL SIGILLO — logica della pagina di verifica.
   L'ID arriva da body[data-card-id] (cartella per card, es. /anima/verifica/SYS-01/)
   oppure dalla query string (?id=SYS-01) sulla pagina generica.
   Legge un JSON pubblico per card. Nel JSON pubblico NON ci sono dati personali,
   né seriale né impronta: quelli restano nel backend, dietro consenso. */
(function () {
  var body = document.body;
  var base = body.getAttribute('data-base') || '';
  var id = body.getAttribute('data-card-id') ||
           new URLSearchParams(location.search).get('id') || '';
  id = id.trim().toUpperCase();

  var vEsito = document.getElementById('esito');
  var vPill = document.getElementById('pill');
  var vId = document.getElementById('id');
  var vNum = document.getElementById('num');
  var vData = document.getElementById('data');
  var pannello = document.getElementById('pannello');
  var entra = document.getElementById('entra');
  var collaudo = document.getElementById('collaudo');

  function mostra(stato, esito, dati) {
    pannello.classList.remove('ko', 'attesa');
    if (stato) pannello.classList.add(stato);
    vEsito.textContent = esito;
    vPill.textContent = dati.stato || '—';
    vId.textContent = dati.card_id || id || '—';
    // La carta 0 esiste (è quella dell'Overlord) e in JavaScript lo zero è "falso":
    // con un controllo di verità mostrava '—' proprio sulla prima card che verrà
    // scansionata. Si controlla l'assenza del dato, non il suo valore.
    // «00/10 · cerchio 1» — decisione del Direttore, 06/08. Il primo cerchio è di 10;
    // il 77 resta il nome dell'agenzia. Dire anche il cerchio tiene aperti i prossimi
    // senza promettere posti che oggi non esistono.
    vNum.textContent = (dati.numero === null || dati.numero === undefined)
      ? '—'
      : String(dati.numero).padStart(2, '0') + '/' + (dati.totale || '—') +
        (dati.cerchio ? ' · cerchio ' + dati.cerchio : '');
    vData.textContent = dati.emessa || '—';
    // L'area personale deve sapere quale card ha aperto la porta. Percorso assoluto:
    // questa stessa pagina è servita da due indirizzi (/v/<ID>/ stampato sulla card
    // e /anima/verifica/<ID>/ storico), e un relativo darebbe due risultati diversi.
    if (dati.card_id || id) {
      entra.href = '/anima/dashboard/?id=' + encodeURIComponent(dati.card_id || id);
    }
    entra.hidden = stato !== null;
    if (dati.collaudo) collaudo.hidden = false;
  }

  /* IL RITO NFC (SHUTTER §3; scritto il 19/10). Il chip arriva con e e c nell'indirizzo,
     il QR senza: senza e/c resta la verifica di sempre. Il chip della mano punta alla
     pagina generica, /anima/verifica/?id=MANO-nn&e=…&c=…: nessuna pagina nuova.
     Il nonce del rito sta in localStorage, non in sessionStorage: su Android il secondo
     tocco apre una scheda nuova. La sessione si scrive dove la legge area2.js. */
  var q = new URLSearchParams(location.search);
  var e = q.get('e'), c = q.get('c');
  if (e && c && /^(SYS|MANO)-\d{2}$/.test(id)) {
    // Un tocco vale una volta sola: ricaricare la pagina sarebbe un replay, e un 403.
    history.replaceState(null, '', location.pathname + (id.indexOf('MANO-') === 0 ? '?id=' + id : ''));
    tocca(id, e, c);
    return;
  }

  function tocca(id, e, c) {
    // Testi provvisori: le parole sono di JUDY (consegna del 19/10).
    var TESTI = {
      attesa: 'VERIFICO',
      manca_mano: 'ORA LA MANO',
      manca_carta: 'ORA LA CARTA',
      sotto: 'Avvicina il telefono: hai dieci minuti.',
      fatto: 'SEI DENTRO',
      no: 'NON APRE'
    };
    var API = 'https://api.cyberboomer.io';
    var CHIAVE_RITO = 's77.rito';
    var rito = null;
    try { rito = JSON.parse(localStorage.getItem(CHIAVE_RITO) || 'null'); } catch (x) { /* privata */ }
    if (rito && !(rito.scade > Date.now())) rito = null;

    mostra('attesa', TESTI.attesa, { card_id: id, stato: 'tocco' });
    var corpo = { id: id, e: e, c: c };
    if (rito) corpo.rito = rito.nonce;
    fetch(API + '/tocco', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(corpo)
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (r) {
        var d = r.d;
        if (r.ok && d.sessione) {
          try {
            localStorage.removeItem(CHIAVE_RITO);
            localStorage.setItem('s77.sessione', JSON.stringify({ token: d.sessione, scade: d.scade, carta: d.carta }));
          } catch (x) { /* privata: si entra lo stesso, la sessione non resta */ }
          mostra(null, TESTI.fatto, { card_id: d.carta, stato: 'attiva' });
          location.replace('/anima/dashboard/?id=' + encodeURIComponent(d.carta));
        } else if (r.ok && d.rito) {
          try {
            localStorage.setItem(CHIAVE_RITO, JSON.stringify({ nonce: d.rito, scade: Date.now() + d.scade_fra * 1000 }));
          } catch (x) { /* privata: il secondo tocco non trovera' il rito */ }
          mostra('attesa', d.manca === 'mano' ? TESTI.manca_mano : TESTI.manca_carta,
                 { card_id: id, stato: TESTI.sotto });
        } else {
          if (d.errore === 'rito_scaduto') try { localStorage.removeItem(CHIAVE_RITO); } catch (x) { /* */ }
          mostra('ko', TESTI.no, { card_id: id, stato: d.messaggio || TESTI.no });
        }
      })
      .catch(function () {
        mostra('ko', TESTI.no, { card_id: id, stato: 'rete assente: riavvicina il telefono' });
      });
  }

  if (!id || !/^[A-Z0-9-]{3,20}$/.test(id)) {
    mostra('attesa', 'NESSUN ID', { stato: 'in attesa di un ID' });
    return;
  }

  fetch(base + 'dati/' + id + '.json', { cache: 'no-store' })
    .then(function (r) {
      if (!r.ok) throw new Error('404');
      return r.json();
    })
    .then(function (d) {
      if (d.stato === 'VERIFICATA') mostra(null, 'AUTENTICA', d);
      else mostra('ko', 'NON AUTENTICA', d);
    })
    .catch(function () {
      mostra('ko', 'NON AUTENTICA', { card_id: id, stato: 'card non riconosciuta' });
    });
})();
