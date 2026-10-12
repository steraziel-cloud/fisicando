/* Guided factor-pair search; state belongs to the current reader visit. */
window.GatitoDivisorPairs=(()=>{
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;return n;};
 function mount(host,mode,state={}){
  const practice=mode==='pairs-practice',n=practice?32:36;host.classList.add('rm-pairs-card');
  const board=el('section','dp-board');board.setAttribute('aria-label',practice?'Trova i divisori di 32':'Le coppie di divisori di 36');host.append(board);
  const abort=new AbortController();let aidDispose=()=>{};
  const listen=(node,fn)=>node.addEventListener('click',fn,{signal:abort.signal});
  const button=(text,fn,cls='rm-btn secondary')=>{const b=el('button',cls,text);b.type='button';listen(b,fn);return b;};
  const title=el('h4','dp-heading',`Le coppie di ${n}`),pairs=el('div','dp-pairs'),work=el('div','dp-work'),note=el('p','dp-note'),controls=el('div','dp-controls');note.setAttribute('aria-live','polite');board.append(title,pairs,work,note,controls);
  function showPairs(values){pairs.replaceChildren();values.forEach(([a,b],i)=>{const row=el('div','dp-pair');row.style.setProperty('--pair-color',['#178e96','#ab6824','#6478bb','#8d5da2','#38895d'][i%5]);row.append(el('strong','dp-factor',String(a)),el('span','dp-link',a===b?'×':'×'),el('strong','dp-factor',String(b)),el('span','dp-result',`= ${n}`));if(a===b)row.classList.add('dp-same');pairs.append(row);});}
  if(!practice){
   state.stage=Number.isInteger(state.stage)?Math.max(0,Math.min(6,state.stage)):0;
   const stages=[
    {pairs:[[1,36]],equation:'36 ÷ 1 = 36',text:'1 e 36 sono divisori di 36. La prima coppia c’è sempre: 1 e il numero stesso.'},
    {pairs:[[1,36],[2,18]],equation:'36 ÷ 2 = 18',text:'La divisione è esatta: troviamo insieme due divisori, 2 e 18.'},
    {pairs:[[1,36],[2,18],[3,12]],equation:'36 ÷ 3 = 12',text:'Anche 3 divide 36 senza resto. Il suo compagno è 12.'},
    {pairs:[[1,36],[2,18],[3,12],[4,9]],equation:'36 ÷ 4 = 9',text:'Un’altra coppia: 4 e 9. Il primo fattore aumenta, il secondo diminuisce.'},
    {pairs:[[1,36],[2,18],[3,12],[4,9]],equation:'36 = 5 × 7 + 1',text:'Proviamo 5: avanza 1. La divisione non è esatta, quindi 5 non è un divisore.'},
    {pairs:[[1,36],[2,18],[3,12],[4,9],[6,6]],equation:'36 ÷ 6 = 6',text:'I due fattori si incontrano: 6 × 6 = 36. Possiamo fermarci. Con fattori entrambi maggiori di 6, il prodotto supererebbe 36.'},
    {pairs:[[1,36],[2,18],[3,12],[4,9],[6,6]],equation:'1, 2, 3, 4, 6, 9, 12, 18, 36',text:'Ecco tutti i divisori, in ordine. Il 6 compare due volte nella coppia, ma nella lista lo scriviamo una volta sola.'}
   ];
   function draw(){const s=stages[state.stage];showPairs(s.pairs);work.replaceChildren(el('span','dp-kicker',state.stage===6?'Tutti i divisori':'Il tentativo'),el('strong','dp-equation',s.equation));note.textContent=s.text;controls.replaceChildren(button('←',()=>{state.stage--;draw();}),el('span','dp-progress',`${state.stage+1} / ${stages.length}`),button('→',()=>{state.stage++;draw();}));const bs=controls.querySelectorAll('button');bs[0].setAttribute('aria-label','Coppie di divisori: passo precedente');bs[1].setAttribute('aria-label','Coppie di divisori: passo successivo');bs[0].disabled=state.stage===0;bs[1].disabled=state.stage===6;}
   draw();
  }else{
   state.candidate=state.candidate||2;state.pairs=state.pairs||[[1,32]];state.tested=state.tested||[];state.phase=state.phase||'decide';
   const feedback=el('div','dp-feedback');feedback.setAttribute('aria-live','polite');board.append(feedback);
   const help=el('div','dp-aid');help.hidden=true;board.append(help);
   const helpButton=button('Apri la lavagna dei multipli',()=>{help.hidden=!help.hidden;helpButton.textContent=help.hidden?'Apri la lavagna dei multipli':'Chiudi la lavagna dei multipli';helpButton.setAttribute('aria-expanded',String(!help.hidden));if(!help.hidden&&!help.childNodes.length)aidDispose=window.GatitoMultiples.mount(help,state.aid||(state.aid={number:state.candidate<=20?state.candidate:2}));});helpButton.setAttribute('aria-expanded','false');board.insertBefore(helpButton,help);
   function respond(correct,message){window.GatitoQuizReactions.show(feedback,message,{correct});}
   function advance(){state.tested.push(state.candidate);state.candidate++;state.phase=state.candidate===6?'stop':'decide';draw();}
   function draw(){showPairs(state.pairs);controls.replaceChildren();work.replaceChildren();note.textContent=state.tested.length?`Già controllati: 1, ${state.tested.join(', ')}.`:'La prima coppia te l’abbiamo regalata. Ora continui tu!';
    if(state.phase==='done'){work.append(el('span','dp-kicker','Tutti i divisori di 32'),el('strong','dp-equation','1, 2, 4, 8, 16, 32'));note.textContent='Abbiamo trovato tutte le coppie, senza provare ogni numero fino a 32.';controls.append(button('Riprova',()=>{state.candidate=2;state.pairs=[[1,32]];state.tested=[];state.phase='decide';feedback.replaceChildren();draw();}));return;}
    if(state.phase==='stop'){work.append(el('strong','dp-question','Dobbiamo provare anche 6?'),el('p','','6 × 6 = 36, che è già maggiore di 32.'));
     controls.append(button('Sì, continuiamo',()=>respond(false,'Con due fattori da 6 in su il prodotto sarebbe almeno 36. I fattori più piccoli li abbiamo già controllati.')),button('No, abbiamo finito',()=>{state.phase='done';draw();respond(true,'Esatto! Le coppie ancora possibili avrebbero un fattore più piccolo di 6, ma li abbiamo già provati tutti.');}));return;}
    work.append(el('span','dp-kicker',`Proviamo ${state.candidate}`));
    if(state.phase==='partner'){const label=el('label','dp-answer');label.append(el('span','',`${state.candidate} ×`));const input=el('input');input.type='text';input.inputMode='numeric';input.setAttribute('aria-label',`Il compagno di ${state.candidate} nella coppia di 32`);input.maxLength=2;label.append(input,el('span','','= 32'));work.append(label);const verify=()=>{const value=input.value.trim();if(!/^\d+$/.test(value)||Number(value)*state.candidate!==32){respond(false,'Cerchiamo il numero che, moltiplicato per '+state.candidate+', dà 32. Puoi aiutarti con la lavagna dei multipli.');return;}const a=state.candidate,b=Number(value);state.pairs.push([a,b]);advance();respond(true,`${a} × ${b} = 32. Abbiamo trovato due divisori in un solo tentativo!`);};controls.append(button('Controlla la coppia',verify,'rm-btn primary'));input.addEventListener('keydown',e=>{if(e.key==='Enter')verify();},{signal:abort.signal});return;}
    work.append(el('strong','dp-question',`32 ÷ ${state.candidate} è una divisione esatta?`));
    for(const [text,yes] of [['Sì',true],['No',false]])controls.append(button(text,()=>{const exact=32%state.candidate===0;if(yes!==exact){respond(false,exact?'La divisione è esatta: troviamo 32 tra i multipli di '+state.candidate+'.':'32 non compare tra i multipli di '+state.candidate+': la divisione lascia un resto.');return;}feedback.replaceChildren();if(yes){state.phase='partner';draw();}else{const a=state.candidate;advance();respond(true,`La divisione per ${a} non è esatta. Passiamo al numero successivo.`);}}));
   }
   draw();
  }
  return()=>{abort.abort();aidDispose();};
 }
 return{mount};
})();
