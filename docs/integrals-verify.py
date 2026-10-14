import sys,json,re
from pathlib import Path
sys.path.insert(0,'/tmp/integral-tools')
import sympy as s
from lxml import etree
R=Path(__file__).parent
x=s.symbols('x',positive=True)
tests=[
('x**3','3*x**2'),('x**5/5','x**4'),('2*x**s.Rational(3,2)/3','sqrt(x)'),('-1/x','1/x**2'),('log(x)','1/x'),
('x**3-x**2+4*x','3*x**2-2*x+4'),('(x**2+3)**5/5','2*x*(x**2+3)**4'),('(x**2+3)**5/10','x*(x**2+3)**4'),
('exp(3*x-2)','3*exp(3*x-2)'),('log(x**2+4)','2*x/(x**2+4)'),('exp(5*x+1)/5','exp(5*x+1)'),('atan(3*x)','3/(1+9*x**2)'),
('asin(2*x)','2/sqrt(1-4*x**2)'),('log(x**2+5)/2','x/(x**2+5)'),('2*sqrt(x)-2*log(1+sqrt(x))','1/(1+sqrt(x))'),
('x**2/2+x+2*log(x+1)','(x**2+2*x+3)/(x+1)'),('2*log(x-1)+log(x+1)','(3*x+1)/(x**2-1)'),
('log(x-1)-3/(x-1)','(x+2)/(x-1)**2'),('log(x**2+2*x+5)','(2*x+2)/(x**2+2*x+5)'),
('atan((x+1)/2)/2','1/(x**2+2*x+5)'),('3*log(x**2+2*x+5)/2+atan((x+1)/2)/2','(3*x+4)/(x**2+2*x+5)'),
('log(x)-log(x**2+1)/2','1/(x*(x**2+1))'),('x/(2*(1+x**2))+atan(x)/2','1/(1+x**2)**2'),
('(x-1)*exp(x)','x*exp(x)'),('x*log(x)-x','log(x)'),('x**2*log(x)/2-x**2/4','x*log(x)'),
('(x**2-2*x+2)*exp(x)','x**2*exp(x)'),('x*sin(x)+cos(x)','x*cos(x)'),
('2*x**3-2*x**2+5*x','6*x**2-4*x+5'),('2*x**s.Rational(3,2)/3-2/x','sqrt(x)+2/x**2'),('exp(x)+3*log(x)','exp(x)+3/x'),
('(x**2+2)**4/8','x*(x**2+2)**3'),('exp(2*x+3)/2','exp(2*x+3)'),('atan(2*x)/2','1/(1+4*x**2)'),
('x**2/2+x+2*log(x-1)','(x**2+1)/(x-1)'),('log(x)/2-log(x+2)/2','1/(x*(x+2))'),
('log(x-2)-3/(x-2)','(x+1)/(x-2)**2'),('atan((x+3)/2)/2','1/(x**2+6*x+13)'),
('log(x**2+2*x+5)/2+atan((x+1)/2)/2','(x+2)/(x**2+2*x+5)'),('log(x)/4-log(x**2+4)/8','1/(x*(x**2+4))'),
('(x/2-s.Rational(1,4))*exp(2*x)','x*exp(2*x)'),('-x*cos(x)+sin(x)','x*sin(x)'),('x**3*log(x)/3-x**3/9','x**2*log(x)'),
('log(x)**2/2','log(x)/x'),('log(x**2+3*x+7)','(2*x+3)/(x**2+3*x+7)')]
for F,f in tests:
    delta=s.simplify(s.diff(s.sympify(F,locals={'x':x,'s':s}),x)-s.sympify(f,locals={'x':x,'s':s}))
    assert delta==0,(F,f,delta)
# log|g| has the same derivative g'/g on each interval where g is nonzero.
for F,a,b,result in [('x**2',1,3,8),('x**2/2',-1,1,0),('2*x**2+6*x',0,5,80),('x**3+x',0,2,10),('log(1+x**2)',0,1,s.log(2)),('3*x**2/2+4*x',0,2,14)]:
    expr=s.sympify(F,locals={'x':x});assert s.simplify(expr.subs(x,b)-expr.subs(x,a)-result)==0
lessons=json.loads((R/'lessons.json').read_text());counts={'lessons':len(lessons),'questions':0,'steps':0,'formulas':0}
ns={'m':'http://www.w3.org/1998/Math/MathML'}
for l in lessons.values():
 for sec in l['sections']:
  if sec.get('quiz'):
   qs=sec['quiz']['questions'];assert len(qs)>=3
   for q in qs:
    assert len(q['options'])==4 and len(set(q['options']))==4 and 0<=q['answer']<4
    counts['questions']+=1
  for card in sec['cards']:
   for step in card['steps']:
    counts['steps']+=1;h=step['html'];assert '{{' not in h and '[[' not in h
    for formula in re.findall(r'<math\b.*?</math>',h):
     root=etree.fromstring(formula.encode());assert not root.xpath('//m:merror',namespaces=ns)
     counts['formulas']+=1
print('Verified',len(tests),'primitive identities, 6 definite evaluations, and reader structure:',counts)
