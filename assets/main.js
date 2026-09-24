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

  // Applica sempre il tema salvato, anche se il bottone non esiste
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
  // Slide "Come lavoriamo" — animazione a frame della scena aula
  // ------------------------------------------------------------
  const classroom = document.querySelector(".rm-classroom-v2");
  if (!classroom) return;

  const morgana = classroom.querySelector(".rm-classroom-morgana");
  const red = classroom.querySelector(".rm-classroom-red");
  const bjorne = classroom.querySelector(".rm-classroom-bjorne");
  const chalkSteps = [...classroom.querySelectorAll(".rm-chalk-step")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const base = "assets/images/morgana-classroom/";
  const morganaFrames = {
    A: `${base}morgana-a.png`,
    B: `${base}morgana-b.png`,
    C: `${base}morgana-c.png`,
    D: `${base}morgana-d.png`,
    E: `${base}morgana-e.png`,
    F: `${base}morgana-f.png`
  };
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

  // Precarico e decodifico davvero tutti i PNG prima di far partire la scena.
  // Questo evita il lampo nero che può comparire quando un frame viene mostrato
  // prima che il browser abbia terminato la decodifica dell'immagine.
  const allClassroomFrames = Object.values(morganaFrames).concat(redFrames, bjorneFrames);
  const frameCache = new Map();
  const framesReady = Promise.all(allClassroomFrames.map(src => new Promise(resolve => {
    const preload = new Image();
    frameCache.set(src, preload);
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
    .rm-classroom-v2.rm-classroom-animated .rm-classroom-morgana,
    .rm-classroom-v2.rm-classroom-animated .rm-classroom-red,
    .rm-classroom-v2.rm-classroom-animated .rm-classroom-bjorne {
      transition: filter .12s ease;
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
  let cycleNumber = 0;
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

  function setMorgana(frame) {
    if (morgana) morgana.src = morganaFrames[frame];
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
    setMorgana("A");
    setStudents(0, 0);
    hideWriting();
  }

  // Rotazione volutamente rapida: i frame B e C devono essere percepiti
  // come fotogrammi intermedi, non come pose su cui Morgana si ferma.
  function writingPass(stepIndex, startAt, returnFrame, studentState) {
    later(() => setMorgana("B"), startAt);
    later(() => setMorgana("C"), startAt + 125);
    later(() => {
      setMorgana("D");
      writeStep(stepIndex);
    }, startAt + 250);

    // D resta visibile mentre la frase viene "scritta".
    later(() => setMorgana("C"), startAt + 1080);
    later(() => setMorgana("B"), startAt + 1205);
    later(() => setMorgana(returnFrame), startAt + 1330);
    later(() => {
      setMorgana("A");
      setStudents(studentState[0], studentState[1]);
    }, startAt + 1510);
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

    // Le tre scritte si accumulano; E/F alternano il rientro di Morgana.
    writingPass(0, 500, cycleNumber % 2 === 0 ? "E" : "F", [1, 1]);
    writingPass(1, 3050, cycleNumber % 2 === 0 ? "F" : "E", [2, 1]);
    writingPass(2, 5600, cycleNumber % 2 === 0 ? "E" : "F", [2, 2]);

    later(() => {
      cycleNumber += 1;
      runCycle();
    }, 9000);
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
    setMorgana("A");
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