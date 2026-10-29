const assert=require('assert'),E=require('../assets/algebra/expression-engine.js'),M=require('../assets/algebra/expression-monomials.js');
const d=s=>M.describe(E.parse(s),E),same=(a,b)=>M.equivalent(E.parse(a),E.parse(b),E);
for(const [a,b] of [['3xy^2','-5y^2x'],['x*x','3x^2'],['(2/3)zxy','(1/4)xyz']])assert.equal(d(a).key,d(b).key);
for(const s of ['x/y','x^-1','x+y','2(x+y)'])assert.equal(d(s),null,s);
for(const [a,b] of [['x','X'],['xy','x^2y'],['x','y']])assert.notEqual(d(a).key,d(b).key);
assert.deepEqual(d('-(2/4)xy').coefficient,{n:-2n,d:4n});
for(const [a,b] of [['2x+3x','5x'],['3x-5x+x','-x'],['(1/2)x-(1/3)x','(1/6)x'],['(2x+3x)/(y+1)','5x/(y+1)'],['(x+x)^2','(2x)^2'],['(x-x)^2','0'],['(2x+3x)^-2','(5x)^-2'],['x+(2y+3y)','x+5y'],['2x-2x+y','y']])assert(same(a,b),a+' = '+b);
for(const [a,b] of [['2x+3x','6x'],['x','X'],['x^2','x'],['x/y','y/x'],['x+1','x-1']])assert(!same(a,b));
for(const [s,indices,expected] of [['2x+3x',[0,1],true],['2x-3x',[0,1],true],['2x+3y',[0,1],false],['2x+7y+3x',[0,2],true]]){const tree=E.parse(s),c=M.chain(tree),selection=[...indices.map(i=>c.terms[i].id),...indices.slice(1).map(i=>c.operators[i-1])];assert.equal(!!M.plan(tree,selection,E),expected,s);assert.equal(!!M.plan(tree,indices.map(i=>c.terms[i].id),E),false,'operation token must also be selected');}
const grouped=E.parse('x+(2x+3x)');assert.equal(M.plan(grouped,[grouped.left.id,grouped.id+'op',grouped.right.child.left.id],E),null);
const powers={x:1n,y:2n};assert.equal(d('3xy^2').key,M.describe(M.build(E.num(-1),powers,E),E).key);assert(M.build(E.num(-1),powers,E).subtracted);assert.equal(M.build(E.num(0),powers,E).value,'0');const unreduced=M.build(E.fraction(E.num(2),E.num(6)),powers,E);assert(E.stringify(unreduced).includes('(2)/(6)'));
console.log('Monomials: exact similarity, rational coefficients, natural powers, signs, selection boundaries, unequal terms, conservative symbolic equivalence and nonautomatic reduction pass');

assert.throws(()=>same('x/(y-y)','x/0'));
assert.throws(()=>same('(x-x)^0','1'));
assert(same('((x^10000)^10000)^10000+((x^10000)^10000)^10000','2((x^10000)^10000)^10000'));

for(const source of ['(2+3)x+(4+5)x','0,5x+0,25x']){const tree=E.parse(source),c=M.chain(tree);assert.equal(M.plan(tree,[...c.terms.map(t=>t.id),...c.operators],E),null,'coefficient calculations/conversions remain student work');}

for(const [source,expected] of [['2x-3y+12x',14n],['2x-3y-12x',-10n],['-2x+3y+12x',10n]]){const tree=E.parse(source),c=M.chain(tree),p=M.plan(tree,[c.terms[0].id,c.terms[2].id,c.operators[1]],E);assert(p,source);assert.equal(p.values.reduce((sum,v)=>sum+v.n,0n),expected);}
const bareFractions=E.parse('1/2+1/3'),fractionChain=M.chain(bareFractions);assert.equal(M.plan(bareFractions,fractionChain.terms.map(t=>t.id),E),null);

const P=require('../assets/algebra/expression-product.js');for(const source of ['x*y','2x*3y','(2x*3x)']){const tree=E.parse(source);let product;function visit(t){if(t.type==='binary'&&t.op==='·'&&!t.implicit)product=t;if(t.child)visit(t.child);if(t.left){visit(t.left);visit(t.right);}}visit(tree);assert(product,source+' keeps an explicit product');const c=P.flatten(product);assert(c.terms.every(t=>t.type==='monomial'));assert(M.productPlan(tree,[...c.terms.map(t=>t.id),...c.operators],E,P));}
for(const source of ['x-x','(2/4)x-(1/2)x']){const tree=E.parse(source),c=M.chain(tree);assert(M.opposites(M.plan(tree,[...c.terms.map(t=>t.id),...c.operators],E)));}
