# Quaderno di algebra

Punto di ingresso: `laboratorio-algebra.html`, da Matematica → Algebra → Calcolo letterale, con il nome **Espressioni letterali** per `medie` e **Frazioni algebriche** per `biennio`. Il laboratorio è condiviso; l’apertura diretta senza livello dà priorità al biennio.

## Stato iniziale

La versione iniziale riprende il quaderno numerico di `laboratorio-espressioni.html`, con una copia dei suoi moduli `expression-*` in `assets/algebra/`. Ora supporta l’inserimento e la modifica di lettere latine, coefficienti e potenze intere, parentesi e frazioni algebriche; le operazioni algebriche guidate non sono ancora implementate. La pagina e il catalogo lo indicano come in lavorazione. Teoria ed esercizi non sono ancora disponibili.

Gli strumenti condivisi di basso livello (quaderno delle frazioni, scomposizione numerica, tema e navigazione) rimangono condivisi. Lo sviluppo del compositore algebrico va fatto nei moduli dentro `assets/algebra/`, preservando il quaderno numerico attualmente in prova esterna.

## Obiettivo

Manipolare e semplificare espressioni con frazioni algebriche e coefficienti razionali, attraverso passaggi svolti dallo studente e verificati dal quaderno. Il percorso comprende monomi, polinomi, prodotti notevoli, raccoglimenti, scomposizioni anche con Ruffini, semplificazioni e denominatore comune. Conservare le restrizioni dei denominatori originari quando sarà introdotta la gestione delle condizioni di esistenza.

## Tastierino attuale e prossimo pezzo

Il tasto del periodo è stato sostituito da un pulsante abc che apre un piccolo editor ancorato al tasto. Si può inserire una lettera o una sequenza come xyz: ogni lettera diventa una casella distinta, quindi si possono aggiungere potenze individuali. Il popup permette esplicitamente la tastiera del dispositivo; i campi matematici mantengono il tastierino del quaderno. Non c’è una vista QWERTY aggiuntiva e non c’è l’alfabeto greco. I periodici restano scrivibili mediante inserimento testuale.

Il parser accetta lettere latine distinte per maiuscole/minuscole e prodotti impliciti, anche dentro numeratori e denominatori. Riconosce e somma i monomi simili mediante calcoli svolti dallo studente; il contesto conserva modifica/cancellazione e la semplificazione dei coefficienti frazionari. Il generatore resta numerico ed è etichettato come tale. Le operazioni numeriche precedenti continuano a funzionare sulle espressioni interamente numeriche.

Prossimi pezzi: rapporti di monomi e successive operazioni con polinomi, con passaggi svolti dallo studente.

## Priorità e futuri profili

La priorità attuale è sviluppare il quaderno delle frazioni algebriche per il biennio: serve già a una studentessa. Il profilo Medie dovrà generare soltanto espressioni letterali (coefficienti razionali ammessi, senza lettere al denominatore); quello Biennio potrà generare frazioni algebriche. Il quaderno potrà comunque permettere l’inserimento di entrambe le tipologie. Questa distinzione del generatore è futura: la base attuale genera ancora soltanto espressioni numeriche.

Conservare il motore condiviso finché ha senso. Se emergeranno esigenze incompatibili, sospendere lo sviluppo specifico per le Medie e proseguire prima con le frazioni algebriche per il Biennio, senza imporre una biforcazione anticipata.

## Selezione della parte letterale e coefficiente inserito dopo

Dopo la conferma, i prodotti letterali dei monomi hanno un token unico per tutta la parte letterale, con i token delle singole variabili e potenze al suo interno. Il coefficiente rimane fuori. Non si raggruppano somme e quozienti come se fossero parti letterali di un monomio.

Durante la composizione, la freccia sinistra oltre l’inizio della prima lettera crea una casella facoltativa per il coefficiente. Funziona anche prima di una potenza, dentro numeratori/denominatori e dopo l’inizio di un nuovo addendo; non duplica caselle già presenti.

### Selezione del monomio completo
- Oltre alla parte letterale e ai singoli simboli, il bordo esterno seleziona il monomio completo con coefficiente e segno.
- Il meno di una sottrazione è incluso nel termine selezionabile e viene conservato copiando o modificando il termine.
- Le aree esterne del monomio e della parte letterale hanno spazi distinti; il bordo al passaggio del puntatore indica quale livello si sta selezionando.
- Le frazioni con lettere al denominatore e le somme non vengono trattate come monomi. Il quaderno numerico resta indipendente.

- Alla conferma i fattori letterali consecutivi vengono ordinati alfabeticamente; lettere e potenze restano separate e non vengono calcolate o accorpate. Maiuscole e minuscole restano distinte.

## Somme algebriche di monomi simili
- Selezionare i monomi completi: i segni di collegamento sono facoltativi perché ogni termine conserva già il proprio segno. La voce Somma algebrica appare soltanto se lettere ed esponenti coincidono. Funziona anche con monomi non adiacenti nella stessa somma. Non si attraversano le parentesi.
- Il meno di un termine sottratto è ora selezionabile anche come operatore, pur rimanendo compreso nel monomio.
- I coefficienti sono raccolti sulla riga corrente, con la parte letterale invariata. La somma viene inserita dallo studente e il monomio risultante viene scritto nella riga successiva.
- Per coefficienti con denominatori differenti: denominatore comune scelto dallo studente, divisione per ogni denominatore, prodotto per ogni numeratore, somma algebrica finale. La costruzione del numeratore è visibile progressivamente sul quaderno, mentre la finestra flottante resta sotto la formula.
- I coefficienti frazionari non vengono ridotti automaticamente: lo studente può selezionare la frazione e usare Semplifica. Si gestiscono i coefficienti 1, −1 e 0; il risultato nullo non conserva una parte letterale superflua.
- Le operazioni indipendenti restano collegate tra le righe: si propagano soltanto i termini non ancora svolti. La verifica simbolica è esatta, senza sostituzioni numeriche casuali, con un limite interno di 256 termini durante i prodotti di verifica. Frazioni con denominatori letterali e potenze generali sono confrontate strutturalmente dopo la normalizzazione delle parti.

- Il segno + dei termini successivi al primo è disegnato dentro il token del monomio, come il segno −: la selezione dell’intero termine lo evidenzia insieme a coefficiente e parte letterale. Il segno resta anche selezionabile singolarmente.

- Nei monomi x e −x, con coefficiente unitario sottinteso, la lettera non ha un secondo bersaglio di selezione: il clic sulla lettera seleziona il monomio completo. La voce del menu si chiama Somma algebrica.

- Anche per xy e x² con coefficiente sottinteso si evita il bersaglio identico all’intero monomio; le singole lettere, basi ed esponenti restano selezionabili.

## Prodotti e cancellazione degli opposti
- I prodotti espliciti (`2x * 3y`, anche tra parentesi) mantengono fattori e punto selezionabili; non vengono confusi con la giustapposizione interna a un monomio.
- Selezionando due o più monomi dello stesso prodotto compare Moltiplica monomi. Per fattori tutti monomiali è facoltativa la selezione dei punti; per fattori numerici isolati si selezionano anche i punti.
- Sulla riga corrente vengono scritti il prodotto dei coefficienti e, per le lettere comuni, le somme degli esponenti. Lo studente scrive il prodotto dei coefficienti (numeratore e denominatore se frazionari), poi la somma degli esponenti di ogni lettera comune. Le lettere presenti in un solo fattore si conservano. Il risultato viene scritto nel passaggio successivo e si propaga nei passaggi collegati.
- Non viene eseguita alcuna riduzione automatica del coefficiente frazionario. La frazione resta semplificabile con lo strumento esistente. Annullando il prodotto guidato si ripristinano i fattori iniziali.
- Due monomi opposti offrono Semplifica gli opposti: le sbarrette restano sui termini della riga di partenza e la riga successiva assorbe lo zero. La somma algebrica guidata resta disponibile come alternativa. Undo/redo conservano anche le annotazioni.
- I segni esterni a un prodotto vengono conservati quando il risultato diventa un monomio selezionabile: ad esempio `x² − (2x · 3x)` diventa `x² − 6x²`.

- Dopo la conferma, i fattori negativi di prodotti e divisioni vengono mostrati tra parentesi, senza introdurre ulteriori token di selezione. Le parentesi già presenti non vengono duplicate; anche i coefficienti negativi nel prodotto guidato conservano questa formattazione.

- Il primo fattore negativo non riceve parentesi automatiche; i fattori negativi successivi al punto sì. Il più unario viene assorbito, ad esempio `−2x · +3y` appare come `−2x · 3y`.

- Alla conferma, due segni consecutivi (ad esempio ·− o ·+) mostrano un avviso compatto sul quaderno che spiega la correzione applicata. Non viene duplicato nel tastierino. Gli esponenti negativi non attivano l’avviso.

### Prodotto di monomi: esponenti scritti dallo studente

Il prodotto guidato apre subito il passaggio successivo e conserva i fattori originali nella riga precedente. Le potenze comuni mostrano un segnaposto, senza anticipare la somma degli esponenti. Dopo i coefficienti, lo studente copia gli esponenti di ciascuna lettera (compresi gli 1 sottintesi), li verifica e ne calcola la somma. Sono accettati riordinamenti degli esponenti corretti, ma non decomposizioni diverse con lo stesso totale. Il risultato completa la riga in lavorazione; Annulla ripristina righe e selezionabilità precedenti. I test coprono anche prodotti con più fattori, coefficienti razionali e aggiornamenti tra righe collegate.

Le caselle affiancate degli esponenti supportano le frecce sinistra/destra fisiche e del tastierino: al bordo del testo si passa alla casella precedente/successiva, senza perdere la normale modifica delle cifre. I campi protetti sui dispositivi touch mostrano un cursore di inserimento esplicito, mantenendo disattivata la tastiera di sistema.
