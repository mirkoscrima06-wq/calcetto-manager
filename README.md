const STORAGE_KEY = "calcetto-manager-state-v1";

const starterPlayers = [
  { id: 1, name: "Marco", role: "Centrocampista", overall: 82, available: true, notes: "Ottimo controllo" },
  { id: 2, name: "Luca", role: "Attaccante", overall: 76, available: true, notes: "Rapido in contropiede" },
  { id: 3, name: "Davide", role: "Difensore", overall: 79, available: true, notes: "Buono nel gioco aereo" },
  { id: 4, name: "Tommaso", role: "Portiere", overall: 74, available: false, notes: "Disponibile solo il weekend" },
  { id: 5, name: "Alessio", role: "Ruolo libero", overall: 81, available: true, notes: "Molto utile in transizione" },
  { id: 6, name: "Federico", role: "Centrocampista", overall: 77, available: true, notes: "Buon inserimento" },
  { id: 7, name: "Matteo", role: "Attaccante", overall: 83, available: true, notes: "Finalizzatore" },
  { id: 8, name: "Giacomo", role: "Difensore", overall: 72, available: false, notes: "Assente per lavoro" },
];

const defaultState = {
  players: starterPlayers,
  matches: [
    {
      id: 101,
      date: "2026-09-14",
      opponent: "Brescia FC",
      score: "4-2",
      notes: "Buona fase di pressione, da migliorare la gestione del possesso.",
      playerRatings: [
        { playerId: 1, rating: 8.5, goals: 1 },
        { playerId: 2, rating: 7.2, goals: 1 },
        { playerId: 3, rating: 8.1, goals: 0 },
        { playerId: 5, rating: 8.8, goals: 0 },
        { playerId: 6, rating: 7.5, goals: 1 },
        { playerId: 7, rating: 8.9, goals: 1 },
      ],
    },
  ],
};

let state = loadState();

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".panel");
const playersList = document.getElementById("playersList");
const playersCount = document.getElementById("playersCount");
const teamsPreview = document.getElementById("teamsPreview");
const preMatchPlayers = document.getElementById("preMatchPlayers");
const preMatchSummary = document.getElementById("preMatchSummary");
const ratingsTable = document.getElementById("ratingsTable");
const statsCards = document.getElementById("statsCards");
const matchesList = document.getElementById("matchesList");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.section;
    navButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    sections.forEach((section) => section.classList.toggle("active", section.id === target));
  });
});

document.getElementById("playerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const player = {
    id: Date.now(),
    name: document.getElementById("playerName").value.trim(),
    role: document.getElementById("playerRole").value,
    overall: Number(document.getElementById("playerOverall").value),
    available: document.getElementById("playerAvailable").value === "true",
    notes: document.getElementById("playerNotes").value.trim(),
  };

  if (!player.name) return;

  state.players.push(player);
  saveState();
  renderAll();
  event.target.reset();
  document.getElementById("playerOverall").value = 70;
  document.getElementById("playerAvailable").value = "true";
});

document.getElementById("generateTeamsBtn").addEventListener("click", () => {
  const teamCount = Number(document.getElementById("teamCountSelect").value);
  const generated = generateBalancedTeams(teamCount, state.players.filter((player) => player.available));
  renderTeams(generated);
});

document.getElementById("matchForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const date = document.getElementById("matchDate").value;
  const opponent = document.getElementById("matchOpponent").value.trim();
  const scoreHome = Number(document.getElementById("matchScoreHome").value);
  const scoreAway = Number(document.getElementById("matchScoreAway").value);
  const notes = document.getElementById("matchNotes").value.trim();

  const playerRatings = Array.from(document.querySelectorAll(".rating-input")).map((input) => {
    const playerId = Number(input.dataset.playerId);
    const rating = Number(input.value);
    const goals = Number(document.querySelector(`.goals-input[data-player-id="${playerId}"]`).value || 0);

    return {
      playerId,
      rating,
      goals,
    };
  });

  state.matches.push({
    id: Date.now(),
    date,
    opponent,
    score: `${scoreHome}-${scoreAway}`,
    notes,
    playerRatings,
  });

  saveState();
  renderAll();
  event.target.reset();
});

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return structuredClone(defaultState);
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed.players && parsed.matches ? parsed : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderAll() {
  renderPlayers();
  renderTeams(generateBalancedTeams(Number(document.getElementById("teamCountSelect").value || 2), state.players.filter((player) => player.available)));
  renderPreMatch();
  renderRatingsTable();
  renderStats();
}

function renderPlayers() {
  const availablePlayers = state.players.filter((player) => player.available);

  playersCount.textContent = `${state.players.length} giocatori`;

  if (!state.players.length) {
    playersList.innerHTML = '<div class="empty-state">Nessun giocatore inserito.</div>';
    return;
  }

  playersList.innerHTML = state.players
    .map(
      (player) => `
        <article class="player-card">
          <div class="player-top">
            <div>
              <h3 class="player-name">${player.name}</h3>
              <div class="player-meta">
                <span class="tag">${player.role}</span>
                <span class="tag">OV ${player.overall}</span>
              </div>
            </div>
            <span class="tag ${player.available ? "" : "warning"}">${player.available ? "Disponibile" : "Assente"}</span>
          </div>

          <div>${player.notes || "Nessuna nota"}</div>

          <div class="player-actions">
            <button class="action-btn" data-action="toggle" data-id="${player.id}">${player.available ? "Segna assente" : "Segna disponibile"}</button>
            <button class="action-btn delete" data-action="delete" data-id="${player.id}">Elimina</button>
          </div>
        </article>
      `
    )
    .join("");

  playersList.querySelectorAll(".action-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const action = button.dataset.action;

      if (action === "toggle") {
        state.players = state.players.map((player) =>
          player.id === id ? { ...player, available: !player.available } : player
        );
      }

      if (action === "delete") {
        state.players = state.players.filter((player) => player.id !== id);
      }

      saveState();
      renderAll();
    });
  });
}

function generateBalancedTeams(teamCount, players) {
  const available = [...players].sort((a, b) => b.overall - a.overall);
  const teams = Array.from({ length: teamCount }, () => ({ name: `Team ${teamCount > 1 ? String.fromCharCode(65 + teams.length) : "A"}`, players: [], total: 0 }));

  if (!available.length) {
    return teams;
  }

  const preparedTeams = Array.from({ length: teamCount }, (_, index) => ({
    name: `Squadra ${index + 1}`,
    players: [],
    total: 0,
  }));

  for (const player of available) {
    const team = preparedTeams.reduce((best, current) => {
      if (!best) return current;
      return current.total < best.total ? current : best;
    }, null);

    team.players.push(player);
    team.total += player.overall;
  }

  return preparedTeams.map((team, index) => ({
    ...team,
    name: `Squadra ${index + 1}`,
    avg: team.players.length ? (team.total / team.players.length).toFixed(1) : "0.0",
  }));
}

function renderTeams(generatedTeams) {
  if (!generatedTeams.some((team) => team.players.length)) {
    teamsPreview.innerHTML = '<div class="empty-state">Nessun giocatore disponibile per creare le squadre.</div>';
    return;
  }

  teamsPreview.innerHTML = generatedTeams
    .map(
      (team) => `
        <article class="team-card">
          <h3>${team.name}</h3>
          <div class="team-summary">
            <span>Media: ${team.avg}</span>
            <span>Totale: ${team.total}</span>
          </div>
          <ul class="team-list">
            ${team.players.map((player) => `<li>${player.name} (${player.overall})</li>`).join("") || "<li>Nessun giocatore</li>"}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderPreMatch() {
  const availablePlayers = state.players.filter((player) => player.available);

  if (!availablePlayers.length) {
    preMatchPlayers.innerHTML = '<div class="empty-state">Nessun giocatore disponibile.</div>';
    preMatchSummary.innerHTML = '<div class="empty-state">Aggiorna la lista giocatori per vedere il riepilogo.</div>';
    return;
  }

  preMatchPlayers.innerHTML = availablePlayers
    .map((player) => `<span class="mini-pill">${player.name} · OV ${player.overall}</span>`)
    .join("");

  const players = [...availablePlayers].sort((a, b) => b.overall - a.overall);
  const avgOverall = (players.reduce((sum, player) => sum + player.overall, 0) / players.length).toFixed(1);
  const bestPlayers = players.slice(0, 3).map((player) => player.name).join(", ");

  preMatchSummary.innerHTML = `
    <div><strong>Totale giocatori:</strong> ${players.length}</div>
    <div><strong>Overall medio:</strong> ${avgOverall}</div>
    <div><strong>Top player:</strong> ${bestPlayers}</div>
    <div><strong>Distribuzione ruoli:</strong> ${summarizeRoles(availablePlayers)}</div>
  `;
}

function summarizeRoles(players) {
  const counts = players.reduce((acc, player) => {
    acc[player.role] = (acc[player.role] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([role, count]) => `${role}: ${count}`)
    .join(" · ");
}

function renderRatingsTable() {
  const availablePlayers = state.players.filter((player) => player.available);

  if (!availablePlayers.length) {
    ratingsTable.innerHTML = '<div class="empty-state">Nessun giocatore disponibile per la valutazione.</div>';
    return;
  }

  ratingsTable.innerHTML = availablePlayers
    .map(
      (player) => `
        <div class="rating-row">
          <label>
            <span>${player.name}</span>
          </label>
          <input class="rating-input" data-player-id="${player.id}" type="number" min="1" max="10" step="0.1" value="7.5" />
          <input class="goals-input" data-player-id="${player.id}" type="number" min="0" max="10" value="0" placeholder="Gol" />
        </div>
      `
    )
    .join("");
}

function renderStats() {
  const totalPlayers = state.players.length;
  const availablePlayers = state.players.filter((player) => player.available).length;
  const averageOverall = totalPlayers
    ? (state.players.reduce((sum, player) => sum + player.overall, 0) / totalPlayers).toFixed(1)
    : "0.0";
  const matchesCount = state.matches.length;

  statsCards.innerHTML = `
    <article class="stat-card">
      <span>Giocatori</span>
      <strong>${totalPlayers}</strong>
    </article>
    <article class="stat-card">
      <span>Disponibili</span>
      <strong>${availablePlayers}</strong>
    </article>
    <article class="stat-card">
      <span>Overall medio</span>
      <strong>${averageOverall}</strong>
    </article>
    <article class="stat-card">
      <span>Partite</span>
      <strong>${matchesCount}</strong>
    </article>
  `;

  if (!state.matches.length) {
    matchesList.innerHTML = '<div class="empty-state">Nessuna partita salvata.</div>';
    return;
  }

  matchesList.innerHTML = [...state.matches]
    .reverse()
    .map(
      (match) => `
        <article class="match-entry">
          <div>
            <h4>${formatDate(match.date)} · ${match.opponent}</h4>
            <p>${match.notes || "Nessuna nota"}</p>
          </div>
          <div class="result-pill">${match.score}</div>
        </article>
      `
    )
    .join("");
}

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

renderAll();
