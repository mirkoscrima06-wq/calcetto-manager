* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-dark: #0f172a;
  --bg-mid: #111827;
  --bg-light: #f5f7fb;
  --surface: #ffffff;
  --surface-soft: #eef2ff;
  --primary: #10b981;
  --primary-dark: #059669;
  --primary-soft: #d1fae5;
  --secondary: #6366f1;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --danger: #ef4444;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #111827 30%, #0b1220 100%);
  color: var(--text);
}

button, input, select, textarea {
  font: inherit;
}

body {
  min-height: 100vh;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

.screen {
  display: none;
  width: min(1100px, 100%);
  animation: fadeIn 0.25s ease;
}

.screen.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.home-container {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 30px;
  padding: 36px 28px 30px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
}

.home-header {
  text-align: center;
  margin-bottom: 28px;
}

.app-logo {
  width: 84px;
  height: 84px;
  margin: 0 auto 18px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  font-size: 42px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  box-shadow: 0 18px 35px rgba(16, 185, 129, 0.35);
}

.app-title {
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0;
  letter-spacing: -0.04em;
  font-weight: 800;
}

.app-subtitle {
  margin-top: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 18px;
  max-width: 820px;
  margin: 0 auto;
}

.menu-button {
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
  color: #fff;
  min-height: 170px;
  border-radius: 22px;
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.menu-button:hover {
  transform: translateY(-4px);
  border-color: rgba(16,185,129,0.6);
  box-shadow: 0 18px 30px rgba(16,185,129,0.18);
}

.menu-icon {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.24), rgba(99,102,241,0.22));
  font-size: 30px;
}

.menu-label {
  font-size: 1.08rem;
  font-weight: 700;
  text-align: center;
}

.screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
  color: #fff;
}

.screen-header h2 {
  font-size: clamp(1.6rem, 2vw, 2rem);
  margin: 0;
}

.back-btn {
  background: rgba(255,255,255,0.08);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
}

.spacer {
  width: 100px;
}

.screen-content {
  background: rgba(255,255,255,0.96);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
  margin-bottom: 20px;
}

.form-grid.compact {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.92rem;
}

.full-width {
  grid-column: 1 / -1;
}

input, select, textarea {
  width: 100%;
  border: 1px solid var(--border);
  background: #f8fafc;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 0.98rem;
  color: var(--text);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(16,185,129,0.12);
}

.primary-btn, .danger-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  box-shadow: 0 10px 22px rgba(16,185,129,0.2);
}

.danger-btn {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  color: white;
  margin-top: 14px;
}

.primary-btn:hover, .danger-btn:hover {
  transform: translateY(-1px);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 16px;
}

.list-header h3 {
  font-size: 1.2rem;
  color: var(--text);
}

.badge {
  background: var(--primary-soft);
  color: var(--primary-dark);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.8rem;
}

.player-grid, .team-grid, .stats-grid, .sds-grid {
  display: grid;
  gap: 18px;
}

.player-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.player-card, .team-card, .stat-card, .match-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
}

.player-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.player-top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
}

.player-name {
  margin: 0;
  font-size: 1.1rem;
}

.player-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag {
  background: var(--primary-soft);
  color: var(--primary-dark);
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.74rem;
}

.tag.warning {
  background: #fef3c7;
  color: #92400e;
}

.player-notes {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--muted);
  font-size: 0.88rem;
}

.player-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}

.action-btn {
  border: 0;
  background: #f1f5f9;
  color: var(--text);
  border-radius: 10px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
}

.action-btn.delete {
  background: #fee2e2;
  color: #991b1b;
}

.toolbar {
  display: flex;
  align-items: end;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.team-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.team-card h3 {
  margin-bottom: 8px;
  color: var(--primary-dark);
}

.team-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  background: #f8fafc;
  border-radius: 10px;
  padding: 10px 12px;
  font-weight: 700;
  color: var(--muted);
}

.team-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.team-list li {
  background: #ecfdf5;
  color: var(--text);
  border-left: 3px solid var(--primary);
  padding: 8px 10px;
  border-radius: 8px;
}

.match-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.ratings-table-wrap {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
}

.ratings-table-wrap h3 {
  margin-bottom: 12px;
}

.ratings-table {
  display: grid;
  gap: 10px;
}

.rating-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 10px;
  align-items: center;
}

.stats-grid {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin-bottom: 20px;
}

.stat-card {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.stat-card span {
  color: var(--muted);
  font-weight: 700;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat-card strong {
  font-size: 2rem;
  color: var(--secondary);
}

.matches-list {
  display: grid;
  gap: 12px;
}

.match-entry {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fff;
}

.result-pill {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  padding: 9px 16px;
  border-radius: 999px;
  font-weight: 800;
  min-width: 80px;
  text-align: center;
}

.sds-container {
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 20px;
}

.sds-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.sds-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
}

.sds-card h3 {
  margin-bottom: 10px;
}

.settings-box {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 22px;
}

.settings-box h3 {
  margin-bottom: 14px;
}

.empty-state {
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 12px;
  background: #f8fafc;
  padding: 24px 16px;
  text-align: center;
}

@media (max-width: 760px) {
  .menu-grid {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }

  .screen-header {
    flex-wrap: wrap;
  }

  .spacer {
    display: none;
  }
}

@media (max-width: 500px) {
  .app-shell {
    padding: 16px;
  }

  .home-container {
    padding: 24px 18px 20px;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .menu-button {
    min-height: 120px;
  }

  .screen-content {
    padding: 18px 14px;
  }

  .rating-row {
    grid-template-columns: 1fr;
  }
}









































