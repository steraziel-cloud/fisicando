const fs=require('fs'),vm=require('vm'),assert=require('assert'),E=require('../assets/expression-engine.js');
let seed=20261028;const math=Object.create(Math);math.random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32};
const c={window:{ExpressionMath:E},Math:math};vm.createContext(c);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../assets/expression-generator.js'),'utf8'),c);const generate=c.window.GatitoExpressionGenerator.generate;
function inspect(t,out={ops:0,powers:0,nested:0,groups:0,powerBases:[]}){if(t.type==='binary'||t.type==='fraction'||t.type==='power')out.ops++;if(t.type==='power'){out.powers++;const e=E.evaluate(t.right);assert(e.d===1n&&e.n>0n,'only positive integer exponents in generation');out.powerBases.push(E.stringify(t.left));}if(t.type==='fraction'&&hasFraction(t.left)||t.type==='fraction'&&hasFraction(t.right))out.nested++;if(t.type==='group')out.groups++;if(t.child)inspect(t.child,out);if(t.left){inspect(t.left,out);inspect(t.right,out);}return out;}
function hasFraction(t){return t.type==='fraction'||!!(t.child&&hasFraction(t.child))||!!(t.left&&(hasFraction(t.left)||hasFraction(t.right)));}
const counts={},maxOps={};let previous='',total=0;
for(const level of ['base','medio','avanzato','nightmare'])for(const mixed of [false,true]){
 const kinds=new Set(),decimalKinds=new Set(),lengths=[];let opTotal=0;
 for(let i=0;i<300;i++){
  const x=generate(level,mixed),v=E.evaluate(x.tree),stats=inspect(x.tree);assert.notEqual(x.source,previous);previous=x.source;kinds.add(x.kind);counts[level+':'+mixed+':'+x.kind]=(counts[level+':'+mixed+':'+x.kind]||0)+1;total++;
  assert(x.source.length<2000);assert(v.n.toString().replace('-','').length<=9&&v.d.toString().length<=9);if(!mixed)assert(!/[.,]/.test(x.source));else if(/[.,]/.test(x.source))decimalKinds.add(x.kind);
  if(x.kind==='powers'){assert(stats.powers>=2);assert(new Set(stats.powerBases).size<stats.powerBases.length,'power exercises must have related repeated bases');}
  if(x.kind==='nested')assert(hasFraction(x.tree)&&stats.nested>=1,'nested family must include an actual nested fraction, not just a division sign');
  opTotal+=stats.ops;lengths.push(x.source.length);maxOps[level]=Math.max(maxOps[level]||0,stats.ops);
 }
 assert.equal(kinds.size,3);if(mixed)assert.equal(decimalKinds.size,3);counts[level+':'+mixed+':averageOps']=opTotal/300;
}
for(const mixed of [false,true]){const key=l=>counts[l+':'+mixed+':averageOps'];assert(key('base')<key('medio'));assert(key('medio')<key('avanzato'));assert(key('avanzato')<key('nightmare'));}
for(const [key,value] of Object.entries(counts))if(!key.endsWith('averageOps'))assert.equal(value,100,'balanced family rotation, unaffected by validation retries');
console.log(`${total} seeded exercises: 4 levels × 3 balanced families × fractions/mixed decimals; exact validity, bounded results, repeated power bases, true nested fractions, positive exponents, progression and no consecutive duplicates pass`);
console.log('Average operation-node counts:',Object.fromEntries(Object.entries(counts).filter(([k])=>k.endsWith('averageOps'))));
