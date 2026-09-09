window.KIROSHI_DB = [
  {
    "titolo": "OpenAI — assetto proprietario, storico e modello di business",
    "oggetto": "OpenAI: nata nel 2015 come ente non profit, dal 28 ottobre 2025 ricapitalizzata in due entità — la OpenAI Foundation (non profit, che mantiene il controllo) e la OpenAI Group PBC (public benefit corporation, il veicolo che opera e raccoglie capitale). Prodotti: ChatGPT, i modelli GPT, l'API per sviluppatori.",
    "domanda": "Domanda del Direttore (issue #44): «Vorrei un report sulla azienda. Con storico aziendale e sviluppo previsto… Vorrei capire il loro modello di business». Tradotta in domanda KIROSHI: l'assetto proprietario e i numeri che OpenAI dichiara sono verificabili da fonti indipendenti, e da cosa entrano davvero i soldi?",
    "modalita": "scava",
    "punteggio": 62,
    "etichetta": "ditta reale, assetto documentato, conti verificabili solo a metà",
    "verdetto": "OpenAI esiste, l'assetto è documentato e la ricostruzione è pubblica: fondata nel 2015 come non profit, nel 2019 si dà una struttura a profitto limitato che apre la porta a Microsoft, e il 28 ottobre 2025 completa la ricapitalizzazione in OpenAI Foundation (non profit, che controlla) + OpenAI Group PBC (l'operativa). Alla ricapitalizzazione Microsoft risulta al 27% circa (~135 miliardi di dollari) e la Foundation al 26% circa (~130 miliardi), su una valutazione intorno ai 500 miliardi. Fin qui il terreno è solido: la struttura è dichiarata dalla società stessa e riportata in modo concorde da più testate.\n\nDove il terreno cede è sui NUMERI. OpenAI è privata e non deposita bilanci pubblici certificati: tutto ciò che circola sui ricavi arriva da fughe di notizie e da stime di terzi, e le cifre NON concordano fra loro. Per il 2025 si legge un ricavo di 13,1 miliardi. Per il 2026 si legge sia un giro d'affari annualizzato di circa 40 miliardi (agosto) sia stime di 24-25 miliardi, e ad aprile 2026 la stampa riporta che la società ha MANCATO le proprie proiezioni di ricavi e crescita utenti. Una forbice del genere sullo stesso anno non è un dettaglio: è il segnale che il numero non è verificabile, non che sia falso.\n\nIl modello di business, per quel che è ricostruibile: la parte grossa sono gli abbonamenti a ChatGPT (consumer e aziendali), poi l'API a consumo per gli sviluppatori, poi accordi e partnership; nel 2026 compare anche la pubblicità. La stima più ricorrente è 65% abbonamenti / 25% API / 10% partnership, ma è una stima di terzi, non un dato di bilancio. Il punto che pesa di più non è quanto entra: è quanto è già stato PROMESSO in uscita. Gli impegni di calcolo dichiarati sono passati da un annunciato 1.400 miliardi a un obiettivo di spesa «intorno ai 600 miliardi entro il 2030», e i contratti coinvolgono Oracle (300 miliardi su cinque anni), Stargate con SoftBank e Oracle, AMD, Broadcom e NVIDIA. Un'azienda che deve alzare capitale in continuazione per onorare impegni di quella scala è per definizione più fragile del suo fatturato. A giugno 2026 ha depositato in forma non pubblica la documentazione per la quotazione: se l'IPO va avanti, per la prima volta ci saranno conti certificati — ed è il momento in cui questo verdetto andrà rifatto.\n\nDiritto di replica garantito: se OpenAI pubblica dati certificati che contraddicono quanto sopra, il punteggio si rivede.",
    "green_flags": [
      "Assetto societario dichiarato dalla società stessa in una pagina pubblica dedicata (openai.com/our-structure) e riportato in modo concorde da testate indipendenti diverse nella stessa data (28 ottobre 2025).",
      "Il controllo resta a un ente non profit (OpenAI Foundation): non è una promessa verbale, è la forma giuridica dichiarata nella ricapitalizzazione.",
      "Storico lungo e continuo, dal 2015 a oggi, con passaggi datati e verificabili (2015 non profit · 2019 profitto limitato e ingresso Microsoft · 2025 ricapitalizzazione in PBC).",
      "Gli investitori sono nomi identificabili e quotati (Microsoft, NVIDIA, Amazon, SoftBank): non capitali anonimi o veicoli opachi.",
      "Deposito non pubblico per la quotazione a giugno 2026: se l'IPO procede, i conti diventano certificati e controllabili da chiunque."
    ],
    "red_flags": [
      "Nessun bilancio pubblico certificato. Ogni cifra su ricavi e perdite è una fuga di notizie o una stima di terzi: né io né il lettore possiamo risalire a un documento depositato.",
      "Le cifre di ricavo 2026 che circolano si contraddicono fra loro (circa 40 miliardi annualizzati contro stime di 24-25 miliardi). Una forbice così larga sullo stesso anno significa che il numero NON è verificato.",
      "Ad aprile 2026 la stampa riporta che OpenAI ha mancato le proprie proiezioni di ricavi e di crescita utenti, con reazione negativa dei titoli dei fornitori (Oracle, AMD, Broadcom): il piano dichiarato e i risultati non coincidono.",
      "Impegni di spesa in calcolo di scala tale da superare di ordini di grandezza il fatturato, e già rivisti al ribasso una volta (da 1.400 miliardi annunciati a «circa 600 miliardi entro il 2030»). Un numero che cambia così tanto era un annuncio, non un piano.",
      "Dipendenza incrociata con i propri fornitori-azionisti: NVIDIA vende i chip E investe nella società che li compra, Microsoft è insieme socio al 27% e fornitore di cloud. È la struttura che la stampa finanziaria chiama «finanziamento circolare» e che rende difficile leggere la domanda reale.",
      "La ripartizione dei ricavi (abbonamenti/API/partnership) è una stima di analisti, non un dato aziendale: va letta come ordine di grandezza, non come numero."
    ],
    "fonti": [
      {
        "titolo": "Our Structure — pagina ufficiale OpenAI sull'assetto societario",
        "url": "https://openai.com/our-structure/",
        "tipo": "dichiarazione della società",
        "sostiene": "L'assetto in due entità: OpenAI Foundation (non profit, che controlla) e OpenAI Group PBC. È la fonte della società su sé stessa: va pesata come tale.",
        "autorevolezza": "alta sull'assetto giuridico, ma è parte in causa — non ho potuto aprire la pagina (dominio bloccato dal proxy in questa sessione)"
      },
      {
        "titolo": "OpenAI completes restructure, solidifying Microsoft as a major shareholder — CNBC, 28 ottobre 2025",
        "url": "https://www.cnbc.com/2025/10/28/open-ai-for-profit-microsoft.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Completamento della ricapitalizzazione e posizione di Microsoft come azionista rilevante.",
        "autorevolezza": "alta — testata finanziaria indipendente"
      },
      {
        "titolo": "OpenAI restructures into public-benefit firm, Microsoft takes 27% stake — Al Jazeera, 28 ottobre 2025",
        "url": "https://www.aljazeera.com/economy/2025/10/28/openai-restructures-into-public-benefit-firm-microsoft-takes-27-stake",
        "tipo": "stampa indipendente",
        "sostiene": "La quota Microsoft del 27% nella OpenAI Group PBC. Seconda fonte indipendente sulla stessa cifra.",
        "autorevolezza": "alta — riscontro incrociato su una cifra chiave"
      },
      {
        "titolo": "OpenAI reorg sets up $500 billion for-profit AI behemoth — Axios, 28 ottobre 2025",
        "url": "https://www.axios.com/2025/10/28/openai-completes-recapitalization",
        "tipo": "stampa indipendente",
        "sostiene": "Valutazione intorno ai 500 miliardi di dollari alla ricapitalizzazione e quota della Foundation.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "OpenAI resets spending expectations, tells investors compute target is around $600 billion by 2030 — CNBC, 20 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/20/openai-resets-spend-expectations-targets-around-600-billion-by-2030.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La revisione degli impegni di calcolo da 1.400 miliardi annunciati a circa 600 miliardi entro il 2030.",
        "autorevolezza": "alta — è la prova documentale che il numero annunciato è cambiato"
      },
      {
        "titolo": "OpenAI reportedly missed revenue targets. Shares of Oracle and these chip stocks are falling — CNBC, 28 aprile 2026",
        "url": "https://www.cnbc.com/2026/04/28/openai-reportedly-missed-revenue-targets-shares-of-oracle-and-these-chip-stocks-are-falling.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "OpenAI ha mancato le proprie proiezioni di ricavi e crescita utenti; reazione negativa dei titoli dei fornitori.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "OpenAI's tangled web of high-priced deals has some investors concerned — CNBC, 28 settembre 2025",
        "url": "https://www.cnbc.com/2025/09/28/a-look-at-openais-tangled-web-of-dealmaking.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La mappa degli accordi incrociati fra OpenAI, i suoi fornitori e i suoi investitori, e le preoccupazioni degli investitori.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "OpenAI announces $110 billion funding round with backing from Amazon, Nvidia, SoftBank — CNBC, 27 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/27/open-ai-funding-round-amazon.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Round da 110 miliardi con Amazon (50), NVIDIA (30), SoftBank (30). ⚠️ La pagina OpenAI corrispondente parla di 122 miliardi: le due cifre non coincidono e non ho potuto aprire nessuna delle due per capire perché.",
        "autorevolezza": "alta, ma con discrepanza dichiarata"
      },
      {
        "titolo": "OpenAI raises $122 billion to accelerate the next phase of AI — annuncio OpenAI",
        "url": "https://openai.com/index/accelerating-the-next-phase-ai/",
        "tipo": "dichiarazione della società",
        "sostiene": "La società dichiara 122 miliardi raccolti. Cifra diversa dai 110 riportati dalla stampa: entrambe sono qui, senza sceglierne una.",
        "autorevolezza": "media — parte in causa, e non apribile in questa sessione"
      },
      {
        "titolo": "OpenAI confidentially files for IPO — CNBC, 8 giugno 2026",
        "url": "https://www.cnbc.com/2026/06/08/openai-confidentially-files-for-ipo-prepping-wall-street-for-ai-debut.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Deposito non pubblico per la quotazione: è il fatto che, se procede, renderà i conti certificati e verificabili.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "OpenAI closes funding round at an $852 billion valuation — CNBC, 31 marzo 2026",
        "url": "https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Valutazione di 852 miliardi a fine marzo 2026, contro i circa 500 dell'ottobre 2025.",
        "autorevolezza": "alta"
      }
    ],
    "timeline": [
      {
        "data": "2015-12",
        "evento": "OpenAI nasce come organizzazione non profit."
      },
      {
        "data": "2019",
        "evento": "Si dota di una struttura a profitto limitato; entra Microsoft come investitore e fornitore di cloud."
      },
      {
        "data": "2025-10-28",
        "evento": "Completata la ricapitalizzazione: OpenAI Foundation (non profit, che controlla) + OpenAI Group PBC. Microsoft ~27% (~135 mld), Foundation ~26% (~130 mld), valutazione ~500 mld."
      },
      {
        "data": "2026-02-20",
        "evento": "OpenAI rivede gli impegni di calcolo: dagli annunciati 1.400 miliardi a un obiettivo di «circa 600 miliardi entro il 2030»."
      },
      {
        "data": "2026-02-27",
        "evento": "Annunciato un round da 110 miliardi (Amazon 50, NVIDIA 30, SoftBank 30). La società parla altrove di 122 miliardi."
      },
      {
        "data": "2026-03-31",
        "evento": "Round chiuso a una valutazione di 852 miliardi di dollari."
      },
      {
        "data": "2026-04-28",
        "evento": "La stampa riporta che OpenAI ha mancato le proprie proiezioni di ricavi e crescita utenti; scendono i titoli di Oracle, AMD e Broadcom."
      },
      {
        "data": "2026-06-08",
        "evento": "Deposito non pubblico della documentazione per la quotazione in borsa."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 44,
    "data_verifica": "2026-09-09",
    "id": "0008"
  },
  {
    "titolo": "Anthropic — assetto proprietario, finanziamenti e chi la sostiene",
    "oggetto": "Anthropic PBC: società statunitense di intelligenza artificiale fondata nel 2021 da ex ricercatori di OpenAI, costituita come public benefit corporation. Prodotti: i modelli Claude e l'API per aziende e sviluppatori.",
    "domanda": "Parte della domanda #46 del Direttore («sono questi i player… come interagiscono tra di loro»). Tradotta: l'assetto e i finanziamenti dichiarati da Anthropic sono verificabili, e da chi dipende davvero?",
    "modalita": "rapida",
    "punteggio": 72,
    "etichetta": "ditta reale, round documentati dalla società, conti non certificati",
    "verdetto": "Anthropic è reale, ha una forma giuridica dichiarata (public benefit corporation) e — a differenza di molte private — pubblica gli annunci dei propri round sul proprio sito, con cifre e valutazioni esplicite. Questo la rende più controllabile della media: le date e gli importi si possono confrontare con quanto scrive la stampa finanziaria, e nei riscontri che ho fatto coincidono.\n\nLa traiettoria dichiarata, in nove mesi: Serie F da 13 miliardi a 183 miliardi di valutazione (settembre 2025); Serie G da 30 miliardi a 380 miliardi (febbraio 2026); Serie H da 65 miliardi a 965 miliardi post-money (maggio 2026), che secondo CNBC e Axios la porta a superare OpenAI come società privata di IA più valutata al mondo. Nello stesso annuncio la società dichiara un giro d'affari annualizzato superiore a 47 miliardi. Nessuno di questi numeri è certificato: sono dichiarazioni della società e valutazioni concordate fra privati, non un bilancio depositato.\n\nLa dipendenza vera è il calcolo e chi lo paga. Anthropic è finanziata e ospitata dai suoi stessi concorrenti: Amazon e Google sono investitori di lungo corso e insieme fornitori di infrastruttura, e a gennaio 2026 la stampa riporta l'ingresso anche di Microsoft e NVIDIA nel giro di finanziamento — cioè gli azionisti principali del suo primo concorrente. Su alcune di queste cifre (impegni fino a 33 miliardi di Amazon, fino a 40 miliardi di Google) ho trovato solo aggregatori di dubbia qualità e non una fonte primaria apribile: le riporto come non confermate, non come fatto.\n\nDiritto di replica garantito.",
    "green_flags": [
      "La società pubblica sul proprio sito gli annunci dei round con importo e valutazione espliciti (Serie F, G, H): è più di quanto faccia la media delle private del settore.",
      "Le cifre dichiarate dalla società trovano riscontro nella stampa finanziaria indipendente nelle stesse date (CNBC, Axios): due catene di fonti che convergono.",
      "Forma giuridica dichiarata e coerente nel tempo (public benefit corporation), non un cambio di veste in corsa.",
      "Investitori identificabili e in gran parte quotati (Amazon, Google, Microsoft, NVIDIA, fondi con nome e cognome): nessun capitale anonimo.",
      "Un percorso verso la quotazione renderebbe i conti certificati; la stampa lo sta già seguendo (Fortune, giugno 2026)."
    ],
    "red_flags": [
      "Nessun bilancio certificato: valutazione e giro d'affari sono dichiarazioni della società o prezzi concordati fra privati. Non c'è un documento depositato a cui risalire.",
      "Valutazione quasi triplicata in tre mesi (380 miliardi a febbraio, 965 a maggio 2026). Può essere crescita reale o corsa fra investitori: dal di fuori i due casi hanno lo stesso aspetto, e nessuna delle due letture è dimostrabile con i dati pubblici.",
      "Dipendenza strutturale da concorrenti-fornitori: Amazon e Google finanziano e ospitano; secondo la stampa entrano anche Microsoft e NVIDIA. Chi ti paga il calcolo vende anche il tuo concorrente.",
      "Gli importi complessivi attribuiti ad Amazon (fino a 33 mld) e Google (fino a 40 mld) li ho trovati solo su aggregatori di bassa autorevolezza, con numeri discordi fra loro: NON confermati.",
      "Le classifiche e i primati («la più valutata al mondo», «73% della spesa dei nuovi clienti») nascono da conteggi di terzi con metodo non pubblicato: sono indizi di posizione, non misure."
    ],
    "fonti": [
      {
        "titolo": "Anthropic raises $65B in Series H funding at $965B post-money valuation — annuncio ufficiale Anthropic",
        "url": "https://www.anthropic.com/news/series-h",
        "tipo": "dichiarazione della società",
        "sostiene": "Serie H da 65 miliardi a 965 miliardi post-money (maggio 2026) e giro d'affari annualizzato oltre 47 miliardi.",
        "autorevolezza": "alta sull'esistenza del round, ma è parte in causa sui numeri — pagina non apribile in questa sessione"
      },
      {
        "titolo": "Anthropic tops OpenAI as most valuable AI startup, nears $1 trillion valuation — CNBC, 28 maggio 2026",
        "url": "https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Riscontro indipendente della Serie H e del sorpasso su OpenAI per valutazione.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Anthropic tops OpenAI as most valuable AI startup, with $965B valuation — Axios, 28 maggio 2026",
        "url": "https://www.axios.com/2026/05/28/anthropic-ai-fundraising-openai",
        "tipo": "stampa indipendente",
        "sostiene": "Secondo riscontro indipendente sulla stessa cifra e sulla stessa data.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Anthropic closes $30 billion funding round at $380 billion valuation — CNBC, 12 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/12/anthropic-closes-30-billion-funding-round-at-380-billion-valuation.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Serie G: 30 miliardi a 380 di valutazione. È il termine di paragone che rende misurabile il salto di maggio.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Anthropic raises $13B Series F at $183B post-money valuation — annuncio ufficiale Anthropic",
        "url": "https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation",
        "tipo": "dichiarazione della società",
        "sostiene": "Serie F, settembre 2025: il punto di partenza della traiettoria.",
        "autorevolezza": "media-alta — parte in causa"
      },
      {
        "titolo": "Anthropic closes latest funding round above $10 billion — CNBC, 27 gennaio 2026",
        "url": "https://www.cnbc.com/2026/01/27/anthropic-fundraising-microsoft-nvidia.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Ingresso di Microsoft e NVIDIA nel giro di finanziamento: la dipendenza incrociata con gli azionisti del concorrente.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Amazon and Google have billions riding on Anthropic. The IPO will finally reveal how much — Fortune, 4 giugno 2026",
        "url": "https://fortune.com/2026/06/04/amazon-google-billions-anthropic-ipo/",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il fatto centrale di questa scheda: l'entità reale degli impegni di Amazon e Google NON è oggi pubblica, e lo sarà solo con una quotazione.",
        "autorevolezza": "alta"
      }
    ],
    "timeline": [
      {
        "data": "2021-01",
        "evento": "Anthropic viene fondata da ex ricercatori di OpenAI, come public benefit corporation."
      },
      {
        "data": "2025-09",
        "evento": "Serie F: 13 miliardi a 183 miliardi di valutazione post-money."
      },
      {
        "data": "2026-01-27",
        "evento": "La stampa riporta l'ingresso di Microsoft e NVIDIA nel giro di finanziamento."
      },
      {
        "data": "2026-02-12",
        "evento": "Serie G chiusa: 30 miliardi a 380 miliardi di valutazione."
      },
      {
        "data": "2026-05-28",
        "evento": "Serie H: 65 miliardi a 965 miliardi post-money; la società dichiara oltre 47 miliardi di giro d'affari annualizzato."
      },
      {
        "data": "2026-06-04",
        "evento": "Fortune: l'entità reale degli investimenti di Amazon e Google resterà ignota finché non ci sarà una quotazione."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0009"
  },
  {
    "titolo": "Google DeepMind — cos'è davvero e di chi è",
    "oggetto": "Google DeepMind: la divisione di ricerca e sviluppo IA di Alphabet Inc., nata nell'aprile 2023 dall'unione di DeepMind (società britannica acquisita da Google nel 2014) e Google Brain. Prodotti: i modelli Gemini, l'app Gemini, i processori TPU. NON è una società a sé che raccoglie capitali: è una divisione di una quotata.",
    "domanda": "Parte della domanda #46 del Direttore. Tradotta: Google DeepMind è una ditta autonoma o un reparto? E i suoi numeri sono verificabili?",
    "modalita": "rapida",
    "punteggio": 88,
    "etichetta": "reale e verificabile — ma i numeri sono quelli di Alphabet, non suoi",
    "verdetto": "Prima cosa, perché cambia la domanda: Google DeepMind NON è una società indipendente. È una divisione di Alphabet Inc., società quotata negli Stati Uniti, nata nell'aprile 2023 fondendo DeepMind (comprata da Google nel 2014) con Google Brain. Non ha round di finanziamento, non ha valutazione propria, non ha un fatturato pubblicato: è una voce di costo e di prodotto dentro il bilancio di Alphabet. Questo la mette in una categoria diversa da OpenAI e Anthropic, e va detto prima di qualunque confronto: paragonare «DeepMind» a «OpenAI» sui soldi è un confronto fra un reparto e un'azienda.\n\nProprio per questo è il caso più verificabile dei sei. Alphabet deposita bilanci trimestrali certificati presso la SEC e tiene conferenze pubbliche con gli investitori: chiunque può leggere i numeri veri, e il vincolo di legge sulla veridicità è di un altro ordine rispetto a un annuncio di una società privata. Dai documenti e dalle comunicazioni agli investitori del 2026: utile netto del primo trimestre 2026 pari a 62,58 miliardi di dollari (+81% sull'anno prima) e una guida sugli investimenti in conto capitale per l'intero 2026 rivista a 195-205 miliardi di dollari, esplicitamente destinati anche alla capacità di calcolo per Google DeepMind.\n\nLa posizione competitiva ha una particolarità che conta nella mappa: Google è l'unico dei grandi che progetta e usa i propri acceleratori (le TPU, arrivate all'ottava generazione), quindi dipende da NVIDIA molto meno degli altri. Ed è al tempo stesso finanziatore di un concorrente diretto, Anthropic. L'app Gemini viene dichiarata a oltre 750 milioni di utenti attivi mensili: è un dato aziendale, non misurato da terzi.\n\nDiritto di replica garantito.",
    "green_flags": [
      "Appartiene a una società quotata che deposita bilanci certificati presso la SEC: i numeri sono controllabili da chiunque e mentire ha conseguenze legali.",
      "Storia societaria limpida e datata: DeepMind acquisita da Google nel 2014, fusione con Google Brain nell'aprile 2023.",
      "Comunicazione finanziaria pubblica e regolare (conferenze trimestrali con gli investitori, presentazioni sul sito Alphabet).",
      "Integrazione verticale sul silicio: progetta e usa le proprie TPU: la dipendenza da un fornitore esterno di chip è strutturalmente minore di quella dei concorrenti.",
      "La spesa dichiarata in conto capitale è una voce di bilancio soggetta a revisione contabile, non un annuncio: 195-205 miliardi per il 2026."
    ],
    "red_flags": [
      "Non esistono conti separati di Google DeepMind: ricavi e margini della divisione IA non sono pubblicati. Chi cita «il fatturato di DeepMind» sta inventando o estrapolando.",
      "Il numero di utenti dell'app Gemini (oltre 750 milioni al mese) è dichiarato dall'azienda, senza metodo di conteggio pubblicato né verifica di terzi.",
      "Conflitto strutturale: Alphabet finanzia Anthropic, cioè un concorrente diretto dei propri modelli, e insieme gli vende infrastruttura.",
      "La guida sugli investimenti è stata rivista al rialzo in corso d'anno: le cifre di spesa in questo settore invecchiano nel giro di un trimestre, comprese quelle di questa scheda."
    ],
    "fonti": [
      {
        "titolo": "Alphabet Investor Relations — 2026 Q1 Earnings Call",
        "url": "https://abc.xyz/investor/events/event-details/2026/2026-Q1-Earnings-Call-2026-nW8kCrBAKS/default.aspx",
        "tipo": "comunicazione finanziaria ufficiale di una società quotata",
        "sostiene": "I risultati del primo trimestre 2026 e la guida sugli investimenti. È la fonte primaria: soggetta agli obblighi di legge sulle società quotate.",
        "autorevolezza": "massima — società quotata, obblighi di veridicità verso il mercato"
      },
      {
        "titolo": "Alphabet (GOOGL) Q1 2026 earnings — CNBC, 29 aprile 2026",
        "url": "https://www.cnbc.com/2026/04/29/alphabet-googl-q1-2026-earnings.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Utile netto del primo trimestre 2026 di 62,58 miliardi di dollari, +81% sull'anno precedente.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Alphabet resets the bar for AI infrastructure spending — CNBC, 4 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/04/alphabet-resets-the-bar-for-ai-infrastructure-spending.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La revisione al rialzo della spesa in conto capitale 2026 (195-205 miliardi), destinata anche alla capacità di calcolo per Google DeepMind.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Alphabet earnings call, Q1 2026 — le parole del CEO Sundar Pichai",
        "url": "https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2026/",
        "tipo": "dichiarazione della società",
        "sostiene": "Utenti dichiarati dell'app Gemini e stato dei prodotti. È l'azienda che parla di sé: da pesare come tale.",
        "autorevolezza": "media — parte in causa"
      },
      {
        "titolo": "Alphabet investor presentation, giugno 2026",
        "url": "https://blog.google/alphabet/investor-presentation-june-2026/",
        "tipo": "documento per gli investitori",
        "sostiene": "Quadro aggiornato di prodotti, TPU e infrastruttura presentato agli investitori.",
        "autorevolezza": "media-alta — parte in causa ma destinato al mercato"
      }
    ],
    "timeline": [
      {
        "data": "2014",
        "evento": "Google acquisisce DeepMind Technologies, società britannica."
      },
      {
        "data": "2023-04",
        "evento": "DeepMind e Google Brain vengono fuse in un'unica divisione: Google DeepMind."
      },
      {
        "data": "2026-02-04",
        "evento": "Alphabet alza la guida sugli investimenti in conto capitale per il 2026 a 195-205 miliardi di dollari, anche per la capacità di calcolo di Google DeepMind."
      },
      {
        "data": "2026-04-29",
        "evento": "Risultati del primo trimestre 2026: utile netto di 62,58 miliardi, +81% sull'anno prima."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0010"
  },
  {
    "titolo": "Meta — la divisione IA, i soldi spesi e il cambio di rotta",
    "oggetto": "Meta Platforms Inc. (società quotata negli Stati Uniti) e la sua divisione Meta Superintelligence Labs, guidata da Alexandr Wang, entrato in Meta con l'operazione su Scale AI. Prodotti: i modelli Llama a pesi aperti e, dall'aprile 2026, il modello chiuso Muse Spark.",
    "domanda": "Parte della domanda #46 del Direttore. Tradotta: cosa sta facendo davvero Meta nell'IA, quanto ci sta mettendo, e quelle cifre sono verificabili?",
    "modalita": "rapida",
    "punteggio": 85,
    "etichetta": "spesa verificabile, strategia dichiarata instabile",
    "verdetto": "Meta è una società quotata: la spesa si legge nei documenti e nelle chiamate agli investitori, e su quel piano il verdetto è netto — i numeri ci sono e sono enormi. La guida per il 2026 è stata data fra 115 e 135 miliardi di dollari di investimenti legati all'IA (quasi il doppio dell'anno prima) e successivamente indicata agli investitori fino a 145 miliardi. A giugno 2025 Meta ha investito 14,3 miliardi in Scale AI per una quota del 49%, portandosi in casa il fondatore Alexandr Wang, oggi responsabile IA e a capo di Meta Superintelligence Labs.\n\nQuello che NON è stabile è la strategia. Per anni la linea dichiarata era i pesi aperti con la famiglia Llama, ed era il tratto che distingueva Meta da tutti gli altri. Nell'aprile 2026 la società presenta Muse Spark, il primo modello importante uscito dai nuovi laboratori: è chiuso. È un cambio di rotta sul punto che Meta aveva usato per definirsi, e non è l'unico segnale — nel dicembre 2025 la stampa aveva già raccontato confusione interna sulla direzione, e nell'agosto 2025 una frenata sulla campagna di assunzioni a suon di milioni. A luglio 2026 arriva un'altra mossa: vendere ad altri la capacità di calcolo in eccesso, cioè entrare nel mestiere del cloud.\n\nPer chi legge da fuori: la spesa di Meta è un fatto misurato, la sua rotta nell'IA è cambiata più volte in dodici mesi. Le due cose vanno tenute separate. Diritto di replica garantito.",
    "green_flags": [
      "Società quotata con bilanci certificati e guida sugli investimenti comunicata al mercato: la cifra di spesa è verificabile, non un annuncio.",
      "L'operazione su Scale AI ha importo e quota dichiarati (14,3 miliardi per il 49%) e una conseguenza personale visibile: il fondatore passa a Meta come responsabile IA.",
      "Storia dei pesi aperti (Llama) documentata e realmente utilizzabile da terzi: per anni chiunque ha potuto scaricare e controllare i modelli.",
      "Le difficoltà interne sono state raccontate da stampa indipendente, non solo la versione aziendale: c'è materiale contraddittorio su cui il lettore può farsi un'idea."
    ],
    "red_flags": [
      "Cambio di rotta sul tratto identitario: dopo anni di pesi aperti, il primo modello dei nuovi laboratori (Muse Spark, aprile 2026) è chiuso.",
      "Guida di spesa rivista al rialzo in corso d'anno (da 115-135 a «fino a 145 miliardi»): il numero annunciato non è il numero finale.",
      "Segnalazioni di confusione strategica interna (dicembre 2025) e frenata sulla campagna di assunzioni milionarie (agosto 2025): la traiettoria è discontinua.",
      "Come per Google, non esistono conti separati della divisione IA: quanto rende Meta Superintelligence Labs non è pubblico, si vede solo quanto costa.",
      "Il 49% di Scale AI non è controllo: la struttura dell'operazione è stata letta anche come modo di acquisire persone e tecnologia senza una fusione piena."
    ],
    "fonti": [
      {
        "titolo": "Meta debuts new AI model, attempting to catch Google, OpenAI after spending billions — CNBC, 8 aprile 2026",
        "url": "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Presentazione di Muse Spark, l'operazione da 14,3 miliardi su Scale AI e il ruolo di Alexandr Wang.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Meta's Mark Zuckerberg gets green light from Wall Street to keep pouring money into AI — CNBC, 28 gennaio 2026",
        "url": "https://www.cnbc.com/2026/01/28/metas-zuckerberg-gets-green-light-from-wall-street-to-invest-in-ai.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La guida sugli investimenti IA 2026 fra 115 e 135 miliardi di dollari, comunicata con i risultati.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Meta's long-awaited AI model is finally here. But can it make money? — CNBC, 9 aprile 2026",
        "url": "https://www.cnbc.com/2026/04/09/metas-long-awaited-ai-model-is-finally-here-but-can-it-make-money.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il passaggio da Llama a pesi aperti a un modello chiuso e la spesa fino a 145 miliardi indicata agli investitori.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "From Llamas to Avocados: Meta's shifting AI strategy is causing internal confusion — CNBC, 9 dicembre 2025",
        "url": "https://www.cnbc.com/2025/12/09/meta-avocado-ai-strategy-issues.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Confusione interna sulla direzione strategica IA: è la fonte della red flag sulla discontinuità.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Meta pops 9% as company makes cloud push to sell excess AI compute power capacity — CNBC, 1 luglio 2026",
        "url": "https://www.cnbc.com/2026/07/01/meta-stock-cloud-ai-compute.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "L'ingresso di Meta nella vendita di capacità di calcolo ad altri: un mestiere nuovo rispetto alla sua storia.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Meta puts the brakes on its massive AI talent spending spree — CNBC, 21 agosto 2025",
        "url": "https://www.cnbc.com/2025/08/21/meta-brakes-massive-ai-talent-recruitment-spending-spree-mark-zuckerberg-tbd-superintelligence-lab.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La frenata sulla campagna di assunzioni: primo segnale documentato di correzione di rotta.",
        "autorevolezza": "alta"
      }
    ],
    "timeline": [
      {
        "data": "2025-06",
        "evento": "Meta investe 14,3 miliardi di dollari in Scale AI per il 49%; Alexandr Wang entra in Meta."
      },
      {
        "data": "2025-08-21",
        "evento": "Frenata sulla campagna di assunzioni milionarie per i nuovi laboratori."
      },
      {
        "data": "2025-12-09",
        "evento": "La stampa riporta confusione interna sulla strategia IA."
      },
      {
        "data": "2026-01-28",
        "evento": "Guida agli investimenti IA 2026: 115-135 miliardi di dollari, quasi il doppio dell'anno precedente."
      },
      {
        "data": "2026-04-08",
        "evento": "Presentato Muse Spark, primo modello importante di Meta Superintelligence Labs: chiuso, non a pesi aperti."
      },
      {
        "data": "2026-07-01",
        "evento": "Meta annuncia la vendita ad altri della capacità di calcolo in eccesso."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0011"
  },
  {
    "titolo": "NVIDIA — il fornitore di chip che è anche socio dei suoi clienti",
    "oggetto": "NVIDIA Corporation, società statunitense quotata al Nasdaq: progetta i processori e i sistemi su cui si addestrano e funzionano quasi tutti i modelli di IA dei concorrenti citati in questa serie. Dal 2025-2026 è anche investitore in molti dei suoi stessi clienti.",
    "domanda": "Parte della domanda #46 del Direttore («come interagiscono tra di loro»). Tradotta: i numeri di NVIDIA sono verificabili, e cosa comporta il fatto che finanzi i propri acquirenti?",
    "modalita": "rapida",
    "punteggio": 82,
    "etichetta": "conti verificabili e certificati — struttura degli accordi da leggere con attenzione",
    "verdetto": "Sui conti, NVIDIA è il caso più solido dei sei: è quotata al Nasdaq, deposita trimestrali e relazioni presso la SEC, e i numeri sono quindi documenti, non annunci. Fatturato dell'esercizio 2026 pari a 215,9 miliardi di dollari (+65%); nel secondo trimestre dell'esercizio 2027 la sola divisione data center dichiara 89,0 miliardi, quasi raddoppiati sull'anno prima. Chi vuole controllare non deve fidarsi di me: i documenti sono su EDGAR, pubblici.\n\nLa cosa che merita attenzione non è la veridicità dei conti: è la FORMA degli accordi. NVIDIA ha superato i 40 miliardi di dollari in partecipazioni azionarie in aziende che sono al tempo stesso sue clienti — fra queste 30 miliardi in OpenAI (marzo 2026), 10 miliardi in Anthropic, un ruolo nel finanziamento di un centro dati OpenAI in Ohio, e la discussione, riportata a luglio 2026, di una garanzia da 250 miliardi a favore di OpenAI. In pratica: fornisce il capitale a chi poi lo usa per comprare i suoi prodotti. La stampa finanziaria lo chiama «finanziamento circolare» e ne discute apertamente il rischio; l'amministratore delegato ha risposto in pubblico che «il rischio è basso» e ha detto a marzo 2026 che l'investimento in OpenAI «potrebbe essere l'ultimo». Entrambe le posizioni sono qui, senza sceglierne una.\n\nCosa significa per chi legge: i ricavi di NVIDIA sono un numero certificato, ma una parte della domanda che li genera è finanziata da NVIDIA stessa. Non è un'accusa e non c'è nulla di illecito accertato: è una struttura che rende più difficile capire quanta domanda sia autonoma. È la ragione per cui il punteggio non è più alto di 82 pur essendo l'azienda più trasparente del gruppo. Diritto di replica garantito.",
    "green_flags": [
      "Società quotata: relazioni trimestrali e annuali depositate presso la SEC, consultabili da chiunque su EDGAR. È il livello massimo di verificabilità in questa serie.",
      "I ricavi sono certificati e ripartiti per segmento (data center separato dal resto): non serve fidarsi di stime di terzi.",
      "Le partecipazioni in clienti sono state comunicate pubblicamente e discusse in interviste, non nascoste.",
      "Esiste un dibattito pubblico e documentato sul rischio di questa struttura, con la posizione critica e la risposta dell'azienda entrambe reperibili.",
      "Prodotto reale, consegnato e usato: qui non c'è alcun dubbio sull'esistenza della merce venduta."
    ],
    "red_flags": [
      "Finanziamento circolare: oltre 40 miliardi investiti in aziende che sono anche clienti. Parte della domanda per i suoi chip è alimentata dai suoi stessi capitali.",
      "Concentrazione dei clienti: pochi grandissimi acquirenti pesano moltissimo sul fatturato: se uno rallenta, l'effetto non è graduale.",
      "La discussione su una garanzia finanziaria da 250 miliardi a favore di OpenAI (luglio 2026) è di scala tale da legare la salute di NVIDIA a quella di un solo cliente.",
      "Analisti e commentatori hanno paragonato la struttura di questi accordi ai meccanismi che precedettero lo scoppio della bolla dot-com: è un'opinione, non una previsione verificata, ma viene da più voci indipendenti.",
      "Le dichiarazioni pubbliche dell'azienda sull'entità futura degli investimenti sono cambiate nel giro di mesi («potrebbe essere l'ultimo», marzo 2026, seguito da ulteriori operazioni)."
    ],
    "fonti": [
      {
        "titolo": "NVIDIA Corp — Form 10-Q, esercizio 2027 primo semestre (periodo chiuso 26 luglio 2026), SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000075/nvda-20260726.htm",
        "tipo": "registro ufficiale",
        "sostiene": "I conti trimestrali depositati presso l'autorità di vigilanza statunitense: la fonte primaria dei ricavi, compreso il segmento data center.",
        "autorevolezza": "massima — deposito ufficiale presso la SEC"
      },
      {
        "titolo": "NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2026 — comunicato agli investitori",
        "url": "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/default.aspx",
        "tipo": "comunicazione finanziaria ufficiale",
        "sostiene": "Fatturato dell'esercizio 2026 di 215,9 miliardi di dollari, +65%.",
        "autorevolezza": "massima — comunicazione al mercato di una società quotata"
      },
      {
        "titolo": "Nvidia embraces AI investor role, topping $40 billion in equity bets — CNBC, 9 maggio 2026",
        "url": "https://www.cnbc.com/2026/05/09/nvidia-embraces-ai-investor-topping-40-billion-in-equity-bets-2026.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Oltre 40 miliardi di dollari in partecipazioni azionarie, in gran parte in aziende clienti.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Nvidia reignites \"circular\" AI concerns as it weighs OpenAI financing guarantee — Axios, 27 luglio 2026",
        "url": "https://www.axios.com/2026/07/27/nvidia-openai-financing-ai-jensen-huang-ssi",
        "tipo": "stampa indipendente",
        "sostiene": "La discussione sulla garanzia finanziaria a favore di OpenAI e il dibattito sul finanziamento circolare.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Jensen Huang defends Nvidia's growing financial support for AI ecosystem, says 'the risk is low' — CNBC, 26 agosto 2026",
        "url": "https://www.cnbc.com/2026/08/26/jensen-huang-defends-nvidias-growing-financial-support-for-ai-ecosystem-says-the-risk-is-low-.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La replica pubblica dell'azienda alle critiche sul finanziamento circolare. È il diritto di replica, esercitato e riportato.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Nvidia CEO Huang says $30 billion OpenAI investment 'might be the last' — CNBC, 4 marzo 2026",
        "url": "https://www.cnbc.com/2026/03/04/nvidia-huang-openai-investment.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "L'entità dell'investimento in OpenAI (30 miliardi) e la dichiarazione sul suo carattere ultimo.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Nvidia backing $105 billion in financing for OpenAI data center in Ohio — CNBC, 17 agosto 2026",
        "url": "https://www.cnbc.com/2026/08/17/nvidia-financing-open-ai-data-center-ohio.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il ruolo di NVIDIA nel finanziamento di infrastruttura di un proprio cliente.",
        "autorevolezza": "alta"
      }
    ],
    "timeline": [
      {
        "data": "2026-02",
        "evento": "Chiuso l'esercizio 2026 con 215,9 miliardi di dollari di fatturato, +65%."
      },
      {
        "data": "2026-03-04",
        "evento": "Investimento da 30 miliardi in OpenAI; l'amministratore delegato dichiara che «potrebbe essere l'ultimo»."
      },
      {
        "data": "2026-05-09",
        "evento": "Le partecipazioni azionarie in aziende del settore superano i 40 miliardi di dollari."
      },
      {
        "data": "2026-07-27",
        "evento": "Emerge la discussione su una garanzia finanziaria fino a 250 miliardi a favore di OpenAI; riesplode il dibattito sul finanziamento circolare."
      },
      {
        "data": "2026-08-17",
        "evento": "NVIDIA sostiene 105 miliardi di finanziamento per un centro dati OpenAI in Ohio."
      },
      {
        "data": "2026-08-26",
        "evento": "L'amministratore delegato replica pubblicamente alle critiche: «il rischio è basso»."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0012"
  },
  {
    "titolo": "DeepSeek — di chi è, chi la paga, e cosa non si riesce a verificare",
    "oggetto": "DeepSeek: società cinese di intelligenza artificiale fondata nel 2023 da Liang Wenfeng, interamente posseduta e finanziata da High-Flyer, fondo speculativo quantitativo cinese. Prodotti: modelli a pesi aperti, fra cui quelli che nel gennaio 2025 hanno scosso i mercati.",
    "domanda": "Parte della domanda #46 del Direttore. Tradotta: chi possiede davvero DeepSeek, con quali soldi, e quanto di ciò che si dice su di lei è verificabile?",
    "modalita": "rapida",
    "punteggio": 38,
    "etichetta": "società reale, ma la parte che conta non è verificabile dall'esterno",
    "verdetto": "Che DeepSeek esista e che i suoi modelli siano reali non è in discussione: sono scaricabili e chiunque può provarli, ed è questa la sua parte più solida. Tutto il resto è il caso meno verificabile dei sei, e il punteggio basso misura questo, non un sospetto di truffa.\n\nAssetto: fondata nel 2023 da Liang Wenfeng, cofondatore del fondo speculativo quantitativo High-Flyer (circa 8 miliardi di dollari in gestione), che la possiede e finanzia interamente. Un'azienda posseduta da un fondo privato cinese non deposita bilanci consultabili: non c'è alcun registro pubblico a cui io o il lettore possiamo risalire per ricavi, costi o proprietà effettiva. Nell'agosto 2026 la stampa riporta che DeepSeek sta cercando capitali esterni per la prima volta, cedendo non più del 3% e privilegiando investitori sostenuti dallo Stato e fondi di indirizzo di governi locali rispetto al capitale puramente finanziario. È un cambiamento rilevante: sposterebbe, almeno in parte, la proprietà verso soggetti pubblici cinesi.\n\nDue punti dove serve massima cautela. Primo, i costi di addestramento: la cifra bassissima che circolò nel gennaio 2025 è una dichiarazione della società, e già a fine gennaio 2025 un'analisi indipendente stimava una spesa in hardware fino a 500 milioni di dollari. Le due cose non misurano la stessa voce, e chi le confronta come se fossero alternative sta sbagliando conto. Secondo, e va detto con precisione: nel giugno 2025 un funzionario statunitense ha affermato che DeepSeek supporterebbe l'apparato militare cinese e avrebbe eluso i controlli sull'esportazione tramite società di comodo nel Sud-est asiatico. Questa è un'AFFERMAZIONE DI UNA PARTE IN CAUSA riportata dalla stampa, non un fatto accertato in sede giudiziaria: qui viene registrata come tale, senza essere trattata come dimostrata. Non risulta pubblicamente che DeepSeek abbia ricevuto finanziamenti dal governo cinese.\n\nDiritto di replica garantito e da considerarsi aperto: se DeepSeek o High-Flyer forniscono documentazione, questo verdetto si rivede.",
    "green_flags": [
      "I modelli sono a pesi aperti e pubblicamente scaricabili: il prodotto è ispezionabile da chiunque, il che è più di quanto offrano quasi tutti i concorrenti occidentali.",
      "La proprietà dichiarata è chiara nella catena principale (High-Flyer, fondo con dimensione nota) e il fondatore è una persona identificabile con storia pubblica.",
      "L'operato è stato oggetto di analisi tecniche indipendenti di terzi, non solo di comunicati aziendali.",
      "Il tentativo di raccolta di capitali del 2026 è stato riportato da fonti indipendenti fra loro (CNBC e South China Morning Post)."
    ],
    "red_flags": [
      "Nessun bilancio pubblico, nessun registro consultabile: ricavi, costi e proprietà effettiva NON sono verificabili dall'esterno. È il motivo principale del punteggio basso.",
      "La cifra di costo di addestramento più citata è una dichiarazione dell'azienda; una stima indipendente ha collocato la spesa in hardware fino a 500 milioni di dollari. Il numero basso non è confermato.",
      "Giugno 2025: un funzionario statunitense afferma che DeepSeek supporterebbe l'apparato militare cinese e avrebbe eluso i controlli sull'esportazione. AFFERMAZIONE DI PARTE, non accertata: registrata, non avallata.",
      "La raccolta di capitali in corso privilegia investitori sostenuti dallo Stato e fondi di governi locali: la proprietà futura sarebbe meno privata e meno leggibile di quella attuale.",
      "Operando in Cina, i dati degli utenti sono soggetti a una giurisdizione con obblighi di accesso diversi da quelli europei: rilevante per chi valuta l'uso del prodotto, indipendentemente da ogni giudizio sull'azienda."
    ],
    "fonti": [
      {
        "titolo": "DeepSeek looks for fresh capital as founder's quant empire navigates China's choppy IPO market — CNBC, 28 agosto 2026",
        "url": "https://www.cnbc.com/2026/08/28/deepseek-founder-liang-wenfeng-high-flyer-china-tech-ipos-funding.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La proprietà tramite High-Flyer e la ricerca di capitali esterni nel 2026.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Why China's cash-rich AI firm DeepSeek is still shopping for funding — South China Morning Post",
        "url": "https://www.scmp.com/tech/article/3351004/why-chinas-cash-rich-ai-firm-deepseek-still-shopping-funding-sources",
        "tipo": "stampa indipendente con competenza regionale",
        "sostiene": "La cessione di non più del 3% e la preferenza per investitori sostenuti dallo Stato e fondi di indirizzo di governi locali.",
        "autorevolezza": "alta — testata con accesso diretto al contesto cinese"
      },
      {
        "titolo": "Demystifying DeepSeek: four burning questions about China's hottest AI start-up answered — South China Morning Post",
        "url": "https://www.scmp.com/tech/tech-war/article/3298094/demystifying-deepseek-four-burning-questions-about-chinas-hottest-ai-start-answered",
        "tipo": "stampa indipendente",
        "sostiene": "L'assetto proprietario (interamente di High-Flyer, circa 8 miliardi in gestione) e la fondazione nel 2023 da parte di Liang Wenfeng.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "DeepSeek's hardware spend could be as high as $500 million, new report estimates — CNBC, 31 gennaio 2025",
        "url": "https://www.cnbc.com/2025/01/31/deepseeks-hardware-spend-could-be-as-high-as-500-million-report.html",
        "tipo": "stima indipendente riportata dalla stampa",
        "sostiene": "La stima di terzi sulla spesa in hardware, che contraddice la lettura più diffusa della cifra dichiarata dall'azienda.",
        "autorevolezza": "media-alta — è una stima, dichiarata come tale"
      },
      {
        "titolo": "DeepSeek aids China's military and evaded export controls, US official says — CNBC/Reuters, 24 giugno 2025",
        "url": "https://www.cnbc.com/2025/06/24/deepseek-aids-chinas-military-and-evaded-export-controls-us-official-says-reuters.html",
        "tipo": "affermazione di una parte in causa, riportata dalla stampa",
        "sostiene": "L'accusa di un funzionario statunitense. Riportata per completezza e classificata come affermazione NON accertata: non è una prova.",
        "autorevolezza": "bassa come prova, alta come fatto che l'affermazione sia stata fatta"
      },
      {
        "titolo": "How China's new AI model DeepSeek is threatening U.S. dominance — CNBC, 24 gennaio 2025",
        "url": "https://www.cnbc.com/2025/01/24/how-chinas-new-ai-model-deepseek-is-threatening-us-dominance.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il contesto del gennaio 2025 e l'impatto sui mercati: è il fatto di partenza della notorietà dell'azienda.",
        "autorevolezza": "alta"
      }
    ],
    "timeline": [
      {
        "data": "2023",
        "evento": "DeepSeek viene fondata da Liang Wenfeng, cofondatore del fondo quantitativo High-Flyer, che la possiede interamente."
      },
      {
        "data": "2025-01-24",
        "evento": "I modelli DeepSeek scuotono i mercati e la percezione del divario tecnologico fra Stati Uniti e Cina."
      },
      {
        "data": "2025-01-31",
        "evento": "Un'analisi indipendente stima la spesa in hardware fino a 500 milioni di dollari, contro la cifra bassissima dichiarata dall'azienda per l'addestramento."
      },
      {
        "data": "2025-06-24",
        "evento": "Un funzionario statunitense afferma che DeepSeek supporterebbe l'apparato militare cinese ed eluda i controlli sull'export. Affermazione non accertata."
      },
      {
        "data": "2026-08-28",
        "evento": "DeepSeek cerca capitali esterni per la prima volta: non oltre il 3% del capitale, con preferenza per investitori sostenuti dallo Stato."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare». In più, su questo oggetto: le accuse riportate provengono da una parte in causa in un contesto di guerra commerciale fra Stati. Sono registrate come affermazioni, mai come fatti accertati.",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0013"
  },
  {
    "titolo": "La mappa dei player dell'IA — chi manca all'elenco, chi finanzia chi, e a che punto sono gli Stati",
    "oggetto": "Il mercato mondiale dell'intelligenza artificiale al settembre 2026, letto come struttura di proprietà e di dipendenze: chi c'è oltre ai sei nomi dell'elenco del Direttore, chi mette i soldi a chi, chi vende i chip a chi, e cosa stanno facendo gli Stati rispetto ai privati.",
    "domanda": "Domanda del Direttore (issue #46): «Sono questi i player del mercato mondiale AI? O dimentico qualcuno? Chi sono gli altri eventuali? Come interagiscono tra di loro… E gli stati a che punto sono rispetto ai privati?». Solo la parte fattuale: chi esiste, chi possiede cosa, quali programmi pubblici sono in vigore.",
    "modalita": "scava",
    "punteggio": 70,
    "etichetta": "elenco incompleto — la mappa vera è fatta di dipendenze incrociate",
    "verdetto": "RISPOSTA SECCA ALLA DOMANDA: no, l'elenco non è completo, e manca soprattutto una CATEGORIA, non solo dei nomi.\n\nChi manca fra chi costruisce i modelli: xAI (di Elon Musk: 20 miliardi raccolti a gennaio 2026 a una valutazione intorno ai 230 miliardi, con NVIDIA e Cisco fra gli investitori); Mistral AI, il campione europeo, che a settembre 2026 ha chiuso il più grande round azionario mai fatto da una società tecnologica europea — circa 3 miliardi di euro guidati da Samsung, valutazione oltre 21 miliardi di euro; Microsoft e Amazon, che nell'elenco non compaiono ma sono decisive per una ragione doppia (sono i maggiori azionisti-fornitori dei laboratori indipendenti E hanno modelli propri); e i grandi cinesi oltre DeepSeek — Alibaba, ByteDance, Baidu, Tencent, Moonshot — che nell'elenco non ci sono affatto.\n\nMa la categoria davvero assente è CHI FA FUNZIONARE LA COSA: i produttori di silicio e di infrastruttura, senza cui nessuno dei sei esiste. TSMC fabbrica materialmente i chip; ASML è l'unica al mondo a costruire le macchine litografiche più avanzate; AMD e Broadcom sono le alternative a NVIDIA; Oracle, CoreWeave e SoftBank costruiscono e finanziano i centri dati. Chi ragiona sui «player dell'IA» guardando solo chi fa i modelli, guarda la punta e non la leva.\n\nCOME INTERAGISCONO — e qui sta il fatto più importante di tutta questa serie: NON sono sei concorrenti separati. Sono un intreccio in cui gli stessi soggetti sono contemporaneamente investitore, fornitore e concorrente l'uno dell'altro. Microsoft ha circa il 27% di OpenAI ed è fra i finanziatori di Anthropic. Amazon investe in Anthropic, la ospita, e ha messo 50 miliardi nel round OpenAI di febbraio 2026. Google finanzia Anthropic e insieme le fa concorrenza con Gemini. NVIDIA vende i chip a tutti e ha investito oltre 40 miliardi nei propri clienti, xAI compresa. La stampa finanziaria chiama questa struttura «finanziamento circolare» e ne discute apertamente il rischio: quando il fornitore finanzia il cliente che compra i suoi prodotti, dall'esterno diventa difficile dire quanta domanda sia autonoma. Non è un'accusa: è la forma degli accordi, ed è documentata.\n\nGLI STATI RISPETTO AI PRIVATI. Il divario di scala è netto e va detto con i numeri. Solo quattro aziende private (Microsoft, Meta, Alphabet, Amazon) hanno programmato per il 2026 oltre 470 miliardi di dollari di investimenti in conto capitale. L'Unione Europea, sul fronte pubblico, ha messo in campo un pacchetto per la sovranità tecnologica (giugno 2026) e una gara per un massimo di sette «gigafabbriche dell'IA» con oltre 30 miliardi di euro di investimento: un ordine di grandezza sotto. La leva europea, semmai, è normativa: dal 2 agosto 2026 la Commissione ha iniziato ad applicare le regole del regolamento sull'IA, con le modifiche dell'«omnibus» adottate a giugno 2026 ed entrate in vigore il 27 luglio 2026. La stessa Commissione dichiara che l'UE dipende da fuori per oltre l'80% di prodotti, servizi, infrastrutture e proprietà intellettuale digitali chiave. Sul versante cinese, il segnale misurabile è che i fondi di indirizzo di governi locali stanno entrando nel capitale privato (il caso DeepSeek). Sul versante statunitense esiste il progetto Stargate come impresa comune fra OpenAI, Oracle e SoftBank: è un'iniziativa privata annunciata in cornice politica, non un programma pubblico finanziato dallo Stato, e vanno tenute distinte.\n\n⚠️ LIMITE DICHIARATO: sugli Stati ho fonti ufficiali solide per l'Unione Europea. Per i programmi pubblici di Stati Uniti, Cina, Regno Unito, Emirati, Arabia Saudita, Giappone e India NON ho fatto una ricerca dedicata in questa sessione e non ho fonti primarie da citare: quella parte della domanda resta APERTA, e va lavorata in un secondo giro. Preferisco lasciarla scoperta e dirlo, che riempirla a memoria.",
    "green_flags": [
      "Le sei aziende dell'elenco del Direttore esistono tutte e sono tutte effettivamente rilevanti: l'elenco è incompleto, non sbagliato.",
      "La struttura degli accordi incrociati è documentata da stampa finanziaria indipendente e in parte da comunicazioni ufficiali al mercato: non è una ricostruzione mia.",
      "Sui privati quotati (Alphabet, Meta, NVIDIA, Microsoft, Amazon) le cifre di spesa sono verificabili in documenti depositati.",
      "Sul fronte europeo esistono fonti ufficiali della Commissione con date e importi, consultabili direttamente dal lettore.",
      "Il round di Mistral (settembre 2026) è recentissimo e riportato con importi espliciti: l'Europa ha almeno un soggetto privato di scala rilevante."
    ],
    "red_flags": [
      "La domanda «e gli Stati?» resta coperta solo per l'Unione Europea. Stati Uniti, Cina, Regno Unito, Golfo, Giappone e India non li ho verificati: lacuna dichiarata, non colmata a memoria.",
      "Le valutazioni delle società private (xAI 230 miliardi, Anthropic 965, OpenAI 852) sono prezzi concordati fra privati in operazioni di finanziamento, non valori di mercato verificabili: non sono confrontabili con la capitalizzazione di una quotata.",
      "Il finanziamento circolare rende poco leggibile la domanda reale di chip e di calcolo: nessuno dall'esterno può oggi separare la domanda autonoma da quella finanziata dal venditore.",
      "Le classifiche di settore («chi è il più grande») sono compilate da terzi con metodi non pubblicati e cambiano di mese in mese: usarle come misura è un errore.",
      "Il mercato si muove più in fretta di qualunque scheda: le cifre qui hanno la data del 9 settembre 2026 e vanno rilette come una fotografia, non come uno stato permanente.",
      "Le domande del Direttore su cosa «prevedono di fare» e «come si organizzeranno» sono previsioni: qui non ci sono, perché una previsione non è un fatto verificabile e questo Dipartimento non le emette."
    ],
    "fonti": [
      {
        "titolo": "Elon Musk's xAI raises $20 billion from investors including Nvidia, Cisco, Fidelity — CNBC, 6 gennaio 2026",
        "url": "https://www.cnbc.com/2026/01/06/elon-musk-xai-raises-20-billion-from-nvidia-cisco-investors.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "L'esistenza e la scala di xAI (20 miliardi raccolti, valutazione intorno ai 230 miliardi) e la presenza di NVIDIA fra gli investitori: uno dei nomi mancanti all'elenco.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Mistral bags $24 billion valuation as Samsung leads funding for Europe's AI champion — CNBC, 8 settembre 2026",
        "url": "https://www.cnbc.com/2026/09/08/mistral-ai-funding-valuation-samsung.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il round di Mistral guidato da Samsung: il soggetto europeo mancante all'elenco. ⚠️ Il titolo dice 24 miliardi di dollari, il testo circa 21 miliardi di euro: sono la stessa cifra in valute diverse, riportata qui in euro.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Making sovereign, open-weight AI the technology frontier — Mistral AI",
        "url": "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/",
        "tipo": "dichiarazione della società",
        "sostiene": "Il posizionamento dichiarato di Mistral su sovranità e pesi aperti.",
        "autorevolezza": "media — parte in causa"
      },
      {
        "titolo": "OpenAI announces $110 billion funding round with backing from Amazon, Nvidia, SoftBank — CNBC, 27 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/27/open-ai-funding-round-amazon.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "La prova concreta dell'intreccio: Amazon 50 miliardi, NVIDIA 30, SoftBank 30 dentro un solo round di un solo concorrente.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Nvidia embraces AI investor role, topping $40 billion in equity bets — CNBC, 9 maggio 2026",
        "url": "https://www.cnbc.com/2026/05/09/nvidia-embraces-ai-investor-topping-40-billion-in-equity-bets-2026.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Il fornitore di chip come azionista dei propri clienti: il nodo centrale della mappa delle dipendenze.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Nvidia reignites \"circular\" AI concerns — Axios, 27 luglio 2026",
        "url": "https://www.axios.com/2026/07/27/nvidia-openai-financing-ai-jensen-huang-ssi",
        "tipo": "stampa indipendente",
        "sostiene": "Il dibattito pubblico sul finanziamento circolare: qui come fatto documentato, non come tesi avallata.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Tech AI spending approaches $700 billion in 2026, cash taking big hit — CNBC, 6 febbraio 2026",
        "url": "https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Oltre 470 miliardi di dollari di investimenti in conto capitale programmati nel 2026 dai quattro grandi operatori di cloud: il termine di paragone per misurare gli Stati.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Commission proposes tech sovereignty package to strengthen Europe's digital autonomy and resilience — Commissione europea, 3 giugno 2026",
        "url": "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1187",
        "tipo": "registro ufficiale / comunicazione istituzionale",
        "sostiene": "Il pacchetto europeo per la sovranità tecnologica e la dipendenza dichiarata dell'UE da fuori per oltre l'80% dei prodotti e servizi digitali chiave.",
        "autorevolezza": "massima — fonte istituzionale primaria"
      },
      {
        "titolo": "Commission starts enforcing AI Act rules and new transparency requirements on 2 August — Commissione europea",
        "url": "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1714",
        "tipo": "registro ufficiale / comunicazione istituzionale",
        "sostiene": "L'avvio dell'applicazione del regolamento europeo sull'IA dal 2 agosto 2026: la leva effettiva dell'UE è normativa, non di capitale.",
        "autorevolezza": "massima — fonte istituzionale primaria"
      },
      {
        "titolo": "AI Act — quadro normativo, Commissione europea",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        "tipo": "registro ufficiale",
        "sostiene": "Il testo e il calendario di applicazione del regolamento, comprese le modifiche dell'omnibus.",
        "autorevolezza": "massima"
      },
      {
        "titolo": "Europe unveils tech sovereignty package amid growing concerns over reliance on U.S. tech — CNBC, 3 giugno 2026",
        "url": "https://www.cnbc.com/2026/06/03/europe-tech-sovereignty-us-tech-reliance.html",
        "tipo": "stampa finanziaria indipendente",
        "sostiene": "Lettura indipendente del pacchetto europeo, a riscontro della fonte istituzionale.",
        "autorevolezza": "alta"
      },
      {
        "titolo": "Stargate advances with 4.5 GW partnership with Oracle — annuncio OpenAI",
        "url": "https://openai.com/index/stargate-advances-with-partnership-with-oracle/",
        "tipo": "dichiarazione della società",
        "sostiene": "Stargate come impresa comune fra privati (OpenAI, Oracle, SoftBank), non come programma finanziato dallo Stato: distinzione che questa scheda tiene ferma.",
        "autorevolezza": "media — parte in causa, e pagina non apribile in questa sessione"
      }
    ],
    "timeline": [
      {
        "data": "2026-01-06",
        "evento": "xAI raccoglie 20 miliardi di dollari, valutazione intorno ai 230 miliardi; fra gli investitori NVIDIA e Cisco."
      },
      {
        "data": "2026-02-06",
        "evento": "I quattro grandi operatori di cloud programmano per il 2026 oltre 470 miliardi di dollari di investimenti in conto capitale."
      },
      {
        "data": "2026-02-27",
        "evento": "Round OpenAI con Amazon (50 mld), NVIDIA (30) e SoftBank (30): l'intreccio in una sola operazione."
      },
      {
        "data": "2026-06-03",
        "evento": "La Commissione europea presenta il pacchetto per la sovranità tecnologica; dichiara una dipendenza esterna superiore all'80% sui digitali chiave."
      },
      {
        "data": "2026-07-27",
        "evento": "Entrano in vigore le modifiche «omnibus» al regolamento europeo sull'IA."
      },
      {
        "data": "2026-08-02",
        "evento": "La Commissione avvia l'applicazione delle regole del regolamento sull'IA e dei nuovi obblighi di trasparenza."
      },
      {
        "data": "2026-08-28",
        "evento": "In Cina, fondi di indirizzo di governi locali si muovono per entrare nel capitale di DeepSeek."
      },
      {
        "data": "2026-09-08",
        "evento": "Mistral AI chiude il maggiore round azionario mai realizzato da una società tecnologica europea, guidato da Samsung."
      }
    ],
    "nota_sicurezza": "Nessun link è stato aperto o eseguito: l'oggetto di questa verifica sono ditte, non un sito sospetto. ⚠️ LIMITE MISURATO IN QUESTA SESSIONE, non dedotto: il proxy di rete ha bloccato l'apertura diretta di TUTTI i domini delle fonti (openai.com, cnbc.com, sec.gov, anthropic.com, investor.nvidia.com, europa.eu — provati, errore EGRESS_BLOCKED / codice 000). Le fonti elencate sono URL reali restituiti dall'indice di ricerca con titolo e data corrispondenti, e sono cliccabili per il lettore, ma NON le ho aperte una per una: ho incrociato più risultati indipendenti. Dove una cifra compare in una fonte sola o solo in aggregatori, è detto nelle red flags. «Non ho potuto aprirlo» vale più di «dovrebbe funzionare».",
    "issue": 46,
    "data_verifica": "2026-09-09",
    "id": "0014"
  },
  {
    "titolo": "Sway - Audima Labs",
    "oggetto": "Sway, controller MIDI a gesti di Audima Labs (Batch 4, pre-ordine)",
    "domanda": "È hardware vero o fuffa renderizzata? Ci si può fidare prima di spendere 600+$?",
    "modalita": "scava",
    "punteggio": 87,
    "etichetta": "affidabile",
    "verdetto": "Sway è un prodotto reale, non un render. Dietro c'è un'azienda australiana con fondatori identificabili, passata da Shark Tank Australia, con una campagna Indiegogo di successo e due lotti già consegnati in oltre 35 paesi. Non è una truffa. Il rischio residuo non è la frode ma il pre-ordine: paghi ora per una consegna prevista a fine 2026, e lo strumento è di nicchia e polarizzante. La domanda 'mi arriverà ed è reale?' ha risposta sì; la domanda 'vale 615$ per me?' dipende dai tuoi gusti.\n\nAggiornamento della riverifica del 04/09/2026, 57 giorni dopo la prima pubblicazione: il fatto che pesava di più — la timeline dichiarava una 'Consegna Batch 3' a giugno 2026 come se fosse un evento avvenuto, mentre era solo una previsione del venditore mai confermata da una fonte indipendente — resta, a rigore, non risolto: questa riverifica non ha trovato una conferma diretta e indipendente (un backer reale che dichiari di aver ricevuto la propria unità del Batch 3) perché Indiegogo, Elektronauts e Trustpilot sono risultati bloccati dal proxy di rete di questa sessione (dominio per dominio, vedi nota di sicurezza). Il dato 'tre batch spediti in oltre 35 paesi' resta quindi una dichiarazione del venditore stesso, non una conferma di terzi. Detto questo, la ricerca ha prodotto un fatto nuovo e pesante nella direzione opposta al sospetto: la testata musicale indipendente MusicTech (in un'intervista/reportage dedicato) documenta che l'artista Illenium ha usato due unità Sway sul palco durante la sua residency 'ODYSSEY' alla Sphere di Las Vegas (5 marzo - 4 aprile 2026) — una delle produzioni dal vivo più sorvegliate e costose al mondo, con oltre un anno di sviluppo dichiarato dal team di produzione. Un uso professionale di questo livello, ripreso anche da Magnetic Magazine, Mixmag Asia e LiveForLiveMusic, è un riscontro indipendente difficile da falsificare, più forte delle foto amatoriali sui forum già in fonti. A questo si aggiunge continuità operativa osservabile: Batch 4 è stato aperto regolarmente il 18/08/2026 con termini commerciali specifici e verificabili (acconto 25$ rimborsabile al 100% fino al lancio, prezzo VIP 615$ contro un listino dichiarato di 830$), e Magnetic Magazine ha pubblicato una recensione indipendente ad agosto 2026 che definisce Sway 'il controller MIDI più innovativo del 2026' — la stampa di settore continua a occuparsene quasi due anni dopo la campagna, segnale di continuità più che di abbandono. Ricerche mirate su reclami, mancate consegne o rimborsi negati non hanno prodotto alcun riscontro negativo. Bilancio: la promessa specifica sul Batch 3 resta tecnicamente non confermata da fonte indipendente, ma il quadro complessivo attorno all'azienda si è rafforzato, non indebolito, nel periodo passato dalla prima verifica. Punteggio rivisto da 85 a 87.",
    "green_flags": [
      "Fondatori reali e identificabili: Jeremy Buckley e Isaac Jack (Australia)",
      "Passati da Shark Tank Australia: deal da 50.000$ per il 15% (confermato dalla pagina ufficiale Shark Tank AU)",
      "Indiegogo 2024: 256 finanziatori reali, 220.958$ raccolti (900% del goal)",
      "Batch 1 consegnato giu 2025 e Batch 2 dic 2025, in 35+ paesi",
      "Recensioni indipendenti (AltWire, Mixmag Asia, Magnetic Magazine) e video YouTube di terzi",
      "Unità reali fotografate da utenti sui forum di appassionati (Elektronauts)",
      "Aggiornamenti di produzione regolari sulla campagna Indiegogo",
      "Uso professionale documentato da stampa musicale indipendente: Illenium ha usato due unità Sway durante la residency 'ODYSSEY' alla Sphere di Las Vegas (5 marzo - 4 aprile 2026), confermato da MusicTech e ripreso da Magnetic Magazine, Mixmag Asia e LiveForLiveMusic — riscontro indipendente di alto livello, difficile da falsificare",
      "Copertura stampa indipendente ancora attiva ad agosto 2026 (Magnetic Magazine, 'il controller MIDI più innovativo del 2026'), quasi due anni dopo la campagna Indiegogo: segnale di continuità operativa",
      "Batch 4 aperto regolarmente il 18/08/2026 con termini commerciali chiari e verificabili (acconto 25$ rimborsabile al 100% fino al lancio): comportamento coerente con un'azienda operativa",
      "Nessuna segnalazione di truffa, mancata consegna o rimborso negato trovata in questa riverifica (ricerche mirate)"
    ],
    "red_flags": [
      "È un pre-ordine: paghi ora, consegna stimata nov-dic 2026 (rischio slittamento)",
      "Team piccolo, produzione a lotti: capacità limitata",
      "Strumento di nicchia e polarizzante, ergonomia del controllo a gesti discussa dai forum",
      "Molte recensioni 5★ ospitate sul sito del venditore: pesano meno di quelle indipendenti",
      "La consegna del Batch 3 (dichiarata dal venditore per giu/lug 2026) non è stata confermata in modo diretto e indipendente in questa riverifica: Indiegogo, Elektronauts, Trustpilot e il sito audima.com.au sono risultati bloccati dal proxy di rete di questa sessione. Il claim 'tre batch spediti in 35+ paesi' resta una dichiarazione del venditore, non incrociata con un backer reale"
    ],
    "fonti": [
      {
        "titolo": "Indiegogo - campagna Sway",
        "url": "https://www.indiegogo.com/en/projects/audimalabs/sway-the-world-s-most-expressive-midi-controller",
        "tipo": "ufficiale",
        "sostiene": "vero",
        "autorevolezza": 4
      },
      {
        "titolo": "Shark Tank AU (pagina Facebook ufficiale)",
        "url": "https://www.facebook.com/sharktankau/posts/1378105513464163/",
        "tipo": "ufficiale",
        "sostiene": "vero",
        "autorevolezza": 5
      },
      {
        "titolo": "Elektronauts - forum, foto utente",
        "url": "https://www.elektronauts.com/t/audima-labs-sway-midi-controller/242226",
        "tipo": "forum",
        "sostiene": "vero",
        "autorevolezza": 4
      },
      {
        "titolo": "Poly Expression - forum",
        "url": "https://community.polyexpression.com/t/audima-labs-sway/2050",
        "tipo": "forum",
        "sostiene": "vero",
        "autorevolezza": 3
      },
      {
        "titolo": "AltWire - recensione",
        "url": "https://altwire.net/audima-labs-the-sway-review/",
        "tipo": "stampa",
        "sostiene": "vero",
        "autorevolezza": 3
      },
      {
        "titolo": "Mixmag Asia",
        "url": "https://mixmag.asia/read/audima-labs-midi-instrument-sway-turns-movement-into-music-tech",
        "tipo": "stampa",
        "sostiene": "vero",
        "autorevolezza": 4
      },
      {
        "titolo": "The Awesomer",
        "url": "https://theawesomer.com/sway-gesture-midi-music-controller/751174/",
        "tipo": "stampa",
        "sostiene": "vero",
        "autorevolezza": 2
      },
      {
        "titolo": "Trustpilot - audima.com.au",
        "url": "https://www.trustpilot.com/review/audima.com.au",
        "tipo": "altro",
        "sostiene": "vero",
        "autorevolezza": 3
      },
      {
        "titolo": "Sito ufficiale Audima Labs",
        "url": "https://audima.com.au/",
        "tipo": "venditore",
        "sostiene": "neutro",
        "autorevolezza": 2
      },
      {
        "titolo": "Inside Illenium's Odyssey at Las Vegas Sphere — MusicTech",
        "url": "https://musictech.com/features/interviews/interview-illenium-odyssey-las-vegas-sphere/",
        "tipo": "stampa musicale indipendente",
        "sostiene": "Illenium ha usato due unità Sway durante la residency ODYSSEY alla Sphere di Las Vegas (5 marzo - 4 aprile 2026): uso professionale documentato, non promozionale",
        "autorevolezza": 4
      },
      {
        "titolo": "The Sway by Audima Labs Could Be the Most Innovative MIDI Controller of 2026 — Magnetic Magazine",
        "url": "https://magneticmag.com/2026/08/the-sway-by-audima-labs-could-be-the-most-innovative-midi-controller-of-2026/",
        "tipo": "stampa musicale indipendente",
        "sostiene": "Recensione indipendente pubblicata ad agosto 2026: copertura stampa ancora attiva quasi due anni dopo la campagna; conferma Batch 1 esaurito in 7 minuti e prezzo di listino 830$",
        "autorevolezza": 4
      },
      {
        "titolo": "ILLENIUM Turns Sphere Into Audiovisual EDM Cinema With ODYSSEY Residency — LiveForLiveMusic",
        "url": "https://liveforlivemusic.com/news/illenium-turns-sphere-into-audio-visual-edm-cinema-with-odyssey-residency/",
        "tipo": "stampa musicale indipendente",
        "sostiene": "Conferma indipendente delle date della residency ODYSSEY (5 marzo - 4 aprile 2026) alla Sphere di Las Vegas",
        "autorevolezza": 3
      },
      {
        "titolo": "SWAY - Audima Labs, pagina ordine Batch 4",
        "url": "https://audima.com.au/op/sway-b4/",
        "tipo": "venditore",
        "sostiene": "Pre-ordini Batch 4 aperti dal 18/08/2026, consegna stimata nov-dic 2026, prezzo VIP 615$ contro listino 830$",
        "autorevolezza": 2
      },
      {
        "titolo": "FAQs | Sway — Audima Labs",
        "url": "https://audima.com.au/faqs/",
        "tipo": "venditore",
        "sostiene": "Politica di rimborso: acconto di 25$ rimborsabile al 100% fino al lancio di circa agosto 2026",
        "autorevolezza": 2
      },
      {
        "titolo": "Audima Labs Sway Review — 3 Months In (YouTube, 18/05/2026)",
        "url": "https://www.youtube.com/watch?v=cNUrNzzTwc4",
        "tipo": "recensione utente indipendente",
        "sostiene": "Recensione indipendente dopo tre mesi d'uso reale in set dal vivo",
        "autorevolezza": 3
      }
    ],
    "timeline": [
      {
        "data": "2023-03",
        "evento": "Fondazione di Audima Labs (Australia)"
      },
      {
        "data": "2024-07",
        "evento": "Registrazione puntata Shark Tank Australia"
      },
      {
        "data": "2024-10",
        "evento": "Lancio campagna Indiegogo"
      },
      {
        "data": "2024-11",
        "evento": "Campagna chiusa: 256 backer, 220.958$ (+900%). Puntata Shark Tank in onda"
      },
      {
        "data": "2025-06",
        "evento": "Consegna Batch 1"
      },
      {
        "data": "2025-12",
        "evento": "Consegna Batch 2"
      },
      {
        "data": "2026-03-05",
        "evento": "Inizio della residency 'ODYSSEY' di Illenium alla Sphere di Las Vegas (fino al 4 aprile): uso in scena di due unità Sway, documentato da MusicTech e ripreso da più testate musicali indipendenti"
      },
      {
        "data": "2026-05-18",
        "evento": "Recensione utente indipendente su YouTube dopo tre mesi d'uso reale ('3 Months In')"
      },
      {
        "data": "2026-06/07",
        "evento": "Consegna del Batch 3 dichiarata dal venditore (stimata giu/lug 2026); non confermata da fonte indipendente in nessuna delle verifiche KIROSHI//OR effettuate finora, incluso questa del 04/09/2026"
      },
      {
        "data": "2026-08",
        "evento": "Magnetic Magazine pubblica una recensione indipendente che definisce Sway 'il controller MIDI più innovativo del 2026': copertura stampa ancora attiva quasi due anni dopo la campagna"
      },
      {
        "data": "2026-08-18",
        "evento": "Apertura pre-ordini Batch 4, con acconto rimborsabile 25$"
      },
      {
        "data": "2026-11/12",
        "evento": "Consegna Batch 4 stimata (nov-dic 2026), invariata rispetto alla verifica precedente"
      },
      {
        "data": "2026-09-04",
        "evento": "Riverifica di freschezza KIROSHI//OR: nessuna conferma indipendente diretta della consegna del Batch 3 (Indiegogo, Elektronauts, Trustpilot e audima.com.au bloccati dal proxy di rete di questa sessione); punteggio rivisto da 85 a 87 sulla base dell'uso professionale documentato (Illenium/Sphere), della continuità operativa (Batch 4 regolarmente aperto, stampa indipendente ancora attiva) e dell'assenza di segnalazioni negative"
      }
    ],
    "nota_sicurezza": "Nessun segnale di malware o phishing. Dominio ufficiale audima.com.au coerente; nessun link sospetto nel materiale analizzato. Limite dichiarato della riverifica del 04/09/2026: il proxy di rete di questa sessione ha bloccato l'accesso diretto (WebFetch, errore 'EGRESS_BLOCKED') a tutti i domini rilevanti per questo verdetto, inclusi indiegogo.com, audima.com.au, elektronauts.com, trustpilot.com, reverb.com e magneticmag.com. L'esistenza e il contenuto sostanziale delle fonti citate sono stati confermati solo indirettamente, tramite motore di ricerca, e non con lettura diretta della pagina. Questo pesa in particolare sulla conferma della consegna del Batch 3: non è stato possibile leggere direttamente un aggiornamento Indiegogo o un post di un backer reale che confermi la ricezione dell'unità.",
    "issue": 1,
    "data_verifica": "2026-09-04",
    "id": "0001"
  },
  {
    "titolo": "ULTRAFAB srl — chi c'è dietro ultrafab.it",
    "oggetto": "ULTRAFAB SRL, P.IVA 03832080984, Brescia. Software e IoT per la digitalizzazione industriale (prodotto «Bishop»). Sito ultrafab.it.",
    "domanda": "Richiesta di «tutte le informazioni riguardanti questa ditta milanese». Esiste davvero? Chi la controlla? Che conti ha? E che rapporto ha con la «Dot Dot Dot srl» citata nella richiesta?",
    "modalita": "scava",
    "punteggio": 65,
    "etichetta": "reale, con riserve",
    "verdetto": "Azienda vera e operativa, non una scatola vuota: dieci anni di attività, stampa indipendente che ne parla dal 2019, sede fisica, bilanci depositati. Ma la richiesta parte da tre premesse sbagliate, e la più importante cambia la partita. Primo: non è milanese, è bresciana — sede legale in Via Orzinuovi 12, Brescia. Secondo: non c'è alcun legame documentato con una «Dot Dot Dot srl»; quella esiste ed è milanese davvero (DOTDOTDOT SRL, studio di exhibition design, P.IVA 05570390962), ma è tutt'altra azienda per attività, sede e dimensione. Terzo, ed è il punto che pesa di più: dal settembre 2024 ULTRAFAB non è più indipendente — l'ingresso in Regesta Group è stato annunciato dal gruppo stesso, che la elenca fra le proprie cinque società. La quota acquisita non è pubblica. Il sito ultrafab.it non lo dice da nessuna parte: chi valuta l'azienda leggendo solo il sito legge una versione superata dai fatti da quasi due anni, su una piattaforma ferma al 2019. I conti sono quelli di una micro-impresa in oscillazione: due esercizi consecutivi in perdita (2023 e 2024, con il rosso 2024 pari a oltre sette volte il capitale sociale) e un ritorno all'utile nel 2025. Tutti i dati economici qui riportati vengono da aggregatori commerciali che rielaborano il Registro Imprese: nessun bilancio depositato è stato letto direttamente, e la visura ufficiale è a pagamento. Per una valutazione che comporti impegni, la visura camerale non è un optional.\n\nAggiornamento della riverifica del 04/09/2026, 33 giorni dopo la prima pubblicazione: i due punti indicati come più fragili dal triage — l'utile 2025 e la quota Regesta — sono stati ricontrollati. Sull'utile 2025 il quadro si è rafforzato: la verifica precedente si basava su un solo aggregatore (reportaziende.it) e segnalava esplicitamente il dato come 'non incrociato'; questa riverifica trova le stesse cifre (fatturato 564,4 mila euro, +62,2% sul 2024; utile netto 27,0 mila euro, dopo la perdita di 143,9 mila del 2024) ripetute in modo identico anche su registroaziende.it e companyreports.it. Tre aggregatori indipendenti che convergono sullo stesso numero riducono il rischio di un errore isolato di trascrizione, ma non equivalgono alla lettura diretta del bilancio depositato: è possibile che più aggregatori attingano alla stessa fonte primaria (Registro Imprese) senza rielaborazione incrociata reale, quindi il limite dichiarato nella prima verifica resta valido nella sostanza, solo attenuato. Sulla quota Regesta, invece, nulla è cambiato: nessuna fonte reperita in questa riverifica rende pubblica la percentuale acquisita nel settembre 2024; resta un dato non disponibile, non solo non trovato. Un fatto nuovo, non presente nella prima verifica: secondo la scheda aggiornata di Regesta Group, nel 2026 Ultrafab ha ottenuto una certificazione per il proprio sistema di gestione della sicurezza delle informazioni (SGSI, tipo ISO/IEC 27001), con la relativa policy resa scaricabile — un segnale di investimento organizzativo continuativo sotto la nuova proprietà, non di abbandono. Sul fronte opposto, i due red flag tecnici legati al sito (WordPress 5.3.2 fuori supporto, mancata menzione di Regesta Group) non sono stati ricontrollabili in questa sessione: il dominio ultrafab.it, così come regestaitalia.eu e gli aggregatori camerali, sono risultati bloccati dal proxy di rete per l'accesso diretto (WebFetch); le ricerche mirate non hanno trovato evidenza che il sito sia stato aggiornato né che ora citi l'appartenenza al gruppo, ma è un'assenza di prova, non una prova di assenza — va dichiarata come tale. Bilancio: il dato economico più fragile si è irrobustito, la questione di trasparenza societaria resta aperta tale e quale, e un fatto nuovo e positivo emerge sul fronte della governance operativa. Punteggio rivisto da 62 a 65.",
    "green_flags": [
      "Identità verificabile: la P.IVA 03832080984 pubblicata sul sito corrisponde a un'impresa realmente iscritta e attiva al Registro Imprese di Brescia, REA BS-566716.",
      "Stampa indipendente su più anni e non promozionale: Giornale di Brescia (21 aprile 2019) sul prodotto Bishop, Il Sole 24 Ore (10 aprile 2020) con l'azienda come soggetto principale e dettagli fisici verificabili, fra cui un fablab di circa 450 mq.",
      "Presenza fisica riscontrabile su fonti terze indipendenti: indirizzo e telefono fisso coincidenti su più elenchi, partecipazione come espositore a fiere industriali bresciane.",
      "Dominio registrato l'8 gennaio 2016 presso registrar italiano, rinnovato fino al 2027, con storico di archiviazione web continuo dal 19 aprile 2016: nessun tratto da dominio riciclato o parcheggiato.",
      "Bilanci depositati e consultabili per più esercizi, stato camerale «attiva»: nessun segnale di società dormiente, e nessuna notizia di procedure concorsuali emersa dalle fonti aperte consultate.",
      "Inserimento in un gruppo strutturato: Regesta Group, capogruppo bresciana attiva dal 2007 che dichiara oltre 250 persone e cinque società.",
      "Riconoscimento da ente terzo: vittoria della tappa bresciana del premio CNA «Cambiamenti» nell'ottobre 2018.",
      "Case history con clienti nominati e descrizioni tecniche specifiche, non testi generici con segnaposto.",
      "Il ritorno all'utile 2025 (fatturato 564,4 mila euro, +62,2%; utile netto 27,0 mila euro) è ora confermato in modo identico da tre aggregatori camerali indipendenti (reportaziende.it, registroaziende.it, companyreports.it), non da uno solo come nella prima verifica.",
      "Segnale di investimento organizzativo continuativo sotto Regesta Group: secondo la scheda del gruppo, nel 2026 Ultrafab ha ottenuto una certificazione per il proprio sistema di gestione della sicurezza delle informazioni, con policy SGSI pubblicata."
    ],
    "red_flags": [
      "La premessa della richiesta è errata: non è una ditta milanese. Sede legale a Brescia, Via Orzinuovi 12. Nessuna fonte consultata le attribuisce sedi o unità locali a Milano.",
      "Il sito non menziona in nessuna pagina l'appartenenza a Regesta Group, annunciata a settembre 2024: chi valuta il fornitore dal solo sito non sa chi lo controlla. Questa riverifica non ha potuto ricontrollare direttamente la pagina (dominio bloccato dal proxy di rete) e non ha trovato, tramite ricerca, alcuna indicazione che la situazione sia cambiata: resta un'assenza di prova, non una conferma che il sito sia rimasto identico.",
      "Il sito risultava, alla verifica precedente, tecnicamente abbandonato: WordPress 5.3.2 (dicembre 2019) e componenti coeve, fuori supporto da circa sei anni. Non è stato possibile ricontrollare questo dato in questa riverifica (accesso diretto al dominio bloccato dal proxy): riportato come non riverificato, né confermato né smentito.",
      "Perdita 2024 di 143.944 euro su ricavi di 347.990, secondo esercizio consecutivo in rosso dopo la perdita di 26.773 euro del 2023. Il rosso 2024 supera di oltre sette volte il capitale sociale.",
      "Ricavi 2024 in calo di circa il 13-14% sull'anno precedente.",
      "Il footer del sito espone soltanto la partita IVA: mancano ragione sociale completa, sede iscritta al registro imprese e capitale sociale, e non è stata trovata alcuna pagina di privacy o cookie policy fra i link interni. Non riverificato direttamente in questa sessione per il blocco del proxy.",
      "Il dominio ultrafab.it non è intestato alla società ma a una persona fisica, con dati di registrazione mai aggiornati dal 2016: asset digitale fuori dal perimetro societario. Pratica diffusa nelle PMI, ma rilevante in una due diligence.",
      "Le fonti pubbliche si contraddicono sull'anno di fondazione: 2016 per registri, Giornale di Brescia e LinkedIn; 2017 nel comunicato di Regesta.",
      "Il claim «20 anni di esperienza» accostato a «Start Up» non è mai spiegato: la società è del 2016.",
      "La pagina «Partner» non nomina alcun partner: è solo un invito a diventarlo.",
      "Nessuna recensione pubblica di clienti reperibile su alcuna piattaforma: non esiste riscontro indipendente della soddisfazione, né positivo né negativo.",
      "Rischio concreto di confusione con Ultrafab Inc. (Farmington, New York), produttore statunitense di guarnizioni per serramenti, estraneo alla società bresciana: le recensioni che compaiono cercando «Ultrafab» non riguardano quest'azienda.",
      "La quota di Regesta Group in Ultrafab resta non pubblica: nessuna fonte reperita in questa riverifica (04/09/2026) la rende nota. Confermato di nuovo, non solo non trovato in precedenza."
    ],
    "fonti": [
      {
        "titolo": "Ultrafab — sito ufficiale (homepage e pagina Contattaci)",
        "url": "https://ultrafab.it/it/",
        "tipo": "sito del soggetto",
        "sostiene": "P.IVA 03832080984 e indirizzo operativo Via Orzinuovi 10; assenza di REA, capitale sociale e privacy policy; nessuna menzione di Regesta Group",
        "autorevolezza": "bassa — fonte diretta interessata, ma è l'unico punto in cui il soggetto dichiara la propria P.IVA. Non raggiunta con WebFetch nella riverifica del 04/09/2026 (bloccata dal proxy di rete): il contenuto qui riportato risale alla verifica precedente e non è stato riconfermato"
      },
      {
        "titolo": "Covid, la startup che stampa valvole per maschere da sub — Il Sole 24 Ore, 10 aprile 2020",
        "url": "https://www.ilsole24ore.com/art/covid-startup-che-stampa-valvole-maschere-decathlon-ADlgNSE",
        "tipo": "stampa nazionale indipendente",
        "sostiene": "Esistenza fisica e operativa: fablab di circa 450 mq, riconversione produttiva durante il Covid, struttura di cinque persone oltre al fondatore più collaboratori",
        "autorevolezza": "alta — quotidiano economico nazionale, articolo dedicato e non promozionale"
      },
      {
        "titolo": "Regesta Group — scheda Ultrafab e comunicato sull'acquisizione",
        "url": "https://www.regestaitalia.eu/il-gruppo/ultrafab/",
        "tipo": "comunicazione dell'acquirente",
        "sostiene": "Ingresso di Ultrafab in Regesta Group annunciato il 6 settembre 2024; composizione del gruppo; indicazione del 2017 come anno di fondazione, in contrasto con i registri; nel 2026 Ultrafab ha ottenuto una certificazione per il proprio sistema di gestione della sicurezza delle informazioni (SGSI), con policy pubblicata",
        "autorevolezza": "media — parte interessata, ma è l'unica fonte diretta sull'operazione e dichiara contro il proprio interesse la data di fondazione discordante. Contenuto aggiornato confermato solo indirettamente via motore di ricerca nella riverifica del 04/09/2026 (dominio bloccato dal proxy di rete per l'accesso diretto)"
      },
      {
        "titolo": "ULTRAFAB SRL — scheda d'impresa, aziende.it",
        "url": "https://www.aziende.it/ultrafab-srl",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "REA BS-566716, sede legale Via Orzinuovi 12, forma giuridica srl, stato attiva, capitale sociale di 20.000 euro (dato presente su questa sola fonte), contributi pubblici ricevuti",
        "autorevolezza": "media — rielabora dati camerali ma è un servizio commerciale che vende la visura; la colonna «capitale» risulta internamente incoerente"
      },
      {
        "titolo": "ULTRAFAB SRL — dati di bilancio, reportaziende.it",
        "url": "https://www.reportaziende.it/ultrafab_srl_bs",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "Ricavi e risultato d'esercizio 2023, 2024 e 2025 (fatturato 2025: 564,4 mila euro, +62,2%; utile netto 2025: 27,0 mila euro); codice ATECO 62.10.00",
        "autorevolezza": "media — unica fonte per i dati 2025 nella prima verifica; nella riverifica del 04/09/2026 le stesse cifre sono state trovate anche su registroaziende.it e companyreports.it"
      },
      {
        "titolo": "ULTRAFAB SRL — scheda, fatturatoitalia.it",
        "url": "https://app.fatturatoitalia.it/ultrafab_srl-03832080984",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "Fascia di addetti e costo del personale 2024; codice ATECO indicato come 62.01, diverso da quello di reportaziende.it",
        "autorevolezza": "media"
      },
      {
        "titolo": "Registro .it — whois del dominio ultrafab.it (interrogazione su whois.nic.it)",
        "url": "https://web-whois.nic.it/",
        "tipo": "registro ufficiale",
        "sostiene": "Dominio creato l'8 gennaio 2016, scadenza 8 gennaio 2027, registrar italiano, intestazione a persona fisica e non alla società",
        "autorevolezza": "massima — registro ufficiale del ccTLD italiano. Il dato è stato ottenuto interrogando il registro col protocollo whois; a questo indirizzo il lettore può ripetere la stessa interrogazione dal browser."
      },
      {
        "titolo": "DOTDOTDOT SRL — scheda d'impresa, aziende.it",
        "url": "https://www.aziende.it/dotdotdot-srl",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "La società milanese con questo nome ha P.IVA 05570390962, ATECO 74.14.09 (design), 24 dipendenti: attività, sede e dimensione diverse da Ultrafab, nessun legame rilevato",
        "autorevolezza": "media"
      },
      {
        "titolo": "ULTRAFAB — scheda su PagineBianche",
        "url": "https://www.paginebianche.it/scheda/brescia/ultrafab.11109845",
        "tipo": "elenco pubblico",
        "sostiene": "Recapito telefonico e indirizzo a Brescia coerenti con i registri",
        "autorevolezza": "media — riscontro indipendente sull'esistenza fisica"
      },
      {
        "titolo": "ULTRAFAB SRL — dati di bilancio, registroaziende.it",
        "url": "https://registroaziende.it/azienda/ultrafab-srl-brescia",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "Conferma indipendente delle stesse cifre 2024-2025 di reportaziende.it (fatturato 2025: 564,4 mila euro, +62,2%; utile netto 2025: 27,0 mila euro; perdita 2024: 143,9 mila euro)",
        "autorevolezza": "media — secondo aggregatore camerale che converge sulle stesse cifre; non è escluso che attinga alla stessa fonte primaria senza rielaborazione indipendente reale. Non raggiunta con WebFetch (bloccata dal proxy di rete), confermata solo tramite motore di ricerca"
      },
      {
        "titolo": "ULTRAFAB SRL — visura e fatturato, CompanyReports.it",
        "url": "https://m.companyreports.it/visura/ultrafab-srl-03832080984",
        "tipo": "aggregatore del Registro Imprese",
        "sostiene": "Terza conferma indipendente delle stesse cifre 2024-2025 (fatturato 2025: 564,4 mila euro; utile netto 2025: 27,0 mila euro)",
        "autorevolezza": "media — terzo aggregatore camerale convergente; stesso limite del precedente sulla non indipendenza della fonte primaria. Non raggiunta con WebFetch (bloccata dal proxy di rete), confermata solo tramite motore di ricerca"
      }
    ],
    "timeline": [
      {
        "data": "2016-01-08",
        "evento": "Registrazione del dominio ultrafab.it, precedente alla costituzione della società."
      },
      {
        "data": "2016",
        "evento": "Costituzione di ULTRAFAB SRL a Brescia. Il giorno esatto varia fra gli aggregatori; il comunicato di Regesta indica invece il 2017."
      },
      {
        "data": "2018-10",
        "evento": "Vittoria della tappa bresciana del premio CNA «Cambiamenti»."
      },
      {
        "data": "2019-04-21",
        "evento": "Il Giornale di Brescia dedica un articolo al prodotto Bishop, descrivendo fondazione, fondatori, partner e funzionamento tecnico, e collocando la sede operativa in Via Orzinuovi 10."
      },
      {
        "data": "2020-04-10",
        "evento": "Il Sole 24 Ore documenta il fablab di circa 450 mq e la riconversione produttiva durante il Covid."
      },
      {
        "data": "2023",
        "evento": "Esercizio in perdita: ricavi 401.836 euro, perdita 26.773 euro (dati da aggregatori)."
      },
      {
        "data": "2024",
        "evento": "Secondo esercizio in perdita: ricavi 347.990 euro, perdita 143.944 euro (dati da aggregatori)."
      },
      {
        "data": "2024-09-06",
        "evento": "Regesta Group annuncia l'ingresso di Ultrafab nel gruppo. La quota acquisita non viene resa pubblica."
      },
      {
        "data": "2025",
        "evento": "Ritorno all'utile: ricavi 564,4 mila euro, utile 27,0 mila euro. Alla prima verifica (02/08/2026) il dato veniva da un solo aggregatore; alla riverifica del 04/09/2026 risulta identico su altri due aggregatori indipendenti."
      },
      {
        "data": "2026",
        "evento": "Secondo la scheda aggiornata di Regesta Group, Ultrafab ottiene una certificazione per il proprio sistema di gestione della sicurezza delle informazioni (SGSI), con policy pubblicata: fatto nuovo, non presente nella verifica di agosto."
      },
      {
        "data": "2026-08-02",
        "evento": "Prima pubblicazione del verdetto. Il sito ultrafab.it non menzionava ancora l'appartenenza al gruppo."
      },
      {
        "data": "2026-09-04",
        "evento": "Riverifica di freschezza KIROSHI//OR: l'utile 2025 è ora confermato da tre aggregatori invece di uno, la quota Regesta resta non pubblica, i red flag tecnici sul sito (WordPress obsoleto, mancata menzione di Regesta) non sono stati riverificabili per blocco del proxy di rete su ultrafab.it e regestaitalia.eu. Punteggio rivisto da 62 a 65."
      }
    ],
    "nota_sicurezza": "Nessun segnale di malware, phishing o raggiro: il dominio è autentico, decennale e presidiato, e l'azienda è realmente iscritta e attiva. I limiti di questa verifica vanno però dichiarati. Primo: tutti i dati economici e societari provengono da aggregatori commerciali che rielaborano il Registro Imprese e ne vendono l'accesso completo; nessun bilancio depositato è stato letto direttamente e la visura camerale ufficiale non è stata consultata. Secondo: organo amministrativo e compagine sociale sono dietro paywall su tutte le fonti aperte, quindi non affermiamo nulla sull'assetto societario dopo l'ingresso nel gruppo — la quota di Regesta non risulta pubblica da nessuna parte, riconfermato il 04/09/2026. Terzo: la sezione «procedure e pregiudizievoli» degli aggregatori è a pagamento, quindi l'assenza di procedure concorsuali non è dimostrata, è soltanto non emersa. Quarto, limite emerso nella riverifica del 04/09/2026: il proxy di rete di questa sessione ha bloccato l'accesso diretto (WebFetch, errore 'EGRESS_BLOCKED') a ultrafab.it, regestaitalia.eu, reportaziende.it e agli altri aggregatori camerali citati; tutti i dati di questa riverifica sono stati confermati solo indirettamente, tramite motore di ricerca, non con lettura diretta della pagina. In particolare non è stato possibile ricontrollare se il sito ultrafab.it sia ancora fermo tecnicamente (WordPress 5.3.2) o se abbia nel frattempo aggiunto una menzione di Regesta Group: questi due punti restano come alla verifica precedente, non riconfermati né smentiti. Chi debba assumere impegni economici su questa società parta da una visura camerale aggiornata e dai bilanci depositati, non da questo verdetto. Per scelta editoriale non pubblichiamo il nome dell'intestatario privato del dominio: è un dato di registro pubblico, ma nominare una persona fisica non aggiunge nulla al merito.",
    "issue": 6,
    "data_verifica": "2026-09-04",
    "id": "0003"
  },
  {
    "titolo": "Próspera — la «città senza Stato» di Roatán alla prova dei fatti",
    "oggetto": "Honduras Próspera Inc., corporation di diritto del Delaware (USA) fondata da Erick Brimen (LLC dall'agosto 2017, corporation dal dicembre 2020), e Próspera ZEDE, zona a statuto speciale su oltre 400 acri dell'isola di Roatán, Honduras. Sito prospera.co.",
    "domanda": "Richiesta di Pier (issue #14, 13/08/2026): «Prospera. Fammi una ricerca approfondita. Grazie», a fronte del titolo circolante «Prospera, la città senza Stato di Peter Thiel diventa realtà». È reale? Cos'è davvero — un ente, un progetto, un luogo? Ci si può fidare di ciò che dichiara? E il «diventa realtà» del titolo regge?",
    "modalita": "scava",
    "punteggio": 54,
    "etichetta": "reale, ma sub iudice",
    "verdetto": "Próspera esiste: non è un rendering, non è una truffa. È una zona a statuto speciale (ZEDE) su oltre 400 acri di Roatán, sviluppata e amministrata da una società privata statunitense — Honduras Próspera Inc., Delaware: LLC dall'agosto 2017, corporation dal dicembre 2020 — fondata e guidata da Erick Brimen. Sul terreno ci sono almeno una torre residenziale operativa (Duna: 14 piani, 85 appartamenti, descritta come l'edificio più alto dell'isola), una clinica di medicina rigenerativa (GARM), un programma di e-residency a 130 dollari l'anno. Il titolo della richiesta sbaglia però due volte. Primo: non è «la città di Peter Thiel». Thiel risulta uno dei finanziatori, tramite Pronomos Capital (fondo di Patri Friedman, seed di circa 9 milioni di dollari nel 2019), dentro una raccolta complessiva di 110-120 milioni da un centinaio di investitori; il progetto è di Brimen, e i rapporti del Dipartimento di Stato USA al Congresso (agosto 2025 e giugno 2026) confermano oltre 100 milioni di capitale americano. Secondo, ed è il punto che pesa: il «senza Stato» oggi non ha base legale riconosciuta dallo Stato ospite. Il Congresso honduregno ha abrogato all'unanimità la legge ZEDE il 20 aprile 2022 e la Corte Suprema l'ha dichiarata incostituzionale con effetto retroattivo il 20 settembre 2024 (voto di stretta maggioranza, sentenza in Gaceta il 25-26 novembre 2024). Próspera continua a operare e ad espandersi appellandosi a una garanzia di «stabilità giuridica di 50 anni» che nessuna fonte primaria indipendente consultata riporta per esteso, e dal dicembre 2022 porta avanti un arbitrato ICSID contro l'Honduras (caso ARB/23/2: richiesta iniziale 10,775 miliardi di dollari, oggi 1,63 miliardi come rimedio subordinato al ripristino del regime), tuttora pendente al 29 agosto 2026. Il «diventa realtà» fotografa un fatto vero — con il presidente Asfura (insediato il 27/01/2026) il clima politico è cambiato, l'Honduras è rientrato nel CIADI il 16 agosto 2026 e il governo tratta la zona con favore di fatto — ma tace che un anno e mezzo prima la stampa finanziaria indipendente raccontava la stessa vicenda come «un incubo da 11 miliardi» (Bloomberg, febbraio 2025), e che il conflitto con la comunità adiacente di Crawfish Rock è documentato dal 2019. Realtà fisica sì; giurisdizione autonoma consolidata no: progetto vivo, conteso, giuridicamente sospeso.\n\nAggiornamento della riverifica del 29/08/2026, dodici giorni dopo la prima pubblicazione: l'arbitrato ICSID resta esattamente dov'era — nessuna sentenza di merito, ultimo atto noto ancora il Procedural Order No. 7 del 6 maggio 2026, e nessuna data di udienza sul merito è stata reperita. Una fonte indipendente aggiuntiva (Rio Times, agosto 2026) riporta che il procuratore generale honduregno Dagoberto Aspra ha dichiarato a metà agosto che 18 reclami risultano pendenti presso ICSID contro l'Honduras, e che il rientro nel CIADI del 16/08/2026 copre solo i fatti successivi a quella data — il vuoto di due anni (25/08/2024-16/08/2026) resta tale. Il fatto nuovo che pesa di più, però, è un altro: un'inchiesta giornalistica indipendente esterna, non ancora disponibile alla prima verifica — «Foreign Correspondent» di ABC News Australia, andata in onda il 18/08/2026 e ripresa in un articolo del 22/08/2026 — è entrata fisicamente a Próspera e riporta circa 200 residenti permanenti effettivi e oltre 220 imprese registrate. Sono meno della metà delle imprese e circa un decimo dei residenti che Próspera stessa dichiarava per il 2024 (~2.000 residenti, 413 imprese): un riscontro indipendente, sul campo, che conferma proprio il sospetto già segnalato nella prima verifica — i numeri di Próspera sono largamente gonfiati rispetto alla realtà osservabile. Per questo il punteggio scende da 58 a 54: non perché la realtà fisica o legale del progetto sia cambiata, ma perché una fonte indipendente ha ora quantificato quanto siano distanti dal vero le cifre che la società diffonde su di sé — il punto su cui la fiducia va più graduata. Limite dichiarato, come nella prima verifica: il proxy di rete della sandbox ha bloccato il fetch diretto anche delle nuove fonti (abc.net.au, riotimesonline.com), lette solo per snippet di ricerca — verifica «a due gradi», dichiarata come tale, sia oggi sia il 17/08.",
    "green_flags": [
      "Esistenza fisica verificata da stampa indipendente sul campo: reportage Rest of World (2021) e Bloomberg (13-14/02/2025) descrivono cantieri, edifici e residenti reali a Roatán, non solo rendering.",
      "Torre residenziale Duna operativa: 14 piani, 85 appartamenti, descritta come l'edificio più alto di Roatán; occupazione al 100% per tre mesi consecutivi dichiarata a marzo 2025 (dato di parte).",
      "Società madre tracciabile: Honduras Próspera Inc., corporation del Delaware (LLC dall'agosto 2017, conversione dicembre 2020), CEO Erick Brimen — ricostruzione concorde di più fonti legali e giornalistiche, non smentita da alcuna fonte.",
      "Investimento confermato da fonte governativa terza: i rapporti del Dipartimento di Stato USA al Congresso (agosto 2025 e giugno 2026) attestano oltre 100 milioni di dollari di capitale statunitense in Honduras Próspera Inc.",
      "Contenzioso reale e pubblico: il caso ICSID ARB/23/2 è registrato con atti consultabili (italaw, Jus Mundi, UNCTAD) — le pretese di Próspera passano da un tribunale internazionale, non solo da comunicati stampa.",
      "Il 26/02/2025 il tribunale ICSID ha respinto le eccezioni preliminari dell'Honduras (mancato esaurimento dei rimedi interni): la causa di Próspera ha superato un primo vaglio e prosegue nel merito.",
      "La stessa sentenza di incostituzionalità (20/09/2024) riconosce tutela agli investimenti e alle proprietà acquisiti in buona fede dalle imprese ZEDE preesistenti: non tutto è azzerato.",
      "Regole interne pubblicate: la zona ha una gazzetta ufficiale (pzgps.hn) con governance dichiarata — Segretario Tecnico, Council of Trustees, regolatore finanziario RIFC — anche se emanata dalla stessa entità regolata.",
      "Attività confermata come reale e in corso anche da un'inchiesta giornalistica indipendente esterna: 'Foreign Correspondent' di ABC News Australia (18-22/08/2026) è entrata fisicamente sul posto e descrive una comunità operativa di imprenditori tech e biohacker, non un progetto abbandonato o solo sulla carta."
    ],
    "red_flags": [
      "La base giuridica dell'autonomia è stata cancellata: legge ZEDE abrogata all'unanimità dal Congresso il 20/04/2022 (sanzione presidenziale 25/04) e dichiarata incostituzionale con effetto retroattivo dalla Corte Suprema il 20/09/2024, sentenza pubblicata in Gaceta il 25-26/11/2024.",
      "Il possessivo del titolo è fuorviante: Próspera non è «di Peter Thiel». Thiel risulta uno dei backer tramite Pronomos Capital (seed ~9 M$, 2019) su 110-120 M$ raccolti da circa 100 investitori; fondatore e CEO è Erick Brimen. Una fonte minoritaria non verificabile nega perfino l'investimento di Thiel.",
      "I numeri chiave sono autodichiarati e ora si sono rivelati fortemente sovrastimati: ~2.000 residenti e 413 imprese dichiarati per il 2024, contro i circa 200 residenti permanenti e le poco più di 220 imprese registrate riscontrati sul campo da un'inchiesta indipendente esterna (ABC News Australia, 'Foreign Correspondent', 18-22/08/2026) — uno scarto di quasi dieci volte sui residenti.",
      "L'obiettivo dichiarato di 500 M$ investiti in Honduras e 10.000 posti di lavoro entro il 2025 non risulta confermato da alcuna fonte indipendente, e appare ancora meno plausibile alla luce del riscontro sul campo di agosto 2026.",
      "Arbitrato miliardario pendente dal 20/12/2022 (ICSID ARB/23/2): richiesta iniziale di 10,775 miliardi di dollari — circa due terzi del bilancio statale honduregno 2022 — poi riquantificata a 1,63 miliardi come rimedio subordinato; nessuna sentenza al 29/08/2026, nessuna data di udienza di merito reperita.",
      "Conflitto documentato con la comunità adiacente di Crawfish Rock (~600 abitanti): mai consultata alla nascita del progetto, disputa sull'accesso all'acqua dall'estate 2019 (Rest of World, 2021), opposizione tuttora aperta guidata dal consiglio comunitario.",
      "Il 14/10/2024 il sindaco di Roatán ha ordinato la chiusura temporanea di parte della zona per circa 12 milioni di lempiras (~480.000 $) di tasse comunali contestate; Próspera ha definito l'atto illegale e si è detta in regola.",
      "Status giuridico contraddittorio al 29/08/2026: incostituzionale sulla carta, tollerata e di fatto favorita dal governo Asfura — non è stato reperito alcun atto formale che risolva la contraddizione. Il rientro dell'Honduras nel CIADI (16/08/2026) copre solo i fatti successivi a quella data: il procuratore generale honduregno ha dichiarato a metà agosto che restano 18 reclami pendenti contro lo Stato presso ICSID (fonte: Rio Times).",
      "Espansione territoriale proseguita dopo la sentenza: oltre 3,2 milioni di mq (~4% del territorio di Roatán), con nuove acquisizioni nell'area di Crawfish Rock documentate da Criterio.hn.",
      "La garanzia di «stabilità giuridica di 50 anni» invocata da Próspera non è stata letta in alcuna fonte primaria indipendente; una costituzionalista honduregna (Reina Rivera) sostiene che la sentenza 2024 ha effetto ex tunc e travolge ogni atto ZEDE.",
      "Critiche pubbliche di soggetti qualificati: Paul Romer — ispiratore del concetto di charter city, dimessosi nel 2012 dalla commissione di trasparenza ZEDE — giudica Próspera lontana da un modello raccomandabile (citazione riportata di seconda mano dalla stampa critica, non letta in fonte diretta); esperti ONU nel 2021 hanno espresso preoccupazioni sui diritti umani (documento ONU non letto direttamente).",
      "Il framing «diventa realtà» (articoli italiani e italofoni, luglio-agosto 2026) è ribaltato rispetto alla stampa finanziaria indipendente: Bloomberg (febbraio 2025) racconta la stessa vicenda come «incubo da 11 miliardi». L'articolo italiano con il titolo esatto citato nella richiesta non è stato individuato."
    ],
    "fonti": [
      {
        "titolo": "Próspera — sito ufficiale",
        "url": "https://www.prospera.co/en",
        "tipo": "sito del soggetto",
        "sostiene": "Visione, servizi (e-residency a 130 $/anno, industrie ammesse) e cifre di impatto dichiarate dalla società; fetch diretto bloccato dal proxy, contenuti ripresi solo via snippet di ricerca",
        "autorevolezza": "bassa — fonte diretta interessata, numeri autodichiarati senza verifica terza"
      },
      {
        "titolo": "Honduras Próspera Inc. e altri c. Repubblica dell'Honduras, ICSID Case No. ARB/23/2 — italaw",
        "url": "https://www.italaw.com/cases/9971",
        "tipo": "database giuridico indipendente di atti arbitrali",
        "sostiene": "Parti, numero di caso, tribunale e atti procedurali del contenzioso ICSID avviato nel dicembre 2022",
        "autorevolezza": "alta — repository accademico di riferimento per l'arbitrato investitore-Stato; letto solo via snippet, fetch diretto bloccato"
      },
      {
        "titolo": "Honduras Próspera v. Honduras — Procedural Order No. 7 (6 maggio 2026) — Jus Mundi",
        "url": "https://jusmundi.com/en/document/decision/en-honduras-prospera-inc-st-john-s-bay-development-company-llc-and-prospera-arbitration-center-llc-v-republic-of-honduras-procedural-order-no-7-on-applications-to-intervene-by-amicus-curiae-wednesday-6th-may-2026",
        "tipo": "atti processuali (riprodotti da database giuridico)",
        "sostiene": "Il procedimento arbitrale risultava ancora aperto e senza sentenza al 6 maggio 2026, ultimo atto noto ancora al 29/08/2026",
        "autorevolezza": "molto alta — riproduce l'atto ufficiale del tribunale; letto solo via snippet, fetch diretto bloccato"
      },
      {
        "titolo": "Corte Suprema de Honduras declara inconstitucionales zonas económicas especiales — Voz de América",
        "url": "https://www.vozdeamerica.com/a/corte-suprema-honduras-declara-inconstitucionales-zonas-economicas-especiales-/7793209.html",
        "tipo": "stampa internazionale indipendente",
        "sostiene": "La sentenza della Corte Suprema honduregna del 20/09/2024: incostituzionalità retroattiva della legge ZEDE, articoli costituzionali violati, reazioni",
        "autorevolezza": "alta — agenzia internazionale con desk America Latina"
      },
      {
        "titolo": "Congreso Nacional deroga en su totalidad las ZEDE — La Prensa Honduras",
        "url": "https://www.laprensa.hn/honduras/congreso-nacional-deroga-totalidad-zede-honduras-DC7765173",
        "tipo": "stampa nazionale honduregna indipendente",
        "sostiene": "Abrogazione unanime della legge ZEDE da parte del Congresso (20/04/2022) e sanzione presidenziale (25/04/2022)",
        "autorevolezza": "alta — principale quotidiano honduregno, cronaca diretta dei fatti legislativi"
      },
      {
        "titolo": "Próspera reduce a $1,630 millones su reclamo contra Honduras ante el Ciadi — La Prensa Honduras",
        "url": "https://www.laprensa.hn/economia/prospera-reduce-demanda-honduras-1-630-millones-reclamo-pgr-GK27877919",
        "tipo": "stampa nazionale honduregna indipendente",
        "sostiene": "La riduzione della richiesta economica di Próspera nell'arbitrato da 10.775 a circa 1.630 milioni di dollari",
        "autorevolezza": "medio-alta — testata consolidata; dato ripreso via snippet, fetch bloccato"
      },
      {
        "titolo": "United States Investment in Prospera ZEDE — Report to Congress (giugno 2026), Dipartimento di Stato USA",
        "url": "https://www.state.gov/wp-content/uploads/2026/06/United-States-Investment-in-Prospera-ZEDE-Accessible-HRC1399978.pdf",
        "tipo": "documento governativo ufficiale",
        "sostiene": "Oltre 100 milioni di dollari di investimento statunitense in Honduras Próspera Inc. e persistente incertezza sullo status giuridico della ZEDE",
        "autorevolezza": "molto alta come fonte primaria governativa, ma del Paese d'origine degli investitori; contenuto ripreso solo via snippet, fetch bloccato"
      },
      {
        "titolo": "The Dream Was a Libertarian Island Enclave. It's Become an $11 Billion Nightmare — Bloomberg (feb 2025)",
        "url": "https://www.bloomberg.com/news/features/2025-02-13/a-honduras-dream-city-now-faces-11-billion-political-dispute",
        "tipo": "stampa finanziaria internazionale indipendente",
        "sostiene": "Reportage sul campo: la zona esiste fisicamente ma è al centro di una disputa legale multimiliardaria — framing opposto al «diventa realtà»",
        "autorevolezza": "alta — testata finanziaria di riferimento; testo integrale dietro paywall/proxy, letto via snippet"
      },
      {
        "titolo": "A libertarian 'startup city' in Honduras faces its biggest hurdle: the locals — Rest of World (2021)",
        "url": "https://restofworld.org/2021/honduran-islanders-push-back-libertarian-startup/",
        "tipo": "stampa indipendente specializzata, reportage sul campo",
        "sostiene": "La comunità di Crawfish Rock (~600 abitanti) non fu consultata; conflitto documentato sull'accesso all'acqua dal 2019 e opposizione locale",
        "autorevolezza": "alta — reportage originale sul posto; letto via snippet, fetch bloccato"
      },
      {
        "titolo": "ZEDE Próspera gana impulso con respaldo de Asfura y el Cohep — Criterio.hn",
        "url": "https://criterio.hn/inconstitucional-zede-prospera-gana-impulso-con-respaldo-de-asfura-y-el-cohep/",
        "tipo": "stampa investigativa honduregna indipendente",
        "sostiene": "L'avvicinamento del governo Asfura e del COHEP a Próspera nel 2026 nonostante l'incostituzionalità dichiarata; tesi della costituzionalista Reina Rivera sull'effetto ex tunc",
        "autorevolezza": "media-alta — testata investigativa riconosciuta, con orientamento dichiaratamente critico verso il progetto"
      },
      {
        "titolo": "Honduras Signs the ICSID Convention — comunicato ICSID/World Bank",
        "url": "https://icsid.worldbank.org/news-and-events/news-releases/honduras-signs-icsid-convention",
        "tipo": "comunicato istituzionale ufficiale",
        "sostiene": "La firma della ri-adesione dell'Honduras alla Convenzione ICSID (marzo 2026, 166° Stato firmatario), che inverte la denuncia del 2024",
        "autorevolezza": "massima come fonte primaria istituzionale; letta solo via snippet, fetch bloccato"
      },
      {
        "titolo": "Honduras regresa al Ciadi el 16 de agosto tras casi dos años fuera — El Heraldo",
        "url": "https://www.elheraldo.hn/economia/honduras-regresa-ciadi-16-de-agosto-casi-dos-anos-fuera-HF31700968",
        "tipo": "stampa nazionale honduregna indipendente",
        "sostiene": "Il rientro formale dell'Honduras nel CIADI/ICSID il 16/08/2026",
        "autorevolezza": "alta, ma qui solo il titolo è stato verificato: testo integrale non accessibile per blocco proxy"
      },
      {
        "titolo": "Peter Thiel Is Unleashing a Neocolonial Billionaire Fantasy in Honduras — Truthout (16/02/2026)",
        "url": "https://truthout.org/articles/peter-thiel-is-unleashing-a-neocolonial-billionaire-fantasy-in-honduras/",
        "tipo": "stampa indipendente di orientamento critico dichiarato",
        "sostiene": "Il ruolo di Peter Thiel e Pronomos Capital nel finanziamento di Próspera, riportato qui come puro fatto societario-finanziario",
        "autorevolezza": "media — linea editoriale esplicitamente critica verso il soggetto, da bilanciare con le fonti neutre; i dati finanziari coincidono però con quelli di più fonti terze"
      },
      {
        "titolo": "Próspera Demands Honduras Pay $11 Billion for Outlawing Privately Run City — CorpWatch",
        "url": "https://www.corpwatch.org/article/prospera-demands-honduras-pay-11-billion-outlawing-privately-run-city",
        "tipo": "giornalismo investigativo indipendente no-profit (watchdog)",
        "sostiene": "Il raffronto fra la richiesta iniziale da 10,775 miliardi di dollari e il bilancio statale honduregno 2022 (circa due terzi)",
        "autorevolezza": "media — watchdog dichiaratamente critico verso il soggetto; letto via snippet, fetch bloccato dal proxy"
      },
      {
        "titolo": "ZEDE Próspera expande su territorio en Roatán pese a fallo de inconstitucionalidad — Criterio.hn",
        "url": "https://criterio.hn/zede-prospera-expande-su-territorio-en-roatan-pese-a-fallo-de-inconstitucionalidad/",
        "tipo": "stampa investigativa honduregna indipendente",
        "sostiene": "L'espansione territoriale oltre 3,2 milioni di mq (~4% di Roatán) e le nuove acquisizioni nell'area di Crawfish Rock dopo la sentenza di incostituzionalità",
        "autorevolezza": "media-alta — testata investigativa riconosciuta, con orientamento critico dichiarato; letta via snippet, fetch bloccato"
      },
      {
        "titolo": "Alcaldía de Roatán cierra Próspera por no pagar impuestos — El País Honduras",
        "url": "https://www.elpais.hn/alcaldia-de-roatan-cierra-prospera-por-no-pagar-impuestos/",
        "tipo": "stampa nazionale honduregna indipendente",
        "sostiene": "La chiusura temporanea di parte della zona ordinata dal sindaco di Roatán il 14/10/2024 per circa 12 milioni di lempiras di tasse comunali contestate",
        "autorevolezza": "media — cronaca locale; letta via snippet, fetch bloccato"
      },
      {
        "titolo": "Publicado en La Gaceta sentencia de la CSJ sobre las ZEDE — La Tribuna (26/11/2024)",
        "url": "https://www.latribuna.hn/2024/11/26/publicado-en-la-gaceta-sentencia-de-la-csj-sobre-las-zede/",
        "tipo": "stampa nazionale honduregna",
        "sostiene": "La pubblicazione in Gaceta della sentenza della Corte Suprema sulle ZEDE, 25-26 novembre 2024",
        "autorevolezza": "media-alta — quotidiano nazionale; letta via snippet, fetch bloccato"
      },
      {
        "titolo": "Secretario técnico de Próspera ZEDE: «Mientras el Estado cumpla con la garantía de 50 años no habrá problema» — La Tribuna (23/12/2022)",
        "url": "https://www.latribuna.hn/2022/12/23/secretario-tecnico-de-prospera-zede-mientras-el-estado-cumpla-con-la-garantia-de-50-anos-no-habra-problema/",
        "tipo": "stampa nazionale honduregna (intervista a fonte di parte)",
        "sostiene": "La garanzia di «stabilità giuridica di 50 anni» invocata pubblicamente da Próspera per bocca del suo Segretario Tecnico: un'affermazione di parte riportata da testata terza, non un atto letto in originale",
        "autorevolezza": "media — intervista a fonte interessata su testata terza; letta via snippet, fetch bloccato"
      },
      {
        "titolo": "Report to Congress: United States investment in Próspera ZEDE (agosto 2025) — Dipartimento di Stato USA",
        "url": "https://www.state.gov/wp-content/uploads/2025/08/Report-United-States-investment-in-Pro%C2%B4spera-ZEDE-006088-1-508-Accessible-HRC1152641.pdf",
        "tipo": "documento governativo ufficiale",
        "sostiene": "Il primo dei due rapporti al Congresso sull'investimento statunitense nella ZEDE (il secondo, giugno 2026, è linkato sopra)",
        "autorevolezza": "molto alta come fonte primaria governativa; qui verificati solo titolo e URL per via indiretta, fetch bloccato"
      },
      {
        "titolo": "Inside Próspera, the libertarian utopia on a Caribbean island off the coast of Honduras — ABC News Australia (22/08/2026)",
        "url": "https://www.abc.net.au/news/2026-08-22/honduras-prospera-libertarian-utopia-caribbean-roatan/107045960",
        "tipo": "stampa/inchiesta televisiva indipendente estera",
        "sostiene": "Inchiesta 'Foreign Correspondent' sul campo: circa 200 residenti permanenti e oltre 220 imprese registrate — cifre nettamente inferiori a quelle autodichiarate da Próspera per il 2024",
        "autorevolezza": "alta — emittente pubblica australiana, programma investigativo con giornalista sul posto; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      },
      {
        "titolo": "Honduras ICSID Return: What It Means for Investors — The Rio Times (agosto 2026)",
        "url": "https://www.riotimesonline.com/honduras-returns-icsid-2026/",
        "tipo": "stampa indipendente regionale (America Latina)",
        "sostiene": "Dichiarazione del procuratore generale honduregno Dagoberto Aspra: 18 reclami pendenti contro l'Honduras presso ICSID; il rientro nel CIADI del 16/08/2026 copre solo i fatti successivi a quella data",
        "autorevolezza": "media-alta — testata anglofona specializzata su Brasile/America Latina; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      }
    ],
    "timeline": [
      {
        "data": "2013",
        "evento": "L'Honduras vara il regime ZEDE: riforma costituzionale (decreto 236-2012) e legge organica (decreto 120-2013), che consentono zone con autonomia normativa, fiscale e giudiziaria."
      },
      {
        "data": "2017-08",
        "evento": "Honduras Próspera nasce in Delaware (USA) come LLC, fondata da Erick Brimen; viene convertita in corporation nel dicembre 2020. Raccolti nel tempo 110-120 M$ da circa 100 investitori, tra cui Pronomos Capital (backer documentati: Peter Thiel, Marc Andreessen — fatto societario-finanziario)."
      },
      {
        "data": "2020-2021",
        "evento": "Inizia la costruzione fisica su Roatán; la comunità adiacente di Crawfish Rock, non consultata, apprende la reale portata del progetto a cantiere già avviato (reportage Rest of World, 2021)."
      },
      {
        "data": "2022-04-20",
        "evento": "Il Congresso honduregno abroga all'unanimità (128 voti) la legge ZEDE; la presidente Castro sanziona il 25/04. Fonte di stampa segnala una ratifica formale mai completata, mai chiarita del tutto."
      },
      {
        "data": "2022-12-20",
        "evento": "Honduras Próspera Inc. e due consociate depositano la Request for Arbitration ICSID contro l'Honduras (caso ARB/23/2, base CAFTA-DR): richiesta iniziale 10.775 M$."
      },
      {
        "data": "2024-02-24",
        "evento": "L'Honduras (governo Castro) denuncia la Convenzione ICSID, con effetto dal 25/08/2024; per l'art. 72 il caso Próspera, già incardinato, prosegue comunque."
      },
      {
        "data": "2024-09-20",
        "evento": "La Corte Suprema honduregna dichiara incostituzionali con effetto retroattivo i decreti ZEDE (voto di stretta maggioranza; il conteggio varia tra le fonti — 8 a 7 per alcune, 3 a 2 per altre); sentenza pubblicata in Gaceta il 25-26/11/2024. Riconosciuta tutela agli investimenti acquisiti in buona fede."
      },
      {
        "data": "2024-10-14",
        "evento": "Il sindaco di Roatán, Ron McNab, ordina la chiusura temporanea di parte della zona per ~12 milioni di lempiras (~480.000 $) di tasse comunali contestate; Próspera definisce l'atto illegale."
      },
      {
        "data": "2025-02-26",
        "evento": "Il tribunale ICSID respinge le eccezioni preliminari dell'Honduras (mancato esaurimento dei rimedi interni): la causa prosegue nel merito."
      },
      {
        "data": "2025-09-30",
        "evento": "I periti di parte Próspera rivalutano il piano trentennale in 10,6-26,4 miliardi di dollari, ma la compensazione richiesta come rimedio subordinato (il rimedio primario è il ripristino del regime ZEDE) scende a ~1,63 miliardi — dettaglio spesso perso nella narrativa del «reclamo da 11 miliardi»."
      },
      {
        "data": "2025-11-30",
        "evento": "Elezioni generali in Honduras: il 24/12 il CNE proclama vincitore Nasry Asfura (40,27% contro 39,53% di Nasralla, che contesta il risultato)."
      },
      {
        "data": "2026-01-27",
        "evento": "Asfura si insedia come presidente 2026-2030; il giorno dopo avvia il processo di rientro dell'Honduras nel CIADI. Il nuovo governo assume una postura di fatto favorevole a Próspera."
      },
      {
        "data": "2026-03-06",
        "evento": "Asfura firma la ri-adesione alla Convenzione ICSID (166° Stato firmatario); il 19/03 il tribunale respinge la richiesta honduregna di biforcazione del procedimento (Procedural Order No. 6)."
      },
      {
        "data": "2026-08-16",
        "evento": "L'Honduras rientra formalmente nel CIADI dopo quasi due anni (titolo El Heraldo). L'arbitrato ARB/23/2 resta pendente: ultimo atto noto il Procedural Order No. 7 (06/05/2026)."
      },
      {
        "data": "2026-08-18/22",
        "evento": "'Foreign Correspondent' (ABC News Australia) pubblica un'inchiesta sul campo: circa 200 residenti permanenti e oltre 220 imprese registrate, contro i circa 2.000 residenti e 413 imprese autodichiarati da Próspera per il 2024."
      },
      {
        "data": "2026-08 (metà mese)",
        "evento": "Il procuratore generale honduregno Dagoberto Aspra dichiara 18 reclami pendenti contro l'Honduras presso ICSID; il rientro nel CIADI copre solo i fatti dal 16/08/2026 in poi (fonte: Rio Times)."
      },
      {
        "data": "2026-08-29",
        "evento": "Riverifica di freschezza KIROSHI//OR: nessuna sentenza di merito nell'arbitrato ICSID, nessuna data di udienza reperita; punteggio rivisto da 58 a 54 alla luce del riscontro indipendente sui numeri autodichiarati."
      }
    ],
    "nota_sicurezza": "Nessun segnale di malware, phishing o raggiro: il dominio prospera.co è autentico e il soggetto è reale e ampiamente documentato. I limiti di questa verifica vanno però dichiarati, e sono più pesanti del solito. Primo: il proxy di rete della sandbox ha bloccato il fetch diretto di quasi tutte le fonti primarie — prospera.co, pzgps.hn, ICSID/World Bank, italaw, Jus Mundi, state.gov, Bloomberg, La Prensa, El Heraldo, abc.net.au, riotimesonline.com, perfino Wikipedia — quindi ogni dato qui riportato viene da riassunti di ricerca che citano quelle pagine, non da lettura diretta: verifica «a due gradi», non di prima mano, sia nella verifica del 17/08 sia in questa riverifica del 29/08. Secondo: l'iscrizione di Honduras Próspera Inc. nel registro societario del Delaware non è stata verificata sul registro ufficiale, solo su ricostruzioni secondarie concordi. Terzo: i numeri su residenti e imprese restano in parte autodichiarati da Próspera (fermi al 2024), ma oggi esiste anche un riscontro indipendente esterno (ABC News Australia, agosto 2026) che li colloca molto più in basso — un dato che rafforza, non risolve, il dubbio sulla loro affidabilità. Quarto: il testo dei contratti di «stabilità giuridica di 50 anni» non è mai stato letto in fonte primaria; l'articolo italiano con il titolo esatto della richiesta non è stato individuato; il conteggio dei voti della sentenza CSJ varia tra le fonti. Quinto: l'arbitrato ICSID è pendente — qualunque affermazione sull'esito sarebbe una previsione, non un fatto; alla data di questa riverifica (29/08/2026) non è stata reperita nessuna data di udienza sul merito. Avvertenza pratica, fatti e non consigli finanziari: chi valutasse e-residency, immobili o investimenti nella zona deve sapere che il regime giuridico su cui tutto poggia è stato dichiarato incostituzionale con effetto retroattivo dallo Stato ospite (sentenza 20/09/2024) ed è oggetto di un contenzioso internazionale non concluso; la tolleranza attuale del governo Asfura è una prassi politica, non un atto formale reperito. Chi debba decidere parta dagli atti primari — sentenza in Gaceta, atti ICSID, rapporti del Dipartimento di Stato — non da questo verdetto né dai comunicati del soggetto. Infine: Peter Thiel e gli altri investitori sono citati qui esclusivamente come fatto societario-finanziario documentato; su di loro come persone questo verdetto non dice e non deve dire nulla (confine BRAINDANCE).",
    "issue": 14,
    "data_verifica": "2026-08-29",
    "id": "0005"
  },
  {
    "titolo": "Insta360 Luna Ultra — la gimbal-cam Leica di Insta360",
    "oggetto": "Insta360 Luna Ultra, fotocamera gimbal palmare a doppio obiettivo (sensore 1\" 8K + tele) co-progettata con Leica, di Insta360 (Arashi Vision Inc.). Lanciata il 10 giugno 2026 a 769,99$.",
    "domanda": "È un prodotto reale? Le specifiche dichiarate (sensore, ottica Leica, video 8K/10-bit, bitrate) reggono al confronto con le recensioni indipendenti? Ci si può fidare per un uso da B-cam nel flusso cinema di Pier? (Domanda separata, qui non trattata: se convenga comprarla — quella è una scelta d'acquisto, non un fatto da verificare.)",
    "modalita": "rapida",
    "punteggio": 79,
    "etichetta": "reale, con riserve",
    "verdetto": "Insta360 Luna Ultra è un prodotto reale, non un render né un annuncio mai concretizzato: lanciata il 10 giugno 2026 a 769,99$, è in vendita presso rivenditori terzi indipendenti di riferimento (B&H Photo Video, Amazon US) — ancora a listino e senza segnali di ritiro dal mercato alla data di questa riverifica — ed è stata recensita da numerose testate specializzate indipendenti — fra le altre PetaPixel, TechRadar, Engadget, RedShark, ProVideoCoalition e Gizmodo, linkate in fonti — con giudizi convergenti e non promozionali. Le specifiche dichiarate da Insta360 (sensore 1\" 8K con ottica Leica Summicron F1.8, tele 1/1.3\" f/2.0, video 8K30 in Dolby Vision, colore 10-bit I-Log a 14 stop, codec H.265 fino a 120 Mbps, zoom 6x lossless/12x digitale, gimbal 3 assi) sono confermate senza contraddizioni sostanziali su tutte le fonti indipendenti incrociate.\n\nAggiornamento della riverifica del 29/08/2026, dodici giorni dopo la prima pubblicazione: il fatto che pesava di più — la causa DJI contro Insta360 depositata l'11/06/2026 in Texas sulla linea Luna, con richiesta di ingiunzione permanente sulla vendita negli USA — si è chiusa senza che quel rischio si sia mai concretizzato. Il 28/06/2026 le due aziende hanno depositato volontariamente la rinuncia a tutte e quattro le cause incrociate pendenti nel distretto orientale del Texas (i due procedimenti DJI e i due contro-procedimenti Insta360); il tribunale ha archiviato «senza pregiudizio» il 29/06/2026, il che significa che nessuna delle due parti ha ammesso torto e ciascuna potrebbe in teoria riproporre le stesse pretese in futuro — non risulta però, alla data di questa verifica, che sia stato fatto. Nessun accordo economico o di licenza è stato annunciato pubblicamente: la ritirata resta più stretta di quanto sembri, per usare l'espressione di più testate indipendenti concordi (DroneXL, dronedj, dichiarazioni riprese anche da Medium/Kesteloo). Va inoltre distinto con chiarezza un fascicolo diverso, spesso confuso con questo: dal 23/03/2026 — quindi prima ancora del lancio della Luna Ultra (10/06/2026) — DJI ha in corso presso il tribunale intermedio di Shenzhen (Cina) una causa contro Arashi Vision (casa madre di Insta360) sulla titolarità di sei brevetti relativi a tecnologia drone (controllo di volo, design strutturale, elaborazione immagini): riguarda prodotti drone come l'Antigravity A1, non la Luna Ultra, e resta pendente senza legame diretto con questo prodotto. Il risultato netto per la Luna Ultra: il rischio legale specifico che aveva fatto scendere il punteggio da 80 a 74 nella prima verifica si è ridimensionato con l'archiviazione di fine giugno, per quanto non azzerato («senza pregiudizio», nessuna pace dichiarata fra i due gruppi, e un clima di rivalità legale ancora acceso su altri fronti); il punteggio risale a 79.\n\nResta confermata la distinzione già indicata dalla ricerca originale: \"è reale\" e \"le specifiche reggono\" hanno risposta sì; \"è una cinema-cam adatta a un grading pesante\" ha risposta no — il codec è H.265 long-GOP a 120 Mbps, non RAW né ProRes, pesante da editare su macchine non recenti, ed è costruita come vlog/gimbal-cam one-man-band (batteria dichiarata ~4h, corpo pocket), non come A-cam da set strutturato. Per l'uso di Pier resta una B-cam solida, non un sostituto della camera principale. Un dettaglio minore resta irrisolto: sul numero esatto e sulla data dell'ultimo aggiornamento firmware le fonti divergono — l'ultima verifica indicava v1.0.283 a fine luglio 2026, una ricerca odierna riporta invece v1.0.47 al 18 giugno 2026 da un aggregatore di firmware di affidabilità non verificata; non essendo stato possibile risolvere la discrepanza con una fonte primaria raggiungibile, viene dichiarata come tale, non risolta a favore dell'una o dell'altra. Limite dichiarato di questa verifica: in questa sessione l'accesso diretto (WebFetch) a tutti i domini delle fonti consultate è stato bloccato dal proxy di rete (\"EGRESS_BLOCKED\"), sia il 17/08 sia il 29/08; la loro esistenza e il contenuto sostanziale sono stati confermati solo indirettamente, tramite motore di ricerca.",
    "green_flags": [
      "Prodotto ampiamente recensito da numerose testate specializzate indipendenti (fra le altre PetaPixel, TechRadar, Engadget, RedShark, ProVideoCoalition, Gizmodo), con giudizi convergenti e non promozionali: non un render, non un semplice comunicato.",
      "In vendita presso rivenditori terzi indipendenti di riferimento — B&H Photo Video e Amazon US — a conferma di disponibilità reale sul mercato, non solo di un annuncio del produttore; ancora a listino al 29/08/2026, nessun segnale di ritiro.",
      "Specifiche tecniche dichiarate (sensore 1\" 8K, ottica Leica Summicron F1.8 + tele 1/1.3\" f/2.0, 10-bit I-Log a 14 stop, H.265 fino a 120 Mbps, zoom 6x lossless/12x digitale) confermate senza contraddizioni sostanziali su tutte le fonti indipendenti incrociate.",
      "Prezzo di lancio 769,99$ confermato da più fonti indipendenti e ancora corrente al 29/08/2026, invariato rispetto al lancio.",
      "Il rischio legale specifico su questo prodotto si è ridimensionato: le quattro cause incrociate DJI-Insta360 in Texas sulla linea Luna sono state ritirate volontariamente da entrambe le parti il 28/06/2026 e archiviate il 29/06/2026 — l'ingiunzione permanente sulla vendita USA richiesta da DJI non si è mai concretizzata.",
      "La co-progettazione con Leica per l'ottica è un dato tecnico riscontrato in modo coerente su tutte le recensioni indipendenti, non solo nel materiale di marketing Insta360."
    ],
    "red_flags": [
      "L'archiviazione delle cause in Texas è avvenuta 'senza pregiudizio': nessuna ammissione di responsabilità da nessuna delle due parti, nessun accordo pubblico annunciato, e le stesse pretese potrebbero in teoria essere riproposte in futuro — non risulta però che sia successo alla data di questa verifica.",
      "Resta aperta, distinta e non collegata alla Luna Ultra, una causa più ampia e antecedente: dal 23/03/2026 DJI contesta ad Arashi Vision (casa madre di Insta360) la titolarità di sei brevetti su tecnologia drone presso il tribunale di Shenzhen — segnala un clima di rivalità legale strutturale fra le due aziende che potrebbe riflettersi su prodotti futuri, anche se oggi non tocca la Luna Ultra.",
      "Codec H.265 (HEVC) fino a 120 Mbps, non RAW né ProRes: adatto a un editing/color grading leggero, pesante da decodificare su workstation non recenti — limite esplicito per un flusso di grading spinto.",
      "Le recensioni di lancio concordano su difetti da 'prodotto di prima generazione': schermo removibile piccolo (564x318 px) poco leggibile per confermare il fuoco, istogramma visibile solo tramite app, controlli manuali giudicati scomodi da più testate.",
      "È costruita come vlog/gimbal-cam one-man-band, non come cinema-cam da set strutturato: corpo pocket, batteria dichiarata di circa 4 ore — limiti strutturali per un uso professionale continuativo.",
      "Prodotto di prima generazione per questa linea (la Luna Ultra è il primo prodotto Insta360 di questo tipo): nessuno storico pluriennale di affidabilità come per le action cam più mature del marchio.",
      "Verifica limitata dal proxy di rete di questa sessione, sia il 17/08 sia il 29/08: WebFetch diretto bloccato su tutti i domini delle fonti consultate; esistenza e contenuto confermati solo indirettamente via motore di ricerca.",
      "Sul firmware più recente le fonti reperite in questa riverifica si contraddicono (v1.0.283 a fine luglio 2026 secondo la verifica precedente, v1.0.47 al 18/06/2026 secondo un aggregatore di affidabilità non verificata oggi): discrepanza dichiarata, non risolta."
    ],
    "fonti": [
      {
        "titolo": "Insta360 Luna Ultra — pagina prodotto ufficiale",
        "url": "https://www.insta360.com/product/insta360-luna-ultra",
        "tipo": "sito del produttore",
        "sostiene": "specifiche tecniche complete (sensore, ottica, video, zoom, gimbal), prezzo di lancio 769,99$, data di uscita 10 giugno 2026",
        "autorevolezza": "bassa — fonte diretta interessata; non raggiunta con WebFetch in questa sessione (bloccata dal proxy di rete), verificata solo indirettamente via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra Review: An Excellent Vlogging Camera with a Few Caveats — PetaPixel",
        "url": "https://petapixel.com/2026/06/18/insta360-luna-ultra-review-an-excellent-vlogging-camera-with-a-few-caveats/",
        "tipo": "stampa fotografica/video indipendente",
        "sostiene": "'ottima vlog camera con alcune riserve': schermo removibile piccolo (564x318 px) poco leggibile per il fuoco, istogramma visibile solo via app, controlli manuali scomodi",
        "autorevolezza": "alta — testata fotografica indipendente di riferimento, recensione dedicata e non sponsorizzata; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), contenuto confermato via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra full specs appear after official reveal — Notebookcheck",
        "url": "https://www.notebookcheck.net/Insta360-Luna-Ultra-full-specs-appear-after-official-reveal-6x-zoom-modular-design-4K-240fps.1278532.0.html",
        "tipo": "stampa tecnica indipendente",
        "sostiene": "specifiche hardware coerenti con quelle dichiarate: zoom 6x, design modulare, video 4K fino a 240fps",
        "autorevolezza": "media-alta — testata tech generalista con articolo dedicato alle specifiche; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), verificata via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra review: 10-bit gimbal camera tested — RedShark News",
        "url": "https://www.redsharknews.com/insta360-luna-ultra-review",
        "tipo": "stampa di settore video/cinema indipendente",
        "sostiene": "il colore 10-bit I-Log regge alla prova pratica, buona gamma dinamica per la fascia di prezzo",
        "autorevolezza": "alta — testata specializzata in produzione video professionale; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), verificata via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra review: Let the gimbal camera wars begin — Engadget",
        "url": "https://www.engadget.com/2195199/insta360-luna-ultra-review/",
        "tipo": "stampa tech indipendente",
        "sostiene": "recensione positiva, conferma le specifiche principali e la qualità dell'immagine",
        "autorevolezza": "alta — testata tech generalista di riferimento; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), verificata via motore di ricerca"
      },
      {
        "titolo": "Review: Insta360 Luna Ultra (Robbie Coblentz, 29 giugno 2026) — ProVideo Coalition",
        "url": "https://www.provideocoalition.com/review-insta360-luna-ultra/",
        "tipo": "stampa di settore video/cinema indipendente",
        "sostiene": "colloca la Luna Ultra nell'ecosistema video professionale a confronto con DJI Osmo Pocket 3/4; conferma doppio obiettivo, sensore 1\", video 8K",
        "autorevolezza": "alta — testata specializzata in produzione video con pubblico professionale, prospettiva pertinente per un uso cinema; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), verificata indirettamente via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra Standard Combo — scheda prodotto B&H Photo Video",
        "url": "https://www.bhphotovideo.com/c/product/1964142-REG/insta360_cinsabta_luna01_luna_ultra_standard_bundle.html",
        "tipo": "rivenditore terzo indipendente",
        "sostiene": "il prodotto è realmente disponibile all'acquisto presso un rivenditore fotografico/video professionale statunitense di riferimento, a 769,99$",
        "autorevolezza": "alta — rivenditore specializzato di lunga data; riscontro indipendente di disponibilità reale sul mercato, non solo annuncio del produttore; non raggiunta con WebFetch in questa sessione (bloccata dal proxy), verificata indirettamente via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra — manuale online, aggiornamento firmware",
        "url": "https://onlinemanual.insta360.com/lunaultra/en-us/camera/maintenance/firmware-update",
        "tipo": "sito del produttore (supporto tecnico)",
        "sostiene": "esiste un canale ufficiale di aggiornamento firmware; sul numero di versione più recente e la sua data le fonti secondarie divergono (v1.0.283 fine luglio vs v1.0.47 al 18/06, secondo fonti diverse)",
        "autorevolezza": "bassa — fonte diretta interessata, non raggiunta con WebFetch in questa sessione"
      },
      {
        "titolo": "DJI Is Suing Insta360 for Violating Multiple Osmo Pocket Patents — PetaPixel (11/06/2026)",
        "url": "https://petapixel.com/2026/06/11/dji-is-suing-insta360-for-violating-multiple-osmo-pocket-patents/",
        "tipo": "stampa fotografica/video indipendente",
        "sostiene": "Le due cause DJI contro Insta360 depositate in Texas sulla linea Luna: brevetti di design e di utilità, richiesta di danni e di ingiunzione permanente sulla vendita negli USA",
        "autorevolezza": "alta — testata indipendente di riferimento; non raggiunta con WebFetch (proxy), URL e contenuto confermati via motore di ricerca"
      },
      {
        "titolo": "Insta360 Countersues DJI Over Luna Ultra Patent War, Asserting Five U.S. Patents — CineD (12/06/2026)",
        "url": "https://www.cined.com/insta360-countersues-dji-over-luna-ultra-patent-war-asserting-five-u-s-patents/",
        "tipo": "stampa di settore cinema indipendente",
        "sostiene": "La contro-querela di Insta360 del 12/06/2026 con cinque brevetti su stabilizzazione e controllo del gimbal",
        "autorevolezza": "alta — testata di settore indipendente; non raggiunta con WebFetch (proxy), confermata via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra review — TechRadar",
        "url": "https://www.techradar.com/cameras/video-cameras/insta360-luna-ultra-review",
        "tipo": "stampa tech indipendente",
        "sostiene": "Recensione indipendente convergente con le altre sulla qualità d'immagine e sui limiti da prima generazione",
        "autorevolezza": "media-alta — testata tech generalista; non raggiunta con WebFetch (proxy), URL confermata via motore di ricerca"
      },
      {
        "titolo": "Insta360 Luna Ultra review: this is the only gimbal camera you need — Gizmodo",
        "url": "https://gizmodo.com/insta360-luna-ultra-review-this-is-the-only-gimbal-camera-you-need-2000793434",
        "tipo": "stampa tech indipendente",
        "sostiene": "Recensione indipendente convergente, giudizio positivo sulla categoria gimbal-cam",
        "autorevolezza": "media — testata tech generalista; non raggiunta con WebFetch (proxy), URL confermata via motore di ricerca"
      },
      {
        "titolo": "DJI, Insta360 Quietly Drop Their Texas Patent Suits, But the Real Fight Is Still in China — DroneXL (04/07/2026)",
        "url": "https://dronexl.co/2026/07/04/dji-insta360-drop-texas-patent-suits-china-fight-continues/",
        "tipo": "stampa di settore drone/imaging indipendente",
        "sostiene": "Le quattro cause incrociate in Texas (2 DJI + 2 Insta360) sono state ritirate volontariamente il 28/06/2026 e archiviate 'senza pregiudizio' il 29/06/2026; nessun accordo pubblico annunciato; la causa separata di Shenzhen su brevetti drone resta attiva",
        "autorevolezza": "alta — testata specializzata indipendente con numeri di causa citati; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      },
      {
        "titolo": "DJI, Insta360 end US cases, expand patent fight in China — DroneDJ (06/07/2026)",
        "url": "https://dronedj.com/2026/07/06/dji-insta360-patent-dispute-china/",
        "tipo": "stampa di settore drone/imaging indipendente",
        "sostiene": "Conferma indipendente della chiusura dei procedimenti USA e della prosecuzione del contenzioso in Cina",
        "autorevolezza": "alta — testata specializzata indipendente; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      },
      {
        "titolo": "DJI Sues Insta360 Over Six Patents Three Days Before Avata 360 Launch — DroneXL (23/03/2026)",
        "url": "https://dronexl.co/2026/03/23/dji-sues-insta360-patent-lawsuit-avata-360/",
        "tipo": "stampa di settore drone/imaging indipendente",
        "sostiene": "La causa DJI contro Arashi Vision presso il tribunale di Shenzhen, depositata il 23/03/2026 — prima del lancio della Luna Ultra — su sei brevetti relativi a tecnologia drone, non alla Luna Ultra",
        "autorevolezza": "alta — testata specializzata indipendente; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      }
    ],
    "timeline": [
      {
        "data": "2026-03-23",
        "evento": "DJI cita Arashi Vision (casa madre di Insta360) presso il tribunale intermedio di Shenzhen per la titolarità di sei brevetti su tecnologia drone (controllo di volo, design strutturale, elaborazione immagini) — causa distinta, precedente e non relativa alla Luna Ultra, tuttora pendente."
      },
      {
        "data": "2026-06-10",
        "evento": "Lancio ufficiale e apertura vendite di Insta360 Luna Ultra, prezzo 769,99$."
      },
      {
        "data": "2026-06-11",
        "evento": "DJI deposita due cause per violazione di brevetto contro Insta360 in Texas, sulla linea Luna: chiesti danni e un'ingiunzione permanente sulla vendita negli USA."
      },
      {
        "data": "2026-06-12",
        "evento": "Insta360 contro-querela DJI rivendicando cinque propri brevetti su stabilizzazione e controllo del gimbal."
      },
      {
        "data": "2026-06-18",
        "evento": "Recensione indipendente PetaPixel: 'ottima vlog camera con alcune riserve' (schermo piccolo, istogramma solo via app)."
      },
      {
        "data": "2026-06-28",
        "evento": "DJI e Insta360 depositano volontariamente la rinuncia a tutte e quattro le cause incrociate pendenti in Texas."
      },
      {
        "data": "2026-06-29",
        "evento": "Il tribunale del Texas archivia le quattro cause 'senza pregiudizio': nessuna ammissione di responsabilità, nessun accordo pubblico dichiarato, le pretese restano in teoria riproponibili."
      },
      {
        "data": "2026-06-29",
        "evento": "Recensione indipendente ProVideoCoalition: colloca la Luna Ultra nell'ecosistema video professionale a confronto con DJI Osmo Pocket 3/4."
      },
      {
        "data": "2026-07-12",
        "evento": "Ricerca originale KIROSHI//OR (ricerche/insta360-luna-ultra.md)."
      },
      {
        "data": "2026-08-17",
        "evento": "Conversione in verdetto pubblicato, punteggio 74/100 (pesava la causa DJI ancora pendente in quel momento)."
      },
      {
        "data": "2026-08-29",
        "evento": "Riverifica di freschezza KIROSHI//OR: confermata l'archiviazione delle cause USA di fine giugno; punteggio rivisto da 74 a 79. Discrepanza non risolta sulla versione firmware più recente."
      }
    ],
    "nota_sicurezza": "Nessun segnale di malware, phishing o raggiro rilevato: si tratta di un prodotto hardware di un produttore consolidato (Insta360 / Arashi Vision Inc.), in vendita su canali retail verificabili (B&H Photo Video, Amazon US). Limite dichiarato di questa verifica, invariato dalla prima pubblicazione: il proxy di rete di questa sessione ha bloccato l'accesso diretto (WebFetch, errore \"EGRESS_BLOCKED\") a tutti i domini delle fonti consultate, sia il 17/08 sia il 29/08. La loro esistenza, il titolo esatto e il contenuto sostanziale sono stati confermati solo indirettamente, tramite motore di ricerca. Sulla data e il numero esatti dell'ultimo aggiornamento firmware le fonti reperite in questa riverifica si contraddicono (v1.0.283 fine luglio 2026 vs v1.0.47 al 18/06/2026 secondo un aggregatore di affidabilità non verificata): riportato con questa incertezza dichiarata, non risolta a favore dell'una o dell'altra versione. Sulla causa DJI-Insta360 in Texas: la ritirata volontaria del 28/06/2026 e l'archiviazione 'senza pregiudizio' del 29/06/2026 sono riportate in modo concorde da più testate indipendenti (DroneXL, DroneDJ, ripreso anche da Medium); nessun atto giudiziario è stato letto direttamente. Va tenuto distinto il procedimento avviato da DJI a Shenzhen il 23/03/2026 contro Arashi Vision su brevetti drone: precede il lancio della Luna Ultra, riguarda altri prodotti (es. Antigravity A1) e resta pendente, ma non è una minaccia legale specifica per questo prodotto.",
    "issue": 0,
    "data_verifica": "2026-08-29",
    "id": "0006"
  },
  {
    "titolo": "Nikon ZR — la cinema camera Nikon+RED è reale?",
    "oggetto": "Nikon ZR, fotocamera cinema full-frame della linea Nikon Z-CINEMA, nata dalla fusione Nikon+RED (Nikon acquisisce il 100% di RED Digital Cinema nel 2024). Annunciata il 10 settembre 2025, in vendita dal 24 ottobre 2025 a 2.199,95$ (solo corpo, USA) / circa 2.379-2.449€ in Italia. Candidata di Pier a sostituire il 5D Mark III.",
    "domanda": "È una fotocamera reale, o marketing/vaporware? Le specifiche dichiarate — sensore full-frame, RAW REDCODE (R3D NE) interno, 6K/60p, 15+ stop di gamma dinamica — reggono al controllo indipendente? Ci si può fidare per l'uso cinema di Pier? (Domanda separata, non trattata qui: se convenga comprarla al prezzo che ha visto lui.)",
    "modalita": "rapida",
    "punteggio": 84,
    "etichetta": "affidabile",
    "verdetto": "La Nikon ZR è un prodotto reale, non un render o un annuncio mai concretizzato: fotocamera cinema full-frame nata dalla fusione Nikon-RED (Nikon acquisisce il 100% di RED Digital Cinema, accordo rivelato il 7 marzo 2024 e chiuso l'8 aprile 2024), annunciata ufficialmente il 10 settembre 2025 e in vendita dal 24 ottobre 2025 a 2.199,95$ corpo (USA) / circa 2.379-2.449€ in Italia secondo i comparatori indipendenti. Le specifiche della ricerca originale reggono e sono confermate non solo dal comunicato del produttore ma da almeno tre testate di settore indipendenti che hanno testato l'unità fisica (DPReview, Engadget, Filmmaker Magazine): sensore full-frame 35,9×23,9mm 24,5MP parzialmente stacked, RAW REDCODE (R3D NE) 12-bit interno fino a 6K/60p — primo caso del settore — più N-RAW e ProRes RAW, 15+ stop di gamma dinamica, audio 32-bit float, schermo 4\" 1000 nit. Il confronto con l'Insta360 Luna Ultra proposto nella ricerca originale (sensore 1\" contro full-frame) resta valido sul piano delle specifiche: la ZR punta al \"look cinema\" con grading vero, non al video pronto all'uso.\n\nSull'affidabilità per uso professionale, due fatti erano emersi dopo la ricerca del 12/07: un problema di fabbricazione riconosciuto pubblicamente da Nikon il 17 marzo 2026 (alcune unità di ZR, Z6III e Z5II prodotte con componenti sotto lo standard qualitativo, riparazione gratuita), e il limite strutturale del RAW registrabile solo su CFexpress interna, senza uscita su SSD esterno via USB.\n\nRiverifica di freschezza del 29/08/2026, dodici giorni dopo la prima pubblicazione: nessun fatto nuovo di rilievo. Il firmware resta fermo alla versione 1.11 (rilasciata il 17/03/2026, contestualmente alla service advisory): un aggiornamento maggiore — con focus peaking durante la registrazione R3D, tono Log 3G10 in H.265, LUT su HDMI — era stato annunciato da Nikon al NAB 2026 (aprile) ma, secondo una rassegna di settore indipendente e datata (CineD, 26/08/2026), non risulta ancora rilasciato né calendarizzato: Nikon non ha mai comunicato una data, un mese o un trimestre per questo aggiornamento, e i proprietari lo segnalano ancora come mancante — in particolare l'assenza di focus peaking mentre si registra in R3D NE, un limite non da poco su una fotocamera il cui punto di forza dichiarato è proprio quel codec. Nessuna nuova service advisory o richiamo è stato reperito oltre a quello di marzo. Sul prezzo: il corpo nuovo resta sopra i 2.000$/€ su tutti i canali ufficiali tracciati (nessuno sconto Nikon USA riscontrato a fine agosto); un'unità RICONDIZIONATA è stata segnalata a 1.695$ in un forum specializzato (26/08/2026) — un dato di mercato dell'usato/ricondizionato, non una conferma del prezzo di circa 1.600€ che Pier dice di aver visto, e comunque non equivalente a un acquisto nuovo con garanzia piena. Il punteggio non cambia: 84/100, autenticità e tenuta delle specifiche piene, il difetto di fabbricazione gestito con trasparenza resta l'unico vero freno.\n\nLimite di verifica dichiarato, invariato: tutte le fonti di questo verdetto sono risultate irraggiungibili con WebFetch diretto in questa sessione, sia il 17/08 sia il 29/08, bloccate dal proxy di rete (EGRESS_BLOCKED). La loro esistenza e i contenuti sono stati confermati per via indiretta tramite ricerca web, con corrispondenza testuale di titolo e citazioni dirette — un riscontro solido ma non equivalente a un fetch diretto riuscito.",
    "green_flags": [
      "Prodotto reale e ampiamente documentato: annunciato ufficialmente da Nikon il 10 settembre 2025, in vendita dal 24 ottobre 2025, recensito in modo approfondito da almeno tre testate indipendenti di rilievo (DPReview, Engadget, Filmmaker Magazine), tutte concordi sulle specifiche dichiarate.",
      "Filiazione societaria verificabile, non un badge di marketing: Nikon ha acquisito il 100% di RED Digital Cinema (accordo marzo 2024, chiuso aprile 2024), confermato da stampa di settore indipendente (Newsshooter e altre testate cinema).",
      "Specifiche tecniche riscontrate da terzi indipendenti, non solo dal comunicato Nikon: sensore full-frame 24,5MP parzialmente stacked, RAW REDCODE (R3D NE) 12-bit interno fino a 6K/60p, N-RAW, ProRes RAW, 15+ stop DR, audio 32-bit float, schermo 4\" 1000 nit.",
      "Prezzo trasparente e coerente su più rivenditori, invariato dal lancio a fine agosto 2026: 2.199,95$ USA; in Italia 2.379-2.449€ su comparatori indipendenti.",
      "Produttore attivo nel supporto post-vendita: primo firmware (v1.10) rilasciato a fine gennaio 2026 con miglioramenti concreti (timecode via cavo, tempo di registrazione esteso), seguito da un secondo (v1.11, marzo 2026, insieme alla service advisory).",
      "Nessun segnale di prodotto fantasma: disponibilità confermata da rivenditori multipli su un arco di quasi un anno, recensioni hands-on con file reali, ritardi di spedizione per eccesso di domanda al lancio — tratto tipico di un lancio vero, non di un annuncio mai concretizzato.",
      "Il produttore riconosce pubblicamente il proprio difetto di fabbricazione e offre riparazione gratuita indipendentemente dalla garanzia: comportamento contro il proprio interesse immediato, segno di trasparenza più che di occultamento; alla riverifica del 29/08/2026 nessun nuovo richiamo o advisory è stato reperito oltre a quello di marzo."
    ],
    "red_flags": [
      "Recall/service advisory reale del 17 marzo 2026 su alcune unità di Z6III, Z5II e ZR che potrebbero diventare inutilizzabili; riparazione gratuita disponibile ma richiede controllo del numero di serie. Alla riverifica del 29/08/2026 nessuna estensione o aggravamento risulta essere stato comunicato, ma nessuna fonte conferma nemmeno la chiusura del programma di riparazione.",
      "Limite di workflow strutturale confermato anche dalle recensioni indipendenti: il RAW (R3D NE, N-RAW, ProRes RAW) si registra solo su CFexpress Type B interna, non su SSD esterno via USB; lo slot scheda è nella parte inferiore del corpo, scomodo su gimbal/rig.",
      "L'aggiornamento firmware maggiore annunciato da Nikon al NAB 2026 (aprile) — focus peaking in R3D, Log 3G10 in H.265, LUT su HDMI — non risulta ancora rilasciato alla data del 29/08/2026, oltre quattro mesi dopo l'annuncio: fonte di settore indipendente (CineD, 26/08/2026) descrive i proprietari ancora in attesa, senza alcuna data comunicata da Nikon.",
      "L'assenza di focus peaking durante la registrazione in R3D NE resta un limite pratico non risolto per chi lavora in RAW: confermato ancora presente alla riverifica.",
      "Costo dei consumabili da mettere in conto: il RAW REDCODE ad alto bitrate richiede schede CFexpress Type B veloci e capienti, una voce di spesa aggiuntiva reale che il solo prezzo del corpo non comunica.",
      "Il prezzo \"1.600€\" citato da Pier non trova ancora riscontro in nessuna fonte consultata, nemmeno alla riverifica: i prezzi ufficiali/comparati per l'unità nuova oscillano fra 2.199$ (USA) e 2.379-2.449€ (Italia); un'unità ricondizionata è stata vista a 1.695$ (fonte: discussione forum DPReview, 26/08/2026) — un dato di mercato dell'usato, non una conferma della cifra vista da Pier né un'offerta equivalente per condizioni e garanzia.",
      "Nessuna delle fonti di questo verdetto è stata raggiungibile con fetch diretto in questa sessione, né il 17/08 né il 29/08 (proxy di rete: EGRESS_BLOCKED); tutte confermate solo per via indiretta tramite ricerca web con corrispondenza testuale."
    ],
    "fonti": [
      {
        "titolo": "Nikon releases the ZR — comunicato ufficiale, Nikon.com (10 settembre 2025)",
        "url": "https://www.nikon.com/company/news/2025/0910_imaging_01/",
        "tipo": "comunicato del produttore",
        "sostiene": "Annuncio ufficiale della fotocamera cinema full-frame ZR nata dalla sinergia Nikon-RED; sensore full-frame parzialmente stacked, registrazione RAW R3D NE interna, N-RAW, ProRes RAW, prezzo 2.199,95$",
        "autorevolezza": "alta — fonte primaria del produttore; verifica diretta bloccata dal proxy di rete di questa sessione (dominio nikon.com non raggiungibile), contenuto riscontrato per corrispondenza testuale via ricerca web incrociata con più testate"
      },
      {
        "titolo": "Nikon ZR review: it might not be what you think — DPReview",
        "url": "https://www.dpreview.com/reviews/nikon-zr-in-depth-review-compact-full-frame-video-camera-6k-60/",
        "tipo": "stampa specializzata indipendente",
        "sostiene": "Conferma le specifiche dichiarate (R3D NE, N-RAW, ProRes RAW interni) e valuta la ZR come una delle migliori fotocamere per video/vlogging viste dalla testata, con qualità video superiore alla fascia Sony A7C/R",
        "autorevolezza": "alta — testata storica e indipendente del settore fotografico; verifica diretta bloccata dal proxy (dpreview.com non raggiungibile), contenuto riscontrato via ricerca web con citazioni corrispondenti"
      },
      {
        "titolo": "Review: The New Nikon ZR Shoots RED RAW Footage on a Budget — Filmmaker Magazine",
        "url": "https://filmmakermagazine.com/133316-review-nikon-zr/",
        "tipo": "stampa specializzata indipendente (settore cinema)",
        "sostiene": "Conferma REDCODE RAW 12-bit interno fino a 6K/60p al prezzo di 2.199$, schermo 4'' 1000 nit, audio 32-bit float; segnala come limite l'assenza di RAW su SSD esterno (solo CFexpress Type B) e la scomodità dello slot scheda su rig",
        "autorevolezza": "alta — testata di settore cinema indipendente; verifica diretta bloccata dal proxy (filmmakermagazine.com non raggiungibile), contenuto riscontrato via ricerca web"
      },
      {
        "titolo": "Nikon ZR review: A highly capable cinema camera at a reasonable price — Engadget",
        "url": "https://www.engadget.com/cameras/nikon-zr-review-a-highly-capable-cinema-camera-at-a-reasonable-price-152634311.html",
        "tipo": "stampa tecnologica indipendente",
        "sostiene": "Conferma prezzo 2.200$, autofocus rapido, stabilizzazione in-body, audio 32-bit float; qualità video giudicata superiore a fotocamere di prezzo doppio/triplo; concorrenti diretti Sony FX2 (2.998$) e Canon R5C (3.899$)",
        "autorevolezza": "alta — testata tecnologica generalista di ampia diffusione; verifica diretta bloccata dal proxy (engadget.com non raggiungibile), contenuto riscontrato via ricerca web"
      },
      {
        "titolo": "Technical Service Advisory Z-TSA-3-2026 — Nikon USA",
        "url": "https://www.nikonusa.com/service-advisories/z-tsa-3-2026",
        "tipo": "comunicazione ufficiale del produttore",
        "sostiene": "Alcune unità di Z6III, Z5II e ZR sono state prodotte con componenti sotto lo standard qualitativo Nikon e potrebbero diventare inutilizzabili; riparazione gratuita indipendentemente dalla garanzia, spese di spedizione incluse; richieste aperte dal 23 marzo 2026",
        "autorevolezza": "massima — comunicazione diretta del produttore su un problema che lo danneggia commercialmente, quindi dichiarazione contro il proprio interesse"
      },
      {
        "titolo": "Nikon Issues Technical Service Advisory for Z6III, Z5II, and ZR Cameras — CineD",
        "url": "https://www.cined.com/nikon-issues-technical-service-advisory-for-z6iii-z5ii-and-zr-cameras/",
        "tipo": "stampa di settore indipendente",
        "sostiene": "Riscontro indipendente della service advisory Nikon, con dettaglio sui mercati coinvolti (negli USA anche la Z6III; in Giappone solo Z5II e ZR; in Europa la Z6III non risulta coinvolta)",
        "autorevolezza": "alta — testata di settore cinema/video indipendente"
      },
      {
        "titolo": "Nikon acquires RED — Newsshooter",
        "url": "https://www.newsshooter.com/2024/03/06/nikon-acquires-red/",
        "tipo": "stampa di settore indipendente",
        "sostiene": "Nikon acquisisce il 100% di RED Digital Cinema, accordo rivelato il 7 marzo 2024 e perfezionato l'8 aprile 2024",
        "autorevolezza": "alta — testata di settore cinema indipendente e specializzata"
      },
      {
        "titolo": "Nikon Zr cinema camera officially announced — Nikon Rumors",
        "url": "https://nikonrumors.com/2025/09/10/nikon-zr-cinema-camera-officially-announced.aspx/",
        "tipo": "stampa di settore indipendente (rumor/news site)",
        "sostiene": "Riscontro incrociato dell'annuncio ufficiale del 10 settembre 2025 e delle specifiche dichiarate; storico affidabile su tempistiche firmware e disponibilità",
        "autorevolezza": "media-alta — sito specializzato Nikon di lunga data, non ufficiale ma con forte track record di accuratezza sulle date"
      },
      {
        "titolo": "Nikon Zr Body — confronto prezzi, Trovaprezzi.it",
        "url": "https://www.trovaprezzi.it/prezzo_fotocamere-digitali_nikon_zr_body.aspx",
        "tipo": "comparatore prezzi indipendente",
        "sostiene": "Prezzo corpo macchina in Italia nell'ordine di 2.379-2.449 euro presso rivenditori tracciati; nessun riscontro di un prezzo vicino a 1.600 euro",
        "autorevolezza": "media — aggregatore di prezzi al dettaglio, utile come riscontro di mercato ma non un registro ufficiale"
      },
      {
        "titolo": "Nikon ZR Owners Are Still Waiting – Where Is the Big Firmware Update? — CineD (26/08/2026)",
        "url": "https://www.cined.com/nikon-zr-owners-are-still-waiting-where-is-the-big-firmware-update/",
        "tipo": "stampa di settore cinema indipendente",
        "sostiene": "A fine agosto 2026 il grande aggiornamento firmware annunciato al NAB 2026 (focus peaking in R3D, Log 3G10, LUT HDMI) non è ancora stato rilasciato; nessuna data comunicata da Nikon; i proprietari lo segnalano ancora mancante sui social",
        "autorevolezza": "alta — testata di settore cinema indipendente, articolo datato a tre giorni prima di questa riverifica; fetch diretto bloccato dal proxy in questa sessione, contenuto ripreso via snippet di ricerca"
      }
    ],
    "timeline": [
      {
        "data": "2024-03-07",
        "evento": "Nikon rivela l'accordo per acquisire il 100% di RED Digital Cinema; operazione perfezionata l'8 aprile 2024."
      },
      {
        "data": "2025-09-10",
        "evento": "Annuncio ufficiale della Nikon ZR, prima fotocamera Z-CINEMA nata dalla sinergia con RED."
      },
      {
        "data": "2025-10-08",
        "evento": "Nikon avverte di possibili ritardi nelle spedizioni per l'elevato numero di ordini."
      },
      {
        "data": "2025-10-24",
        "evento": "Inizio disponibilità della Nikon ZR: 2.199,95$ per il solo corpo (USA)."
      },
      {
        "data": "2026-01-26",
        "evento": "Primo firmware (v1.10): timecode via cavo, tempo di registrazione esteso, naming file in stile RED."
      },
      {
        "data": "2026-03-17",
        "evento": "Nikon annuncia la service advisory Z-TSA-3-2026 per un problema di fabbricazione su alcune unità di Z6III, Z5II e ZR; riparazione gratuita, richieste aperte dal 23 marzo. Lo stesso giorno esce il firmware ZR v1.11."
      },
      {
        "data": "2026-04-23",
        "evento": "Al NAB 2026 Nikon annuncia funzioni firmware future: focus peaking in R3D, Log 3G10 in H.265, LUT su uscita HDMI."
      },
      {
        "data": "2026-05-14",
        "evento": "Sconto del 16% su Amazon UK segnalato dalla stampa specializzata; corpo sceso sotto le 2.000£ presso London Camera Exchange, minimo storico nel Regno Unito."
      },
      {
        "data": "2026-07-12",
        "evento": "Ricerca originale KIROSHI//OR (ricerche/nikon-zr.md)."
      },
      {
        "data": "2026-08-17",
        "evento": "Conversione in verdetto pubblicato, punteggio 84/100."
      },
      {
        "data": "2026-08-26",
        "evento": "CineD riporta che il firmware maggiore annunciato al NAB resta senza data, oltre quattro mesi dopo l'annuncio; un forum DPReview segnala un'unità ricondizionata a 1.695$."
      },
      {
        "data": "2026-08-29",
        "evento": "Riverifica di freschezza KIROSHI//OR: nessun cambiamento sostanziale, punteggio confermato a 84/100."
      }
    ],
    "nota_sicurezza": "Nessun segnale di malware, phishing o raggiro: la Nikon ZR è un prodotto regolarmente distribuito nei canali retail ufficiali di un produttore identificabile, non un'offerta anomala o un link da trattare con sospetto. Limite dichiarato, invariato dalla prima pubblicazione: tutte le fonti di questo verdetto sono risultate irraggiungibili con WebFetch diretto in questa sessione, sia il 17/08 sia il 29/08, bloccate dal proxy di rete (errore EGRESS_BLOCKED), quindi non è stato possibile confermarne lo stato \"live\" con una richiesta HTTP diretta; sono state ritrovate tramite ricerca web, con titolo e contenuto testuale corrispondenti. Se Pier ha visto un prezzo di circa 1.600€, non trova ancora corrispondenza in nessuna fonte di questa verifica per un'unità nuova: alla riverifica del 29/08/2026 il dato più vicino reperito è un'unità ricondizionata a 1.695$ segnalata su un forum specializzato, non un'offerta equivalente. Prima di acquistare da chi propone quella cifra, verificare che sia un rivenditore autorizzato Nikon (o un canale ricondizionato dichiarato come tale), chiedere fattura e garanzia ufficiale, e diffidare di pagamenti anomali. Il problema di fabbricazione (service advisory Z-TSA-3-2026) va controllato con il numero di serie sul sito Nikon prima dell'acquisto, specie se il corpo è usato o di provenienza incerta; nessuna estensione o chiusura di questo programma è stata reperita alla data della riverifica. Questa verifica riguarda l'esistenza e la tenuta delle specifiche del prodotto, non se convenga comprarlo: quella è una scelta che dipende dal budget e dal flusso di lavoro di Pier, non da questo verdetto.",
    "issue": 0,
    "data_verifica": "2026-08-29",
    "id": "0007"
  },
  {
    "titolo": "Palantir è crollata «per i documentari e la stampa moralista»?",
    "oggetto": "Palantir Technologies (PLTR), quotata al Nasdaq. Andamento del titolo fra il massimo storico del novembre 2025 e il 31 luglio 2026.",
    "domanda": "«Come mai sono crollati in borsa? Da 180 € a 113? Saranno stati i documentari e la stampa moralista?»",
    "modalita": "scava",
    "punteggio": 35,
    "etichetta": "il calo è reale, la causa attribuita no",
    "verdetto": "Il crollo esiste ed è severo: al 31 luglio 2026 PLTR chiude a 123,06 dollari, il 40,7% sotto il massimo storico. Ma le due cifre della domanda vanno corrette, e in direzioni opposte. Il massimo storico è 207,52 dollari il 3 novembre 2025, non 180: il «180» corrisponde alla chiusura di fine 2025 (177,75), cioè al punto di partenza dell'anno, non a un picco. Il «113» corrisponde alla finestra di fine giugno 2026. Due precisazioni tecniche: il titolo quota in dollari, non in euro, e sul Nasdaq — si è trasferito dal NYSE a novembre 2024. Sulla causa la risposta è no, e a dirlo è la cronologia. Il massimo storico è stato toccato dopo l'inchiesta di 404 Media sul contratto ICE (aprile 2025), dopo il rapporto di Amnesty International (agosto 2025) e dopo il disinvestimento etico di Storebrand (ottobre 2024): nel 2025 il titolo è salito di circa il 138% attraversando la fase più intensa di critica pubblica. Sui documentari la premessa non trova riscontro: nelle fonti consultate non risulta alcun documentario rilevante sul soggetto nel 2025-2026; l'unico esistente è tedesco ed è del 2024. Quasi tutte le fonti finanziarie indicano come causa dominante la compressione dei multipli da una valutazione estrema, dentro un derating generale del software e dell'AI. Questo non significa che la critica pubblica sia irrilevante: significa che il canale attraverso cui diventa finanziariamente reale non è l'indignazione, sono i contratti e i soldi istituzionali. Su questo terreno gli effetti sono tracciabili con date e importi.",
    "green_flags": [
      "Il calo è reale, documentato e verificabile su serie storiche di mercato: -40,7% dal massimo del 3 novembre 2025 e -30,8% da inizio 2026, con minimo a 52 settimane di 106,37 dollari intraday il 25 giugno 2026.",
      "Le critiche pubbliche esistono e non sono voci di rete: sono documentate da organizzazioni con metodologia dichiarata (Amnesty International, EFF) e da testate che lavorano su documenti primari — documenti di appalto, atti giudiziari, guide utente trapelate.",
      "Il soggetto ha esercitato il diritto di replica in tutti i casi principali, e le repliche sono pubblicamente consultabili: il lettore può confrontare le due versioni.",
      "La tesi della domanda è verificabile da chiunque con un test ripetibile: le date degli scoop critici e le date dei movimenti di prezzo sono entrambe pubbliche, e il confronto è riproducibile.",
      "Dove la critica ha prodotto effetti finanziari, questi sono tracciabili con precisione e importi: la Commissione Scienza e Tecnologia dei Comuni britannici ha raccomandato il 3 giugno 2026 di sciogliere il contratto NHS, e il fondo pensione olandese ABP ha disinvestito 825 milioni di euro il 2 aprile 2026.",
      "La società stessa riconosce nel proprio 10-K che la copertura mediatica e lo scrutinio esterno costituiscono un fattore di rischio: il tema non è liquidabile come invenzione dei critici.",
      "I fondamentali dichiarati sono cresciuti mentre il titolo scendeva: nel Q4 2025 ricavi 1,407 miliardi di dollari, +70% su base annua, e guidance 2026 alzata sopra il consenso. Il calo non è coinciso con un deterioramento dei ricavi."
    ],
    "red_flags": [
      "La premessa sui documentari non trova riscontro: nelle fonti consultate non risulta alcun documentario rilevante su Palantir nel 2025-2026. L'unico esistente è tedesco e del 2024, quindi precede di oltre un anno il periodo in esame.",
      "La cronologia contraddice la tesi della «stampa moralista»: il massimo storico è successivo alle principali inchieste critiche, e nel 2025 il titolo è salito di circa il 138% proprio mentre la critica era più intensa.",
      "Le due cifre della domanda non corrispondono ai riferimenti corretti: il massimo è 207,52 dollari, non 180; e la valuta è il dollaro, non l'euro.",
      "Le attribuzioni causali della stampa finanziaria sono molli e fra loro incoerenti: per il calo del 6,08% del 28 luglio 2026 una testata indica una nota di Cleveland Research sulla debolezza della spesa commerciale, un'altra indica presa di profitto dopo il rialzo della seduta precedente.",
      "Sulle vendite degli insider circolano aggregati elevati che non sono stati riscontrati sui Form 4 depositati presso la SEC, che sarebbero la fonte primaria: poggiano su un aggregatore sindacato, la fonte più debole del dossier.",
      "La valutazione resta storicamente tesa anche dopo il calo, con multipli sugli utili e sulle vendite molto sopra la media del comparto: la compressione può non essersi esaurita.",
      "Due articoli CNBC pertinenti hanno respinto la lettura automatica con errore 403: il loro contenuto non è stato verificato direttamente e non viene usato a sostegno di alcun passaggio."
    ],
    "fonti": [
      {
        "titolo": "Palantir Technologies (PLTR) — serie storica dei prezzi, StockAnalysis",
        "url": "https://stockanalysis.com/stocks/pltr/history/",
        "tipo": "dati di mercato",
        "sostiene": "Massimo storico di chiusura a 207,52 dollari il 3 novembre 2025, chiusura 2025 a 177,75, minimo a 52 settimane di 106,37 il 25 giugno 2026, chiusura del 31 luglio 2026 a 123,06. Tutte le percentuali di questo verdetto sono state ricalcolate su questa serie, non riprese dai testi.",
        "autorevolezza": "alta — serie giornaliere verificabili e riproducibili"
      },
      {
        "titolo": "Palantir Technologies — Form 8-A12B, trasferimento della quotazione al Nasdaq, SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1321655/000132165524000230/a20241125form8-12b.htm",
        "tipo": "registro ufficiale",
        "sostiene": "Il titolo è quotato al Nasdaq dal novembre 2024, non al NYSE",
        "autorevolezza": "massima — deposito ufficiale presso la SEC"
      },
      {
        "titolo": "Earnings call transcript — Palantir Q4 2025, Investing.com",
        "url": "https://www.investing.com/news/transcripts/earnings-call-transcript-palantirs-q4-2025-revenue-surges-stock-rises-93CH-4480410",
        "tipo": "documento finanziario",
        "sostiene": "Ricavi Q4 2025 di 1,407 miliardi di dollari, +70% su base annua, e guidance 2026 alzata sopra il consenso",
        "autorevolezza": "alta — trascrizione della call trimestrale"
      },
      {
        "titolo": "Why Palantir Stock Plunged 34% in the First Half of 2026 — The Motley Fool, 9 luglio 2026",
        "url": "https://www.fool.com/investing/2026/07/09/why-palantir-stock-plunged-34-in-the-first-half-of/",
        "tipo": "stampa finanziaria",
        "sostiene": "Ricostruzione delle cause del primo semestre 2026, centrate sulla compressione dei multipli e sul derating del comparto software",
        "autorevolezza": "media-alta — testata finanziaria indipendente, ma editoriale con orientamento pro-azionario"
      },
      {
        "titolo": "Why Did Palantir Technologies Stock Drop Again? — The Motley Fool, 28 luglio 2026",
        "url": "https://www.fool.com/investing/2026/07/28/why-did-palantir-technologies-stock-drop-again/",
        "tipo": "stampa finanziaria",
        "sostiene": "Il calo del 28 luglio 2026 viene attribuito a una nota di Cleveland Research sulla debolezza della spesa commerciale fra i partner",
        "autorevolezza": "media-alta"
      },
      {
        "titolo": "Palantir Just Crushed Earnings. So Why Is the Stock Down? — The Motley Fool, 8 maggio 2026",
        "url": "https://www.fool.com/investing/2026/05/08/palantir-just-crushed-earnings-so-why-is-the-stock/",
        "tipo": "stampa finanziaria",
        "sostiene": "Il titolo scende nonostante trimestrali sopra le attese, perché il rapporto prezzo/vendite si stava già comprimendo",
        "autorevolezza": "media-alta"
      },
      {
        "titolo": "Palantir Hits 52-Week Low as «SaaSpocalypse» Drags Stock Down 40% YTD — AskTraders",
        "url": "https://www.asktraders.com/analysis/palantir-pltr-stock-falls-40-percent-ytd-saaspocalypse-2026/",
        "tipo": "stampa finanziaria specializzata",
        "sostiene": "Inquadramento del calo dentro un derating generale del software. Nota: la stessa fonte definisce giugno 2026 «worst month on record», affermazione che i dati mensili smentiscono.",
        "autorevolezza": "media — elenco cause dettagliato e datato, ma con almeno un superlativo errato"
      },
      {
        "titolo": "Palantir CEO Karp sells 397,744 shares after RSU vesting — Form 4 SEC via StockTitan",
        "url": "https://www.stocktitan.net/sec-filings/PLTR/form-4-palantir-technologies-inc-insider-trading-activity-48a8d6e385ad.html",
        "tipo": "documento societario",
        "sostiene": "Vendita di 397.744 azioni il 20 maggio 2026 sotto piano Rule 10b5-1, a copertura di ritenute fiscali su RSU maturate",
        "autorevolezza": "alta — riproduce un deposito obbligatorio presso la SEC"
      },
      {
        "titolo": "Science, Innovation and Technology Committee — raccomandazioni sul contratto NHS, Parlamento del Regno Unito",
        "url": "https://committees.parliament.uk/committee/135/science-innovation-and-technology-committee/",
        "tipo": "fonte istituzionale primaria",
        "sostiene": "Il 3 giugno 2026 la commissione raccomanda di sciogliere il contratto con Palantir per la piattaforma dati del servizio sanitario britannico",
        "autorevolezza": "massima — atto parlamentare, fonte primaria"
      },
      {
        "titolo": "Palantir to switch stock listing to Nasdaq from NYSE — Investing.com",
        "url": "https://www.investing.com/news/company-news/palantir-to-switch-stock-listing-to-nasdaq-from-nyse-93CH-3724218",
        "tipo": "stampa finanziaria",
        "sostiene": "Conferma giornalistica del trasferimento di listino",
        "autorevolezza": "media-alta"
      }
    ],
    "timeline": [
      {
        "data": "2024-10-25",
        "evento": "Storebrand esclude Palantir dai propri investimenti per ragioni etiche. Nessun effetto rilevabile sul prezzo: il titolo salirà fortemente nei mesi successivi."
      },
      {
        "data": "2024-11-26",
        "evento": "Palantir trasferisce la quotazione dal NYSE al Nasdaq, ticker invariato."
      },
      {
        "data": "2025-04-18",
        "evento": "404 Media pubblica l'inchiesta sul contratto ICE, basata su documenti di appalto pubblici. È l'inizio della catena critica moderna."
      },
      {
        "data": "2025-08-21",
        "evento": "Rapporto di Amnesty International. Il titolo continua a salire."
      },
      {
        "data": "2025-11-03",
        "evento": "MASSIMO STORICO: chiusura a 207,52 dollari, nel giorno della trimestrale Q3 2025 (ricavi 1,18 miliardi, +63%). Il titolo quel giorno sale del 3,35%: il ribasso non parte da qui, parte dopo."
      },
      {
        "data": "2025-12-31",
        "evento": "Chiusura 2025 a 177,75 dollari, anno a +138%. È il livello ricordato nella domanda come «180»."
      },
      {
        "data": "2026-01-02",
        "evento": "Prima seduta del 2026 a -5,9%: rotazione dal software verso i semiconduttori e presa di profitto differita a fine anno fiscale."
      },
      {
        "data": "2026-02-02",
        "evento": "Trimestrale Q4 2025 largamente sopra le attese e guidance alzata. Il titolo rimbalza ma non torna sui massimi."
      },
      {
        "data": "2026-04-02",
        "evento": "Il fondo pensione olandese ABP disinveste 825 milioni di euro."
      },
      {
        "data": "2026-05-08",
        "evento": "Trimestrale Q1 2026 forte su tutte le voci. Il titolo scende comunque: il rapporto prezzo/vendite si è già contratto da circa 100 a 67."
      },
      {
        "data": "2026-06-03",
        "evento": "La Commissione Scienza e Tecnologia dei Comuni britannici raccomanda di sciogliere il contratto con il servizio sanitario nazionale."
      },
      {
        "data": "2026-06-25",
        "evento": "Minimo a 52 settimane: 106,37 dollari intraday. Giugno chiuderà a -25,47%, il mese peggiore di questa discesa ma non della storia del titolo: nel febbraio 2021 fece -32,06%."
      },
      {
        "data": "2026-07-28",
        "evento": "-6,08% in giornata dopo una nota di Cleveland Research sulla debolezza della spesa commerciale fra i partner."
      },
      {
        "data": "2026-07-31",
        "evento": "Chiusura a 123,06 dollari: -40,7% dal massimo, -30,8% da inizio anno. Livello di riferimento di questa verifica."
      }
    ],
    "nota_sicurezza": "Questo è un verdetto sui fatti e sulle cause documentate, non un parere di investimento: non contiene e non deve essere letto come una raccomandazione a comprare, vendere o mantenere. I limiti vanno dichiarati. Primo: i dati di prezzo provengono da un unico fornitore di serie storiche, sul quale sono state ricalcolate tutte le percentuali; fra vendor diversi esistono divergenze di pochi centesimi su singole chiusure, irrilevanti per la sostanza ma reali. Secondo: nessuna fonte quantifica quanta parte del calo sia attribuibile a ciascun fattore, quindi la gerarchia delle cause qui esposta riflette il peso che le fonti finanziarie danno loro, non una misurazione. Terzo: l'affermazione che non esistano documentari rilevanti nel periodo è una negativa, dimostrabile solo entro le fonti consultate. Quarto: la trimestrale Q2 2026 era attesa per il 3 agosto 2026, subito dopo questa verifica: ogni riferimento al livello «attuale» è fermo al 31 luglio 2026 e può essere già superato. Le persone fisiche citate compaiono soltanto per operazioni depositate presso registri pubblici o per dichiarazioni pubbliche, senza alcuna valutazione personale.",
    "issue": 3,
    "data_verifica": "2026-08-02",
    "id": "0004"
  },
  {
    "titolo": "Contenuti sensuali = i più visti sui social?",
    "oggetto": "Voce: sui dati Meta/Instagram/TikTok il contenuto più visto e performante sono le parti sensuali (soprattutto femminili)",
    "domanda": "È vero che il contenuto più importante sui social sono le parti sensuali femminili?",
    "modalita": "rapida",
    "punteggio": 45,
    "etichetta": "dubbio",
    "verdetto": "Voce a metà: falsa nella versione forte, vera nel nocciolo. FALSO che 'il contenuto più visto' siano parti sensuali: i dati ufficiali di Meta (Widely Viewed Content Report) mettono in cima meme, animali, cucina, famiglia, news e celebrità — e nudità/sesso esplicito sono contro le policy, quindi non possono essere i 'più visti'. VERO invece che i contenuti sessualizzati (specie di donne) ottengono engagement sproporzionato e vengono amplificati dall'algoritmo, come mostrano studi indipendenti e accademici. Il trucco è confondere due cose diverse: 'più visto in assoluto' ≠ 'genera più engagement per singolo post'. È il tipo di frase vera-a-metà che a forza di ripeterla diventa 'verità'.",
    "green_flags": [
      "Studi indipendenti (ISD 2020, SumOfUs 2021): l'algoritmo amplifica corpi idealizzati/attraenti, soprattutto di donne",
      "Ricerche accademiche: foto più succinte = più like e follower ('more skin, more likes')",
      "Documentato che i media sessualizzati vengono spinti per massimizzare l'interazione (in prevalenza maschile)"
    ],
    "red_flags": [
      "I dati UFFICIALI di Meta (Widely Viewed Content Report) dicono il contrario: in cima meme, animali, cucina, famiglia, news, celebrità",
      "Meta vieta nudità e sesso esplicito: per policy non possono essere 'il contenuto più visto'",
      "'Il più importante/visto' è iperbole non quantificata: confonde 'visualizzazioni totali' con 'engagement per post'",
      "Nessuna statistica ufficiale afferma 'le parti sensuali femminili sono il contenuto n.1'"
    ],
    "fonti": [
      {
        "titolo": "Meta - Widely Viewed Content Report (ufficiale)",
        "url": "https://transparency.meta.com/reports/widely-viewed-content-report/",
        "tipo": "ufficiale",
        "sostiene": "falso",
        "autorevolezza": 5
      },
      {
        "titolo": "Social Media Today - analisi del report",
        "url": "https://www.socialmediatoday.com/news/Meta-Widely-Viewed-Content-Report-Q4-2022/643457/",
        "tipo": "stampa",
        "sostiene": "falso",
        "autorevolezza": 3
      },
      {
        "titolo": "arXiv - 'More Skin, More Likes' (studio)",
        "url": "https://arxiv.org/pdf/2408.05622",
        "tipo": "altro",
        "sostiene": "vero",
        "autorevolezza": 4
      },
      {
        "titolo": "ScienceDirect - TikTok e body dissatisfaction",
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S174014452200167X",
        "tipo": "altro",
        "sostiene": "vero",
        "autorevolezza": 4
      },
      {
        "titolo": "The Harbinger - algoritmi e media sessualizzati",
        "url": "https://smeharbinger.net/targeting-content-social-media-algorithms-use-sexualized-media-to-promote-more-male-interaction/",
        "tipo": "stampa",
        "sostiene": "vero",
        "autorevolezza": 2
      },
      {
        "titolo": "Medium - bias di Instagram verso donne attraenti",
        "url": "https://medium.com/@heysuryansh/exploring-instagrams-algorithmic-bias-towards-attractive-women-and-its-impact-on-users-case-79a4c7e6583f",
        "tipo": "social",
        "sostiene": "vero",
        "autorevolezza": 2
      }
    ],
    "timeline": [
      {
        "data": "2020",
        "evento": "Report ISD: algoritmo amplifica corpi idealizzati"
      },
      {
        "data": "2021-08",
        "evento": "Meta lancia il Widely Viewed Content Report"
      },
      {
        "data": "2021",
        "evento": "SumOfUs accusa IG di prioritizzare 'sexy selfies'"
      },
      {
        "data": "2024-08",
        "evento": "Studio 'More Skin, More Likes' (arXiv)"
      },
      {
        "data": "2025-Q4",
        "evento": "Ultimo WVCR: in cima meme e animali, non sesso"
      }
    ],
    "nota_sicurezza": "Nessun link o allegato da analizzare: voce di natura statistica, valutata incrociando fonti ufficiali e accademiche. Nessun segnale di malware.",
    "issue": 2,
    "data_verifica": "2026-07-09",
    "id": "0002"
  }
];
