(function(root){
 'use strict';
 // Corresponding rail landmarks in the native 1200 × 800 image.
 // Their pointwise mean defines the median: gamma(u) = (inner(u)+outer(u))/2.
 // Periodic cubic interpolation is linear, so averaging the knots also averages the splines.
 const innerRail=[[1007,335],[986,254],[900,179],[758,129],[560,101],[371,128],[232,181],[140,256],[104,340],[129,436],[220,525],[386,588],[575,610],[767,590],[907,526],[981,436]];
 const outerRail=[[1052,335],[1032,236],[930,147],[772,85],[560,59],[355,86],[204,147],[98,238],[58,340],[85,454],[190,561],[370,632],[575,660],[783,634],[937,562],[1025,454]];
 const points=innerRail.map((p,i)=>[(p[0]+outerRail[i][0])/2,(p[1]+outerRail[i][1])/2]);
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
 // Midpoint of the ground footprint, calibrated per directional sprite (256 × 256).
 // The PNG canvas bottom is not the wheel contact point, particularly in frontal views.
 const groundAnchors=[[128,222],[130,194],[130,185],[130,184],[128,197],[126,184],[126,187],[126,204],[128,222],[127,194],[128,190],[128,184],[128,195],[130,186],[130,189],[130,205]];
 const spriteAnchors=groundAnchors.map(([x,y])=>({x:x/256,y:y/256}));
 const perspectiveScale=y=>.78+.22*Math.max(0,Math.min(1,(y-80)/(635-80)));
 const model=Object.freeze({width:1200,height:800,innerRail,outerRail,points,at,atDistance,pose,path,length:total,origin,spriteAnchors,perspectiveScale});
 root.READER_TRAIN_TRACK=model;
 if(typeof module!=='undefined'&&module.exports)module.exports=model;
})(typeof window!=='undefined'?window:globalThis);
