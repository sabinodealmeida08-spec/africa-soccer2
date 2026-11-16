const competitions = {
  africa: [
    ["CAF Champions League","Clubes","Principal competição africana de clubes."],
    ["CAF Confederation Cup","Clubes","Competição continental africana de clubes."],
    ["CAN / Africa Cup of Nations","Seleções","Principal competição de seleções africanas."],
    ["Eliminatórias Africanas do Mundial","Seleções","Qualificação das seleções africanas."],
    ["Campeonatos nacionais africanos","Ligas","Ligas nacionais, incluindo Girabola, quando houver cobertura de dados."]
  ],
  europa: [
    ["UEFA Champions League","Clubes","Liga dos Campeões da Europa."],
    ["UEFA Europa League","Clubes","Liga Europa."],
    ["UEFA Conference League","Clubes","Liga Conferência."],
    ["UEFA Nations League","Seleções","Liga das Nações Europeia."],
    ["Campeonatos nacionais europeus","Ligas","Principais ligas nacionais europeias."]
  ],
  america: [
    ["Copa América","Seleções","Competição de seleções da América do Sul."],
    ["CONCACAF Nations League","Seleções","Liga das Nações da CONCACAF."],
    ["Eliminatórias da CONMEBOL","Seleções","Qualificação sul-americana para o Mundial."],
    ["Eliminatórias da CONCACAF","Seleções","Qualificação da América do Norte, Central e Caraíbas."],
    ["Principais ligas americanas","Ligas","Competições de clubes selecionadas da América."]
  ],
  asia: [
    ["AFC Champions League","Clubes","Principal competição continental asiática de clubes."],
    ["AFC Asian Cup","Seleções","Principal competição de seleções da Ásia."],
    ["Eliminatórias Asiáticas do Mundial","Seleções","Qualificação das seleções asiáticas."],
    ["Principais ligas asiáticas","Ligas","Competições nacionais selecionadas da Ásia."]
  ]
};
const clubs = [
  ["Mundial de Clubes da FIFA","Mundo","Competição internacional de clubes."],
  ["Campeonato do Mundo FIFA","Seleções","Principal competição mundial de seleções."]
];
const labels = {africa:"África",europa:"Europa",america:"América",asia:"Ásia"};
const content = document.getElementById("content");
function card([name,type,desc]) { return `<article class="card"><span class="tag">${type}</span><h3>${name}</h3><p>${desc}</p></article>`; }
function render(view="inicio") {
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  if(view==="inicio"){
    content.innerHTML = `<div class="section-head"><h2>Competições em destaque</h2><p>Estrutura inicial do produto</p></div>
      <div class="grid">${card(["Futebol africano","PRIORIDADE","Competições de clubes, seleções e ligas nacionais africanas."])}${card(["Seleções nacionais","INTERNACIONAL","Acompanhamento das seleções séniores por confederação."])}${card(["Grandes competições","MUNDO","Competições continentais e mundiais de clubes e seleções."])}</div>
      <div class="section-head"><h2>Competições internacionais adicionais</h2><p>Incluídas nesta versão do protótipo</p></div>
      <div class="grid">${card(["UEFA Champions League","EUROPA","Liga dos Campeões."])}${card(["UEFA Europa League","EUROPA","Liga Europa."])}${card(["UEFA Conference League","EUROPA","Liga Conferência."])}${card(["UEFA Nations League","SELEÇÕES","Liga das Nações Europeia."])}${card(["CONCACAF Nations League","SELEÇÕES","Liga das Nações da CONCACAF."])}</div>
      <div class="section-head"><h2>Outras competições mundiais</h2></div><div class="grid">${clubs.map(card).join("")}</div>`;
    return;
  }
  const data=competitions[view]||[];
  content.innerHTML=`<div class="section-head"><h2>${labels[view]}</h2><p>Competições séniores masculinas previstas</p></div><div class="grid">${data.map(card).join("")}</div>`;
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>render(b.dataset.view)));
document.getElementById("year").textContent=new Date().getFullYear();
render();
let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;const btn=document.getElementById("installBtn");btn.hidden=false;btn.addEventListener("click",async()=>{deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;btn.hidden=true;},{once:true});});
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
