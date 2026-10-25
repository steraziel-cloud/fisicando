const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
/* Minimal DOM boundary: exercise the real mount/dispose and event handlers,
   without substituting the arithmetic model or the session implementation. */
class Host {
 constructor(){this.handlers={};this.classList={add(){},toggle(){}};this.inputs=[];this.dataset={};}
 setAttribute(){} hasAttribute(){return false} focus(){} remove(){} insertAdjacentHTML(){}
 addEventListener(type,fn){this.handlers[type]=fn} removeEventListener(){}
 set innerHTML(html){this.html=html;this.inputs=[...html.matchAll(/<input\b[^>]*>/g)].flatMap(([tag])=>{const name=tag.match(/name="([^"]+)"/)?.[1];return name?[{name,value:tag.match(/value="([^"]*)"/)?.[1]||'',focus(){},setSelectionRange(){}}]:[]});}
 get innerHTML(){return this.html}
 querySelectorAll(selector){return selector==='input[name]'?this.inputs:[];}
 querySelector(selector){const name=selector.match(/^\[name="([^"]+)"\]$/)?.[1];return name?this.inputs.find(input=>input.name===name)||null:null;}
}
const parent={append(host){this.host=host}},dockStates=[],documentHandlers={};
const dockFactory={mount(host,{state}={}){dockStates.push(state);return{sync(){},dispose(){},getState(){return{open:true,position:{x:100,y:200}};}};}};
const context={window:{GatitoNotebookDock:dockFactory},document:{createElement(){return new Host()},addEventListener(type,fn){documentHandlers[type]=fn},removeEventListener(){}},setTimeout,clearTimeout};
context.window.addEventListener=()=>{};context.window.removeEventListener=()=>{};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/math-notebook.js'),'utf8'),context);
const api=context.window.GatitoMathNotebook;
const mount=key=>api.mount(parent,{sessionKey:key,liveEntry:true});
let notebook=mount('practice'),host=parent.host;
const row=api.nodes.seq(),f=api.nodes.frac();f.top.items[0].value='18';f.bottom.items[0].value='24';row.items=[f];notebook.model.add(row);
function action(host,name){const button={dataset:{nbAction:name}};host.handlers.click({target:{closest(selector){return selector==='[data-nb-action]'?button:null;}}});}
function select(host,key){const pick={dataset:{nbSelect:key},closest(){return null}};host.handlers.click({target:{closest(selector){return selector==='[data-nb-select]'?pick:null;}}});}
function submit(host,type,values){const form={dataset:{nbForm:type},elements:Object.fromEntries(Object.entries(values).map(([key,value])=>[key,{value}]))};host.handlers.submit({preventDefault(){},target:{closest(){return form}}});}
select(host,f.id);action(host,'simplify');
assert(host.html.includes('data-nb-form="divisor"'));host.inputs.find(input=>input.name==='divisor').value='6';
documentHandlers.pointerdown({target:{closest(){return null}}});assert(host.html.includes('data-nb-form="divisor"'));
assert.equal(host.gmNotebook,notebook);notebook.dispose();
notebook=mount('practice');host=parent.host;assert.equal(host.inputs.find(input=>input.name==='divisor').value,'6');assert.equal(dockStates.at(-1).position.x,100);
submit(host,'divisor',{divisor:'6'});submit(host,'answer',{quotient:'3'});
assert.equal(notebook.model.pending.side,'bottom');action(host,'insert');assert.equal(notebook.model.pending.side,'bottom');assert(!host.html.includes('nb-composer'));notebook.dispose();
notebook=mount('practice');host=parent.host;assert.equal(notebook.model.pending.side,'bottom');assert(host.html.includes('data-nb-form="answer"'));
submit(host,'answer',{quotient:'4'});assert.equal(notebook.model.pending,null);assert.equal(notebook.model.fractionFor(f.id).bottom.items[0].value,'4');
notebook.dispose();const separate=mount('separate');assert.equal(separate.model.rows.length,0);separate.dispose();
const options={sessionKey:'guided',liveEntry:true,comparison:{fractions:[[11,6],[9,4]],selectionOnly:true}};
let guided=api.mount(parent,options);assert.equal(guided.model.rows.length,2);guided.dispose();guided=api.mount(parent,options);assert.equal(guided.model.rows.length,2);assert.equal(parent.host.gmNotebook,guided);
host=parent.host;const left=guided.model.rows[0].items[0].id,right=guided.model.rows[1].items[0].id;
select(host,left);select(host,right);action(host,'equivalent');
submit(host,'common-denominator',{commonDenominator:'12'});submit(host,'multiplier',{multiplier:'2'});submit(host,'answer',{quotient:'22'});
assert(host.html.includes('data-nb-form="multiplier"'));documentHandlers.pointerdown({target:{closest(){return null}}});assert(host.html.includes('data-nb-form="multiplier"'));guided.dispose();
guided=api.mount(parent,options);host=parent.host;assert(host.html.includes('data-nb-form="multiplier"'));
submit(host,'multiplier',{multiplier:'3'});submit(host,'answer',{quotient:'27'});
assert(api.math.comparisonResult(guided.model,[[11,6],[9,4]],'<'));guided.dispose();
console.log('PASS: selected operation and typed divisor survive remount; partial reduction resumes correctly; sessions isolated; comparison seeds do not duplicate; dock position and model binding preserved.');
