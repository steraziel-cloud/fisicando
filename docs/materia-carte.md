# Materia sotto copertura — 18 campioni, revisione del 18 ottobre 2026

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
