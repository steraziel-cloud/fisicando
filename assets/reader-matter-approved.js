/* Approved material models, reviewed card by card, 2026-10-18.
 * Geometry is schematic; minority components and spacings are deliberately emphasised.
 * Overview and magnification always reference the same SVG world.
 */
window.GatitoMatterApproved=(()=>{
 'use strict';
 const baseModels={...window.GatitoMatterModels};
 const names={air:'Aria',fog:'Nebbia',crystal:'Bicarbonato di sodio'};
 const palette={N:'#5288dc',O:'#ec706c',C:'#48515a',Na:'#b19ade',H:'#f5f7ef'};
 let sample="air",zone=0;
 const rand=n=>{let x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x)};
 const sphere=(x,y,r,k)=>`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r}" fill="url(#gm-${k})" stroke="#66796b" stroke-width=".3"/>`;
 const link=(a,b,w=1.4)=>`<line class="gm-bond" stroke="#84958c" stroke-linecap="round" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke-width="${w}"/>`;
 function gas(exclude=[]){let s='';for(let i=0;i<192;i++){const x=9+(i%16)*24+rand(i+9)*15+5*Math.sin(renderTime*.7+i),y=9+Math.floor(i/16)*28+rand(i+201)*15+5*Math.sin(renderTime*.9+i*1.9),a=rand(i+400)*Math.PI*2+renderTime*.1,k=i%5===0?'O':'N';if(exclude.some(([cx,cy,r])=>Math.hypot(x-5*Math.sin(renderTime*.7+i)-cx,y-5*Math.sin(renderTime*.9+i*1.9)-cy)<r+15))continue;if(i%41===0){s+=sphere(x,y,2.5,'Ar');continue;}if(i%47===0){const p=[x-5,y],q=[x+5,y];s+=link(p,q,.9)+sphere(...p,2.2,'O')+sphere(x,y,2,'C')+sphere(...q,2.2,'O');continue;}const p=[x+Math.cos(a)*2.5,y+Math.sin(a)*2.5],q=[x-Math.cos(a)*2.5,y-Math.sin(a)*2.5];s+=link(p,q,.8)+sphere(...p,2.2,k)+sphere(...q,2.2,k)}return s}
 function fog(){const drops=[[95,87,58],[292,240,69],[104,306,45]];let s=gas(drops);drops.forEach(([x,y,r],j)=>{s+=`<circle class="gm-droplet" fill="#cae7f1" fill-opacity=".31" stroke="#6ca1b4" cx="${x}" cy="${y}" r="${r}"/>`;for(let i=0;i<170;i++){let a=rand(i+j*192+12)*Math.PI*2+renderTime*(.04+rand(i)*.04),d=Math.sqrt(rand(i+j*283+92))*(r-7),px=x+Math.cos(a)*d,py=y+Math.sin(a)*d,theta=rand(i+123)*6.28+renderTime*.18;const p=[px+Math.cos(theta)*3.4,py+Math.sin(theta)*3.4],q=[px+Math.cos(theta+1.82)*3.4,py+Math.sin(theta+1.82)*3.4];s+=link([px,py],p,.7)+link([px,py],q,.7)+sphere(...p,1.25,'H')+sphere(...q,1.25,'H')+sphere(px,py,2.1,'O')}});return s}
 const worlds={};
 const zones={air:[[46,42,112],[153,139,112],[252,236,112]],fog:[[39,31,112],[226,20,112],[237,185,112]],crystal:[[71,59,112],[157,132,112],[231,206,112]]};
 const defs=`<defs>${Object.entries(palette).map(([k,c])=>`<radialGradient id="gm-${k}" cx="30%" cy="25%" r="75%"><stop offset="0" stop-color="${c}"/><stop offset=".65" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".7"/></radialGradient>`).join('')}</defs>`;
 const deck=[['elio','Elio nel palloncino'],['acqua','Acqua distillata'],['grafite','Grafite della matita'],['aria','Aria nel palloncino'],['sale','Sale da cucina'],['spremuta','Spremuta con polpa'],['ghiaccio','Ghiaccio'],['acciaio','Acciaio inox'],['co2','Anidride carbonica'],['silicio','Silicio di un microchip'],['rubinetto','Acqua del rubinetto'],['nebbia','Nebbia'],['alluminio','Alluminio'],['bicarbonato','Bicarbonato di sodio'],['biscotto','Biscotto con cioccolato'],['diamante','Diamante'],['pet','Plastica PET'],['ossigeno','Ossigeno']];
 Object.assign(palette,{He:'#e9b94f',Ar:'#9a87cf',Cl:'#60b88d',Si:'#d4af67',Al:'#9ab3c9',Fe:'#92a8ba',Cr:'#b28ad2',Ni:'#6cbba8'});
 const extraDefs=()=>Object.entries(palette).map(([k,c])=>`<radialGradient id="gm-${k}" cx="28%" cy="22%" r="80%"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="${c}"/><stop offset=".85" stop-color="${c}"/><stop offset="1" stop-color="#40505a"/></radialGradient>`).join('');
 const charge=(x,y,v,size=9)=>`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-family="system-ui" font-size="${size}" font-weight="700" fill="#172e32" paint-order="stroke" stroke="#ffffff" stroke-width=".8">${v}</text>`;
 function ions(id){let s='';
  if(id==='sale'){
   const project=(x,y,z)=>[50+x*91+y*48+.4*Math.sin(renderTime*4+x+y),312-y*52-z*91+.4*Math.cos(renderTime*4+z+y)];
   // Cell edges describe the spatial boundary; they are not bonds between ions.
   for(let i=0;i<8;i++)for(let k=0;k<3;k++)if(!(i&(1<<k))){const a=[0,1,2].map(j=>((i>>j)&1)*2),b=[...a];b[k]=2;s+=link(project(...a),project(...b),1.2)}
   const points=[];for(let x=0;x<3;x++)for(let y=0;y<3;y++)for(let z=0;z<3;z++)points.push({x,y,z});
   points.sort((a,b)=>b.y-a.y).forEach(({x,y,z})=>{const p=project(x,y,z),pos=(x+y+z)%2;s+=sphere(...p,pos?11:14,pos?'Na':'Cl')+charge(...p,pos?'+':'−',11)});
  }else{
   for(let row=0;row<4;row++)for(let col=0;col<4;col++){
    const x=46+col*91+(row%2)*12,y=42+row*83;
    const o=[[x+17,y-15],[x-20,y-8],[x+1,y+22]],h=[x+11,y+28];
    o.forEach(p=>s+=link([x,y],p,2));s+=link(o[2],h,1.5);
    s+=sphere(x,y,5,'C');o.forEach(p=>s+=sphere(...p,6,'O'));s+=sphere(...h,3,'H');
    // One minus sign belongs to the entire bicarbonate ion, not to each atom.
    s+=`<path d="M${x+25},${y-22}h5v57h-5" fill="none" stroke="#5e7380" stroke-width="1"/>`+charge(x+39,y-18,'−',11);
    s+=sphere(x+53,y+35,8,'Na')+charge(x+53,y+35,'+',10);
   }
  }return s;
 }
 function graphiteSheets(){
  const w=baseModels.build('grafite');let s='';
  const first=w.atoms.filter(a=>a.p[2]===0),minX=Math.min(...first.map(a=>a.p[0])),minY=Math.min(...first.map(a=>a.p[1]));
  const screen=(a,layer)=>[35+(a.p[0]-minX)*34+layer*23+.3*Math.sin(renderTime*4+a.p[0]),26+(a.p[1]-minY)*20+layer*63+.3*Math.cos(renderTime*4+a.p[1])];
  // A few dashed interlayer interactions, distinct from covalent in-plane bonds.
  for(let l=0;l<2;l++)for(const i of [0,9,23,36])if(first[i]){const a=screen(first[i],l),b=screen(first[i],l+1);s+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#8297a3" stroke-width="1.2" stroke-dasharray="4 4"/>`}
  for(let layer=0;layer<3;layer++){
   let t='';const atoms=w.atoms.map((a,i)=>({a,i})).filter(o=>Math.abs(o.a.p[2]-layer*1.7)<.01),ids=new Set(atoms.map(o=>o.i));
   w.bonds.filter(([a,b])=>ids.has(a)&&ids.has(b)).forEach(([a,b])=>{t+=link(screen(w.atoms[a],layer),screen(w.atoms[b],layer),1.7)});
   atoms.forEach(({a})=>t+=sphere(...screen(a,layer),3.6,'C'));
   s+=`<g opacity="${[.48,.7,1][layer]}">${t}</g>`;
  }return s;
 }
 function basicModel(id){
  if(id==='grafite')return graphiteSheets();
  if(id==='sale'||id==='bicarbonato')return ions(id);
  if(['spremuta','biscotto'].includes(id)){
   const original=baseModels.scene({id,name:id}).svg;
   return `<g transform="translate(0 12) scale(.95 1.03)">${original.slice(original.indexOf('<defs>'),original.lastIndexOf('</svg>'))}</g>`;
  }
  const w=activeWorlds.get(id)?.world||baseModels.build(id);
  if(id==='zucchero'){
   // Two complete molecules at larger scale, retaining every atom and bond.
   const keep=90;w.atoms=w.atoms.slice(0,keep);w.bonds=w.bonds.filter(([a,b])=>a<keep&&b<keep);
   w.atoms.forEach((a,i)=>{if(i>=45){a.p[0]+=5.5;a.p[1]-=1.7}});
  }
  // Separate molecular centres without stretching any covalent bond.
  if(id==='zucchero'){
   const adj=w.atoms.map(()=>[]);w.bonds.forEach(([a,b])=>{adj[a].push(b);adj[b].push(a)});let seen=new Set();
   w.atoms.forEach((_,i)=>{if(seen.has(i))return;let group=[],queue=[i];seen.add(i);while(queue.length){let j=queue.pop();group.push(j);adj[j].forEach(k=>{if(!seen.has(k)){seen.add(k);queue.push(k)}})}let center=[0,1,2].map(k=>group.reduce((n,j)=>n+w.atoms[j].p[k],0)/group.length);group.forEach(j=>{w.atoms[j].molecule=i;w.atoms[j].p=w.atoms[j].p.map((v,k)=>v+center[k]*.55)})});
  }
  const cam=id==='zucchero'?[.05,1.45]:[.22,.6];
  const a=w.atoms.map(o=>({...o,q:baseModels.projection(o.p,...cam)}));
  const lo=[0,1].map(k=>Math.min(...a.map(o=>o.q[k]-o.r))),hi=[0,1].map(k=>Math.max(...a.map(o=>o.q[k]+o.r)));
  const scale=Math.min(350/(hi[0]-lo[0]),300/(hi[1]-lo[1]));
  const p=o=>[200+(o.q[0]-(lo[0]+hi[0])/2)*scale+.25*Math.sin(renderTime*4+o.q[0]),178+(o.q[1]-(lo[1]+hi[1])/2)*scale+.25*Math.cos(renderTime*4+o.q[1])];
  let s='';
  if(id==='zucchero'){
   // Selected intermolecular contacts only, never a bond between molecular centres.
   const O=a.map((o,i)=>o.k==='O'?i:-1).filter(i=>i>=0),H=a.map((o,i)=>o.k==='H'&&w.bonds.some(([u,v])=>(u===i&&w.atoms[v].k==='O')||(v===i&&w.atoms[u].k==='O'))?i:-1).filter(i=>i>=0);let used=0;
   H.forEach(i=>{if(used>=2)return;const candidates=O.filter(j=>a[i].molecule!==a[j].molecule&&!w.bonds.some(([u,v])=>(u===i&&v===j)||(v===i&&u===j))).map(j=>({j,d:Math.hypot(...a[i].p.map((v,k)=>v-a[j].p[k]))})).filter(o=>o.d>1&&o.d<4).sort((a,b)=>a.d-b.d);if(candidates[0]){const [x,y]=p(a[i]),[u,v]=p(a[candidates[0].j]);s+=`<line x1="${x}" y1="${y}" x2="${u}" y2="${v}" stroke="#809591" stroke-dasharray="3 3" stroke-width="1"/>`;used++}});
  }
  const items=w.bonds.map(([i,j])=>({z:(a[i].q[2]+a[j].q[2])/2-.01,html:link(p(a[i]),p(a[j]),Math.max(1,scale*.07))}));
  a.forEach(o=>items.push({z:o.q[2],html:sphere(...p(o),Math.max(1,o.r*scale),o.k)}));
  return s+items.sort((a,b)=>a.z-b.z).map(o=>o.html).join('');
 }
 let alternateView=false; let renderTime=0; const activeWorlds=new Map();
 function volumeWorld(kind){
  const w={atoms:[],bonds:[],frames:[]};
  if(['acciaio','alluminio'].includes(kind)){
   const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]];
   for(let x=0;x<4;x++)for(let y=0;y<4;y++)for(let z=0;z<3;z++)fcc.forEach((q,i)=>{
    const n=((x*4+y)*3+z)*4+i,r=rand(n+809),k=kind==='alluminio'?'Al':r<.08?'Ni':r<.26?'Cr':'Fe';
    w.atoms.push({p:q.map((v,j)=>v+[x,y,z][j]),k,r:.19});
   });
  }else{
   const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]],seen=new Set();
   for(let x=0;x<=1;x++)for(let y=0;y<=1;y++)for(let z=0;z<=1;z++)for(const q of fcc)for(let b=0;b<2;b++){
    const p=q.map((v,i)=>v+[x,y,z][i]+b*.25),key=p.join(',');
    if(p.every(v=>v<=1.5)&&!seen.has(key)){seen.add(key);w.atoms.push({p,k:kind==='silicio'?'Si':'C',r:.057})}
   }
   w.atoms.forEach((a,i)=>w.atoms.forEach((b,j)=>{if(j>i&&Math.abs(Math.hypot(...a.p.map((v,k)=>v-b.p[k]))-Math.sqrt(3)/4)<1e-5)w.bonds.push([i,j])}));
  }return w;
 }
 function spatial(w,{yaw=.48,pitch=.63,frame=false,interactions=[]}={}){
  const proj=p=>baseModels.projection(p,yaw,pitch);
  const a=w.atoms.map((o,i)=>({...o,q:proj(o.p.map((v,k)=>v+.003*Math.sin(renderTime*4+i*1.7+k)))}));
  const min=[0,1].map(k=>Math.min(...a.map(o=>o.q[k]-o.r))),max=[0,1].map(k=>Math.max(...a.map(o=>o.q[k]+o.r)));
  const scale=Math.min(344/(max[0]-min[0]),296/(max[1]-min[1]));
  const screen=q=>[200+(q[0]-(min[0]+max[0])/2)*scale,178+(q[1]-(min[1]+max[1])/2)*scale];
  const pieces=[];
  if(frame){
   const lo=[0,1,2].map(k=>Math.min(...w.atoms.map(a=>a.p[k]))),hi=[0,1,2].map(k=>Math.max(...w.atoms.map(a=>a.p[k])));
   for(let i=0;i<8;i++)for(let k=0;k<3;k++)if(!(i&(1<<k))){let p=[0,1,2].map(j=>(i>>j)&1?hi[j]:lo[j]),q=[...p];q[k]=hi[k];pieces.push({z:-999,html:link(screen(proj(p)),screen(proj(q)),.8)})}
  }
  interactions.forEach(([i,j])=>{const p=screen(a[i].q),q=screen(a[j].q);pieces.push({z:-998,html:`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#789b98" stroke-width="1.6" stroke-dasharray="4 3"/>`})});
  w.bonds.forEach(([i,j])=>pieces.push({z:(a[i].q[2]+a[j].q[2])/2-.02,html:link(screen(a[i].q),screen(a[j].q),Math.max(.9,scale*.016))}));
  a.forEach(o=>pieces.push({z:o.q[2],html:sphere(...screen(o.q),o.r*scale,o.k)}));
  return pieces.sort((a,b)=>a.z-b.z).map(o=>o.html).join('');
 }
 function sugarCrystal(){
  const w=baseModels.build('zucchero'),groups=[];
  for(let m=0;m<4;m++){
   const indices=Array.from({length:45},(_,i)=>m*45+i),center=[0,1,2].map(k=>indices.reduce((n,i)=>n+w.atoms[i].p[k],0)/45);
   const target=[[0,0,0],[4.8,0,.35],[0,3.7,.6],[4.8,3.7,.95]][m];
   indices.forEach(i=>{w.atoms[i].p=w.atoms[i].p.map((v,k)=>v-center[k]+target[k]);w.atoms[i].molecule=m});groups.push(indices);
  }
  const interactions=[];
  for(const [u,v] of [[0,1],[0,2],[1,3],[2,3]]){
   const donors=groups[u].filter(i=>w.atoms[i].k==='H'&&w.bonds.some(([a,b])=>(a===i&&w.atoms[b].k==='O')||(b===i&&w.atoms[a].k==='O'))),acceptors=groups[v].filter(i=>w.atoms[i].k==='O');
   let best=null,dist=Infinity;donors.forEach(i=>acceptors.forEach(j=>{const d=Math.hypot(...w.atoms[i].p.map((x,k)=>x-w.atoms[j].p[k]));if(d<dist){dist=d;best=[i,j]}}));
   if(best)interactions.push(best);
  }
  return spatial(w,{yaw:alternateView?-.28:.18,pitch:alternateView?.6:1.02,interactions});
 }
 function bicarbonateBlock(){
  // Illustrative repeated ionic arrangement, not a crystallographic unit cell.
  const screen=(x,y,z)=>[57+x*108+y*19,252+z*25-y*88];let s='';
  const corners=[];for(let i=0;i<8;i++)corners.push(screen((i&1)?2:0,(i&2)?2:0,(i&4)?2:0));
  for(let i=0;i<8;i++)for(let k=0;k<3;k++)if(!(i&(1<<k)))s+=link(corners[i],corners[i|(1<<k)],.8);
  for(let z=2;z>=0;z--){let t='';for(let y=2;y>=0;y--)for(let x=0;x<3;x++){
   const c=screen(x,y,z).map((v,k)=>v+.4*Math.sin(renderTime*4+x+y*2+z+k)),o=[[c[0]-12,c[1]-14],[c[0]+17,c[1]-8],[c[0]-2,c[1]+18]],h=[c[0]+6,c[1]+24];
   o.forEach(p=>t+=link(c,p,1.8));t+=link(o[2],h,1.3);t+=sphere(...c,4.5,'C');o.forEach(p=>t+=sphere(...p,5.5,'O'));t+=sphere(...h,2.7,'H');
   t+=charge(c[0]+26,c[1]-15,'−',10);const na=[c[0]+57,c[1]-31];t+=sphere(...na,7,'Na')+charge(...na,'+',9);
  }s+=`<g opacity="${[1,.45,.22][z]}">${t}</g>`}return s;
 }
 function iceCrystal(){
  // Idealized tetrahedral oxygen network (hexagonal ice); finite surface fragment.
  // Hydrogen orientations obey two covalent H per O and one H per O...O contact.
  const oxygen=[],basis=[[0,0,0],[0,0,3/8],[1/3,2/3,.5],[1/3,2/3,7/8]];
  for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)basis.forEach(([a,b,c])=>oxygen.push([x+a-(y+b)/2,(y+b)*Math.sqrt(3)/2,(z+c)*Math.sqrt(8/3)]));
  const edges=[],adj=oxygen.map(()=>[]);
  oxygen.forEach((a,i)=>oxygen.forEach((b,j)=>{if(j>i&&Math.abs(Math.hypot(...a.map((v,k)=>v-b[k]))-Math.sqrt(3/8))<1e-5){let e=edges.length;edges.push([i,j]);adj[i].push(e);adj[j].push(e)}}));
  const real=edges.length,dummy=oxygen.length;adj.push([]);
  for(let i=0;i<oxygen.length;i++)if(adj[i].length%2){const e=edges.length;edges.push([i,dummy]);adj[i].push(e);adj[dummy].push(e)}
  const used=new Set(),out=oxygen.map(()=>[]);
  // Orient Euler trails to balance the four contacts at each interior oxygen.
  for(let start=0;start<adj.length;start++){
   const stack=[start];while(stack.length){const i=stack.at(-1),e=adj[i].find(e=>!used.has(e));if(e===undefined){stack.pop();continue}used.add(e);const [a,b]=edges[e],j=i===a?b:a;if(e<real)out[i].push(j);stack.push(j)}
  }
  const w={atoms:oxygen.map(p=>({p,k:'O',r:.08})),bonds:[],frames:[]},interactions=[];
  oxygen.forEach((p,i)=>{
   const dirs=out[i].map(j=>oxygen[j].map((v,k)=>v-p[k]));
   while(dirs.length<2){let best=null,score=-Infinity;for(let n=0;n<80;n++){const z=1-2*(n+.5)/80,r=Math.sqrt(1-z*z),v=[r*Math.cos(n*2.39996),r*Math.sin(n*2.39996),z];const others=dirs.map(d=>d.map(x=>x/Math.hypot(...d)));const sc=others.length?Math.min(...others.map(d=>-Math.abs(v.reduce((s,x,k)=>s+x*d[k],0)+1/3))):1;if(sc>score){score=sc;best=v}}dirs.push(best)}
   dirs.forEach((d,n)=>{const len=Math.hypot(...d),h=w.atoms.length;w.atoms.push({p:p.map((v,k)=>v+d[k]/len*.21),k:'H',r:.045});w.bonds.push([i,h]);if(out[i][n]!==undefined)interactions.push([h,out[i][n]])});
  });
  return spatial(w,{yaw:alternateView?-.32:.25,pitch:alternateView?.5:.91,interactions});
 }
 function model(id){
  if(id==='aria')return gas();
  if(id==='nebbia')return fog();
  if(id==='ghiaccio')return iceCrystal();
  if(id==='zucchero')return sugarCrystal();
  if(['acciaio','alluminio','diamante','silicio'].includes(id))return spatial(volumeWorld(id),{yaw:id==='diamante'||id==='silicio'?.45:.58,pitch:id==='diamante'||id==='silicio'?.55:.7,frame:['acciaio','alluminio'].includes(id)});
  if(id==='bicarbonato')return bicarbonateBlock();
  if(id==='rubinetto'){
   const source=activeWorlds.get(id)?.world||baseModels.build(id),w={atoms:source.atoms.map(a=>({...a,p:[...a.p]})),bonds:source.bonds.map(e=>[...e]),frames:[]};let n=0;
   // Replace two further water molecules with a balanced pair of dissolved ions.
   const adj=w.atoms.map(()=>[]);w.bonds.forEach(([i,j])=>{adj[i].push(j);adj[j].push(i)});const seen=new Set(),remove=new Set();
   for(let i=0;i<w.atoms.length;i++){if(seen.has(i))continue;let group=[],q=[i];seen.add(i);while(q.length){const j=q.pop();group.push(j);adj[j].forEach(k=>{if(!seen.has(k)){seen.add(k);q.push(k)}})}if(group.length===3&&[2,10].includes(n++)){const o=group.find(j=>w.atoms[j].k==='O');w.atoms[o].k=n<5?'Na':'Cl';w.atoms[o].r=.25;group.filter(j=>j!==o).forEach(j=>remove.add(j))}}
   const map=new Map(),atoms=[];w.atoms.forEach((a,i)=>{if(!remove.has(i)){map.set(i,atoms.length);atoms.push(a)}});w.bonds=w.bonds.filter(([i,j])=>!remove.has(i)&&!remove.has(j)).map(([i,j])=>[map.get(i),map.get(j)]);w.atoms=atoms;
   return spatial(w,{yaw:.22,pitch:.6});
  }
  return basicModel(id);
 }
 deck.forEach(([id,name])=>{names[id]=name;if(!zones[id])zones[id]=[[48,35,125],[140,116,125],[235,205,125]]});

 const descriptions={
  ghiaccio:'Molecole d’acqua in una rete tridimensionale: bastoncini continui dentro le molecole; tratteggi fra molecole. Geometria idealizzata, frammento finito.',
  bicarbonato:'Ripetizione nello spazio di ioni sodio e bicarbonato. Tre livelli, con quelli posteriori attenuati; disposizione illustrativa, non cella cristallografica.',
  sale:'I segni + e − distinguono gli ioni. Il cubo evidenzia l’estensione del reticolo; i suoi spigoli non sono legami.',
  zucchero:'Quattro molecole complete con alcune interazioni fra molecole tratteggiate. Disposizione e contatti illustrativi; prova a cambiare punto di vista.',
  grafite:'Tre fogli di esagoni: bastoncini continui nel piano; tratteggi per alcune interazioni fra piani. Distanze ampliate per leggibilità.',
  pet:'Tratti di lunghe catene: i bastoncini continuano lungo ciascuna catena. Idrogeni omessi in questa prova.',
  spremuta:'Spremuta lasciata a riposo: i frammenti di polpa sono depositati sul fondo. Modello molto semplificato.',
  biscotto:'Zone del biscotto e del cioccolato: modello molto semplificato, da revisionare insieme.',
  rubinetto:'Acqua e alcuni ioni disciolti: concentrazione e composizione schematiche.',
  acciaio:'Acciaio inox: ferro prevalente, con cromo e nichel distribuiti nella stessa struttura metallica. Distribuzione schematica, senza un motivo ripetuto dei colori.',
  silicio:'Silicio del materiale di base di un microchip, idealizzato puro: un elemento con reticolo covalente. Il chip completo contiene anche altri materiali.',
  diamante:'Palline dello stesso tipo collegate in una rete tridimensionale.',
  alluminio:'Reticolo metallico tridimensionale: ogni pallina è alluminio. Il contorno delimita il volume osservato, non indica legami.',
  air:'Azoto e ossigeno, con argon e CO₂: presenza dei componenti minoritari enfatizzata per renderli visibili.',
  fog:'Goccioline d’acqua sospese in aria: dimensioni, densità e proporzioni sono schematiche.'
 };

 let nextId=0;
 const supported=deck.map(d=>d[0]);
 Object.assign(zones,{
  aria:zones.air,nebbia:zones.fog,
  grafite:[[46,29,125],[130,111,125],[209,194,125]],
  sale:[[50,44,125],[147,130,125],[246,199,125]],
  spremuta:[[54,34,125],[146,119,125],[232,209,125]]
 });
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const prefixIds=(s,prefix)=>s.replace(/\bid="([^"]+)"/g,(_,id)=>`id="${prefix}${id}"`).replace(/url\(#([^\)]+)\)/g,(_,id)=>`url(#${prefix}${id})`);
 function createMotion(id){
  if(!supported.includes(id))return null;
  const prefix='mc-world-'+(++nextId)+'-';
  let time=0,view=false;
  const physical=['elio','acqua','co2','ossigeno','rubinetto'].includes(id)?baseModels.createMotion(id):null;
  function frame(){
   renderTime=time;alternateView=view;if(physical)activeWorlds.set(id,physical);
   let body=model(id);activeWorlds.delete(id);
   if(['spremuta','biscotto'].includes(id)){
    // Small bounded motion in the schematic heterogeneous sample; no phase relocation.
    let n=0;body=body.replace(/<circle cx="([^"]+)" cy="([^"]+)"/g,(_,x,y)=>{const i=n++;return `<circle cx="${Number(x)+.35*Math.sin(time*4+i)}" cy="${Number(y)+.35*Math.cos(time*4+i)}"`});
   }
   return prefixIds(body,prefix);
  }
  return {id,prefix,physical,advance(dt){const elapsed=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.15));time+=elapsed;physical?.advance(elapsed);},frame,
   definitions:()=>prefixIds(extraDefs(),prefix),setView(value){view=!!value;},get view(){return view;},get time(){return time;}};
 }
 function scene(d){
  const engine=createMotion(d.id);if(!engine)return baseModels.scene(d);
  return {svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 356" role="img" aria-label="Modello del campione ${escape(d.name)}"><defs>${engine.definitions()}</defs><g class="mm-world">${engine.frame()}</g></svg>`,engine};
 }
 function run(root,engine,paint,{paused=false}={}){
  let stopped=false,handle=0,last=0,visible=true,observer=null;
  const cancel=()=>{if(handle)cancelAnimationFrame(handle);handle=0;last=0;};
  function tick(now){handle=0;if(stopped||paused||!visible||document.hidden)return;if(!root.isConnected){dispose();return;}if(!last)last=now;
   if(now-last>=1000/12){engine.advance(Math.min((now-last)/1000,.15));last=now;paint();}handle=requestAnimationFrame(tick);
  }
  const start=()=>{if(!stopped&&!paused&&visible&&!document.hidden&&!handle)handle=requestAnimationFrame(tick);};
  const visibility=()=>{cancel();start();};
  function dispose(){stopped=true;cancel();observer?.disconnect();document.removeEventListener('visibilitychange',visibility);}
  if(typeof IntersectionObserver==='function'){observer=new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);cancel();start();});observer.observe(root);}
  document.addEventListener('visibilitychange',visibility);paint();start();return{dispose,setPaused(v){paused=!!v;cancel();start();}};
 }
 function animate(root,d,engine,options={}){
  const layer=root.querySelector('.mm-world');if(!layer||!engine)return null;
  // Preserve this engine's gradient IDs when the existing card changes inspection mode.
  root.querySelector('defs').innerHTML=engine.definitions();
  return run(root,engine,()=>{layer.innerHTML=engine.frame();},options);
 }
 function mountInspection(root,d,engine,options={}){
  let selected=0;
  // The hidden physical card stays in the DOM: inspection must have separate gradient IDs.
  const displayPrefix=engine.prefix+'inspect-',worldId=displayPrefix+'shared',n='mc-inspect-'+(++nextId);
  const displayFrame=()=>engine.frame().replaceAll(engine.prefix,displayPrefix);
  const displayDefinitions=()=>engine.definitions().replaceAll(engine.prefix,displayPrefix);
  root.innerHTML=`<h3 class="mc-inspect-name">${escape(d.name)}</h3><div class="mc-model-panes"><section><h4>Il campione nel suo insieme</h4><svg class="mc-model-canvas" viewBox="0 0 400 356" role="img" aria-label="Vista d’insieme di ${escape(d.name)}"><defs>${displayDefinitions()}</defs><g id="${worldId}" class="mc-shared-world"></g><rect class="mc-region" rx="5"/><g class="mc-region-label"><rect width="24" height="24" rx="5"/><text x="12" y="17" text-anchor="middle">A</text></g></svg></section><section><h4 id="${n}-label">Dentro la zona A</h4><svg class="mc-model-canvas mc-model-detail" viewBox="0 0 125 125" role="img" aria-labelledby="${n}-label"><use href="#${worldId}"/></svg></section></div><div class="mc-zone-controls"><span>Esplora una zona</span>${['A','B','C'].map((l,i)=>`<button type="button" class="mc-button" data-mc-zone="${i}" aria-pressed="${i===0}">${l}</button>`).join('')}${d.id==='ghiaccio'?'<button type="button" class="mc-button mc-view-angle">Cambia punto di vista</button>':''}</div>`;
  const layer=root.querySelector('.mc-shared-world'),detail=root.querySelector('.mc-model-detail'),rect=root.querySelector('.mc-region'),label=root.querySelector('.mc-region-label'),heading=root.querySelector('#'+n+'-label');
  function select(i){selected=i;const [x,y,w]=zones[d.id][i],letter='ABC'[i];rect.setAttribute('x',x);rect.setAttribute('y',y);rect.setAttribute('width',w);rect.setAttribute('height',w);label.setAttribute('transform',`translate(${x+3} ${y+3})`);label.querySelector('text').textContent=letter;detail.setAttribute('viewBox',`${x} ${y} ${w} ${w}`);heading.textContent='Dentro la zona '+letter;root.querySelectorAll('[data-mc-zone]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.mcZone===i)));}
  root.querySelectorAll('[data-mc-zone]').forEach(b=>{b.onclick=()=>select(+b.dataset.mcZone);});
  const angle=root.querySelector('.mc-view-angle');if(angle)angle.onclick=()=>{engine.setView(!engine.view);layer.innerHTML=displayFrame();};
  heading.setAttribute('aria-live','polite');select(selected);
  const running=run(root,engine,()=>{layer.innerHTML=displayFrame();},options);
  return {dispose(){running.dispose();root.replaceChildren();},setPaused:running.setPaused};
 }
 return {scene,createMotion,animate,mountInspection,supportsMotion:id=>supported.includes(id),zones};
})();
