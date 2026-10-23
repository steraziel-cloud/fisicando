/* Contextual factor notebook; every opening starts with a fresh worksheet. */
window.GatitoNotebookFactorTools=(()=>{
 'use strict';
 function open({mode='mcd',numbers=[],onReturn,onClose}={}){
  const name=mode==='mcm'?'mcm':'MCD',dialog=document.createElement('dialog');
  dialog.className='nb-factor-dialog';dialog.setAttribute('aria-label','Quaderno del '+name);
  const heading=document.createElement('header'),title=document.createElement('h2'),close=document.createElement('button');
  title.textContent='Quaderno del '+name;close.type='button';close.textContent='×';close.setAttribute('aria-label','Torna alle frazioni');
  heading.append(title,close);
  const intro=document.createElement('p');intro.className='nb-factor-purpose';intro.textContent=mode==='mcm'?'Calcola il mcm dei denominatori per trovare un denominatore comune.':'Calcola il MCD del numeratore e del denominatore per ridurre la frazione.';
  const workspace=document.createElement('div'),footer=document.createElement('footer'),back=document.createElement('button'),use=document.createElement('button');
  workspace.className='nb-factor-workspace';back.type=use.type='button';back.textContent='Torna alle frazioni';use.textContent='Riporta il risultato nel quaderno';use.className='nb-factor-use';use.disabled=true;footer.append(back,use);dialog.append(heading,intro,workspace,footer);document.body.append(dialog);
  let notebook,disposed=false;
  const handle={isOpen:()=>dialog.open,dispose(){if(disposed)return;disposed=true;notebook?.dispose();dialog.close();dialog.remove();}};
  function finish(){handle.dispose();onClose?.();}
  try{notebook=window.GatitoFactorNotebook.mount(workspace,{mode,initial:numbers,onResult:result=>{use.disabled=!result;}});}catch(error){handle.dispose();throw error;}
  close.onclick=back.onclick=finish;
  use.onclick=()=>{const result=notebook.getResult();if(!result)return;handle.dispose();onReturn?.(result);onClose?.();};
  dialog.addEventListener('cancel',event=>{event.preventDefault();finish();});
  dialog.addEventListener('close',()=>{if(!disposed)finish();});
  dialog.showModal();close.focus({preventScroll:true});return handle;
 }
 return{open};
})();
