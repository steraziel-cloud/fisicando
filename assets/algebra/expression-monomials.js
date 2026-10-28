/* Exact monomial recognition and validation. No displayed answer is calculated
   for the learner: the notebook asks for each arithmetic result. */
(function(global){
'use strict';
const unwrap=t=>t&&['group','literal','monomial'].includes(t.type)?unwrap(t.child):t;
function describe(tree,E){
 function read(t){t=unwrap(t);if(!E.hasVariables(t)){let coefficient=E.evaluate(t);if(t.type==='fraction'&&t.left.type==='number'&&t.right.type==='number'&&/^-?\d+$/.test(t.left.value)&&/^-?\d+$/.test(t.right.value)){let n=BigInt(t.left.value),d=BigInt(t.right.value);if(d<0n){n=-n;d=-d;}coefficient={n,d};}return{coefficient,powers:{}};}
  if(t.type==='variable')return{coefficient:E.rat(1n),powers:{[t.value]:1n}};
  if(t.unary){const r=read(t.right);if(r)r.coefficient={n:-r.coefficient.n,d:r.coefficient.d};return r;}
  if(t.type==='power'){if(E.hasVariables(t.right))return null;const e=E.evaluate(t.right);if(e.d!==1n||e.n<0n||e.n>10000n)return null;const r=read(t.left);if(!r)return null;r.coefficient=E.evaluate(E.node('power',{left:E.from(r.coefficient),right:E.num(e.n)}));for(const v in r.powers)r.powers[v]*=e.n;return r;}
  if(t.type==='fraction'||t.op==='÷'){if(E.hasVariables(t.right))return null;const a=read(t.left),b=E.evaluate(t.right);if(!a||!b.n)return null;a.coefficient={n:a.coefficient.n*b.d,d:a.coefficient.d*b.n};if(a.coefficient.d<0n){a.coefficient.n=-a.coefficient.n;a.coefficient.d=-a.coefficient.d;};return a;}
  if(t.type==='binary'&&t.op==='·'){const a=read(t.left),b=read(t.right);if(!a||!b)return null;for(const v in b.powers)a.powers[v]=(a.powers[v]||0n)+b.powers[v];a.coefficient={n:a.coefficient.n*b.coefficient.n,d:a.coefficient.d*b.coefficient.d};return a;}
  return null;
 }
 try{const r=read(tree);if(!r)return null;for(const v in r.powers)if(!r.powers[v])delete r.powers[v];r.key=JSON.stringify(Object.keys(r.powers).sort().map(v=>[v,String(r.powers[v])]));return r;}catch{return null;}
}
// Do not silently evaluate coefficient arithmetic that the learner has not done.
function ready(tree){const t=unwrap(tree);if(t.type==='variable')return true;if(t.type==='number')return /^-?\d+$/.test(t.value);if(t.unary)return ready(t.right);if(t.type==='fraction')return !t.right.unary&&ready(t.left)&&ready(t.right)&&!containsLetters(t.right);if(t.type==='power')return unwrap(t.left).type==='variable'&&unwrap(t.right).type==='number'&&/^\d+$/.test(unwrap(t.right).value);return t.implicit&&ready(t.left)&&ready(t.right);}
function containsLetters(t){return t.type==='variable'||!!(t.child&&containsLetters(t.child))||!!(t.left&&(containsLetters(t.left)||containsLetters(t.right)));}
const isSum=t=>t.type==='binary'&&!t.unary&&['+','−'].includes(t.op);
function chain(tree){const terms=[],operators=[],signs=[];function walk(t,sign=1){if(isSum(t)){walk(t.left,sign);operators.push(t.id+'op');walk(t.right,sign*(t.op==='−'?-1:1));}else{terms.push(t);signs.push(sign);}}walk(tree);return{terms,operators,signs};}
function scopes(tree){const out=[];function visit(t,inside=false){const sum=isSum(t);if(sum&&!inside)out.push(t);if(t.child)visit(t.child);if(t.left){visit(t.left,sum);visit(t.right,sum);}}visit(tree);return out;}
function plan(tree,selection,E){const keys=new Set(selection);for(const scope of scopes(tree)){const c=chain(scope),indices=c.terms.map((t,i)=>keys.has(t.id)?i:-1).filter(i=>i>=0);if(indices.length<2)continue;const ids=indices.map(i=>c.terms[i].id),required=indices.slice(1).map(i=>c.operators[i-1]),allowed=[...ids,...required,...(indices[0]>0?[c.operators[indices[0]-1]]:[])];const wholeMonomials=indices.every(i=>c.terms[i].type==='monomial');if(!wholeMonomials&&required.some(id=>!keys.has(id))||[...keys].some(id=>!allowed.includes(id)))continue;
 if(indices.some(i=>!ready(c.terms[i])))continue;const values=indices.map(i=>describe(c.terms[i],E));if(values.some(v=>!v)||values.some(v=>v.key!==values[0].key))continue;
 return{scopeId:scope.id,termIds:ids,powers:values[0].powers,values:values.map((v,i)=>({n:v.coefficient.n*BigInt(c.signs[indices[i]]),d:v.coefficient.d}))};
 }return null;}
function opposites(plan){return !!plan&&plan.values.length===2&&plan.values[0].n!==0n&&plan.values[0].n*plan.values[1].d+plan.values[1].n*plan.values[0].d===0n;}
function productPlan(tree,selection,E,P){const keys=new Set(selection);for(const scope of P.scopes(tree)){if(scope.implicit)continue;const c=P.flatten(scope),indices=c.terms.map((t,i)=>keys.has(t.id)?i:-1).filter(i=>i>=0);if(indices.length<2)continue;const ids=indices.map(i=>c.terms[i].id),ops=indices.slice(1).map(i=>c.operators[i-1]),allowed=[...ids,...ops];if([...keys].some(id=>!allowed.includes(id))||!indices.every(i=>c.terms[i].type==='monomial')&&ops.some(id=>!keys.has(id)))continue;
 const terms=indices.map(i=>c.terms[i]);if(terms.some(t=>!ready(t)))continue;const values=terms.map(t=>describe(t,E));if(values.some(v=>!v))continue;const powers={},exponents={};for(const v of values)for(const letter in v.powers){powers[letter]=(powers[letter]||0n)+v.powers[letter];(exponents[letter]||=[]).push(v.powers[letter]);}
 return{scopeId:scope.id,termIds:ids,values:values.map(v=>v.coefficient),powers,exponents};
 }return null;}
function literal(powers,E){const factors=Object.keys(powers).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())||(a<b?-1:a>b?1:0)).filter(v=>powers[v]!==0n).map(v=>powers[v]===1n?E.node('variable',{value:v}):E.node('power',{left:E.node('variable',{value:v}),right:E.num(powers[v])}));if(!factors.length)return null;const product=factors.slice(1).reduce((left,right)=>E.node('binary',{op:'·',implicit:true,left,right}),factors[0]);return factors.length>1?E.node('literal',{child:product}):product;}
function build(coefficient,powers,E){const letters=literal(powers,E);if(!letters)return coefficient;let negative=false,c=coefficient;if(!E.hasVariables(c)){const r=E.evaluate(c);if(!r.n&&c.type==='number')return E.num(0);if(c.type==='number'||c.type==='fraction'&&c.left.type==='number'&&c.right.type==='number'){negative=r.n<0n;if(c.type==='fraction'){const n=BigInt(c.left.value),d=BigInt(c.right.value);c=E.fraction(E.num(n<0n?-n:n),E.num(d<0n?-d:d));if(!n)return E.num(0);if(c.right.value==='1')c=c.left;}else c=E.num(r.n<0n?-r.n:r.n);if(c.type==='number'&&c.value==='1')c=null;}}
 if(c?.type==='binary')c=E.node('group',{style:'(',child:c});let child=c?E.node('binary',{op:'·',implicit:true,left:c,right:letters}):letters;if(negative)child=E.node('binary',{op:'−',unary:true,left:E.num(0),right:child});return E.node('monomial',{child,...(negative?{subtracted:true}:{})});}
function collect(scope,ids,replacement,E){const c=chain(scope),chosen=new Set(ids);let result=null,done=false;c.terms.forEach((term,i)=>{let sign=c.signs[i];if(chosen.has(term.id)){if(done)return;done=true;term=structuredClone(replacement);sign=1;}else term=structuredClone(term);if(!result)result=sign<0?E.node('binary',{op:'−',unary:true,left:E.num(0),right:term}):term;else result=E.node('binary',{op:sign<0?'−':'+',left:result,right:term});});return result;}
function removeZeros(t){if(t.child)t.child=removeZeros(t.child);if(t.left){t.left=removeZeros(t.left);t.right=removeZeros(t.right);}const zero=n=>n.type==='number'&&n.value==='0';if(t.type==='binary'&&t.op==='·'&&(zero(t.left)||zero(t.right)))return zero(t.left)?t.left:t.right;if(isSum(t)){if(zero(t.right))return t.left;if(t.op==='+'&&zero(t.left))return t.right;}if(t.type==='group'&&t.child.type==='number')return t.child;return t;}
// Conservative exact symbolic equivalence for linked rows. Sparse polynomials
// normalize sums/products; other denominators and powers remain structural atoms.
// This validates the same local change inside fractions/powers without sampling
// variable values or assuming new conditions of existence.
function signature(tree,E){
 const limit=256,constant=r=>new Map([['[]',r]]),add=(a,b,sign=1n)=>{const out=new Map(a);for(const [k,v] of b){const x=out.get(k)||E.rat(0n),r=E.rat(x.n*v.d+sign*v.n*x.d,x.d*v.d);if(r.n)out.set(k,r);else out.delete(k);}if(out.size>limit)throw Error('Troppi termini per verificare questo passaggio.');return out;},serial=p=>JSON.stringify([...p].filter(([,r])=>r.n).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([k,r])=>[k,String(r.n),String(r.d)]));
 function mul(a,b){if(a.size*b.size>limit)throw Error('Troppi termini per verificare questo passaggio.');let out=new Map();for(const [ka,a0] of a)for(const [kb,b0] of b){const powers=new Map(JSON.parse(ka));for(const [v,e] of JSON.parse(kb))powers.set(v,String(BigInt(powers.get(v)||'0')+BigInt(e)));const key=JSON.stringify([...powers].sort(([a],[b])=>a<b?-1:a>b?1:0));out=add(out,new Map([[key,E.rat(a0.n*b0.n,a0.d*b0.d)]]));}return out;}
 const atom=key=>new Map([[JSON.stringify([[key,'1']]),E.rat(1n)]]);
 function read(n){n=unwrap(n);if(!E.hasVariables(n))return constant(E.evaluate(n));if(n.type==='variable')return atom('v:'+n.value);if(n.unary)return mul(constant(E.rat(-1n)),read(n.right));const a=read(n.left),b=read(n.right);
  if(n.type==='binary'&&['+','−'].includes(n.op))return add(a,b,n.op==='−'?-1n:1n);
  if(n.type==='binary'&&n.op==='·')return mul(a,b);
  if(n.type==='fraction'||n.op==='÷'){if([...b.values()].every(r=>!r.n))throw Error('Il denominatore non può essere zero.');const d=b.size===1&&b.get('[]');if(d&&d.n)return mul(a,constant(E.rat(d.d,d.n)));return atom(JSON.stringify(['fraction',serial(a),serial(b)]));}
  if(n.type==='power'){const e=E.evaluate(n.right);if([...a.values()].every(r=>!r.n)&&e.n<=0n)throw Error('Zero non può avere esponente nullo o negativo.');if(!a.size&&e.n>0n)return constant(E.rat(0n));if(e.d===1n&&e.n>=0n&&a.size===1){const [k,r]=[...a][0],coefficient=E.evaluate(E.node('power',{left:E.from(r),right:E.num(e.n)})),powers=JSON.parse(k).map(([v,x])=>[v,String(BigInt(x)*e.n)]).filter(([,x])=>x!=='0');return new Map([[JSON.stringify(powers),coefficient]]);}return atom(JSON.stringify(['power',serial(a),serial(b)]));}
  throw Error('Passaggio letterale non riconosciuto.');
 }
 return serial(read(tree));
}
function equivalent(a,b,E){return signature(a,E)===signature(b,E);}
const api={describe,chain,scopes,plan,ready,opposites,productPlan,literal,build,collect,removeZeros,equivalent};global.GatitoExpressionMonomials=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
