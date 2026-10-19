/* Shared quiz reactions: feedback stays readable and motion is brief. */
window.GatitoQuizReactions=(()=>{
 const names={success:'red_successo_6frame',trophy:'red_primo_posto',thinking:'red_buffer_spinner_fronte_grigio_destra_basso',surprised:'red_mente_esplosa_shaking_da_frame',morganaOttimo:'morgana_ottimo_v2',morganaAura:'morgana_aura_v2',morganaFacepaw:'morgana_facepaw',morganaConcentrazione:'morgana_concentrazione',bjorneFesteggiamento:'bjorne_festeggiamento',bjorneDubbio:'bjorne_dubbio',bjorneScatolina:'bjorne_scatolina',bjorneRiprova:'bjorne_riprova'};
 const positiveNames=['success','morganaOttimo','bjorneFesteggiamento','trophy','morganaAura','bjorneScatolina'],finalNames=['trophy','morganaAura','bjorneFesteggiamento','bjorneScatolina'],negativeNames=['thinking','morganaConcentrazione','bjorneDubbio','surprised','morganaFacepaw','bjorneRiprova'];
 const imageRoot=new URL('images/reactions/',document.currentScript?.src||new URL('assets/reader-reactions.js',document.baseURI)).href;
 const cached=new Map(),animationFiles=new Map(),playback=new WeakMap();
 const onceNames=new Set(['bjorne_scatolina','bjorne_riprova','morgana_ottimo_v2','morgana_aura_v2']);
 function animationFile(src){if(!animationFiles.has(src))animationFiles.set(src,fetch(src,{cache:'force-cache'}).then(response=>{if(!response.ok)throw Error('Reaction unavailable');return response.blob();}).catch(error=>{animationFiles.delete(src);throw error;}));return animationFiles.get(src);}
 function release(target){const src=playback.get(target);if(src)URL.revokeObjectURL(src);playback.delete(target);}
 const url=(name,still=false)=>imageRoot+name+(still?'-still':'')+'-quiz.webp';
 function preload(src){if(!cached.has(src)){const img=new Image();img.decoding='async';img.src=src;cached.set(src,img);}return cached.get(src);}
 function warm(){const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,jobs=Object.values(names).flatMap(name=>[{src:url(name,true),blob:false},...(reduced?[]:[{src:url(name),blob:onceNames.has(name)}])]);let i=0;function next(){if(i>=jobs.length)return;const job=jobs[i++];if(job.blob){animationFile(job.src).catch(()=>{}).finally(()=>setTimeout(next,40));return;}const img=preload(job.src);if(img.complete)setTimeout(next,40);else{img.addEventListener('load',next,{once:true});img.addEventListener('error',next,{once:true});}}next();}
 if(document.readyState==='complete')setTimeout(warm,500);else window.addEventListener('load',()=>setTimeout(warm,500),{once:true});
 const timers=new WeakMap();let positive=0,negative=0,finalPositive=0;
 function show(target,message,{correct=false,title,final=false}={}){
  clearTimeout(timers.get(target));release(target);
  const name=names[correct?(final?finalNames[finalPositive++%finalNames.length]:positiveNames[positive++%positiveNames.length]):negativeNames[negative++%negativeNames.length]];
  const still=url(name,true),animated=url(name);
  const card=document.createElement('span');card.className='rm-celebration rm-quiz-reaction'+(correct?'':' rm-quiz-reaction-retry');
  const cat=document.createElement('img');cat.className='rm-celebration-cat'+(correct&&name.startsWith('morgana_')&&!name.endsWith('_v2')?' rm-morgana-shine':'');cat.width=96;cat.height=96;cat.alt='';cat.setAttribute('aria-hidden','true');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const settle=()=>{const ready=preload(still);const freeze=()=>{if(target.contains(cat)&&ready.naturalWidth){cat.src=still;release(target);}};if(ready.complete)freeze();else ready.addEventListener('load',freeze,{once:true});};
  cat.decoding='async';cat.style.visibility='hidden';cat.onload=()=>{cat.style.visibility='';if(!reduced&&cat.getAttribute('src')!==still){clearTimeout(timers.get(target));timers.set(target,setTimeout(settle,2800));}};
  cat.onerror=()=>{if(cat.getAttribute('src')!==still)cat.src=still;else cat.style.visibility='hidden';};
  cat.src=reduced||onceNames.has(name)?still:animated;
  if(!reduced&&onceNames.has(name))animationFile(animated).then(blob=>{if(!target.contains(cat))return;const fresh=URL.createObjectURL(blob);playback.set(target,fresh);cat.src=fresh;}).catch(()=>{if(target.contains(cat))cat.src=still;});
  const copy=document.createElement('span');copy.className='rm-celebration-copy';
  const heading=document.createElement('strong');heading.textContent=title||(correct?'Ottimo lavoro!':'Riproviamo');
  const text=document.createElement('span');text.textContent=message;copy.append(heading,text);card.append(cat,copy);target.replaceChildren(card);

 }
 return{show};
})();



