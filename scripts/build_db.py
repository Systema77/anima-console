#!/usr/bin/env python3
"""Rigenera docs/data/db.js dai file docs/data/NNNN-*.json.

Un verdetto = un file JSON. Aggiungi il file, lancia questo script, pusha.
    python3 scripts/build_db.py

— creato da KIROSHI//OR, 2026-07-19
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "docs", "data")
OUT = os.path.join(DATA, "db.js")

RICHIESTI = ("titolo", "oggetto", "punteggio", "ambito", "etichetta", "verdetto", "data_verifica")

# `ambito` dice COSA misura il punteggio, e senza di lui il numero non significa
# niente: un 70 di affidabilità e un 70 di verità sono scale diverse, e messi
# accanto sembrano confrontabili. Vocabolario CHIUSO — se serve un valore nuovo
# si discute, non si allarga di nascosto.
#
# ⚠️ PERCHE' E' OBBLIGATORIO E NON FACOLTATIVO. La regola è stata ratificata il
# 10/08. Tre verdetti sono nati senza il campo il 29/08; altri sette il 09/09.
# Cioè: finché restava un campo gentile, il debito RICRESCEVA più in fretta di
# quanto lo si riparasse — dieci verdetti nuovi, zero con l'ambito. Un promemoria
# non regge una regola: la regge un cancello. — KIROSHI//OR, 2026-09-10
AMBITI = ("affidabilita", "verita", "non_applicabile")


def main() -> int:
    files = sorted(glob.glob(os.path.join(DATA, "[0-9]*.json")))
    if not files:
        print("Nessun verdetto trovato in docs/data/")
        return 1

    verdetti, problemi = [], []
    for path in files:
        nome = os.path.basename(path)
        try:
            with open(path, encoding="utf-8") as fh:
                v = json.load(fh)
        except json.JSONDecodeError as err:
            problemi.append(f"{nome}: JSON non valido — {err}")
            continue

        # `in (None, "", [])` e non `not v.get(k)`: il punteggio 0 è falso per
        # Python, e 0 è la condanna massima («quasi certamente falso»). Con la
        # prova di falsità l'unico verdetto che il cancello respingeva era la
        # peggiore bocciatura possibile. — KIROSHI//OR, 2026-08-10
        mancanti = [k for k in RICHIESTI if v.get(k) in (None, "", [])]
        if mancanti:
            problemi.append(f"{nome}: campi mancanti — {', '.join(mancanti)}")
            continue

        # Il punteggio dev'essere un numero in scala: `"ottimo"` faceva esplodere
        # lo script alla riga della media — dopo aver già scritto db.js.
        pt = v["punteggio"]
        if isinstance(pt, bool) or not isinstance(pt, (int, float)):
            problemi.append(f"{nome}: punteggio non numerico — {pt!r}")
            continue
        if not 0 <= pt <= 100:
            problemi.append(f"{nome}: punteggio fuori scala 0-100 — {pt}")
            continue

        # Un ambito inventato è peggio di un ambito assente: assente si vede,
        # inventato passa per buono e porta il numero su una scala che nessuno
        # ha definito.
        if v["ambito"] not in AMBITI:
            problemi.append(f"{nome}: ambito fuori vocabolario — {v['ambito']!r} "
                            f"(ammessi: {', '.join(AMBITI)})")
            continue

        if not v.get("fonti"):
            problemi.append(f"{nome}: nessuna fonte — regola editoriale violata")
            continue

        # Permalink: l'id è il NNNN del nome file — generato, mai scritto a mano.
        v["id"] = re.match(r"\d+", nome).group(0)

        verdetti.append(v)

    if problemi:
        print("Verdetti scartati:")
        for p in problemi:
            print("  ✗", p)

    # più recenti in alto
    verdetti.sort(key=lambda v: v.get("data_verifica", ""), reverse=True)

    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write("window.KIROSHI_DB = ")
        json.dump(verdetti, fh, ensure_ascii=False, indent=2)
        fh.write(";\n")

    media = round(sum(v["punteggio"] for v in verdetti) / len(verdetti)) if verdetti else 0
    print(f"✓ db.js rigenerato — {len(verdetti)} verdetti · punteggio medio {media}/100")
    return 0 if not problemi else 2


if __name__ == "__main__":
    sys.exit(main())
