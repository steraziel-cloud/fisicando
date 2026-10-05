(function(root){
 'use strict';
 // Ground centreline traced between the rails in the 1200 × 800 room image.
 // A closed, periodic Catmull–Rom spline becomes cubic Bézier segments.
 const points=[[1030,335],[1009,245],[915,163],[765,107],[560,80],[363,107],[218,164],[119,247],[81,340],[107,445],[205,543],[378,610],[575,635],[775,612],[922,544],[1003,445]];
 const n=points.length,wrap=x=>((x%1)+1)%1;
 const segments=points.map((p,i)=>{
  const before=points[(i+n-1)%n],next=points[(i+1)%n],after=points[(i+2)%n];
  return [p,[p[0]+(next[0]-before[0])/6,p[1]+(next[1]-before[1])/6],[next[0]-(after[0]-p[0])/6,next[1]-(after[1]-p[1])/6],next];
 });
 function at(t){
  const q=wrap(t)*n,i=Math.floor(q),u=q-i,v=1-u,[a,b,c,d]=segments[i];
  return {x:v*v*v*a[0]+3*v*v*u*b[0]+3*v*u*u*c[0]+u*u*u*d[0],y:v*v*v*a[1]+3*v*v*u*b[1]+3*v*u*u*c[1]+u*u*u*d[1],dx:3*v*v*(b[0]-a[0])+6*v*u*(c[0]-b[0])+3*u*u*(d[0]-c[0]),dy:3*v*v*(b[1]-a[1])+6*v*u*(c[1]-b[1])+3*u*u*(d[1]-c[1])};
 }
 const samples=2048,arc=[0];let prev=at(0),total=0;
 for(let i=1;i<=samples;i++){const p=at(i/samples);total+=Math.hypot(p.x-prev.x,p.y-prev.y);arc.push(total);prev=p;}
 function atDistance(fraction){
  const target=wrap(fraction)*total;let lo=0,hi=samples;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(arc[mid]<=target)lo=mid;else hi=mid;}
  const u=(target-arc[lo])/(arc[hi]-arc[lo]);return at((lo+u)/samples);
 }
 // The crossing directly beside the station signal is the timing origin.
 let origin=0,error=Infinity;
 for(let i=0;i<samples;i++){const p=atDistance(i/samples),e=(p.x-1012)**2+(p.y-445)**2;if(e<error){error=e;origin=i/samples;}}
 function pose(phase){const p=atDistance(origin-phase);return {...p,heading:Math.atan2(-p.dy/.58,-p.dx)};}
 const path='M'+points[0].join(' ')+' '+segments.map(([,b,c,d])=>'C'+b.join(' ')+' '+c.join(' ')+' '+d.join(' ')).join(' ')+' Z';
 const model=Object.freeze({width:1200,height:800,points,at,atDistance,pose,path,length:total,origin,spriteAnchor:{x:.5,y:236/256}});
 root.READER_TRAIN_TRACK=model;
 if(typeof module!=='undefined'&&module.exports)module.exports=model;
})(typeof window!=='undefined'?window:globalThis);
