/* Contextual factor notebook; every opening starts with a fresh worksheet. */
window.GatitoNotebookFactorTools=(()=>{
 'use strict';
 function open({mode='mcd',numbers=[],onReturn,onClose,floating=false}={}){
  const name=mode==='mcm'?'mcm':'MCD',dialog=document.createElement(floating?'div':'dialog');
  dialog.className='nb-factor-dialog'+(floating?' nb-factor-floating':'');if(floating){dialog.setAttribute('role','dialog');dialog.open=true;}dialog.setAttribute('aria-label','Quaderno del '+name);
  const heading=document.createElement('header'),title=document.createElement('h2');
  title.textContent='Quaderno del '+name;
  
  const workspace=document.createElement('div'),actions=document.createElement('nav'),back=document.createElement('button'),use=document.createElement('button');
  workspace.className='nb-factor-workspace';actions.className='nb-factor-navigation';actions.setAttribute('aria-label','Azioni del laboratorio');back.type=use.type='button';back.textContent='Torna alle frazioni';use.textContent='Riporta risultato';use.title='Riporta il risultato nel quaderno';use.className='nb-factor-use';use.disabled=true;actions.append(back,use);heading.append(title,actions);dialog.append(heading,workspace);document.body.append(dialog);
  let notebook,disposed=false;
  const handle={isOpen:()=>dialog.open,dispose(){if(disposed)return;disposed=true;notebook?.dispose();if(!floating)dialog.close();dialog.remove();}};
  function finish(){handle.dispose();onClose?.();}
  try{notebook=window.GatitoFactorNotebook.mount(workspace,{mode,initial:numbers,allowInsert:false,onResult:result=>{use.disabled=!result;}});}catch(error){handle.dispose();throw error;}
  back.onclick=finish;
  use.onclick=()=>{const result=notebook.getResult();if(!result)return;handle.dispose();onReturn?.(result);onClose?.();};
  dialog.addEventListener('cancel',event=>{event.preventDefault();finish();});
  dialog.addEventListener('close',()=>{if(!disposed)finish();});
  if(floating){let drag;heading.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;const r=dialog.getBoundingClientRect();drag={x:e.clientX,y:e.clientY,left:r.left,top:r.top};heading.setPointerCapture(e.pointerId);});heading.addEventListener('pointermove',e=>{if(!drag)return;dialog.style.left=Math.max(0,Math.min(innerWidth-80,drag.left+e.clientX-drag.x))+'px';dialog.style.top=Math.max(0,Math.min(innerHeight-50,drag.top+e.clientY-drag.y))+'px';});heading.addEventListener('pointerup',()=>drag=null);}else dialog.showModal();back.focus({preventScroll:true});return handle;
 }
 return{open};
})();


