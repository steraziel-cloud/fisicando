# Quaderno di algebra

Punto di ingresso: `laboratorio-algebra.html`, da Matematica → Algebra → Calcolo letterale, con il nome **Espressioni letterali** per `medie` e **Frazioni algebriche** per `biennio`. Il laboratorio è condiviso; l’apertura diretta senza livello dà priorità al biennio.

## Stato iniziale

La versione iniziale riprende il quaderno numerico di `laboratorio-espressioni.html`, con una copia dei suoi moduli `expression-*` in `assets/algebra/`. Ora supporta l’inserimento e la modifica di lettere latine, coefficienti e potenze intere, parentesi e frazioni algebriche; le operazioni algebriche guidate non sono ancora implementate. La pagina e il catalogo lo indicano come in lavorazione. Teoria ed esercizi non sono ancora disponibili.

Gli strumenti condivisi di basso livello (quaderno delle frazioni, scomposizione numerica, tema e navigazione) rimangono condivisi. Lo sviluppo del compositore algebrico va fatto nei moduli dentro `assets/algebra/`, preservando il quaderno numerico attualmente in prova esterna.

## Obiettivo

Manipolare e semplificare espressioni con frazioni algebriche e coefficienti razionali, attraverso passaggi svolti dallo studente e verificati dal quaderno. Il percorso comprende monomi, polinomi, prodotti notevoli, raccoglimenti, scomposizioni anche con Ruffini, semplificazioni e denominatore comune. Conservare le restrizioni dei denominatori originari quando sarà introdotta la gestione delle condizioni di esistenza.

## Tastierino attuale e prossimo pezzo

Il tasto del periodo è stato sostituito da un pulsante abc che apre un piccolo editor ancorato al tasto. Si può inserire una lettera o una sequenza come xyz: ogni lettera diventa una casella distinta, quindi si possono aggiungere potenze individuali. Il popup permette esplicitamente la tastiera del dispositivo; i campi matematici mantengono il tastierino del quaderno. Non c’è una vista QWERTY aggiuntiva e non c’è l’alfabeto greco. I periodici restano scrivibili mediante inserimento testuale.

Il parser accetta lettere latine distinte per maiuscole/minuscole e prodotti impliciti, anche dentro numeratori e denominatori. Non esegue ancora trasformazioni simboliche: nelle espressioni letterali il contesto offre modifica/cancellazione. Il generatore resta numerico ed è etichettato come tale. Le operazioni numeriche precedenti continuano a funzionare sulle espressioni interamente numeriche.

Prossimo pezzo: riconoscimento e somma di monomi simili; poi prodotti e rapporti di monomi, con passaggi svolti dallo studente.

## Priorità e futuri profili

La priorità attuale è sviluppare il quaderno delle frazioni algebriche per il biennio: serve già a una studentessa. Il profilo Medie dovrà generare soltanto espressioni letterali (coefficienti razionali ammessi, senza lettere al denominatore); quello Biennio potrà generare frazioni algebriche. Il quaderno potrà comunque permettere l’inserimento di entrambe le tipologie. Questa distinzione del generatore è futura: la base attuale genera ancora soltanto espressioni numeriche.

Conservare il motore condiviso finché ha senso. Se emergeranno esigenze incompatibili, sospendere lo sviluppo specifico per le Medie e proseguire prima con le frazioni algebriche per il Biennio, senza imporre una biforcazione anticipata.
