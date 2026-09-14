#!/usr/bin/env python3
"""BANCO APERTO — lo stesso banco di lavoro, senza serratura, solo sul tuo Mac.

IL PROBLEMA CHE RISOLVE, misurato il 2026-09-14
    Il Direttore ha passato due sere a non riuscire ad aprire `cyberboomer.io`.
    Ogni misura diceva che la frase era giusta; la porta diceva «non si apre».

    Ma la domanda vera non era «come apro la porta»: era «voglio usare il mio
    banco di lavoro». E dietro quella porta ci sono i SUOI file — 14 verdetti,
    21 case, 11 strumenti — che `build_porta.py` non custodisce: LEGGE, da
    `docs/data/`, dalle cartelle e dagli script, e poi cifra.

    📜 Stava cercando di aprire con una chiave una cassaforte di cui possiede
       gia' il contenuto.

    La cifratura serve a UNA cosa: che uno sconosciuto di passaggio su
    cyberboomer.io non legga il banco. A lui, sul suo Mac, non serve a niente.

COSA FA
    Costruisce gli STESSI blocchi di `build_porta.py`, con le STESSE funzioni,
    e genera la STESSA pagina — poi le mette dentro un pezzetto di JavaScript
    che apre il lucchetto da solo. Nessuna frase da ricordare, nessun
    Portachiavi, nessuna rete.

    Non e' una pagina nuova: e' la stessa, che non chiede il permesso.

DOVE SCRIVE, E PERCHE' LI'
    `~/Desktop/BANCO-DI-LAVORO.html` — FUORI dal repo, di proposito.
    Quel file contiene il banco in chiaro: dentro un repo sarebbe a un `git add`
    di distanza dall'essere pubblico. Fuori, non puo' succedere per sbaglio.
    ⛔ Lo script si RIFIUTA di scrivere dentro una cartella che ha un `.git`.

COSA NON FA
    Non tocca `docs/index.html`: la porta pubblica resta cifrata com'e'.
    Non legge e non scrive il Portachiavi. Non va in rete. Non scrive in git.

USO
    python3 scripts/banco_aperto.py                 # sul Desktop
    python3 scripts/banco_aperto.py <percorso.html> # dove dici tu (fuori da un repo)

— creato da D.R.A.G.O., 2026-09-14
"""
import json
import os
import secrets
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_porta as bp

PREDEFINITO = os.path.join(os.path.expanduser("~"), "Desktop", "BANCO-DI-LAVORO.html")

# Il JS che apre il lucchetto da solo. Usa gli stessi id della pagina
# (`frase`, `apri`): non riscrive la logica, la aziona.
APRI_DA_SOLO = """
<script>
/* Questa copia vive solo sul tuo Mac e si apre da sola: la frase qui sotto
   serve al motore della pagina, non a te, e cambia a ogni rigenerazione. */
(function () {
  var f = document.getElementById('frase'), b = document.getElementById('apri');
  if (!f || !b) return;
  f.value = %s;
  b.click();
})();
</script>
"""


def fuori_da_un_repo(percorso: str) -> None:
    """Un file col banco in chiaro dentro un repo e' a un `git add` dall'essere
    pubblico. Meglio un rifiuto secco che una svista."""
    d = os.path.dirname(os.path.abspath(percorso)) or "."
    p = d
    while True:
        if os.path.isdir(os.path.join(p, ".git")):
            raise SystemExit(
                f"✗ {percorso} sta dentro un repo git ({p}).\n"
                "  Questo file contiene il banco IN CHIARO: dentro un repo e' a un\n"
                "  `git add` di distanza dall'essere pubblico. Scegli un posto fuori\n"
                "  (il Desktop va benissimo)."
            )
        su = os.path.dirname(p)
        if su == p:
            return
        p = su


def main() -> int:
    uscita = sys.argv[1] if len(sys.argv) > 1 else PREDEFINITO
    fuori_da_un_repo(uscita)

    verdetti = bp.leggi_verdetti()
    blocchi = {
        "stato": bp.blocco_stato(verdetti),
        "strumenti": bp.blocco_strumenti(),
        "chiavi": bp.blocco_chiavi(),
        "squadra": bp.blocco_squadra(),
        "note": bp.blocco_note(),
        "prompt": bp.blocco_prompt(),
        "digest": bp.blocco_digest(),
        "pr": bp.blocco_pr(),
        "numeri": bp.blocco_numeri(),
        "moviola": bp.blocco_moviola(),
        "sessioni": bp.blocco_sessioni(),
    }

    # Una frase usa-e-getta, diversa a ogni giro: il motore della pagina vuole
    # una chiave, ma qui non e' un segreto e nessuno deve ricordarla.
    frase = secrets.token_urlsafe(24)
    payload = bp.costruisci_payload(blocchi, frase, None, True)

    html = bp.pagina(payload)
    iniezione = APRI_DA_SOLO % json.dumps(frase)
    if "</body>" not in html:
        raise SystemExit("✗ il modello di pagina non ha </body>: non so dove agganciarmi.")
    html = html.replace("</body>", iniezione + "</body>", 1)

    os.makedirs(os.path.dirname(os.path.abspath(uscita)), exist_ok=True)
    with open(uscita, "w", encoding="utf-8") as f:
        f.write(html)

    s = blocchi["stato"]
    print(f"✓ {uscita}")
    print(f"  {len(html):,}".replace(",", ".") + " byte · si apre da solo, nessuna frase")
    for c in (s.get("cifre") or [])[:4]:
        print(f"  {c.get('n')} {c.get('etichetta')}")
    print("\n  Aprilo con un doppio clic. La porta pubblica su cyberboomer.io")
    print("  resta cifrata: questo file non esce dal tuo Mac.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
