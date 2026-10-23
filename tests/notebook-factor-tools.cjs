const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const ctx={window:{}};for(const file of ['math-notebook.js','factor-notebook.js'])vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets',file),'utf8'),ctx);
const {Notebook,nodes,math}=ctx.window.GatitoMathNotebook;
function add(model,n,d){const row=nodes.seq(),f=nodes.frac();f.top.items[0].value=String(n);f.bottom.items[0].value=String(d);row.items=[f];model.add(row);return f.id;}
const model=new Notebook(),a=add(model,18,30),b=add(model,7,10);
assert.throws(()=>math.factorPlan(model,'mcd'));
let p=math.factorPlan(model,'mcd',a);assert.equal(p.numbers.join(','),'18,30');
model.begin(a,'6');model.answer('3');model.answer('5');
p=math.factorPlan(model,'mcm');assert.equal(p.numbers.join(','),'5,10');
assert.equal(math.factorPlan(model,'mcd',a).numbers.join(','),'3,5');
const single=new Notebook(),c=add(single,80,44);assert.equal(math.factorPlan(single,'mcd').numbers.join(','),'80,44');assert.throws(()=>math.factorPlan(single,'mcm'));
const zero=new Notebook();add(zero,0,5);assert.throws(()=>math.factorPlan(zero,'mcd'));
const huge=new Notebook();add(huge,'1000000000000',2);assert.throws(()=>math.factorPlan(huge,'mcd'));
assert.equal(model.rows[0].items[0].bottom.items[0].value,'5');
console.log('PASS: MCD from the selected/current fraction, mcm from current denominators after reduction, ambiguous/zero/oversized requests rejected, original work retained.');
