# Direzione artistica — introduzione alla cinematica scalare

## Asset
`assets/images/reader/red-bjorne-treno-v1.webp`, 960×640, versione ottimizzata dell'illustrazione generata con lo strumento immagini integrato. Riferimenti: Red e Bjorne già presenti nel sito. L'illustrazione è narrativa; curve, coordinate, cronometro e circuito restano disegnati e controllati dal codice.

## Prompt della scena
Use case: illustration-story. Create one polished wide landscape cutout illustration for GatitoMath physics reader, approximately 3:2. Use the two attached images strictly as character references, not edit targets. Preserve Red the fluffy orange tabby with red neckerchief and little brown explorer backpack, and Bjorne the fluffy dark brown cat with turquoise neckerchief. Scene: side view of a small elegant turquoise passenger train carriage with golden trim, cutaway/open side showing Red SITTING comfortably on a clearly visible upholstered seat inside the moving carriage, waving happily; Bjorne is OUTSIDE on a small station platform watching, with a simple station shelter. Wheels sit on short railway tracks. Clear spatial separation between cat on train and cat on fixed platform. Match richly shaded whimsical anime storybook style of provided characters; soft detailed fur, clean silhouettes. Friendly suitable for 15-year-olds, not babyish. Compose wide, one carriage on left two thirds, station cat on right third. No textual labels, letters, speech bubbles, equations, diagrams or motion arrows: these are added in HTML. Entire composition on real transparent background; no sky or landscape background, no full rectangle. Keep all characters and carriage in frame with modest margin. Exactly two cats, correct four paws each, no duplicate limbs. Palette turquoise, honey gold, warm cream consistent with website.

Il risultato conserva un canale alpha trasparente; la scena è inserita in un riquadro coerente con il tema. Non alteriamo i contenuti approvati durante la finitura estetica.

## Revisione del finestrino e dello sfondo
Asset attivo: `assets/images/reader/red-bjorne-treno-v2.webp`. Finestrino normale con vetro, parete continua sotto, Red visibile solo nella parte alta. Sfondo opaco leggero con cielo e colline. Due modifiche con lo strumento immagini integrato: finestrino, poi sfondo, preservando stazione e Bjorne.

Prompt finestrino: replace the large cutaway with a normal passenger window, rounded corners and clear-glass reflections; show only Red’s head, shoulders and waving paw; hide his body with solid turquoise carriage wall; preserve Bjorne, station and composition.
Prompt sfondo: fill transparent areas with soft pale blue evening sky, subtle clouds, distant green rolling hills and a few soft-focus trees; preserve all foreground objects, characters and normal window exactly; no extra characters, foreground objects or text.

### Illustrazione integrata nella pagina
Rimossa la fascia con i nomi e la cornice rettangolare. La stessa scena usa una maschera SVG con curva chiusa irregolare e una sfumatura breve ai bordi, che lascia leggibili personaggi e finestrino su entrambi i temi.

### Benvenuto con Red e Bjorne
Asset: `assets/images/reader/red-bjorne-benvenuto-v1.png`, PNG RGBA trasparente, 720×480. Generato con lo strumento integrato imagegen a partire dalle identità originali dei personaggi. Red saluta con entusiasmo; Bjorne, senza scatola, sorride e alza una zampina. Composizione compatta orizzontale, adatta alla card e a entrambi i temi.

### Laboratorio del periodo illustrato
Stanza senza locomotiva e balloon incorporati; 16 fotogrammi direzionali della locomotiva (passi nominali di 22,5°), movimento continuo sul tracciato curvo calibrato ai binari. La posizione di misura coincide con il semaforo accanto alla stazione. Asset in `assets/images/reader/period-lab/`: `room-v1.webp`, `locomotive-00.webp` … `locomotive-15.webp`, `red-balloon-v1.png`, `bjorne-balloon-v1.png`. Immagini create con imagegen integrato, identità e scena approvate come riferimenti. Balloon visibili per tre secondi; gattini cliccabili e azionabili da tastiera; cambio velocità bloccato durante le letture. Nessuna carrozza.

### Scheletro matematico e ancora della locomotiva
Il percorso è una spline chiusa periodica Catmull–Rom su 16 punti centrali fra le rotaie nella scena nativa 1200×800. Le cubiche di Bézier corrispondenti definiscono la curva; una tabella di lunghezza d’arco di 2048 campioni parametrizza la progressione. La tangente determina il fotogramma. Il punto sulla curva coincide con l’ancora (128,236) sul fotogramma 256×256. Un contenitore con origine di trasformazione (0,0) conserva questo vincolo anche cambiando scala prospettica. La diagnostica `trainDebug` mostra curva e ancora; nessun controllo aggiuntivo nel percorso dello studente.

La scena del periodo usa la medesima maschera curva sfumata della scena in stazione; rimossa la cornice del riquadro. Le aree cliccabili di Red e Bjorne rimangono trasparenti al passaggio e al clic del mouse; il focus da tastiera conserva un indicatore accessibile.

### Mediana esplicita e centro di appoggio
La curva è definita come media punto per punto delle due spline delle rotaie, ricavate da 16 coppie di riferimenti corrispondenti. Le ancore dei 16 fotogrammi sono calibrate sul centro di appoggio delle ruote, distinto dal margine inferiore della tela. La scala va da 0,78 sul fondo a 1,00 sul tratto anteriore, con vincolo conservato attorno al punto di ancoraggio.

La scala prospettica è ora il rapporto fra la distanza locale delle due rotaie corrispondenti e la distanza sul tratto anteriore: k(u)=|R_est(u)−R_int(u)|/g_anteriore. La profondità verticale non determina più la scala. Con la calibrazione attuale il tratto posteriore conserva circa l’84% della dimensione anteriore.

### Transizioni senza scatto fra le viste
Le sedici immagini rimangono precaricate nel medesimo contenitore ancorato alla mediana, ciascuna con il proprio appoggio. Fra due orientamenti adiacenti una transizione smoothstep delle opacità evita il cambio secco di sagoma e qualsiasi ricaricamento della sorgente durante il movimento. I pesi sommano a uno, anche nel passaggio fra vista 15 e 0.
