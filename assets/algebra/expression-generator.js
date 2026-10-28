/* Exercise families inspired by the progression of the Matematika fraction worksheet.
   Construct relationships (equal bases, small quotients and fraction splits),
   then validate exact rational values. No exercise or answer bank is used. */
window.GatitoExpressionGenerator=(()=>{
 const integer=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
 const pick=a=>a[integer(0,a.length-1)];
 const kinds=['operations','powers','nested'],bags=new Map();let last='';
 function nextKind(level,mixed){const key=level+':'+mixed;let bag=bags.get(key);if(!bag?.length){bag=[...kinds];for(let i=bag.length-1;i>0;i--){const j=integer(0,i);[bag[i],bag[j]]=[bag[j],bag[i]];}bags.set(key,bag);}return bag.pop();}
 function generate(level='base',mixed=false){
  const E=window.ExpressionMath;if(!['base','medio','avanzato','nightmare'].includes(level))level='base';
  const kind=nextKind(level,mixed),ratio=()=>[integer(1,7),pick([2,3,4,5,6,8,9,10,12])],small=()=>pick([[1,2],[2,3],[3,4],[4,5],[2,5],[3,2]]);
  const reduced=([n,d])=>{const g=Number(E.gcd(BigInt(n),BigInt(d)));return[n/g,d/g];};
  function decimal(pair){let [n,d]=reduced(pair),whole=Math.floor(n/d),remainder=n%d,digits='',seen=new Map();while(remainder&&!seen.has(remainder)&&digits.length<6){seen.set(remainder,digits.length);remainder*=10;digits+=Math.floor(remainder/d);remainder%=d;}if(!digits)return String(whole);if(!remainder)return whole+','+digits;if(seen.has(remainder)){const cut=seen.get(remainder);return whole+','+digits.slice(0,cut)+'('+digits.slice(cut)+')';}return null;}
  function text(pair){if(mixed&&Math.random()<.45){const value=decimal(pair);if(value!==null)return value;}return pair[1]===1?String(pair[0]):pair[0]+'/'+pair[1];}
  const fractionText=p=>p[1]===1?String(p[0]):p[0]+'/'+p[1];
  const atom=()=>text(ratio()),base=()=>text(small()),pow=(b,n)=>'('+b+')^'+n;
  function split(pair){const [n,d]=reduced(pair),scale=integer(2,4),total=n*scale,p=integer(1,total-1);return fractionText(reduced([p,d*scale]))+' + '+fractionText(reduced([total-p,d*scale]));}
  function operations(){const [a,b,c,d,e,f,g,h,i,j,k,l,m,n]=Array.from({length:14},atom);
   if(level==='base')return pick([a+' + '+b+' · '+c,a+' − '+b+' + '+c,a+' ÷ ('+b+') + '+c,'('+a+' + '+b+') · '+c]);
   if(level==='medio')return pick(['['+a+' + '+b+'] · ['+c+' + '+d+']','('+a+' − '+b+') ÷ ('+c+') + '+d,'['+a+' + '+b+'] · ('+c+')^2','('+a+' + '+b+') − ('+c+' · '+d+') + '+e]);
   if(level==='avanzato')return pick(['{['+a+' + '+b+'] · ('+c+')^2 − ('+d+' − '+e+')} ÷ ('+f+') + '+g,'[('+a+' + '+b+') ÷ ('+c+') − '+d+'] · ('+e+' + '+f+') + '+g,'('+a+' − '+b+' + '+c+') · ('+d+' + '+e+') − ('+f+' ÷ ('+g+'))']);
   return pick([
    '{[('+a+' + '+b+') · ('+c+')^2 − ('+d+') · ('+e+')] ÷ ['+f+' + ('+g+')^2] + ('+h+' − '+i+')} · [('+j+' + '+k+') ÷ ('+l+')] + ('+m+')^3 + '+n,
    '{[('+a+' + '+b+' + '+c+') · ('+d+')^2 − ('+e+') · ('+f+')] ÷ [('+g+' + '+h+') ÷ ('+i+') + ('+j+')^2]} + [('+k+' − '+l+') · ('+m+' + '+n+')]',
    '{[('+a+' + '+b+') ÷ ('+c+') + ('+d+')^2] · ['+e+' + '+f+' − '+g+']} − [('+h+' + '+i+') · ('+j+')^2 ÷ ('+k+')] + [('+l+')^3 + '+m+' + '+n+']'
   ]);
  }
  function powers(){const b=base(),c=base(),d=base(),p=integer(2,4),q=integer(2,4),r=integer(2,3),s=integer(2,4),t=integer(2,3),u=integer(2,5),v=integer(2,5);
   if(level==='base')return pick([pow(b,integer(1,3))+' · '+pow(b,integer(1,3)),pow(b,p+q)+' ÷ '+pow(b,p)]);
   if(level==='medio')return pick(['['+pow(b,p)+']^'+r+' ÷ '+pow(b,p*r-1),'['+pow(b,p)+' · '+pow(b,q)+'] ÷ '+pow(b,p+q-2)]);
   if(level==='avanzato'){const [n,den]=small(),original=text([n,den]),squared=text([n*n,den*den]);return pick(['['+pow(b,p)+' · '+pow(b,q)+']^'+r+' ÷ '+pow(b,(p+q)*r-2),pow(squared,p)+' · '+pow(original,q)+' ÷ '+pow(original,2*p+q-2),'['+pow(b,p+q)+' ÷ '+pow(b,p)+']^'+r+' · '+pow(b,1)+' ÷ '+pow(b,q*r-1)]);}
   return pick([
    '{['+pow(b,p)+' · '+pow(b,q)+']^'+r+' ÷ ['+pow(b,p+q-1)+']^'+r+'} · {['+pow(c,s)+']^'+t+' ÷ '+pow(c,s*t-2)+'} + ['+pow(d,u)+' · '+pow(d,v)+'] ÷ '+pow(d,u+v-1),
    '{['+pow(b,p+q)+' ÷ '+pow(b,p)+']^'+r+' · '+pow(b,2)+'} ÷ ['+pow(b,q)+']^'+r+' + {['+pow(c,s)+' · '+pow(c,t)+']^2 ÷ '+pow(c,2*(s+t)-1)+'} · ['+pow(d,u+v)+' ÷ '+pow(d,u)+' ÷ '+pow(d,v-1)+']'
   ]);
  }
  function nested(){const a=small(),b=small(),c=small(),d=small(),e=small(),f=small();
   if(level==='base')return '('+fractionText(a)+')/('+text(b)+')';
   if(level==='medio')return pick(['('+split(a)+')/('+text(b)+') + '+atom(),'('+text(a)+')/('+split(b)+') · ('+atom()+')']);
   if(level==='avanzato')return pick(['('+split(a)+')/('+split(b)+') + [('+text(c)+') · ('+text(d)+')]','[('+split(a)+')/('+split(b)+')] ÷ [('+text(c)+')/('+text(d)+')] + '+atom()]);
   return pick([
    '{[('+split(a)+')/('+split(b)+')] + [('+split(c)+')/('+split(d)+')]} / {[('+split(e)+')/('+split(f)+')] + ('+atom()+')^2} + ('+atom()+')^2',
    '{[('+split(a)+')/('+split(b)+')] · [('+split(c)+')/('+split(d)+')]} ÷ [('+split(e)+')/('+split(f)+')] + [('+atom()+')^2 + ('+atom()+')^3]'
   ]);
  }
  for(let attempt=0;attempt<200;attempt++)try{const source=({operations,powers,nested}[kind])(),tree=E.parse(source),value=E.evaluate(tree);if(source===last||value.n.toString().replace('-','').length>9||value.d.toString().length>9)continue;last=source;return{source,tree,kind};}catch{}
  throw Error('Non sono riuscito a generare una nuova espressione. Riprova.');
 }
 return{generate};
})();
