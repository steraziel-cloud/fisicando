import json,sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent))
from build_integrals import lessons,H,m
R=Path(__file__).parent
catalog=json.loads((R/'original-assets-study-catalog.js').read_text().removeprefix('window.LESSON_CATALOG = ').strip().removesuffix(';'))
math=next(s for s in catalog if s['id']=='matematica')
area=next((a for a in math['areas'] if a['title']=='Analisi matematica'),None)
if area is None:
    area={'title':'Analisi matematica','icon':'graph','topics':[]};math['areas'].append(area)
topic={'title':'Calcolo integrale','icon':'graph','aliases':['integrali','primitive','sostituzione','fratti semplici','integrazione per parti'], 'lessons':[]}
for id,l in lessons.items():topic['lessons'].append(dict(title=l['title'],id=id,url='reader.html?lezione='+id,kind='Teoria',levels=['analisi1'],status='work-in-progress'))
topic['lessons'].append(dict(title='Integrali · Allenamento con suggerimenti e soluzioni',url='integrali-allenamento.html',kind='Esercizi',levels=['analisi1'],status='work-in-progress'))
area['topics']=[t for t in area['topics'] if t['title']!='Calcolo integrale']+[topic]
(R/'assets/study-catalog.js').write_text('window.LESSON_CATALOG = '+json.dumps(catalog,ensure_ascii=False,indent=2)+';\n')
reader=(R/'original-reader.html').read_text().replace('study-catalog.js?v=18','study-catalog.js?v=19')
reader=reader.replace('<script src="assets/reader.js?v=89" defer></script>','<script src="assets/reader-integrals-glossary.js?v=1" defer></script>\n<script src="assets/reader-integrals.js?v=1" defer></script>\n<script src="assets/reader.js?v=89" defer></script>')
reader=reader.replace('</head>','<link rel="stylesheet" href="assets/reader-integrals.css?v=1">\n</head>')
(R/'reader.html').write_text(reader)
(R/'assets/reader-integrals.css').write_text('''/* Scoped mathematical layout; the existing reader keeps navigation and checkpoints. */
body[data-reader-lesson^="integrali-"] .rm-card-text{max-width:none!important;margin-left:0!important;margin-right:0!important;text-align:left}
body[data-reader-lesson^="integrali-"] .rm-reader-step{max-width:none!important}
.int-formula{display:block;max-width:100%;overflow-x:auto;padding:12px 2px;margin:12px 0;background:color-mix(in srgb,var(--rm-accent,#16a6af) 7%,transparent);border-left:3px solid #16a6af;border-radius:0 10px 10px 0}
.int-formula math[display="block"]{display:block;text-align:left;margin:0 14px;min-width:max-content;font-size:1.08em}
body[data-reader-lesson^="integrali-"] math{font-family:math,serif}
.int-practice-main{max-width:1120px;margin:36px auto;padding:0 22px 60px;color:var(--rm-text,#213641)}
.int-practice-main h1{font-size:clamp(2rem,4vw,3.3rem);line-height:1.12}.int-practice-main .int-lead{font-size:1.18rem;line-height:1.65;max-width:850px}
.int-practice-nav{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.int-practice-nav a{padding:9px 14px;border:1px solid #16a6af;border-radius:20px;color:inherit;text-decoration:none}
.int-practice-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
.int-practice-card{padding:24px;background:var(--rm-panel,white);border:1px solid #16a6af30;border-radius:18px;font-size:1.08rem;line-height:1.6}
.int-practice-card h3{font-size:1.15rem;margin:0 0 12px}.int-practice-card details{border-top:1px solid #16a6af30;margin-top:16px;padding-top:12px}.int-practice-card summary{cursor:pointer;font-weight:600;color:#118e9c}.int-practice-card details p{margin:16px 0}.int-practice-section{scroll-margin-top:90px;margin:40px 0}.int-practice-section h2{font-size:1.6rem}
@media(max-width:760px){.int-practice-grid{grid-template-columns:1fr}.int-practice-card{padding:18px}.int-formula math[display="block"]{font-size:1em}}
''')

groups=[
('immediati','Integrali immediati',[
 (r'\int(6x^2-4x+5)\,dx','Usa la linearità e integra termine per termine.',[r'[[\int6x^2\,dx=2x^3\qquad\int(-4x)\,dx=-2x^2\qquad\int5\,dx=5x]]',r'[[2x^3-2x^2+5x+C]]']),
 (r'\int\left(\sqrt{x}+\frac{2}{x^2}\right)dx\quad(x>0)','Riscrivi la radice e la frazione come potenze.',[r'[[\int(x^{1/2}+2x^{-2})\,dx]]',r'[[\frac23x^{3/2}-\frac2x+C]]']),
 (r'\int\left(e^x+\frac3x\right)dx\quad(x>0)','Il secondo termine richiede il logaritmo, non la regola delle potenze.',[r'[[e^x+3\ln x+C]]','Controlla: la derivata dell’esponenziale è se stessa e quella di 3 ln x è 3/x.'])]),
('sostituzione','Funzione interna e sostituzione',[
 (r'\int x(x^2+2)^3\,dx','La funzione interna è x²+2; la sua derivata è 2x. Quale costante manca?',[r'Poniamo {{u=x^2+2}}, quindi {{x\,dx=du/2}}.',r'[[\frac12\int u^3\,du=\frac{u^4}{8}+C]]',r'[[\frac{(x^2+2)^4}{8}+C]]']),
 (r'\int e^{2x+3}\,dx','La derivata dell’argomento è 2: compensa il fattore.',[r'[[\frac12e^{2x+3}+C]]',r'La derivata del risultato è {{(1/2)2e^{2x+3}=e^{2x+3}}}.']),
 (r'\int\frac{dx}{1+4x^2}','Riconosci 1+(2x)² e poni u=2x.',[r'{{u=2x}}, {{dx=du/2}}.',r'[[\frac12\int\frac{du}{1+u^2}=\frac12\arctan u+C]]',r'[[\frac12\arctan(2x)+C]]'])]),
('lineari','Razionali: fattori lineari',[
 (r'\int\frac{x^2+1}{x-1}\,dx','Il grado del numeratore è maggiore: parti dalla divisione.',[r'{{x^2+1=(x-1)(x+1)+2}}.',r'[[\int\left(x+1+\frac2{x-1}\right)dx]]',r'[[\frac{x^2}{2}+x+2\ln|x-1|+C]] La formula vale su intervalli che non contengono {{1}}.']),
 (r'\int\frac{dx}{x(x+2)}','Cerca A/x + B/(x+2) e trova le due costanti.',[r'[[1=A(x+2)+Bx]] Con {{x=0}} ottieni {{A=1/2}}; con {{x=-2}} ottieni {{B=-1/2}}.',r'[[\frac12\ln|x|-\frac12\ln|x+2|+C]] Escludi {{0}} e {{-2}}.']),
 (r'\int\frac{x+1}{(x-2)^2}\,dx','Scrivi x+1 = (x−2)+3.',[r'[[\frac{x+1}{(x-2)^2}=\frac1{x-2}+\frac3{(x-2)^2}]]',r'[[\ln|x-2|-\frac3{x-2}+C]] Escludi {{2}}.'])]),
('quadratici','Razionali: fattori quadratici',[
 (r'\int\frac{dx}{x^2+6x+13}','Completa il quadrato e riconosci una forma arctan.',[r'[[x^2+6x+13=(x+3)^2+4]]',r'Con {{u=(x+3)/2}}, hai {{dx=2du}}.',r'[[\frac12\arctan\frac{x+3}{2}+C]]']),
 (r'\int\frac{x+2}{x^2+2x+5}\,dx','La derivata del denominatore è 2x+2. Riscrivi x+2 usando quella derivata.',[r'[[x+2=\frac12(2x+2)+1]]',r'[[\frac12\ln(x^2+2x+5)+\frac12\arctan\frac{x+1}{2}+C]]']),
 (r'\int\frac{dx}{x(x^2+4)}','Imposta A/x + (Bx+D)/(x²+4).',[r'[[1=A(x^2+4)+(Bx+D)x]] Il confronto dà {{A=1/4}}, {{B=-1/4}}, {{D=0}}.',r'[[\frac14\ln|x|-\frac18\ln(x^2+4)+C]] Il dominio esclude {{0}}.'])]),
('parti','Integrazione per parti',[
 (r'\int xe^{2x}\,dx','Deriva x e integra e^(2x), ricordando il fattore 1/2.',[r'{{u=x}}, {{v\prime=e^{2x}}}, {{u\prime=1}}, {{v=e^{2x}/2}}.',r'[[\frac{x}{2}e^{2x}-\frac12\int e^{2x}\,dx]]',r'[[\left(\frac{x}{2}-\frac14\right)e^{2x}+C]]']),
 (r'\int x\sin x\,dx','Scegli u=x e v′=sin x. La primitiva del seno ha un meno.',[r'[[-x\cos x+\int\cos x\,dx]]',r'[[-x\cos x+\sin x+C]]']),
 (r'\int x^2\ln x\,dx\quad(x>0)','Deriva ln x e integra x².',[r'{{u=\ln x}}, {{v=x^3/3}}.',r'[[\frac{x^3}{3}\ln x-\frac13\int x^2\,dx]]',r'[[\frac{x^3}{3}\ln x-\frac{x^3}{9}+C]]'])]),
('definiti','Integrali definiti',[
 (r'\int_0^2(3x^2+1)\,dx','Trova una primitiva, poi valuta entrambi gli estremi.',[r'{{F(x)=x^3+x}}.',r'[[[x^3+x]_0^2=10]] Nessuna costante nel risultato finale.']),
 (r'\int_0^1\frac{2x}{1+x^2}\,dx','Puoi usare ln(1+x²), oppure porre u=1+x² e cambiare i limiti.',[r'La nuova variabile va da {{1}} a {{2}}.',r'[[\int_1^2\frac{du}{u}=\ln2]]']),
 (r'K\prime(q)=3q+4,\quad K(0)=20.\quad K(2)=\ ?','Integra il costo marginale per trovare la variazione, poi aggiungi il costo fisso.',[r'[[K(2)-K(0)=\int_0^2(3q+4)\,dq=14]]',r'[[K(2)=20+14=34]]'])]),
('misti','Scegli tu il metodo',[
 (r'\int\frac{\ln x}{x}\,dx\quad(x>0)','Qual è la derivata di ln x? Cerca una funzione interna.',[r'{{u=\ln x}}, {{du=dx/x}}.',r'[[\int u\,du=\frac{u^2}{2}+C=\frac{(\ln x)^2}{2}+C]]']),
 (r'\int\frac{2x+3}{x^2+3x+7}\,dx','Controlla il numeratore prima di scomporre il denominatore.',[r'Il numeratore è esattamente la derivata del denominatore.',r'[[\ln(x^2+3x+7)+C]] Il trinomio è positivo per ogni {{x}}.']),
 (r'\int x^2e^x\,dx','Una sola integrazione per parti non basta: il grado deve scendere due volte.',[r'[[x^2e^x-2\int xe^x\,dx]]',r'[[e^x(x^2-2x+2)+C]]'])])]
head='''<!DOCTYPE html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GatitoMath – Integrali: allenamento</title><link rel="stylesheet" href="assets/reddito.css?v=5"><link rel="stylesheet" href="assets/gatitomath-wordmark.css?v=7"><link rel="stylesheet" href="assets/reader-integrals.css?v=1"><link rel="stylesheet" href="assets/interactions.css?v=1"><script src="assets/main.js" defer></script></head><body class="rm-lessons-page">'''
header=reader[reader.index('  <header'):reader.index('</header>')+9]
out=head+header+'<main class="int-practice-main"><a href="lezioni.html?livello=analisi1">← Torna al menù</a><p class="rm-eyebrow">Matematica · Quinta scientifico e primo anno universitario · In lavorazione</p><h1>Integrali: dal riconoscimento al calcolo</h1><p class="int-lead">21 esercizi da svolgere sul quaderno. Prima scegli il metodo e prova i passaggi; se ti blocchi apri il suggerimento. Apri la soluzione dopo aver tentato. Per gli integrali indefiniti, verifica il risultato derivandolo.</p><nav class="int-practice-nav" aria-label="Gruppi di esercizi">'+''.join('<a href="#'+id+'">'+title+'</a>' for id,title,_ in groups)+'</nav>'
n=0
for id,title,exercises in groups:
    out+='<section class="int-practice-section" id="'+id+'"><h2>'+title+'</h2><div class="int-practice-grid">'
    for tex,hint,steps in exercises:
        n+=1;out+='<article class="int-practice-card"><h3>Esercizio '+str(n)+'</h3>'+m(tex,True)+'<details><summary>Un suggerimento</summary><p>'+hint+'</p></details><details><summary>Confronta la soluzione</summary>'+''.join('<p>'+H(s)+'</p>' for s in steps)+'</details></article>'
    out+='</div></section>'
out+='<p><a href="reader.html?lezione=integrali-immediati&amp;livello=analisi1">Apri il percorso teorico →</a></p></main></body></html>'
(R/'integrali-allenamento.html').write_text(out)
