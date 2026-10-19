const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.join(__dirname,'..'),ctx={window:{READER_LESSONS:{}}};vm.createContext(ctx);
for(const f of ['reader-glossary.js','reader-chimica-materia.js','reader-chemistry-boards.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets',f),'utf8'),ctx);
const lesson=ctx.window.READER_LESSONS['chimica-materia'],boards=ctx.window.GatitoChemistryBoards,g=ctx.window.READER_GLOSSARY;
assert.equal(lesson.sections.length,5);assert.equal(lesson.sections[0].cards[1].board,'matter-cards');
assert.equal(lesson.sections[0].cards[2].steps.length,2);
let questions=0,clozes=0;
for(const section of lesson.sections){if(section.id!=='intorno-a-noi')assert(section.quiz.questions.length>=3);for(const q of section.quiz?.questions||[]){questions++;assert.equal(q.options.length,4);assert(new Set(q.options).size===4);assert(q.answer>=0&&q.answer<4);assert(q.feedback);if(q.illustration)assert(fs.existsSync(path.join(root,q.illustration.src)));}
 for(const card of section.cards)for(const step of card.steps){for(const m of step.html.matchAll(/data-term="([^"]+)"/g))assert(g[m[1]],'Missing glossary '+m[1]);if(step.chemView&& !['history','today','periodic','symbols'].includes(step.chemView)){const svg=boards.diagram(step.chemView);assert(svg.includes('<svg'));assert(!/undefined|NaN/.test(svg));}for(const q of step.cloze||[]){clozes++;assert.equal(q.options.length,2);assert(q.options[q.answer]);}}
}
assert.equal(questions,12);assert(clozes>=5);
assert.equal(boards.records.length,118);assert.equal(new Set(boards.records.map(r=>r.symbol)).size,118);assert.equal(new Set(boards.records.map(r=>r.row+':'+r.col)).size,118);
for(const [symbol,row,col] of [['H',1,1],['He',1,18],['Fe',4,8],['La',8,3],['Lu',8,17],['Hf',6,4],['Ac',9,3],['Lr',9,17],['Og',7,18]]){const r=boards.records.find(r=>r.symbol===symbol);assert.equal(r.row,row,symbol);assert.equal(r.col,col,symbol);}
// Stoichiometry: both reaction stages keep 4 H and 2 O as labelled atoms.
for(const v of ['before-reaction','after-reaction']){const s=boards.diagram(v);assert.equal((s.match(/font-weight="800">H<\/text>/g)||[]).length,4);assert.equal((s.match(/font-weight="800">O<\/text>/g)||[]).length,2);}
const reader=fs.readFileSync(path.join(root,'assets/reader.js'),'utf8');assert(reader.includes('GatitoChemistryBoards.mount'));assert(reader.includes('GatitoChemistryBoards.setView'));assert(!reader.includes("board==='matter-cards'&&!state[current].matterCards?.done)return true"));
console.log('PASS: preserved game/closing slides; 5 sections; 12 four-option questions; inline practice; glossary links; 118 unique correctly positioned elements; balanced diagrams; mounting/stage hooks; optional game preserved.');
