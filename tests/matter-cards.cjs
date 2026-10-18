const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};vm.createContext(ctx);for(const file of ['reader-matter-models.js','reader-matter-cards.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/'+file),'utf8'),ctx);
const a=ctx.window.GatitoMatterCards,m=ctx.window.GatitoMatterModels;
assert.equal(a.deck.length,18);assert.equal(Object.keys(a.descriptions).length,4);
for(const n of [5,10,18]){
 const st={};a.resetRound(st,n,()=>.4);assert.equal(st.order.length,n);assert.equal(new Set(st.order).size,n);assert.equal(a.score(st),0);
 const order=JSON.stringify(st.order);a.ensureRound(st);assert.equal(JSON.stringify(st.order),order,'Navigation reshuffled the round');
 for(let i=0;i<n;i++){
  st.index=i;const d=a.deck.find(d=>d.id===st.order[i]);assert.equal(a.recordAnswer(st,{type:'compound'}),null,'Incomplete answers accepted');
  const type=a.classification(d)==='heterogeneous'?'homogeneous':'heterogeneous';const wrong={type,state:d.state==='Solido'?'Gassoso':'Solido'};
  const answer=a.recordAnswer(st,wrong);assert(answer);assert(!answer.structureCorrect);assert(!answer.stateCorrect);
  const repeat=a.recordAnswer(st,{type:a.classification(d),subtype:a.subgroup(d),state:d.state});assert.equal(repeat,answer,'Confirmation changed an already recorded answer');
 }
 assert(st.done,'Wrong answers must still complete the round');assert.equal(a.score(st),0);assert.equal(st.answers.length,n);
 a.resetRound(st,n,()=>.8);assert.notEqual(JSON.stringify(st.order),order);assert.equal(st.answers.length,0);assert(!st.done);assert(!st.drawn);
 for(let i=0;i<n;i++){st.index=i;const d=a.deck.find(d=>d.id===st.order[i]);const r=a.recordAnswer(st,{type:a.classification(d),subtype:a.subgroup(d),state:d.state});assert(r.structureCorrect&&r.stateCorrect);}
 assert(st.done);assert.equal(a.score(st),2*n);
}
// Wrong subgroup, mixed correctness, and precise primary/subgroup pair checks.
const st={};a.resetRound(st,5);st.order=['elio','acqua','sale','aria','nebbia'];
assert.equal(a.recordAnswer(st,{type:'element',state:'Gassoso'}),null);
let r=a.recordAnswer(st,{type:'element',subtype:'structures',state:'Gassoso'});assert(!r.structureCorrect&&r.stateCorrect);assert.equal(a.score(st),1);
st.index=1;r=a.recordAnswer(st,{type:'compound',subtype:'groups',state:'Solido'});assert(r.structureCorrect&&!r.stateCorrect);assert.equal(a.score(st),2);
const legacy={version:3,index:17,done:true,answers:Array(18).fill(true)};a.ensureRound(legacy);assert.equal(legacy.order.length,5);assert.equal(legacy.index,0);assert(!legacy.done);
for(const d of a.deck){assert(m.supportsMotion(d.id));const svg=m.scene(d).svg;assert(!svg.includes('NaN'));}
console.log('PASS: random unique rounds 5/10/18, stable navigation, replay, wrong answers accepted, partial answers rejected, exact scoring, legacy migration, 18 models.');
