window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  // Correzione layout per la pagina "Il progetto": i titoli possono andare su piu righe.
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

  // Tema.
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
  // main.js e' il regista del ciclo: lavagna + studenti + timing.
  // progetto.js gestisce esclusivamente i PNG di Morgana e reagisce agli
  // eventi emessi qui. In questo modo una sola timeline governa la scena.
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

  const framesReady = Promise.all(redFrames.concat(bjorneFrames).map(src => new Promise(resolve => {
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

  // Timing condiviso. Ogni passaggio dura 2.35 s; la scritta compare mentre
  // Morgana e' circa a meta della rotazione dei 10 frame.
  const FIRST_STEP_DELAY = 450;
  const WRITE_DELAY = 560;
  const STUDENT_DELAY = 1160;
  const STEP_GAP = 2350;
  const END_PAUSE = 3150;

  let timers = [];
  let isVisible = false;
  let framesAreReady = false;
  let currentStep = -1;

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
    return id;
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

  function emit(name, detail = {}) {
    classroom.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
  }

  function resetScene({ keepTimers = false } = {}) {
    if (!keepTimers) clearTimers();
    currentStep = -1;
    setStudents(0, 0);
    hideWriting();
    emit("rm:classroom-reset");
  }

  function studentStateFor(stepIndex) {
    if (stepIndex === 0) return [1, 1];
    if (stepIndex === 1) return [2, 1];
    return [2, 2];
  }

  function performStep(stepIndex, { scheduleNext = true } = {}) {
    if (!isVisible || reducedMotion) return;

    currentStep = stepIndex;
    const studentState = studentStateFor(stepIndex);

    // Morgana parte esattamente insieme allo stato del loop.
    emit("rm:classroom-step-start", { stepIndex });

    // La scritta entra quando la rotazione di Morgana e' gia ben avviata.
    later(() => writeStep(stepIndex), WRITE_DELAY);
    later(() => setStudents(studentState[0], studentState[1]), STUDENT_DELAY);

    if (!scheduleNext) return;

    if (stepIndex < 2) {
      later(() => performStep(stepIndex + 1), STEP_GAP);
    } else {
      later(() => {
        resetScene();
        later(() => performStep(0), FIRST_STEP_DELAY);
      }, END_PAUSE);
    }
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

    later(() => performStep(0), FIRST_STEP_DELAY);
  }

  // Tocco/click su Morgana: passa subito allo stato successivo del loop.
  // Interrompiamo soltanto i timer futuri della scena e ripartiamo da uno
  // stato definito, evitando sovrapposizioni di animazioni.
  classroom.addEventListener("rm:classroom-advance-request", () => {
    if (!isVisible || reducedMotion) return;
    clearTimers();

    if (currentStep < 2) {
      performStep(currentStep + 1);
    } else {
      resetScene();
      performStep(0);
    }
  });

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
    currentStep = -1;
    setStudents(0, 0);
    chalkSteps.forEach(step => step.classList.add("is-written"));
    emit("rm:classroom-reset");
  }

  framesReady.then(() => {
    framesAreReady = true;
    if (isVisible) runCycle();
  });

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
