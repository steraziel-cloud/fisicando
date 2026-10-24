document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search),level=['medie','biennio'].includes(params.get('livello'))?params.get('livello'):'medie';
 document.getElementById('fraction-back').href='lezioni.html?livello='+level;
 document.getElementById('fraction-theory').href='reader.html?lezione=razionali-assoluti-insieme&livello='+level;
 const workspaces=new Map();
 function activate(mode){
  const selected=mode==='confronto'?'confronto':'semplificazioni';
  document.querySelectorAll('[data-fraction-mode]').forEach(button=>{const active=button.dataset.fractionMode===selected;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  document.querySelectorAll('[data-fraction-panel]').forEach(panel=>{panel.hidden=panel.dataset.fractionPanel!==selected;});
  if(!workspaces.has(selected))workspaces.set(selected,window.GatitoMathNotebook.mount(document.querySelector('[data-fraction-panel="'+selected+'"]'),selected==='confronto'?{comparison:{fractions:[],free:true}}:{}));
  window.dispatchEvent(new Event('resize'));
 }
 const tabs=[...document.querySelectorAll('[data-fraction-mode]')];
 tabs.forEach((button,index)=>{
  button.addEventListener('click',()=>activate(button.dataset.fractionMode));
  button.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;activate(tabs[next].dataset.fractionMode);tabs[next].focus();});
 });
 activate(params.get('attivita'));
 window.addEventListener('pageshow',event=>{if(event.persisted){workspaces.forEach(notebook=>notebook.dispose());workspaces.clear();activate(document.querySelector('[aria-selected="true"]').dataset.fractionMode);}});
});
