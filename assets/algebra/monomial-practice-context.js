(()=>{
 const params=new URLSearchParams(location.search),level=params.get('livello')==='medie'?'medie':'biennio',lesson='operazioni-monomi';
 document.body.dataset.algebraLevel=level;
 const [back,theory]=document.querySelectorAll('main>nav a');window.GatitoLabNavigation.bind(back,theory,{lesson,level});
 const materials=new URL(back.href);materials.searchParams.set('lezione',lesson);materials.searchParams.set('livello',level);materials.hash='lesson-options';theory.href=materials.href;theory.textContent='Lezione ed esercizi';
})();
