# Reader: checkpoint e navigazione

L'indice delle sezioni è sempre selezionabile. La scelta di una sezione richiede il superamento dei checkpoint delle sezioni precedenti non facoltative. Il reader presenta i checkpoint mancanti in ordine e apre automaticamente la destinazione quando sono superati. Le parti indicate da optionalNext.trivia sono facoltative.

Continua consente di attraversare i passaggi testuali e le interazioni interne. Al checkpoint resta disabilitato fino al superamento della verifica. Mostra tutto è una vista di consultazione: non completa i checkpoint e non permette di aggirare la verifica quando si torna al percorso.

Ogni nuovo checkpoint a scelta multipla usa quiz.questions: almeno tre oggetti con question, quattro options distinte, answer (indice da 0 a 3), feedback e quattro feedbackByOption. Almeno un distrattore deve rappresentare un errore plausibile. Il feedback deve spiegare la relazione richiesta. Non usare domande generate automaticamente da frasi della lezione.

Le attività period-lab, velocity-units e velocity-graph restano nel percorso normale e sono seguite dalle domande concettuali. Nell'accesso rapido dal menu vengono usate le domande concettuali per verificare i prerequisiti.

Il completamento del checkpoint finale mostra Torna al menu e la prossima lezione dello stesso ramo del catalogo. Il collegamento successivo è attivo soltanto quando il materiale è pubblicato; per un segnaposto si mostra il titolo e In lavorazione con pulsante disabilitato. Quando la lezione viene pubblicata nel catalogo il collegamento si attiva senza cambiare il reader.

Le verifiche esistenti sono ampliate in reader-checkpoint-bank.js, caricato dopo i contenuti delle lezioni. Le spiegazioni delle lezioni restano inalterate. Per nuovi contenuti si può definire direttamente quiz.questions nel file della lezione.
