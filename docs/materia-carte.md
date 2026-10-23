# Identikit della materia — 18 campioni, revisione del 18 ottobre 2026

## Stato attuale: revisione visiva approvata carta per carta

Questa sezione sostituisce le precedenti indicazioni relative a saccarosio, sabbia e controlli Pausa/Riprendi.

- Nuovo modulo `reader-matter-approved.js`: resa approvata con vista d’insieme e ingrandimento delle zone A/B/C. L’ingrandimento usa un riferimento SVG allo stesso mondo animato: nessuna seconda generazione casuale, nessun disallineamento temporale.
- Ghiaccio al posto dello zucchero: molecole H₂O, rete tetraedrica idealizzata dell’ossigeno, due H covalenti per O, contatti intermolecolari tratteggiati. Frammento finito e orientazioni illustrative; non una simulazione molecolare. Possibile cambiare punto di vista.
- Silicio di un microchip al posto della sabbia: elemento reticolare, non composto. Si rappresenta il materiale di base idealizzato puro, non l’intero chip. Struttura tipo diamante e legami sottili.
- Acciaio inox: maggior numero di siti metallici, ferro prevalente, Cr/Ni sostituzionali distribuiti senza un motivo periodico dei colori. Riferimento: esempio di acciaio austenitico monofasico; non tutti gli acciai.
- Alluminio: reticolo metallico FCC esteso. Cornice del volume osservato, non legami.
- Sale: reticolo tridimensionale con cariche; bicarbonato: tre livelli di ioni Na⁺ e HCO₃⁻, con − riferito al gruppetto. Disposizione del bicarbonato illustrativa, non cella cristallografica; nessuna molecola NaHCO₃ isolata.
- Grafite: tre fogli di esagoni leggibili; contatti tra piani tratteggiati. Spremuta: polpa sul fondo, campione lasciato a riposo.
- Aria e aria della nebbia: N₂/O₂ con Ar e CO₂ minoritari enfatizzati. Gas diversi nella stessa fase; la nebbia comprende goccioline d’acqua e aria. Densità e dimensioni schematiche.
- Acqua del rubinetto: più ioni disciolti, coppie aggiuntive bilanciate; composizione semplificata.
- Nessun pulsante di pausa nel gioco. Si rispettano riduzione movimento, visibilità della pagina e rilascio dei callback. Rendering a 12 fps, una sola scena condivisa tra le due viste.
- Versione dello stato 5: i round precedenti vengono reinizializzati perché due campioni sono stati sostituiti. Restano casualità, round 5/10/18, risposte errate accettate e reaction.

Fonti: https://openstax.org/books/biology-2e/pages/2-2-water ; https://www.iue.tuwien.ac.at/phd/wessner/node29.html ; https://www.intel.com/content/www/us/en/newsroom/tech101/explaining-common-chip-terms.html .

Illustrazione nuova: `assets/images/reader/chemistry/cards/silicio.webp`, generata con lo strumento immagini integrato. Prompt: illustrazione scolastica quadrata di un microchip nero su circuito verde acqua, piccolo spaccato con die di silicio visibile, vista di tre quarti, fondo crema, nessun testo/logo/personaggio o modello atomico. Il fronte del ghiaccio riutilizza l’illustrazione originale del progetto.

Verifiche: `node tests/matter-cards.cjs` e `node tests/matter-approved.cjs`; pagina di verifica `tests/matter-integration-review.html`.

## Cronologia precedente

Lezione per le medie, ancora in lavorazione. L'osservazione dei modelli precede la definizione delle categorie. Flusso: campione → descrizione di ciò che si vede → stato → carta successiva. Quattro descrizioni fisse; elementi con tre sottoscelte, composti con due. Omogeneità = uniformità della composizione alle scale osservate, non ordine geometrico. Nebbia e spremuta con polpa hanno più stati e richiedono Altro.

## Sostituzioni richieste dal curatore

| Campione precedente | Campione attuale | Modello / scopo |
| --- | --- | --- |
| Ottone della chiave | Acciaio inox del cucchiaio | Soluzione solida austenitica Fe–Cr–Ni idealizzata, reticolo FCC; esempio di miscela omogenea solida |
| Quarzo | Sabbia di quarzo | Stesso modello di α-quarzo, contesto più familiare; campione selezionato di sabbia silicea, non qualunque sabbia di spiaggia |
| Mercurio | Alluminio da cucina | Solido metallico FCC, palline tutte uguali |
| Cloruro di calcio | Bicarbonato da cucina | Solido ionico con Na+ e ioni poliatomici HCO3−; modello schematico ripetuto |
| Carburo di silicio | Diamante | Reticolo covalente di solo carbonio, confronto possibile con la grafite; è un elemento, non un composto |
| Ghiaccio | Ossigeno | Gas di molecole biatomiche O2, gruppetti di palline tutte uguali |

Le altre 12 carte restano: elio, acqua distillata, grafite, aria, sale, spremuta con polpa, saccarosio, anidride carbonica, acqua del rubinetto, nebbia, biscotto con cioccolato, PET. Nuove immagini originali dei sei campioni generate con imagegen; i modelli particellari sono invece disegni originali controllati in codice. Le vecchie immagini restano nell'archivio ma non nel mazzo.

## Strutture, limiti e fonti

- Alluminio: frammento FCC monocomponente. Involucro di ossido superficiale e impurezze commerciali non rappresentati; il campione osservato è il metallo.
- Acciaio: esempio selezionato di inox austenitico monofase, non un modello universale di ogni acciaio. Palline Fe, Cr, Ni distribuite su siti FCC. Carbonio e altri elementi in tracce omessi; proporzioni solo illustrative. Non è un reticolo di ferro puro in cui il carbonio sostituisce erroneamente il ferro. https://worldstainless.org/about-stainless/what-are-stainless-steels/categories-grades-and-product-forms/ e https://worldstainless.org/about-stainless/what-are-stainless-steels/introduction-to-stainless-steels/
- Bicarbonato: rapporto Na:H:C:O = 1:1:1:3; ogni gruppo HCO3 presenta tre ossigeni attorno al carbonio, idrogeno legato a un ossigeno. Nessun legame disegnato Na–C e nessuna molecola isolata NaHCO3. Disposizione periodica illustrativa, NON la cella monoclinica sperimentale della nahcolite; dimensioni e distanze ingrandite per distinguere gli ioni. I legami a idrogeno non sono rappresentati. Fonte di controllo chimico/cristallografico: https://aflowlib.duke.edu/prototype-encyclopedia/ABCD3_mP24_14_e_e_e_3e-001/ e https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch2/names.php
- Diamante: cella cubica con due sottoreticoli FCC di C sfalsati di (1/4,1/4,1/4), collegamenti ai primi vicini; gli atomi di bordo hanno legami mancanti. https://openstax.org/books/chemistry-2e/pages/10-6-lattice-structures-in-crystalline-solids
- Grafite: tre strati esagonali; nessun legame covalente tra strati, separazione amplificata per leggibilità.
- Sabbia di quarzo: α-quarzo P3221, a=4.9137 Å,c=5.4047 Å; Si(.4697,0,0), O(.4133,.2672,.1188); simmetrie e vicini Si–O a distanza <1.7 Å. Non è silicio né una copia del diamante. https://som.web.cmu.edu/structures/S097-alpha-quartz.html
- NaCl: frammento cubico alternato; i siti di bordo non danno da soli il rapporto stechiometrico bulk. Le cornici sono guide, non legami.
- Saccarosio: quattro gruppi C12H22O11, ciascuno con due anelli e ponte glicosidico. Conteggio e connettività controllati; geometria illustrativa, non conformazione/stereochimica sperimentale. Vista dall'alto obliqua per distinguere gli anelli.
- Ossigeno O2, CO2, acqua e aria: gruppi rigidi durante il movimento. Aria illustrativa, non campionamento quantitativo esatto. Elio monatomico.
- PET: anelli aromatici e gruppi estere; idrogeni omessi. Campione idealizzato di catene uguali senza additivi commerciali. https://www.essentialchemicalindustry.org/polymers/polyesters.html
- Nebbia: goccioline liquide nell'aria. Spremuta e biscotto: zone di composizione diversa, schemi alimentari a più scale; non sono inventate molecole della polpa o del biscotto. Le ellissi delimitano inclusioni, non molecole. Acqua del rubinetto: acqua con specie ioniche disciolte ingrandite.

## Movimento e interfaccia

Tutte le 18 carte hanno movimento e Pausa/Riprendi. Gas e liquidi traslano, gruppetti con legami ruotano restando integri; i solidi vibrano attorno ai siti e non diffondono. Per il saccarosio la vibrazione conserva i gruppi molecolari. Miscela: moti separati delle componenti, inclusioni mobili solo quando compatibili con la fase. Non è una dinamica molecolare quantitativa; tempi, velocità, distanze e dimensioni non sono in scala. Colori convenzionali, non colori degli atomi reali.

Proiezione e scala fisse; 24 fps; arresto fuori schermo, su fronte della carta, scheda browser nascosta e smontaggio del widget. Movimento ridotto: avvio in pausa. Nota generale espandibile, nessuna didascalia didattica su ogni carta. Versione del mazzo 3: eventuali risposte del mazzo precedente vengono azzerate per non attribuire risposte alle carte sostituite.

## Verifiche

- `node tests/matter-cards.cjs`: percorso completo di 18 turni, errori e sottoscelte, stati, avanzamento, persistenza; composizione del bicarbonato e del saccarosio, natura dei nuovi elementi, coordinazione massima Si/O del quarzo.
- `node tests/matter-motion.cjs`: 20 secondi simulati per ciascuno dei 18 modelli; coordinate finite, conteggi invariati, limiti del movimento, integrità molecolare, scala fissa, pausa/ripresa senza salti, visibilità e rilascio dei callback.
- Verifica visiva nella tavola `tests/matter-visual-review.html` e nel reader pubblicato. Revisione didattica carta per carta ancora aperta con il curatore.

## Produzione dei fronti (imagegen integrato)

File pubblicati in `assets/images/reader/chemistry/cards/`: `acciaio.webp`, `bicarbonato.webp`, `diamante.webp`, `sabbia.webp`, `alluminio.webp`, `ossigeno.webp`. Conversione WebP 640×640, qualità 89; nessuna immagine esterna riutilizzata.

Prompt comune effettivo, con inserimento di ciascun Subject:

> Use case: stylized-concept. Asset: square illustration for an Italian middle-school material sample card. Subject: [SUBJECT] Style: polished soft 3D storybook cartoon object illustration, painted textures and gentle shading, consistent with GatitoMath educational cards. Pale sky-blue textured tabletop/background, daytime soft light, object centered occupying 75 percent of square, clear silhouette, generous margins. No card border, no UI, no scientific particles or diagrams. No watermarks. Generate one square standalone asset.

Subject per file:

- acciaio: a single ordinary stainless steel school-lunch spoon, polished silver metal, lying diagonally. No food.
- bicarbonato: a small open unbranded white paper kitchen packet labelled exactly 'BICARBONATO', beside a small mound of fine white baking soda powder. No spoon or other material.
- diamante: one clear faceted diamond gemstone, recognizable brilliant cut, close view, modest sparkles, no jewelry metal setting.
- sabbia: a small mound of pale almost white quartz sand, many fine grains, a subtle beach cue in background but no shells or rocks. The sand is the subject.
- alluminio: a kitchen aluminium foil roll with a partially unrolled crumpled shiny sheet, silver metal, no food or packaging.
- ossigeno: a small upright medical oxygen cylinder with valve and pressure gauge, white body and turquoise shoulder, clearly labelled exactly 'OSSIGENO', clean friendly educational illustration. No mask, person, flame or smoke.

## 18 ottobre, seconda revisione — Identikit della materia

Nome del gioco aggiornato a **Identikit della materia**. La seconda parte della card introduttiva propone 5, 10 o 18 carte, con 5 come scelta iniziale. Lo stato è condiviso fra l'introduzione e il gioco nella medesima sezione del reader. La selezione sopravvive alla navigazione; cambiare dimensione avvia un nuovo round. Il mazzo usa Fisher–Yates e pesca senza reinserimento; non si rimescola quando si gira una carta, si apre il tabellone o si torna nella lezione. Il tabellone mantiene risposta parziale, fase della classificazione e fronte/retro.

Regole: pesca dal mazzo → carta sul tavolo con animazione → osservazione/ingrandimento e fronte/retro → apri la scheda → descrizione, eventuale sottogruppo, stato → conferma → feedback → prossima carta. Risposte complete ma sbagliate sono accettate e registrate. L'esito assegna 0, 1 o 2 indizi; non obbliga a riprovare. Il reader si sblocca dopo la consegna di tutte le carte del round scelto, indipendentemente dal punteggio. Non è una valutazione scolastica né un algoritmo di classificazione dei materiali reali.

Scheda finale: punteggio sul totale degli indizi, confronto delle risposte con i modelli e nuovo round da 5/10/18 carte. Le reaction WebP restano in uso. Nessuna definizione scientifica di categoria viene anticipata: le scelte conservano le descrizioni delle palline approvate dal curatore.

Sfondo originale `assets/images/reader/chemistry/tabletop-courtyard-v1.webp`, generato con imagegen integrato usando la scena del cortile come riferimento di stile. Tabellone, mazzo, dorso con zampina, timbri e animazioni sono elementi DOM/CSS/SVG, non impressi nello sfondo. La carta viene spostata nel dialog di ispezione e riportata al tavolo senza ricreare il PNG. Le risposte aggiornano soltanto la scheda; non ricaricano la carta. Preferenza di movimento ridotto rispettata sia nella distribuzione sia nei modelli.

Il solo innesto nel reader comune monta il selettore sulla card marcata `matterIntro`; le altre lezioni non cambiano. Versione di stato del gioco 4: migrazione dai vecchi 18 turni obbligatori a un round iniziale da 5. Le versioni dei modelli molecolari non cambiano.

Verifiche nuove: `tests/matter-cards.cjs` controlla round unici e casuali da 5/10/18, navigazione stabile, replay, accettazione di risposte errate, rifiuto di risposte incomplete, blocco della doppia conferma, punteggio esatto e migrazione. `tests/matter-motion.cjs` conserva la verifica dei 18 modelli. Controllo browser: selettore iniziale, pesca, flip, dialog ingrandito, consegna errata e avanzamento, fine round e viewport ridotta.

Prompt finale dello sfondo:
> Use case: illustration-story. Create a single wide landscape background asset for an interactive tabletop card game in GatitoMath. Reference image is style and location reference only: same warm honey-brown wooden school courtyard picnic table where Red and Morgana play. Camera directly above table, overhead flat-lay, 3:2 wide composition. The entire central 90% is empty wooden tabletop with subtle realistic painted wood grain, soft diffuse daylight and very faint dappled leaf shadows ONLY along outer edges. A tiny sliver of soft garden greenery can appear at far top corners. NO characters, NO paws, NO cards, NO game board, NO letters, NO text, NO objects: interactive game board and deck will be overlaid by code. Beautiful polished cartoon illustration, soft warm wood, not dark, not photorealistic. Uniform overhead projection so UI can be naturally placed on the surface. Avoid harsh distracting knots and stripes in center. Final asset is only empty table background.



## 23 ottobre — Opzioni specifiche per carta

Ogni carta dell'Identikit propone quattro descrizioni riferite al proprio modello. `choicesFor(card)` restituisce quattro opzioni con identificatore, testo e una sola risposta corretta. Non si usano più le quattro descrizioni generiche di elemento/composto/miscela; la scelta delle palline passa direttamente allo stato, senza sottogruppo aggiuntivo. Esempi: strati per la grafite, coppie per l'ossigeno, reticolo per il sale, palline singole e gruppi nel bicarbonato, catene per il PET, distribuzione uniforme per l'acciaio. Sono stati rimossi «più o meno» e gli elenchi di alternative raccolti in una singola risposta.

Lo stato prima visibile come «Altro» è ora «Sono presenti più fasi distinte», anche nei riepiloghi. La chiave interna resta invariata per non modificare i dati dei modelli. Nel biscotto vengono accettate sia l'osservazione dello stato solido sia quella di più fasi: impasto e cioccolato sono regioni distinte del modello, pur essendo entrambe solide. Non si penalizza una delle due osservazioni vere.

Il feedback e la scheda finale usano il testo specifico scelto e quello corretto della carta, non una definizione generale. I modelli, le immagini, le animazioni e la pesca restano invariati. Stato del gioco versione 6: un vecchio round viene reinizializzato perché le risposte precedenti usavano descrizioni e sottogruppi differenti.

Il test `tests/matter-cards.cjs` controlla quattro opzioni distinte e una sola corretta per ciascuna delle 18 carte, tutte le combinazioni di scelta e stato, rifiuto di risposte incomplete, impossibilità di aggirare le opzioni con la vecchia classificazione, punteggio, replay, round da 5/10/18 carte e migrazione dalla versione 5.
