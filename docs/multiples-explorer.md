# Lavagna dei multipli

Esplorazione opzionale nella card «Le tabelline ci mostrano i multipli». Il numero iniziale è 7, selezionabile tra 1 e 20. La prima sequenza contiene tutti gli undici prodotti da ×0 a ×10; il pulsante «Mostra altri multipli» visualizza i dieci prodotti da ×11 a ×20. Cambiando numero si torna al primo gruppo, includendo lo zero.

La scrittura appare ogni 110 ms, con incrementi +n e prodotto corrispondente. Selezionare un risultato evidenzia la moltiplicazione; l'animazione non sovrascrive una scelta dell'utente. Le animazioni precedenti vengono cancellate cambiando numero o pagina e quando si lascia la card. Con prefers-reduced-motion tutti i valori sono disponibili subito.

Viene riutilizzato assets/images/morgana-classroom/chalkboard.png senza modificarlo. Numeri e controlli sono HTML/CSS, accessibili da tastiera, con testo chiaro sopra la superficie verde.

Il modulo GatitoMultiples.mount(host, state) conserva numero, pagina e prodotto nella visita. Non dipende dai quiz, dai dati delle monete o dal motore del reader: potrà essere riutilizzato nel futuro copilota, da progettare separatamente. Qui non viene aggiunto alcun requisito per procedere nella lezione.
