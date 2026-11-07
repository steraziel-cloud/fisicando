/* Dedicated single-operation practice; the general algebra generator is unchanged. */
window.GatitoMonomialPractice=(()=>{
 'use strict';
 const kinds=['sum','difference','product','power','quotient'],recent=[],bags=new Map();
 const int=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),pick=a=>a[int(0,a.length-1)];
 function generate(level='base',requested='random'){
  const E=window.ExpressionMath,M=window.GatitoExpressionMonomials,cfg={base:[1,2,5],medio:[2,3,8],avanzato:[3,5,12]}[level]||[1,2,5];
  let kind=requested;if(!kinds.includes(kind)){let bag=bags.get(level);if(!bag?.length){bag=[...kinds];for(let i=bag.length-1;i>0;i--){const j=int(0,i);[bag[i],bag[j]]=[bag[j],bag[i]];}bags.set(level,bag);}kind=bag.pop();}
  for(let attempt=0;attempt<100;attempt++){
   const letters=pick(['xyz','abc','mnp']).slice(0,cfg[0]).split(''),powers=()=>Object.fromEntries(letters.map(v=>[v,int(1,cfg[1])])),coeff=()=>{const n=int(1,cfg[2])*(Math.random()<.4?-1:1),d=level!=='base'&&Math.random()<.5?pick([2,3,4,5]):1;return {n,d};},literal=p=>Object.entries(p).filter(([,e])=>e).map(([v,e])=>v+(e===1?'':'^'+e)).join(''),mono=(p,c=coeff())=>(c.n<0?'-':'')+(c.d!==1?'('+Math.abs(c.n)+'/'+c.d+')':Math.abs(c.n)===1?'':Math.abs(c.n))+literal(p);
   const a=powers(),b={...a};let source;
   if(kind==='sum'||kind==='difference'){
    if(Math.random()<.3)b[letters[0]]++;
    source=mono(a)+(kind==='sum'?' + ':' − ')+'('+mono(b)+')';
   }else if(kind==='product')source=mono(a)+' · ('+mono(powers())+')';
   else if(kind==='power')source='('+mono(a)+')^'+int(0,level==='base'?3:5);
   else{for(const v in b)a[v]=b[v]+int(0,cfg[1]);source=mono(a)+' ÷ ('+mono(b)+')';}
   if(recent.includes(source))continue;
   const tree=E.parse(source);E.validate(tree);if(!M.equivalent(tree,tree,E))continue;
   recent.push(source);if(recent.length>80)recent.shift();return{source,tree,kind};
  }
  throw Error('Non sono riuscito a generare una nuova operazione. Riprova.');
 }
 return{generate,kinds};
})();
