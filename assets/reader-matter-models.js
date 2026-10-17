/* Original educational models: deterministic 3D coordinates, orthographic camera,
   depth-sorted shaded spheres. Scientific sources and simplifications: docs/materia-carte.md. */
window.GatitoMatterModels=(()=>{
 'use strict';
 const colors={H:'#dcefff',O:'#e84966',C:'#4b5366',N:'#477cdc',He:'#ecb740',Ar:'#a783cf',Na:'#a476d4',Cl:'#51b985',Ca:'#459dce',Si:'#d3a353',Cu:'#c47a48',Zn:'#78b8c9',Hg:'#a4b5c9'};
 const add=(a,b)=>a.map((v,i)=>v+b[i]),mul=(a,k)=>a.map(v=>v*k),dist=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));
 function rng(seed=19){return()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;};}
 function world(){return{atoms:[],bonds:[],frames:[]};}
 function atom(w,p,k,r=.2){w.atoms.push({p,k,r});return w.atoms.length-1;}
 function bond(w,a,b){w.bonds.push([a,b]);}
 function rotate(p,a){const c=Math.cos(a),s=Math.sin(a),y=p[1]*.87-p[2]*.49,z=p[1]*.49+p[2]*.87;return[p[0]*c-y*s,p[0]*s+y*c,z];}
 function molecule(w,p,type='water',angle=0,size=1){
  const pts=type==='water'?[[0,0,0,'O',.25],[.42,.29,0,'H',.16],[-.42,.29,0,'H',.16]]:type==='co2'?[[-.5,0,0,'O',.24],[0,0,0,'C',.24],[.5,0,0,'O',.24]]:[[-.2,0,0,type,.22],[.2,0,0,type,.22]];
  const ids=pts.map(q=>atom(w,add(p,mul(rotate(q.slice(0,3),angle),size)),q[3],q[4]*size));
  if(type==='water'){bond(w,ids[0],ids[1]);bond(w,ids[0],ids[2]);}else for(let i=1;i<ids.length;i++)bond(w,ids[i-1],ids[i]);
 }
 function frame(w,origin,basis){const p=[];for(let i=0;i<8;i++)p.push(add(origin,basis.reduce((v,b,k)=>add(v,mul(b,(i>>k)&1)),[0,0,0])));for(let i=0;i<8;i++)for(let k=0;k<3;k++)if(!(i&(1<<k)))w.frames.push([p[i],p[i|(1<<k)]]);}
 function projection(p,yaw=.58,pitch=.39){const c=Math.cos(yaw),s=Math.sin(yaw),u=c*p[0]-s*p[1],v=s*p[0]+c*p[1];return[u,Math.sin(pitch)*v-Math.cos(pitch)*p[2],Math.cos(pitch)*v+Math.sin(pitch)*p[2]];}
 function draw(w,rect=[20,18,380,280],camera={},reference=null){
  const project=p=>projection(p,camera.yaw??.58,camera.pitch??.39),a=w.atoms.map(o=>({...o,q:project(o.p)}));
  const bounds=(reference?reference.atoms.map(o=>({...o,q:project(o.p)})):a).flatMap(o=>[[o.q[0]-o.r,o.q[1]-o.r],[o.q[0]+o.r,o.q[1]+o.r]]);
  w.frames.forEach(e=>e.forEach(p=>bounds.push(project(p))));
  if(!bounds.length)return'';
  const min=[Math.min(...bounds.map(p=>p[0])),Math.min(...bounds.map(p=>p[1]))],max=[Math.max(...bounds.map(p=>p[0])),Math.max(...bounds.map(p=>p[1]))];
  const scale=Math.min(rect[2]/(max[0]-min[0]||1),rect[3]/(max[1]-min[1]||1)),cx=rect[0]+rect[2]/2,cy=rect[1]+rect[3]/2;
  const screen=q=>[cx+(q[0]-(min[0]+max[0])/2)*scale,cy+(q[1]-(min[1]+max[1])/2)*scale];
  const stroke=(p,q,color,width,opacity=1)=>{const [x,y]=screen(p),[u,v]=screen(q);return`<line x1="${x}" y1="${y}" x2="${u}" y2="${v}" stroke="${color}" stroke-width="${width}" opacity="${opacity}" stroke-linecap="round"/>`;};
  const pieces=[];w.frames.forEach(e=>pieces.push({z:-999,html:stroke(project(e[0]),project(e[1]),'#718ca3',1.3,.52)}));
  w.bonds.forEach(([i,j])=>pieces.push({z:(a[i].q[2]+a[j].q[2])/2-.015,html:stroke(a[i].q,a[j].q,'#93a4b8',Math.max(1.4,scale*.075))}));
  a.forEach(o=>{const [x,y]=screen(o.q),r=o.r*scale;pieces.push({z:o.q[2],html:`<circle cx="${x+.7}" cy="${y+1.1}" r="${r}" fill="#31465a" opacity=".09"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#mm-${o.k})" stroke="#243345" stroke-opacity=".2" stroke-width=".55"/>`});});
  return pieces.sort((a,b)=>a.z-b.z).map(o=>o.html).join('');
 }
 function hull(points){points.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const cross=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);const half=ps=>{const h=[];for(const p of ps){while(h.length>1&&cross(h.at(-2),h.at(-1),p)<=0)h.pop();h.push(p);}return h;};return [...half(points).slice(0,-1),...half([...points].reverse()).slice(0,-1)];}
 function phase(w,rect,fill){
  /* Bound the actual projected circles, not an unrelated hand-positioned contour. */
  const coords=w.atoms.map(o=>({...o,q:projection(o.p)})),min=[Infinity,Infinity],max=[-Infinity,-Infinity];coords.forEach(o=>{for(let i=0;i<2;i++){min[i]=Math.min(min[i],o.q[i]-o.r);max[i]=Math.max(max[i],o.q[i]+o.r);}});
  const s=Math.min(rect[2]/(max[0]-min[0]),rect[3]/(max[1]-min[1])),cx=rect[0]+rect[2]/2,cy=rect[1]+rect[3]/2;
  const pts=coords.flatMap(o=>Array.from({length:12},(_,i)=>[cx+(o.q[0]-(min[0]+max[0])/2)*s+Math.cos(i*Math.PI/6)*(o.r*s+7),cy+(o.q[1]-(min[1]+max[1])/2)*s+Math.sin(i*Math.PI/6)*(o.r*s+7)]));
  const h=hull(pts),path='M'+h.map(p=>p.join(',')).join('L')+'Z';
  return`<path d="${path}" fill="${fill}" stroke="#72a2bb" stroke-width="1.4"/>${draw(w,rect)}`;
 }
 function sucrose(w,center,angle,size){
  const m=world(),rings=[];
  for(const [n,x,y] of [[6,-.95,0],[5,1,.15]]){const ring=[];for(let k=0;k<n;k++){const a=k*2*Math.PI/n;ring.push(atom(m,[x+Math.cos(a)*.66,y+Math.sin(a)*.66,Math.sin(k*1.7)*.17],k===0?'O':'C',k===0?.19:.2));}ring.forEach((id,i)=>bond(m,id,ring[(i+1)%n]));rings.push(ring);}
  const bridge=atom(m,[.1,.54,.15],'O',.19);bond(m,rings[0][1],bridge);bond(m,bridge,rings[1][1]);
  const branches=[[rings[0][5],[-1.7,-.72,.15]],[rings[1][1],[1.7,1.1,.15]],[rings[1][4],[1.9,-.7,-.1]]];
  const carbons=branches.map(([id,p])=>{const c=atom(m,p,'C',.2);bond(m,id,c);return c;});
  const oh=[rings[0][2],rings[0][3],rings[0][4],carbons[0],rings[1][2],rings[1][3],carbons[1],carbons[2]];
  oh.forEach((id,i)=>{const p=m.atoms[id].p,delta=[Math.cos(i*2.1)*.53,Math.sin(i*2.1)*.53,i%2?.3:-.3],o=atom(m,add(p,delta),'O',.19);bond(m,id,o);});
  const heavy=m.atoms.length;for(let i=0;i<heavy;i++){const degree=m.bonds.filter(e=>e.includes(i)).length,missing=(m.atoms[i].k==='C'?4:2)-degree;for(let j=0;j<missing;j++){const h=atom(m,add(m.atoms[i].p,[Math.cos(i*2.4+j*2)*.36,Math.sin(i*2.4+j*2)*.36,j%2?.29:-.29]),'H',.12);bond(m,i,h);}}
  const offset=w.atoms.length;m.atoms.forEach(a=>atom(w,add(center,mul(rotate(a.p,angle),size)),a.k,a.r*size));m.bonds.forEach(([a,b])=>bond(w,a+offset,b+offset));
 }
 function build(id){
  const w=world(),random=rng(203),jitter=(a=.4)=>(random()-.5)*a;
  if(['elio','aria','co2','acqua','rubinetto','ghiaccio'].includes(id)){
   const gas=['elio','aria','co2'].includes(id),spacing=gas?2.5:1.15;
   let count=0;for(let z=0;z<2;z++)for(let y=0;y<3;y++)for(let x=0;x<3;x++){
    const p=id==='ghiaccio'?[(x+(y%2)*.5)*spacing,y*spacing*.87,z*1.15]:[x*spacing+jitter(gas?1.4:.6),y*spacing+jitter(gas?1.4:.6),z*spacing+jitter(gas?1.4:.6)];
    if(id==='elio')atom(w,p,'He',.22);
    else if(id==='aria'){if(count===17)atom(w,p,'Ar',.22);else molecule(w,p,count%5?'N':'O',random()*6.28);}
    else if(id==='co2')molecule(w,p,'co2',random()*6.28);
    else if(id==='rubinetto'&&(count===4||count===13))atom(w,p,count===4?'Na':'Cl',count===4?.24:.3);
    else molecule(w,p,'water',id==='ghiaccio'?(x+y+z)%2*Math.PI:random()*6.28);
    count++;
   }
  }
  if(id==='mercurio'){while(w.atoms.length<65){const p=[random()*4,random()*3,random()*2.4];if(w.atoms.every(a=>dist(a.p,p)>.64))atom(w,p,'Hg',.36);}}
  if(id==='ottone'){const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]];for(let x=0;x<3;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)fcc.forEach(q=>atom(w,add(q,[x,y,z]),random()<.25?'Zn':'Cu',.29));}
  if(id==='sale'){for(let x=0;x<3;x++)for(let y=0;y<3;y++)for(let z=0;z<3;z++)atom(w,[x,y,z],(x+y+z)%2?'Na':'Cl',(x+y+z)%2?.25:.37);frame(w,[0,0,0],[[2,0,0],[0,2,0],[0,0,2]]);}
  if(id==='calcio'){
   const a=1.25,b=1.29,c=.84,u=.275,v=.325,wrap=x=>(x+1)%1;
   const basis=[[0,0,0,'Ca'],[.5,.5,.5,'Ca'],[u,v,0,'Cl'],[wrap(-u),wrap(-v),0,'Cl'],[.5-u,.5+v,.5,'Cl'],[.5+u,.5-v,.5,'Cl']];
   for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)basis.forEach(q=>atom(w,[(x+q[0])*a,(y+q[1])*b,(z+q[2])*c],q[3],q[3]==='Ca'?.14:.21));frame(w,[0,0,0],[[2*a,0,0],[0,2*b,0],[0,0,2*c]]);
  }
  if(id==='grafite'){
   for(let layer=0;layer<3;layer++){const points=new Map(),pairs=new Map();for(let x=0;x<4;x++)for(let y=0;y<2;y++){const ring=[];for(let k=0;k<6;k++){const a=k*Math.PI/3,p=[x*1.5+Math.cos(a),y*Math.sqrt(3)+(x%2)*Math.sqrt(3)/2+Math.sin(a),layer*1.7],key=p.map(v=>v.toFixed(5)).join(',');if(!points.has(key))points.set(key,atom(w,p,'C',.17));ring.push(points.get(key));}ring.forEach((v,i)=>{const e=[v,ring[(i+1)%6]].sort((a,b)=>a-b);pairs.set(e.join(','),e);});}pairs.forEach(e=>bond(w,...e));}
  }
  if(id==='sic'){
   const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]],seen=new Set();for(let x=0;x<=1;x++)for(let y=0;y<=1;y++)for(let z=0;z<=1;z++)for(const q of fcc)for(let b=0;b<2;b++){const p=q.map((v,i)=>v+[x,y,z][i]+b*.25),key=p.join(',');if(p.every(v=>v<=1)&&!seen.has(key)){seen.add(key);atom(w,p,b?'C':'Si',b?.06:.085);}}
   w.atoms.forEach((a,i)=>w.atoms.forEach((b,j)=>{if(j>i&&Math.abs(dist(a.p,b.p)-Math.sqrt(3)/4)<1e-5)bond(w,i,j);}));frame(w,[0,0,0],[[1,0,0],[0,1,0],[0,0,1]]);
  }
  if(id==='quarzo'){
   /* CMU alpha quartz: P3221, a=4.9137 Å,c=5.4047 Å. Generate orbit then real Si–O neighbours. */
   const R=p=>[-p[1],p[0]-p[1],p[2]+2/3],S=p=>[p[0]-p[1],-p[1],-p[2]],wrap=x=>((x%1)+1)%1;
   const orbit=p=>{const out=[];for(let q of [p,S(p)])for(let k=0;k<3;k++){const a=q.map(wrap);if(!out.some(b=>dist(a,b)<1e-5))out.push(a);q=R(q);}return out;};
   for(const [p,k] of [[[.4697,0,0],'Si'],[[.4133,.2672,.1188],'O']])for(const q of orbit(p))for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++){const a=q[0]+x,b=q[1]+y,c=q[2]+z;atom(w,[a-b*.5,b*Math.sqrt(3)/2,c*5.4047/4.9137],k,k==='Si'?.1:.075);}
   w.atoms.forEach((a,i)=>w.atoms.forEach((b,j)=>{if(j>i&&a.k!==b.k&&dist(a.p,b.p)<1.7/4.9137)bond(w,i,j);}));
  }
  if(id==='zucchero')for(let x=0;x<3;x++)for(let y=0;y<2;y++)sucrose(w,[x*3.6,y*3.2,(x+y)%2*.3],.7,.6);
  if(id==='pet'){
   for(let chain=0;chain<3;chain++){
    let previous=null;const map=p=>[p[0],p[1]+chain*2.7+Math.sin(p[0]*.55+chain)*.55,p[2]+Math.cos(p[0]*.4+chain)*.45];
    for(let rep=0;rep<3;rep++){const x=rep*4.6,ids=[];[[0,0,'O'],[.5,.3,'C'],[1,0,'C'],[1.5,.3,'O'],[2,0,'C']].forEach(([dx,y,k])=>ids.push(atom(w,map([x+dx,y,0]),k,.16)));ids.forEach((v,i)=>{if(i)bond(w,ids[i-1],v);});if(previous!==null)bond(w,previous,ids[0]);const o=atom(w,map([x+2,-.55,0]),'O',.16);bond(w,ids.at(-1),o);
     const ring=[];for(let i=0;i<6;i++)ring.push(atom(w,map([x+3+.6*Math.cos(i*Math.PI/3),.6*Math.sin(i*Math.PI/3),.1*Math.sin(i*2)]),'C',.16));ring.forEach((v,i)=>bond(w,v,ring[(i+1)%6]));bond(w,ids.at(-1),ring[3]);const c=atom(w,map([x+4.1,0,0]),'C',.16),o2=atom(w,map([x+4.1,-.55,0]),'O',.16);bond(w,ring[0],c);bond(w,c,o2);previous=c;
    }
   }
  }
  return w;
 }
 function heterogeneous(id){
  const background=world(),random=rng(91),rects=id==='nebbia'?[[58,36,114,104],[238,170,110,94]]:[[48,52,125,98],[236,161,120,98]];
  const excluded=(x,y)=>rects.some(([a,b,w,h])=>x>a-14&&x<a+w+14&&y>b-14&&y<b+h+14);
  let base='';for(let i=0;i<58;i++){const x=20+random()*380,y=18+random()*280;if(excluded(x,y))continue;const m=world();if(id==='nebbia'){if(i%3)continue;molecule(m,[0,0,0],i%5?'N':'O',random()*6.28);}else if(id==='spremuta')molecule(m,[0,0,0],'water',random()*6.28);else{for(let j=0;j<5;j++){const v=atom(m,[j*.45,Math.sin(j*2)*.3,Math.cos(j)*.2],j%3?'C':'O',.2);if(j)bond(m,v-1,v);}}base+=draw(m,[x,y,id==='nebbia'?13:21,id==='nebbia'?10:18]);}
  rects.forEach((rect,index)=>{const w=world();if(id==='nebbia'){for(let i=0;i<22;i++){const a=i*2.4,r=Math.sqrt(i)*.3;molecule(w,[Math.cos(a)*r,Math.sin(a)*r,(random()-.5)*1.4],'water',random()*6.28,.7);}}else{for(let row=0;row<5;row++)for(let col=0;col<6;col++){const p=[col*.5,row*.46,(col%2)*.2+random()*.14],v=atom(w,p,id==='biscotto'?(random()<.7?'C':'O'):(col%3?'C':'O'),.19);if(col)bond(w,v-1,v);if(row&&col%2===0)bond(w,v-6,v);}}base+=phase(w,rect,id==='nebbia'?'#d7effc':id==='spremuta'?'#f4d5a7':'#d3c0b4');});return base;
 }
 function scene(d){
  const defs=Object.entries(colors).map(([k,c])=>`<radialGradient id="mm-${k}" cx="30%" cy="24%" r="78%"><stop offset="0" stop-color="white"/><stop offset=".24" stop-color="${c}"/><stop offset=".7" stop-color="${c}"/><stop offset="1" stop-color="#23334c"/></radialGradient>`).join('');
  const body=['nebbia','spremuta','biscotto'].includes(d.id)?heterogeneous(d.id):draw(build(d.id),[28,25,364,266],d.id==='grafite'?{yaw:.22,pitch:.65}:{});
  return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 316" role="img" aria-label="Struttura del campione ${d.name.replace(/[&<>\"]/g,'')}"><defs>${defs}</defs><g class="mm-world">${body}</g></svg>`};
 }
 const supportsMotion=id=>['elio','acqua','sale'].includes(id);
 function createMotion(id){
  if(!supportsMotion(id))return null;
  const w=build(id),base=w.atoms.map(a=>({...a,p:[...a.p]})),random=rng(id==='elio'?111:213);
  let time=0;
  const solid=id==='sale',water=id==='acqua',size=water?3:1;
  const groups=Array.from({length:w.atoms.length/size},(_,i)=>{
   const center=[...base[i*size].p],velocity=[random()-.5,random()-.5,random()-.5],n=Math.hypot(...velocity)||1,speed=water?.28:.56;
   return{center,velocity:mul(velocity,speed/n),offsets:base.slice(i*size,(i+1)*size).map(a=>a.p.map((v,k)=>v-center[k])),spin:(random()-.5)*.5};
  });
  const radius=water?.43:.22;
  const lo=[0,1,2].map(k=>Math.min(...groups.map(g=>g.center[k]))-(water?.22:.5));
  const hi=[0,1,2].map(k=>Math.max(...groups.map(g=>g.center[k]))+(water?.22:.5));
  /* Stable projection bounds: motion never changes the drawing scale or the camera. */
  const reference=world();if(solid)base.forEach(a=>reference.atoms.push({...a,r:a.r+.04}));
  else for(let i=0;i<8;i++)reference.atoms.push({p:[0,1,2].map(k=>(i&(1<<k)?hi:lo)[k]),k:'H',r:water?.78:.26});
  const spin=(p,a,b)=>{const c=Math.cos(a),s=Math.sin(a),u=[p[0]*c-p[1]*s,p[0]*s+p[1]*c,p[2]],cb=Math.cos(b),sb=Math.sin(b);return[u[0],u[1]*cb-u[2]*sb,u[1]*sb+u[2]*cb];};
  function update(){
   if(solid)w.atoms.forEach((a,i)=>{a.p=base[i].p.map((v,k)=>v+.018*Math.sin(time*(5.6+k*.7)+i*2.13+k));});
   else groups.forEach((g,i)=>g.offsets.forEach((p,j)=>{const offset=water?spin(p,g.spin*time,.13*Math.sin(time*.7+i)):p;w.atoms[i*size+j].p=add(g.center,offset);}));
  }
  function integrate(dt){
   for(const g of groups)for(let k=0;k<3;k++){
    g.center[k]+=g.velocity[k]*dt;
    if(g.center[k]<lo[k]){g.center[k]=lo[k]+(lo[k]-g.center[k]);g.velocity[k]=Math.abs(g.velocity[k]);}
    if(g.center[k]>hi[k]){g.center[k]=hi[k]-(g.center[k]-hi[k]);g.velocity[k]=-Math.abs(g.velocity[k]);}
   }
   for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++){
    const a=groups[i],b=groups[j],delta=b.center.map((v,k)=>v-a.center[k]),distance=Math.hypot(...delta);
    if(distance>=2*radius||distance<1e-8)continue;
    const normal=mul(delta,1/distance),overlap=(2*radius-distance)/2;
    for(let k=0;k<3;k++){a.center[k]-=normal[k]*overlap;b.center[k]+=normal[k]*overlap;}
    const approach=b.velocity.reduce((v,x,k)=>v+(x-a.velocity[k])*normal[k],0);
    if(approach<0)for(let k=0;k<3;k++){a.velocity[k]+=approach*normal[k];b.velocity[k]-=approach*normal[k];}
   }
   /* A collision close to a wall may push a centre past the wall by a tiny amount. */
   groups.forEach(g=>g.center.forEach((v,k)=>{if(v<lo[k]){g.center[k]=lo[k];g.velocity[k]=Math.abs(g.velocity[k]);}if(v>hi[k]){g.center[k]=hi[k];g.velocity[k]=-Math.abs(g.velocity[k]);}}));
  }
  function advance(dt){
   const elapsed=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.2));time+=elapsed;
   if(!solid){const steps=Math.max(1,Math.ceil(elapsed/.012));for(let i=0;i<steps;i++)integrate(elapsed/steps);}
   update();return w;
  }
  function frame(){return draw(w,[28,25,364,266],{},reference);}
  update();return{advance,frame,world:w,base,groups,lo,hi,get time(){return time;}};
 }
 function animate(root,d,engine,{paused=false}={}){
  if(!engine)return null;
  const layer=root.querySelector('.mm-world');if(!layer)return null;
  let stopped=false,handle=0,last=0,previousDraw=0;
  const paint=()=>{layer.innerHTML=engine.frame();};
  const cancel=()=>{if(handle)cancelAnimationFrame(handle);handle=0;last=0;previousDraw=0;};
  function tick(now){
   handle=0;if(stopped||paused||document.hidden)return;
   if(!root.isConnected){dispose();return;}
   if(!last){last=now;previousDraw=now;}
   /* 24 fps is sufficient for this explanatory motion and avoids excessive SVG work. */
   if(now-previousDraw>=1000/24){engine.advance(Math.min((now-last)/1000,.06));last=now;previousDraw=now;paint();}
   handle=requestAnimationFrame(tick);
  }
  const start=()=>{if(!stopped&&!paused&&!document.hidden&&!handle)handle=requestAnimationFrame(tick);};
  function setPaused(value){paused=!!value;cancel();if(!paused)start();}
  function visibility(){cancel();start();}
  function dispose(){stopped=true;cancel();document.removeEventListener('visibilitychange',visibility);}
  document.addEventListener('visibilitychange',visibility);paint();start();
  return{setPaused,dispose,get paused(){return paused;}};
 }

 return{scene,build,projection,hull,createMotion,animate,supportsMotion};
})();

