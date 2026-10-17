const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Node{constructor(tag){this.tagName=tag;this.children=[];this.attrs={};this.classList={add(){}};}append(...nodes){this.children.push(...nodes);}replaceChildren(...nodes){this.children=nodes;}setAttribute(k,v){this.attrs[k]=v;}addEventListener(){}focus(){}remove(){this.children=[];}}
const ctx={window:{},document:{createElement:t=>new Node(t)}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../assets/reader-matter-cards.js'),'utf8'),ctx);const api=ctx.window.GatitoMatterCards;
function flatten(n){return [n,...n.children.flatMap(flatten)]}function click(box,text){const button=flatten(box).find(n=>n.tagName==='button'&&n.textContent===text);assert(button,'Missing button '+text);assert(!button.disabled);button.onclick();}
assert.equal(api.deck.length,18);assert.equal(new Set(api.deck.map(x=>x.id)).size,18);
for(const [i,d] of api.deck.entries()){const choices=api.choices(d,i);assert.equal(choices.length,4);assert.equal(new Set(choices.map(x=>x.key)).size,4);assert(choices.some(x=>x.key===d.model));assert(!api.scene(d).svg.includes('NaN'));}
const state={},box=new Node('article');let changes=0;let dispose=api.mount(box,state,()=>changes++);
click(box,'Solido');assert.equal(state.answers[0].state,false,'Wrong answer must not unlock model');
click(box,'Gassoso');assert.equal(state.answers[0].state,true);assert.equal(state.answers[0].model,false);
click(box,api.descriptions[api.choices(api.deck[0],0).find(x=>x.key!==api.deck[0].model).key]);assert.equal(state.answers[0].model,false);
click(box,api.descriptions.isolated);assert.equal(state.answers[0].model,true);
click(box,'Prossima carta →');assert.equal(state.index,1);dispose();
const box2=new Node('article');api.mount(box2,state,()=>changes++);assert.equal(state.index,1);assert.equal(state.answers[0].model,true,'Unmount preserves progress');
for(let i=1;i<18;i++){const d=api.deck[i];click(box2,d.state);click(box2,api.descriptions[d.model]);assert.equal(state.answers[i].model,true);assert(!state.done,'Completion requires explicit final confirmation');click(box2,i===17?'Completa il mazzo ✓':'Prossima carta →');}
assert(state.done);assert.equal(state.answers.filter(x=>x.model).length,18);click(box2,'← Carta precedente');assert(state.done);assert.equal(state.index,16);console.log('PASS: 18 cards, wrong answers, remount, navigation, completion and model choices. Changes:',changes);
