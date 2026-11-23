/* Introduzione condivisa: terza media e biennio. */
(() => {
 'use strict';
 const m=s=>`<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>${s}</mtext></math>`;
 const displayMath=content=>`<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">${content}</math>`;
 const frac=(a,b,tail='')=>`<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mtext>${a}</mtext></mrow><mrow><mtext>${b}</mtext></mrow></mfrac>${tail}</math>`;
 const formula=s=>`<div class="cl-formula">${m(s)}</div>`;
 const card=(title,...html)=>({title,stepMode:'replace',steps:html.map(html=>({html}))});
 const question=(question,options,answer,feedback)=>({question,options,answer,feedback});
 const quiz=(...args)=>({questions:[question(...args)]});
 const gameState={intro:{beat:-1},prediction:{stage:0},digits:{stage:0,answer:'',choices:''}};
 const art='assets/images/reader/sibilla-festival/';
 const panels=new WeakMap();
 const comicTitle='Ora vi leggerò nella mente…';
 const comicText='<p>Alla festa dell’Accademia c’è una bancarella insolita. Sibilla sostiene di saper leggere nel pensiero, e Red e Bjorne vogliono metterla alla prova.</p><p>La sfida è anche per te. Tieni pronto un foglio per i conti.</p>';
 const isOpeningComic=kind=>kind==='cl-intro'||kind==='cl-prediction';
 const festivalView=`<div class="cl-scene cl-festival">
  <div role="img" aria-label="Red e Bjorne camminano lungo il viale verso il portone in fondo. Più avanti, sulla destra, Sibilla li chiama accanto all’Antro di Sibilla.">
   <img class="cl-backdrop" src="${art}viale-antro-sibilla.webp" alt="">
   <img class="cl-sibilla" src="${art}sibilla.webp" alt="">
   <div class="cl-walker cl-red">
    <img class="cl-step-side" src="${art}red-verso-portone.webp" alt="">
    <img class="cl-step-rear" src="${art}red-passo-viale.webp" alt="">
   </div>
   <div class="cl-walker cl-bjorne">
    <img class="cl-step-side" src="${art}bjorne-verso-portone.webp" alt="">
    <img class="cl-step-rear" src="${art}bjorne-passo-viale.webp" alt="">
   </div>
  </div>
 </div>`;
 const boothView=`<div class="cl-scene cl-booth">
  <div role="img" aria-label="Sibilla siede dietro il bancone e tende le zampe intorno alla sfera di cristallo.">
   <img class="cl-backdrop" src="${art}banco-fumetto.webp" alt="">
   <div class="cl-booth-character">
    <img class="cl-sibilla cl-sibilla-calm" src="${art}sibilla-seduta.webp" alt="">
    <img class="cl-sibilla cl-sibilla-gesture cl-sibilla-first" src="${art}sibilla-concentrazione.webp" alt="">
    <img class="cl-sibilla cl-sibilla-gesture cl-sibilla-second" src="${art}sibilla-gesto.webp" alt="">
   </div>
   <img class="cl-orb" src="${art}sfera.webp" alt="">
  </div>
  <output class="cl-orb-result" aria-live="polite" aria-atomic="true"></output>
 </div>`;
 const digitsView=`<div class="cl-scene cl-booth cl-digits">
  <div role="img" aria-label="Sibilla guarda verso di te. La sfera di cristallo è appoggiata a sinistra sul bancone.">
   <img class="cl-backdrop" src="${art}banco-fumetto.webp" alt="">
   <div class="cl-booth-character">
    <img class="cl-digits-listen" src="${art}sibilla-ascolta.png" alt="">
    <img class="cl-digits-talk" src="${art}sibilla-parla.png" alt="">
    <img class="cl-digits-reveal" src="${art}sibilla-rivela.png" alt="">
   </div>
   <img class="cl-orb" src="${art}sfera.webp" alt="">
  </div>
 </div>`;
 const introLines=[
  ['sibilla','Sibilla','Fatevi avanti! Io sono Sibilla, la gattina indovina!'],
  ['sibilla','Sibilla','Avvicinatevi, avvicinatevi!'],
  ['sibilla','Sibilla','Vi mostrerò i miei incredibili poteri… Ora vi leggerò nella mente!'],
  ['red','Red','Ehi, che dici? Lo vogliamo fare?'],
  ['bjorne','Bjorne','Meow! Va bene.']
 ];
 const predictionLines=[
  'Pensa a un numero intero da 1 a 10 e tienilo segreto.',
  'Raddoppia il numero che hai pensato.',
  'Aggiungi 10 al risultato.',
  'Dividi il risultato per 2.',
  'Sottrai il numero che avevi pensato all’inizio.',
  'Bene!',
  'Il risultato che stai pensando è…'
 ];
 const digitsLines=[
  'Scegli due cifre da 1 a 9. Anche uguali!',
  'Decidi quale viene prima. Tienile segrete!',
  'Raddoppia la prima cifra.',
  'Aggiungi 5 al risultato.',
  'Moltiplica il risultato per 5.',
  'Ora aggiungi la seconda cifra.',
  'Dimmi solo il totale. Al resto penso io!'
 ];
 window.READER_LESSONS['calcolo-letterale-introduzione']={
 title:'Introduzione al calcolo letterale',subtitle:'Matematica · Algebra · Calcolo letterale',version:1,nextLesson:false,
 sections:[
 {id:'sfide',title:'Le sfide di Sibilla',cards:[
 {...card(comicTitle,comicText),board:'cl-intro'},
 {...card('Prima sfida · La sfera di Sibilla',comicText),board:'cl-prediction'},
 {...card('Due numeri, proprio in quell’ordine','Sibilla sorride. Stavolta scommette di indovinare due numeri, nell’ordine in cui li hai pensati.'),board:'cl-digits'}
 ]},
 {id:'lettere',title:'Descrivere il calcolo con le lettere',cards:[
 {title:'Il calcolo letterale',stepMode:'replace',visualLayout:'fixed-illustration',steps:[{html:'Per capire come ha fatto Sibilla, ci serve uno strumento dell’algebra: il <button class="rm-keyword" data-term="calcolo-letterale" type="button">calcolo letterale</button>. Nelle espressioni possiamo usare lettere accanto ai numeri. Chiamiamo <button class="rm-keyword" data-term="indeterminata" type="button">indeterminata</button> una lettera che rappresenta una quantità senza fissarne il valore.<br><br>Se '+m('n')+' indica il numero di quaderni in uno zaino, '+m('n + 1')+' indica quanti quaderni ci saranno dopo averne aggiunto uno.<br><br>Scrivere con le lettere ci permette di descrivere un procedimento in generale e di usare le proprietà delle operazioni per semplificarlo anche senza conoscere il valore dell’indeterminata. Quando assegniamo un valore alla lettera, possiamo calcolare il risultato seguendo l’ordine delle operazioni.'},
  {panelTitle:'Quali valori può assumere una lettera?',html:'Per usare un’espressione dobbiamo sapere <strong>quali valori sono ammessi</strong> per le sue lettere. Dipende da ciò che rappresentano.<br><br>Il numero '+m('n')+' di quaderni nello zaino può essere 0, 1, 2 e così via. Se una lettera rappresenta invece una temperatura in gradi Celsius, può assumere anche valori negativi, come −3, o con la virgola, come 18,5.'}],
 illustration:{src:art+'sibilla-reazione-festival.webp',alt:'Al festival dell’Accademia, Red e Bjorne guardano Sibilla stupiti davanti al bancone della sua bancarella.',width:1000,height:750}}
 ],quiz:{questions:[
 question('Che cosa indica la lettera n nell’esempio dei quaderni?',['Il quaderno che aggiungiamo','Un numero già fissato a 1','Il numero di quaderni all’inizio, lasciato da scegliere'],2,'La lettera n rappresenta il numero di quaderni prima di aggiungerne uno. Non abbiamo ancora fissato quel numero.'),
 {...question('Un sacchetto contiene p biglie. Ne aggiungi 3. Quante biglie ci sono in tutto se p vale 4?',['7','4','3'],0,'Sostituisci il numero iniziale di biglie e aggiungi le tre nuove.'),
  questionMath:displayMath('<mi>p</mi><mo>+</mo><mn>3</mn>'),
  feedbackMath:displayMath('<mn>4</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>7</mn>')},
 question('Una lettera indica il numero di biglietti venduti. Quale valore è ammesso?',['−2','0','1,5'],1,'Se non è stato venduto alcun biglietto, il numero è 0. I biglietti si contano con numeri interi non negativi.')
 ]}},
 {id:'scritture',title:'Espressioni e convenzioni di scrittura',cards:[
 card('Espressioni algebriche letterali',
  '<span class="cl-wide-text">Un’<strong>espressione algebrica letterale</strong> indica operazioni aritmetiche da eseguire su numeri e lettere. Le parentesi e le priorità delle operazioni stabiliscono l’ordine dei calcoli.</span>'+
  displayMath('<mn>2</mn><mo>·</mo><mi>x</mi><mo>+</mo><mn>10</mn>')+
  displayMath('<mn>2</mn><mo>·</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>10</mn><mo>)</mo>')+
  'La prima scrittura ci dice di raddoppiare la quantità '+m('x')+' e poi aggiungere 10.<br>'+
  'La seconda ci dice di aggiungere prima 10 alla quantità '+m('x')+' e poi raddoppiare il risultato.',
  '<span class="cl-wide-text">Per rendere la scrittura più compatta, spesso omettiamo il punto di moltiplicazione. Ciascuna riga mostra lo stesso prodotto in due scritture.</span>'+
  displayMath('<mn>2</mn><mo>·</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi>')+
  displayMath('<mi>a</mi><mo>·</mo><mi>b</mi><mo>=</mo><mi>a</mi><mi>b</mi>')+
  displayMath('<mn>3</mn><mo>·</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo>')+
  'Anche due gruppi tra parentesi affiancati indicano un prodotto.'+
  displayMath('<mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo><mo>(</mo><mi>c</mi><mo>+</mo><mi>d</mi><mo>)</mo>')+
  'Quando omettere il punto creerebbe ambiguità, lo scriviamo. Per esempio, 2 · 3 indica il prodotto di 2 e 3, mentre 23 è il numero ventitré.'),
 {...card('Espressioni razionali',
  '<span class="cl-wide-text">Le espressioni costruite con addizioni, sottrazioni, moltiplicazioni, divisioni e potenze con esponente intero si chiamano <strong>espressioni razionali</strong>. Le operazioni devono avere significato per i valori che assegniamo alle indeterminate.</span>',
  'Sono <strong>intere</strong> quando non compaiono lettere nei denominatori né potenze di lettere con esponente negativo. Ecco due esempi.'+
  displayMath('<mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn>')+
  displayMath('<mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn>'),
  'Sono <strong>frazionarie</strong> quando compaiono lettere nei denominatori, anche attraverso potenze con esponente negativo. Per esempio, una potenza come quella qui sotto indica il reciproco di x.'+
  displayMath('<msup><mi>x</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mspace width="1em"/><mtext>per</mtext><mspace width=".3em"/><mi>x</mi><mo>≠</mo><mn>0</mn>')+
  'Anche queste scritture sono frazionarie.'+
  displayMath('<mfrac><mn>2</mn><mi>x</mi></mfrac><mspace width="2em"/><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></mfrac>')+
  '<strong>Attenzione:</strong> l’espressione x diviso 2 è razionale <strong>intera</strong>. Al denominatore c’è il numero 2. Dividere il valore di x per 2 equivale a moltiplicarlo per un mezzo, cioè a dimezzare la quantità rappresentata da x.'+
  displayMath('<mfrac><mi>x</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>x</mi>')),
  stepMode:'intro-fixed'}
 ],quiz:{questions:[
 {...question('Quale scrittura dice di aggiungere 4 a x e poi triplicare il risultato?',['3 · x + 4','3 · (x + 4)','4 · (x + 3)'],1,'Le parentesi fanno eseguire prima la somma di x e 4. Poi si moltiplica il risultato per 3.'),
  optionMath:[
   displayMath('<mn>3</mn><mo>·</mo><mi>x</mi><mo>+</mo><mn>4</mn>'),
   displayMath('<mn>3</mn><mo>·</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo>'),
   displayMath('<mn>4</mn><mo>·</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo>')]},
 {...question('In quale prodotto puoi togliere il punto di moltiplicazione senza cambiare il significato?',['2 · 5','3 · 4','5 · a'],2,'Il punto si può omettere tra il numero 5 e la lettera a. Tra due numeri, invece, serve a distinguere il prodotto da un numero a più cifre.'),
  optionMath:[
   displayMath('<mn>2</mn><mo>·</mo><mn>5</mn>'),
   displayMath('<mn>3</mn><mo>·</mo><mn>4</mn>'),
   displayMath('<mn>5</mn><mo>·</mo><mi>a</mi>')],
  feedbackMath:displayMath('<mn>5</mn><mo>·</mo><mi>a</mi><mo>=</mo><mn>5</mn><mi>a</mi>')},
 {...question('Quale espressione è razionale frazionaria?',['2/x','x/2','2x + 1'],0,'Nella prima frazione la lettera compare al denominatore. Nella seconda il denominatore è il numero 2.'),
  optionMath:[
   displayMath('<mfrac><mn>2</mn><mi>x</mi></mfrac>'),
   displayMath('<mfrac><mi>x</mi><mn>2</mn></mfrac>'),
   displayMath('<mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn>')]}
 ]}},
 {id:'valutare',title:'Valutazione di un’espressione letterale e condizioni di esistenza',cards:[
 card('Come si valuta un’espressione letterale',
  '<span class="cl-wide-text">Per <button class="rm-keyword" data-term="valutare-espressione-letterale" type="button">valutare un’espressione letterale</button>, assegniamo un valore a ogni lettera. Sostituiamo tutte le lettere con i valori assegnati e svolgiamo le operazioni nell’ordine previsto.</span><br><br>'+
  'Prendiamo l’espressione qui sotto.'+
  displayMath('<mn>2</mn><mi>x</mi><mo>+</mo><mn>10</mn>')+
  'Valutare l’espressione per '+m('x = 7')+' significa assegnare a '+m('x')+' il valore 7. Sostituiamo quindi '+m('x')+' con 7 ed eseguiamo i calcoli:'+
  displayMath('<mn>2</mn><mo>·</mo><mn>7</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>14</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>24</mn>')+
  'Se invece valutiamo la stessa espressione per '+m('x = −2')+', sostituiamo '+m('x')+' con −2:'+
  displayMath('<mn>2</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>2</mn><mo>)</mo><mo>+</mo><mn>10</mn><mo>=</mo><mo>−</mo><mn>4</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>6</mn>'),
  '<span class="cl-wide-text">Ogni volta che ricompare la stessa lettera, sostituiamo lo stesso valore. Se il valore è negativo, lo racchiudiamo tra parentesi, soprattutto quando la lettera è la base di una potenza.</span><br><br>'+
  'Per esempio, con '+m('x = −3')+' otteniamo:'+
  displayMath('<msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>=</mo><msup><mrow><mo>(</mo><mo>−</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo>(</mo><mo>−</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>9</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>6</mn>')),
 card('Come si trovano le condizioni di esistenza',
  '<span class="cl-wide-text">Prima di valutare un’espressione, controlliamo per quali valori tutte le sue operazioni hanno significato. Le restrizioni che troviamo si chiamano <strong>condizioni di esistenza</strong>.</span><br><br>'+
  'Una divisione per zero è impossibile. In un’espressione razionale frazionaria, scriviamo quindi che ogni denominatore deve essere diverso da zero. Se c’è una potenza con esponente negativo, possiamo prima riscriverla come frazione e controllare il denominatore.',
  '<span class="cl-wide-text">Vediamo come si fa con questa espressione.</span>'+
  displayMath('<mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></mfrac>')+
  'Il denominatore deve essere diverso da zero.'+
  displayMath('<mi>x</mi><mo>−</mo><mn>3</mn><mo>≠</mo><mn>0</mn>')+
  'Il denominatore si annulla quando '+m('x = 3')+'. Escludiamo quindi quel valore. La condizione di esistenza è:'+
  displayMath('<mi>x</mi><mo>≠</mo><mn>3</mn>')+
  'Con '+m('x = 4')+' il denominatore vale 1 e possiamo fare il calcolo:'+
  displayMath('<mfrac><mrow><mn>4</mn><mo>+</mo><mn>1</mn></mrow><mrow><mn>4</mn><mo>−</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>1</mn></mfrac><mo>=</mo><mn>5</mn>')),
 card('Condizioni di esistenza e vincolo del contesto',
  '<span class="cl-wide-text">Supponiamo di sistemare 12 libri e di avere '+m('n')+' ripiani. Per sapere quanti libri ci sono in media su ogni ripiano, dividiamo 12 per il numero di ripiani.</span>'+
  displayMath('<mfrac><mn>12</mn><mi>n</mi></mfrac>')+
  '<strong>Vincolo del contesto.</strong> La lettera '+m('n')+' rappresenta il numero di ripiani. Un conteggio può valere 0, 1, 2 e così via. Quindi '+m('n')+' deve essere un numero intero non negativo.<br><br>'+
  '<strong>Condizione di esistenza.</strong> Il numero dei ripiani è anche il divisore. Poiché non possiamo dividere per zero, dobbiamo escludere '+m('n = 0')+'.'+
  displayMath('<mi>n</mi><mo>≠</mo><mn>0</mn>')+
  'Per rispettare entrambi i vincoli scegliamo quindi '+m('n = 1, 2, 3, …')+'. Per esempio, con 3 ripiani otteniamo 12 ÷ 3 = 4 libri per ripiano.')
 ],quiz:{questions:[
 {...question('Quanto vale questa espressione per il valore assegnato?',['−6','6','2'],2,'Sostituisci −2 in entrambe le occorrenze di x, usando le parentesi quando elevi il numero negativo al quadrato.'),
  questionMath:displayMath('<msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mspace width="1em"/><mtext>per</mtext><mspace width=".4em"/><mi>x</mi><mo>=</mo><mo>−</mo><mn>2</mn>'),
  feedbackMath:displayMath('<msup><mrow><mo>(</mo><mo>−</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo>(</mo><mo>−</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>2</mn>')},
 {...question('Quale valore non può essere assegnato a x in questa espressione?',['−1','3','0'],1,'Se x vale 3, il denominatore è zero. Il numeratore può invece valere zero.'),
  questionMath:displayMath('<mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></mfrac>')},
 {...question('Quanto vale questa espressione per i valori assegnati?',['10','14','5'],0,'Sostituisci 4 al posto di a e −1 al posto di b.'),
  questionMath:displayMath('<mn>3</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi>')+displayMath('<mtext>per</mtext><mspace width=".4em"/><mi>a</mi><mo>=</mo><mn>4</mn><mspace width="1em"/><mtext>e</mtext><mspace width=".4em"/><mi>b</mi><mo>=</mo><mo>−</mo><mn>1</mn>'),
  feedbackMath:displayMath('<mn>3</mn><mo>·</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>10</mn>')}
 ]}},
 {id:'segreti',title:'Sveliamo i due trucchi',cards:[
 {title:'Il primo trucco',stepMode:'replace',visualLayout:'fixed-illustration',steps:[
  {html:'<span class="cl-wide-text">Chiamiamo '+m('x')+' il numero pensato.</span> Raddoppiandolo otteniamo '+m('2x')+'. Aggiungendo 10 arriviamo a '+m('2x + 10')+'.<br><br>Sibilla chiede poi di dividere tutto per 2 e di sottrarre il numero di partenza. Il procedimento completo si scrive così:'+frac('2x + 10','2','<mo>−</mo><mi>x</mi>')+'La '+m('x')+' alla fine indica la stessa scelta iniziale.'},
  {html:'<span class="cl-wide-text">Dividiamo per 2 entrambi gli addendi del numeratore.</span> Il doppio diventa '+m('x')+' e 10 diventa 5. L’espressione diventa:'+formula('x + 5 − x = 5')+'Il numero di partenza si annulla: resta sempre 5. <strong>Il trucco funziona con qualunque numero reale.</strong> Sibilla ti ha chiesto di sceglierne uno da 1 a 10 per rendere i conti più semplici.'},
  {panelTitle:'Perché riappaiono le due cifre',html:'<span class="cl-wide-text">Nel secondo gioco chiamiamo '+m('a')+' la prima scelta e '+m('b')+' la seconda.</span> Il risultato comunicato è:'+formula('5(2a + 5) + b = 10a + 25 + b')+'Sibilla sottrae 25 e ottiene '+m('10a + b')+'. Poiché '+m('a')+' e '+m('b')+' sono cifre da 1 a 9, '+m('a')+' occupa il posto delle decine e '+m('b')+' quello delle unità.<br><br>Per esempio, 72 nasconde '+m('72 − 25 = 47')+': prima 4, poi 7. Invertendo le scelte cambia il risultato: l’ordine è conservato.'}],
 illustration:{src:art+'sibilla-taccuino-v3.webp',alt:'Sibilla guarda il taccuino aperto mentre scrive con la matita.',speech:'E se inventassi dei giochi matematici per far credere di saper leggere nel pensiero?',width:760,height:760}}
 ]},
 {id:'usi',title:'La lezione in pillole',cards:[
 card('Il calcolo letterale in breve',
  '<span class="cl-wide-text"><strong>Lettere e operazioni.</strong> Un’indeterminata rappresenta una quantità di cui lasciamo libero il valore. Con numeri, lettere e parentesi possiamo scrivere un procedimento valido per più valori.</span><br><br>'+
  '<strong>Espressioni razionali.</strong> Le espressioni razionali sono intere quando le lettere non compaiono nei denominatori o come basi di potenze con esponente negativo. Sono frazionarie quando una lettera compare al denominatore, anche in scritture come x⁻¹, che indica 1/x.<br><br>'+
  '<strong>Valori ammessi.</strong> Teniamo conto di ciò che le lettere rappresentano e delle condizioni di esistenza. Per esempio, un denominatore deve essere diverso da zero.<br><br>'+
  '<strong>Valutare un’espressione.</strong> Sostituiamo ogni lettera con il valore assegnato, lo stesso ogni volta che compare, e svolgiamo i calcoli rispettando l’ordine delle operazioni.'+
  displayMath('<mn>2</mn><mi>x</mi><mo>+</mo><mn>10</mn><mspace width="1em"/><mtext>per</mtext><mspace width=".3em"/><mi>x</mi><mo>=</mo><mn>7</mn><mo>:</mo><mspace width=".5em"/><mn>2</mn><mo>·</mo><mn>7</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>24</mn>'))
 ],quiz:{title:'Verifica finale',questions:[
 {...question('In ogni scatola ci sono n matite. Metti insieme le matite di tre scatole e ne togli due. Quale espressione descrive il procedimento?',['3(n − 2)','3n − 2','n + 3 − 2'],1,'Moltiplichiamo per 3 le matite di una scatola e togliamo due matite dal totale.'),
  optionMath:[
   displayMath('<mn>3</mn><mo>(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo>)</mo>'),
   displayMath('<mn>3</mn><mi>n</mi><mo>−</mo><mn>2</mn>'),
   displayMath('<mi>n</mi><mo>+</mo><mn>3</mn><mo>−</mo><mn>2</mn>')]},
 {...question('Quanto vale questa espressione per il valore assegnato?',['−14','−6','6'],0,'Calcoliamo prima la differenza tra parentesi e il quadrato, poi raddoppiamo la differenza e sottraiamo il quadrato.'),
  questionMath:displayMath('<mn>2</mn><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>)</mo><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup>')+displayMath('<mtext>per</mtext><mspace width=".4em"/><mi>x</mi><mo>=</mo><mo>−</mo><mn>2</mn>'),
  feedbackMath:displayMath('<mn>2</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>5</mn><mo>)</mo><mo>−</mo><mn>4</mn><mo>=</mo><mo>−</mo><mn>14</mn>')},
 {...question('Quale tra queste espressioni razionali è intera?',['3/(x + 1)','2 + x⁻¹','(x² + 1)/3'],2,'Nell’ultima scrittura il denominatore è il numero 3. Nella prima la lettera è al denominatore e nella seconda compare con esponente negativo.'),
  optionMath:[
   displayMath('<mfrac><mn>3</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac>'),
   displayMath('<mn>2</mn><mo>+</mo><msup><mi>x</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup>'),
   displayMath('<mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow><mn>3</mn></mfrac>')]},
 {...question('Per quali valori di x possiamo valutare questa espressione?',['Tutti tranne −2 e 1','Tutti tranne 2 e −1','Tutti tranne 2'],1,'Entrambi i denominatori devono essere diversi da zero. Escludiamo 2 per il primo denominatore e −1 per il secondo.'),
  questionMath:displayMath('<mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac>')},
 {...question('Un gruppo di n persone deve dividere una spesa di 24 euro. Una persona si ritira e la spesa viene divisa solo tra chi resta. Quale valore di n permette di calcolare la quota a persona?',['1','2,5','5'],2,'Con 5 persone all’inizio, ne restano 4 e ciascuna paga 6 euro. Con una sola persona all’inizio, il denominatore sarebbe zero. Il numero di persone deve essere intero.'),
  questionMath:displayMath('<mfrac><mn>24</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac>')},
 {...question('Quanto vale questa frazione per i valori assegnati?',['0','−4/3','L’espressione non esiste'],0,'Il denominatore vale −3 e il numeratore vale 0. Il denominatore è diverso da zero, quindi possiamo fare la divisione.'),
  questionMath:displayMath('<mfrac><mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi></mrow><mrow><mi>a</mi><mo>−</mo><mi>b</mi></mrow></mfrac>')+displayMath('<mtext>per</mtext><mspace width=".4em"/><mi>a</mi><mo>=</mo><mo>−</mo><mn>2</mn><mspace width="1em"/><mtext>e</mtext><mspace width=".4em"/><mi>b</mi><mo>=</mo><mn>1</mn>'),
  optionMath:[displayMath('<mn>0</mn>'),displayMath('<mo>−</mo><mfrac><mn>4</mn><mn>3</mn></mfrac>')],
  feedbackMath:displayMath('<mfrac><mn>0</mn><mrow><mo>−</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mn>0</mn>')}
 ]}}
 ]};
 function comicPanel(panel,view,direction){
  const {root,button}=panel;
  const template=document.createElement('template');
  template.innerHTML=view;
  const scene=template.content.firstElementChild;
  const previous=root.querySelector('.cl-scene');
  root.append(scene);
  const animations=[];
  function clearTransition(){
   animations.forEach(animation=>animation.cancel());
   previous?.remove();
  }
  if(previous&&direction&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&scene.animate){
   previous.inert=true;
   previous.setAttribute('aria-hidden','true');
   previous.classList.add('cl-scene-out');
   const options={duration:370,easing:'cubic-bezier(.25,.65,.3,1)'};
   animations.push(previous.animate([{transform:'translateX(0)'},{transform:`translateX(${-100*direction}%)`}],options));
   animations.push(scene.animate([{transform:`translateX(${100*direction}%)`},{transform:'translateX(0)'}],options));
   animations[1].finished.then(clearTransition,()=>{});
  }else previous?.remove();
  const balloon=document.createElement('p');
  balloon.className='cl-balloon';
  balloon.setAttribute('aria-live','polite');
  balloon.setAttribute('aria-atomic','true');
  scene.append(balloon);
  scene.classList.add('cl-tappable');
  scene.onclick=()=>{
   if(!button.hidden&&!button.disabled&&!window.getSelection()?.toString())button.click();
  };
  let previousLine,balloonEntrance;
  function say(speaker,name,line){
   balloon.dataset.speaker=speaker;
   const label=document.createElement('span');
   label.className='cl-speaker-name';
   label.textContent=name+' dice: ';
   balloon.replaceChildren(label,document.createTextNode(line));
   if(previousLine===line)return;
   previousLine=line;
   if(!scene.classList.contains('cl-booth')||!balloon.animate||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   balloonEntrance?.cancel();
   const transformOrigin='8% 80%';
   balloonEntrance=balloon.animate([
    {opacity:0,transform:'translate(-5px, 2px) scale(.88)',transformOrigin},
    {opacity:1,transform:'scale(1.025)',transformOrigin,offset:.66},
    {opacity:1,transform:'scale(1)',transformOrigin}
   ],{duration:280,easing:'ease-out'});
  }
  return {scene,balloon,button,say,clearTransition};
 }
 function mountIntro(panel,onNext,direction){
  const {scene,balloon,button,say,clearTransition}=comicPanel(panel,festivalView,direction);
  const state=gameState.intro;
  if(direction<0&&state.beat>=introLines.length)state.beat=introLines.length-1;
  let timer;
  function draw(){
   const line=introLines[state.beat];
   balloon.hidden=!line;
   if(line)say(...line);
   scene.classList.toggle('cl-approached',state.beat>=introLines.length);
   button.textContent=state.beat===-1?'Avvia il fumetto':state.beat===introLines.length-1?'Avviciniamoci':state.beat>=introLines.length?'Vai alla prima sfida':'Continua';
   button.hidden=state.beat>=introLines.length&&!onNext;
   button.disabled=!!timer;
  }
  panel.back=()=>{
   if(state.beat<0)return false;
   if(timer){clearTimeout(timer);timer=null;}
   state.beat--;
   draw();
   return true;
  };
  draw();
  button.onclick=()=>{
   if(state.beat>=introLines.length){onNext?.();return;}
   state.beat++;
   if(state.beat>=introLines.length&&onNext){
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer=setTimeout(onNext,reduced?0:2450);
   }
   draw();
  };
  return ()=>{clearTimeout(timer);clearTransition();};
 }
 function mountPrediction(panel,onNext,direction){
  const {scene,button,say,clearTransition}=comicPanel(panel,boothView,direction);
  const state=gameState.prediction;
  const result=scene.querySelector('output');
  const tranceStage=predictionLines.length-1;
  const revealStage=predictionLines.length;
  let timer;
  function draw(){
   const revealed=state.stage===revealStage;
   const trance=state.stage===tranceStage;
   say('sibilla','Sibilla',predictionLines[Math.min(state.stage,tranceStage)]);
   scene.classList.toggle('cl-trance',trance);
   scene.classList.toggle('cl-revealed',revealed);
   result.textContent=revealed?'5':'';
   if(revealed)result.setAttribute('aria-label','La sfera mostra 5');
   else result.removeAttribute('aria-label');
   button.hidden=revealed&&!onNext;
   button.disabled=trance;
   button.textContent=revealed?'Vai alla seconda sfida':state.stage>=tranceStage-1?'Continua':'Fatto';
   if(trance){
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer=setTimeout(()=>{
     state.stage=revealStage;
     draw();
    },reduced?100:1950);
   }
  }
  panel.back=()=>{
   if(!state.stage)return false;
   clearTimeout(timer);
   state.stage=Math.min(state.stage-1,tranceStage-1);
   draw();
   return true;
  };
  draw();
  button.onclick=()=>{
   if(state.stage===revealStage){onNext?.();return;}
   state.stage++;
   draw();
  };
  return ()=>{clearTimeout(timer);clearTransition();};
 }
 function mountDigits(panel,onNext,direction){
  const {scene,button,say,clearTransition}=comicPanel(panel,digitsView,direction);
  const state=gameState.digits;
  const story=panel.text?.querySelector('.rm-reader-step > p');
  const openingStory=story?.textContent;
  const reportStage=digitsLines.length-1;
  const form=document.createElement('form');
  form.className='cl-controls cl-digits-form';
  form.innerHTML=`
   <label>Il tuo risultato finale è <input type="number" inputmode="numeric" step="1" required></label>
   <button type="submit" class="rm-btn" hidden>Sibilla ti rivelerà i due numeri</button>`;
  button.after(form);
  const input=form.querySelector('input');
  const submit=form.querySelector('button');
  const updateSubmit=()=>{submit.hidden=!input.validity.valid;};
  function draw(message=state.choices?`Hai pensato a ${state.choices[0]} e poi a ${state.choices[1]}!`:digitsLines[state.stage]){
   say('sibilla','Sibilla',message);
   const revealed=!!state.choices;
   const storyLine=revealed?'Incredibile! Ma come ha fatto Sibilla? Sa davvero leggerti nel pensiero o c’è un trucco?':openingStory;
   if(story&&story.textContent!==storyLine)story.textContent=storyLine;
   const reporting=state.stage===reportStage&&!revealed;
   button.hidden=reporting||(revealed&&!onNext);
   button.disabled=false;
   button.textContent=revealed?'Continua':'Fatto';
   form.hidden=!reporting;
   scene.classList.toggle('cl-tappable',!button.hidden);
   scene.dataset.pose=revealed?'reveal':state.stage%2===0?'talk':'listen';
  }
  input.value=state.answer;
  updateSubmit();
  input.oninput=()=>{
   state.answer=input.value;
   updateSubmit();
   if(input.hasAttribute('aria-invalid')){
    input.removeAttribute('aria-invalid');
    draw();
   }
  };
  form.onsubmit=event=>{
   event.preventDefault();
   const total=input.valueAsNumber,code=total-25;
   const first=Math.floor(code/10),second=code%10;
   if(!Number.isInteger(total)||first<1||first>9||second<1||second>9){
    input.setAttribute('aria-invalid','true');
    draw('Quel totale non torna. Ricontrolla i conti!');
    return;
   }
   state.choices=`${first}${second}`;
   draw();
   (onNext?button:scene).focus({preventScroll:true});
  };
  panel.back=()=>{
   if(!state.stage)return false;
   if(state.choices)state.choices='';
   else state.stage--;
   input.removeAttribute('aria-invalid');
   draw();
   if(!form.hidden)input.focus({preventScroll:true});
   else button.focus({preventScroll:true});
   return true;
  };
  button.onclick=()=>{
   if(state.choices){onNext?.();return;}
   state.stage++;
   draw();
   if(!form.hidden)input.focus({preventScroll:true});
  };
  scene.tabIndex=-1;
  draw();
  return ()=>{form.remove();clearTransition();};
 }
 const mounts={'cl-intro':mountIntro,'cl-prediction':mountPrediction,'cl-digits':mountDigits};
 function switchScene(box,kind,onNext,direction=0){
  const panel=panels.get(box);
  if(!panel||!Object.hasOwn(mounts,kind))return false;
  panel.dispose?.();
  panel.dispose=mounts[kind](panel,onNext,direction);
  return true;
 }
 window.GatitoLetterale={
  sharesPanel:(from,to)=>from!==to&&isOpeningComic(from)&&isOpeningComic(to),
  switchScene,
  navigate(box,direction){
   const panel=panels.get(box);
   if(!panel)return false;
   if(direction<0)return panel.back();
   if(!panel.button.hidden&&!panel.button.disabled)panel.button.click();
   return true;
  },
  mount(box,kind,onNext){
   const root=document.createElement('div');
   root.className='cl-game';
   box.append(root);
   box.classList.add('cl-comic-card','cl-intro-card');
   const copy=document.createElement('div');
   copy.className='cl-intro-copy';
   const heading=box.querySelector('.rm-card-title');
   if(heading&&isOpeningComic(kind))heading.textContent=comicTitle;
   const text=box.querySelector('.rm-card-text');
   if(heading)copy.append(heading);
   if(text)copy.append(text);
   box.prepend(copy);
   const controls=document.createElement('div');
   controls.className='cl-controls cl-comic-controls';
   const button=document.createElement('button');
   button.type='button';
   button.className='rm-btn';
   button.setAttribute('aria-keyshortcuts','ArrowRight ArrowLeft');
   controls.append(button);
   if(isOpeningComic(kind))box.classList.add('cl-opening-card');
   copy.append(controls);
   const panel={root,button,text};
   panels.set(box,panel);
   for(const filename of [
    'balloon-sibilla-viale.png?v=3','balloon-red.png?v=3','balloon-bjorne.png?v=3','balloon-sibilla-banco-curvo.png',
    'sibilla-concentrazione.webp','sibilla-gesto.webp'
   ]){
    const image=document.createElement('img');
    image.hidden=true;
    image.alt='';
    image.src=art+filename;
    root.append(image);
   }
   switchScene(box,kind,onNext);
   return ()=>{panel.dispose();panels.delete(box);};
  }
 };
})();
