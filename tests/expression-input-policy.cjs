const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname,'../assets/expression-input-policy.js'),'utf8');
class Field{
 constructor(id='',type='text',maxLength=8){Object.assign(this,{id,type,maxLength,value:'',selectionStart:0,selectionEnd:0,dataset:{},attrs:{},readOnly:false,disabled:false,events:[],nodeType:1});}
 matches(){return !['checkbox','radio','button','submit','hidden'].includes(this.type);}
 querySelectorAll(){return[];}setAttribute(k,v){this.attrs[k]=v;}
 setRangeText(text,a,b){this.value=this.value.slice(0,a)+text+this.value.slice(b);this.selectionStart=this.selectionEnd=a+text.length;}
 dispatchEvent(e){this.events.push(e.type);}
}
function setup(touch){const fields=[new Field('answer'),new Field('period-digits'),new Field('entry'),new Field('checkbox','checkbox')],listeners={};let observer;
 const c={window:{navigator:{maxTouchPoints:touch?5:0},matchMedia:()=>({matches:touch})},document:{body:{},querySelectorAll:()=>fields.filter(f=>f.matches()),addEventListener(type,fn){(listeners[type]??=[]).push(fn)}},MutationObserver:class{constructor(fn){observer=fn}observe(){}},Event:class{constructor(type,options){this.type=type;Object.assign(this,options)}}};vm.createContext(c);vm.runInContext(source,c);
 function event(type,field,props={}){const e={target:field,defaultPrevented:false,preventDefault(){this.defaultPrevented=true},...props};for(const fn of listeners[type]||[])fn(e);return e;}
 return{fields,event,add(field){fields.push(field);observer([{addedNodes:[field]}]);},prepare:c.window.GatitoExpressionInputs.prepare};
}
const mobile=setup(true),[answer,period,entry,checkbox]=mobile.fields;
assert.equal(answer.attrs.inputmode,'none');assert(answer.readOnly);assert(period.readOnly);assert(!entry.readOnly);assert(!entry.attrs.inputmode);assert(!checkbox.readOnly);
for(const k of ['1','2','3']){assert(mobile.event('keydown',answer,{key:k}).defaultPrevented);}
assert.equal(answer.value,'123');answer.selectionStart=1;answer.selectionEnd=2;mobile.event('keydown',answer,{key:'7'});assert.equal(answer.value,'173');mobile.event('keydown',answer,{key:'Backspace'});assert.equal(answer.value,'13');answer.selectionStart=answer.selectionEnd=0;mobile.event('keydown',answer,{key:'Delete'});assert.equal(answer.value,'3');
answer.value='12345678';answer.selectionStart=answer.selectionEnd=8;mobile.event('keydown',answer,{key:'9'});assert.equal(answer.value,'12345678');answer.selectionStart=2;answer.selectionEnd=5;mobile.event('paste',answer,{clipboardData:{getData:()=>'-9'}});assert.equal(answer.value,'12-9678');let copied;answer.selectionStart=2;answer.selectionEnd=4;mobile.event('cut',answer,{clipboardData:{setData:(type,text)=>{copied=text}}});assert.equal(copied,'-9');assert.equal(answer.value,'12678');assert(answer.events.includes('input'));
let submits=0;answer.form={requestSubmit(){submits++}};mobile.event('keydown',answer,{key:'Enter'});assert.equal(submits,1);
assert(!mobile.event('keydown',answer,{key:'ArrowUp'}).defaultPrevented);assert(!mobile.event('keydown',answer,{key:'ArrowDown'}).defaultPrevented);assert(!mobile.event('keydown',answer,{key:'Tab'}).defaultPrevented);assert(!mobile.event('keydown',answer,{key:'a',ctrlKey:true}).defaultPrevented);
const before=answer.value;mobile.event('keydown',answer,{key:'9',defaultPrevented:true});assert.equal(answer.value,before);mobile.event('keydown',entry,{key:'9'});assert.equal(entry.value,'');
const auxiliary=new Field('factor-result');mobile.add(auxiliary);assert(auxiliary.readOnly);assert.equal(auxiliary.attrs.inputmode,'none');mobile.event('keydown',auxiliary,{key:'4'});assert.equal(auxiliary.value,'4');
const disabled=new Field('disabled');disabled.disabled=true;mobile.add(disabled);assert(!disabled.readOnly);
const desktop=setup(false);assert.equal(desktop.fields[0].attrs.inputmode,'none');assert(!desktop.fields[0].readOnly);assert(!desktop.event('keydown',desktop.fields[0],{key:'4'}).defaultPrevented);
console.log('Input policy: touch fields suppress native editing; explicit text entry and desktop typing remain native; physical typing, selections, Backspace/Delete, length limits, paste/cut, input events, Enter, arrows and dynamically added auxiliary fields pass');
