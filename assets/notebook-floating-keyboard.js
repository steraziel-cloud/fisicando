/* Experimental floating keyboard, loaded only by the fractions laboratory. */
window.GatitoNotebookDock={mount(host){
 let open=false,target=null,lastKey='',dock=null;
 const numeric=t=>t?.matches('input[inputmode="numeric"]')&&!t.disabled;
 function sync(){
  const palette=host.querySelector('.nb-keypad,.fn-keypad'),paper=host.querySelector('.nb-paper,.fn-paper');
  let content=paper?.querySelector(':scope > .notebook-sheet-content');if(paper&&!content){content=document.createElement('div');content.className='notebook-sheet-content';for(const child of [...paper.childNodes])if(!child.classList?.contains('notebook-dock'))content.append(child);paper.prepend(content);}
  dock=host.querySelector('.notebook-dock');
  if(!dock){dock=document.createElement('aside');dock.className='notebook-dock gm-keyboard';dock.setAttribute('aria-label','Tastierino del quaderno');(host.querySelector('.nb-paper,.fn-paper')||host).append(dock);}
  dock.innerHTML='<button type="button" class="notebook-dock-toggle" aria-label="Apri o chiudi tastierino" title="Apri o chiudi tastierino"><span aria-hidden="true">⌨</span><span>Tastiera</span></button><div class="notebook-dock-body"><header class="gm-keyboard-header"><div><span class="gm-keyboard-eyebrow">GATITOMATH</span><strong>Scrivi sul quaderno</strong></div><div class="gm-edit-tools"><button type="button" data-gm-edit="cut" title="Taglia" aria-label="Taglia">✂</button><button type="button" data-gm-edit="copy" title="Copia" aria-label="Copia">⧉</button><button type="button" data-gm-edit="paste" title="Incolla" aria-label="Incolla">▣</button><button type="button" data-gm-edit="hide" title="Nascondi tastiera" aria-label="Nascondi tastiera">⌄</button></div></header><div class="gm-keyboard-keys"></div><span class="gm-keyboard-status" role="status"></span></div>';
  const body=dock.querySelector('.gm-keyboard-keys');
  const source=document.createElement('div');source.className='gm-source-keys';source.hidden=true;if(palette)source.append(palette);body.append(source);
  const btn=(label,command,value='',enabled=true,title=label)=>`<button type="button" data-gm-command="${command}" data-value="${value}" title="${title}" aria-label="${title}" ${enabled?'':'disabled'}>${label}</button>`;
  const has=selector=>!!source.querySelector(selector),draft=has('[data-nb-action="write"]'),factor=!!palette?.classList.contains('fn-keypad');
  const left=document.createElement('div');left.className='gm-structures';left.innerHTML=btn('↳','insert','',!!host.querySelector('[data-nb-action="insert"],[data-fn-action="insert"]'),'Inserisci')+btn('<span class="gm-frac-icon"><span>□</span><span>□</span></span>','fraction','',has('[data-nb-action="fraction"]'),'Frazione')+btn('□<sup>□</sup>','power','',has('[data-fn-action="power"]'),'Potenza');
  const center=document.createElement('div');center.className='gm-number-matrix';
  center.innerHTML=['7','8','9','÷','4','5','6','·','1','2','3','−','0','.','=','+'].map(k=>btn(k,/^\d$/.test(k)?'digit':k==='='?'compare':'operator',k,/^\d$/.test(k)?true:k==='='?host.querySelectorAll('.nb-row').length===2:k==='.'?false:draft||factor&&k==='·',k==='.'?'Separatore decimale (non disponibile nei numeri naturali)':k)).join('');
  const right=document.createElement('div');right.className='gm-controls';right.innerHTML=btn('←','arrow','ArrowLeft',true,'Sposta a sinistra')+btn('→','arrow','ArrowRight',true,'Sposta a destra')+btn('⌫','backspace','',true,'Backspace')+btn('↑','arrow','ArrowUp',true,'Sposta su')+btn('↓','arrow','ArrowDown',true,'Sposta giù')+btn('Canc','delete','',true,'Cancella selezione')+btn('↶','undo','',!!host.querySelector('[data-nb-action="undo"]:not(:disabled),[data-fn-action="undo"]:not(:disabled)'),'Annulla')+btn('×','close','',true,'Chiudi inserimento')+btn('↵','confirm','',true,'Conferma');
  const edits=dock.querySelector('.gm-edit-tools');right.append(edits);dock.querySelector('.gm-keyboard-header').remove();body.append(left,center,right);
  const answer=host.querySelector('.nb-comparison-answer');if(answer){answer.classList.add('gm-comparison');answer.hidden=host.querySelectorAll('.nb-row').length!==2;content.append(answer);}
  if(paper){paper.classList.add('notebook-sheet-docked');const toolbar=host.querySelector(':scope > .fn-toolbar');if(toolbar)content.prepend(toolbar);}host.classList.add('notebook-docked');apply();
 }
 function apply(){host.classList.toggle('notebook-dock-open',open);if(dock){dock.querySelector('.notebook-dock-toggle').setAttribute('aria-expanded',String(open));dock.querySelector('.notebook-dock-body').hidden=!open;}}
 function focus(e){if(!numeric(e.target))return;target=e.target;const key=target.dataset.fnField||target.dataset.nbSlot||target.getAttribute('aria-label')||target.name||target.id;if(key!==lastKey){open=true;lastKey=key;}apply();if(target.dataset.factorExponent&&target.value==='1')target.select();}
 async function click(e){
  const command=e.target.closest('[data-gm-command]');
  if(command){if(command.disabled)return;const cmd=command.dataset.gmCommand,val=command.dataset.value;
   const forward=selector=>{const button=host.querySelector('.gm-source-keys '+selector);if(button&&!button.disabled){button.click();return true;}return false;};
   if(cmd==='digit'){if(forward('[data-nb-key="'+val+'"],[data-fn-action="digit"][data-key="'+val+'"]'))return;const input=target;if(input?.isConnected){const a=input.selectionStart??input.value.length,b=input.selectionEnd??a;input.value=(input.value.slice(0,a)+val+input.value.slice(b)).slice(0,input.maxLength>0?input.maxLength:144);input.dispatchEvent(new Event('input',{bubbles:true}));input.focus({preventScroll:true});input.setSelectionRange(a+1,a+1);}return;}
   if(cmd==='insert'){host.querySelector('[data-nb-action="insert"],[data-fn-action="insert"]')?.click();return;}
   if(cmd==='fraction'){forward('[data-nb-action="fraction"]');return;}
   if(cmd==='power'){forward('[data-fn-action="power"]');return;}
   if(cmd==='operator'){if(val==='·'&&forward('[data-fn-action="factor"]'))return;const original=host.querySelector('.gm-source-keys [data-nb-action="key"]');if(original){const proxy=document.createElement('button');proxy.dataset.nbAction='key';proxy.dataset.nbKey=val;host.append(proxy);proxy.click();proxy.remove();}return;}
   if(cmd==='arrow'){if(target?.isConnected){target.focus({preventScroll:true});target.dispatchEvent(new KeyboardEvent('keydown',{key:val,bubbles:true,cancelable:true}));}return;}
   if(cmd==='backspace'){if(!forward('[data-nb-action="backspace"],[data-fn-action="backspace"]')&&target?.isConnected){const a=target.selectionStart??target.value.length,b=target.selectionEnd??a;target.value=target.value.slice(0,a===b?Math.max(0,a-1):a)+target.value.slice(b);target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}return;}
   if(cmd==='delete'){if(target?.isConnected){target.value='';target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}else host.querySelector('[data-nb-action="delete"]')?.click();return;}
   if(cmd==='undo'){host.querySelector('[data-nb-action="undo"],[data-fn-action="undo"]')?.click();return;}
   if(cmd==='close'){if(!forward('[data-nb-action="cancel-draft"],[data-fn-action="close-entry"]')){open=false;apply();}return;}
   if(cmd==='compare'){host.querySelector('.gm-comparison')?.scrollIntoView?.({block:'nearest',behavior:'smooth'});host.querySelector('.gm-comparison button')?.focus();return;}
   if(cmd==='confirm'){if(forward('[data-nb-action="write"],[data-fn-action="confirm-direct"],[data-fn-action="confirm-number"]'))return;if(target?.isConnected){if(target.form)target.form.requestSubmit();else target.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));}return;}
  }
  const edit=e.target.closest('[data-gm-edit]')?.dataset.gmEdit;
  if(edit){if(edit==='hide'){open=false;apply();return;}const status=dock.querySelector('.gm-keyboard-status');if(!target?.isConnected){status.textContent='Seleziona prima una casella da modificare.';return;}try{const a=target.selectionStart??0,b=target.selectionEnd??target.value.length,selected=target.value.slice(a,b)||target.value;if(edit==='copy'||edit==='cut'){await navigator.clipboard.writeText(selected);if(edit==='copy'){status.textContent='Copiato';return;}target.value=a===b?'':target.value.slice(0,a)+target.value.slice(b);}else{const text=(await navigator.clipboard.readText()).trim();if(!/^\d*$/.test(text)){status.textContent='In questa casella puoi incollare solo numeri.';return;}target.value=(target.value.slice(0,a)+text+target.value.slice(b)).slice(0,target.maxLength>0?target.maxLength:144);}target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});}catch{status.textContent='Usa Ctrl+C, Ctrl+X o Ctrl+V nella casella.';}return;}
  const arrow=e.target.closest('[data-gm-arrow]')?.dataset.gmArrow;if(arrow){if(target?.isConnected){target.focus({preventScroll:true});target.dispatchEvent(new KeyboardEvent('keydown',{key:arrow,bubbles:true,cancelable:true}));}return;}
  if(e.target.closest('.notebook-dock-toggle')){open=!open;if(open&&!target?.isConnected){const insert=host.querySelector('[data-nb-action=insert],[data-fn-action=insert]');if(insert){insert.click();return;}}apply();return;}const key=e.target.closest('[data-dock-key]')?.dataset.dockKey;if(!key||!target?.isConnected)return;
  if(key==='enter'){if(target.form)target.form.requestSubmit();else target.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));return;}
  const a=target.selectionStart??target.value.length,b=target.selectionEnd??a;
  target.value=key==='⌫'?target.value.slice(0,a===b?Math.max(0,a-1):a)+target.value.slice(b):target.value.slice(0,a)+key+target.value.slice(b);
  target.value=target.value.slice(0,target.maxLength>0?target.maxLength:144);target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});const pos=key==='⌫'?Math.max(0,a-1):a+1;target.setSelectionRange(pos,pos);
 }
 const pointer=e=>{if(e.target.closest('.notebook-dock button'))e.preventDefault();};
 host.addEventListener('focusin',focus);host.addEventListener('click',click);host.addEventListener('pointerdown',pointer);
 return {sync,open(){open=true;apply();},dispose(){host.removeEventListener('focusin',focus);host.removeEventListener('click',click);host.removeEventListener('pointerdown',pointer);}};
}};



