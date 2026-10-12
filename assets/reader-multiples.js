/* Optional number explorer. The same mount API can later serve the equation copilot. */
window.GatitoMultiples=(()=>{
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 function hydrate(host,state={}){
  const n=Number.isInteger(state.number)&&state.number>=1&&state.number<=20?state.number:7;
  host.querySelectorAll('[data-multiples-self-product]').forEach(node=>node.textContent=`${n} × 1 = ${n}`);
  host.querySelectorAll('[data-multiples-number]').forEach(node=>node.textContent=String(n));
  host.querySelectorAll('[data-multiples-sequence]').forEach(node=>node.textContent=Array.from({length:5},(_,factor)=>n*factor).join(', ')+', …');
 }
 function mount(host,state={}){
  state.number=Number.isInteger(state.number)&&state.number>=1&&state.number<=20?state.number:7;
  state.page=state.page===1?1:0;
  state.factor=Number.isInteger(state.factor)&&state.factor>=0&&state.factor<=20?state.factor:0;
  host.classList.add('rm-multiples-card');const board=el('section','mp-board');board.setAttribute('aria-label','Esplora i multipli di un numero');host.append(board);
  const abort=new AbortController(),timers=new Set(),reduce=matchMedia('(prefers-reduced-motion: reduce)');let generation=0,disposed=false,userSelected=false;
  const listen=(node,type,fn)=>node.addEventListener(type,fn,{signal:abort.signal});
  const controls=el('div','mp-controls'),label=el('label','mp-choice'),select=el('select');select.setAttribute('aria-label','Scegli il numero');label.append(el('span','','Scegli il numero'),select);
  for(let n=1;n<=20;n++){const option=el('option','',String(n));option.value=n;select.append(option);}select.value=state.number;
  controls.append(label);board.append(controls);
  const surface=el('div','mp-blackboard'),background=el('img','mp-background');background.src='assets/images/morgana-classroom/chalkboard.png';background.alt='';background.width=1423;background.height=1080;background.setAttribute('aria-hidden','true');
  const left=el('button','mp-edge mp-edge-left'),right=el('button','mp-edge mp-edge-right');left.type=right.type='button';left.setAttribute('aria-label','Mostra i multipli da ×0 a ×10');right.setAttribute('aria-label','Mostra i multipli da ×11 a ×20');
  const chalk=el('div','mp-chalk'),title=el('h4','mp-title'),sequence=el('div','mp-sequence'),equation=el('p','mp-equation');equation.setAttribute('aria-live','polite');chalk.append(title,sequence,equation);surface.append(background,chalk,left,right);board.append(surface);
  const footer=el('div','mp-footer'),more=el('button','rm-btn secondary');more.type='button';footer.append(more);board.append(footer);
  function cancel(){generation++;for(const timer of timers)clearTimeout(timer);timers.clear();}
  function choose(factor){state.factor=factor;sequence.querySelectorAll('button').forEach(b=>{const selected=Number(b.dataset.factor)===factor;b.setAttribute('aria-pressed',String(selected));b.classList.toggle('is-selected',selected);});equation.textContent=`${state.number} × ${factor} = ${state.number*factor}`;}
  function draw(animate){
   cancel();hydrate(host,state);userSelected=false;const gen=generation,n=state.number,start=state.page?11:0,end=state.page?20:10;
   left.disabled=state.page===0;right.disabled=state.page===1;title.textContent=`I multipli di ${n}`;more.textContent=state.page?'Torna ai primi multipli':'Mostra altri multipli';
   sequence.replaceChildren();equation.setAttribute('aria-live',animate&&!reduce.matches?'off':'polite');
   const current=state.factor>=start&&state.factor<=end?state.factor:start;choose(current);
   for(let factor=start;factor<=end;factor++){
    const step=el('div','mp-step'),increment=el('span','mp-increment',factor===0?'':`+${n}`),button=el('button','mp-number',String(n*factor)),caption=el('span','mp-factor',`×${factor}`);button.type='button';button.dataset.factor=factor;button.setAttribute('aria-label',`${n} per ${factor} uguale ${n*factor}`);button.setAttribute('aria-pressed',String(factor===current));button.classList.toggle('is-selected',factor===current);step.append(increment,button,caption);sequence.append(step);
    listen(button,'click',()=>{userSelected=true;equation.setAttribute('aria-live','polite');choose(factor);});
    if(animate&&!reduce.matches){step.classList.add('is-pending');button.disabled=true;const timer=setTimeout(()=>{timers.delete(timer);if(disposed||generation!==gen)return;step.classList.remove('is-pending');step.classList.add('is-writing');button.disabled=false;if(!userSelected)choose(factor);if(factor===end)equation.setAttribute('aria-live','polite');},(factor-start)*110+80);timers.add(timer);}
   }
  }
  listen(select,'change',()=>{state.number=Number(select.value);state.page=0;state.factor=0;draw(true);});
  function showPage(page){if(state.page===page)return;state.page=page;state.factor=page?11:0;draw(true);}
  listen(more,'click',()=>showPage(state.page?0:1));listen(left,'click',()=>showPage(0));listen(right,'click',()=>showPage(1));
  draw(!state.visited);state.visited=true;
  return()=>{disposed=true;cancel();abort.abort();};
 }
 return{mount,hydrate};
})();


