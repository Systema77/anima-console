#!/bin/bash
# prova-race-passo2.sh — il passo 2 di misura-catena.yml regge una race VERA?
#
# IL GUASTO DA CUI NASCE (20/09): fra `actions/checkout` e `git push` il ramo
# remoto si era mosso, e il run e' morto con «! [rejected] HEAD -> main (fetch
# first)» dopo aver fatto il commit dd3015b. Il rimedio e' un ciclo che rifa'
# fetch, reset, misura e push. Questo file prova che il rimedio funziona, e che
# NON funziona prendendo scorciatoie.
#
# SI PROVA IN DUE SENSI, che e' la regola di casa:
#   ① con una race vera  -> il primo push viene respinto, il secondo pubblica,
#                           e il commit dell'altro RESTA (non e' stato forzato via)
#   ② senza race         -> pubblica al primo tentativo, senza giri a vuoto
#
# COSA COGLIE DAVVERO, misurato e non supposto. Avevo scritto qui che il caso ①
# «fallirebbe se qualcuno rimettesse --force»: FALSO, provato il 20/09.
#   · `--force` con il fetch+reset davanti  -> il banco resta VERDE, e ha ragione:
#     la storia che si spinge contiene gia' il commit dell'altro, quindi forzare
#     non cancella niente. Il force e' inutile, non pericoloso.
#   · `--force` SENZA il fetch+reset        -> il banco diventa ROSSO: «PERSO il
#     lavoro dell'altro», uscita 1. Ed e' proprio la scorciatoia che uno prende
#     quando ha fretta: «il push non passa, ci metto --force».
# 📜 La riga pericolosa non era il force: era togliere il reset. Un collaudo che
#    dichiara cosa coglie senza averlo provato descrive le proprie intenzioni.
#
# USO:  bash scripts/prova-race-passo2.sh     # esce 0 se tutti e due i sensi tengono
#
# — creato da SQUELCH, 2026-09-20
set -uo pipefail

# Il passo 2 del workflow, identico nella sostanza. Se cambi il workflow,
# cambia anche qui — e se i due divergono, questo file smette di provare
# il workflow e inizia a provare se stesso.
passo2() {
  local branch=$1
  for tentativo in 1 2 3; do
    git fetch -q --no-tags origin "$branch"
    git reset -q --hard FETCH_HEAD
    sh scripts/misura_catena.py
    sh scripts/regia_scrivania.py
    if [ -z "$(git status --porcelain -- docs/regia/index.html)" ]; then
      echo "  = gia' aggiornata"; return 0
    fi
    git add -- docs/regia/index.html
    git commit -q -m "La catena misurata dal runner" -- docs/regia/index.html
    if git push -q origin "HEAD:${branch}" 2>/dev/null; then
      echo "  ✓ pubblicato al tentativo ${tentativo}"
      TENTATIVI=$tentativo; return 0
    fi
  done
  return 1
}

# Un deposito finto con un'origine, come su GitHub.
scena() {
  local d=$1 con_race=$2
  rm -rf "$d"; mkdir -p "$d"; cd "$d"
  git init -q --bare origine.git
  git clone -q origine.git casa 2>/dev/null; cd casa; git checkout -qb main
  git config user.email p@p; git config user.name p
  mkdir -p docs/regia scripts
  echo "pagina v0" > docs/regia/index.html
  # I due generatori, ridotti all'osso: scrivono una misura che cambia ogni volta.
  printf '#!/bin/sh\necho "misura $(date +%%s%%N)" > docs/regia/index.html\n' > scripts/misura_catena.py
  printf '#!/bin/sh\necho "scrivania" >> docs/regia/index.html\n' > scripts/regia_scrivania.py
  chmod +x scripts/*.py
  git add -A; git commit -qm base; git push -q -u origin main

  [ "$con_race" = "si" ] || return 0
  # LA RACE: al primo push, un altro arriva un attimo prima.
  # ⚠️ `env -u GIT_DIR …`: un hook EREDITA GIT_DIR e GIT_INDEX_FILE, e senza
  # ripulirli ogni git qui dentro opera sul repo sbagliato. Senza questa riga la
  # race non avviene affatto e il banco dichiara un guasto che non c'e' — mi e'
  # successo, e il primo verdetto rosso era del banco, non del workflow.
  cat > .git/hooks/pre-push <<H
#!/bin/sh
[ -f .git/race-fatta ] && exit 0
touch .git/race-fatta
T=\$(mktemp -d)
env -u GIT_DIR -u GIT_INDEX_FILE -u GIT_WORK_TREE -u GIT_PREFIX \\
  git clone -q --branch main "$d/origine.git" "\$T/x"
env -u GIT_DIR -u GIT_INDEX_FILE -u GIT_WORK_TREE -u GIT_PREFIX sh -c "
  cd \$T/x
  git config user.email a@a; git config user.name altro
  echo 'lavoro di un altro' > ALTRO.txt
  git add ALTRO.txt
  git commit -qm 'commit di un altro, arrivato prima'
  git push -q origin main"
H
  chmod +x .git/hooks/pre-push
}

D=$(mktemp -d); ESITI=(); TENTATIVI=0
dillo() { ESITI+=("$1"); [ "$1" = ok ] && echo "  ✅ $2" || echo "  🔴 $2"; }

echo
echo "◉ PROVA DEL PASSO 2 — il retry regge una race, e non calpesta nessuno"
echo
echo "① con una race vera"
scena "$D/a" si >/dev/null 2>&1
passo2 main
cd "$D/a"; git clone -q --branch main origine.git v
[ -f v/ALTRO.txt ] && dillo ok "il commit dell'altro e' ancora li' (nessun --force)" \
                   || dillo no "PERSO il lavoro dell'altro"
grep -q misura v/docs/regia/index.html && dillo ok "la pagina misurata e' pubblicata" \
                                       || dillo no "la pagina non e' uscita"
[ "$TENTATIVI" = 2 ] && dillo ok "ha ripubblicato al secondo tentativo, non al primo" \
                     || dillo no "tentativi: $TENTATIVI (atteso 2: il primo deve fallire)"

echo
echo "② senza race"
TENTATIVI=0
scena "$D/b" no >/dev/null 2>&1
passo2 main
[ "$TENTATIVI" = 1 ] && dillo ok "pubblica al primo tentativo, nessun giro a vuoto" \
                     || dillo no "tentativi: $TENTATIVI (atteso 1)"

cd /; rm -rf "$D"
echo
if printf '%s\n' "${ESITI[@]}" | grep -q no; then
  echo "  ⛔ il passo 2 NON e' affidabile: non metterlo in produzione."
  exit 1
fi
echo "  ${#ESITI[@]}/${#ESITI[@]} — il retry vince la race e lascia stare il lavoro degli altri."
exit 0
