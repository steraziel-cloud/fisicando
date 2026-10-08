/* Ascensore: modello metrico, acquisizione manuale e sfide della teoria. */
(()=>{
 const phases=[{a:0,b:6,y:0,v:1},{a:6,b:11,y:6,v:0},{a:11,b:14,y:6,v:1},{a:14,b:19,y:9,v:0},{a:19,b:22,y:9,v:-1},{a:22,b:27,y:6,v:0},{a:27,b:33,y:6,v:-1},{a:33,b:38,y:0,v:0}];
 const at=t=>{const cycle=Math.floor(t/38),u=t-cycle*38,i=phases.findIndex(p=>u<p.b),p=phases[i];return {t,y:p.y+p.v*(u-p.a),v:p.v,phase:i,cycle,door:p.v===0?Math.min(1,(u-p.a)/.65,(p.b-u)/.65):0};};
 const f=n=>n.toLocaleString('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2});
 const tasks=[
 ['Salire di un piano','Misura la salita dal secondo al terzo piano, escludendo le soste. Premi Misura quando la cabina riparte dal secondo e quando arriva al terzo. Inserisci la velocità media in m/s.'],
 ['La stessa salita, con una sosta','Ora misura dal passaggio al primo piano all’arrivo al terzo: nel mezzo c’è la fermata al secondo. Inserisci la nuova velocità media in m/s.'],
 ['Scendere di un piano','Misura la discesa dal terzo al secondo piano, escludendo le soste. Inserisci il risultato con il suo segno.'],
 ['Misurare una fermata','Acquisisci due letture durante la stessa fermata. Quanto vale la velocità media?'],
 ['Salire e tornare al piano terra','Registra una lettura al piano terra e la seconda al ritorno al piano terra, dopo una salita e una discesa complete. Quanto vale la velocità media?']
 ];
 const comments=[
 'La cabina si è spostata di circa +3 m in circa 3 s: la velocità media è circa +1 m/s.',
 'La fermata aumenta il tempo impiegato: la media è circa +0,55 m/s, anche se durante la salita la cabina continua a percorrere un metro al secondo. La media non racconta la sosta separatamente dal movimento.',
 'La velocità media è negativa perché y₂ è minore di y₁: con il verso positivo verso l’alto, lo spostamento in discesa è negativo. Il segno non significa che la cabina stia rallentando.',
 'Durante la fermata passa del tempo, ma la posizione non cambia: lo spostamento e la velocità media sono zero.',
 'La cabina è tornata alla posizione iniziale: lo spostamento totale e la velocità media sono zero. Questa volta, però, si è mossa! La stessa media può descrivere movimenti diversi.'
 ];
 function valid(k,a,b){const dt=b.t-a.t;if(dt<=0)return false;const near=(x,y)=>Math.abs(x-y)<=.2;
  if(k===0)return near(a.y,6)&&near(b.y,9)&&dt>=2.6&&dt<=3.6;
  if(k===1)return near(a.y,3)&&near(b.y,9)&&dt>=10.4&&dt<=11.6;
  if(k===2)return near(a.y,9)&&near(b.y,6)&&dt>=2.6&&dt<=3.6;
  if(k===3)return a.v===0&&b.v===0&&a.phase===b.phase&&a.cycle===b.cycle;
  return near(a.y,0)&&near(b.y,0)&&dt>=32&&b.t>=a.t+32;
 }
 const fraction=(num,den)=>`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mtext>${num}</mtext><mtext>${den}</mtext></mfrac></math>`;
 function mount(host,st,onDone,review=false){
  if(st.elapsed===undefined)Object.assign(st,{elapsed:0,running:false,first:null,second:null,task:0,solved:false,done:false,answer:'',history:[]});
  const node=document.createElement('section');node.className='rm-elevator';node.innerHTML=`<div class="rm-elevator-layout"><div class="rm-elevator-building"><div class="rm-elevator-axis">y (m) ↑</div>${[3,2,1,0].map(i=>`<div class="rm-elevator-floor" style="bottom:${14+i*20}%"><span>${i===0?'Piano terra':i+'° piano'}</span><b>${i*3} m</b></div>`).join('')}<div class="rm-elevator-cabin"><img class="rm-elevator-open" src="assets/images/reader/elevator-open-v1.png" alt=""><img class="rm-elevator-closed" src="assets/images/reader/elevator-closed-v1.png" alt="Cabina dell’ascensore"></div></div><div class="rm-elevator-panel"><div class="rm-elevator-live"><strong class="lift-time"></strong><span class="lift-position"></span><span class="lift-phase"></span></div><div class="rm-elevator-buttons"><button type="button" class="rm-btn secondary lift-start">Avvia</button><button type="button" class="rm-btn secondary lift-measure">Misura</button><button type="button" class="rm-reader-small lift-reset">Azzera</button></div><div class="rm-elevator-readings"><div><strong>Prima lettura</strong><span class="lift-first"></span></div><div><strong>Seconda lettura</strong><span class="lift-second"></span></div></div><div class="rm-elevator-result"></div><p class="rm-elevator-help">Avvia registra la prima lettura. Misura registra la seconda; premuto di nuovo, inizia una nuova coppia di letture. Azzera riporta la cabina al piano terra.</p></div></div><div class="rm-elevator-task"></div>`;host.append(node);
  const $=s=>node.querySelector(s),cab=$('.rm-elevator-cabin'),closed=$('.rm-elevator-closed'),result=$('.rm-elevator-result'),task=$('.rm-elevator-task');let raf,last=null,disposed=false;
  const reading=(p,i)=>p?`y${i} = ${f(p.y)} m · t${i} = ${f(p.t)} s`:'—';
  function draw(){const p=at(st.elapsed);cab.style.bottom=(14+p.y/3*20)+'%';closed.style.opacity=1-Math.max(0,p.door);$('.lift-time').textContent='t = '+f(p.t)+' s';$('.lift-position').textContent='y = '+f(p.y)+' m';$('.lift-phase').textContent=!st.first&&!st.running?'Pronto al piano terra':p.v>0?'In salita':p.v<0?'In discesa':'Fermata';$('.lift-first').textContent=reading(st.first,'₁');$('.lift-second').textContent=reading(st.second,'₂');$('.lift-start').disabled=st.running||review;$('.lift-measure').disabled=!st.first||review;
   if(st.second){const ds=st.second.y-st.first.y,dt=st.second.t-st.first.t;result.innerHTML=`<span>Δy = ${f(ds)} m · Δt = ${f(dt)} s</span>`+(dt>0?`<div class="rm-elevator-equation"><b>vₘ =</b>${fraction(f(ds)+' m',f(dt)+' s')}<b>= ${f(ds/dt)} m/s</b></div>`:'<p>Attendi prima della seconda lettura: serve un intervallo di tempo maggiore di zero.</p>');}else result.innerHTML='<span>Acquisisci due letture per calcolare la velocità media.</span>';
  }
  function sync(now=performance.now()){if(st.running&&last!==null)st.elapsed+=Math.max(0,now-last)/1000;last=Math.max(now,last??now);}
  function tick(now){if(disposed)return;sync(now);draw();if(st.running)raf=requestAnimationFrame(tick);}
  function snapshot(){sync();const p=at(st.elapsed);return {...p,y:Math.round(p.y*100)/100,t:Math.round(p.t*100)/100};}
  function renderTask(){task.replaceChildren();const heading=document.createElement('h4'),p=document.createElement('p');if(st.done||review){heading.textContent='Che cosa ci dice la velocità media';p.textContent='La velocità media descrive lo spostamento nell’intervallo scelto, ma non racconta come è avvenuto: può nascondere soste e cambiamenti di verso. Come possiamo osservare più da vicino quanto rapidamente cambia la posizione?';task.append(heading,p);$('.rm-elevator-buttons').hidden=true;return;}
   heading.textContent=`Sfida ${st.task<2?1:st.task} di 4 · ${tasks[st.task][0]}`;p.textContent=tasks[st.task][1];task.append(heading,p);$('.rm-elevator-buttons').hidden=false;
   if(st.solved){const msg=document.createElement('p');msg.className='rm-elevator-success';msg.textContent=comments[st.task];const next=document.createElement('button');next.type='button';next.className='rm-btn primary';next.textContent=st.task===0?'Confronta con una fermata':st.task===4?'Concludi le sfide':'Prossima sfida';next.onclick=()=>{st.history.push({task:st.task,first:st.first,second:st.second});st.task++;st.solved=false;st.answer='';if(st.task===5){st.done=true;st.running=false;cancelAnimationFrame(raf);onDone();}draw();renderTask();};task.append(msg,next);return;}
   const label=document.createElement('label');label.textContent='Velocità media (m/s) ';const input=document.createElement('input');input.type='text';input.inputMode='decimal';input.value=st.answer;input.setAttribute('aria-label','Velocità media misurata in metri al secondo');input.oninput=()=>st.answer=input.value;label.append(input);const verify=document.createElement('button');verify.type='button';verify.className='rm-btn secondary';verify.textContent='Verifica la misura';const feedback=document.createElement('p');feedback.setAttribute('role','status');
   const check=()=>{if(!st.first||!st.second){feedback.textContent='Acquisisci prima entrambe le letture con Misura.';return;}if(!valid(st.task,st.first,st.second)){feedback.textContent=st.task===3?'Le due letture devono appartenere alla stessa fermata. Riprova.':st.task===4?'Registra entrambe le letture al piano terra, includendo una salita e una discesa complete.':st.task===1?'Misura dal passaggio al primo piano all’arrivo al terzo, includendo la sosta al secondo. Riprova.':'Controlla i piani delle due letture e prova a escludere le soste: misura alla ripartenza e all’arrivo.';return;}const expected=(st.second.y-st.first.y)/(st.second.t-st.first.t),answer=Number(st.answer.trim().replace(',','.'));if(!st.answer.trim()||!Number.isFinite(answer)||Math.abs(answer-expected)>Math.max(.03,Math.abs(expected)*.02)){feedback.textContent='Usa lo spostamento e il tempo registrati nel riquadro. Controlla anche il segno e riprova.';return;}st.solved=true;renderTask();};verify.onclick=check;input.onkeydown=e=>{if(e.key==='Enter')check();};task.append(label,verify,feedback);
  }
  $('.lift-start').onclick=()=>{if(st.running||review)return;st.first=snapshot();st.second=null;st.running=true;last=performance.now();raf=requestAnimationFrame(tick);draw();};
  $('.lift-measure').onclick=()=>{if(!st.first||review)return;const p=snapshot();if(st.second){st.first=p;st.second=null;}else st.second=p;draw();};
  $('.lift-reset').onclick=()=>{cancelAnimationFrame(raf);st.running=false;last=null;st.elapsed=0;st.first=null;st.second=null;draw();};
  draw();renderTask();if(st.running&&!review){last=performance.now();raf=requestAnimationFrame(tick);}return ()=>{sync();disposed=true;cancelAnimationFrame(raf);};
 }
 window.GatitoElevator={mount,at,valid};
})();
