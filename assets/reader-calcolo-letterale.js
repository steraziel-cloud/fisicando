/* Introduzione condivisa: terza media e biennio. */
(() => {
 'use strict';
 const m=s=>`<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>${s}</mtext></math>`;
 const frac=(a,b)=>`<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mtext>${a}</mtext></mrow><mrow><mtext>${b}</mtext></mrow></mfrac></math>`;
 const formula=s=>`<div class="cl-formula">${m(s)}</div>`;
 const card=(title,...html)=>({title,stepMode:'replace',steps:html.map(html=>({html}))});
 const quiz=(question,options,answer,feedback)=>({questions:[{question,options,answer,feedback}]});
 const gameState={prediction:{stage:0,approached:false,open:false},digits:{answer:'',choices:''}};
 const art='assets/images/reader/sibilla-festival/';
 const cast='assets/images/morgana-classroom/';
 const festivalView=`<div class="cl-scene cl-festival" role="img" aria-label="Red e Bjorne vedono la bancarella viola di Sibilla in fondo al vialetto della festa.">
  <img class="cl-backdrop" src="${art}festival.webp" alt="">
  <img class="cl-sibilla" src="${art}sibilla.webp" alt="">
  <img class="cl-orb" src="${art}sfera.webp" alt="">
  <img class="cl-red" src="${cast}red-02.png" alt="">
  <img class="cl-bjorne" src="${cast}bjorne-02.png" alt="">
 </div>`;
 const boothView=`<div class="cl-scene cl-booth">
  <div role="img" aria-label="Dal banco, Sibilla ti guarda accanto alla sfera di cristallo.">
   <img class="cl-backdrop" src="${art}bancarella.webp" alt="">
   <img class="cl-sibilla" src="${art}sibilla.webp" alt="">
   <img class="cl-orb" src="${art}sfera.webp" alt="">
  </div>
  <output class="cl-orb-result" aria-live="polite" aria-atomic="true"></output>
 </div>`;
 window.READER_LESSONS['calcolo-letterale-introduzione']={
 title:'Introduzione al calcolo letterale',subtitle:'Matematica · Algebra · Calcolo letterale',version:1,nextLesson:false,
 sections:[
 {id:'sfide',title:'Le sfide di Sibilla',cards:[
 {...card('Sibilla sa leggere nel pensiero?','Tra le bancarelle della festa dell’Accademia, una voce attira l’attenzione di Red e Bjorne. È Sibilla, sotto un tendone viola.<br><br>«Venite, venite! Mettete alla prova la mia capacità di leggere nel pensiero!»<br><br>Red si volta verso Bjorne. «Andiamo a vedere di che si tratta?»'),board:'cl-prediction'},
 {...card('Seconda sfida · Due numeri, proprio in quell’ordine','Scegli in segreto <strong>due numeri interi da 1 a 9</strong>, anche uguali, e stabilisci quale viene prima. Raddoppia il primo, aggiungi 5, moltiplica il risultato per 5 e infine aggiungi il secondo. Comunica a Sibilla <strong>soltanto il risultato finale</strong>.'),board:'cl-digits'},
 card('Come ha fatto?','Red guarda la sfera. «Lì dentro c’è qualcuno che suggerisce?» Bjorne si avvicina ancora un po’. «E se cambiassimo numeri?»<br><br>Nel primo gioco, scelte diverse portano alla stessa previsione. Nel secondo, invece, il risultato permette di ritrovare entrambe le scelte e il loro ordine.<br><br><strong>Per capire perché, dobbiamo descrivere le operazioni senza scegliere subito i numeri.</strong>')
 ]},
 {id:'lettere',title:'Descrivere il calcolo con le lettere',cards:[
 card('Lo stesso procedimento, scelte diverse','Indichiamo con '+m('x')+' il numero pensato nel primo gioco. Possiamo ora descrivere i passaggi senza conoscerlo:<ol><li>numero scelto: '+m('x')+';</li><li>raddoppio: '+m('2 · x')+';</li><li>aggiunta di 10: '+m('2 · x + 10')+';</li><li>divisione per 2: '+frac('2 · x + 10','2')+'</li><li>sottrazione del numero iniziale: '+frac('2 · x + 10','2')+' − '+m('x')+'.</li></ol>La stessa lettera indica lo stesso numero in ogni passaggio.'),
 card('Il calcolo letterale','Il <strong>calcolo letterale</strong> è la parte dell’algebra che estende il calcolo con i numeri a espressioni contenenti anche lettere. Consente di descrivere procedimenti generali e di trasformarli mediante le proprietà delle operazioni.<br><br>Le lettere considerate senza assegnare loro un valore particolare si chiamano <strong>indeterminate</strong>. Nei nostri giochi descrivono le scelte che non conosciamo.',
 'Occorre precisare quali numeri sono ammessi. Nel secondo gioco le due lettere rappresentano interi da 1 a 9; in altre espressioni potremo considerare interi, razionali o reali.<br><br>Anche il contesto impone condizioni: una lettera che conta biciclette noleggiate assume valori naturali, mentre una temperatura può essere negativa. <strong>Il significato della lettera e i valori ammessi fanno parte del problema.</strong>')
 ],quiz:quiz('Nel primo gioco, la x compare due volte nell’espressione finale. Che cosa indica?',['Due numeri scelti separatamente','Lo stesso numero pensato','Sempre il numero 5'],1,'Ogni occorrenza di x rappresenta la stessa scelta iniziale.')},
 {id:'scritture',title:'Espressioni e convenzioni di scrittura',cards:[
 card('Espressioni algebriche letterali','Un’<strong>espressione algebrica letterale</strong> indica operazioni aritmetiche da eseguire su numeri e lettere. Parentesi e priorità delle operazioni stabiliscono l’ordine dei calcoli.<br><br>Per esempio, '+m('2 · x + 10')+' richiede di raddoppiare il numero e poi aggiungere 10; '+m('2 · (x + 10)')+' richiede di aggiungere prima 10 e poi raddoppiare. Sono procedimenti diversi.',
 'Per rendere la scrittura più compatta, il punto di moltiplicazione viene spesso omesso:'+formula('2 · x = 2x     a · b = ab     3 · (x + 1) = 3(x + 1)')+'Anche due parentesi affiancate indicano un prodotto: '+m('(a + b)(c + d)')+'.<br><br>Il simbolo rimane quando ometterlo creerebbe ambiguità: '+m('2 · 3')+' è una moltiplicazione, mentre 23 è il numero ventitré.'),
 card('Razionali intere o frazionarie','Le espressioni costruite con addizioni, sottrazioni, moltiplicazioni, divisioni e potenze con esponente intero si chiamano <strong>razionali</strong>. Le operazioni devono avere significato per i valori assegnati.<br><br>Sono <strong>intere</strong> quando non presentano lettere nei denominatori né potenze di lettere con esponente negativo. Per esempio: '+m('2x + 5')+', '+m('3x² − 1')+' e '+frac('x','2')+'Una frazione numerica come coefficiente non rende frazionaria un’espressione.',
 'Sono <strong>frazionarie</strong> quando presentano lettere nei denominatori, anche attraverso potenze con esponente negativo. Per esempio:'+frac('2','x')+frac('x + 1','x − 3')+'Anche '+m('x⁻¹')+' rappresenta il reciproco di '+m('x')+', per '+m('x ≠ 0')+'.<br><br>La classificazione riguarda la scrittura considerata: una semplificazione non cancella le condizioni richieste dall’espressione iniziale.')
 ],quiz:quiz('Quale espressione è razionale frazionaria?',['x/2','2/x','2x + 1'],1,'In 2/x la lettera compare al denominatore. In x/2 il denominatore è il numero 2.')},
 {id:'valutare',title:'Dallo schema al calcolo numerico',cards:[
 card('La valutazione è un passaggio preciso','Per <strong>valutare</strong> un’espressione assegniamo un valore a ogni lettera e svolgiamo il calcolo numerico ottenuto.<br><br>Con '+m('x = 7')+', l’espressione '+m('2x + 10')+' diventa:'+formula('2 · 7 + 10 = 24')+'Con '+m('x = −2')+', diventa:'+formula('2 · (−2) + 10 = 6')+'Lo schema delle operazioni è lo stesso; il risultato può cambiare al variare dell’assegnazione.'),
 card('Assegnazioni ammesse e condizioni di esistenza','Ogni occorrenza della stessa lettera riceve lo stesso valore. Se quel valore è negativo, le parentesi aiutano a conservarne il significato: con '+m('x = −3')+', '+m('x²')+' diventa '+m('(−3)² = 9')+'.<br><br>Inoltre tutte le operazioni devono essere possibili. In '+frac('x + 1','x − 3')+'non è ammesso '+m('x = 3')+': il denominatore sarebbe zero. La condizione '+m('x ≠ 3')+' è una <strong>condizione di esistenza</strong>. I vincoli del contesto vanno rispettati insieme a quelli delle operazioni.')
 ],quiz:quiz('Quale valore non può essere assegnato a x in (x + 1)/(x − 3)?',['−1','0','3'],2,'Per x = 3 il denominatore è zero: quella valutazione non è ammessa.')},
 {id:'segreti',title:'Sveliamo i due trucchi',cards:[
 card('Perché la previsione è sempre 5','Nel primo gioco l’espressione finale è:'+frac('2x + 10','2')+' − '+m('x')+'.<br><br>Dividere la somma per 2 equivale a dividere entrambi gli addendi per 2. Otteniamo '+m('x + 5 − x = 5')+'.<br><br>Il contributo del numero iniziale si annulla: resta sempre 5. <strong>Le proprietà delle operazioni spiegano tutte le scelte in una volta sola.</strong> Provare molti numeri può farci intuire il trucco; questa trasformazione spiega perché funziona.'),
 card('Perché riappaiono le due cifre','Nel secondo gioco chiamiamo '+m('a')+' la prima scelta e '+m('b')+' la seconda. Il risultato comunicato è:'+formula('5(2a + 5) + b = 10a + 25 + b')+'Sibilla sottrae 25 e ottiene '+m('10a + b')+'. Poiché '+m('a')+' e '+m('b')+' sono cifre da 1 a 9, '+m('a')+' occupa il posto delle decine e '+m('b')+' quello delle unità.<br><br>Per esempio, 72 nasconde '+m('72 − 25 = 47')+': prima 4, poi 7. Invertendo le scelte cambia il risultato: l’ordine è conservato.')
 ]},
 {id:'usi',title:'Semplificare e cercare valori',cards:[
 card('Uno schema più semplice, gli stessi risultati','Il calcolo letterale permette di cercare <strong>espressioni equivalenti</strong>: scritture che restituiscono gli stessi valori per tutte le assegnazioni ammesse, conservando le condizioni iniziali.<br><br>Nel primo gioco un lungo procedimento si riduce al numero 5. Una trasformazione può richiedere meno operazioni o rendere più evidente il significato del calcolo. Non tutte le riscritture accorciano il procedimento: scegliamo quella utile alla domanda.'),
 card('Una domanda concreta: quanto costa il noleggio?','Immagina un noleggio biciclette con una quota iniziale di 4 euro e un costo di 3 euro per ogni ora intera. Per '+m('n')+' ore, la spesa in euro è:'+formula('4 + 3n')+'<strong>Quanto spenderò per due ore?</strong> Assegniamo '+m('n = 2')+' e valutiamo: '+m('4 + 3 · 2 = 10')+' euro.',
 '<strong>Per quante ore la spesa sarà di 13 euro?</strong> Questa volta il risultato è assegnato e il numero di ore è da cercare:'+formula('4 + 3n = 13')+'È un’<strong>equazione</strong>: la lettera assume il ruolo di incognita. Il valore '+m('n = 3')+' soddisfa l’uguaglianza, perché '+m('4 + 3 · 3 = 13')+'.<br><br>Valutare significa calcolare per valori assegnati; risolvere significa cercare i valori che rendono vera una condizione. Il calcolo letterale ci aiuterà a trasformare le espressioni e le equazioni rispettandone il significato.'),
 card('Dalla sorpresa agli strumenti','Nel primo gioco le operazioni cancellano la scelta iniziale. Il secondo la conserva in una scrittura che sappiamo interpretare.<br><br>Le lettere permettono di vedere queste strutture e di riutilizzarle. Nella prossima unità inizieremo dai <strong>monomi</strong>, per costruire e trasformare espressioni sempre più articolate.')
 ],quiz:quiz('Nel noleggio, la domanda «Per quante ore spenderò 13 euro?» richiede di…',['assegnare subito n = 13','cercare n che rende vera 4 + 3n = 13','calcolare 4 + 3 · 13'],1,'Conosciamo la spesa e cerchiamo il numero di ore che soddisfa la condizione.')}
 ]};
 function mountPrediction(root){
  const state=gameState.prediction;
  const instructions=[
   '«Pensa a un numero intero e tienilo segreto. La mia sfera indovinerà il risultato dei tuoi calcoli.»',
   'Raddoppia il numero pensato.',
   'Aggiungi 10 al risultato.',
   'Dividi il risultato per 2.',
   'Sottrai il numero che avevi pensato all’inizio.',
   'Il calcolo è finito. Guarda nella sfera!'
  ];
  let approachAnimation;
  root.innerHTML=(state.approached?'':festivalView)+boothView;
  const booth=root.querySelector('.cl-booth');
  const result=booth.querySelector('output');
  booth.hidden=!state.approached;
  const controls=document.createElement('div');
  controls.className='cl-controls';
  controls.innerHTML='<p aria-live="polite" aria-atomic="true"></p><button type="button" class="rm-btn"></button>';
  root.append(controls);
  const note=controls.querySelector('p'),button=controls.querySelector('button');
  function draw(){
   note.textContent=state.open?'Hai ottenuto lo stesso numero? Prova anche con un numero negativo.':instructions[state.stage];
   button.textContent=state.open?'Ricomincia':state.stage===instructions.length-1?'Guarda nella sfera':state.stage===0?'Ho scelto il numero':'Fatto, continua';
   result.textContent=state.open?'5':'';
   result.setAttribute('aria-label',state.open?'La sfera mostra 5':'');
  }
  function advance(){
   if(state.open){
    state.stage=0;
    state.open=false;
   }else if(state.stage<instructions.length-1){
    state.stage++;
   }else{
    state.open=true;
   }
   draw();
  }
  if(state.approached){
   draw();
   button.onclick=advance;
  }else{
   button.textContent='Avvicinati alla bancarella';
   button.onclick=async()=>{
    if(approachAnimation)return;
    const scene=root.querySelector('.cl-festival');
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&scene.animate){
     approachAnimation=scene.animate([
      {transform:'scale(1)',opacity:1},
      {transform:'scale(1.5)',opacity:1,offset:.77},
      {transform:'scale(1.65)',opacity:0}
     ],{duration:600,easing:'ease-in-out'});
     try{await approachAnimation.finished;}catch{return;}
    }
    state.approached=true;
    scene.remove();
    booth.hidden=false;
    if(approachAnimation)booth.animate([{opacity:0},{opacity:1}],{duration:240});
    draw();
    button.onclick=advance;
   };
  }
  return ()=>approachAnimation?.cancel();
 }
 function mountDigits(root){
  const state=gameState.digits;
  root.innerHTML=boothView+`<form class="cl-controls">
   <label>Il tuo risultato finale <input type="number" inputmode="numeric" step="1" required></label>
   <button type="submit" class="rm-btn">Rivela le due scelte</button>
   <p class="cl-response" aria-live="polite"></p>
  </form>`;
  const form=root.querySelector('form'),input=form.querySelector('input');
  const result=root.querySelector('output'),response=form.querySelector('.cl-response');
  function showChoices(choices){
   state.choices=choices;
   result.textContent=choices;
   result.setAttribute('aria-label',choices?`La sfera mostra ${choices[0]} e ${choices[1]}`:'');
  }
  input.value=state.answer;
  showChoices(state.choices);
  input.oninput=()=>{
   state.answer=input.value;
   if(state.choices)showChoices('');
   response.textContent='';
  };
  form.onsubmit=event=>{
   event.preventDefault();
   const total=input.valueAsNumber,code=total-25;
   const first=Math.floor(code/10),second=code%10;
   if(!Number.isInteger(total)||first<1||first>9||second<1||second>9){
    showChoices('');
    response.textContent='Ricontrolla i passaggi. Il totale deve corrispondere a due scelte da 1 a 9.';
    return;
   }
   showChoices(`${first}${second}`);
   response.textContent='';
  };
 }
 window.GatitoLetterale={mount(box,kind){
  const root=document.createElement('div');
  root.className='cl-game';
  box.classList.add('cl-festival-card');
  box.append(root);
  if(kind==='cl-prediction')return mountPrediction(root);
  mountDigits(root);
  return ()=>{};
 }};
})();
