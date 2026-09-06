#!/usr/bin/env python3
"""
COSA FA — interroga uno per uno gli strumenti e i domini della galassia, e
scrive l'esito dentro `docs/regia/index.html`, fra i marcatori REGIA:CATENA.
Una riga per cosa: nome · a cosa serve · dove vive il segreto · stato misurato
· quando. Il valore di un segreto non entra qui e non ci passa nemmeno vicino:
questo script non legge nessuna chiave e non ne manda nessuna.

PERCHE ESISTE — il Direttore lavora dal telefono e deve vedere, senza aprire
niente, che cosa c'e' e che cosa e' vivo. Una pagina di stato scritta a mano
invecchia il giorno dopo e nessuno se ne accorge: qui i numeri li mette una
misura, e ogni riga porta l'ora in cui e' stata presa. Una superficie di lavoro
che non dice quando e' stata aggiornata e' una superficie che mente.

FIN DOVE ARRIVA
  · Solo GET e HEAD su host nostri e sull'API pubblica di GitHub. Nessun POST,
    nessun `authorization`, nessun segreto: misura la STRADA, non apre niente.
  · Guarda il CORPO, non il codice. Su Pages e su Cloudflare un indirizzo mai
    esistito risponde 200 con una pagina di ripiego: il codice non prova niente,
    la prova e' l'impronta nel corpo (lezione di SUONO/SQUELCH, 10/08).
    ⚠️ E un corpo letto A META' non prova nemmeno il contrario. Al primo giro
    vero (run #1, 06/09) leggevo 200 KB e ho dato «non e' il nostro» a
    systema77.com/meteo.html: l'impronta stava al byte 227.455 di 252.596.
    La pagina era sana, era corto il metro. Da qui la regola, che vale oltre
    questo file: 📜 *un'impronta trovata prova la presenza; un'impronta non
    trovata prova qualcosa solo se hai letto tutto.* Ora il corpo troncato
    dichiara di esserlo e l'esito diventa «senza prova», mai un rosso.
  · Dove la prova richiederebbe la chiave (Cloudflare, Porkbun) l'esito e'
    «senza prova»: non verde e non rosso. Un colore inventato e' peggio del
    trattino.
  · DUE GUARDIE prima di scrivere, e sono la ragione per cui il referto vale:
    ① il bersaglio di controllo deve rispondere; ② almeno un host nostro deve
    rispondere. Se il controllo e' verde e cadono TUTTI i nostri, non sono
    caduti quindici servizi insieme: e' cieco chi misura. In quel caso lo
    script non scrive niente e lo dice — la pagina tiene la misura di ieri,
    che e' vecchia ma vera, invece di una fila di rossi falsi.
    (Dalle sessioni agente questo e' il caso NORMALE: l'egress risponde 403 al
    CONNECT su ogni host nostro. Il posto da cui questa misura si fa davvero e'
    il runner — `.github/workflows/misura-catena.yml`.)

COSTO — zero. Nessuna API a pagamento, nessun token.
USO
    python3 scripts/misura_catena.py            # misura e scrive in pagina
    python3 scripts/misura_catena.py --mostra   # misura e stampa, non scrive

— creato da SQUELCH, 2026-09-06
"""
import argparse
import datetime
import html
import json
import os
import re
import sys
import urllib.error
import urllib.request

QUI = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(QUI)
PAGINA = os.path.join(ROOT, "docs", "regia", "index.html")

CONTROLLO = "https://api.github.com/"   # vivo da qui e dal runner: e' il metro
ATTESA = 25                             # secondi per bersaglio
LIMITE = 1_000_000                      # quanto corpo leggo: /meteo.html ne pesa 253 KB
AGENTE = "systema77-misura-catena/1 (+https://cyberboomer.io/regia/)"

# ── IL REGISTRO ───────────────────────────────────────────────────────────────
# `custode` risponde a una domanda sola: «dove vado a metterci le mani?».
# E' un LUOGO, mai un valore. Nessuna riga di questo file contiene un segreto,
# e nessuna deve contenerlo mai: la console dice dove stanno le chiavi e se
# funzionano, non le chiavi.
# `impronta` e' cio' che nel corpo prova che a rispondere siamo noi.
STRUMENTI = [
    {"id": "worker-punti", "nome": "Worker dei punti",
     "mestiere": "Assegna e conta i punti del gioco: e' il motore dietro ANIMA GAME",
     "custode": "segreto del Worker (wrangler secret) sul sottodominio «insieme»",
     "url": "https://api.cyberboomer.io/", "impronta": '"servizio":"punti"'},

    {"id": "sigillo", "nome": "Sigillo delle carte",
     "mestiere": "Riconosce il codice stampato sul retro di una carta e apre la stanza giusta",
     "custode": "~/.systema77/sigillo.env sul Mac, caricato nel Worker come SIGILLO_SECRET",
     "url": "https://cyberboomer.io/v/SYS-00/", "impronta": None},

    {"id": "porta", "nome": "La porta",
     "mestiere": "Il campo della frase davanti al banco di lavoro del Direttore",
     "custode": "passphrase «systema77.regia» nel Portachiavi del Mac — non esiste in nessun file",
     "url": "https://cyberboomer.io/", "impronta": "PORTA_PAYLOAD"},

    {"id": "regia", "nome": "Questa plancia",
     "mestiere": "La sala di regia: quadro pubblico in chiaro, il resto cifrato",
     "custode": "stessa passphrase della porta",
     "url": "https://cyberboomer.io/regia/", "impronta": "regia-cifrato"},

    {"id": "verdetti", "nome": "Verdetti KIROSHI",
     "mestiere": "L'archivio dei referti: e' vero o falso, con le fonti in chiaro",
     "custode": "ANTHROPIC_API_KEY, segreto del repo (Actions) — dichiarato MANCANTE dal manuale",
     "url": "https://cyberboomer.io/fake-checker/", "impronta": "KIROSHI"},

    {"id": "radio", "nome": "Radio ANIMA",
     "mestiere": "Le onde: pagina e audio insieme, in un progetto Pages suo",
     "custode": "nessun segreto — non ne ha bisogno",
     "url": "https://radio-anima.pages.dev/", "impronta": None},

    {"id": "meteo", "nome": "Meteo AURA",
     "mestiere": "Il servizio n.1 dell'agenzia: previsioni dai server a pagamento Open-Meteo",
     "custode": "IN CHIARO dentro la pagina pubblica /meteo.html — una chiave nel browser non e' un segreto",
     "url": "https://systema77.com/meteo.html", "impronta": "customer-api.open-meteo.com"},

    # Le due che non si possono provare senza usarle. Restano in elenco: una
    # chiave che nessuno guarda e' una chiave che scade senza che se ne accorga
    # nessuno. Ma l'esito e' «senza prova», non un verde regalato.
    {"id": "cloudflare", "nome": "Chiave Cloudflare",
     "mestiere": "Pubblica su Pages, tocca il DNS, mette la porta davanti a un sito",
     "custode": "~/.systema77/cloudflare.env sul Mac",
     "url": None, "impronta": None,
     "perche_senza_prova": "provarla vorrebbe dire usarla, e una prova non chiama un'API con una chiave"},

    {"id": "porkbun", "nome": "Chiave Porkbun",
     "mestiere": "I domini del parco: rinnovi, scadenze, record DNS",
     "custode": "~/.systema77/porkbun.env sul Mac — dato per VUOTO dal registro del 10/08",
     "url": None, "impronta": None,
     "perche_senza_prova": "stesso motivo, e il registro la dava vuota: la prova la fa il Direttore aprendo il file"},
]

# La galassia. `atteso` dice cosa ci aspettiamo: cosi' un dominio parcheggiato
# che comincia a servire qualcosa si vede, invece di sparire fra i grigi.
GALASSIA = [
    ("systema77.com",          "https://systema77.com/",          "acceso", "L'agenzia: il mestiere che fattura"),
    ("cyberboomer.io",         "https://cyberboomer.io/",         "acceso", "Il banco di lavoro del Direttore"),
    ("animagame.io",           "https://animagame.io/",           "acceso", "Il campo: il gioco a invito"),
    ("cyberboomer.ninja",      "https://cyberboomer.ninja/",      "acceso", "La voce: il pianeta che spiega"),
    ("anima.solar",            "https://anima.solar/",            "acceso", "ANIMA APP / F.A.R.O."),
    ("playanima.io",           "https://playanima.io/",           "acceso", "Rimando al campo"),
    ("api.cyberboomer.io",     "https://api.cyberboomer.io/",     "acceso", "Il Worker: l'unica cosa che ESEGUE"),
    ("radio-anima.pages.dev",  "https://radio-anima.pages.dev/",  "acceso", "La radio, casa sua"),
    ("console.cyberboomer.io", "https://console.cyberboomer.io/", "spento", "Mai creato: la console e' finita sull'apex"),
    ("systema77.net",          "https://systema77.net/",          "spento", "Parcheggiato — ha la posta accesa"),
    ("systema77.org",          "https://systema77.org/",          "spento", "Parcheggiato"),
    ("systema77.io",           "https://systema77.io/",           "spento", "Parcheggiato"),
    ("systema77.tech",         "https://systema77.tech/",         "spento", "Parcheggiato"),
    ("cyberboomer.store",      "https://cyberboomer.store/",      "spento", "Il negozio, non ancora aperto"),
    ("cyberboomer.art",        "https://cyberboomer.art/",        "spento", "Portfolio, non ancora aperto"),
    ("cyberboomer.love",       "https://cyberboomer.love/",       "spento", "Landing del live, non ancora aperta"),
    ("cyberboomer.info",       "https://cyberboomer.info/",       "spento", "Press / EPK, non ancora aperto"),
    ("cyberboomer.lol",        "https://cyberboomer.lol/",        "spento", "Rimandi leggeri, non ancora aperti"),
]

CODE = [
    ("kiroshi-queue",    "Verifiche di ditte e prodotti in attesa"),
    ("braindance-queue", "Notizie e affermazioni in attesa"),
    ("commessa",         "Commesse dal modulo, in attesa della ronda"),
    ("regia",            "Comandi premuti da questa plancia"),
]
REPO = "Pierluigi-De-Palo/anima-console"


# ── interrogazione ────────────────────────────────────────────────────────────
def leggi(flusso):
    """Corpo e se l'ho troncato. Chiedo UN byte oltre il tetto proprio per
    saperlo: senza questo, «l'impronta non c'e'» e «non sono arrivato fin li'»
    sarebbero la stessa frase, e non lo sono."""
    dati = flusso.read(LIMITE + 1)
    return dati[:LIMITE].decode("utf-8", "replace"), len(dati) > LIMITE


def chiedi(url: str):
    """(codice, corpo, troncato, guasto). codice 0 = non ho potuto chiedere."""
    req = urllib.request.Request(url, headers={"User-Agent": AGENTE}, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=ATTESA) as r:
            corpo, troncato = leggi(r)
            return r.status, corpo, troncato, None
    except urllib.error.HTTPError as e:
        # Un 404 e' una risposta: il servizio c'e' e dice di no. Non e' un guasto mio.
        corpo, troncato = "", False
        try:
            corpo, troncato = leggi(e)
        except Exception:
            pass
        return e.code, corpo, troncato, None
    except Exception as e:
        return 0, "", False, type(e).__name__ + ": " + str(e)[:120]


def esito_bersaglio(codice, corpo, troncato, guasto, impronta, atteso="acceso"):
    if codice == 0:
        return ("muto", guasto or "nessuna risposta")
    vivo = 200 <= codice < 300
    if atteso == "spento":
        if not vivo:
            return ("spento", f"{codice} — spento, come previsto")
        return ("sorpresa", f"{codice} — dato per spento, invece risponde")
    if not vivo:
        return ("muto", f"{codice} — risponde, ma non serve la pagina")
    if impronta and impronta not in corpo:
        if troncato:
            # Non ho letto tutto: l'assenza non prova niente. Rosso sarebbe una bugia.
            return ("senza-prova",
                    f"{codice}, ma ho letto solo i primi {LIMITE // 1000} KB: "
                    f"«{impronta}» potrebbe essere piu' avanti")
        # La trappola: 200 non prova niente se il corpo non e' il nostro.
        return ("estraneo", f"{codice}, ma nel corpo manca l'impronta «{impronta}»")
    return ("vivo", f"{codice} · {len(corpo)} byte" + (" · impronta riconosciuta" if impronta else ""))


def conta_code():
    """Le code sono issue APERTE. Due trappole, e sono entrambe gia' costate:
    ① l'API `issues` restituisce anche le PR — si scartano guardando la chiave
       `pull_request`, altrimenti una PR aperta si conta come richiesta in attesa;
    ② un filtro per etichetta che non trova niente non dice «non c'e' niente»,
       dice «non vedo niente»: qui si scarica la coda NUDA e si contano le
       etichette sopra, cosi' una richiesta senza etichetta non sparisce."""
    codice, corpo, _, guasto = chiedi(
        f"https://api.github.com/repos/{REPO}/issues?state=open&per_page=100")
    if codice != 200:
        return None, guasto or f"l'API ha risposto {codice}"
    try:
        voci = [v for v in json.loads(corpo) if "pull_request" not in v]
    except json.JSONDecodeError:
        return None, "risposta non leggibile"
    fuori = []
    for etichetta, mestiere in CODE:
        n = sum(1 for v in voci if any(e.get("name") == etichetta for e in v.get("labels", [])))
        fuori.append({"nome": etichetta, "mestiere": mestiere, "quante": n})
    nude = sum(1 for v in voci if not v.get("labels"))
    fuori.append({"nome": "senza etichetta", "quante": nude,
                  "mestiere": "Richieste arrivate nude: nessun filtro le trova, e qui si vedono"})
    return {"totale": len(voci), "righe": fuori}, None


# ── la pagina ─────────────────────────────────────────────────────────────────
COLORE = {"vivo": "ok", "spento": "off", "muto": "ko",
          "estraneo": "ko", "sorpresa": "warn", "senza-prova": "warn"}
PAROLA = {"vivo": "vivo", "spento": "spento", "muto": "muto",
          "estraneo": "non e' il nostro", "sorpresa": "acceso a sorpresa",
          "senza-prova": "senza prova"}


def riga(nome, mestiere, custode, stato, dettaglio, quando):
    e = html.escape
    c = f'<div class="rg-cus">{e(custode)}</div>' if custode else ""
    return (
        f'<div class="rg">'
        f'<div class="rg-t"><span class="rg-n">{e(nome)}</span>'
        f'<span class="sem {COLORE[stato]}">{e(PAROLA[stato])}</span></div>'
        f'<div class="rg-m">{e(mestiere)}</div>'
        f'{c}'
        f'<div class="rg-q">{e(dettaglio)} · misurato {e(quando)}</div>'
        f'</div>')


def componi(strumenti, galassia, code, quando, controllo):
    e = html.escape
    p = ['<section class="piazza" id="catena">',
         f'<div class="pz-cap">strumenti <span class="pz-n">{len(strumenti)}</span></div>']
    p += [riga(s["nome"], s["mestiere"], s["custode"], s["stato"], s["dettaglio"], quando)
          for s in strumenti]

    p.append(f'<div class="pz-cap">galassia <span class="pz-n">{len(galassia)}</span></div>')
    p += [riga(g["nome"], g["mestiere"], None, g["stato"], g["dettaglio"], quando)
          for g in galassia]

    p.append('<div class="pz-cap">code</div>')
    if code is None:
        p.append('<div class="rg"><div class="rg-t"><span class="rg-n">le code</span>'
                 '<span class="sem warn">non lette</span></div>'
                 '<div class="rg-q">l\'API delle issue non ha risposto: qui non si conclude niente</div></div>')
    else:
        for c in code["righe"]:
            n = c["quante"]
            p.append(
                f'<div class="rg"><div class="rg-t"><span class="rg-n">{e(c["nome"])}</span>'
                f'<span class="sem {"warn" if n else "off"}">{n} in attesa</span></div>'
                f'<div class="rg-m">{e(c["mestiere"])}</div>'
                f'<div class="rg-q">misurato {e(quando)}</div></div>')
        p.append(f'<div class="pz-pie">{code["totale"]} richieste aperte in tutto · '
                 f'coda letta NUDA, poi contate le etichette sopra</div>')

    p.append(f'<div class="pz-pie">Misura presa {e(quando)} · bersaglio di controllo {e(controllo)} · '
             f'nessuna chiave letta, nessuna chiave mandata. '
             f'«senza prova» vuol dire che provarla avrebbe voluto dire usarla.</div>')
    p.append('</section>')
    return "\n".join(p)


def dentro(pagina: str, marca: str, corpo: str) -> str:
    a, b = f"<!--REGIA:{marca}:INIZIO-->", f"<!--REGIA:{marca}:FINE-->"
    i, j = pagina.find(a), pagina.find(b)
    if i < 0 or j < 0 or j < i:
        raise SystemExit(f"✗ docs/regia/index.html: marcatori {marca} assenti o invertiti. "
                         "Lo script scrive solo fra i marcatori: non li rimette lui.")
    return pagina[:i + len(a)] + "\n" + corpo + "\n" + pagina[j:]


def main() -> int:
    ap = argparse.ArgumentParser(description="Misura la catena e la scrive nella regia")
    ap.add_argument("--mostra", action="store_true", help="misura e stampa, non tocca la pagina")
    args = ap.parse_args()

    # ── guardia ①: il metro. Senza, nessuna conclusione e' lecita.
    cod, _, _, guasto = chiedi(CONTROLLO)
    if cod == 0:
        print(f"✗ non raggiungo nemmeno il bersaglio di controllo ({CONTROLLO}): {guasto}")
        print("  Il guasto e' della mia rete. Nessuna conclusione sulla catena e' lecita.")
        return 1
    print(f"✓ bersaglio di controllo: {cod} — si puo' misurare")

    quando = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d · %H:%M UTC")

    strumenti, raggiunti = [], 0
    for s in STRUMENTI:
        if s["url"] is None:
            stato, dettaglio = "senza-prova", s["perche_senza_prova"]
        else:
            c, corpo, tr, g = chiedi(s["url"])
            stato, dettaglio = esito_bersaglio(c, corpo, tr, g, s["impronta"])
            if c:
                raggiunti += 1
        print(f"  {s['nome']:24s} {stato:12s} {dettaglio[:70]}")
        strumenti.append({**s, "stato": stato, "dettaglio": dettaglio})

    galassia = []
    for nome, url, atteso, mestiere in GALASSIA:
        c, corpo, tr, g = chiedi(url)
        stato, dettaglio = esito_bersaglio(c, corpo, tr, g, None, atteso)
        if c:
            raggiunti += 1
        print(f"  {nome:24s} {stato:12s} {dettaglio[:70]}")
        galassia.append({"nome": nome, "mestiere": mestiere, "stato": stato, "dettaglio": dettaglio})

    # ── guardia ②: se il metro e' verde e cadono TUTTI i nostri, non sono caduti
    #    tutti insieme: sono cieco io. Meglio la misura di ieri, vecchia e vera,
    #    che una fila di rossi falsi su una superficie di lavoro.
    if raggiunti == 0:
        print(f"\n✗ {CONTROLLO} risponde, ma NESSUNO dei nostri bersagli risponde.")
        print("  Non sono caduti tutti insieme: e' cieco chi misura (dalle sessioni")
        print("  agente l'egress da' 403 al CONNECT su ogni host nostro).")
        print("  NON scrivo in pagina: resta la misura precedente, vecchia ma vera.")
        print("  Il posto da cui questa misura si fa: Actions → «Misura della catena».")
        return 2

    code, guasto_code = conta_code()
    print(f"  code: {'non lette — ' + str(guasto_code) if code is None else str(code['totale']) + ' aperte'}")

    if args.mostra:
        print("\n(--mostra: non ho toccato la pagina)")
        return 0

    testo = open(PAGINA, encoding="utf-8").read()
    fuori = dentro(testo, "CATENA", componi(strumenti, galassia, code, quando, CONTROLLO))
    # L'ora della misura va anche in TESTA, dove si guarda per primo: in fondo alla
    # pagina nessuno la cerca. Il 06/09 il Direttore ha letto la data dell'ultimo
    # verdetto in cima («ha una settimana») senza vedere che la catena sotto era di
    # venti minuti prima. Un dato fresco nascosto sotto uno vecchio non e' fresco.
    fuori = dentro(fuori, "QUANDO",
                   f'<div class="kv"><b>misurata</b><span>{html.escape(quando)}</span></div>')
    if fuori == testo:
        print("= nessun cambiamento in pagina")
        return 0

    # Ultima guardia, e non e' di forma: questo script scrive in `docs/`.
    # Se la guardia privacy trova qualcosa di grave, non si pubblica.
    sys.path.insert(0, QUI)
    import guardia_privacy                                   # noqa: E402
    gravi = [r for r in guardia_privacy.scandaglia(fuori, "regia/catena") if r.grave]
    if gravi:
        for r in gravi:
            print(f"  ⛔ {r.cosa}: …{r.estratto}…")
        raise SystemExit("✗ la guardia privacy ferma la scrittura.")

    with open(PAGINA, "w", encoding="utf-8") as fh:
        fh.write(fuori)
    vivi = sum(1 for s in strumenti if s["stato"] == "vivo") + \
        sum(1 for g in galassia if g["stato"] == "vivo")
    print(f"\n✓ docs/regia/index.html — {len(strumenti)} strumenti, {len(galassia)} domini, "
          f"{vivi} vivi · misura del {quando}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
