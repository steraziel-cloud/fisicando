(function(root){
 'use strict';
 // Metal rail ridges sampled from the native image at 64 shared angular positions.
 // Both curves use the same ray from center; the median is their pointwise midpoint.
 const center={x:557,y:352},axes={x:450,y:275};
 const innerRail=[[1008.634,352.0],[1006.231,378.434],[1000.253,405.881],[990.256,431.686],[980.154,459.113],[965.505,484.737],[944.535,510.243],[917.144,531.819],[880.264,549.55],[846.079,566.305],[806.638,580.317],[767.316,591.199],[724.961,599.801],[683.446,604.748],[640.386,608.183],[599.045,607.167],[557.0,605.634],[517.106,605.192],[476.404,599.612],[438.568,592.477],[401.376,581.601],[364.968,572.709],[329.608,559.971],[300.104,544.148],[265.309,530.255],[236.298,513.557],[206.758,495.015],[179.297,476.023],[156.647,453.342],[137.378,430.4],[125.303,404.476],[118.615,378.976],[111.172,352.0],[108.92,325.633],[112.37,297.952],[120.479,271.714],[134.773,245.121],[153.16,220.779],[177.453,197.019],[205.882,176.687],[239.327,157.866],[273.955,142.168],[311.778,127.722],[348.933,115.358],[389.112,104.306],[428.949,96.045],[471.685,89.889],[513.167,85.981],[557.0,85.996],[599.08,84.931],[643.018,87.73],[684.883,92.334],[728.212,99.402],[768.812,108.557],[809.294,121.254],[845.234,136.412],[877.737,155.994],[908.904,174.724],[940.026,195.598],[964.701,218.127],[983.341,244.08],[996.444,269.896],[1004.846,297.561],[1008.612,324.21]];
 const outerRail=[[1058.705,352.0],[1057.348,381.442],[1050.33,411.968],[1048.115,442.328],[1030.713,471.911],[1013.58,500.358],[990.56,529.036],[964.168,555.298],[928.833,579.232],[890.141,598.97],[845.163,615.551],[794.485,622.099],[748.965,635.216],[702.562,642.956],[651.92,643.618],[606.557,652.761],[557.0,651.365],[510.059,649.917],[462.024,643.792],[417.749,634.75],[372.992,623.477],[332.055,610.537],[291.124,595.168],[253.832,578.758],[217.961,559.191],[186.921,538.432],[156.043,515.723],[129.829,492.267],[110.016,465.145],[93.436,438.61],[78.422,410.175],[68.242,382.076],[62.652,352.0],[62.146,322.881],[67.39,292.484],[77.946,263.891],[94.692,234.976],[116.101,208.737],[143.663,183.221],[174.348,160.942],[210.21,140.073],[247.401,122.483],[288.276,106.227],[328.855,92.524],[372.912,80.406],[416.494,71.148],[463.306,64.147],[508.829,59.65],[557.0,57.821],[602.952,60.362],[650.8,63.82],[697.338,67.045],[745.112,74.469],[786.775,87.912],[832.965,99.605],[873.694,115.124],[909.496,136.586],[943.437,157.328],[976.297,180.788],[1003.007,205.548],[1024.811,233.583],[1039.21,261.906],[1049.352,292.151],[1055.122,321.348]];
 const points=innerRail.map((p,i)=>[(p[0]+outerRail[i][0])/2,(p[1]+outerRail[i][1])/2]);
 const n=points.length,wrap=x=>((x%1)+1)%1;
 const radii=knots=>knots.map(p=>Math.hypot((p[0]-center.x)/axes.x,(p[1]-center.y)/axes.y));
 const innerR=radii(innerRail),outerR=radii(outerRail),medianR=innerR.map((r,i)=>(r+outerR[i])/2);
 function radialAt(rs,t){
  const q=wrap(t)*n,i=Math.floor(q),f=q-i,a=rs[(i+n-1)%n],b=rs[i],c=rs[(i+1)%n],d=rs[(i+2)%n];
  const c1=(c-a)/2,c2=a-2.5*b+2*c-d/2,c3=(d-a)/2+1.5*(b-c);
  const r=b+c1*f+c2*f*f+c3*f*f*f,dr=(c1+2*c2*f+3*c3*f*f)*n/(2*Math.PI),theta=wrap(t)*2*Math.PI,co=Math.cos(theta),si=Math.sin(theta);
  return {u:wrap(t),x:center.x+axes.x*r*co,y:center.y+axes.y*r*si,dx:axes.x*(dr*co-r*si),dy:axes.y*(dr*si+r*co)};
 }
 function at(t){return radialAt(medianR,t);}
 function railAt(knots,t){return radialAt(knots===innerRail?innerR:knots===outerRail?outerR:radii(knots),t);}
 function curvePath(rs){return Array.from({length:721},(_,i)=>{const p=radialAt(rs,i/720);return (i?'L':'M')+p.x.toFixed(3)+' '+p.y.toFixed(3);}).join(' ')+' Z';}
 const path=curvePath(medianR),innerPath=curvePath(innerR),outerPath=curvePath(outerR);
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
 // Midpoint of the ground footprint, calibrated per directional sprite (256 × 256).
 // The PNG canvas bottom is not the wheel contact point, particularly in frontal views.
 const groundAnchors=[[128,222],[130,194],[130,185],[130,184],[128,197],[126,184],[126,187],[126,204],[128,222],[127,194],[128,190],[128,184],[128,195],[130,186],[130,189],[130,205]];
 const spriteAnchors=groundAnchors.map(([x,y])=>({x:x/256,y:y/256}));
 function railGauge(t){const a=railAt(innerRail,t),b=railAt(outerRail,t);return Math.hypot(a.x-b.x,a.y-b.y);}
 const frontGauge=railGauge(1/4);
 const perspectiveScale=t=>railGauge(t)/frontGauge;
 // Continuous weights remove hard swaps between separately illustrated directional views.
 function frameBlend(heading){const q=wrap(heading/(2*Math.PI))*16,a=Math.floor(q),f=q-a,z=Math.max(0,Math.min(1,(f-.25)/.5)),mix=z*z*(3-2*z);return {a,b:(a+1)%16,mix};}
 const model=Object.freeze({width:1200,height:800,center,axes,innerPath,outerPath,innerRail,outerRail,points,at,atDistance,pose,path,length:total,origin,spriteAnchors,railAt,railGauge,frontGauge,perspectiveScale,frameBlend});
 root.READER_TRAIN_TRACK=model;
 if(typeof module!=='undefined'&&module.exports)module.exports=model;
})(typeof window!=='undefined'?window:globalThis);
