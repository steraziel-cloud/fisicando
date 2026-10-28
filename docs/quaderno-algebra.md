# Quaderno di algebra

Punto di ingresso: `laboratorio-algebra.html`, da Matematica → Algebra → Calcolo letterale, con il nome **Espressioni letterali** per `medie` e **Frazioni algebriche** per `biennio`. Il laboratorio è condiviso; l’apertura diretta senza livello dà priorità al biennio.

## Stato iniziale

La versione iniziale riprende il quaderno numerico di `laboratorio-espressioni.html`, con una copia dei suoi moduli `expression-*` in `assets/algebra/`. Non supporta ancora le lettere. La pagina e il catalogo lo indicano come in lavorazione. Teoria ed esercizi non sono ancora disponibili.

Gli strumenti condivisi di basso livello (quaderno delle frazioni, scomposizione numerica, tema e navigazione) rimangono condivisi. Lo sviluppo del compositore algebrico va fatto nei moduli dentro `assets/algebra/`, preservando il quaderno numerico attualmente in prova esterna.

## Obiettivo

Manipolare e semplificare espressioni con frazioni algebriche e coefficienti razionali, attraverso passaggi svolti dallo studente e verificati dal quaderno. Il percorso comprende monomi, polinomi, prodotti notevoli, raccoglimenti, scomposizioni anche con Ruffini, semplificazioni e denominatore comune. Conservare le restrizioni dei denominatori originari quando sarà introdotta la gestione delle condizioni di esistenza.

## Prossimo pezzo da progettare

Tastierino: viste 123 e ABC/QWERTY, maiuscole/minuscole e lettere comuni rapidamente accessibili. Conservare le zone laterali per strutture e controlli. L'alfabeto greco è escluso per ora. ABC deve inserire variabili nella struttura matematica e non va confuso con l'inserimento testuale di un'espressione completa.

Poi: inserimento di espressioni letterali; riconoscimento e somma di monomi simili; prodotti e rapporti di monomi; strumenti successivi sviluppati e provati singolarmente.

## Priorità e futuri profili

La priorità attuale è sviluppare il quaderno delle frazioni algebriche per il biennio: serve già a una studentessa. Il profilo Medie dovrà generare soltanto espressioni letterali (coefficienti razionali ammessi, senza lettere al denominatore); quello Biennio potrà generare frazioni algebriche. Il quaderno potrà comunque permettere l’inserimento di entrambe le tipologie. Questa distinzione del generatore è futura: la base attuale genera ancora soltanto espressioni numeriche.

Conservare il motore condiviso finché ha senso. Se emergeranno esigenze incompatibili, sospendere lo sviluppo specifico per le Medie e proseguire prima con le frazioni algebriche per il Biennio, senza imporre una biforcazione anticipata.
