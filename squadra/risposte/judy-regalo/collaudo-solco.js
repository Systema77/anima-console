/* IL BANCO DI PROVA — come si guarda una superficie che si muove
 *
 * Il 10/08 il SOLCO e' stato messo in pagina e subito spento, con una ragione
 * onesta: «nel mio pannello browser la pagina e' servita hidden, quindi
 * requestAnimationFrame e' congelato — non prova che il file sia rotto, prova
 * che qui non e' verificabile». E' rimasto fermo venti giorni.
 * Il 30/08 sono bastati trenta secondi di Chromium headless.
 *
 * 📜 «Non e' verificabile» non e' un esito: e' un compito non ancora svolto.
 *
 * COME SI LANCIA (l'attrezzatura c'e' gia' in ambiente, non si installa niente):
 *   NODE_PATH=/opt/node22/lib/node_modules node collaudo-solco.js <pagina.html>
 *
 * COSA TORNA: per ogni larghezza, la percentuale di pixel accesi nel tempo, e
 * uno screenshot. La domanda che chiude il collaudo non e' «e' bello»: e'
 * SI ASSESTA? Un valore che cresce a ogni lettura vuol dire che quello che
 * disegna e quello che cancella non sono in pari, e prima o poi la banda si
 * riempie — anche se ogni singolo fotogramma e' bellissimo.
 *
 * — creato da JUDY, 2026-08-30
 */
const { chromium } = require('playwright');
const path = require('path');

const PAGINA   = process.argv[2] || 'prova.html';
const LARGHEZZE = [390, 1200];      // il telefono e la scrivania: mai una sola
const LETTURE   = 5, PAUSA = 20000; // 100 secondi: il tempo in cui un guasto lento si vede
const SOGLIA    = 10;               // canone di casa: mai piu' del 10% acceso

// Conta i pixel accesi del canvas. La soglia 8/255 tiene dentro anche gli aloni
// deboli: sono quelli che nel SOLCO restavano impigliati e non se ne andavano piu'.
const accesi = p => p.evaluate(() => {
  const cv = document.querySelector('canvas');
  if (!cv) return null;
  const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
  let on = 0;
  for (let i = 3; i < d.length; i += 4) if (d[i] > 8) on++;
  return +(100 * on / (cv.width * cv.height)).toFixed(2);
});

(async () => {
  const url = 'file://' + path.resolve(PAGINA);
  const b = await chromium.launch();
  let verdetto = 'REGGE';

  for (const w of LARGHEZZE) {
    // ── la rotta viva
    let p = await b.newPage({ viewport: { width: w, height: 800 } });
    await p.goto(url);
    const serie = [];
    for (let i = 0; i < LETTURE; i++) {
      await p.waitForTimeout(PAUSA);
      serie.push(await accesi(p));
    }
    await p.screenshot({ path: `collaudo-${w}-moto.png` });
    await p.close();

    if (serie[0] === null) { console.log(`w${w} · nessun canvas in pagina`); verdetto = 'NON REGGE'; continue; }
    const max = Math.max(...serie);
    // «si assesta» = l'ultima lettura non e' molto sopra quella di meta' corsa
    const assestata = serie[LETTURE - 1] <= serie[Math.floor(LETTURE / 2)] * 1.35;
    if (max > SOGLIA || !assestata) verdetto = 'NON REGGE';
    console.log(
      `w${w} moto  ` + serie.map((v, i) => `${(i + 1) * PAUSA / 1000}s=${v}%`).join(' ') +
      `  → max ${max}% ${max > SOGLIA ? `SFONDA il ${SOGLIA}%` : 'entro il canone'}` +
      `, ${assestata ? 'si assesta' : 'NON si assesta: cresce ancora'}`
    );

    // ── la rotta ferma: e' una superficie a se', e nel SOLCO era l'unica rotta
    //    rotta proprio perche' era l'unica che nessuno guardava.
    p = await b.newPage({ viewport: { width: w, height: 800 }, reducedMotion: 'reduce' });
    await p.goto(url);
    await p.waitForTimeout(3000);
    const f = await accesi(p);
    await p.screenshot({ path: `collaudo-${w}-fermo.png` });
    await p.close();
    if (f !== null && f > SOGLIA) verdetto = 'NON REGGE';
    console.log(`w${w} fermo ${f}% ${f !== null && f > SOGLIA ? `→ SFONDA il ${SOGLIA}%` : '→ entro il canone'}`);
  }

  await b.close();
  console.log(`\nVERDETTO: ${verdetto}`);
  console.log('Gli screenshot sono in collaudo-*.png: i numeri dicono se regge, le immagini se e\' giusto.');
  console.log('— collaudato con il banco di JUDY, 2026-08-30');
  process.exit(verdetto === 'REGGE' ? 0 : 1);
})();
