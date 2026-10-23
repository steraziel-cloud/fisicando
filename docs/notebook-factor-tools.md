# MCD e mcm nel quaderno delle frazioni

Il menu Strumenti richiama un quaderno sovrapposto, senza abbandonare l’esercizio corrente. Ogni apertura parte da uno stato nuovo, con i soli numeri già riportati.

- MCD usa numeratore e denominatore della frazione selezionata; se nel quaderno c’è una sola frazione, usa quella. Il comando è disponibile anche vicino alla selezione.
- mcm usa esclusivamente i token dei denominatori selezionati (almeno due). Senza selezione, selezionando numeratori o frazioni intere non viene proposto il calcolo del mcm. Con i denominatori selezionati, Strumenti mostra soltanto Calcola mcm. Nel confronto la selezione di una frazione intera offre Frazione equivalente, senza il richiamo MCD. La riduzione conserva il proprio richiamo MCD.
- Divisioni, scomposizioni, scelta degli esponenti e risultato restano scritti dallo studente e verificati dal quaderno condiviso.
- Solo un risultato verificato abilita Riporta il risultato nel quaderno. Il valore torna come appunto; per il MCD degli stessi termini viene proposto come divisore, prima di scrivere i quozienti. Frazione equivalente chiede prima il denominatore comune, poi il quoziente fra quel numero e il denominatore attuale. Lo studente scrive il prodotto del numeratore. Il denominatore finale è quello già indicato; ogni risposta viene validata prima di modificare la frazione. È ammesso anche il quoziente 1, quando il denominatore è già quello comune.
- Chiusura, Escape e navigazione smontano lo strumento. Nessun salvataggio condiviso con i laboratori separati.

API condivisa: `GatitoFactorNotebook.mount(parent, {mode, initial, onResult})` e `getResult()`. Il callback espone solo un risultato verificato; la modifica del risultato lo invalida.

Limite degli strumenti: numeri positivi di massimo 12 cifre; il quaderno delle frazioni conserva i propri limiti più ampi. Le richieste incompatibili mostrano un messaggio senza modificare le frazioni.

Verifiche: `node tests/factor-notebook.cjs` e `node tests/notebook-factor-tools.cjs`.
