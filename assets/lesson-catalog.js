/* Available materials and their introductory study levels.
   Used only by lezioni.html; the existing standalone labs keep their own index. */
window.LESSON_CATALOG = [
  {title:"Pillole di matematica per la fisica", items:[
    {title:"Algebra dei vettori", items:[
      {title:"Teoria", url:"pillole/vettori/teoria.html", levels:["triennio","universita"]},
      {title:"Esercizi", url:"pillole/vettori/esercizi.html", levels:["triennio","universita"]},
      {title:"Laboratorio", url:"pillole/vettori/laboratorio.html", levels:["biennio","triennio","universita"]}
    ]}
  ]},
  {title:"Meccanica del punto materiale", items:[
    {title:"Cinematica", items:[
      {title:"Teoria", url:"meccanica_punto_materiale/cinematica/teoria.html", levels:["triennio","universita"]},
      {title:"Esercizi", url:"meccanica_punto_materiale/cinematica/esercizi.html", levels:["triennio","universita"]}
    ]},
    {title:"Statica", items:[
      {title:"Laboratorio", url:"meccanica_punto_materiale/statica/laboratorio.html", levels:["biennio","triennio","universita"]}
    ]},
    {title:"Dinamica", items:[
      {title:"Teoria", url:"meccanica_punto_materiale/dinamica/teoria.html", levels:["triennio","universita"]},
      {title:"Esercizi", url:"meccanica_punto_materiale/dinamica/esercizi.html", levels:["triennio","universita"]}
    ]}
  ]}
];
const requestedLevel = new URLSearchParams(location.search).get("livello");
const catalogLevel = ["elementari","medie","biennio","triennio","universita"].includes(requestedLevel) ? requestedLevel : null;
window.SITE_MAP = window.LESSON_CATALOG.map(group => ({
  title:group.title,
  items:group.items.map(topic => ({
    title:topic.title,
    items:topic.items.filter(material => !catalogLevel || material.levels.includes(catalogLevel))
  })).filter(topic => topic.items.length)
})).filter(group => group.items.length);
