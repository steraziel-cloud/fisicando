const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');const root=path.join(__dirname,'..');
const context={window:{READER_LESSONS:{},READER_GLOSSARY:{}}};vm.createContext(context);
for(const file of ['reader-rationals.js','reader-rational-boards.js','study-catalog.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets',file),'utf8'),context);
const lessons=context.window.READER_LESSONS,glossary=context.window.READER_GLOSSARY,math=context.window.GatitoRationalBoards.math;
assert.equal(Object.keys(lessons).length,5);let cards=0,steps=0,questions=0;
const ids=new Set();for(const [id,l] of Object.entries(lessons)){assert(!ids.has(id));ids.add(id);assert.equal(l.sections.at(-1).id,'pillole');for(const s of l.sections){for(const c of s.cards){cards++;for(const t of c.steps){steps++;assert(t.html.length>40);for(const [,k] of t.html.matchAll(/data-term="([^"]+)"/g))assert(glossary[k],k);for(const cloze of t.cloze||[])assert(cloze.answer>=0&&cloze.answer<cloze.options.length)}}for(const q of s.quiz?.questions||[]){questions++;assert(q.answer>=0&&q.answer<q.options.length);assert(q.feedback.length>10);}}if(l.nextLesson)assert(lessons[l.nextLesson.id]);}
let arithmeticCases=0;
for(let a=0;a<=35;a++)for(let b=1;b<=35;b++){
 const d=math.longDivision(a,b),r=math.factorClass(a,b);assert(d.terminates||d.period>=0);
 if(d.terminates){assert.equal(r.type,'limitato');if(d.digits.length<=12){const scale=10**d.digits.length,n=d.integer*scale+Number(d.digits.join('')||0);assert.equal(n*b,a*scale);}}
 else{assert.equal(r.type,d.period===0?'periodico semplice':'periodico misto');for(let i=0;i<d.rows.length;i++){const row=d.rows[i];assert.equal(row.before*10,row.digit*b+row.rem);assert(row.rem>=0&&row.rem<b);}}
 for(let p=0;p<=3;p++){
  const x=math.approximation(a,b,p),parse=s=>Number(s.replace(',','.')),scale=10**p,lo=Math.round(parse(x.low)*scale),hi=Math.round(parse(x.high)*scale),round=Math.round(parse(x.rounded)*scale);
  assert(lo*b<=a*scale);assert(hi*b>=a*scale);assert(hi-lo<=1);assert(Math.abs(round*b-a*scale)*2<=b);assert(a*scale-lo*b<b);arithmeticCases++;
 }
}
assert.equal(math.approximation(1999,200,2).rounded,'10,00');assert.equal(math.approximation(247,200,2).rounded,'1,24');assert.equal(math.approximation(1,2,2).low,'0,50');
const catalog=context.window.LESSON_CATALOG,leaves=[];for(const s of catalog)for(const a of s.areas)for(const t of a.topics){leaves.push(...(t.lessons||[]));if(t.title==='Numeri razionali assoluti')assert.equal(t.lessons.length,5);}
for(const id of ids){assert.equal(leaves.filter(l=>l.id===id).length,1);assert(leaves.find(l=>l.id===id).url.includes(id));}
console.log(JSON.stringify({lessons:5,cards,steps,questions,glossary:Object.keys(glossary).length,arithmeticCases,checks:'passed'}));
