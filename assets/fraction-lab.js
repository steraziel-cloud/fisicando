document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search),level=['medie','biennio'].includes(params.get('livello'))?params.get('livello'):'medie';
 document.getElementById('fraction-back').href='lezioni.html?livello='+level;
 document.getElementById('fraction-theory').href='reader.html?lezione=razionali-assoluti-insieme&livello='+level;
 let notebook;
 function fresh(){notebook?.dispose();notebook=window.GatitoMathNotebook.mount(document.getElementById('fraction-workspace'),{liveEntry:true,comparison:{fractions:[],free:true,selectionOnly:true}});document.querySelector('#fraction-workspace > .nb-notebook').gmNotebook=notebook;}
 fresh();
 window.addEventListener('pageshow',event=>{if(event.persisted)fresh();});
});



