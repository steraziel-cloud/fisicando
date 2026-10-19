/* Shared quiz reactions: feedback stays readable and motion is brief. */
window.GatitoQuizReactions=(()=>{
 const names={success:'red_successo_6frame',trophy:'red_primo_posto',thinking:'red_buffer_spinner_fronte_grigio_destra_basso',surprised:'red_mente_esplosa_shaking_da_frame',morganaOttimo:'morgana_ottimo',morganaAura:'morgana_aura',morganaFacepaw:'morgana_facepaw',morganaConcentrazione:'morgana_concentrazione',bjorneFesteggiamento:'bjorne_festeggiamento',bjorneDubbio:'bjorne_dubbio'};
 const positiveNames=['success','morganaOttimo','bjorneFesteggiamento','trophy','morganaAura'],finalNames=['trophy','morganaAura','bjorneFesteggiamento'],negativeNames=['thinking','morganaConcentrazione','bjorneDubbio','surprised','morganaFacepaw'];
 const imageRoot=new URL('images/reactions/',document.currentScript?.src||new URL('assets/reader-reactions.js',document.baseURI)).href;
 const cached=new Map();
 const url=(name,still=false)=>imageRoot+name+(still?'-still':'')+'-quiz.webp';
 function preload(src){if(!cached.has(src)){const img=new Image();img.decoding='async';img.src=src;cached.set(src,img);}return cached.get(src);}
 function warm(){const urls=Object.values(names).flatMap(name=>[url(name,true),url(name)]);let i=0;function next(){if(i>=urls.length)return;const img=preload(urls[i++]);if(img.complete)setTimeout(next,40);else{img.addEventListener('load',next,{once:true});img.addEventListener('error',next,{once:true});}}next();}
 if(document.readyState==='complete')setTimeout(warm,500);else window.addEventListener('load',()=>setTimeout(warm,500),{once:true});
 const timers=new WeakMap();let positive=0,negative=0,finalPositive=0;
 function show(target,message,{correct=false,title,final=false}={}){
  clearTimeout(timers.get(target));
  const name=names[correct?(final?finalNames[finalPositive++%finalNames.length]:positiveNames[positive++%positiveNames.length]):negativeNames[negative++%negativeNames.length]];
  const still=url(name,true),animated=url(name);
  const card=document.createElement('span');card.className='rm-celebration rm-quiz-reaction'+(correct?'':' rm-quiz-reaction-retry');
  const cat=document.createElement('img');cat.className='rm-celebration-cat'+(correct&&name.startsWith('morgana_')?' rm-morgana-shine':'');cat.width=96;cat.height=96;cat.alt='';cat.setAttribute('aria-hidden','true');
  cat.decoding='async';cat.style.visibility='hidden';cat.onload=()=>{cat.style.visibility='';};
  cat.onerror=()=>{if(cat.getAttribute('src')!==still)cat.src=still;else cat.style.visibility='hidden';};
  cat.src=matchMedia('(prefers-reduced-motion: reduce)').matches?still:animated;
  const copy=document.createElement('span');copy.className='rm-celebration-copy';
  const heading=document.createElement('strong');heading.textContent=title||(correct?'Ottimo lavoro!':'Riproviamo');
  const text=document.createElement('span');text.textContent=message;copy.append(heading,text);card.append(cat,copy);target.replaceChildren(card);
  timers.set(target,setTimeout(()=>{const ready=preload(still);const settle=()=>{if(target.contains(cat)&&ready.naturalWidth)cat.src=still;};if(ready.complete)settle();else ready.addEventListener('load',settle,{once:true});},2800));
 }
 return{show};
})();


