#!/usr/bin/env python3
"""
COSA FA — costruisce LA SCRIVANIA della regia (`docs/regia/index.html`, fra i
marcatori REGIA:SCRIVANIA): tutto e solo quello che aspetta il Direttore, letto
dai file e dall'API pubblica, mai scritto a mano.
  ① i prompt da lanciare        ← squadra/rinascita/*.md  (un prompt esiste solo se sta lì)
  ② le PR aperte sui repo di casa ← API pubblica di GitHub sui repo PUBBLICI (nessun token)
  ③ le decisioni che aspettano lui ← squadra/DECISIONI.md, le righe `- [ ]`

PERCHÉ ESISTE — ordine del Direttore dell'08/09: «voglio usare SOLO la regia:
trovare tutto e solo lì, anche i prompt di rinascita». Fino a quel giorno i
prompt in regia erano una copia incollata a mano dentro l'HTML, e quella copia
era già vecchia di un lotto: diceva «lo schermo del meteo» mentre il lotto vero
era la costellazione. Il Direttore ha copiato quella. 📜 Una scritta dice una
cosa, l'impianto ne fa un'altra, e nessuno riprova: qui la scritta È l'impianto.

FIN DOVE ARRIVA
  · Solo GET sull'API pubblica, sui repo pubblici: il repo del cervello è privato
    e da qui non si vede. La scrivania lo DICE, non finge zero. Se l'API non
    risponde, la riga dice «non lette» e la pagina si scrive lo stesso: i prompt
    e le decisioni vengono da file, e non hanno bisogno della rete.
  · Ogni prompt passa dalla guardia privacy (`guardia_privacy.py`): un reperto
    grave lo tiene FUORI, e la pagina dice che uno è fermo senza dire cosa lo ha
    fermato. Poi la guardia rilegge il blocco intero prima di scriverlo.
  · Sui file è idempotente: stesso contenuto, stessi byte. Le PR e l'ora della
    lettura cambiano a ogni giro, come la catena.
  · Scrive SOLO fra i marcatori. Se mancano, si ferma: non li rimette lui.

USO
    python3 scripts/regia_scrivania.py            # scrive in pagina
    python3 scripts/regia_scrivania.py --mostra   # stampa e non scrive
Il runner lo lancia da `.github/workflows/misura-catena.yml`, tre volte al giorno
e a ogni push che tocca i suoi file.

— creato da D.R.A.G.O., 2026-09-08
"""
import argparse
import datetime
import glob
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
RINASCITA = os.path.join(ROOT, "squadra", "rinascita")
DECISIONI = os.path.join(ROOT, "squadra", "DECISIONI.md")

ORG = "Systema77"
# I repo PUBBLICI di casa: l'API li legge senza token. Il cervello non c'è apposta:
# è privato, e una riga in pagina lo dice invece di far sembrare vuota la sua coda.
REPO_PUBBLICI = ["anima-console", "systema77-site", "animagame-site",
                 "cyberboomer-ninja-site", "anima-solar-site"]
AGENTE = "regia-scrivania/1 (+https://cyberboomer.io/regia/)"
ATTESA = 20

sys.path.insert(0, QUI)
import guardia_privacy                                   # noqa: E402


# ── ① i prompt ────────────────────────────────────────────────────────────────
def leggi_prompt():
    """Un file per prompt: metadati `chiave: valore` in testa, poi il blocco fra
    `=== INIZIO ===` e `=== FINE ===`. Il blocco si copia con la cornice."""
    voci, fermi = [], 0
    for p in sorted(glob.glob(os.path.join(RINASCITA, "*.md"))):
        nome = os.path.basename(p)
        if nome.upper() == "LEGGIMI.MD":           # il manuale ha un esempio di cornice dentro
            continue
        testo = open(p, encoding="utf-8").read()
        testa, cornice, resto = testo.partition("=== INIZIO ===")
        fine = resto.find("=== FINE ===")
        meta = {}
        for riga in testa.splitlines():
            m = re.match(r"^([a-z]+):\s*(.+?)\s*$", riga)
            if m:
                meta[m.group(1)] = m.group(2)
        if not cornice or fine < 0 or not meta.get("agente"):
            print(f"  ⚠ {nome}: manca `agente:` o la cornice INIZIO/FINE — saltato")
            continue
        gravi = [r for r in guardia_privacy.scandaglia(testo, nome) if r.grave]
        if gravi:
            # Si dice CHE è fermo, mai il perché: ripetere il reperto lo porterebbe in piazza.
            fermi += 1
            print(f"  ⛔ {nome}: fermato dalla guardia privacy ({len(gravi)} reperti) — non entra in regia")
            continue
        voci.append({
            "file": nome, "agente": meta["agente"], "titolo": meta.get("titolo", ""),
            "lotto": meta.get("lotto", ""), "modello": meta.get("modello", ""),
            "aggiornato": meta.get("aggiornato", ""), "come": meta.get("come", ""),
            "blocco": ("=== INIZIO ===" + resto[:fine] + "=== FINE ===").strip(),
        })
        print(f"  ✓ {nome}: {meta['agente']} · aggiornato {meta.get('aggiornato', '?')}")
    voci.sort(key=lambda v: v["aggiornato"], reverse=True)
    return voci, fermi


# ── ② le PR ───────────────────────────────────────────────────────────────────
def chiedi(url):
    req = urllib.request.Request(url, headers={"User-Agent": AGENTE,
                                               "Accept": "application/vnd.github+json"})
    try:
        with urllib.request.urlopen(req, timeout=ATTESA) as r:
            return r.status, json.loads(r.read().decode("utf-8")), None
    except urllib.error.HTTPError as e:
        return e.code, None, f"l'API ha risposto {e.code}"
    except Exception as e:                                # noqa: BLE001 — si riporta, non si nasconde
        return 0, None, type(e).__name__


def leggi_pr():
    voci, saltati = [], []
    for repo in REPO_PUBBLICI:
        cod, dati, guasto = chiedi(f"https://api.github.com/repos/{ORG}/{repo}/pulls?state=open&per_page=50")
        if cod != 200 or not isinstance(dati, list):
            saltati.append(f"{repo} ({guasto or cod})")
            print(f"  ⚠ {repo}: PR non lette — {guasto or cod}")
            continue
        for pr in dati:
            voci.append({"repo": repo, "n": pr.get("number"), "titolo": (pr.get("title") or "")[:140],
                         "bozza": bool(pr.get("draft")), "link": pr.get("html_url", ""),
                         "aperta": (pr.get("created_at") or "")[:10],
                         "tocco": (pr.get("updated_at") or "")[:10]})
        print(f"  ✓ {repo}: {len(dati)} PR aperte")
    voci.sort(key=lambda v: (v["tocco"], v["n"] or 0), reverse=True)
    return voci, saltati


# ── ③ le decisioni ────────────────────────────────────────────────────────────
def leggi_decisioni():
    """Le righe `- [ ] data · chi · cosa · dove`. `dove` è l'ultimo pezzo, se ce
    n'è un quarto; una domanda con un «·» dentro non si spezza."""
    if not os.path.exists(DECISIONI):
        return [], "squadra/DECISIONI.md non c'è: le decisioni non sono state lette"
    aperte = []
    for riga in open(DECISIONI, encoding="utf-8"):
        if not riga.startswith("- [ ] "):
            continue
        pezzi = [x.strip() for x in riga[6:].split(" · ")]
        if len(pezzi) < 3:
            print(f"  ⚠ decisione malformata, saltata: {riga.strip()[:60]}")
            continue
        dove = pezzi[-1] if len(pezzi) >= 4 else ""
        cosa = " · ".join(pezzi[2:-1]) if len(pezzi) >= 4 else pezzi[2]
        aperte.append({"quando": pezzi[0], "chi": pezzi[1], "cosa": cosa, "dove": dove})
    print(f"  ✓ decisioni aperte: {len(aperte)}")
    return aperte, None


# ── la pagina ─────────────────────────────────────────────────────────────────
def componi(prompt, fermi, pr, saltati, decisioni, guasto_dec, quando):
    e = html.escape
    p = ['<section class="piazza" id="scrivania">']

    p.append(f'<div class="pz-cap">prompt da lanciare <span class="pz-n">{len(prompt)}</span></div>')
    for i, v in enumerate(prompt):
        pid = f"sc-p-{i}"
        meta = " · ".join(x for x in (v["lotto"], v["modello"],
                                      f"aggiornato {v['aggiornato']}" if v["aggiornato"] else "") if x)
        p.append(
            f'<article class="pr"><div class="pr-t"><span class="pr-n">{e(v["agente"])} — {e(v["titolo"])}</span>'
            f'<button type="button" class="copia" data-per="{pid}">copia</button></div>'
            f'<div class="pr-m">{e(meta)}</div>'
            + (f'<div class="pr-m">{e(v["come"])}</div>' if v["come"] else "")
            + f'<pre id="{pid}">{e(v["blocco"])}</pre></article>')
    if not prompt:
        p.append('<div class="rg"><div class="rg-m">Nessun prompt in squadra/rinascita/: '
                 'oggi non c\'è niente da lanciare.</div></div>')
    if fermi:
        p.append(f'<div class="pz-pie">{fermi} prompt fermat{"o" if fermi == 1 else "i"} dalla guardia '
                 f'privacy: rest{"a" if fermi == 1 else "ano"} nel cervello finché non '
                 f'{"è riscritto" if fermi == 1 else "sono riscritti"}.</div>')

    p.append(f'<div class="pz-cap">PR aperte sui repo di casa <span class="pz-n">{len(pr)}</span></div>')
    for v in pr:
        colore, parola = ("warn", "bozza") if v["bozza"] else ("ok", "pronta")
        p.append(
            f'<div class="rg"><div class="rg-t"><span class="rg-n"><a href="{e(v["link"])}" rel="noopener" '
            f'target="_blank">{e(v["repo"])} #{v["n"]}</a></span><span class="sem {colore}">{parola}</span></div>'
            f'<div class="rg-m">{e(v["titolo"])}</div>'
            f'<div class="rg-q">aperta il {e(v["aperta"])} · ultimo tocco {e(v["tocco"])}</div></div>')
    if not pr and not saltati:
        p.append('<div class="rg"><div class="rg-m">Nessuna PR aperta sui repo pubblici.</div></div>')
    nota = ("Le PR che toccano docs/ o una pagina di un sito le firmi tu; le altre le fonde "
            "D.R.A.G.O. e te lo dice in bacheca. Il repo del cervello è privato: le sue PR da qui "
            "non si vedono.")
    if saltati:
        nota += " Non lette: " + ", ".join(saltati) + "."
    p.append(f'<div class="pz-pie">{e(nota)} · PR lette {e(quando)}</div>')

    p.append(f'<div class="pz-cap">decisioni che aspettano te <span class="pz-n">{len(decisioni)}</span></div>')
    for d in decisioni:
        p.append(
            f'<div class="rg"><div class="rg-t"><span class="rg-n">{e(d["chi"])}</span>'
            f'<span class="sem warn">{e(d["quando"])}</span></div>'
            f'<div class="rg-m">{e(d["cosa"])}</div>'
            + (f'<div class="rg-q">{e(d["dove"])}</div>' if d["dove"] else "") + '</div>')
    if guasto_dec:
        p.append(f'<div class="rg"><div class="rg-m">{e(guasto_dec)}</div></div>')
    elif not decisioni:
        p.append('<div class="rg"><div class="rg-m">Nessuna decisione aperta.</div></div>')

    p.append('<div class="pz-pie">Scrivania composta da scripts/regia_scrivania.py: prompt da '
             'squadra/rinascita/, decisioni da squadra/DECISIONI.md, PR dall\'API pubblica di GitHub. '
             'Una cosa che aspetta te e non è qui non è stata messa nel posto giusto.</div>')
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
    ap = argparse.ArgumentParser(description="La scrivania della regia: prompt, PR, decisioni")
    ap.add_argument("--mostra", action="store_true", help="compone e stampa, non tocca la pagina")
    args = ap.parse_args()

    print("prompt (squadra/rinascita/):")
    prompt, fermi = leggi_prompt()
    print("decisioni (squadra/DECISIONI.md):")
    decisioni, guasto_dec = leggi_decisioni()
    print("PR aperte (API pubblica):")
    pr, saltati = leggi_pr()
    quando = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d · %H:%M UTC")

    blocco = componi(prompt, fermi, pr, saltati, decisioni, guasto_dec, quando)
    if args.mostra:
        print("\n" + re.sub(r"<[^>]+>", " ", blocco))
        print("(--mostra: non ho toccato la pagina)")
        return 0

    # Ultima guardia, e non è di forma: questo blocco finisce in `docs/`, in chiaro.
    gravi = [r for r in guardia_privacy.scandaglia(blocco, "regia/scrivania") if r.grave]
    if gravi:
        for r in gravi:
            print(f"  ⛔ {r.cosa}: …{r.estratto}…")
        raise SystemExit("✗ la guardia privacy ferma la scrivania: quella roba non entra in docs/.")

    testo = open(PAGINA, encoding="utf-8").read()
    fuori = dentro(testo, "SCRIVANIA", blocco)
    if fuori == testo:
        print("= nessun cambiamento in pagina")
        return 0
    with open(PAGINA, "w", encoding="utf-8") as fh:
        fh.write(fuori)
    print(f"✓ docs/regia/index.html — scrivania: {len(prompt)} prompt"
          f"{f' (+{fermi} fermi)' if fermi else ''} · {len(pr)} PR · {len(decisioni)} decisioni")
    return 0


if __name__ == "__main__":
    sys.exit(main())
