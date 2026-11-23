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
 question('Un sacchetto contiene p biglie. Ne aggiungi 3. Se p vale 4, quanto vale p + 3?',['7','4','3'],0,'Con p = 4, la scrittura p + 3 diventa 4 + 3, cioè 7.'),
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
 question('Quale scrittura dice di aggiungere 4 a x e poi triplicare il risultato?',['3 · x + 4','3 · (x + 4)','4 · (x + 3)'],1,'Le parentesi fanno eseguire prima x + 4. Poi si moltiplica il risultato per 3.'),
 question('In quale prodotto puoi togliere il punto di moltiplicazione senza cambiare il significato?',['2 · 5','3 · 4','5 · a'],2,'5 · a si può scrivere 5a. Tra due numeri il punto serve: per esempio, 2 · 5 vale 10 e 25 è il numero venticinque.'),
 question('Quale espressione è razionale frazionaria?',['2/x','x/2','2x + 1'],0,'In 2/x la lettera compare al denominatore. In x/2 il denominatore è il numero 2.')
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
 question('Quanto vale x² + x quando x = −2?',['−6','6','2'],2,'Sostituiamo −2 in entrambe le occorrenze: (−2)² + (−2) = 4 − 2 = 2.'),
 question('Quale valore non può essere assegnato a x in (x + 1)/(x − 3)?',['−1','3','0'],1,'Per x = 3 il denominatore vale zero. Il numeratore può invece valere zero.'),
 question('Quanto vale 3a + 2b quando a = 4 e b = −1?',['10','14','5'],0,'Sostituiamo 4 al posto di a e −1 al posto di b: 3 · 4 + 2 · (−1) = 12 − 2 = 10.')
 ]}},
 {id:'segreti',title:'Sveliamo i due trucchi',cards:[
 card('Il primo trucco','<span class="cl-wide-text">Chiamiamo '+m('x')+' il numero pensato.</span> Raddoppiandolo otteniamo '+m('2x')+'. Aggiungendo 10 arriviamo a '+m('2x + 10')+'.<br><br>Sibilla chiede poi di dividere tutto per 2 e di sottrarre il numero di partenza. Il procedimento completo si scrive così:'+frac('2x + 10','2','<mo>−</mo><mi>x</mi>')+'La '+m('x')+' alla fine indica la stessa scelta iniziale.',
 '<span class="cl-wide-text">Dividiamo per 2 entrambi gli addendi del numeratore.</span> Il doppio diventa '+m('x')+' e 10 diventa 5. L’espressione diventa:'+formula('x + 5 − x = 5')+'Il numero di partenza si annulla: resta sempre 5. <strong>Il trucco funziona con qualunque numero reale.</strong> Sibilla ti ha chiesto di sceglierne uno da 1 a 10 per rendere i conti più semplici.'),
 card('Perché riappaiono le due cifre','<span class="cl-wide-text">Nel secondo gioco chiamiamo '+m('a')+' la prima scelta e '+m('b')+' la seconda.</span> Il risultato comunicato è:'+formula('5(2a + 5) + b = 10a + 25 + b')+'Sibilla sottrae 25 e ottiene '+m('10a + b')+'. Poiché '+m('a')+' e '+m('b')+' sono cifre da 1 a 9, '+m('a')+' occupa il posto delle decine e '+m('b')+' quello delle unità.<br><br>Per esempio, 72 nasconde '+m('72 − 25 = 47')+': prima 4, poi 7. Invertendo le scelte cambia il risultato: l’ordine è conservato.')
 ]},
 {id:'usi',title:'Semplificare e cercare valori',cards:[
 card('Uno schema più semplice, gli stessi risultati','Il calcolo letterale permette di cercare <strong>espressioni equivalenti</strong>: scritture che restituiscono gli stessi valori per tutte le assegnazioni ammesse, conservando le condizioni iniziali.<br><br>Nel primo gioco un lungo procedimento si riduce al numero 5. Una trasformazione può richiedere meno operazioni o rendere più evidente il significato del calcolo. Non tutte le riscritture accorciano il procedimento: scegliamo quella utile alla domanda.'),
 card('Una domanda concreta: quanto costa il noleggio?','Immagina un noleggio biciclette con una quota iniziale di 4 euro e un costo di 3 euro per ogni ora intera. Per '+m('n')+' ore, la spesa in euro è:'+formula('4 + 3n')+'<strong>Quanto spenderò per due ore?</strong> Assegniamo '+m('n = 2')+' e valutiamo: '+m('4 + 3 · 2 = 10')+' euro.',
 '<strong>Per quante ore la spesa sarà di 13 euro?</strong> Questa volta il risultato è assegnato e il numero di ore è da cercare:'+formula('4 + 3n = 13')+'È un’<strong>equazione</strong>: la lettera assume il ruolo di incognita. Il valore '+m('n = 3')+' soddisfa l’uguaglianza, perché '+m('4 + 3 · 3 = 13')+'.<br><br>Valutare significa calcolare per valori assegnati; risolvere significa cercare i valori che rendono vera una condizione. Il calcolo letterale ci aiuterà a trasformare le espressioni e le equazioni rispettandone il significato.'),
 card('Dalla sorpresa agli strumenti','Nel primo gioco le operazioni cancellano la scelta iniziale. Il secondo la conserva in una scrittura che sappiamo interpretare.<br><br>Le lettere permettono di vedere queste strutture e di riutilizzarle. Nella prossima unità inizieremo dai <strong>monomi</strong>, per costruire e trasformare espressioni sempre più articolate.')
 ],quiz:quiz('Nel noleggio, la domanda «Per quante ore spenderò 13 euro?» richiede di…',['assegnare subito n = 13','cercare n che rende vera 4 + 3n = 13','calcolare 4 + 3 · 13'],1,'Conosciamo la spesa e cerchiamo il numero di ore che soddisfa la condizione.')}
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
