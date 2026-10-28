/* One algebra notebook, reachable from both middle school and high school. */
(()=>{
 const lesson='espressioni-letterali-frazioni-algebriche',params=new URLSearchParams(location.search),requested=params.get('livello'),level=['medie','biennio'].includes(requested)?requested:'medie';
 const [back,theory]=document.querySelectorAll('main>nav a');
 window.GatitoLabNavigation.bind(back,theory,{lesson,level});
 const materials=new URL(back.href);materials.searchParams.set('lezione',lesson);materials.searchParams.set('livello',level);materials.hash='lesson-options';
 theory.href=materials.href;theory.textContent='Lezione ed esercizi';
})();
