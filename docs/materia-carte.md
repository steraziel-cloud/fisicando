# Materia sotto copertura — revisione visiva e classificazione

18 campioni. Flusso: fronte del campione → osservazione del modello → classificazione dello stato → carta successiva. Quattro descrizioni fisse; gli elementi aprono tre sottoscelte (palline separate, gruppetti, struttura) e i composti due (gruppetti uguali, strutture). Nessun nome di categoria anticipato. PET trattato come campione idealizzato di catene uguali, non come miscela di additivi del prodotto commerciale.

Le scelte delle miscele confrontano distribuzione e proporzioni, non ordine/disordine. La nebbia e la spremuta con polpa richiedono Altro perché includono più stati. I messaggi descrittivi di ogni singola carta sono stati eliminati; una nota espandibile vicino al titolo raccoglie i limiti generali dei modelli.

## Disegno

Modulo separato `reader-matter-models.js`: coordinate tridimensionali, proiezione ortografica obliqua con asse verticale, sfere con gradiente radiale e ordinamento in profondità. Le cornici dei reticoli sono guide grafiche, non legami. Nessun bordo microscopico viene usato per delimitare una singola molecola d'acqua. I contorni delle inclusioni sono invece calcolati dall'inviluppo delle sfere proiettate, con margine esterno: i gruppi restano racchiusi e centrati.

- NaCl: frammento cubico alternato, 3×3×3 siti; differenza di raggio illustrativa. Gli atomi di bordo non danno da soli il rapporto stechiometrico bulk; il conteggio nella cella richiede pesi di condivisione, non trattati qui.
- CaCl2 anidro: motivo Pnnm, due Ca e quattro Cl per cella, ripetuto 2×2×2; x e y e rapporti delle lunghezze sono approssimati. Non si sostituisce con un reticolo cubico generico né con molecole isolate.
- Grafite: tre strati esagonali, nessun legame tra gli strati; distanze relative degli strati amplificate per leggibilità.
- SiC: cella cubica della forma zincblenda, basi FCC sfalsate di (1/4,1/4,1/4), legami ai primi vicini.
- Quarzo: sostituito il precedente schema derivato dal diamante con un frammento di α-quarzo P3221. Dati CMU: a=4.9137 Å,c=5.4047 Å; Si(.4697,0,0), O(.4133,.2672,.1188). Orbite di simmetria, collegamenti Si–O a distanza <1.7 Å. Il test controlla che Si non superi coordinazione 4 e O coordinazione 2; i siti al bordo del frammento possono avere legami mancanti.
- Saccarosio: due anelli, ponte glicosidico, gruppi OH; conteggio C12H22O11 controllato per gruppo. Conformazioni e stereochimica non sono una geometria sperimentale; non usarlo per insegnare stereoisomeria.
- PET: ripetizioni con anelli aromatici e gruppi estere, catene ondulate nello spazio; idrogeni omessi. Non è polietilene.
- Acqua, ghiaccio e gas: gruppi ruotati nello spazio; la disposizione del ghiaccio serve a evidenziare un solido molecolare e non riproduce la cella completa del ghiaccio Ih. Mercurio compatto disordinato, elio monatomico.
- Ottone: modello di soluzione solida sostituzionale FCC idealizzata monofase. Acqua del rubinetto: specie disciolte ingrandite; composizione illustrativa.
- Nebbia: gruppi d'acqua dentro goccioline, gas fuori. Spremuta e biscotto: schemi a più scale, strutture alimentari semplificate; non esistono una molecola della polpa o del biscotto. La forma delle inclusioni non è una geometria cristallografica.

## Fonti di controllo

- https://som.web.cmu.edu/structures/S097-alpha-quartz.html
- https://aflow.org/p/YTPF/ — Hydrophilite CaCl2 C35, AB2_oP6_58_a_g-001; Hicks et al., Computational Materials Science 199,110450 (2021).
- https://openstax.org/books/chemistry-2e/pages/10-6-lattice-structures-in-crystalline-solids
- https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter
- https://www.essentialchemicalindustry.org/polymers/polyesters.html

## Verifiche

`node tests/matter-cards.cjs`: 18 turni, errori di classificazione e sottogruppo, tre fasi, conservazione in navigazione, completamento, quattro descrizioni, composizione del saccarosio e rapporto Ca:Cl. Il controllo browser verifica navigazione, layout e lettura dei modelli; non sostituisce la revisione scientifica e didattica carta per carta con il curatore.



## Prova di movimento — elio, acqua e sale

Solo queste tre carte sono animate, sia nel reader sia nella tavola interna di confronto. Le altre restano statiche per la revisione successiva.

- Elio: traslazione di palline separate in tre dimensioni, cambi di direzione tramite rimbalzi ai limiti della finestra e urti elastici idealizzati tra centri.
- Acqua: gruppi rigidi di tre palline che traslano e ruotano. Le distanze dei legami dentro ciascun gruppo restano costanti. Le interazioni tra i gruppi sono un modello semplificato a sfere di esclusione, non una simulazione quantitativa dell'acqua né dei legami a idrogeno.
- Sale: oscillazioni limitate a 0.018 unità per coordinata attorno ai siti; il reticolo non scorre e non si disgrega. I moti non rappresentano i modi normali misurati del cristallo.

Proiezione e scala restano fisse. Tempi e velocità non sono in scala fisica. Pausa/Riprendi mantiene il fotogramma e la scelta durante le fasi della carta. L'animazione è arrestata sul fronte, nelle schede browser non visibili e quando il widget viene smontato. La preferenza di movimento ridotto parte in pausa; l'utente può avviare esplicitamente. Rendering limitato a 24 fps.

`node tests/matter-motion.cjs`: 20 secondi simulati per campione, confini, conteggi, distanze intramolecolari costanti, vibrazioni limitate, scala fissa, pausa/ripresa senza salti, visibilità e rilascio dei callback.
