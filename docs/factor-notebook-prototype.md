# Quaderno di fattori primi, M.C.D. e m.c.m. — primo prototipo

Pagina condivisa: `laboratorio-fattori.html?operazione=mcd` oppure `?operazione=mcm`. I due materiali sono collegati ai rispettivi laboratori del catalogo. La teoria esistente resta separata.

`assets/factor-notebook.js` espone `GatitoFactorNotebook.mount(parent, { mode, storageKey, onModeChange })`, con ritorno `{model, setMode, dispose}`. L'HTML della pagina e il controller `assets/factor-lab.js` sono separati dal componente per consentire un futuro richiamo nei quaderni delle frazioni. Tale richiamo non è ancora implementato.

Il quaderno inizia vuoto. L'inserimento crea numeri positivi, fino a 12 cifre e a un massimo di 12 numeri per pagina. Lo zero non è scomponibile e viene respinto con spiegazione; 1 è accettato come numero senza fattori primi. Ogni divisore deve essere primo e dividere esattamente il numero corrente; il quoziente viene scritto dallo studente, mai completato automaticamente. Sono accettati i divisori primi anche fuori dall'ordine crescente. La scrittura diretta usa basi ed esponenti strutturati, senza eval. Le basi devono essere prime e il prodotto deve coincidere con il numero iniziale.

Con almeno due scomposizioni complete lo studente sceglie quali numeri utilizzare, quali fattori primi includere e con quali esponenti; solo dopo la verifica scrive il risultato numerico. Il calcolo di controllo usa interi esatti BigInt. Non sono presenti tavole pitagoriche, liste di primi o scomposizioni risolte automaticamente.

Ogni apertura del laboratorio parte con un quaderno vuoto. Non viene usata alcuna persistenza: anche il passaggio tra M.C.D. e m.c.m., la ricarica e il ritorno tramite la cronologia ricreano il quaderno. La pagina rimuove il vecchio salvataggio del primo prototipo, se presente. L'annullamento è disponibile soltanto mentre si lavora nella pagina corrente. Anche i futuri incorporamenti nelle lezioni devono partire senza storageKey.

Da valutare con l'autore: interazione dei token, scelta fattori/esponenti, supporti propedeutici, selezione dei numeri e richiamo dagli esercizi successivi. Questa è una prima versione da provare.
