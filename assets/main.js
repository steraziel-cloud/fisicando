window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  // Correzione layout per la pagina "Il progetto": i titoli possono andare su piu righe
  // e restano sempre dentro la colonna di testo senza finire dietro la scena illustrata.
  if (document.body.classList.contains("rm-lock")) {
    const projectTitleFix = document.createElement("style");
    projectTitleFix.textContent = `
      .rm-slide-copy h1 {
        white-space: normal !important;
        text-wrap: balance;
        max-width: 100%;
        overflow-wrap: normal;
        font-size: clamp(28px, 3vw, 44px);
      }
    `;
    document.head.appendChild(projectTitleFix);
  }

  // Applica sempre il tema salvato, anche se il bottone non esiste.
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (btn) btn.textContent = "☀️";
  } else {
    document.body.removeAttribute("data-theme");
    if (btn) btn.textContent = "🌙";
  }

  if (btn) {
    btn.addEventListener("click", () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.body.removeAttribute("data-theme");
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
      } else {
        document.body.setAttribute("data-theme", "dark");
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // ------------------------------------------------------------
  // Slide "Come lavoriamo"
  // Questo file gestisce SOLO scritte sulla lavagna + Red/Bjorne.
  // Morgana viene gestita esclusivamente da progetto.js, cosi non ci sono
  // piu due animazioni concorrenti sullo stesso <img>.
  // ------------------------------------------------------------
  const classroom = document.querySelector(".rm-classroom-v2");
  if (!classroom) return;

  const red = classroom.querySelector(".rm-classroom-red");
  const bjorne = classroom.querySelector(".rm-classroom-bjorne");
  const chalkSteps = [...classroom.querySelectorAll(".rm-chalk-step")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const base = "assets/images/morgana-classroom/";
  const redFrames = [
    `${base}red-01.png`,
    `${base}red-02.png`,
    `${base}red-03.png`
  ];
  const bjorneFrames = [
    `${base}bjorne-01.png`,
    `${base}bjorne-02.png`,
    `${base}bjorne-03.png`
  ];

  // Precarico soltanto i frame degli studenti. I frame di Morgana sono
  // precaricati e gestiti da progetto.js.
  const allClassroomFrames = redFrames.concat(bjorneFrames);
  const framesReady = Promise.all(allClassroomFrames.map(src => new Promise(resolve => {
    const preload = new Image();
    preload.onload = () => {
      if (preload.decode) preload.decode().catch(() => {}).finally(resolve);
      else resolve();
    };
    preload.onerror = resolve;
    preload.src = src;
  })));

  const animStyle = document.createElement("style");
  animStyle.textContent = `
    .rm-classroom-v2.rm-classroom-animated .rm-chalk-step {
      opacity: 0;
      clip-path: inset(0 100% 0 0);
      transform: translateX(-5px);
      transition:
        opacity .22s ease,
        clip-path .78s cubic-bezier(.22,.61,.36,1),
        transform .32s ease;
    }
    .rm-classroom-v2.rm-classroom-animated .rm-chalk-step.is-written {
      opacity: 1;
      clip-path: inset(0 0 0 0);
      transform: translateX(0);
    }
    .rm-classroom-v2.rm-classroom-animated .rm-classroom-red,
    .rm-classroom-v2.rm-classroom-animated .rm-classroom-bjorne {
      transition: filter .08s ease;
      will-change: contents;
    }

    @media (prefers-reduced-motion: reduce) {
      .rm-classroom-v2.rm-classroom-animated .rm-chalk-step {
        opacity: 1;
        clip-path: none;
        transform: none;
        transition: none;
      }
    }
  `;
  document.head.appendChild(animStyle);

  let timers = [];
  let isVisible = false;
  let framesAreReady = false;

  framesReady.then(() => {
    framesAreReady = true;
    if (isVisible) runCycle();
  });

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function later(fn, delay) {
    const id = setTimeout(() => {
      if (!isVisible) return;
      fn();
    }, delay);
    timers.push(id);
  }

  function setStudents(redIndex, bjorneIndex) {
    if (red) red.src = redFrames[redIndex];
    if (bjorne) bjorne.src = bjorneFrames[bjorneIndex];
  }

  function hideWriting() {
    chalkSteps.forEach(step => step.classList.remove("is-written"));
  }

  function writeStep(index) {
    chalkSteps[index]?.classList.add("is-written");
  }

  function resetScene() {
    clearTimers();
    setStudents(0, 0);
    hideWriting();
  }

  // Manteniamo il timing approvato delle tre scritte, ma senza piu toccare Morgana.
  function writingPass(stepIndex, startAt, studentState) {
    later(() => writeStep(stepIndex), startAt + 160);
    later(() => setStudents(studentState[0], studentState[1]), startAt + 1160);
  }

  function runCycle() {
    if (!isVisible || !framesAreReady) return;
    resetScene();
    classroom.classList.add("rm-classroom-animated");

    if (reducedMotion) {
      chalkSteps.forEach(step => step.classList.add("is-written"));
      setStudents(2, 2);
      return;
    }

    writingPass(0, 450, [1, 1]);
    writingPass(1, 2800, [2, 1]);
    writingPass(2, 5150, [2, 2]);

    later(() => runCycle(), 8300);
  }

  function startScene() {
    if (isVisible) return;
    isVisible = true;
    if (framesAreReady) runCycle();
  }

  function stopScene() {
    if (!isVisible) return;
    isVisible = false;
    clearTimers();
    classroom.classList.remove("rm-classroom-animated");
    setStudents(0, 0);
    chalkSteps.forEach(step => step.classList.add("is-written"));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target !== classroom) return;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) startScene();
      else stopScene();
    });
  }, { threshold: [0, 0.55, 0.8] });

  observer.observe(classroom);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearTimers();
    } else if (isVisible && framesAreReady) {
      runCycle();
    }
  });
});