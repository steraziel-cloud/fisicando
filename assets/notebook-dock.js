/* One stable, touch-sized keypad per notebook; no physical keyboard required. */
window.GatitoNotebookDock={mount(host){
 let open=false,target=null,lastKey='',dock=null;
 const numeric=t=>t?.matches('input[inputmode="numeric"]')&&!t.disabled;
 function sync(){
  const palette=host.querySelector('.nb-keypad,.fn-keypad'),paper=host.querySelector('.nb-paper,.fn-paper');
  let content=paper?.querySelector(':scope > .notebook-sheet-content');if(paper&&!content){content=document.createElement('div');content.className='notebook-sheet-content';for(const child of [...paper.childNodes])if(!child.classList?.contains('notebook-dock'))content.append(child);paper.prepend(content);}
  dock=host.querySelector('.notebook-dock');
  if(!dock){dock=document.createElement('aside');dock.className='notebook-dock';dock.setAttribute('aria-label','Tastierino del quaderno');(host.querySelector('.nb-paper,.fn-paper')||host).append(dock);}
  dock.innerHTML='<button type="button" class="notebook-dock-toggle" aria-label="Apri o chiudi tastierino">⌨</button><div class="notebook-dock-body"></div>';
  const body=dock.lastElementChild;
  if(palette)body.append(palette);
  else {body.innerHTML='<div class="notebook-dock-digits">'+['7','8','9','4','5','6','1','2','3','0','⌫'].map(k=>'<button type="button" data-dock-key="'+k+'">'+(k==='⌫'?'Canc':k)+'</button>').join('')+'</div><button type="button" data-dock-key="enter">✓ Conferma</button>';}
  if(paper){paper.classList.add('notebook-sheet-docked');const toolbar=host.querySelector(':scope > .fn-toolbar');if(toolbar)content.prepend(toolbar);}host.classList.add('notebook-docked');apply();
 }
 function apply(){host.classList.toggle('notebook-dock-open',open);if(dock){dock.querySelector('.notebook-dock-toggle').setAttribute('aria-expanded',String(open));dock.querySelector('.notebook-dock-body').hidden=!open;}}
 function focus(e){if(!numeric(e.target))return;target=e.target;const key=target.dataset.fnField||target.dataset.nbSlot||target.getAttribute('aria-label')||target.name||target.id;if(key!==lastKey){open=true;lastKey=key;}apply();if(target.dataset.factorExponent&&target.value==='1')target.select();}
 function click(e){if(e.target.closest('.notebook-dock-toggle')){open=!open;apply();return;}const key=e.target.closest('[data-dock-key]')?.dataset.dockKey;if(!key||!target?.isConnected)return;
  if(key==='enter'){if(target.form)target.form.requestSubmit();else target.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));return;}
  const a=target.selectionStart??target.value.length,b=target.selectionEnd??a;
  target.value=key==='⌫'?target.value.slice(0,a===b?Math.max(0,a-1):a)+target.value.slice(b):target.value.slice(0,a)+key+target.value.slice(b);
  target.value=target.value.slice(0,target.maxLength>0?target.maxLength:144);target.dispatchEvent(new Event('input',{bubbles:true}));target.focus({preventScroll:true});const pos=key==='⌫'?Math.max(0,a-1):a+1;target.setSelectionRange(pos,pos);
 }
 const pointer=e=>{if(e.target.closest('.notebook-dock button'))e.preventDefault();};
 host.addEventListener('focusin',focus);host.addEventListener('click',click);host.addEventListener('pointerdown',pointer);
 return {sync,open(){open=true;apply();},dispose(){host.removeEventListener('focusin',focus);host.removeEventListener('click',click);host.removeEventListener('pointerdown',pointer);}};
}};

