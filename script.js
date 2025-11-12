// === LIVE FOOTBALL MATCHES USING FOOTBALL-DATA API ===

// Your API key
const API_KEY = "e6e1463169ab4ed0acba0e1a5c37613b";
const BASE_URL = "https://api.football-data.org/v4/matches";
const container = document.getElementById("matches");

async function fetchLiveMatches() {
  container.innerHTML = "<p style='text-align:center;'>⏳ Loading live matches...</p>";

  try {
    const response = await fetch(BASE_URL, {
      headers: { "X-Auth-Token": API_KEY }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const matches = data.matches || [];

    if (matches.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>⚽ No live matches right now.</p>";
      return;
    }

    container.innerHTML = ""; // clear

    matches.forEach(m => {
      const homeTeam = m.homeTeam.name;
      const awayTeam = m.awayTeam.name;
      const competition = m.competition.name;
      const utcDate = new Date(m.utcDate);
      const status = m.status;
      const scoreHome = m.score.fullTime.home ?? "-";
      const scoreAway = m.score.fullTime.away ?? "-";

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="match-top">
          <div class="teams">
            <div class="team">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Soccerball.svg" class="team-logo">
              <span class="team-name">${homeTeam}</span>
            </div>
            <span class="vs">VS</span>
            <div class="team">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Soccerball.svg" class="team-logo">
              <span class="team-name">${awayTeam}</span>
            </div>
          </div>
          <div class="meta">${competition}</div>
          <div class="score">${scoreHome} - ${scoreAway}</div>
          <div class="muted">${utcDate.toLocaleString()} | ${status}</div>
          <div class="card-footer">
            <a href="https://www.uefa.com/" target="_blank" class="btn primary">Watch</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p style="text-align:center;color:red;">Failed to load matches 😢<br>${err.message}</p>`;
  }
}

// Search + Filter (future use)
document.getElementById("reset").addEventListener("click", fetchLiveMatches);

// Initial load
fetchLiveMatches();
