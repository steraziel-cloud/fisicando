# Banco operativo delle frazioni — 20 ottobre 2026

Prima parte del nuovo copilota: componente riutilizzabile per manipolare una sola frazione di numeri naturali. Non include ancora guida assistita, riconoscimento della scrittura, parser di espressioni o altre operazioni.

## Accesso

- Pagina autonoma: `copilota-frazioni.html`.
- Nella prima lezione sui razionali, sei card dedicate a frazioni, equivalenze, riduzione e zero usano il banco al posto dei diagrammi precedenti.
- La scheda Laboratorio della stessa lezione apre la pagina autonoma.
- Restano i diagrammi delle altre idee: inclusione degli insiemi, rapporto, confronto e densità. Non sono ancora operazioni del copilota.

## Operazioni disponibili

1. Inserimento di numeratore e denominatore, con validazione esplicita. Il comando Carica avvia un nuovo percorso, recuperabile con Annulla.
2. Semplificazione mediante un divisore scelto dall’utente e applicato contemporaneamente ai due termini. Solo divisioni intere esatte: nessuna trasformazione parziale viene applicata in caso di errore.
3. Riduzione completa con il M.C.D., soltanto su comando esplicito.
4. Cronologia: frazione di partenza, divisore e trasformazione di entrambi i termini per ogni passo.
5. Annulla, Ripristina e Riparti. Anche il caricamento di un’altra frazione e il ritorno all’inizio si possono annullare.
6. Tastiera normale e tastierino numerico con inserimento nel campo selezionato, cancellazione e movimento fra campi.
7. Espansione in dialogo, con mantenimento di dati e passaggi; Escape ritorna alla card.

Il lavoro nelle card è condiviso durante la navigazione nella lezione; cambiare card non carica automaticamente un altro esempio. Il pulsante Carica l’esempio rende esplicita l’azione. Un ricaricamento della pagina avvia una nuova sessione. La pagina autonoma ha una propria sessione.

## Matematica e dati

- Frazioni a/b con a naturale (anche 0), b naturale non nullo.
- Input di sole cifre; spazi esterni ignorati; zeri iniziali normalizzati.
- Calcolo esatto con BigInt; massimo 30 cifre per termine o divisore.
- Denominatore 0, numeri negativi, decimali, espressioni ed esponenti in notazione scientifica vengono rifiutati con messaggio comprensibile.
- Il divisore deve essere maggiore di 1 e comune ai due termini.
- 0/b si riduce correttamente a 0/1. Le forme n/1 mantengono la frazione e mostrano anche il numero naturale equivalente.
- Frazioni già ridotte non generano passaggi vuoti. Un’operazione non valida non altera stato, cronologia o possibilità di ripristino.
- Undo/redo coprono le operazioni concluse; nei campi di testo resta disponibile il normale annullamento del browser.
- Massimo 256 transazioni annullabili. Nessun servizio remoto, salvataggio di dati dello studente o dipendenza matematica esterna.

## Architettura

`GatitoFractionCopilot.Workbench` è il nucleo indipendente dalla UI: `load`, `divide`, `reduce`, `undo`, `redo`, `restart`, `snapshot`, `subscribe`. I valori pubblici sono stringhe intere; le decisioni matematiche usano BigInt. `mount` gestisce UI e ciclo di vita. Questo separa le operazioni dal futuro sistema di guida, che potrà proporre un’azione senza cambiare il motore di calcolo.

Il vecchio laboratorio, in `steraziel-cloud/laboratorio-espressioni/index.html`, è stato consultato come riferimento funzionale; non è stato copiato né modificato. Il riferimento originario usava selezione di token e sostituzione con una frazione ridotta tramite M.C.D.

## Verifiche

`node tests/fraction-copilot.cjs`: 6.480 frazioni, invarianti per prodotto incrociato, riduzione ai minimi, zero, numeri oltre il limite degli interi esatti di Number, errori senza mutazioni, sequenze di annullamento/ripristino e cambio della frazione di partenza. Controllo sintattico di tutti i file JS modificati. Verifica desktop eseguita sulla versione pubblicata: inserimento con tastierino, semplificazione 18/24 → 9/12 → 3/4, undo/redo, divisore non comune senza modifica della frazione, denominatore zero, 0/12 → 0/1, conservazione del lavoro fra card, dialogo di espansione e chiusura con Escape, caricamento di un esempio annullabile. I campi dell’editor mostrano la frazione corrente; la frazione iniziale resta nella cronologia. Da verificare con lo studente e su dispositivo mobile reale.
