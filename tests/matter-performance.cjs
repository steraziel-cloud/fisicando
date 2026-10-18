const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/reader-matter-models.js'),'utf8'),ctx);
let src=fs.readFileSync(path.join(__dirname,'../assets/reader-matter-approved.js'),'utf8');
src=src.replace(' function animate(root,',' window.testPainter=painter;\n function animate(root,');vm.runInContext(src,ctx);
let rebuilds=0,nodes=[];const layer={set innerHTML(s){rebuilds++;nodes=[...s.matchAll(/<([A-Za-z][\w:-]*)([^<>]*?)\/?\s*>/g)].map(m=>({attrs:Object.fromEntries([...m[2].matchAll(/([\w:-]+)="([^"]*)"/g)].map(a=>[a[1],a[2]])),setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]}}))},querySelectorAll(){return nodes}};
const paint=ctx.window.testPainter(layer);const engine=ctx.window.GatitoMatterApproved.createMotion('nebbia');paint(engine.frame());const first=nodes[0];for(let i=0;i<5;i++){engine.advance(.1);paint(engine.frame());}assert.equal(rebuilds,1);assert.equal(nodes[0],first);assert(nodes.some(n=>n.attrs.cx));
paint('<circle cx="1"/>');assert.equal(rebuilds,2);paint('<circle cx="2"/>');assert.equal(rebuilds,2);assert.equal(nodes[0].attrs.cx,'2');
const scene=ctx.window.GatitoMatterApproved.scene({id:'nebbia',name:'Nebbia'},engine);assert.equal(scene.engine,engine);
console.log('PASS: fog SVG retains all nodes across animation frames; changed attributes update; topology change rebuilds; scene reuses its existing engine.');
for(const id of ['nebbia','aria','ghiaccio','acciaio','spremuta']){const e=ctx.window.GatitoMatterApproved.createMotion(id);e.frame();const start=performance.now();for(let i=0;i<20;i++){e.advance(.1);e.frame();}console.log(id,((performance.now()-start)/20).toFixed(2),'ms/frame generation');}
