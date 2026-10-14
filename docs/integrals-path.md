# Percorso integrali – prima bozza operativa

14 ottobre 2026. Destinazione: livello `analisi1`, quinta liceo scientifico e primo anno universitario. Esigenza iniziale: uno studente di Economia deve imparare rapidamente a risolvere gli integrali immediati, quelli riconducibili a immediati per sostituzione, le funzioni razionali fratte e, se possibile, gli integrali per parti.

## Riferimenti e selezione

Manuale fornito dall’utente: Patrizia Di Gironimo, Gerardo Iovane, Elmo Benedetto, Antonio Briscione, *Analisi Matematica per informatici. Teoria ed esercizi*, prima edizione 2021, ISBN 979-12-5994-828-1. Intervallo di riferimento: pagine 271–325; la numerazione del PDF coincide con quella stampata. Il PDF originale non viene pubblicato nel sito.

Capitolo 10 (271–282): integrabilità secondo Riemann, proprietà dell’integrale definito, primitive, funzione integrale, teorema fondamentale e interpretazione geometrica. Il percorso espone l’idea di Riemann, la formula fondamentale, area con segno, valore medio e uso operativo. Dimostrazioni complete e teoria della misura di Peano-Jordan non sono necessarie per questa consegna.

Capitolo 11 (283–325): immediati e riconoscimento delle composte, formule goniometriche, razionali fratte, per parti, sostituzione e casi particolari. Sono inclusi gli schemi fondamentali, i fattori lineari distinti/ripetuti, i quadratici irriducibili, i denominatori misti, il completamento del quadrato e un richiamo alle potenze quadratiche ripetute. Werner, ricorrenze goniometriche, classificazione completa dei differenziali binomi, sostituzioni parametriche goniometriche, iperboliche e di Eulero, radicali quadratici più complessi e ricorrenze generali restano approfondimenti futuri. Non si dichiara che il percorso esaurisca ogni caso delle 55 pagine.

Testi, esempi e allenamento sono una rielaborazione originale. Il riferimento orienta la selezione scientifica; non vengono riprodotte pagine, illustrazioni o soluzioni del manuale. La verifica autonoma dei calcoli evita di propagare refusi del testo o dell’estrazione PDF.

## Lezioni e ordine operativo

1. Primitive e integrali immediati (`integrali-immediati`).
2. Funzioni composte e integrazione per sostituzione (`integrali-sostituzione`).
3. Funzioni razionali fratte: divisione e fratti semplici (`integrali-razionali-lineari`).
4. Funzioni razionali fratte: denominatori quadratici (`integrali-razionali-quadratiche`).
5. Integrazione per parti (`integrali-parti`).
6. Integrali definiti: significato e calcolo (`integrali-definiti`).

L’ordine anticipa la ricerca delle primitive per soddisfare l’urgenza degli esercizi. L’ultima lezione ricongiunge tecniche e significato del definito, con un esempio di costo marginale e costo fisso. La distinzione fra definito e indefinito è esplicitata già nella prima lezione.

## Linea editoriale e interazioni

- Definizioni brevi, condizioni di validità vicine alla formula, nessun formalismo usato senza una spiegazione.
- Passaggi progressivi a sostituzione per evitare schermate cumulative troppo alte. L’esempio rimane riconoscibile nei passaggi successivi.
- 57 quesiti distribuiti fra i checkpoint: almeno tre per sezione, quattro alternative e feedback legato al passaggio matematico.
- Glossario dedicato `int-*` per primitive, indefinito, definito, linearità, sostituzione, fratti semplici e altri prerequisiti locali.
- Formule MathML native generate in fase di preparazione: nessun motore remoto necessario a leggere la pagina.
- Allenamento separato: 21 esercizi, suggerimento opzionale e soluzione a passaggi. Lo studente svolge sul quaderno; non è un risolutore automatico né il futuro copilota.
- Menù e lezioni conservano “in lavorazione”: prima bozza pronta per la revisione, senza completamento delle lavagne e delle immagini.

## Verifiche

La verifica automatica svolta prima della pubblicazione controlla simbolicamente 45 identità di primitive e sei valutazioni definite; controlla inoltre struttura delle lezioni, numero di alternative e validità XML di 331 formule nel reader. Nei controlli simbolici log|g| è trattato tramite la derivata g′/g sugli intervalli dove g non si annulla. Le condizioni di dominio sono esplicitate nei testi. Controlli JavaScript e verifica nel browser prima della consegna.

## Prossima revisione

Rivedere densità, ordine e difficoltà dei quiz con il docente e lo studente. Scegliere insieme eventuali lavagne: famiglie di primitive, funzione interna e derivata evidenziate, divisione polinomiale e ricomposizione dei fratti, area con segno. Aggiungere approfondimenti solo se richiesti dal programma del corso di Economia.
