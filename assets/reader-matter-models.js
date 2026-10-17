/* Original educational models: deterministic 3D coordinates, orthographic camera,
   depth-sorted shaded spheres. Scientific sources and simplifications: docs/materia-carte.md. */
window.GatitoMatterModels=(()=>{
 'use strict';
 const colors={H:'#dcefff',O:'#e84966',C:'#4b5366',N:'#477cdc',He:'#ecb740',Ar:'#a783cf',Na:'#a476d4',Cl:'#51b985',Ca:'#459dce',Si:'#d3a353',Cu:'#c47a48',Zn:'#78b8c9',Hg:'#a4b5c9',Al:'#a4b5c9',Fe:'#8ca1b8',Cr:'#b47cd1',Ni:'#65bbad'};
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
  /* Correct heavy-atom connectivity; enlarged rings and outward OH/H placement.
     This is a readable molecular model, not a stereochemical conformer. */
  const m=world(),rings=[];
  for(const [n,cx,phase] of [[6,-1.22,0],[5,1.22,Math.PI-2*Math.PI/5]]){
   const ring=[];for(let i=0;i<n;i++){const a=i*2*Math.PI/n+phase;ring.push(atom(m,[cx+Math.cos(a)*.72,Math.sin(a)*.72,Math.sin(i*2.1)*.15],i===0?'O':'C',i===0?.185:.19));}
   ring.forEach((id,i)=>bond(m,id,ring[(i+1)%n]));rings.push(ring);
  }
  const bridge=atom(m,[-.13,.32,.1],'O',.185);bond(m,rings[0][1],bridge);bond(m,bridge,rings[1][1]);
  const branch=(id,offset)=>{const c=atom(m,add(m.atoms[id].p,offset),'C',.19);bond(m,id,c);return c;};
  const ex=[branch(rings[0][5],[.4,-.54,.1]),branch(rings[1][1],[-.12,.66,.4]),branch(rings[1][4],[.5,.43,-.1])];
  const hydroxyls=[[rings[0][2],[-.35,.57,.15]],[rings[0][3],[-.66,-.04,-.1]],[rings[0][4],[-.36,-.59,.16]],[ex[0],[.45,-.4,-.1]],[rings[1][2],[-.28,-.58,-.12]],[rings[1][3],[.53,-.42,.12]],[ex[1],[-.2,.52,.25]],[ex[2],[.5,.35,.12]]];
  hydroxyls.forEach(([id,offset])=>{const o=atom(m,add(m.atoms[id].p,offset),'O',.185);bond(m,id,o);});
  const heavy=m.atoms.length;
  for(let id=0;id<heavy;id++){
   const neighbours=m.bonds.filter(e=>e.includes(id)).map(e=>e[0]===id?e[1]:e[0]),directions=neighbours.map(j=>{const p=m.atoms[j].p.map((v,k)=>v-m.atoms[id].p[k]);return mul(p,1/Math.hypot(...p));});
   const missing=(m.atoms[id].k==='C'?4:2)-neighbours.length;
   for(let h=0;h<missing;h++){
    let best=null,score=-Infinity;
    for(let i=0;i<60;i++){const z=1-2*(i+.5)/60,r=Math.sqrt(1-z*z),a=i*2.39996323,v=[r*Math.cos(a),r*Math.sin(a),z],s=Math.min(...directions.map(q=>1-v.reduce((sum,x,k)=>sum+x*q[k],0)));if(s>score){score=s;best=v;}}
    directions.push(best);const j=atom(m,add(m.atoms[id].p,mul(best,.4)),'H',.105);bond(m,id,j);
   }
  }
  const offset=w.atoms.length;m.atoms.forEach(a=>atom(w,add(center,mul(rotate(a.p,angle),size)),a.k,a.r*size));m.bonds.forEach(([a,b])=>bond(w,a+offset,b+offset));
 }
 function build(id){
  const w=world(),random=rng(203),jitter=(a=.4)=>(random()-.5)*a;
  if(['elio','aria','co2','acqua','rubinetto','ossigeno'].includes(id)){
   const gas=['elio','aria','co2','ossigeno'].includes(id),spacing=gas?2.5:1.15;
   let count=0;for(let z=0;z<2;z++)for(let y=0;y<3;y++)for(let x=0;x<3;x++){
    const p=[x*spacing+jitter(gas?1.4:.6),y*spacing+jitter(gas?1.4:.6),z*spacing+jitter(gas?1.4:.6)];
    if(id==='elio')atom(w,p,'He',.22);
    else if(id==='aria'){if(count===17)atom(w,p,'Ar',.22);else molecule(w,p,count%5?'N':'O',random()*6.28);}
    else if(id==='ossigeno')molecule(w,p,'O',random()*6.28);
    else if(id==='co2')molecule(w,p,'co2',random()*6.28);
    else if(id==='rubinetto'&&(count===4||count===13))atom(w,p,count===4?'Na':'Cl',count===4?.24:.3);
    else molecule(w,p,'water',random()*6.28);
    count++;
   }
  }
  if(['alluminio','acciaio'].includes(id)){
   /* FCC aluminium / selected single-phase austenitic stainless steel.
      Fe/Cr/Ni only; trace C and minor alloying elements intentionally omitted. */
   const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]];let i=0;
   for(let x=0;x<3;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)fcc.forEach(q=>{
    const n=(i++*19)%48,k=id==='alluminio'?'Al':n<9?'Cr':n<14?'Ni':'Fe';atom(w,add(q,[x,y,z]),k,.29);
   });
  }
  if(id==='sale'){for(let x=0;x<3;x++)for(let y=0;y<3;y++)for(let z=0;z<3;z++)atom(w,[x,y,z],(x+y+z)%2?'Na':'Cl',(x+y+z)%2?.25:.37);frame(w,[0,0,0],[[2,0,0],[0,2,0],[0,0,2]]);}
  if(id==='bicarbonato'){
   /* Schematic repeating ionic solid: Na+ and planar HCO3- ions in 1:1 count.
      Internal covalent links only; no discrete NaHCO3 molecules or fake Na-C bonds.
      Placement is an observation model, NOT the crystallographic unit cell. */
   for(let x=0;x<3;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++){
    const center=[x*2,y*1.8,z*1.6],c=atom(w,center,'C',.2),o=[];
    for(let j=0;j<3;j++){const a=j*2*Math.PI/3+.2,p=add(center,[Math.cos(a)*.58,Math.sin(a)*.58,0]);o.push(atom(w,p,'O',.22));bond(w,c,o[j]);}
    const h=atom(w,add(w.atoms[o[0]].p,[.3,.12,.12]),'H',.12);bond(w,o[0],h);
    atom(w,add(center,[1,.85,.8]),'Na',.28);
   }
  }
  if(id==='grafite'){
   for(let layer=0;layer<3;layer++){const points=new Map(),pairs=new Map();for(let x=0;x<4;x++)for(let y=0;y<2;y++){const ring=[];for(let k=0;k<6;k++){const a=k*Math.PI/3,p=[x*1.5+Math.cos(a),y*Math.sqrt(3)+(x%2)*Math.sqrt(3)/2+Math.sin(a),layer*1.7],key=p.map(v=>v.toFixed(5)).join(',');if(!points.has(key))points.set(key,atom(w,p,'C',.17));ring.push(points.get(key));}ring.forEach((v,i)=>{const e=[v,ring[(i+1)%6]].sort((a,b)=>a-b);pairs.set(e.join(','),e);});}pairs.forEach(e=>bond(w,...e));}
  }
  if(id==='diamante'){
   const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]],seen=new Set();for(let x=0;x<=1;x++)for(let y=0;y<=1;y++)for(let z=0;z<=1;z++)for(const q of fcc)for(let b=0;b<2;b++){const p=q.map((v,i)=>v+[x,y,z][i]+b*.25),key=p.join(',');if(p.every(v=>v<=1)&&!seen.has(key)){seen.add(key);atom(w,p,'C',.065);}}
   w.atoms.forEach((a,i)=>w.atoms.forEach((b,j)=>{if(j>i&&Math.abs(dist(a.p,b.p)-Math.sqrt(3)/4)<1e-5)bond(w,i,j);}));frame(w,[0,0,0],[[1,0,0],[0,1,0],[0,0,1]]);
  }
  if(id==='sabbia'){
   /* CMU alpha quartz: P3221, a=4.9137 Å,c=5.4047 Å. Generate orbit then real Si–O neighbours. */
   const R=p=>[-p[1],p[0]-p[1],p[2]+2/3],S=p=>[p[0]-p[1],-p[1],-p[2]],wrap=x=>((x%1)+1)%1;
   const orbit=p=>{const out=[];for(let q of [p,S(p)])for(let k=0;k<3;k++){const a=q.map(wrap);if(!out.some(b=>dist(a,b)<1e-5))out.push(a);q=R(q);}return out;};
   for(const [p,k] of [[[.4697,0,0],'Si'],[[.4133,.2672,.1188],'O']])for(const q of orbit(p))for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++){const a=q[0]+x,b=q[1]+y,c=q[2]+z;atom(w,[a-b*.5,b*Math.sqrt(3)/2,c*5.4047/4.9137],k,k==='Si'?.1:.075);}
   w.atoms.forEach((a,i)=>w.atoms.forEach((b,j)=>{if(j>i&&a.k!==b.k&&dist(a.p,b.p)<1.7/4.9137)bond(w,i,j);}));
  }
  if(id==='zucchero')for(let x=0;x<2;x++)for(let y=0;y<2;y++)sucrose(w,[x*6.1,y*4.7,(x+y)%2*.25],.12,.88);
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
  const body=['nebbia','spremuta','biscotto'].includes(d.id)?heterogeneous(d.id):draw(build(d.id),[28,25,364,266],d.id==='grafite'?{yaw:.22,pitch:.65}:d.id==='zucchero'?{yaw:.1,pitch:1.25}:{});
  return{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 316" role="img" aria-label="Struttura del campione ${d.name.replace(/[&<>\"]/g,'')}"><defs>${defs}</defs><g class="mm-world">${body}</g></svg>`};
 }
 const motionIds=['elio','acqua','grafite','aria','sale','spremuta','zucchero','acciaio','co2','sabbia','rubinetto','nebbia','alluminio','bicarbonato','biscotto','diamante','pet','ossigeno'];
 const supportsMotion=id=>motionIds.includes(id);
 function connectedGroups(w){
  const adjacency=w.atoms.map(()=>[]);w.bonds.forEach(([a,b])=>{adjacency[a].push(b);adjacency[b].push(a);});
  const visited=new Set(),result=[];w.atoms.forEach((_,i)=>{if(visited.has(i))return;const group=[],queue=[i];visited.add(i);while(queue.length){const j=queue.pop();group.push(j);adjacency[j].forEach(k=>{if(!visited.has(k)){visited.add(k);queue.push(k);}});}result.push(group);});return result;
 }
 function movingWorld(w,kind,seed=213,camera={}){
  const base=w.atoms.map(a=>({...a,p:[...a.p]})),random=rng(seed),solid=kind==='solid'||kind==='molecular-solid',molecular=kind==='molecular-solid',liquid=kind==='liquid';let time=0;
  const span=[0,1,2].map(k=>Math.max(...base.map(a=>a.p[k]))-Math.min(...base.map(a=>a.p[k]))),amplitude=Math.max(...base.map(a=>a.r))*.065+Math.hypot(...span)*.001;
  const groups=connectedGroups(w).map(indices=>{const center=[0,1,2].map(k=>indices.reduce((v,i)=>v+base[i].p[k],0)/indices.length),v=[random()-.5,random()-.5,random()-.5],norm=Math.hypot(...v)||1,speed=liquid?.26:.56;return{indices,center,velocity:mul(v,speed/norm),offsets:indices.map(i=>base[i].p.map((v,k)=>v-center[k])),spin:(random()-.5)*.5,radius:liquid?(indices.length===1?base[indices[0]].r*.9:.43):Math.max(...indices.map(i=>dist(base[i].p,center)+base[i].r))*.8};});
  const lo=[0,1,2].map(k=>Math.min(...groups.map(g=>g.center[k]))-(liquid?.22:.5)),hi=[0,1,2].map(k=>Math.max(...groups.map(g=>g.center[k]))+(liquid?.22:.5));
  const reference=world();if(solid)base.forEach(a=>reference.atoms.push({...a,r:a.r+amplitude*2}));else for(let i=0;i<8;i++)reference.atoms.push({p:[0,1,2].map(k=>(i&(1<<k)?hi:lo)[k]),k:'H',r:Math.max(...groups.map(g=>Math.max(...g.offsets.map(p=>Math.hypot(...p)))))+.28});
  const spin=(p,a,b)=>{const c=Math.cos(a),s=Math.sin(a),u=[p[0]*c-p[1]*s,p[0]*s+p[1]*c,p[2]],cb=Math.cos(b),sb=Math.sin(b);return[u[0],u[1]*cb-u[2]*sb,u[1]*sb+u[2]*cb];};
  function update(){
   if(solid&&!molecular)w.atoms.forEach((a,i)=>{a.p=base[i].p.map((v,k)=>v+amplitude*Math.sin(time*(5.6+k*.7)+i*2.13+k));});
   else groups.forEach((g,i)=>g.offsets.forEach((p,j)=>{const offset=spin(p,molecular?.018*Math.sin(time*2.2+i):g.spin*time,molecular?.012*Math.sin(time*2.8+i):.13*Math.sin(time*.7+i));w.atoms[g.indices[j]].p=add(g.center,offset).map((v,k)=>v+(molecular?amplitude*Math.sin(time*4.5+i*1.7+k):0));}));
  }
  function integrate(dt){
   groups.forEach(g=>g.center.forEach((_,k)=>{g.center[k]+=g.velocity[k]*dt;if(g.center[k]<lo[k]){g.center[k]=lo[k]+(lo[k]-g.center[k]);g.velocity[k]=Math.abs(g.velocity[k]);}if(g.center[k]>hi[k]){g.center[k]=hi[k]-(g.center[k]-hi[k]);g.velocity[k]=-Math.abs(g.velocity[k]);}}));
   for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++){
    const a=groups[i],b=groups[j],delta=b.center.map((v,k)=>v-a.center[k]),distance=Math.hypot(...delta),minimum=a.radius+b.radius;if(distance>=minimum||distance<1e-8)continue;
    const normal=mul(delta,1/distance),overlap=(minimum-distance)/2;for(let k=0;k<3;k++){a.center[k]-=normal[k]*overlap;b.center[k]+=normal[k]*overlap;}
    const approach=b.velocity.reduce((v,x,k)=>v+(x-a.velocity[k])*normal[k],0);if(approach<0)for(let k=0;k<3;k++){a.velocity[k]+=approach*normal[k];b.velocity[k]-=approach*normal[k];}
   }
   groups.forEach(g=>g.center.forEach((v,k)=>{if(v<lo[k]){g.center[k]=lo[k];g.velocity[k]=Math.abs(g.velocity[k]);}if(v>hi[k]){g.center[k]=hi[k];g.velocity[k]=-Math.abs(g.velocity[k]);}}));
  }
  function advance(dt){const elapsed=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.2));time+=elapsed;if(!solid){const n=Math.max(1,Math.ceil(elapsed/.012));for(let i=0;i<n;i++)integrate(elapsed/n);}update();return w;}
  function frame(){return draw(w,[28,25,364,266],camera,reference);}
  update();return{advance,frame,world:w,base,groups,lo,hi,kind,amplitude,reference,get time(){return time;}};
 }
 function fragment(seed=3,large=false){const w=world(),random=rng(seed),cols=large?10:6,rows=large?7:5;for(let z=0;z<(large?2:1);z++)for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const i=atom(w,[x*.5,y*.46,z*.55+(x%2)*.1],random()<.32?'O':'C',.18);if(x)bond(w,i-1,i);if(y&&x%2===0)bond(w,i-cols,i);}return w;}
 function mixtureMotion(id){
  const background=id==='nebbia'?createMotion('aria'):id==='spremuta'?createMotion('acqua'):movingWorld(fragment(4,true),'solid');
  const parts=Array.from({length:2},(_,i)=>id==='nebbia'?createMotion('acqua'):movingWorld(fragment(10+i),'solid'));parts[1].advance(.19);
  const components=[background,...parts],w=world();components.forEach(c=>{const offset=w.atoms.length;w.atoms.push(...c.world.atoms);c.world.bonds.forEach(([a,b])=>w.bonds.push([a+offset,b+offset]));});let time=0;const base=w.atoms.map(a=>({...a,p:[...a.p]}));
  function advance(dt){const t=Math.max(0,Math.min(dt,.2));time+=t;components.forEach(c=>c.advance(t));return w;}
  function frame(){
   const rects=[[53,45,125,106],[239,169,120,100]].map((r,i)=>r.map((v,k)=>v+(id!=='biscotto'&&k<2?4*Math.sin(time*.22+i*2+k):0)));
   const holes=rects.map(([x,y,a,b])=>`<ellipse cx="${x+a/2}" cy="${y+b/2}" rx="${a/2+10}" ry="${b/2+10}" fill="black"/>`).join('');
   let svg=`<defs><mask id="mm-mixture-${id}"><rect width="420" height="316" fill="white"/>${holes}</mask></defs><g mask="url(#mm-mixture-${id})">${draw(background.world,[20,15,380,285],{},background.reference)}</g>`;
   parts.forEach((p,i)=>{const [x,y,a,b]=rects[i],cx=x+a/2,cy=y+b/2,rx=a/2+9,ry=b/2+9,fill=id==='nebbia'?'#d7effc':id==='spremuta'?'#f4d5a7':'#d3c0b4';svg+=`<defs><clipPath id="mm-drop-${id}-${i}"><ellipse cx="${cx}" cy="${cy}" rx="${rx-2}" ry="${ry-2}"/></clipPath></defs><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="#72a2bb" stroke-width="1.3"/><g clip-path="url(#mm-drop-${id}-${i})">${draw(p.world,rects[i],{},p.reference)}</g>`;});return svg;
  }
  return{advance,frame,world:w,base,components,kind:'mixture',get time(){return time;}};
 }
 function createMotion(id){
  if(!supportsMotion(id))return null;if(['nebbia','spremuta','biscotto'].includes(id))return mixtureMotion(id);
  const kind=['elio','aria','co2','ossigeno'].includes(id)?'gas':['acqua','rubinetto'].includes(id)?'liquid':['zucchero'].includes(id)?'molecular-solid':'solid';
  return movingWorld(build(id),kind,id==='elio'?111:213,id==='grafite'?{yaw:.22,pitch:.65}:id==='zucchero'?{yaw:.1,pitch:1.25}:{});
 }
 function animate(root,d,engine,{paused=false}={}){
  if(!engine)return null;
  const layer=root.querySelector('.mm-world');if(!layer)return null;
  let stopped=false,visible=true,observer=null,handle=0,last=0,previousDraw=0;
  const paint=()=>{layer.innerHTML=engine.frame();};
  const cancel=()=>{if(handle)cancelAnimationFrame(handle);handle=0;last=0;previousDraw=0;};
  function tick(now){
   handle=0;if(stopped||paused||!visible||document.hidden)return;
   if(!root.isConnected){dispose();return;}
   if(!last){last=now;previousDraw=now;}
   /* 24 fps is sufficient for this explanatory motion and avoids excessive SVG work. */
   if(now-previousDraw>=1000/24){engine.advance(Math.min((now-last)/1000,.06));last=now;previousDraw=now;paint();}
   handle=requestAnimationFrame(tick);
  }
  const start=()=>{if(!stopped&&!paused&&visible&&!document.hidden&&!handle)handle=requestAnimationFrame(tick);};
  function setPaused(value){paused=!!value;cancel();if(!paused)start();}
  function visibility(){cancel();start();}
  function dispose(){stopped=true;cancel();observer?.disconnect();document.removeEventListener('visibilitychange',visibility);}
  if(typeof IntersectionObserver==='function'){observer=new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);cancel();start();},{rootMargin:'50px'});observer.observe(root);}
  document.addEventListener('visibilitychange',visibility);paint();start();
  return{setPaused,dispose,get paused(){return paused;}};
 }

 return{scene,build,projection,hull,createMotion,animate,supportsMotion};
})();


