#!/usr/bin/env python3
"""LA FRASE ERA CORRETTA, E LA PORTA DICEVA DI NO — questo dice perche'.

IL PROBLEMA CHE MISURA
    La porta chiude con AES-GCM e apre con la frase. Ma «la frase» non e' una
    parola: e' una sequenza di BYTE, e nella casa ce ne sono tre versioni della
    stessa parola.

      build_porta.py  ← Portachiavi        r.stdout.strip()      RIPULISCE
      build_porta.py  ← REGIA_PASSPHRASE   os.environ.get(...)   non ripulisce
      la pagina, nel browser               campo.value           non ripulisce

    Uno spazio in coda, o una lettera accentata che macOS consegna SCOMPOSTA
    (`e`+accento invece del carattere unico), e sono due chiavi diverse da una
    frase che a occhio e' identica. La porta risponde «non si apre», che e' lo
    stesso messaggio della frase sbagliata: manda a cercare nel posto sbagliato.

COSA FA
    Prende la frase dal Portachiavi (o da REGIA_PASSPHRASE), ne costruisce le
    forme possibili, e prova OGNUNA contro il payload gia' pubblicato. Dice
    QUALE forma apre. Se nessuna apre, la frase non e' quella che ha chiuso.

COSA NON FA
    Non stampa mai la frase, in nessuna forma. Non scrive niente: apre i file
    in sola lettura. Non tocca il Portachiavi. Non va in rete.

USO
    python3 scripts/prova_frase.py            # la PORTA   — docs/index.html
    python3 scripts/prova_frase.py --regia    # la PLANCIA — docs/regia/index.html

— creato da SQUELCH, 2026-09-13
"""
import base64, hashlib, json, os, re, subprocess, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "scripts"))
import aesgcm_puro

SUPERFICI = {
    "porta":   ("docs/index.html",       r'id="PORTA_PAYLOAD"[^>]*>(.*?)</script>'),
    "plancia": ("docs/regia/index.html", r'id="regia-cifrato"[^>]*>(.*?)</script>'),
}


def frase_grezza():
    """Come la prenderebbe build_porta.py, ma SENZA ripulirla: e' il grezzo che
    serve per capire se la ripulitura e' proprio il punto."""
    if os.environ.get("REGIA_PASSPHRASE"):
        return os.environ["REGIA_PASSPHRASE"], "REGIA_PASSPHRASE"
    r = subprocess.run(["bash", os.path.join(ROOT, "squadra", "chiavi.sh"), "leggi", "regia"],
                       capture_output=True, text=True)
    if r.returncode != 0 or not r.stdout:
        sys.exit("✗ nessuna frase: ne' REGIA_PASSPHRASE ne' il Portachiavi.\n"
                 "  bash squadra/chiavi.sh setta regia")
    # `security -w` aggiunge sempre un a-capo suo: quello non e' della frase.
    return r.stdout[:-1] if r.stdout.endswith("\n") else r.stdout, "Portachiavi"


def forme(grezza):
    """Le versioni plausibili della stessa frase, senza duplicati."""
    viste, fuori = set(), []
    for nome, testo in (
        ("come arriva",              grezza),
        ("senza spazi ai bordi",     grezza.strip()),
        ("NFC (accenti composti)",   unicodedata.normalize("NFC", grezza.strip())),
        ("NFD (accenti scomposti)",  unicodedata.normalize("NFD", grezza.strip())),
    ):
        if testo and testo not in viste:
            viste.add(testo)
            fuori.append((nome, testo))
    return fuori


def apre(testo, payload):
    chiave = hashlib.pbkdf2_hmac("sha256", testo.encode("utf-8"),
                                 base64.b64decode(payload["salt"]), payload["iter"], 32)
    primo = payload["blocchi"][0]
    try:
        aesgcm_puro.decifra(chiave, base64.b64decode(primo["iv"]), base64.b64decode(primo["d"]))
        return True
    except Exception:
        return False


def main():
    quale = "plancia" if "--regia" in sys.argv else "porta"
    percorso, schema = SUPERFICI[quale]
    m = re.search(schema, open(os.path.join(ROOT, percorso), encoding="utf-8").read(), re.S)
    if not m:
        sys.exit(f"✗ {percorso}: non trovo il blocco cifrato.")
    payload = json.loads(m.group(1))

    grezza, da = frase_grezza()
    print(f"superficie : {quale} — {percorso}")
    print(f"sale       : {payload['salt'][:14]}…  ·  {payload['iter']:,} giri  ·  "
          f"{len(payload['blocchi'])} blocchi".replace(",", "."))
    print(f"frase da   : {da}\n")

    vincitrice = None
    for nome, testo in forme(grezza):
        ok = apre(testo, payload)
        vincitrice = vincitrice or (ok and nome)
        print(f"  {'✓' if ok else '·'}  {nome:<26} {len(testo.encode('utf-8')):>3} byte, "
              f"{len(testo):>3} caratteri")

    print()
    if vincitrice:
        print(f"→ APRE con «{vincitrice}».")
        if vincitrice != "come arriva":
            print("  Quella che il browser riceve e' «come arriva»: e' li' la differenza.")
    else:
        print("→ NESSUNA forma apre. La frase nel Portachiavi NON e' quella che ha chiuso\n"
              "  questa superficie. Va rifatta la serratura.")
    return 0 if vincitrice else 1


if __name__ == "__main__":
    sys.exit(main())
