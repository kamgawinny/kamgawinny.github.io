async function loadMissions() {
  const res = await fetch("data/missions.json");
  if (!res.ok) {
    throw new Error("Impossible de charger les missions");
  }
  return res.json();
}

function renderMissionGrid(missions, container, onSelect) {
  container.innerHTML = "";
  missions.forEach((mission, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mission-tile";
    button.dataset.id = String(mission.id);
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");

    button.innerHTML = `
      <div class="mission-tile__icon">${mission.icon}</div>
      <div class="mission-tile__title">${mission.title}</div>
      <div class="mission-tile__subtitle">${mission.subtitle}</div>
    `;

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".mission-tile")
        .forEach((el) => el.classList.remove("active"));
      button.classList.add("active");
      document
        .querySelectorAll(".mission-tile")
        .forEach((el) => el.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      onSelect(mission);
    });

    if (index === 0) {
      button.classList.add("active");
    }

    container.appendChild(button);
  });
}

function renderMissionDetail(mission, currentHorizon) {
  const titleEl = document.getElementById("mission-detail-title");
  const subtitleEl = document.getElementById("mission-detail-subtitle");
  const contextEl = document.getElementById("mission-context");
  const actionsEl = document.getElementById("mission-actions");
  const expEl = document.getElementById("mission-experience");

  if (!titleEl || !subtitleEl || !contextEl || !actionsEl || !expEl) return;

  titleEl.textContent = `${mission.icon} ${mission.title}`;
  subtitleEl.textContent = mission.subtitle;

  const enjeux = mission.context?.enjeux ?? [];
  const besoins = mission.context?.besoins ?? [];

  contextEl.innerHTML = `
    <div class="missions__context-block">
      <h4>Enjeux</h4>
      <ul>
        ${enjeux.map((e) => `<li>${e}</li>`).join("")}
      </ul>
    </div>
    <div class="missions__context-block">
      <h4>Besoins</h4>
      <ul>
        ${besoins.map((b) => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `;

  const actionsForHorizon = mission.actions?.[currentHorizon] ?? [];
  actionsEl.innerHTML = actionsForHorizon
    .map(
      (a) => `
      <article class="card-action">
        <h4 class="card-action__title">${a.action}</h4>
        <p class="card-action__meta">
          <strong>Livrable :</strong> ${a.deliverable}<br />
          <strong>KPI :</strong> ${a.kpi}
        </p>
      </article>
    `
    )
    .join("");

  expEl.innerHTML = `<strong>Mon expérience associée :</strong> ${mission.my_experience}`;
}

function setupHorizonSelector(mission) {
  const buttons = document.querySelectorAll(".btn-horizon");
  let currentHorizon = "30";

  const update = (h) => {
    currentHorizon = h;
    buttons.forEach((btn) => {
      const val = btn.getAttribute("data-horizon");
      const isActive = val === h;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    renderMissionDetail(mission, currentHorizon);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const h = btn.getAttribute("data-horizon");
      if (!h) return;
      update(h);
    });
  });

  update(currentHorizon);
}

async function initMissions() {
  const grid = document.getElementById("mission-grid");
  const detail = document.getElementById("mission-detail");
  if (!grid || !detail) return;

  try {
    const missions = await loadMissions();
    let currentMission = missions[0];

    renderMissionGrid(missions, grid, (mission) => {
      currentMission = mission;
      renderMissionDetail(currentMission, "30");
    });

    renderMissionDetail(currentMission, "30");
    setupHorizonSelector(currentMission);
  } catch (e) {
    console.error(e);
    detail.innerHTML =
      "<p>Une erreur est survenue lors du chargement des missions.</p>";
  }
}

