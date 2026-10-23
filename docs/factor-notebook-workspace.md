# Quaderni di MCD e mcm

I due laboratori condividono il quaderno, ma ciascuna pagina usa esclusivamente la propria operazione. Non c’è uno switch interno e ogni apertura riparte vuota.

Il nuovo numero e il tastierino si inseriscono dopo gli altri numeri nello stesso contenitore a capo automatico. La pagina sfrutta la larghezza disponibile.

Arrivare a 1 termina le divisioni, ma non completa il lavoro: lo studente scrive e conferma la scomposizione. `done` registra la fine delle divisioni e `written` la conferma della scrittura. Solo una scomposizione confermata può essere selezionata per il calcolo. Le divisioni complete restano visibili accanto alla scrittura; una scrittura diretta che sostituisce divisioni parziali non conserva una tabella incompleta.

Dal tastierino aperto con Inserisci, MCD/mcm avvia il calcolo sui numeri selezionati. Le caselle dei fattori evidenziano le relative occorrenze nelle scomposizioni. Esponenti e prodotto sono scritti dallo studente e verificati separatamente.

`^` ha il tooltip Potenza; `·` ha il tooltip Moltiplicazione. Il tasto ⌦ o Canc elimina il token attivo (fattore, esponente o nuovo numero). Backspace su un token vuoto lo elimina; su un numero non vuoto cancella una cifra. Ogni numero confermato ha anche il comando ×.

Verifica del modello: `node tests/factor-notebook.cjs`.
