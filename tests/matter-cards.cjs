const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};vm.createContext(ctx);for(const file of ['reader-matter-models.js','reader-matter-approved.js','reader-matter-cards.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/'+file),'utf8'),ctx);
const a=ctx.window.GatitoMatterCards,m=ctx.window.GatitoMatterApproved;
assert.equal(a.deck.length,18);assert.equal(a.stateLabel('Altro'),'Sono presenti più fasi distinte');
for(const d of a.deck){const choices=a.choicesFor(d);assert.equal(choices.length,4,d.id);assert.equal(new Set(choices.map(c=>c.id)).size,4);assert.equal(new Set(choices.map(c=>c.text)).size,4);assert.equal(choices.filter(c=>c.correct).length,1);for(const c of choices){assert(!/più o meno|oppure| o gruppetti|gruppetti uguali o/.test(c.text),c.text);for(const state of ['Solido','Liquido','Gassoso','Altro']){const st={};a.resetRound(st,5);st.order[0]=d.id;const r=a.recordAnswer(st,{choice:c.id,state});assert.equal(r.structureCorrect,c.correct,d.id+' / '+c.text);assert.equal(r.stateCorrect,a.stateIsCorrect(d,state));}}
 const st={};a.resetRound(st,5);st.order[0]=d.id;assert.equal(a.recordAnswer(st,{choice:a.correctChoice(d).id}),null);assert.equal(a.recordAnswer(st,{choice:'forged',state:d.state}),null);assert.equal(a.recordAnswer(st,{type:a.classification(d),subtype:a.subgroup(d),state:d.state}),null,'Legacy generic classification must not bypass card-specific choices');assert(m.supportsMotion(d.id));assert(!m.scene(d).svg.includes('NaN'));
}
for(const n of [5,10,18]){
 const st={};a.resetRound(st,n,()=>.4);assert.equal(st.order.length,n);assert.equal(new Set(st.order).size,n);assert.equal(a.score(st),0);const order=JSON.stringify(st.order);a.ensureRound(st);assert.equal(JSON.stringify(st.order),order);
 for(let i=0;i<n;i++){st.index=i;const d=a.deck.find(d=>d.id===st.order[i]),wrong=a.choicesFor(d).find(c=>!c.correct);const r=a.recordAnswer(st,{choice:wrong.id,state:d.state==='Solido'?'Gassoso':'Solido'});assert(r&&!r.structureCorrect&&!r.stateCorrect);assert.equal(a.recordAnswer(st,{choice:a.correctChoice(d).id,state:d.state}),r,'Cannot overwrite recorded answer');}
 assert(st.done);assert.equal(a.score(st),0);a.resetRound(st,n,()=>.8);assert.notEqual(JSON.stringify(st.order),order);assert.equal(st.answers.length,0);assert(!st.done);
 for(let i=0;i<n;i++){st.index=i;const d=a.deck.find(d=>d.id===st.order[i]);const r=a.recordAnswer(st,{choice:a.correctChoice(d).id,state:d.state});assert(r.structureCorrect&&r.stateCorrect);}
 assert(st.done);assert.equal(a.score(st),2*n);
}
const legacy={version:5,order:['elio'],index:0,answers:[],draft:{type:'element'}};a.ensureRound(legacy);assert.equal(legacy.version,6);assert.equal(legacy.order.length,5);assert.deepEqual(Object.keys(legacy.draft),[]);
console.log('PASS: 18 card-specific four-choice sets, all 288 structure/state combinations, no generic-category bypass, 5/10/18 rounds, partial rejection, scoring, replay, migration, and unchanged models.');
