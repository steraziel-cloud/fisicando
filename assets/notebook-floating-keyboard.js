/* Experimental floating keyboard, loaded only by the fractions laboratory. */
window.GatitoNotebookDock={mount(host){
 let open=false,target=null,lastKey='',dock=null,initialized=false,comparisonPosition=null,comparisonDrag=null,keyboardPosition=null,keyboardDrag=null;
 const numeric=t=>t?.matches('input[inputmode="numeric"]')&&!t.disabled;
 function sync(){
  const palette=host.querySelector('.nb-keypad,.fn-keypad'),paper=host.querySelector('.nb-paper,.fn-paper');
  let content=paper?.querySelector(':scope > .notebook-sheet-content');if(paper&&!content){content=document.createElement('div');content.className='notebook-sheet-content';for(const child of [...paper.childNodes])if(!child.classList?.contains('notebook-dock'))content.append(child);paper.prepend(content);}
  dock=host.querySelector('.notebook-dock')||dock;
  if(!dock){dock=document.createElement('aside');dock.className='notebook-dock gm-keyboard';dock.setAttribute('aria-label','Tastierino del quaderno');(host.querySelector('.nb-paper,.fn-paper')||host).append(dock);}
  if(!initialized){
  dock.innerHTML='<button type="button" class="notebook-dock-toggle" aria-label="Apri o chiudi tastierino" title="Apri o chiudi tastierino"><span aria-hidden="true">⌨</span><span>Tastiera</span></button><div class="notebook-dock-body"><header class="gm-keyboard-header"><div><span class="gm-keyboard-eyebrow">GATITOMATH</span><strong>Scrivi sul quaderno</strong></div><div class="gm-edit-tools"><button type="button" data-gm-edit="cut" title="Taglia" aria-label="Taglia">✂</button><button type="button" data-gm-edit="copy" title="Copia" aria-label="Copia">⧉</button><button type="button" data-gm-edit="paste" title="Incolla" aria-label="Incolla">▣</button><button type="button" data-gm-edit="hide" title="Nascondi tastiera" aria-label="Nascondi tastiera">⌄</button></div></header><div class="gm-keyboard-keys"></div><span class="gm-keyboard-status" role="status"></span></div>';
  const body=dock.querySelector('.gm-keyboard-keys');
  const source=document.createElement('div');source.className='gm-source-keys';source.hidden=true;body.append(source);
  const btn=(label,command,value='',enabled=true,title=label)=>`<button type="button" data-gm-command="${command}" data-value="${value}" title="${title}" aria-label="${title}" ${enabled?'':'disabled'}>${label}</button>`;
  const has=()=>false,draft=false,factor=false;
  const left=document.createElement('div');left.className='gm-structures';left.innerHTML=btn('Inserisci','insert','',true,'Inserisci')+btn('<span class="gm-frac-icon"><span>□</span><span>□</span></span>','fraction','',has('[data-nb-action="fraction"]'),'Frazione')+btn('□<sup>□</sup>','power','',has('[data-fn-action="power"]'),'Potenza');
  const center=document.createElement('div');center.className='gm-number-matrix';
  center.innerHTML=['7','8','9','÷','4','5','6','·','1','2','3','−','0','.','=','+'].map(k=>btn(k,/^\d$/.test(k)?'digit':k==='='?'compare':'operator',k,/^\d$/.test(k)?true:k==='='?host.querySelectorAll('.nb-row').length===2:k==='.'?false:draft||factor&&k==='·',k==='.'?'Separatore decimale (non disponibile nei numeri naturali)':k)).join('');
  const right=document.createElement('div');right.className='gm-controls';right.innerHTML=btn('←','arrow','ArrowLeft',true,'Sposta a sinistra')+btn('→','arrow','ArrowRight',true,'Sposta a destra')+btn('⌫','backspace','',true,'Backspace')+btn('Conferma','confirm','',true,'Conferma');
  const edits=dock.querySelector('.gm-edit-tools');edits.innerHTML=btn('↶','undo','',true,'Annulla')+btn('↷','redo','',true,'Ripristina')+'<button type="button" data-gm-edit="cut" title="Taglia" aria-label="Taglia">✂</button><button type="button" data-gm-edit="copy" title="Copia" aria-label="Copia">⧉</button><button type="button" data-gm-edit="paste" title="Incolla" aria-label="Incolla">▣</button><button type="button" data-gm-edit="hide" title="Nascondi tastiera" aria-label="Nascondi tastiera">⌄</button>';
  const header=dock.querySelector('.gm-keyboard-header');const handle=document.createElement('div');handle.className='gm-keyboard-handle';handle.tabIndex=0;handle.setAttribute('role','button');handle.setAttribute('aria-label','Sposta il tastierino');handle.title='Trascina per spostare. Usa le frecce quando selezionato; Home ripristina la posizione.';handle.innerHTML='<span aria-hidden="true">⠿</span><span>Sposta</span>';header.replaceChildren(handle,edits);body.append(left,center,right);keyboardResize?.observe(dock.querySelector('.notebook-dock-body'));initialized=true;
  }
  if(dock.parentNode!==paper)(paper||host).append(dock);
  const source=dock.querySelector('.gm-source-keys');if(palette&&!source.contains(palette))source.replaceChildren(palette);else if(!palette)source.replaceChildren();
  const draft=!!source.querySelector('[data-nb-action="write"]'),factor=!!source.querySelector('.fn-keypad');
  const set=(cmd,enabled)=>{const button=dock.querySelector('[data-gm-command="'+cmd+'"]');if(button)button.disabled=!enabled;};
  host.querySelector('.nb-topbar [data-nb-action="insert"]')?.setAttribute('hidden','');
  set('insert',!host.hasAttribute('data-fn-fixed-numbers'));
  set('confirm',draft||!!host.querySelector('input[inputmode="numeric"]:not(:disabled)'));
  set('fraction',!!source.querySelector('[data-nb-action="fraction"]'));set('power',!!source.querySelector('[data-fn-action="power"]'));
  dock.querySelectorAll('[data-gm-command="operator"]').forEach(button=>{button.disabled=button.dataset.value==='.'||!(draft||factor&&button.dataset.value==='·');});
  set('compare',host.querySelectorAll('.nb-row').length===2);
  if(host.classList.contains('nb-notebook')&&!host.querySelector('.nb-row,.nb-composer')){const slot=document.createElement('button');slot.type='button';slot.className='gm-empty-slot';slot.dataset.gmCommand='insert';slot.setAttribute('aria-label','Scrivi nel quaderno');slot.textContent='□';content.querySelector('.nb-workspace-flow').append(slot);}
  const answer=host.querySelector('.nb-comparison-answer');if(answer){
   answer.classList.add('gm-comparison','gm-comparison-floating');const words=[...answer.children].filter(el=>el.tagName==='SPAN');if(words[0])words[0].textContent='Il primo numero è';if(words[1])words[1].textContent='il secondo.';
   const model=host.gmNotebook?.model,keys=[...new Set([...host.querySelectorAll('.nb-selected[data-nb-select]')].map(el=>el.dataset.nbSelect))];
   answer.hidden=keys.length!==2||!keys.every(key=>model?.rows.some(row=>row.items.length===1&&row.items[0].id===key&&['fraction','number'].includes(row.items[0].type)));
   answer.setAttribute('role','dialog');answer.setAttribute('aria-label','Confronta le frazioni selezionate');
   const header=document.createElement('div');header.className='gm-comparison-handle';header.textContent='Confronta i numeri';header.tabIndex=0;header.setAttribute('aria-label','Sposta il confronto con le frecce della tastiera');answer.prepend(header);content.append(answer);
   set('compare',!answer.hidden);placeComparison();
  }
  if(paper){paper.classList.add('notebook-sheet-docked');const toolbar=host.querySelector(':scope > .fn-toolbar');if(toolbar)content.prepend(toolbar);}host.classList.add('notebook-docked');apply();
 }
 function placeComparison(){const panel=host.querySelector('.gm-comparison-floating');if(!panel||panel.hidden)return;const rect=panel.getBoundingClientRect(),paper=host.querySelector('.nb-paper').getBoundingClientRect();const x=comparisonPosition?.x??paper.left+20,y=comparisonPosition?.y??Math.min(paper.top+220,window.innerHeight-rect.height-20);comparisonPosition={x:Math.max(8,Math.min(x,window.innerWidth-rect.width-8)),y:Math.max(8,Math.min(y,window.innerHeight-rect.height-8))};panel.style.left=comparisonPosition.x+'px';panel.style.top=comparisonPosition.y+'px';}
 function dragComparison(event){if(event.target.closest('.gm-comparison-floating'))event.stopPropagation();const handle=event.target.closest('.gm-comparison-handle');if(!handle||event.button>0)return;event.preventDefault();event.stopPropagation();const r=handle.parentElement.getBoundingClientRect();comparisonDrag={id:event.pointerId,x:event.clientX,y:event.clientY,left:r.left,top:r.top};handle.setPointerCapture?.(event.pointerId);}
 function moveComparison(event){if(!comparisonDrag||event.pointerId!==comparisonDrag.id)return;event.preventDefault();comparisonPosition={x:comparisonDrag.left+event.clientX-comparisonDrag.x,y:comparisonDrag.top+event.clientY-comparisonDrag.y};placeComparison();}
 function endComparison(){comparisonDrag=null;}
 function keyComparison(event){if(!event.target.closest('.gm-comparison-handle')||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();event.stopPropagation();const r=event.target.parentElement.getBoundingClientRect();comparisonPosition={x:r.left+(event.key==='ArrowLeft'?-10:event.key==='ArrowRight'?10:0),y:r.top+(event.key==='ArrowUp'?-10:event.key==='ArrowDown'?10:0)};placeComparison();}

 // The handle moves the panel; keys keep their editing behavior and input target.
 function placeKeyboard(){
  if(!dock||!keyboardPosition||!open)return;
  const rect=dock.querySelector('.notebook-dock-body').getBoundingClientRect();
  keyboardPosition={x:Math.max(8,Math.min(keyboardPosition.x,window.innerWidth-rect.width-8)),y:Math.max(8,Math.min(keyboardPosition.y,window.innerHeight-rect.height-8))};
  dock.dataset.gmPositioned='';
  dock.style.setProperty('inset',keyboardPosition.y+'px auto auto '+keyboardPosition.x+'px','important');
  dock.style.setProperty('transform','none','important');
 }
 function dragKeyboard(event){
  const handle=event.target.closest('.gm-keyboard-handle');
  if(!handle||event.button>0||event.isPrimary===false)return;
  event.preventDefault();event.stopPropagation();
  const rect=dock.querySelector('.notebook-dock-body').getBoundingClientRect();
  keyboardPosition={x:rect.left,y:rect.top};keyboardDrag={id:event.pointerId,x:event.clientX,y:event.clientY,left:rect.left,top:rect.top};
  dock.classList.add('gm-keyboard-dragging');placeKeyboard();
  handle.focus({preventScroll:true});handle.setPointerCapture?.(event.pointerId);
 }
 function moveKeyboard(event){
  if(!keyboardDrag||event.pointerId!==keyboardDrag.id)return;
  event.preventDefault();
  keyboardPosition={x:keyboardDrag.left+event.clientX-keyboardDrag.x,y:keyboardDrag.top+event.clientY-keyboardDrag.y};placeKeyboard();
 }
 function endKeyboard(event){
  if(!keyboardDrag||event.pointerId!==keyboardDrag.id)return;
  keyboardDrag=null;dock?.classList.remove('gm-keyboard-dragging');keepInputVisible();
 }
 function keyKeyboard(event){
  if(!event.target.closest('.gm-keyboard-handle'))return;
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(event.key))return;
  event.preventDefault();event.stopPropagation();
  if(event.key==='Home'){keyboardPosition=null;dock.removeAttribute('data-gm-positioned');dock.style.removeProperty('inset');dock.style.removeProperty('transform');keepInputVisible();return;}
  const rect=dock.querySelector('.notebook-dock-body').getBoundingClientRect(),step=event.shiftKey?30:10;
  keyboardPosition={x:rect.left+(event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0),y:rect.top+(event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0)};
  placeKeyboard();
 }
 host.addEventListener('pointerdown',dragKeyboard,true);host.addEventListener('keydown',keyKeyboard,true);
 document.addEventListener('pointermove',moveKeyboard,{passive:false});document.addEventListener('pointerup',endKeyboard);document.addEventListener('pointercancel',endKeyboard);
 window.addEventListener('resize',placeKeyboard);
 const keyboardResize=typeof ResizeObserver==='function'?new ResizeObserver(placeKeyboard):null;

 const protectComparisonClick=event=>{if(event.target.closest('.gm-keyboard-handle')||event.target.closest('.gm-comparison-floating')&&!event.target.closest('[data-nb-action]'))event.stopPropagation();};host.addEventListener('click',protectComparisonClick,true);
 host.addEventListener('pointerdown',dragComparison,true);host.addEventListener('keydown',keyComparison,true);document.addEventListener('pointermove',moveComparison);document.addEventListener('pointerup',endComparison);document.addEventListener('pointercancel',endComparison);window.addEventListener('resize',placeComparison);
 let visibilityFrame=null;
 function keepInputVisible(){
  if(visibilityFrame!==null)return;
  const schedule=window.requestAnimationFrame||((fn)=>setTimeout(fn,0));
  visibilityFrame=schedule(()=>{visibilityFrame=null;if(!open||!target?.isConnected)return;
   const panel=dock?.querySelector('.notebook-dock-body');if(!panel||panel.hidden)return;
   const field=target.getBoundingClientRect(),keyboard=panel.getBoundingClientRect();
   if(field.right<=keyboard.left||field.left>=keyboard.right||field.bottom<=keyboard.top-12||field.top>=keyboard.bottom)return;
   const dy=field.bottom-keyboard.top+16,dialog=host.closest('.nb-factor-dialog');
   if(dialog)dialog.scrollBy?.({top:dy,behavior:'auto'});else window.scrollBy?.({top:dy,behavior:'auto'});
  });
 }
 function apply(){if(open)keepInputVisible();updateEditTools();host.classList.toggle('notebook-dock-open',open);if(dock){dock.querySelector('.notebook-dock-toggle').setAttribute('aria-expanded',String(open));dock.querySelector('.notebook-dock-body').hidden=!open;if(open)placeKeyboard();}}
 function updateEditTools(){if(!dock)return;const selected=!!host.querySelector('.nb-selected')||!!(target?.isConnected&&target.selectionStart!==target.selectionEnd);dock.querySelectorAll('[data-gm-edit="cut"],[data-gm-edit="copy"]').forEach(button=>button.hidden=!selected);dock.querySelectorAll('[data-gm-command="undo"],[data-gm-command="redo"]').forEach(button=>{button.hidden=selected;button.disabled=!host.querySelector('[data-nb-action="'+button.dataset.gmCommand+'"]:not(:disabled),[data-fn-action="'+button.dataset.gmCommand+'"]:not(:disabled)');});}
 function focus(e){if(!numeric(e.target))return;target=e.target;const key=target.dataset.fnField||target.dataset.nbSlot||target.getAttribute('aria-label')||target.name||target.id;if(key!==lastKey){open=true;lastKey=key;}apply();if(target.dataset.factorExponent&&target.value==='1')target.select();}
 async function click(e){
  const command=e.target.closest('[data-gm-command]');
  if(command){if(command.disabled)return;const cmd=command.dataset.gmCommand,val=command.dataset.value;
   const forward=selector=>{const button=host.querySelector('.gm-source-keys '+selector);if(button&&!button.disabled){button.click();return true;}return false;};
   if(cmd==='digit'){if(forward('[data-nb-key="'+val+'"],[data-fn-action="digit"][data-key="'+val+'"]'))return;const input=target;if(input?.isConnected){const a=input.selectionStart??input.value.length,b=input.selectionEnd??a;input.value=(input.value.slice(0,a)+val+input.value.slice(b)).slice(0,input.maxLength>0?input.maxLength:144);input.dispatchEvent(new Event('input',{bubbles:true}));input.focus({preventScroll:true});input.setSelectionRange(a+1,a+1);}return;}
   if(cmd==='insert'){if(host.classList.contains('nb-notebook')){const proxy=document.createElement('button');proxy.dataset.nbAction='insert';host.append(proxy);proxy.click();proxy.remove();}else host.querySelector('[data-fn-action="insert"]')?.click();return;}
   if(cmd==='fraction'){forward('[data-nb-action="fraction"]');return;}
   if(cmd==='power'){forward('[data-fn-action="power"]');return;}
   if(cmd==='operator'){if(val==='·'&&forward('[data-fn-action="factor"]'))return;const original=host.querySelector('.gm-source-keys [data-nb-action="key"]');if(original){const proxy=document.createElement('button');proxy.dataset.nbAction='key';proxy.dataset.nbKey=val;host.append(proxy);proxy.click();proxy.remove();}return;}
   if(cmd==='arrow'){if(target?.isConnected){target.focus({preventScroll:true});target.dispatchEvent(new KeyboardEvent('keydown',{key:val,bubbles:true,cancelable:true}));}return;}
   if(cmd==='backspace'){if(!forward('[data-nb-action="backspace"],[data-fn-action="backspace"]')&&target?.isConnected){const a=target.selectionStart??target.value.length,b=target.selectionEnd??a;target.value=target.value.slice(0,a===b?Math.max(0,a-1):a)+target.value.slice(b);target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}else if(!target?.isConnected)host.querySelector('[data-nb-action="delete"]')?.click();return;}
   if(cmd==='delete'){if(target?.isConnected){target.value='';target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}else host.querySelector('[data-nb-action="delete"]')?.click();return;}
   if(cmd==='undo'||cmd==='redo'){host.querySelector('[data-nb-action="'+cmd+'"],[data-fn-action="'+cmd+'"]')?.click();return;}
   if(cmd==='close'){if(!forward('[data-nb-action="cancel-draft"],[data-fn-action="close-entry"]')){open=false;apply();}return;}
   if(cmd==='compare'){host.querySelector('.gm-comparison')?.scrollIntoView?.({block:'nearest',behavior:'smooth'});host.querySelector('.gm-comparison button')?.focus();return;}
   if(cmd==='confirm'){if(forward('[data-nb-action="write"],[data-fn-action="confirm-direct"],[data-fn-action="confirm-number"]'))return;if(target?.isConnected){if(target.form)target.form.requestSubmit();else target.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));}return;}
  }
  const edit=e.target.closest('[data-gm-edit]')?.dataset.gmEdit;
  if(edit){if(edit==='hide'){open=false;apply();return;}const status=dock.querySelector('.gm-keyboard-status');
   const model=host.gmNotebook?.model,keys=[...new Set([...host.querySelectorAll('.nb-selected[data-nb-select]')].map(el=>el.dataset.nbSelect))];
   if(model&&((keys.length&&(edit==='copy'||edit==='cut'))||edit==='paste'&&!target?.isConnected&&window.GatitoMathClipboard)){
    const refresh=()=>{const button=document.createElement('button');button.dataset.nbAction='unselect';host.append(button);button.click();button.remove();};
    if(edit==='paste'){try{const nodes=window.GatitoMathNotebook.nodes,clone=n=>{if(n.type==='number')return nodes.num(n.value);if(n.type==='sequence'){const q=nodes.seq();q.items=n.items.map(clone);return q;}if(n.type==='fraction'){const f=nodes.frac();f.top=clone(n.top);f.bottom=clone(n.bottom);return f;}throw Error('Seleziona un numero o una frazione completa.');},row=nodes.seq();row.items=window.GatitoMathClipboard.map(clone);model.add(row);refresh();}catch(error){status.textContent=error.message;}return;}
    const roots=window.GatitoMathNotebook.nodes.selectionRoots(model.rows,keys),items=roots.map(key=>model.locate(key)?.node).filter(Boolean);window.GatitoMathClipboard=JSON.parse(JSON.stringify(items));
    const text=n=>n.type==='number'?n.value:n.type==='fraction'?'\\frac{'+text(n.top)+'}{'+text(n.bottom)+'}':n.type==='sequence'?n.items.map(text).join(''):n.value;
    try{await navigator.clipboard.writeText(items.map(text).join(''));}catch{}
    if(edit==='cut'){model.erase(roots);refresh();}else status.textContent='Copiato';return;
   }
   if(!target?.isConnected){status.textContent='Seleziona prima una casella da modificare.';return;}try{const a=target.selectionStart??0,b=target.selectionEnd??target.value.length,selected=target.value.slice(a,b)||target.value;if(edit==='copy'||edit==='cut'){await navigator.clipboard.writeText(selected);if(edit==='copy'){status.textContent='Copiato';return;}target.value=a===b?'':target.value.slice(0,a)+target.value.slice(b);}else{const text=(await navigator.clipboard.readText()).trim();if(!/^\d*$/.test(text)){status.textContent='In questa casella puoi incollare solo numeri.';return;}target.value=(target.value.slice(0,a)+text+target.value.slice(b)).slice(0,target.maxLength>0?target.maxLength:144);}target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}catch{status.textContent='Usa Ctrl+C, Ctrl+X o Ctrl+V nella casella.';}return;}
  const arrow=e.target.closest('[data-gm-arrow]')?.dataset.gmArrow;if(arrow){if(target?.isConnected){target.focus({preventScroll:true});target.dispatchEvent(new KeyboardEvent('keydown',{key:arrow,bubbles:true,cancelable:true}));}return;}
  if(e.target.closest('.notebook-dock-toggle')){open=!open;if(open&&!target?.isConnected){const insert=host.querySelector('[data-nb-action=insert],[data-fn-action=insert]');if(insert){insert.click();return;}}apply();return;}const key=e.target.closest('[data-dock-key]')?.dataset.dockKey;if(!key||!target?.isConnected)return;
  if(key==='enter'){if(target.form)target.form.requestSubmit();else target.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));return;}
  const a=target.selectionStart??target.value.length,b=target.selectionEnd??a;
  target.value=key==='⌫'?target.value.slice(0,a===b?Math.max(0,a-1):a)+target.value.slice(b):target.value.slice(0,a)+key+target.value.slice(b);
  target.value=target.value.slice(0,target.maxLength>0?target.maxLength:144);target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});const pos=key==='⌫'?Math.max(0,a-1):a+1;target.setSelectionRange(pos,pos);
 }
 const selectionChange=()=>updateEditTools();document.addEventListener('selectionchange',selectionChange);
 const pointer=e=>{if(e.target.closest('.notebook-dock button'))e.preventDefault();};
 host.addEventListener('focusin',focus);host.addEventListener('click',click);host.addEventListener('pointerdown',pointer);
 return {sync,open(){open=true;apply();},dispose(){keyboardResize?.disconnect();host.removeEventListener('pointerdown',dragKeyboard,true);host.removeEventListener('keydown',keyKeyboard,true);document.removeEventListener('pointermove',moveKeyboard);document.removeEventListener('pointerup',endKeyboard);document.removeEventListener('pointercancel',endKeyboard);window.removeEventListener('resize',placeKeyboard);host.removeEventListener('click',protectComparisonClick,true);host.removeEventListener('pointerdown',dragComparison,true);host.removeEventListener('keydown',keyComparison,true);document.removeEventListener('pointermove',moveComparison);document.removeEventListener('pointerup',endComparison);document.removeEventListener('pointercancel',endComparison);window.removeEventListener('resize',placeComparison);document.removeEventListener('selectionchange',selectionChange);dock?.remove();host.removeEventListener('focusin',focus);host.removeEventListener('click',click);host.removeEventListener('pointerdown',pointer);}};
}};











