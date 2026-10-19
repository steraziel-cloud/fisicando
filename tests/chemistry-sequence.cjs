const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.join(__dirname,'..'),ctx={window:{READER_LESSONS:{}},URL,document:{currentScript:{src:'https://example.test/assets/reader-chemistry-boards.js'}},location:{href:'https://example.test/reader.html'}};vm.createContext(ctx);
for(const f of ['reader-glossary.js','reader-chimica-materia.js','reader-chemistry-boards.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets',f),'utf8'),ctx);
const l=ctx.window.READER_LESSONS['chimica-materia'],b=ctx.window.GatitoChemistryBoards,g=ctx.window.READER_GLOSSARY;
assert.deepEqual(Array.from(l.sections,s=>s.id),['intorno-a-noi','atomi-elementi','elementi','simboli-tavola','in-pillole']);
assert.equal(l.sections[0].cards[1].board,'matter-cards');assert.equal(l.sections[0].cards[2].steps.length,2);
let clozes=0,questions=0;
for(const s of l.sections){if(s.id!=='intorno-a-noi')assert(s.quiz.questions.length>=3);for(const q of s.quiz?.questions||[]){questions++;assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.answer>=0&&q.answer<4);assert(q.feedback);}
 for(const c of s.cards)for(const t of c.steps){for(const m of t.html.matchAll(/data-term="([^"]+)"/g)){assert(g[m[1]],m[1]);assert(g[m[1]].byLevel?.medie?.text,m[1]+' missing medie');assert(g[m[1]].byLevel?.triennio?.text,m[1]+' missing advanced');}
 for(const q of t.cloze||[]){clozes++;assert.equal(q.options.length,2);assert(q.options[q.answer]);assert(q.feedback);}}
}
assert(clozes>=12);assert.equal(questions,12);assert.equal(b.records.length,118);assert.equal(new Set(b.records.map(r=>r.row+':'+r.col)).size,118);
for(const [symbol,row,col] of [['H',1,1],['He',1,18],['Fe',4,8],['La',8,3],['Lu',8,17],['Hf',6,4],['Ac',9,3],['Lr',9,17],['Og',7,18]]){const r=b.records.find(r=>r.symbol===symbol);assert.equal(r.row,row);assert.equal(r.col,col);}
assert(!l.sections.slice(1).some(s=>s.cards.some(c=>['chem-compounds','chem-formulas','chem-molecules','chem-reaction'].includes(c.board))));
const archive=JSON.parse(fs.readFileSync(path.join(root,'drafts/chimica/materia-estesa-prima-della-revisione.json')));assert(archive.sections.some(s=>s.cards.some(c=>c.board==='chem-molecules')));
for(const key of ['atoms','dalton-join','elements','element-count'])assert(b.diagram(key).includes('<svg'));
const html=fs.readFileSync(path.join(root,'reader.html'),'utf8');assert(html.includes('reader-reactions.js?v=7'));assert(html.includes('reader-chimica-materia.js?v=11'));assert(html.includes('reader-glossary.js?v=17'));
const script=fs.readFileSync(path.join(root,'assets/reader-chemistry-boards.js'),'utf8');assert(script.includes('data-term="democrito"'));assert(script.includes('state.motion?.dispose()'));assert(script.includes('Illustrazione generata, non fotografia di laboratorio'));
for(const s of ['C','Al','Si','S','Fe','Cu','Au','Hg','Br','gas'])assert(fs.statSync(path.join(root,'assets/images/reader/chemistry/element-'+s+'.webp')).size>1000);
console.log(`PASS: logical sequence, preserved game/drafts, ${clozes} inline checks, ${questions} checkpoint questions with four options, contextual definitions, 118 positioned elements, generated specimen assets, no reaction regression.`);
