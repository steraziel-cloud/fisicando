(function(root){
 'use strict';
 const width=1536,height=1024,cx=750,cy=500,a=550,b=355,gauge=28,TAU=2*Math.PI;
 function geometry(t){
  const ct=Math.cos(t),st=Math.sin(t),x=cx+a*ct,y=cy+b*st;
  const length=Math.hypot(b*ct,a*st),nx=b*ct/length,ny=a*st/length;
  return {t,x,y,heading:Math.atan2(b*ct,-a*st),
   normal:{x:nx,y:ny},inner:{x:x-gauge/2*nx,y:y-gauge/2*ny},outer:{x:x+gauge/2*nx,y:y+gauge/2*ny}};
 }
 // Equal-distance animation lookup, shared by the rail PNG and the locomotive.
 const count=8192,distances=[0];let previous=geometry(0),total=0;
 for(let i=1;i<=count;i++){const p=geometry(TAU*i/count);total+=Math.hypot(p.x-previous.x,p.y-previous.y);distances.push(total);previous=p;}
 function pose(phase){
  const distance=((phase%1)+1)%1*total;let lo=0,hi=count;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(distances[mid]<=distance)lo=mid;else hi=mid;}
  const fraction=(distance-distances[lo])/(distances[hi]-distances[lo]);
  return geometry(TAU*(lo+fraction)/count);
 }
 const api={width,height,center:{x:cx,y:cy},a,b,gauge,totalLength:total,geometry,pose};
 root.READER_TRAIN_TOPDOWN=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
