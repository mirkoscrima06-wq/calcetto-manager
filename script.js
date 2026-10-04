* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #edf4ff;
  --primary: #1f7a5d;
  --primary-dark: #165d47;
  --accent: #dff7eb;
  --text: #1d2430;
  --muted: #68778b;
  --border: #dfe8f5;
  --warning: #f7c66b;
  --danger: #ee7e72;
  --shadow: 0 18px 35px rgba(31, 54, 74, 0.08);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #edf6f0 0%, #f4f7fb 100%);
  color: var(--text);
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: #0f172a;
  color: white;
  padding: 28px 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
}

.brand-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #39b982, #1f7a5d);
  font-size: 24px;
}

.brand h1,
.brand p {
  margin: 0;
}

.brand p {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-btn {
  border: 0;
  background: rgba(255,255,255,0.04);
  color: white;
  padding: 12px 14px;
  border-radius: 12px;
  text-align: left;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-btn:hover,
.nav-btn.active {
  background: linear-gradient(135deg, rgba(57,185,130,0.32), rgba(31,122,93,0.22));
}

.content {
  padding: 28px;
}

.panel {
  display: none;
  background: var(--panel);
  border-radius: 22px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  padding: 26px;
}

.panel.active {
  display: block;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0;
  color: var(--primary);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.h2, h2, h3 {
  margin: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}

.form-grid.compact {
  grid-template-columns: repeat(4, minmax(140px, 1fr));
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.92rem;
  color: var(--muted);
  font-weight: 600;
}

.full-width {
  grid-column: 1 / -1;
}

input, select, textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fbfcff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: rgba(31, 122, 93, 0.7);
  box-shadow: 0 0 0 3px rgba(31, 122, 93, 0.12);
}

.primary-btn {
  border: 0;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  font-weight: 700;
  border-radius: 12px;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0 12px;
}

.badge {
  background: var(--panel-alt);
  color: var(--primary-dark);
  padding: 7px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
}

.player-grid, .team-grid, .stats-grid {
  display: grid;
  gap: 16px;
}

.player-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.player-card, .team-card, .match-card, .stat-card {
  background: linear-gradient(180deg, #ffffff, #f9fbff);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
}

.player-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.player-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}

.player-name {
  margin: 0;
  font-size: 1.1rem;
}

.player-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.8rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--accent);
  border-radius: 999px;
  color: var(--primary-dark);
  padding: 5px 9px;
  font-weight: 700;
}

.tag.warning {
  background: #fff3d4;
  color: #af7b1b;
}

.player-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.action-btn {
  border: 0;
  background: transparent;
  color: var(--muted);
  font-weight: 700;
  cursor: pointer;
}

.action-btn.delete {
  color: var(--danger);
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 16px;
  margin-bottom: 16px;
}

.team-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.team-card h3 {
  margin-bottom: 10px;
}

.team-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.85rem;
}

.team-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--text);
  font-size: 0.92rem;
}

.pre-match-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.match-card {
  min-height: 220px;
}

.mini-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.mini-pill {
  padding: 8px 10px;
  border-radius: 999px;
  background: var(--panel-alt);
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 0.8rem;
}

.summary-box {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
}

.summary-box strong {
  color: var(--text);
}

.match-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.ratings-table-wrap {
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  background: #fbfcff;
}

.ratings-table {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.rating-row {
  display: grid;
  grid-template-columns: minmax(120px, 1.4fr) 90px 120px;
  gap: 10px;
  align-items: center;
}

.rating-row label {
  display: contents;
}

.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin-bottom: 20px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
}

.stat-card strong {
  font-size: 1.8rem;
}

.matches-list {
  display: grid;
  gap: 12px;
}

.match-entry {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid var(--border);
  padding: 14px 16px;
  border-radius: 14px;
  background: #fbfdff;
}

.match-entry h4 {
  margin: 0 0 4px;
}

.match-entry p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.result-pill {
  align-self: center;
  background: var(--accent);
  color: var(--primary-dark);
  font-weight: 800;
  border-radius: 999px;
  padding: 8px 12px;
}

.empty-state {
  padding: 20px;
  text-align: center;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 16px;
  background: #fafcff;
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 14px;
  }

  .nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .pre-match-layout,
  .form-grid.compact {
    grid-template-columns: 1fr;
  }
}
