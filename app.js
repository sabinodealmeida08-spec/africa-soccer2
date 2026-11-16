const regions = {
  africa: {
    title: "África em destaque",
    competition: "CAF e campeonatos nacionais",
    description: "Girabola, Taça de Angola, CAN e competições africanas de clubes.",
    teams: "As seleções africanas",
    rows: [
      ["🇦🇴","Girabola","Angola · Campeonato nacional"],
      ["🌍","Taça das Nações Africanas","CAF · Seleções"],
      ["🏆","Liga dos Campeões da CAF","CAF · Clubes"],
      ["🏆","Taça das Confederações da CAF","CAF · Clubes"]
    ]
  },
  america: {
    title: "América em destaque",
    competition: "As principais ligas americanas",
    description: "Brasileirão, Liga Profesional, MLS e Liga MX.",
    teams: "Seleções das Américas",
    rows: [
      ["🇧🇷","Brasileirão","Brasil · Campeonato nacional"],
      ["🇦🇷","Liga Profesional","Argentina · Campeonato nacional"],
      ["🇺🇸","Major League Soccer","Estados Unidos · Campeonato nacional"],
      ["🌎","Copa Libertadores","CONMEBOL · Clubes"]
    ]
  },
  europe: {
    title: "Europa em destaque",
    competition: "As grandes ligas europeias",
    description: "Premier League, La Liga, Bundesliga, Serie A e Ligue 1.",
    teams: "Seleções europeias",
    rows: [
      ["🏴","Premier League","Inglaterra · Campeonato nacional"],
      ["🇪🇸","La Liga","Espanha · Campeonato nacional"],
      ["🇩🇪","Bundesliga","Alemanha · Campeonato nacional"],
      ["⭐","Liga dos Campeões","UEFA · Clubes"]
    ]
  },
  asia: {
    title: "Ásia em destaque",
    competition: "As principais ligas asiáticas",
    description: "Arábia Saudita, Japão, Coreia do Sul e Emirados Árabes Unidos.",
    teams: "Seleções asiáticas",
    rows: [
      ["🇸🇦","Saudi Pro League","Arábia Saudita · Campeonato nacional"],
      ["🇯🇵","J1 League","Japão · Campeonato nacional"],
      ["🇰🇷","K League 1","Coreia do Sul · Campeonato nacional"],
      ["🌏","Liga dos Campeões Asiática Elite","AFC · Clubes"]
    ]
  }
};
const tabs = document.querySelectorAll(".tab");
const title = document.getElementById("regionTitle");
const comp = document.getElementById("featuredCompetition");
const desc = document.getElementById("featuredDescription");
const teams = document.getElementById("featuredTeams");
const list = document.getElementById("competitionList");
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  const data = regions[tab.dataset.region];
  title.textContent = data.title;
  comp.textContent = data.competition;
  desc.textContent = data.description;
  teams.textContent = data.teams;
  list.innerHTML = data.rows.map(r => `<div class="competition-row"><span class="flag">${r[0]}</span><div><b>${r[1]}</b><small>${r[2]}</small></div><span class="priority">Selecionada</span></div>`).join("");
}));
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault(); deferredPrompt = event; installBtn.hidden = false;
});
installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installBtn.hidden = true;
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
