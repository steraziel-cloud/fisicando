/* Shared quiz reactions: feedback stays readable and motion is brief. */
window.GatitoQuizReactions=(()=>{
 const names={success:'red_successo_6frame',trophy:'red_primo_posto',thinking:'red_buffer_spinner_fronte_grigio_destra_basso',surprised:'red_mente_esplosa_shaking_da_frame'};
 const timers=new WeakMap();let positive=0,negative=0;
 function show(target,message,{correct=false,title,final=false}={}){
  clearTimeout(timers.get(target));
  const name=names[correct?(final?'trophy':positive++%2?'trophy':'success'):negative++%2?'surprised':'thinking'];
  const src='assets/images/reactions/'+name;
  const card=document.createElement('span');card.className='rm-celebration rm-quiz-reaction'+(correct?'':' rm-quiz-reaction-retry');
  const cat=document.createElement('img');cat.className='rm-celebration-cat';cat.width=96;cat.height=96;cat.alt='';cat.setAttribute('aria-hidden','true');
  cat.src=src+(matchMedia('(prefers-reduced-motion: reduce)').matches?'-still.webp':'.webp')+'?v=2';
  const copy=document.createElement('span');copy.className='rm-celebration-copy';
  const heading=document.createElement('strong');heading.textContent=title||(correct?'Ottimo lavoro!':'Riproviamo');
  const text=document.createElement('span');text.textContent=message;copy.append(heading,text);card.append(cat,copy);target.replaceChildren(card);
  timers.set(target,setTimeout(()=>{if(target.contains(cat))cat.src=src+'-still.webp?v=2';},2800));
 }
 return{show};
})();
