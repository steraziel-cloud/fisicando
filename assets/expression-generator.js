/* Bounded exercise generation with exact domain validation. */
window.GatitoExpressionGenerator=(()=>{
 const integer=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
 const pick=a=>a[integer(0,a.length-1)];
 let last='';
 function generate(level='base',mixed=false){
  const E=window.ExpressionMath;
  const fraction=()=>integer(1,9)+'/'+pick([2,3,4,5,6,8,9,10,12]);
  const atom=()=>mixed&&Math.random()<0.5?pick(['0,25','0,5','0,75','1,2','0,(3)','0,(6)','0,1(6)','1,(3)','0,2(7)']):fraction();
  const subtract=(a,b)=>{const x=E.evaluate(E.parse(a)),y=E.evaluate(E.parse(b));return x.n*y.d>=y.n*x.d?'('+a+') − ('+b+')':'('+b+') − ('+a+')';};
  for(let attempt=0;attempt<(level==='nightmare'?180:60);attempt++){
   const a=atom(),b=atom(),c=atom(),d=atom();let source;
   if(level==='base')source=pick([a+' + '+b+' · '+c,subtract(a,b)+' + '+c,a+' ÷ ('+b+') + '+c]);
   else if(level==='medio')source=pick(['['+a+' + '+b+'] · ('+c+')^2', '('+subtract(a,b)+') ÷ ('+c+') + '+d,'['+a+' + '+b+'] ÷ ('+c+') − ('+subtract(d,d)+')']);
   else if(level==='nightmare'){
    const [e,f,g,h,i,j,k,l,m,n]=Array.from({length:10},atom);
    source=pick([
     '{[('+a+' + '+b+') · ('+c+')^2 − ('+d+') · ('+e+')] ÷ ['+f+' + ('+g+')^2] + ('+h+' − '+i+')} · [('+j+' + '+k+') ÷ ('+l+')] + ('+m+')^3 + '+n,
     '{[('+a+' + '+b+' + '+c+') · ('+d+')^2 − ('+e+') · ('+f+')] / [('+g+' + '+h+') ÷ ('+i+') + ('+j+')^2]} + [('+k+' − '+l+') · ('+m+' + '+n+')]',
     '{[('+a+' + '+b+') ÷ ('+c+') + ('+d+')^2] · ['+e+' + '+f+' − '+g+']} − [('+h+' + '+i+') · ('+j+')^2 ÷ ('+k+')] + [('+l+')^3 + '+m+' + '+n+']'
    ]);
   }
   else source=pick(['{['+a+' + '+b+'] · ('+c+')^2} ÷ ('+d+')','('+a+' + '+b+') / ('+c+' + '+d+') + ('+atom()+')^2','['+subtract(a,b)+' + '+c+'] ÷ [('+d+')^2 + '+atom()+']']);
   try{const tree=E.parse(source),value=E.evaluate(tree);if(source===last||value.n.toString().length>9||value.d.toString().length>9)continue;last=source;return{source,tree};}catch{}
  }
  throw Error('Non sono riuscito a generare una nuova espressione. Riprova.');
 }
 return{generate};
})();
