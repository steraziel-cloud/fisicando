const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
class Node{constructor(tag){this.tagName=tag;this.children=[];this.attrs={};this.classList={add(){}};}append(...n){this.children.push(...n);}replaceChildren(...n){this.children=n;}setAttribute(k,v){this.attrs[k]=v;}addEventListener(){}querySelector(){return null;}focus(){}remove(){this.children=[];}}
const ctx={window:{},document:{createElement:t=>new Node(t)}};vm.createContext(ctx);for(const file of ['reader-matter-models.js','reader-matter-cards.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/'+file),'utf8'),ctx);
const api=ctx.window.GatitoMatterCards,models=ctx.window.GatitoMatterModels;
const flat=n=>[n,...n.children.flatMap(flat)];function click(box,text){const n=flat(box).find(n=>n.tagName==='button'&&n.textContent===text);assert(n,'Missing '+text);assert(!n.disabled);n.onclick();}
assert.equal(api.deck.length,18);assert.equal(Object.keys(api.descriptions).length,4);assert.equal(api.subgroups.element.length,3);assert.equal(api.subgroups.compound.length,2);
const state={},box=new Node('article');let change=0,dispose=api.mount(box,state,()=>change++);click(box,'Guarda dentro →');click(box,api.descriptions.heterogeneous);assert(!state.answers[0].model);click(box,api.descriptions.compound);click(box,api.subgroups.compound[0][1]);assert(!state.answers[0].model);click(box,'← Cambia scelta');click(box,api.descriptions.element);click(box,api.subgroups.element[2][1]);assert(!state.answers[0].model);click(box,'← Cambia scelta');click(box,api.descriptions.element);click(box,api.subgroups.element[0][1]);assert(state.answers[0].model);assert(!state.answers[0].state);click(box,'Ora lo stato →');click(box,'Solido');assert(!state.answers[0].state);click(box,'Gassoso');click(box,'Prossima carta →');dispose();
const b=new Node('article');api.mount(b,state,()=>change++);assert.equal(state.index,1);assert(state.answers[0].model&&state.answers[0].state);
for(let i=1;i<18;i++){const d=api.deck[i];click(b,'Guarda dentro →');const k=api.classification(d);click(b,api.descriptions[k]);if(api.subgroups[k])click(b,api.subgroups[k].find(([key])=>key===api.subgroup(d))[1]);click(b,'Ora lo stato →');click(b,d.state);assert(!state.done);click(b,i===17?'Completa il gioco ✓':'Prossima carta →');}
assert(state.done);assert.equal(state.answers.filter(a=>a.model&&a.state).length,18);click(b,'← Carta precedente');assert(state.done);assert.equal(state.index,16);
for(const d of api.deck){const svg=models.scene(d).svg;assert(!svg.includes('NaN'));assert(svg.includes('<radialGradient'));}
let w=models.build('bicarbonato');const units=w.atoms.filter(a=>a.k==='Na').length;for(const[k,n]of [['C',1],['H',1],['O',3]])assert.equal(w.atoms.filter(a=>a.k===k).length,n*units);assert(w.bonds.every(([i,j])=>w.atoms[i].k!=='Na'&&w.atoms[j].k!=='Na'));
assert(models.build('alluminio').atoms.every(a=>a.k==='Al'));
assert(models.build('diamante').atoms.every(a=>a.k==='C'));
assert.deepEqual([...new Set(models.build('acciaio').atoms.map(a=>a.k))].sort(),['Cr','Fe','Ni']);
w=models.build('ossigeno');assert(w.atoms.every(a=>a.k==='O'));assert.equal(w.atoms.length,2*w.bonds.length);
for(const id of ['mercurio','calcio','sic','ghiaccio','ottone','quarzo'])assert(!api.deck.some(d=>d.id===id));
w=models.build('zucchero');for(const [k,n]of [['C',12],['H',22],['O',11]])assert.equal(w.atoms.filter(a=>a.k===k).length,n*4);
w=models.build('sabbia');w.atoms.forEach((a,i)=>assert(w.bonds.filter(e=>e.includes(i)).length<=(a.k==='Si'?4:2)));
const previous={version:2,index:13,done:true,answers:[{model:true,state:true}],frontOverride:false};api.mount(new Node('article'),previous,()=>{});assert.equal(previous.index,0);assert.equal(previous.done,false);assert.equal(previous.version,3);assert(!previous.answers[0].model);
console.log('PASS: 18 turns, 4 fixed options, subgroup retries, 3 phases, state preservation, completion and molecular invariants.');


