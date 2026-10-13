# Caffetteria: apertura della lezione sugli angoli

Aggiornamento 2026-10-13.

## Regia e identità

Il fumetto iniziale usa livelli PNG indipendenti, personaggi montati una sola volta e pose già decodificate. Bjorne nero, Morgana grigia. Il foulard identifica gli studenti: non è un accessorio obbligatorio per ogni gatto. I personaggi secondari devono avere razze, sagome e identità differenti. Dafne è la studentessa bianca con occhi azzurri, occhiali tondi e maglioncino blu, ripresa dalla Hero originale del 22 settembre; Nilo è uno studente siamese con foulard giallo; Luna è una cliente adulta bicolore con occhiali, senza foulard; il barista è un British Shorthair con cappello e grembiule, senza foulard.

## Gioco

Ingresso immediato. Tastiera: WASD/frecce, Spazio o Invio per ispezionare e proseguire il dialogo; I per indizio, Esc per chiudere. Croce direzionale e pulsanti Ispeziona/Indizio sono dentro la cornice, disponibili anche con mouse e touch. Durante il dialogo il movimento si ferma. Il barista si muove leggermente dietro il bancone. Sprite di Morgana: tre fotogrammi per ciascuna delle quattro direzioni.

La sala ha un solo spigolo, non retto. Il perimetro è condiviso da scena, collisioni e trasformazione geometrica. Pavimento contenuto nella sala, porta orientata sulla tangente della parete. Le regioni e gli archi della teoria devono restare coerenti con le pareti del gioco.

Musica originale sintetizzata in Web Audio: melodia e arpeggio in la minore, circa 94 BPM, tono giocoso con mistero da “dungeon metropolitano”. Volume basso, pulsante mute, pausa su scheda nascosta, dissolvenza e chiusura del contesto quando si esce dalla card. Nessun brano esterno.

## Asset

Generazione tramite strumento integrato ImageGen, non CLI. Sprite originali, senza asset di videogiochi altrui:
- assets/images/reader/cafe-morgana-rpg-v1.png: griglia 3 colonne × 4 righe, idle e due passi nelle direzioni giù/sinistra/destra/su; pixel art, identità grigia e bandana viola.
- assets/images/reader/cafe-npcs-rpg-v3.png: griglia 2 × 2, Dafne/Luna/Nilo/barista; PNG trasparente. Prompt di revisione: cambiare solo la cella arancione con la gattina chiara dal foulard rosa della prima proposta, preservando gli altri tre personaggi, scala e allineamento.

I viewport SVG degli sprite devono mantenere overflow:hidden, anche nella transizione geometrica: gli stili generali del reader rendono altrimenti visibile l’intera tavola.

## Rifinitura del 13 ottobre, tarda serata

Dafne ritrovata nella Hero “Gatti Kawaii in Avventura Didattica.png”, creata il 22 settembre alle 11:35 UTC: è il personaggio bianco con occhiali e maglioncino blu a destra. La tavola aggiornata dei quattro NPC è cafe-npcs-rpg-v4.png, quattro righe (personaggi) e quattro colonne (giù, sinistra, su, destra). I clienti e il barista si voltano verso Morgana quando interrogati. Le zampe posteriori nelle viste laterali sono state rese più leggibili.

Morgana ridotta da 76 a 62 unità; ritagli ricavati dai separatori reali del PNG per evitare residui dei frame vicini. Sedie con profilo a L e ordine dei livelli corretto per la posa seduta. Finestre spostate nella fascia rialzata della parete, aggiunte finestre vicine all’ingresso. Piantine dettagliate: cafe-ficus-rpg-v1.png.

La musica usa ora la tonalità di do maggiore, circa 115 BPM, progressione C–F–G–C e note più brevi, per un tono allegro e avventuroso. Il dialogo del barista è in due battute separate.
