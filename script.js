const matches = [
  {
    league: "Premier League",
    team1: "Manchester City",
    team2: "Arsenal",
    logo1: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    link: "https://www.premierleague.com/",
  },
  {
    league: "La Liga",
    team1: "Barcelona",
    team2: "Real Madrid",
    logo1: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    link: "https://www.laliga.com/en-GB",
  },
  {
    league: "Serie A",
    team1: "AC Milan",
    team2: "Inter Milan",
    logo1: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/0/05/Inter_Milan.svg",
    link: "https://www.legaseriea.it/en",
  },
  {
    league: "Bundesliga",
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    logo1: "https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    link: "https://www.bundesliga.com/en",
  },
  {
    league: "Ligue 1",
    team1: "PSG",
    team2: "Monaco",
    logo1: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg",
    link: "https://www.ligue1.com/",
  },
  {
    league: "UEFA Champions League",
    team1: "Liverpool",
    team2: "Napoli",
    logo1: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/2/2d/SSC_Napoli.svg",
    link: "https://www.uefa.com/uefachampionsleague/",
  },
  {
    league: "Europa League",
    team1: "AS Roma",
    team2: "Sevilla",
    logo1: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    link: "https://www.uefa.com/uefaeuropaleague/",
  },
  {
    league: "MLS",
    team1: "LA Galaxy",
    team2: "Inter Miami",
    logo1: "https://upload.wikimedia.org/wikipedia/en/3/3c/LA_Galaxy_logo.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/2/20/Club_Internacional_de_Fútbol_Miami_logo.svg",
    link: "https://www.mlssoccer.com/",
  },
  {
    league: "Saudi Pro League",
    team1: "Al Nassr",
    team2: "Al Hilal",
    logo1: "https://upload.wikimedia.org/wikipedia/en/8/89/Al-Nassr_FC_Logo.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/4/4d/Al-Hilal_SFC_Logo.svg",
    link: "https://spl.sa/en",
  },
  {
    league: "Indian Super League",
    team1: "Kerala Blasters",
    team2: "Mumbai City",
    logo1: "https://upload.wikimedia.org/wikipedia/en/3/3d/Kerala_Blasters_FC_logo.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/0/0d/Mumbai_City_FC_logo.svg",
    link: "https://www.indiansuperleague.com/",
  },
];

const container = document.querySelector(".matches-container");

matches.forEach((match) => {
  const card = document.createElement("div");
  card.classList.add("match-card");
  card.innerHTML = `
    <h2>${match.league}</h2>
    <div class="match-teams">
      <img src="${match.logo1}" alt="${match.team1} logo" />
      <span>vs</span>
      <img src="${match.logo2}" alt="${match.team2} logo" />
    </div>
    <div class="match-info">
      <p>${match.team1} vs ${match.team2}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    window.open(match.link, "_blank");
  });
  container.appendChild(card);
});

