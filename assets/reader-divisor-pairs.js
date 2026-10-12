/* Guided factor-pair search; state belongs to the current reader visit. */
window.GatitoDivisorPairs=(()=>{
 const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;return n;};
 function mount(host,mode,state={}){
  const practice=mode==='pairs-practice',n=practice?32:36;host.classList.add('rm-pairs-card');
  const board=el('section','dp-board');board.setAttribute('aria-label',practice?'Trova i divisori di 32':'Le coppie di divisori di 36');host.append(board);
  const abort=new AbortController();let aidDispose=()=>{};
  const listen=(node,fn)=>node.addEventListener('click',fn,{signal:abort.signal});
  const button=(text,fn,cls='rm-btn secondary')=>{const b=el('button',cls,text);b.type='button';listen(b,fn);return b;};
  const title=el('h4','dp-heading',practice?'Le coppie di divisori di 32':`Le coppie di ${n}`),pairs=el('div','dp-pairs'),work=el('div','dp-work'),note=el('p','dp-note'),controls=el('div','dp-controls');note.setAttribute('aria-live','polite');board.append(title,pairs,work,note,controls);
  function showPairs(values){pairs.replaceChildren();values.forEach(([a,b],i)=>{const row=el('div','dp-pair');row.style.setProperty('--pair-color',['#178e96','#ab6824','#6478bb','#8d5da2','#38895d'][i%5]);row.append(el('strong','dp-factor',String(a)),el('span','dp-link','↔'),el('strong','dp-factor',String(b)));if(a===b)row.classList.add('dp-same');pairs.append(row);});}
  if(!practice){
   state.stage=Number.isInteger(state.stage)?Math.max(0,Math.min(18,state.stage)):0;
   const stages=[];
   for(let candidate=1;candidate<=6;candidate++)for(let phase=0;phase<3;phase++)stages.push({candidate,phase});
   stages.push({summary:true});
   function draw(){
    const stage=stages[state.stage],a=stage.candidate,phase=stage.phase;
    const done=[];for(let d=1;d<(stage.summary?7:a);d++)if(36%d===0)done.push([d,36/d]);showPairs(done);
    pairs.hidden=done.length===0;work.replaceChildren();work.classList.toggle('dp-summary',!!stage.summary);note.hidden=!!stage.summary;
    if(stage.summary){work.append(el('span','dp-kicker','Tutti i divisori di 36'),el('strong','dp-equation','1, 2, 3, 4, 6, 9, 12, 18, 36'));note.textContent='Il 6 compare due volte nella coppia 6 e 6, ma nella lista lo scriviamo una volta sola. Abbiamo trovato tutti i divisori!';}
    else{
     const q=Math.floor(36/a),rest=36%a,exact=rest===0;
     const caption=el('span','dp-kicker',phase===0?'Il candidato':phase===1?'Il tentativo':'Il risultato');work.append(caption);
     const flow=el('div','dp-flow'),candidate=el('strong','dp-candidate',String(a)),first=el('span','dp-arrow dp-arrow-first'),calculation=el('div','dp-calculation'),second=el('span','dp-arrow dp-arrow-second'),partner=el('strong','dp-partner');
     first.setAttribute('aria-hidden','true');second.setAttribute('aria-hidden','true');
     if(phase>=1){first.classList.add('is-active');calculation.append(el('strong','',exact?`36 ÷ ${a} = ${q}`:`36 ÷ ${a}`),el('span','dp-remainder',exact?'Resto 0':`Quoziente ${q} · Resto ${rest}`));}
     else calculation.classList.add('dp-not-yet');
     if(phase===2&&exact){second.classList.add('is-active','is-growing');partner.textContent=q;partner.classList.add('is-revealed');}
     if(phase===2&&!exact){calculation.classList.add('dp-failed');partner.textContent='✕';partner.classList.add('dp-no-partner');partner.setAttribute('aria-label','Nessun compagno');}
     flow.append(candidate,first,calculation,second,partner);work.append(flow);
     if(phase===0)note.textContent=`Partiamo da ${a}: per ora è soltanto un candidato. Controlliamo se divide 36 senza resto.`;
     if(phase===1)note.textContent=exact?`La divisione è esatta: il resto è zero. Il quoziente ${q} ci permette di completare la coppia.`:`La divisione lascia un resto di ${rest}. Quindi ${a} non è un divisore di 36.`;
     if(phase===2)note.textContent=!exact?`Per ${a} non troviamo una coppia. Lasciamo questo tentativo e passiamo al candidato successivo.`:a===6?'Il compagno di 6 è ancora 6: i due fattori si incontrano. Ci fermiamo qui. I divisori più grandi sono già comparsi come compagni nelle coppie precedenti.':`Il quoziente ${q} diventa il secondo divisore. La coppia è completa: ${a} e ${q}.`;
    }
    controls.replaceChildren(button('←',()=>{state.stage--;draw();}),el('span','dp-progress',`${state.stage+1} / ${stages.length}`),button('→',()=>{state.stage++;draw();}));const bs=controls.querySelectorAll('button');bs[0].setAttribute('aria-label','Coppie di divisori: passo precedente');bs[1].setAttribute('aria-label','Coppie di divisori: passo successivo');bs[0].disabled=state.stage===0;bs[1].disabled=state.stage===stages.length-1;host.dispatchEvent(new CustomEvent('gatito-pairs-stage',{detail:{summary:!!stage.summary}}));
   }
   draw();
  }else{
   host.classList.add('rm-pairs-practice');note.remove();
   state.candidate=state.candidate||2;state.pairs=state.pairs||[[1,32]];state.phase=state.phase||'decide';
   const feedback=el('div','dp-feedback');feedback.setAttribute('aria-live','polite');board.append(feedback);
   const help=el('div','dp-practice-multiples');help.hidden=true;
   let aidMounted=false;
   const helpButton=button('Apri la lavagna dei multipli',()=>setHelpOpen(!state.helpOpen));helpButton.classList.add('dp-aid-toggle');helpButton.setAttribute('aria-expanded','false');host.append(helpButton,help);
   function setHelpOpen(open){state.helpOpen=open;help.hidden=!open;host.classList.toggle('dp-aid-open',open);helpButton.textContent=open?'Chiudi la lavagna dei multipli':'Apri la lavagna dei multipli';helpButton.setAttribute('aria-expanded',String(open));if(open&&!aidMounted){aidMounted=true;aidDispose=window.GatitoMultiples.mount(help,state.aid||(state.aid={number:state.candidate<=20?state.candidate:2}));}}
   setHelpOpen(state.helpOpen===true);
   function respond(correct,message){window.GatitoQuizReactions.show(feedback,message,{correct});}
   function advance(){state.candidate++;state.phase=state.candidate===6?'stop':'decide';draw();}
   function draw(){showPairs(state.pairs);controls.replaceChildren();work.replaceChildren();
    if(state.phase==='done'){work.append(el('span','dp-kicker','Tutti i divisori di 32'),el('strong','dp-equation','1, 2, 4, 8, 16, 32'));controls.append(button('Riprova',()=>{state.candidate=2;state.pairs=[[1,32]];state.phase='decide';feedback.replaceChildren();draw();}));return;}
    if(state.phase==='stop'){work.append(el('strong','dp-question','Dobbiamo provare anche 6?'),el('p','','Dividendo 32 per 6 troviamo quoziente 5 e resto 2. Il quoziente è più piccolo del candidato: 5 < 6.'));
     controls.append(button('Sì, continuiamo',()=>respond(false,'Il quoziente 5 è più piccolo del candidato 6. I divisori successivi sono già comparsi come compagni dei candidati più piccoli, che abbiamo controllato.')),button('No, abbiamo finito',()=>{state.phase='done';draw();respond(true,'Esatto! I divisori più grandi li abbiamo già trovati come compagni: 8, 16 e 32. Continuando ritroveremmo le stesse coppie con i ruoli scambiati.');}));return;}
    work.append(el('span','dp-kicker',`Proviamo ${state.candidate}`));
    if(state.phase==='partner'){const label=el('label','dp-answer');label.append(el('span','',`${state.candidate} ×`));const input=el('input');input.type='text';input.inputMode='numeric';input.setAttribute('aria-label',`Il compagno di ${state.candidate} nella coppia di 32`);input.maxLength=2;label.append(input,el('span','','= 32'));work.append(label);const verify=()=>{const value=input.value.trim();if(!/^\d+$/.test(value)||Number(value)*state.candidate!==32){respond(false,'Cerchiamo il numero che, moltiplicato per '+state.candidate+', dà 32. Puoi aiutarti con la lavagna dei multipli.');return;}const a=state.candidate,b=Number(value);state.pairs.push([a,b]);advance();respond(true,`${a} × ${b} = 32. Abbiamo trovato due divisori in un solo tentativo!`);};controls.append(button('Controlla la coppia',verify,'rm-btn primary'));input.addEventListener('keydown',e=>{if(e.key==='Enter')verify();},{signal:abort.signal});return;}
    work.append(el('strong','dp-question',`32 ÷ ${state.candidate} è una divisione esatta?`));
    for(const [text,yes] of [['Sì',true],['No',false]])controls.append(button(text,()=>{const exact=32%state.candidate===0;if(yes!==exact){respond(false,exact?'La divisione è esatta: troviamo 32 tra i multipli di '+state.candidate+'.':'32 non compare tra i multipli di '+state.candidate+': la divisione lascia un resto.');return;}feedback.replaceChildren();if(yes){state.phase='partner';draw();}else{const a=state.candidate;advance();respond(true,`La divisione per ${a} non è esatta. Passiamo al numero successivo.`);}}));
   }
   draw();
  }
  return()=>{abort.abort();aidDispose();};
 }
 function setVisible(host,visible){host.querySelector('.dp-board').hidden=!visible;host.classList.toggle('rm-pairs-card',visible);host.classList.toggle('rm-pairs-intro',!visible);}
 function hydrateIntro(host){host.querySelectorAll('[data-dp-reaction]').forEach(img=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const still=img.getAttribute('src');img.src=still.replace('-still.webp','.webp');setTimeout(()=>{img.src=still;},2800);});}
 return{mount,setVisible,hydrateIntro};
})();





