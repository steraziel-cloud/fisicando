const assert=require('assert'),E=require('../assets/algebra/expression-engine.js'),T=require('../assets/algebra/expression-editor-tools.js'),P=require('../assets/algebra/expression-powers.js');
function walk(t,fn){fn(t);if(t.child)walk(t.child,fn);if(t.left){walk(t.left,fn);walk(t.right,fn);}}
for(const source of ['x','xyz','2xyz','-x','-2x^2Y','2(x+1)','(x+1)(x-1)','(2xy+3)/(x^2-1)','(1/2)x^2y','x^-2+3A','((x+1)/(y-2))/((a-b)/(c+d))']){const t=E.parse(source);E.validate(t);assert(E.hasVariables(t));const again=E.parse(E.stringify(t));E.validate(again);const letters=[];walk(t,n=>{if(n.type==='variable')letters.push(n.value)});const round=[];walk(again,n=>{if(n.type==='variable')round.push(n.value)});assert.deepEqual(letters,round);
 let serial=0;const draft=T.fromMath(t,()=>++serial).root;const build=n=>n.type==='slot'?n.value:n.type==='symbol'?n.value:n.type==='seq'?n.items.map(build).join(''):n.type==='fraction'?'('+build(n.top)+')/('+build(n.bottom)+')':n.type==='power'?'('+build(n.base)+')^('+build(n.exponent)+')':'';const restored=E.parse(build(draft));E.validate(restored);const after=[];walk(restored,n=>{if(n.type==='variable')after.push(n.value)});assert.deepEqual(letters,after);}
for(const source of ['1/0','1/(x-x)','1/(0x)','x^y','x^0,5','x^10001','α','x+','(x+1'])assert.throws(()=>E.validate(E.parse(source)),source);
assert.notEqual(P.key(E.parse('x')),P.key(E.parse('y')));assert.notEqual(P.key(E.parse('x')),P.key(E.parse('X')));
const old=require('../assets/expression-engine.js');for(const source of ['2*2/5','1/2+2/3','(2/3)^-2','0,1(6)+1/2','-2^2','(1/2)/(3/4)']){const a=E.evaluate(E.parse(source)),b=old.evaluate(old.parse(source));assert.equal(a.n*b.d,b.n*a.d);}
console.log('Symbolic entry: Latin variables, case distinctions, implicit products, signs, coefficients, nested fractions, integer exponents, clipboard/edit round trips, invalid input and numerical compatibility pass');
const S=require('../assets/algebra/expression-steps.js');
for(const source of ['xyz','3xyz','(2/3)x^2y','-2xYz','a^2b^3c']){const t=S.normalize(E.parse(source));E.validate(t);const parts=[];walk(t,n=>{if(n.type==='literal')parts.push(n)});assert.equal(parts.length,1,'one literal-part token per monomial: '+source);assert(!E.stringify(parts[0]).includes('3/2'));const variables=[];walk(parts[0],n=>{if(n.type==='variable')variables.push(n.value)});assert(variables.length>=2);const ids=[];walk(t,n=>ids.push(n.id));assert.equal(new Set(ids).size,ids.length,'unique selectable identities');}
const sum=E.parse('2xy+3xy');let literalParts=0;walk(sum,n=>{if(n.type==='literal')literalParts++});assert.equal(literalParts,2);
for(const source of ['2(x+y)','x+y','x/y']){let count=0;walk(E.parse(source),n=>{if(n.type==='literal')count++});assert.equal(count,0,'do not group sums or algebraic quotients as monomial literal parts');}
console.log('Literal-part tokens: complete monomial letters/powers grouped once, coefficients kept outside, sums/quotients excluded and unique node identities preserved');
let next=0;const slot=value=>({type:'slot',id:++next,value}),seq=items=>({type:'seq',id:++next,items});
const x=slot('x'),y=slot('y'),root=seq([x,y]);assert.equal(T.coefficientPosition(root,x.id,1),null);assert.equal(T.coefficientPosition(root,x.id,0).index,0);assert.equal(T.coefficientPosition(root,y.id,0),null);
const n=slot('3'),xx=slot('x'),withCoefficient=seq([n,xx]);assert.equal(T.coefficientPosition(withCoefficient,xx.id,0),null);
const px=slot('x'),exponent=slot('2'),power={type:'power',id:++next,base:seq([px]),exponent:seq([exponent])},powerRoot=seq([power,slot('y')]);assert.equal(T.coefficientPosition(powerRoot,px.id,0).parent,powerRoot);assert.equal(T.coefficientPosition(powerRoot,exponent.id,0),null);
const nx=slot('x'),den=slot('y'),top=seq([nx]),bottom=seq([den]),fractionRoot=seq([{type:'fraction',id:++next,top,bottom}]);assert.equal(T.coefficientPosition(fractionRoot,nx.id,0).parent,top);assert.equal(T.coefficientPosition(fractionRoot,den.id,0).parent,bottom);
const sx=slot('x'),sumRoot=seq([slot('2'),{type:'symbol',value:'+'},sx]);assert.equal(T.coefficientPosition(sumRoot,sx.id,0).index,2);sumRoot.items.splice(2,0,slot(''));assert.equal(T.coefficientPosition(sumRoot,sx.id,0),null);
console.log('Coefficient gaps: leading letter, powers, numerators, denominators, new addends, existing coefficients and duplicate-gap prevention pass');

// Entire terms include fractional coefficients and subtraction signs; no nested
// monomial wrappers are created for the constituent letters of a single term.
for(const [source,count] of [['3x^2yz',1],['-(3/2)xy',1],['2xy-3ab+z',3],['x/y',2],['2(x+y)',2]]){
 const tree=E.parse(source),terms=[];E.validate(tree);walk(tree,n=>{if(n.type==='monomial')terms.push(n)});assert.equal(terms.length,count,source);
 for(const term of terms){let nested=0;walk(term.child,n=>{if(n.type==='monomial')nested++});assert.equal(nested,0);}
 const substitute=t=>{const n=structuredClone(t);function visit(x){if(x.type==='variable'){x.type='number';x.value='2';}if(x.child)visit(x.child);if(x.left){visit(x.left);visit(x.right);}}visit(n);return E.evaluate(n);};
 let id=0;const draft=T.fromMath(tree,()=>++id).root;
 const sourceOf=n=>n.type==='slot'?n.value:n.type==='symbol'?n.value:n.type==='seq'?n.items.map(sourceOf).join(''):n.type==='fraction'?'(('+sourceOf(n.top)+')/('+sourceOf(n.bottom)+'))':n.type==='power'?'('+sourceOf(n.base)+')^('+sourceOf(n.exponent)+')':'';
 assert.deepEqual(substitute(E.parse(sourceOf(draft))),substitute(tree),'editing preserves signs and coefficient: '+source);
}
const signed=E.parse('2xy-3ab');assert(signed.right.subtracted);assert(E.stringify(signed.right).startsWith('−'));assert(E.stringify(signed.right).includes('3'));
console.log('Whole monomial tokens: signed/fractional coefficients, maximal term boundaries, individual symbols and edit/clipboard sign preservation pass');
