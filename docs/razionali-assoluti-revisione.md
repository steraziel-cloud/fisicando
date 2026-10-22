# Numeri razionali assoluti — prima versione da rivedere

## Obiettivo e riferimento

Cinque lezioni originali per le medie, con nomi delle proprietà e passaggi dal problema concreto alla formalizzazione. Riferimento: fotografie del volume indicato dall’utente come «Dodero», capitolo terzo, pagine 75–87; aggiunte le pagine 70–72 per precedenze e parentesi. Edizione e altri autori non identificati. Nessuna attribuzione di citazioni letterali; testi, esempi e lavagne sono stati riscritti per il reader.

Applicati il Manifesto metodologico e la relazione sul reader forniti nel progetto: esempio persistente, sostituzione del testo nelle slidate, profondità facoltativa, riepilogo separato, quiz concettuale distinto dall’allenamento.

## Percorso

1. **L’insieme dei numeri razionali assoluti.** Ampliamento di ℕ, frazione come quoziente, unità e parti uguali, equivalenza e invariantiva, minimi termini, classe di equivalenza, ℚₐ, zero e denominatori, rapporto ordinato, confronto, ordine e densità. Riferimento: pp. 75–79 e definizione di rapporto p. 87.
2. **Le operazioni in ℚₐ.** Significati e procedimenti di addizione, sottrazione, prodotto, quoziente e potenza; proprietà e relative condizioni. Riferimento: pp. 77–80 e richiami di aritmetica già incontrati.
3. **Le espressioni con le frazioni.** Precedenze, parentesi, uguaglianze, frazioni come raggruppamenti, esempio svolto e semplificazioni. Riferimento: pp. 70–72 e 81.
4. **Frazioni e numeri decimali.** Valore posizionale, frazioni decimali, divisione con resti, limitati e periodici, classificazione dal denominatore ridotto, generatrici. Riferimento: pp. 82–85.
5. **I valori approssimati di un numero razionale.** Valore esatto, difetto/eccesso, troncamento e arrotondamento, intervalli ed errore assoluto. Riferimento: pp. 85–86; arrotondamento esplicitato come complemento didattico.

Fuori dal nucleo: interi relativi, reali e irrazionali, semplici equazioni e proporzioni. I relativi e reali conservano i segnaposti in un argomento separato nel catalogo. Il rapporto è già introdotto come quoziente; nessuna tecnica sulle proporzioni.

## Scelte matematiche

- ℕ include 0; ℚₐ include 0 e i razionali positivi. Non usata Q+ perché la convenzione sull’inclusione dello zero varia.
- Divisione sempre accompagnata da divisore non nullo. Non dichiarata un’operazione definita su ogni coppia di ℚₐ.
- Sottrazione in ℚₐ soltanto quando il minuendo è almeno il sottraendo.
- Proprietà invariantiva delle frazioni con moltiplicatore naturale non nullo, o divisore comune per la riduzione in termini naturali.
- 0/0 escluso; 0⁰ non definito nel percorso. Inverso solo per numeri non nulli.
- Frazione impropria: numeratore ≥ denominatore; le apparenti rappresentano un naturale. Esplicitata questa convenzione.
- Densità dimostrata con il punto medio; non confusa con il fatto che ogni punto della retta sia razionale.
- Per classificare un decimale, denominatore sempre ridotto ai minimi termini. Il denominatore 1 è il caso naturale e limitato.
- 0,(9) = 1 trattato come approfondimento facoltativo; preferita la rappresentazione terminante quando esiste.
- Generatrici motivate tramite allineamento e sottrazione delle code, non soltanto tramite ricetta.
- Approssimazione calcolata da quoziente e resto interi: riporti e casi a metà non dipendono da errori floating point. Convenzione di arrotondamento a metà verso l’alto per numeri non negativi.
- Chiusura delle operazioni, nomi delle proprietà e loro condizioni sono espliciti anche nella versione medie.

## Da valutare insieme

Prima stesura completa e utilizzabile, da rivedere con il docente per quantità di testo, esempi e profondità delle singole card. Le scene finali riusano un’illustrazione dei personaggi già presente: non sono state generate nuove scene narrative specifiche. Non è un trasferimento fotografico delle pagine del libro. Le lavagne sono diagrammi nativi accessibili e controlli HTML, senza servizi esterni.

## Verifiche automatiche

- 5 lezioni, 40 card, 75 passaggi, 17 voci di glossario e 24 domande finali.
- Collegamenti fra lezioni e voci del catalogo univoci; keyword risolte.
- 5.040 casi di calcolo intero controllati per intervalli, arrotondamenti e sviluppi decimali; verificati anche il riporto 9,995 → 10,00 e i casi già esatti.
- Sintassi JavaScript verificata per contenuti, lavagne, catalogo e reader.
- Verifica visiva desktop del reader eseguita online per tutte le cinque lezioni. Provati lo slider di equivalenza, il glossario con ritorno allo stato precedente, il completamento che sblocca la navigazione, i cinque passaggi della lavagna espressioni, la divisione periodica 1/6 e l’arrotondamento di 9,995 a 10,00. Nessun overflow della pagina nel viewport desktop osservato. La verifica su un dispositivo mobile reale resta da fare.


## Revisione del 22 ottobre 2026 — invariantiva, equivalenza e copilota

La sezione `frazioni` della prima lezione segue l’ordine indicato dal docente: proprietà invariantiva come proprietà fondamentale; costruzione delle frazioni equivalenti; classe di equivalenza e unicità del numero razionale rappresentato; riduzione ai minimi termini dividendo entrambi i termini per il loro M.C.D.; banco del copilota per allenarsi.

Sette passaggi distribuiti in cinque card. Il copilota compare una sola volta, nella card conclusiva di questa sezione, con un banco a tutta larghezza e numeratore/denominatore modificabili. Esempio iniziale: 18/24; trasformazioni manuali mediante divisori comuni, riduzione tramite M.C.D., cronologia e annulla/ripristina. Il pannello di inserimento è aperto nel banco largo. La guida assistita resta lo sviluppo successivo del copilota, come concordato.

Il checkpoint ha quattro domande: invariantiva, equivalenza, una sola classe/un solo numero, frazione equivalente ridotta ai minimi termini. Il recap include ora esplicitamente la classe di equivalenza e la riduzione tramite M.C.D. Aggiunte le keyword per M.C.D. e numeri primi tra loro; le formule nel banco e nei suoi messaggi sono frazioni verticali.

Verifiche: sintassi dei moduli modificati; riduzione 18/24 → 9/12 → 3/4 e riduzione diretta mediante M.C.D.; annulla/ripristina; 0/12 → 0/1; rifiuto di divisore non comune e denominatore nullo; keyword risolte. Le altre quattro lezioni sui razionali conservano gli stessi contenuti.
