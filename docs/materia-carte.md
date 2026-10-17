# La materia — mazzo esplorativo (18 carte)

Attività per la seconda media: prima riconoscere lo stato del campione, poi descrivere il modello. I nomi delle classificazioni in `kind` sono metadati redazionali, non risposte richieste allo studente. Le carte sono aggiungibili all'array `deck`; il totale e l'avanzamento si aggiornano automaticamente.

## Regia e controlli

- Un turno alla volta, quattro opzioni per domanda, possibilità di ritentare e reaction condivise.
- Lo stato è conservato durante la navigazione nel reader. La ricarica della pagina avvia una nuova attività, come negli altri laboratori del reader.
- Continua richiede il completamento del mazzo. Sblocca tutto conserva la navigazione per passaggi e permette la revisione senza rispondere.
- Le descrizioni sono accessibili anche senza distinguere i colori: non si richiede di riconoscere un elemento dal colore.

## Campioni e limiti dei modelli

Tre elementi nei tre stati: grafite, mercurio, elio. Tre composti molecolari: zucchero, acqua distillata, anidride carbonica. Due composti ionici solidi: NaCl e CaCl2 anidro. Due composti reticolari covalenti solidi: quarzo e carburo di silicio. Tre miscele omogenee: ottone monofase, acqua del rubinetto, aria secca semplificata. Tre eterogenee: biscotto, spremuta con polpa, nebbia. Due carte ulteriori: PET e ghiaccio.

- Le immagini sono illustrazioni originali; i retri sono modelli SVG controllati, non fotografie al microscopio.
- Campioni puri e condizioni sono specificati: non si identifica la mina intera con la grafite pura, né tutta la carta abrasiva con SiC, né tutti i prodotti assorbiumidità con CaCl2 anidro puro.
- Nebbia e spremuta comprendono più stati: Altro è la risposta corretta e viene spiegata dopo la scelta.
- I solidi ionici sono rappresentati senza coppie isolate; il rapporto Ca:Cl è 1:2. L'array non pretende di riprodurre la cella reale del CaCl2.
- La grafite mostra strati esagonali con collegamenti dentro gli strati, non tra gli strati.
- I reticoli tetraedrici sono frammenti proiettati. Il modello del quarzo illustra la connessione Si–O–Si ma non la geometria cristallografica del quarzo; questa limitazione è visibile nella carta.
- Il saccarosio è rappresentato come gruppi uguali con composizione C12H22O11, non come geometria molecolare esatta.
- Il PET mostra lo scheletro del suo motivo ripetuto, con anello aromatico e gruppi estere; gli H sono omessi. Non è una catena di polietilene.
- Le miscele alimentari richiedono schemi a più scale: non si inventa una molecola del biscotto o della polpa. Le inclusioni evidenziano regioni di composizione diversa.
- Ogni gocciolina della nebbia contiene molti gruppi d'acqua; il gas circostante è rappresentato separatamente. Distanze, concentrazioni e dimensioni sono illustrative.
- Una struttura microscopica è un livello di spiegazione delle proprietà, non una pretesa di dedurre ogni proprietà da una singola immagine statica.

## Riferimenti di controllo

- OpenStax, Chemistry: Atoms First 2e, The Solid State of Matter: https://openstax.org/books/chemistry-atoms-first-2e/pages/10-5-the-solid-state-of-matter
- ACS, Middle School Chemistry, Ionic Bonding: https://www.acs.org/middleschoolchemistry/lessonplans/chapter4/lesson5.html
- Essential Chemical Industry, Polyesters: https://www.essentialchemicalindustry.org/polymers/polyesters.html
- Università di Bologna, PET: https://adu.unibo.it/pack/en/materials/polietilene-tereftalato-pet

## Immagini

Generatore integrato, illustrazioni singole originali. Prompt comune: “Single square educational playing-card front artwork; soft charming high-quality cartoon painted style; recognizable objects centered entirely visible with generous margin; delicate pale blue background; original art for GatitoMath middle school chemistry; no text, logos, characters, labels, molecules, panels or card border.” Soggetto specifico: il campione indicato nel titolo, con contesto riconoscibile (pompa/palloncino, bombola/gasatore, rubinetto/bicchiere, matita/grafite, assorbiumidità/granuli, carta abrasiva/grani). Il file `materia-carte-assets.json` conserva l'associazione con gli originali.
