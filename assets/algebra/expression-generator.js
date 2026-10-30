/* Random literal expressions made from the notebook's guided monomial tools.
   No exercise bank and no displayed answers. Composite polynomial products,
   division and literal denominators wait for their corresponding tools. */
window.GatitoExpressionGenerator=(()=>{
 'use strict';
 const int=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),pick=a=>a[int(0,a.length-1)],shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=int(0,i);[a[i],a[j]]=[a[j],a[i]];}return a;},bags=new Map(),recent=[];
 const settings={base:{letters:1,power:2,coefficient:5,fractions:false,terms:4,factors:2},medio:{letters:2,power:3,coefficient:5,fractions:true,terms:5,factors:2},avanzato:{letters:2,power:4,coefficient:6,fractions:true,terms:7,factors:3},nightmare:{letters:3,power:5,coefficient:7,fractions:true,terms:9,factors:3}};
 function generate(level='base'){
  if(!settings[level])level='base';const cfg=settings[level],E=window.ExpressionMath,M=window.GatitoExpressionMonomials;
  let bag=bags.get(level);if(!bag?.length){bag=shuffle(['sums','products','powers','mixed']);bags.set(level,bag);}const kind=bag.pop();
  for(let attempt=0;attempt<100;attempt++)try{
   const alphabet=pick(['xyz','abc','mnp']),names=alphabet.slice(0,cfg.letters).split(''),part=()=>Object.fromEntries(names.slice(0,int(1,names.length)).map(v=>[v,int(1,level==='base'?2:3)])),coefficient=()=>{const n=int(1,cfg.coefficient),d=cfg.fractions&&Math.random()<.6?pick([2,3,4,5,6]):1;return{n:n*(Math.random()<.45?-1:1),d};},literal=p=>Object.keys(p).sort().map(v=>v+(p[v]===1?'':'^'+p[v])).join(''),monomial=(p,c=coefficient())=>(c.n<0?'-':'')+(c.d!==1?'('+Math.abs(c.n)+'/'+c.d+')':Math.abs(c.n)===1?'':Math.abs(c.n))+literal(p),join=terms=>terms.map((s,i)=>s.startsWith('-')?(i?' − ':'-')+s.slice(1):(i?' + ':'')+s).join('');
   const product=()=>{const parts=Array.from({length:cfg.factors},part),powers={};for(const p of parts)for(const v in p)powers[v]=(powers[v]||0)+p[v];return{source:parts.map(p=>'('+monomial(p)+')').join(' · '),powers};},power=()=>{const p=part(),n=int(2,cfg.power);return{source:'('+monomial(p)+')^'+n,powers:Object.fromEntries(Object.entries(p).map(([v,e])=>[v,e*n]))};};
   let source;
   if(kind==='sums'){const a=part(),b={...a};b[names[0]]=(b[names[0]]||0)+1;source=join(shuffle(Array.from({length:cfg.terms},(_,i)=>monomial(i%3===0?b:a))));}
   else if(kind==='products'){const a=product();source=level==='base'?a.source:join([a.source,monomial(a.powers),monomial(part())]);}
   else if(kind==='powers'){const a=power();source=level==='base'?a.source:join([a.source,monomial(a.powers),monomial(part())]);}
   else{const a=product(),b=power(),terms=[a.source,b.source,monomial(a.powers),monomial(b.powers)];if(level==='avanzato'||level==='nightmare')terms.push(monomial(part()));if(level==='nightmare'){const c=power();terms.push(c.source,monomial(c.powers));}source=join(shuffle(terms));}
   if(recent.includes(source))continue;const tree=E.parse(source);E.validate(tree);if(!E.hasVariables(tree)||!M.equivalent(tree,tree,E))continue;recent.push(source);if(recent.length>80)recent.shift();return{source,tree,kind};
  }catch{}
  throw Error('Non sono riuscito a generare una nuova espressione letterale. Riprova.');
 }
 return{generate};
})();
