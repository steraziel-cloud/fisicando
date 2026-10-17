const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const queue=new Map(),listeners=new Map();let next=0;
const doc={hidden:false,addEventListener:(k,v)=>listeners.set(k,v),removeEventListener:(k,v)=>{if(listeners.get(k)===v)listeners.delete(k);}};
const ctx={window:{},document:doc,requestAnimationFrame:fn=>{queue.set(++next,fn);return next;},cancelAnimationFrame:id=>queue.delete(id)};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/reader-matter-models.js'),'utf8'),ctx);const api=ctx.window.GatitoMatterModels;
const distance=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
for(const id of ['elio','acqua','grafite','aria','sale','spremuta','zucchero','acciaio','co2','sabbia','rubinetto','nebbia','alluminio','bicarbonato','biscotto','diamante','pet','ossigeno']){
 const m=api.createMotion(id),original=m.base.map(a=>[...a.p]),lengths=m.world.bonds.map(([i,j])=>distance(original[i],original[j]));
 const radii=html=>[...html.matchAll(/ r="([^"]+)"/g)].map(x=>+x[1]).sort((a,b)=>a-b);
 const initialRadii=radii(m.frame());for(let frame=0;frame<600;frame++)m.advance(1/30);
 assert(m.world.atoms.every(a=>a.p.every(Number.isFinite)));assert.equal(m.world.atoms.length,original.length);
 const displacements=m.world.atoms.map((a,i)=>distance(a.p,original[i]));assert(Math.max(...displacements)>.005);
 if(m.kind==='solid')assert(Math.max(...displacements)<=m.amplitude*Math.sqrt(3)+1e-9,'Reticolo deformato eccessivamente');
 if(m.kind==='gas'||m.kind==='liquid')m.groups.forEach(g=>g.center.forEach((p,k)=>assert(p>=m.lo[k]-1e-9&&p<=m.hi[k]+1e-9)));
 if(['acqua','aria','co2','rubinetto','zucchero','ossigeno'].includes(id)){m.world.bonds.forEach(([i,j],k)=>assert(Math.abs(distance(m.world.atoms[i].p,m.world.atoms[j].p)-lengths[k])<1e-9,'Gruppetto spezzato'));if(m.kind==='liquid')assert(Math.max(...displacements)>.5,'Il liquido deve diffondere, non solo vibrare');}
 if(m.kind!=='mixture')assert.deepEqual(radii(m.frame()),initialRadii,'La scala cambia durante il movimento');
 console.log('PASS',id,'atoms',original.length,'max displacement',Math.max(...displacements).toFixed(3));
}
assert.equal(api.createMotion('inesistente'),null);
let layer={innerHTML:''},root={isConnected:true,querySelector:()=>layer};const m=api.createMotion('elio'),control=api.animate(root,{id:'elio'},m,{paused:false});
function frame(t){const callbacks=[...queue];queue.clear();callbacks.forEach(([,fn])=>fn(t));}
frame(0);frame(50);frame(100);const t=m.time;assert(t>0);control.setPaused(true);assert.equal(queue.size,0);frame(200);assert.equal(m.time,t);
control.setPaused(false);assert.equal(queue.size,1);frame(10000);assert.equal(m.time,t,'Ripresa con salto temporale');frame(10050);assert(m.time>t);doc.hidden=true;listeners.get('visibilitychange')();assert.equal(queue.size,0);doc.hidden=false;listeners.get('visibilitychange')();assert.equal(queue.size,1);control.dispose();assert.equal(queue.size,0);assert.equal(listeners.size,0);
console.log('PASS pause, resume, tab visibility and disposal.');

