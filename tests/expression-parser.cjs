const assert=require('node:assert/strict');
const E=require('../assets/expression-engine.js');
function shape(t){if(t.type==='group')return shape(t.child);return t.type==='number'?t.value:[t.type==='binary'?t.op:t.type,shape(t.left),shape(t.right)];}
const cases=[
 ['2*2/5',['·','2',['fraction','2','5']]],
 ['2 · 2 / 5',['·','2',['fraction','2','5']]],
 ['2×2/5',['·','2',['fraction','2','5']]],
 ['(2*2)/5',['fraction',['·','2','2'],'5']],
 ['1/2*2/5',['·',['fraction','1','2'],['fraction','2','5']]],
 ['2*2/(5+1)',['·','2',['fraction','2',['+','5','1']]]],
 ['2*2/5^2',['·','2',['fraction','2',['power','5','2']]]],
 ['2:2/5',['÷','2',['fraction','2','5']]],
 ['2/3/4',['fraction',['fraction','2','3'],'4']],
 ['(1+2)/(3+4)',['fraction',['+','1','2'],['+','3','4']]],
 ['2*0,1(6)',['·','2','0,1(6)']],
 ['2*3÷4',['÷',['·','2','3'],'4']],
];
for(const [source,expected] of cases){const tree=E.parse(source);assert.deepEqual(shape(tree),expected,source);assert.deepEqual(shape(E.parse(E.stringify(tree))),expected,'round trip '+source);}
assert.deepEqual(E.evaluate(E.parse('2*2/5')),{n:4n,d:5n});
assert.deepEqual(E.evaluate(E.parse('2:2/5')),{n:5n,d:1n});
assert.throws(()=>E.parse('2 2/5'),/operazione/);
assert.throws(()=>E.parse('2*/5'));
assert.throws(()=>E.evaluate(E.parse('2*2/0')),/zero/);
console.log('Text entry: fractions remain distinct factors; explicit numerators, powers, divisions, decimals and structural round trips pass');
