(function(root){
 'use strict';
 // Metal rail ridges sampled from the native image at 64 shared angular positions.
 // Both curves use the same ray from center; the median is their pointwise midpoint.
 const center={x:557,y:352},axes={x:450,y:275};
 const innerRail=[[1008.634,352.0],[1006.231,378.434],[1000.253,405.881],[990.256,431.686],[980.154,459.113],[965.505,484.737],[944.535,510.243],[917.144,531.819],[880.264,549.55],[846.079,566.305],[806.638,580.317],[767.316,591.199],[724.961,599.801],[683.446,604.748],[640.386,608.183],[599.045,607.167],[557.0,605.634],[517.106,605.192],[476.404,599.612],[438.568,592.477],[401.376,581.601],[364.968,572.709],[329.608,559.971],[300.104,544.148],[265.309,530.255],[236.298,513.557],[206.758,495.015],[179.297,476.023],[156.647,453.342],[137.378,430.4],[125.303,404.476],[118.615,378.976],[111.172,352.0],[108.92,325.633],[112.37,297.952],[120.479,271.714],[134.773,245.121],[153.16,220.779],[177.453,197.019],[205.882,176.687],[239.327,157.866],[273.955,142.168],[311.778,127.722],[348.933,115.358],[389.112,104.306],[428.949,96.045],[471.685,89.889],[513.167,85.981],[557.0,85.996],[599.08,84.931],[643.018,87.73],[684.883,92.334],[728.212,99.402],[768.812,108.557],[809.294,121.254],[845.234,136.412],[877.737,155.994],[908.904,174.724],[940.026,195.598],[964.701,218.127],[983.341,244.08],[996.444,269.896],[1004.846,297.561],[1008.612,324.21]];
 const outerRail=[[1058.705,352.0],[1057.447,382.122],[1053.113,412.306],[1045.108,442.485],[1031.674,472.154],[1013.252,501.033],[990.306,528.932],[962.019,555.128],[927.799,578.6],[887.918,598.415],[843.177,613.735],[795.992,625.242],[748.713,634.844],[701.03,642.157],[653.082,647.188],[605.168,650.869],[557.0,651.817],[509.08,649.33],[462.094,643.576],[416.598,634.848],[372.825,623.724],[330.862,610.545],[290.835,595.433],[253.029,578.349],[217.886,559.237],[185.543,538.295],[156.088,515.705],[130.457,491.328],[109.392,465.303],[92.162,438.171],[78.234,410.198],[68.169,381.422],[62.652,352.0],[62.251,322.221],[67.39,292.484],[78.262,263.252],[94.692,234.976],[116.613,208.15],[143.663,183.221],[175.031,160.432],[210.21,140.073],[248.221,122.071],[288.276,106.227],[329.782,92.22],[372.912,80.406],[417.497,70.961],[463.306,64.147],[509.872,59.586],[557.0,57.821],[603.993,60.424],[650.801,63.82],[698.354,67.233],[745.112,74.469],[787.717,88.219],[832.965,99.605],[874.539,115.547],[909.496,136.586],[944.131,157.844],[976.297,180.788],[1003.529,206.143],[1024.811,233.583],[1039.531,262.549],[1049.352,292.151],[1055.23,322.012]];
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
 // Cross-track line through the approved median, normal to its screen-space tangent.
 function crossSection(u){
  const p=at(u),ends=[innerRail,outerRail].map(rail=>{let v=u;for(let i=0;i<8;i++){const q=railAt(rail,v),f=(q.x-p.x)*p.dx+(q.y-p.y)*p.dy,df=2*Math.PI*(q.dx*p.dx+q.dy*p.dy);if(Math.abs(df)<1e-8)break;v-=f/df;}return railAt(rail,v);});
  return {p,inner:ends[0],outer:ends[1],width:Math.hypot(ends[1].x-ends[0].x,ends[1].y-ends[0].y)};
 }
 // Native-pixel floor contact center, projected axle separation and wheelbase direction.
 // Frame 08 has a different vertical placement in its file; never share its anchor with 00.
 const spriteAnchors=[[118,208],[131,184],[107,168],[125,163],[128,175],[138,179],[142,185],[145,193],[130,167],[131,182],[120,174],[122,190],[128,170],[142,181],[142,187],[137,194]].map(([x,y])=>({x,y}));
 const spriteHeadings=[0,23.6,35.6,52.4,90,144.5,149.6,157.4,180,213.1,232.8,244.5,270,325.6,328,331.3].map(d=>d*Math.PI/180);
 const spriteGauges=[44,48,50,70,82,56,54,50,44,56,69,70,82,57,54,49];
 const spriteBounds=[[14,99,242,238],[44,55,242,238],[19,10,237,238],[42,10,213,238],[79,10,177,238],[20,10,236,238],[14,11,242,238],[14,45,242,238],[14,54,242,192],[41,51,242,238],[20,10,235,238],[35,10,221,238],[67,10,189,238],[14,18,242,238],[14,26,242,238],[14,42,242,238]];
 const angleDelta=a=>Math.atan2(Math.sin(a),Math.cos(a));
 function nearestFrame(p,previous){const angle=Math.atan2(-p.dy,-p.dx);let selected=0,best=Infinity;for(let i=0;i<16;i++){const e=Math.abs(angleDelta(angle-spriteHeadings[i]));if(e<best){best=e;selected=i;}}if(previous>=0&&Math.abs(angleDelta(angle-spriteHeadings[previous]))<=best+.035)return previous;return selected;}
 // Four wheel/rail contacts in each native drawing. The visible first/last
 // wheels are measured; opposite hidden contacts are inferred in the ground plane.
 // source near side: rear, front, and whether it is the outside of the clockwise loop.
 const groundAspect=.58,wheelbase=104*.975;
 const visibleWheelPairs=[
  [67,232,171,232,true],[82,185,156,220,true],[54,165,130,218,true],[72,154,125,207,true],
  [88,135,88,207,true],[196,169,118,217,false],[197,173,110,225,false],[199,193,111,229,false],
  [188,187,90,187,false],[149,233,80,178,false],[125,232,57,154,false],[117,237,65,156,false],
  [88,232,88,148,false],[122,233,197,174,true],[116,235,195,175,true],[99,236,187,191,true]
 ];
 const spriteFootprints=visibleWheelPairs.map(([rx,ry,fx,fy,isOuter],i)=>{
  const dx=fx-rx,dy=fy-ry,nx=-dy/(groundAspect*groundAspect),ny=dx,norm=Math.hypot(nx,ny),vx=nx/norm*spriteGauges[i],vy=ny/norm*spriteGauges[i];
  const projectedGauge=i===0||i===8?44:82*Math.hypot(Math.sin(Math.atan2(dy/groundAspect,dx)),groundAspect*Math.cos(Math.atan2(dy/groundAspect,dx)));
  const ratio=projectedGauge/spriteGauges[i],rear={x:rx,y:ry},front={x:fx,y:fy},shift=(p,k)=>({x:p.x+k*vx*ratio,y:p.y+k*vy*ratio});
  return isOuter?[shift(rear,-1),shift(front,-1),front,rear]:[rear,front,shift(front,1),shift(rear,1)];
 });
 // Each axle is a line perpendicular to the direction of travel in the ground
 // plane. Its two endpoints are solved on the actual inner/outer rail curves.
 function wheelFootprint(p){
  let tx=-p.dx,ty=-p.dy/groundAspect,norm=Math.hypot(tx,ty);tx/=norm;ty/=norm;
  function axle(sign){const c={x:p.x+sign*wheelbase/2*tx,y:p.y+sign*wheelbase/2*ty*groundAspect};
   return [innerRail,outerRail].map(rail=>{let u=p.u;for(let i=0;i<14;i++){const q=railAt(rail,u),f=(q.x-c.x)*tx+(q.y-c.y)*ty/groundAspect,df=2*Math.PI*(q.dx*tx+q.dy*ty/groundAspect);if(Math.abs(df)<1e-9)break;u-=f/df;}return railAt(rail,u);});}
  const rear=axle(-1),front=axle(1);return [rear[0],front[0],front[1],rear[1]];
 }
 // Bilinear coordinates map all four contacts exactly, including the small
 // trapezoidal deviation caused by curvature. The roof is carried by the same map.
 function footprintMap(p,index){
  const source=spriteFootprints[index],target=wheelFootprint(p),o=source[0],ux=source[1].x-o.x,uy=source[1].y-o.y,vx=source[3].x-o.x,vy=source[3].y-o.y,det=ux*vy-uy*vx;
  const du={x:target[1].x-target[0].x,y:target[1].y-target[0].y},dv={x:target[3].x-target[0].x,y:target[3].y-target[0].y},curve={x:target[2].x-target[1].x-target[3].x+target[0].x,y:target[2].y-target[1].y-target[3].y+target[0].y};
  function map(x,y){const a=((x-o.x)*vy-(y-o.y)*vx)/det,b=(ux*(y-o.y)-uy*(x-o.x))/det;const bend=Math.max(0,Math.min(1,a))*Math.max(0,Math.min(1,b));return {x:target[0].x+a*du.x+b*dv.x+bend*curve.x,y:target[0].y+a*du.y+b*dv.y+bend*curve.y};}
  return {source,target,map};
 }
 function railGauge(t){return crossSection(t).width;}
 const frontGauge=railGauge(1/4),perspectiveScale=t=>railGauge(t)/frontGauge;
 const model=Object.freeze({width:1200,height:800,center,axes,innerPath,outerPath,innerRail,outerRail,points,at,atDistance,pose,path,length:total,origin,spriteAnchors,railAt,railGauge,frontGauge,perspectiveScale,crossSection,spriteHeadings,spriteGauges,spriteBounds,groundAspect,wheelbase,spriteFootprints,wheelFootprint,footprintMap,nearestFrame});
 root.READER_TRAIN_TRACK=model;
 if(typeof module!=='undefined'&&module.exports)module.exports=model;
})(typeof window!=='undefined'?window:globalThis);
