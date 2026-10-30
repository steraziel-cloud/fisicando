// Exercise the actual guided controller with generated exercises, not a separate solver.
run('window.ExpressionMath=E;window.GatitoExpressionMonomials=GatitoExpressionMonomials;let generatorSeed=83127;Math.random=()=>{generatorSeed=(1664525*generatorSeed+1013904223)>>>0;return generatorSeed/4294967296};');
run(fs.readFileSync(path.join(root,'assets/algebra/expression-generator.js'),'utf8'));
for(const level of ['base','medio','avanzato','nightmare']){
 const families=new Set();
 for(let sample=0;sample<12;sample++){
  run(`rows=[];past=[];redo=[];{const ex=window.GatitoExpressionGenerator.generate('${level}');globalThis.generatedSource=ex.source;globalThis.generatedKind=ex.kind;add(ex.tree,'generated literal test');globalThis.generatedInitial=structuredClone(current());}`);
  families.add(run('generatedKind'));assert(run('E.hasVariables(current())'));
  let passes=0;
  for(;passes<50;passes++){
   const action=run(`(()=>{let chosen=null;GatitoExpressionSteps.visit(current(),(n,parents)=>{if(chosen||n.type!=='power'||GatitoExpressionPowers.unwrap(n.left).type==='variable')return;selected=[(parents.findLast(p=>p.type==='monomial')||n).id];if(monomialPowerSelection())chosen=[...selected];});if(chosen){selected=chosen;actions['monomial-power']();return 'power';}for(const scope of GatitoExpressionProduct.scopes(current())){if(scope.implicit)continue;const c=GatitoExpressionProduct.flatten(scope);selected=[...c.terms.map(t=>t.id),...c.operators];if(monomialProductSelection()){actions['monomial-product']();return 'product';}}for(const scope of GatitoExpressionMonomials.scopes(current())){const c=GatitoExpressionMonomials.chain(scope),groups=new Map();c.terms.forEach((t,i)=>{if(!GatitoExpressionMonomials.ready(t))return;const d=GatitoExpressionMonomials.describe(t,E);if(d)(groups.get(d.key)||groups.set(d.key,[]).get(d.key)).push(i);});for(const ids of groups.values()){if(ids.length<2)continue;selected=[...ids.map(i=>c.terms[i].id),...ids.slice(1).map(i=>c.operators[i-1])];if(monomialSelection()){actions['monomial-sum']();return 'sum';}}}return null;})()`);
   if(!action)break;
   assert(run('arithmeticTask'),run('generatedSource'));
   if(action==='power'){const e=run('arithmeticTask.exponent'),n=run('arithmeticTask.coefficient.n'),d=run('arithmeticTask.coefficient.d');monomialPowerAnswer({answer:n**e,denominator:d**e});solveMonomialPowerLetters();}
   else if(action==='product'){const n=run('arithmeticTask.ns.reduce((a,b)=>a*b,1n)'),d=run('arithmeticTask.ds.reduce((a,b)=>a*b,1n)');monomialProductAnswer(n,d);for(let i=0;run('arithmeticTask')&&i<10;i++)monomialProductAnswer(run('arithmeticTask.exponents[arithmeticTask.shared[arithmeticTask.index]].reduce((a,b)=>a+b,0n)'));}
   else for(let i=0;run('arithmeticTask')&&i<30;i++){const answer=run(`(()=>{const a=arithmeticTask;if(a.stage==='denominator')return a.plan.values.map(v=>v.d).reduce((d,x)=>d/E.gcd(d,x)*x,1n);if(a.stage==='quotient')return a.denominator/a.plan.values[a.index].d;if(a.stage==='product')return a.answers[a.index]*(a.plan.values[a.index].n<0n?-a.plan.values[a.index].n:a.plan.values[a.index].n);return a.numerators.reduce((n,x)=>n+x,0n);})()`);monomialAnswer(answer);}
   assert.equal(run('arithmeticTask?.error||null'),null,run('generatedSource'));assert.equal(run('arithmeticTask'),null,run('generatedSource'));
  }
  assert(passes<50,'guided generation terminates');assert(run('GatitoExpressionMonomials.equivalent(generatedInitial,current(),E)'),run('generatedSource'));
  assert(run('GatitoExpressionProduct.scopes(current()).every(t=>t.implicit)'),run('generatedSource'));
  assert(run('GatitoExpressionMonomials.chain(current()).terms.every(t=>GatitoExpressionMonomials.ready(t))'),run('generatedSource'));
  const keys=Array.from(run('GatitoExpressionMonomials.chain(current()).terms.map(t=>GatitoExpressionMonomials.describe(t,E).key)'));assert.equal(new Set(keys).size,keys.length,'all like terms collected');
 }
 assert.equal(families.size,4,'all four exercise families occur at each level');
}
console.log('Algebra generator: 48 seeded exercises across all levels and four families solved to collected polynomial form through the real guided power/product/sum controller, with exact equivalence preserved');
