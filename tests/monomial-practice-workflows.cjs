// Exercise the dedicated practice mode through the same controller used by the UI.
run(fs.readFileSync(path.join(root,'assets/algebra/monomial-practice.js'),'utf8'));
for(const level of ['base','medio','avanzato']){
 const families=new Set();
 for(let i=0;i<20;i++)families.add(run(`window.GatitoMonomialPractice.generate('${level}').kind`));
 assert.equal(families.size,5);
 for(const kind of ['sum','difference','product','power','quotient'])for(let i=0;i<6;i++){
  run(`rows=[];past=[];redo=[];{const ex=window.GatitoMonomialPractice.generate('${level}','${kind}');add(ex.tree,'single operation');globalThis.singleOriginal=structuredClone(current());}`);
  assert.equal(run('E.hasVariables(current())'),true);
  if(kind==='sum'||kind==='difference'){
   assert.equal(run('GatitoExpressionMonomials.chain(current()).terms.length'),2);
   assert.equal(run('monomialRecognitionPending()'),true);
   const similar=run('monomialPair(current())[0].key===monomialPair(current())[1].key');
   run(`answerMonomialRecognition(${!similar})`);assert.equal(run('monomialRecognitionPending()'),true,'wrong classification does not unlock calculation');
   run(`answerMonomialRecognition(${similar})`);assert.equal(run('monomialRecognitionPending()'),false);
   run('selected=GatitoExpressionMonomials.chain(current()).terms.map(t=>t.id)');
   if(!similar){assert.equal(run('monomialSelection()'),null);continue;}
   run("actions['monomial-sum']()");
   for(let step=0;run('arithmeticTask')&&step<40;step++){
    const answer=run(`(()=>{const a=arithmeticTask;if(a.stage==='denominator')return a.plan.values.map(v=>v.d).reduce((d,x)=>d/E.gcd(d,x)*x,1n);if(a.stage==='quotient')return a.denominator/a.plan.values[a.index].d;if(a.stage==='product')return a.answers[a.index]*(a.plan.values[a.index].n<0n?-a.plan.values[a.index].n:a.plan.values[a.index].n);return a.numerators.reduce((n,x)=>n+x,0n);})()`);monomialAnswer(answer);
   }
  }else if(kind==='product'){
   run('{const p=GatitoExpressionProduct.flatten(current());selected=[...p.terms.map(t=>t.id),...p.operators];}');
   assert(run('monomialProductSelection()'));run("actions['monomial-product']()");
   monomialProductAnswer(run('arithmeticTask.ns.reduce((a,b)=>a*b,1n)'),run('arithmeticTask.ds.reduce((a,b)=>a*b,1n)'));
   for(let j=0;run('arithmeticTask')&&j<15;j++)monomialProductAnswer(run('arithmeticTask.exponents[arithmeticTask.shared[arithmeticTask.index]].reduce((a,b)=>a+b,0n)'));
  }else if(kind==='power'){
   run('selected=[current().id]');assert(run('monomialPowerSelection()'));run("actions['monomial-power']()");
   const exp=run('arithmeticTask.exponent'),n=run('arithmeticTask.coefficient.n'),d=run('arithmeticTask.coefficient.d');
   if(exp===0n)run("finishMonomialPower({target:{answer:'1'},preventDefault(){}})");else{monomialPowerAnswer({answer:n**exp,denominator:d**exp});solveMonomialPowerLetters();}
  }else{
   assert.equal(run('current().op'),'÷');
   run("selected=[current().id+'op',current().right.id]");
   assert(run("contextActions().some(x=>x[0]==='monomial-as-fraction')"));assert(!run("contextActions().some(x=>x[0]==='reciprocal')"));
   run("actions['monomial-as-fraction']()");assert.equal(run('current().type'),'fraction');
   assert(run('GatitoExpressionMonomials.equivalent(singleOriginal,current(),E)'));
   run('selected=[current().id]');run("actions['monomial-quotient']()");
   const a=run('arithmeticTask.plan.a.coefficient'),b=run('arithmeticTask.plan.b.coefficient'),r=E.rat(a.n*b.d,a.d*b.n);quotientAnswer({answer:r.n,denominator:r.d});finishQuotientLetters();
  }
  assert.equal(run('arithmeticTask'),null);assert(run('GatitoExpressionMonomials.equivalent(singleOriginal,current(),E)'),run('E.stringify(singleOriginal)'));
 }
}
run("rows=[];past=[];redo=[];add(E.parse('2x+3x'),'recognition undo');answerMonomialRecognition(true);undo();");assert.equal(run('monomialRecognitionPending()'),true);
run("window.GatitoMonomialPractice=null;rows=[];add(E.parse('x+y'),'general notebook');");assert.equal(run('monomialRecognitionPending()'),false);
console.log('Monomial practice: 90 single operations solved at three levels; wrong similarity answers, unlike terms, random family coverage, quotient-to-fraction, exact equivalence, undo and general-notebook isolation passed');
