const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};vm.createContext(ctx);
for(const f of ['reader-matter-models.js','reader-matter-approved.js','reader-matter-cards.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets',f),'utf8'),ctx);
const models=ctx.window.GatitoMatterApproved,cards=ctx.window.GatitoMatterCards;
assert.equal(cards.deck.length,18);assert(!cards.deck.some(d=>['zucchero','sabbia'].includes(d.id)));
assert.equal(cards.classification(cards.deck.find(d=>d.id==='silicio')),'element');
assert.equal(cards.subgroup(cards.deck.find(d=>d.id==='silicio')),'structures');
assert.equal(cards.classification(cards.deck.find(d=>d.id==='ghiaccio')),'compound');
assert.equal(cards.subgroup(cards.deck.find(d=>d.id==='ghiaccio')),'groups');
const engineIds=new Set();
for(const d of cards.deck){
 const engine=models.createMotion(d.id);assert(engine);assert(!engineIds.has(engine.prefix));engineIds.add(engine.prefix);
 const initial=engine.frame(),count=(initial.match(/<circle /g)||[]).length;assert(count>0);
 for(let i=0;i<30;i++){engine.advance(.1);const frame=engine.frame();assert(!/NaN|undefined|Infinity/.test(frame),d.id);assert.equal((frame.match(/<circle /g)||[]).length,count,d.id+' changed particle count');}
 assert.notEqual(engine.frame(),initial,d.id+' did not animate');
 const markup=engine.definitions()+engine.frame(),ids=new Set([...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const match of markup.matchAll(/url\(#([^\)]+)\)/g))assert(ids.has(match[1]),d.id+' unresolved gradient '+match[1]);
 assert.equal(models.zones[d.id].length,3);for(const [x,y,w] of models.zones[d.id])assert(x>=0&&y>=0&&x+w<=400&&y+w<=356);
 if(d.id==='ghiaccio'){assert.equal((initial.match(/gm-O\)/g)||[]).length,32);assert.equal((initial.match(/gm-H\)/g)||[]).length,64);assert(initial.includes('stroke-dasharray'));engine.setView(true);assert.notEqual(engine.frame(),initial);}
 if(d.id==='bicarbonato'){assert.equal((initial.match(/gm-Na\)/g)||[]).length,27);assert.equal((initial.match(/gm-C\)/g)||[]).length,27);assert.equal((initial.match(/gm-O\)/g)||[]).length,81);assert.equal((initial.match(/gm-H\)/g)||[]).length,27);}
}
const reader=fs.readFileSync(path.join(__dirname,'../reader.html'),'utf8');assert(reader.indexOf('reader-matter-models.js')<reader.indexOf('reader-matter-approved.js'));assert(reader.indexOf('reader-matter-approved.js')<reader.indexOf('reader-matter-cards.js'));assert(reader.includes('reader-matter-approved.js?v=1" defer'));
console.log('PASS: 18 animated approved models, 3 valid regions each, stable counts and finite coordinates, isolated IDs/gradients, ice stoichiometry and contacts, 3 bicarbonate layers, updated classifications, script load order.');
