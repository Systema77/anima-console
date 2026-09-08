# squadra/rinascita/ — i prompt che il Direttore lancia, in un posto solo

**Ordine del Direttore, 08/09:** *«voglio usare SOLO la regia. Vorrei trovare tutto e
solo lì. Anche i prompt di rinascita.»*

Da oggi vale una regola sola: **un prompt esiste solo se sta qui.** Questa cartella è la
sorgente della sezione «La scrivania» di `cyberboomer.io/regia/`: il runner
(`.github/workflows/misura-catena.yml` → `scripts/regia_scrivania.py`) la legge tre volte
al giorno e a ogni push che la tocca, e riscrive la pagina fra i marcatori. Nessuno incolla
più un prompt nell'HTML a mano.

**Perché.** Fino all'08/09 la regia aveva due prompt incollati a mano, e il primo era già
vecchio di un lotto: diceva «lo schermo del meteo» mentre il lotto vero era la costellazione.
Il Direttore ha copiato quello. *Una scritta dice una cosa, l'impianto ne fa un'altra, e
nessuno riprova.* Qui la scritta **è** l'impianto.

## Il formato — un file per prompt, `NOME.md`

```
agente: D.R.A.G.O.
titolo: rinascita — il lotto della costellazione
lotto: 08/09 · una riga sola su cosa fa questa sessione
modello: Opus
aggiornato: 2026-09-08
come: chat nuova su claude.ai/code con i repo attaccati · effort high

=== INIZIO ===
…il prompt, esattamente come va incollato…
=== FINE ===
```

- Le righe `chiave: valore` in testa sono i metadati; `aggiornato` è la data che compare in
  regia (eseguire `date` prima di scriverla). Il blocco fra `=== INIZIO ===` e `=== FINE ===`
  è ciò che il bottone «copia» mette negli appunti, righe di cornice comprese.
- Il nome del file è il nome che compare in regia (`DRAGO.md` → D.R.A.G.O. lo dice il campo
  `agente`; il file serve a ordinare).

## Le tre regole

1. **La guardia privacy passa su ogni prompt** (`scripts/guardia_privacy.py`): un reperto
   grave lo tiene FUORI dalla regia, e la pagina dice che uno è fermo senza dire cosa lo
   ha fermato. Questo repo è pubblico: niente nomi di persone private, niente percorsi del
   deposito privato, niente chiavi. Un prompt è **metodo**, non un segreto — se non può
   stare in piazza, non è un prompt da regia: resta nel cervello, e lo si dice.
2. **Chi cambia un prompt lo cambia QUI**, non in una copia. Le copie nel repo del cervello
   (`comuni/RINASCITA-*.md`) da oggi sono puntatori: dicono di venire qui.
3. **Un prompt vecchio si toglie**, non si lascia. Se un agente non ha un lotto, il suo file
   non c'è: la scrivania mostra ciò che si lancia oggi, non un archivio.

Per aggiornare la pagina senza aspettare il runner: `python3 scripts/regia_scrivania.py`
(da dentro il repo; `--mostra` stampa e non scrive). Poi la PR: `squadra/` la fonde
D.R.A.G.O.; ma la riga che compare in `docs/` la scrive il runner, che è già autorizzato a
farlo (07/09, «Misura della catena»).

— creato da D.R.A.G.O., 2026-09-08
