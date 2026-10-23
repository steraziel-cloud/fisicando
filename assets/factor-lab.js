document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search),level=['medie','biennio'].includes(params.get('livello'))?params.get('livello'):'medie',mode=params.get('operazione')==='mcm'?'mcm':'mcd';
 const name=mode==='mcd'?'M.C.D.':'m.c.m.';
 document.title='GatitoMath – Quaderno del '+name;document.getElementById('fn-lab-title').textContent='Il quaderno del '+name;
 document.getElementById('fn-back').href='lezioni.html?livello='+level;
 document.getElementById('fn-theory').href='reader.html?lezione=aritmetica-'+mode+'&livello='+level;
 try{localStorage.removeItem('gatitomath-factor-notebook-v1');}catch{}
 let notebook;
 const fresh=()=>{notebook?.dispose();notebook=window.GatitoFactorNotebook.mount(document.getElementById('factor-workspace'),{mode});};
 fresh();
 window.addEventListener('pageshow',event=>{if(event.persisted)fresh();});
});

