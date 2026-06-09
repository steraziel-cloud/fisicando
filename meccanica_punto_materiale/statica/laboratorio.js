
// ----------------------------
// Stato e variabili globali
// ----------------------------
const vectors = [];

let selectedVector = null;

let pointMaterial = null;
let gravity = 9.81;
let axesConfig = {
    showX: false,
    showY: false,
    angleXDeg: 0,
    angleYDeg: 90,
    preview: false,
    confirmed: false
};
let constraintConfig = null;
let analyzedVector = null;
let springs = [];
let springDraft = null;
let frictionModel = null;

const LAB = {
    canvas: null,
    ctx: null,
    pan: {
        x: 0,
        y: 0
    },
    zoom: 1,
    pixelsPerUnit: 1,
    dragging: false,
    dragMode: null,

    last: {
        x: 0,
        y: 0
    }
};

// ----------------------------
// Stato didattico
// ----------------------------
const DIDACTIC = {
    step: "point", // "point" | "constraint" | "axes" | "forces" | "projections" | "equations"
    showNormalForce: false,
    forcesConfirmed: false
};

function getDidacticStepText(step) {
    switch (step) {
    case "point":
        return {
            label: "Punto materiale",
            help: "Inserisci il punto materiale nel canvas e definisci massa e accelerazione di gravità."
        };
    case "constraint":
        return {
            label: "Vincolo fisico",
            help: "Indica se il punto materiale è a contatto con un piano o con un altro vincolo."
        };
    case "axes":
        return {
            label: "Sistema di riferimento",
            help: "Scegli il sistema di riferimento più comodo per risolvere il problema."
        };
    case "forces":
        return {
            label: "Forze attive",
            help: "Aggiungi le forze attive presenti nel problema."
        };
    case "projections":
        return {
            label: "Proiezione dei vettori",
            help: "Ora puoi analizzare e proiettare i vettori sugli assi scelti."
        };
    case "equations":
        return {
            label: "Equazioni di equilibrio",
            help: "Scrivi le equazioni scalari di equilibrio lungo gli assi."
        };
    default:
        return {
            label: "Punto materiale",
            help: "Inserisci il punto materiale nel canvas e definisci massa e accelerazione di gravità."
        };
    }
}

function updateDidacticPanel() {
    const labelEl = document.getElementById("didactic-step-label");
    const helpEl = document.getElementById("didactic-step-help");
    if (!labelEl || !helpEl)
        return;

    const info = getDidacticStepText(DIDACTIC.step);
    labelEl.innerHTML = `<strong>Step attuale:</strong> ${info.label}`;
    helpEl.textContent = info.help;
}

function isPointStepComplete() {
    return !!pointMaterial && pointMaterial.mass !== null && !isNaN(pointMaterial.mass) && pointMaterial.mass > 0;
}

function isConstraintStepComplete() {
    return !!constraintConfig;
}

function isAxesStepComplete() {
    return axesConfig.confirmed;
}

function isForcesStepComplete() {
    return DIDACTIC.forcesConfirmed === true;
}

function canAccessStep(step) {
    switch (step) {
    case "point":
        return true;
    case "constraint":
        return isPointStepComplete();
    case "axes":
        return isPointStepComplete() && isConstraintStepComplete();
    case "forces":
        return isPointStepComplete() && isConstraintStepComplete() && isAxesStepComplete();
    case "projections":
        return isPointStepComplete() && isConstraintStepComplete() && isAxesStepComplete() && isForcesStepComplete();
    case "equations":
        return isPointStepComplete() && isConstraintStepComplete() && isAxesStepComplete() && isForcesStepComplete();
    default:
        return false;
    }
}

function getBlockedStepMessage(step) {
    switch (step) {
    case "constraint":
        return "Prima devi completare il punto materiale.";
    case "axes":
        return "Prima devi inserire il vincolo.";
    case "forces":
        return "Prima devi scegliere il sistema di riferimento.";
    case "projections":
        return "Prima devi completare le forze del problema.";
    case "equations":
        return "Prima devi arrivare allo step delle proiezioni.";
    default:
        return "Questo step non è ancora disponibile.";
    }
}

function goToStep(step) {
    if (!canAccessStep(step)) {
        alert(getBlockedStepMessage(step));
        return;
    }

    setDidacticStep(step);
}

function updateDidacticButtons() {
    const stepButtons = [{
            id: "step-point",
            step: "point"
        }, {
            id: "step-constraint",
            step: "constraint"
        }, {
            id: "step-axes",
            step: "axes"
        }, {
            id: "step-forces",
            step: "forces"
        }, {
            id: "step-projections",
            step: "projections"
        }, {
            id: "step-equations",
            step: "equations"
        }
    ];

    stepButtons.forEach(({
            id,
            step
        }) => {
        const btn = document.getElementById(id);
        if (!btn)
            return;

        const enabled = canAccessStep(step);
        btn.disabled = !enabled;

        btn.style.opacity = enabled ? "1" : "0.45";
        btn.style.cursor = enabled ? "pointer" : "not-allowed";
        btn.style.outline = DIDACTIC.step === step ? "2px solid rgba(255,255,255,0.7)" : "none";
    });
}

function updateStepVisibility() {
    const pointBox = document.getElementById("point-box");
    const constraintBox = document.getElementById("constraint-box");
    const axesBox = document.getElementById("axes-box");
    const forceBox = document.getElementById("force-box");
    const analysisBox = document.getElementById("analysis-box");

    if (!pointBox || !constraintBox || !axesBox || !forceBox || !analysisBox)
        return;

    // Nasconde tutto
    pointBox.style.display = "none";
    constraintBox.style.display = "none";
    axesBox.style.display = "none";
    forceBox.style.display = "none";
    analysisBox.style.display = "none";

    // Mostra solo il box dello step corrente
    switch (DIDACTIC.step) {
    case "point":
        pointBox.style.display = "block";
        break;

    case "constraint":
        constraintBox.style.display = "block";
        break;

    case "axes":
        axesBox.style.display = "block";
        break;

    case "forces":
        forceBox.style.display = "block";
        break;

    case "projections":
        analysisBox.style.display = "block";
        break;

    case "equations":
        analysisBox.style.display = "block";
        break;
    }
}

function updateForceButtonsVisibility() {
    const frictionBtn = document.getElementById("openFrictionModalBtn");
    if (!frictionBtn)
        return;

    const shouldShow = !!constraintConfig &&
        constraintConfig.type === "plane" &&
        constraintConfig.hasFriction === true;

    frictionBtn.style.display = shouldShow ? "block" : "none";
}

function setDidacticStep(step) {
    DIDACTIC.step = step;

    if (step !== "forces") {
        DIDACTIC.showNormalForce = false;
    }

    if (step !== "projections" && step !== "equations") {
        DIDACTIC.forcesConfirmed = false;
    }

    updateDidacticPanel();
    updateStepVisibility();
    updateDidacticButtons();
    updateForceButtonsVisibility();
    redraw();
}

// ----------------------------
// Utility matematiche
// ----------------------------
function evalExpr(expr) {
    try {
        return math.evaluate(expr);
    } catch {
        return NaN;
    }
}

function normalizeAngleDeg(angle) {
    let a = angle % 360;
    if (a <= -180)
        a += 360;
    if (a > 180)
        a -= 360;
    return a;
}

function getVectorModuleAndAngle(v) {
    const module = Math.hypot(v.x, v.y);

    const vectorAngleDeg = Math.atan2(v.y, v.x) * 180 / Math.PI;
    const axisXAngleDeg = axesConfig.angleXDeg || 0;

    let relativeAngleDeg = vectorAngleDeg - axisXAngleDeg;
    relativeAngleDeg = normalizeAngleDeg(relativeAngleDeg);

    const relativeAngleRad = relativeAngleDeg * Math.PI / 180;

    return {
        module,
        angleRad: relativeAngleRad,
        angleDeg: relativeAngleDeg,
        absoluteAngleDeg: vectorAngleDeg
    };
}

function projectVectorOnCurrentAxes(v) {
    const angleXRad = (axesConfig.angleXDeg || 0) * Math.PI / 180;
    const angleYRad = axesConfig.showY
         ? (axesConfig.angleYDeg || 90) * Math.PI / 180
         : angleXRad + Math.PI / 2;

    // versore asse x scelto
    const exx = Math.cos(angleXRad);
    const exy = Math.sin(angleXRad);

    // versore asse y realmente mostrato
    const eyx = Math.cos(angleYRad);
    const eyy = Math.sin(angleYRad);

    const Fx = v.x * exx + v.y * exy;
    const Fy = v.x * eyx + v.y * eyy;

    return {
        Fx,
        Fy
    };
}

function showSelectedVectorInfo(v) {
    const box = document.getElementById("vectorInfo");
    if (!box)
        return;

    if (!v) {
        box.innerHTML = "Nessun vettore selezionato.";
        return;
    }

    const info = getVectorModuleAndAngle(v);
    const comp = projectVectorOnCurrentAxes(v);

    const module = info.module;
    const theta = info.angleDeg;
    const Fx = comp.Fx;
    const Fy = comp.Fy;

    box.innerHTML = `
        <strong>${v.name}</strong><br>
        |F| = ${module.toFixed(2)}<br>
        θ rispetto a x = ${theta.toFixed(1)}°<br>
        F<sub>x</sub> = ${Fx.toFixed(2)}<br>
        F<sub>y</sub> = ${Fy.toFixed(2)}<br><br>

        cosθ = F<sub>x</sub> / |F|<br>
        cosθ = ${Fx.toFixed(2)} / ${module.toFixed(2)}<br>
        F<sub>x</sub> = |F| cosθ<br>
        F<sub>x</sub> = ${module.toFixed(2)} · cos(${theta.toFixed(1)}°)<br><br>

        sinθ = F<sub>y</sub> / |F|<br>
        sinθ = ${Fy.toFixed(2)} / ${module.toFixed(2)}<br>
        F<sub>y</sub> = |F| sinθ<br>
        F<sub>y</sub> = ${module.toFixed(2)} · sin(${theta.toFixed(1)}°)
    `;
}

// ---------------------------------
// Forza peso
// ---------------------------------

function updateWeightVector() {
    if (!pointMaterial || !pointMaterial.mass)
        return;

    const existing = vectors.find(v => v.name === "Fp");

    const Fy = -pointMaterial.mass * gravity;

    if (existing) {
        existing.x = 0;
        existing.y = Fy;
    } else {
        addVector(0, Fy, "Fp");
    }
}

// ----------------------------
// Coordinate schermo/mondo
// ----------------------------
function worldToScreen(x, y) {
    return {
        x: LAB.canvas.width / 2 + LAB.pan.x + x * LAB.zoom * LAB.pixelsPerUnit,
        y: LAB.canvas.height / 2 + LAB.pan.y - y * LAB.zoom * LAB.pixelsPerUnit
    };
}

function screenToWorld(x, y) {
    return {
        x: (x - LAB.canvas.width / 2 - LAB.pan.x) / (LAB.zoom * LAB.pixelsPerUnit),
        y:  - (y - LAB.canvas.height / 2 - LAB.pan.y) / (LAB.zoom * LAB.pixelsPerUnit)
    };
}

// ----------------------------
// Inizializzazione
// ----------------------------
function initCanvas() {
    LAB.canvas = document.getElementById("lab-canvas");
    LAB.ctx = LAB.canvas.getContext("2d");
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    LAB.canvas.addEventListener("wheel", onWheel);
    LAB.canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    redraw();
}

function resizeCanvas() {
    LAB.canvas.width = LAB.canvas.clientWidth;
    LAB.canvas.height = LAB.canvas.clientHeight;
    redraw();
}

function onWheel(e) {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    LAB.zoom *= zoomFactor;

    redraw();
}

// ----------------------------
// Disegno
// ----------------------------
function getNiceStep(rawStep) {
    const exp = Math.floor(Math.log10(rawStep));
    const base = rawStep / Math.pow(10, exp);

    let niceBase;
    if (base < 1.5)
        niceBase = 1;
    else if (base < 3)
        niceBase = 2;
    else if (base < 7)
        niceBase = 5;
    else
        niceBase = 10;

    return niceBase * Math.pow(10, exp);
}

function drawGridLines(ctx, step, width, height) {
    const stepPx = step * LAB.zoom * LAB.pixelsPerUnit;
    if (stepPx <= 0)
        return;

    const origin = worldToScreen(0, 0);

    const firstX = origin.x % stepPx;
    const firstY = origin.y % stepPx;

    ctx.beginPath();

    for (let x = firstX; x <= width; x += stepPx) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    for (let y = firstY; y <= height; y += stepPx) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    }

    ctx.stroke();
}

function drawAxes() {
    if (!pointMaterial)
        return;

    const ctx = LAB.ctx;
    const width = LAB.canvas.width;
    const height = LAB.canvas.height;

    const pxPerUnit = LAB.zoom * LAB.pixelsPerUnit;
    const targetPx = 80;
    const rawStep = targetPx / pxPerUnit;
    const majorStep = getNiceStep(rawStep);
    const minorStep = majorStep / 5;

    ctx.save();

    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    drawGridLines(ctx, minorStep, width, height);

    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 1.2;
    drawGridLines(ctx, majorStep, width, height);

    ctx.restore();
}

function drawPointMaterial() {
    if (!pointMaterial)
        return;

    const ctx = LAB.ctx;
    const p = worldToScreen(pointMaterial.x, pointMaterial.y);

    ctx.save();

    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.arc(p.x, p.y, pointMaterial.radius, 0, Math.PI * 2);
    ctx.fill();

    if (pointMaterial.name) {
        ctx.fillStyle = "#111";
        ctx.font = "12px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.fillText(pointMaterial.name, p.x + 8, p.y - 8);
    }

    ctx.restore();
}

function drawConstraintPlane() {
    if (!pointMaterial || !constraintConfig || constraintConfig.type !== "plane")
        return;

    const ctx = LAB.ctx;
    const width = LAB.canvas.width;
    const height = LAB.canvas.height;

    const origin = worldToScreen(pointMaterial.x, pointMaterial.y);

    let planeAngleDeg = constraintConfig.angleDeg || 0;
    // il piano fisico non cambia se aggiungo/sottraggo 180°
    planeAngleDeg = ((planeAngleDeg % 180) + 180) % 180;

    const angle = planeAngleDeg * Math.PI / 180;

    const dx = Math.cos(angle);
    const dy = -Math.sin(angle); // verso asse della retta nel canvas

    const points = [];

    // Intersezioni della retta principale con i bordi del canvas
    if (Math.abs(dx) > 1e-10) {
        let t = (0 - origin.x) / dx;
        let y = origin.y + t * dy;
        if (y >= 0 && y <= height)
            points.push({
                x: 0,
                y,
                t
            });

        t = (width - origin.x) / dx;
        y = origin.y + t * dy;
        if (y >= 0 && y <= height)
            points.push({
                x: width,
                y,
                t
            });
    }

    if (Math.abs(dy) > 1e-10) {
        let t = (0 - origin.y) / dy;
        let x = origin.x + t * dx;
        if (x >= 0 && x <= width)
            points.push({
                x,
                y: 0,
                t
            });

        t = (height - origin.y) / dy;
        x = origin.x + t * dx;
        if (x >= 0 && x <= width)
            points.push({
                x,
                y: height,
                t
            });
    }

    if (points.length < 2)
        return;

    points.sort((a, b) => a.t - b.t);
    const p1 = points[0];
    const p2 = points[points.length - 1];

    // Normale nel canvas
    const nx = -dy;
    const ny = dx;

    // Distanza tra le due rette parallele
    const gap = 10;

    const q1 = {
        x: p1.x + gap * nx,
        y: p1.y + gap * ny
    };
    const q2 = {
        x: p2.x + gap * nx,
        y: p2.y + gap * ny
    };

    ctx.save();

    // Retta principale
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Seconda retta parallela
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(q1.x, q1.y);
    ctx.lineTo(q2.x, q2.y);
    ctx.stroke();

    // Tratteggio tecnico tra le due rette
    const planeLength = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const spacing = 18;
    const hatchLen = gap;

    const count = Math.floor(planeLength / spacing);

    ctx.strokeStyle = "#555";
    ctx.lineWidth = 1;

    for (let i = 0; i <= count; i++) {
        const s = i / Math.max(count, 1);

        const ax = p1.x + (p2.x - p1.x) * s;
        const ay = p1.y + (p2.y - p1.y) * s;

        const bx = ax + hatchLen * nx;
        const by = ay + hatchLen * ny;

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
    }

    ctx.restore();
}

function drawReferenceAxes() {
    if (!pointMaterial)
        return;
    if (!axesConfig.showX && !axesConfig.showY)
        return;

    const ctx = LAB.ctx;
    const width = LAB.canvas.width;
    const height = LAB.canvas.height;

    const origin = worldToScreen(pointMaterial.x, pointMaterial.y);
    const angleX = axesConfig.angleXDeg * Math.PI / 180;
    const angleY = axesConfig.angleYDeg * Math.PI / 180;

    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#000";
    ctx.lineWidth = 2;
    ctx.font = "14px Arial";

    if (axesConfig.showX) {
        drawFullAxisThroughPoint(ctx, origin, angleX, width, height, "x");
    }

    if (axesConfig.showY) {
        drawFullAxisThroughPoint(ctx, origin, angleY, width, height, "y");
    }

    ctx.restore();
}

function drawFullAxisThroughPoint(ctx, origin, angle, width, height, label) {
    const dx = Math.cos(angle);
    const dy = -Math.sin(angle); // segno corretto per il canvas

    const points = [];

    // Intersezioni con x = 0 e x = width
    if (Math.abs(dx) > 1e-10) {
        let t = (0 - origin.x) / dx;
        let y = origin.y + t * dy;
        if (y >= 0 && y <= height)
            points.push({
                x: 0,
                y,
                t
            });

        t = (width - origin.x) / dx;
        y = origin.y + t * dy;
        if (y >= 0 && y <= height)
            points.push({
                x: width,
                y,
                t
            });
    }

    // Intersezioni con y = 0 e y = height
    if (Math.abs(dy) > 1e-10) {
        let t = (0 - origin.y) / dy;
        let x = origin.x + t * dx;
        if (x >= 0 && x <= width)
            points.push({
                x,
                y: 0,
                t
            });

        t = (height - origin.y) / dy;
        x = origin.x + t * dx;
        if (x >= 0 && x <= width)
            points.push({
                x,
                y: height,
                t
            });
    }

    if (points.length < 2)
        return;

    points.sort((a, b) => a.t - b.t);
    const p1 = points[0];
    const p2 = points[points.length - 1];

    // Disegno asse completo visibile
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Freccia sul lato positivo
    drawAxisArrow(ctx, p2.x, p2.y, angle);

    // --- Etichetta spostata lateralmente rispetto all'asse ---
    const backOffset = 18; // un po' indietro dalla punta
    const sideOffset = 14; // un po' di lato rispetto all'asse

    // Versore normale "a sinistra" dell'asse nel canvas
    const nx = -dy;
    const ny = dx;

    const labelX = p2.x - backOffset * dx + sideOffset * nx;
    const labelY = p2.y - backOffset * dy + sideOffset * ny;

    ctx.fillText(label, labelX, labelY);
}

function drawAxisArrow(ctx, x, y, angle) {
    const headlen = 10;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(
        x - headlen * Math.cos(angle - Math.PI / 6),
        y + headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(
        x - headlen * Math.cos(angle + Math.PI / 6),
        y + headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
}

function drawSpring(spring, isDraft = false) {
    if (!pointMaterial || !spring)
        return;

    const ctx = LAB.ctx;

    const angleDeg = spring.inverted ? spring.angleDeg + 180 : spring.angleDeg;
    const angleRad = angleDeg * Math.PI / 180;

    // Versore dalla particella verso l'ancoraggio della molla
    const ux = Math.cos(angleRad);
    const uy = Math.sin(angleRad);

    const totalLength = 120; // lunghezza molla in unità mondo

    // punto materiale e punto finale in coordinate schermo
    const center = worldToScreen(pointMaterial.x, pointMaterial.y);
    const endWorldX = pointMaterial.x + totalLength * ux;
    const endWorldY = pointMaterial.y + totalLength * uy;
    const end = worldToScreen(endWorldX, endWorldY);

    // distanza iniziale VISIVA dal punto materiale, in pixel
    const startOffsetPx = pointMaterial.radius + 14;

    // inizio molla spostato fuori dal punto
    const start = {
        x: center.x + startOffsetPx * ux,
        y: center.y - startOffsetPx * uy
    };

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const len = Math.hypot(dx, dy);
    if (len < 1)
        return;

    const tx = dx / len;
    const ty = dy / len;

    // Normale sul canvas
    const nx = -ty;
    const ny = tx;

    // Parametri grafici
    const headLen = 30;
    const tailLen = 30;
    const coils = 20;
    const amp = 35;

    const innerStartX = start.x + headLen * tx;
    const innerStartY = start.y + headLen * ty;

    const innerEndX = end.x - tailLen * tx;
    const innerEndY = end.y - tailLen * ty;

    ctx.save();
    ctx.strokeStyle = isDraft ? "#0ea5e9" : "#2a9d8f";
    ctx.lineWidth = 2;

    // segmento vicino al punto materiale
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(innerStartX, innerStartY);
    ctx.stroke();

    // zig-zag
    ctx.beginPath();
    ctx.moveTo(innerStartX, innerStartY);

    for (let i = 1; i <= coils; i++) {
        const s = i / coils;
        const bx = innerStartX + (innerEndX - innerStartX) * s;
        const by = innerStartY + (innerEndY - innerStartY) * s;

        const side = i % 2 === 0 ? -1 : 1;
        ctx.lineTo(bx + amp * nx * side, by + amp * ny * side);
    }

    ctx.lineTo(innerEndX, innerEndY);
    ctx.stroke();

    // segmento finale + ancoraggio
    ctx.beginPath();
    ctx.moveTo(innerEndX, innerEndY);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    // piccolo ancoraggio
    const anchorSize = 50;
    ctx.beginPath();
    ctx.moveTo(end.x - anchorSize * nx, end.y - anchorSize * ny);
    ctx.lineTo(end.x + anchorSize * nx, end.y + anchorSize * ny);
    ctx.stroke();

    // nome
    if (spring.name) {
        ctx.fillStyle = isDraft ? "#0ea5e9" : "#2a9d8f";
        ctx.font = "12px Arial";
        ctx.fillText(spring.name, end.x + 12, end.y - 12);
    }

    ctx.restore();
}

function drawSprings() {
    springs.forEach(s => drawSpring(s, false));

    if (springDraft) {
        drawSpring(springDraft, true);
    }
}

function drawVector(v) {
    const from = worldToScreen(pointMaterial.x, pointMaterial.y);
    const to = worldToScreen(pointMaterial.x + v.x, pointMaterial.y + v.y);
    const ctx = LAB.ctx;

    ctx.save();

    ctx.strokeStyle = v.color || "black";
    ctx.fillStyle = v.color || "black";
    ctx.lineWidth = 2;

    // Glow se selezionato
    if (selectedVector === v) {
        ctx.shadowColor = v.color || "cyan";
        ctx.shadowBlur = 10;
    }

    // Linea vettore
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    // Freccia
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const headlen = 10;
    ctx.beginPath();
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - headlen * Math.cos(angle - Math.PI / 6), to.y - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(to.x - headlen * Math.cos(angle + Math.PI / 6), to.y - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    // Nome
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    ctx.fillText(v.name, to.x + 5, to.y - 5);

    ctx.restore();
}

function drawSelectedVectorProjections(v) {
    if (DIDACTIC.step !== "projections")
        return;
    if (!pointMaterial || !v || !axesConfig.showX)
        return;

    const ctx = LAB.ctx;
    const origin = worldToScreen(pointMaterial.x, pointMaterial.y);

    const angleXRad = (axesConfig.angleXDeg || 0) * Math.PI / 180;
    const angleYRad = axesConfig.showY
         ? (axesConfig.angleYDeg || 90) * Math.PI / 180
         : angleXRad + Math.PI / 2;

    const vectorAngleRad = Math.atan2(v.y, v.x);

    // versori degli assi realmente mostrati
    const exx = Math.cos(angleXRad);
    const exy = Math.sin(angleXRad);

    const eyx = Math.cos(angleYRad);
    const eyy = Math.sin(angleYRad);

    // componenti scalari
    const Fx = v.x * exx + v.y * exy;
    const Fy = v.x * eyx + v.y * eyy;

    // punti nel mondo
    const projXWorld = {
        x: pointMaterial.x + Fx * exx,
        y: pointMaterial.y + Fx * exy
    };

    const tipWorld = {
        x: pointMaterial.x + v.x,
        y: pointMaterial.y + v.y
    };

    const cornerWorld = {
        x: projXWorld.x + Fy * eyx,
        y: projXWorld.y + Fy * eyy
    };

    // conversione in schermo
    const projX = worldToScreen(projXWorld.x, projXWorld.y);
    const tip = worldToScreen(tipWorld.x, tipWorld.y);
    const corner = worldToScreen(cornerWorld.x, cornerWorld.y);

    ctx.save();

    // componente x
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1d4ed8";
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(projX.x, projX.y);
    ctx.stroke();

    // componente y
    ctx.strokeStyle = "#15803d";
    ctx.beginPath();
    ctx.moveTo(projX.x, projX.y);
    ctx.lineTo(corner.x, corner.y);
    ctx.stroke();

    // linee tratteggiate del triangolo
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1.2;

    ctx.beginPath();
    ctx.moveTo(projX.x, projX.y);
    ctx.lineTo(tip.x, tip.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(corner.x, corner.y);
    ctx.lineTo(tip.x, tip.y);
    ctx.stroke();

    // etichette componenti
    ctx.setLineDash([]);
    ctx.font = "12px Arial";

    const midX = {
        x: (origin.x + projX.x) / 2,
        y: (origin.y + projX.y) / 2
    };

    const midY = {
        x: (projX.x + corner.x) / 2,
        y: (projX.y + corner.y) / 2
    };

    ctx.fillStyle = "#1d4ed8";
    ctx.fillText(`${v.name}_x`, midX.x + 6, midX.y - 6);

    ctx.fillStyle = "#15803d";
    ctx.fillText(`${v.name}_y`, midY.x + 6, midY.y - 6);

    // ----------------------------
    // archetto dell'angolo theta
    // ----------------------------
    let delta = vectorAngleRad - angleXRad;

    while (delta <= -Math.PI)
        delta += 2 * Math.PI;
    while (delta > Math.PI)
        delta -= 2 * Math.PI;

    const arcRadius = 28;

    ctx.strokeStyle = "#c2410c";
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    if (delta >= 0) {
        ctx.arc(origin.x, origin.y, arcRadius, -angleXRad, -vectorAngleRad, true);
    } else {
        ctx.arc(origin.x, origin.y, arcRadius, -angleXRad, -vectorAngleRad, false);
    }

    ctx.stroke();

    const midAngle = angleXRad + delta / 2;
    const labelRadius = arcRadius + 12;
    const thetaX = origin.x + labelRadius * Math.cos(midAngle);
    const thetaY = origin.y - labelRadius * Math.sin(midAngle);

    ctx.fillStyle = "#c2410c";
    ctx.fillText("θ", thetaX, thetaY);

    ctx.restore();
}

function redraw() {
    LAB.ctx.clearRect(0, 0, LAB.canvas.width, LAB.canvas.height);
    drawAxes();
    drawConstraintPlane();
    drawReferenceAxes();
    drawPointMaterial();
    drawSprings();
    vectors.forEach(drawVector);

    if (analyzedVector) {
        drawSelectedVectorProjections(analyzedVector);
    }

    updateVectorList();
}

function toggleVectorAnalysis(index) {
    if (DIDACTIC.step !== "projections") {
        alert("Prima devi arrivare allo step delle proiezioni.");
        return;
    }

    const v = vectors[index];
    if (!v)
        return;

    if (analyzedVector === v) {
        analyzedVector = null;
        showSelectedVectorInfo(null);
    } else {
        analyzedVector = v;
        showSelectedVectorInfo(v);
    }

    redraw();
}
// ----------------------------
// Eventi mouse
// ----------------------------
function onMouseDown(e) {
    const rect = LAB.canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    // Se il punto non esiste → lo creo
    if (!pointMaterial) {
        LAB.pan.x = canvasX - LAB.canvas.width / 2;
        LAB.pan.y = canvasY - LAB.canvas.height / 2;

        pointMaterial = {
            x: 0,
            y: 0,
            radius: 6,
            name: "",
            mass: null
        };

        redraw();
        return;
    }

    const pointScreen = worldToScreen(pointMaterial.x, pointMaterial.y);
    const distFromPoint = Math.hypot(canvasX - pointScreen.x, canvasY - pointScreen.y);

    if (distFromPoint <= pointMaterial.radius + 6) {

        document.getElementById("pm-mass").value = pointMaterial.mass ?? "";
        document.getElementById("pm-g").value = gravity;

        LAB.dragging = false;
        LAB.dragMode = null;
        return;
    }

    selectedVector = null;
    showSelectedVectorInfo(null);

    const tolerancePx = 10;

    for (let v of vectors) {
        const tipScreen = worldToScreen(pointMaterial.x + v.x, pointMaterial.y + v.y);
        const distPx = Math.hypot(canvasX - tipScreen.x, canvasY - tipScreen.y);

        if (distPx < tolerancePx) {
            selectedVector = v;
            showSelectedVectorInfo(v);
            redraw();
            return;
        }
    }
    // Se non clicco un vettore → pan
    LAB.dragMode = "pan";
    LAB.dragging = true;
    LAB.last = {
        x: e.clientX,
        y: e.clientY
    };
    redraw();
}

function onMouseMove(e) {
    if (!LAB.dragging)
        return;

    if (LAB.dragMode === "pan") {
        const dx = e.clientX - LAB.last.x;
        const dy = e.clientY - LAB.last.y;
        LAB.pan.x += dx;
        LAB.pan.y += dy;
        LAB.last = {
            x: e.clientX,
            y: e.clientY
        };
        redraw();
    }
}

function onMouseUp() {
    LAB.dragging = false;
    LAB.dragMode = null;
}

function confirmAxes() {

    if (!axesConfig.preview) {
        alert("Prima devi disegnare gli assi.");
        return;
    }

    axesConfig.confirmed = true;

    // passa allo step successivo
    if (DIDACTIC.step === "axes") {
        setDidacticStep("forces");
    }
}

function confirmForces() {
    DIDACTIC.forcesConfirmed = true;

    if (DIDACTIC.step === "forces") {
        setDidacticStep("projections");
    }
}

// ----------------------------
// Gestione vettori
// ----------------------------
function getRandomColor() {
    const colors = ["#d90429", "#3a86ff", "#06d6a0", "#f9c74f", "#ff006e"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function addVector(x, y, name = null) {
    const id = name || "v";
    const color = getRandomColor();
    const vector = {
        name: id,
        x,
        y,
        color
    };
    vectors.push(vector);
    updateVectorList();
    selectedVector = vector;
    redraw();
}

function addMotorForce(module, angleDeg) {
    const angleRad = angleDeg * Math.PI / 180;
    const x = module * Math.cos(angleRad);
    const y = module * Math.sin(angleRad);

    const existingMotorForces = vectors.filter(v => v.subtype === "motor");
    const nextIndex = existingMotorForces.length + 1;

    const vector = {
        name: "Fm" + nextIndex,
        x,
        y,
        color: "#ff7b00",
        kind: "force",
        subtype: "motor"
    };

    vectors.push(vector);
    selectedVector = vector;
    updateConstraintForces();
}

function addElasticForce(k, deformation, angleDeg) {
    const module = k * deformation;

    const angleRad = angleDeg * Math.PI / 180;
    const x = module * Math.cos(angleRad);
    const y = module * Math.sin(angleRad);

    const existingElasticForces = vectors.filter(v => v.subtype === "elastic");
    const nextIndex = existingElasticForces.length + 1;

    const vector = {
        name: "Fel" + nextIndex,
        x,
        y,
        color: "#2a9d8f",
        kind: "force",
        subtype: "elastic"
    };

    vectors.push(vector);
    selectedVector = vector;
    updateConstraintForces();
}

function createSpringDraft(angleDeg, inverted) {
    const nextIndex = springs.length + 1;

    springDraft = {
        name: "M" + nextIndex,
        angleDeg,
        inverted
    };

    redraw();
}

function updateConstraintForces() {
    const existingNormal = vectors.find(v => v.subtype === "normal");
    const existingFriction = vectors.find(v => v.subtype === "friction");

    if (!constraintConfig || constraintConfig.type !== "plane" || !axesConfig.showX) {
        if (existingNormal) {
            const index = vectors.indexOf(existingNormal);
            if (index !== -1)
                vectors.splice(index, 1);
        }

        if (existingFriction) {
            const index = vectors.indexOf(existingFriction);
            if (index !== -1)
                vectors.splice(index, 1);
        }

        updateVectorList();

        redraw();
        return;
    }

    const angleXRad = axesConfig.angleXDeg * Math.PI / 180;
    const angleYRad = axesConfig.showY
         ? axesConfig.angleYDeg * Math.PI / 180
         : angleXRad + Math.PI / 2;

    // versore asse x
    const tx = Math.cos(angleXRad);
    const ty = Math.sin(angleXRad);

    // versore normale positivo: uso l'asse y mostrato, se definito
    const nx = Math.cos(angleYRad);
    const ny = Math.sin(angleYRad);

    let tangentialSum = 0;
    let normalSum = 0;

    vectors.forEach(v => {
        if (v.subtype === "normal" || v.subtype === "friction")
            return;

        tangentialSum += v.x * tx + v.y * ty;
        normalSum += v.x * nx + v.y * ny;
    });

    // ----------------------------
    // Reazione normale
    // ----------------------------
    const normalModule = -normalSum;
    let effectiveNormalModule = Math.max(0, normalModule);

    if (!DIDACTIC.showNormalForce) {
        if (existingNormal) {
            const index = vectors.indexOf(existingNormal);
            if (index !== -1) {
                vectors.splice(index, 1);
            }
        }
    } else {
        const normalX = effectiveNormalModule * nx;
        const normalY = effectiveNormalModule * ny;

        if (existingNormal) {
            existingNormal.x = normalX;
            existingNormal.y = normalY;
            existingNormal.color = "#6c5ce7";
            existingNormal.kind = "constraint";
            existingNormal.subtype = "normal";
            existingNormal.name = "Fn";
        } else {
            vectors.push({
                name: "Fn",
                x: normalX,
                y: normalY,
                color: "#6c5ce7",
                kind: "constraint",
                subtype: "normal"
            });
        }
    }

// ----------------------------
// Forza di attrito
// ----------------------------
if (constraintConfig.hasFriction && frictionModel && effectiveNormalModule > 0) {
    const maxFriction = frictionModel.mu * effectiveNormalModule;

    let frictionModule = 0;

    if (frictionModel.type === "static" && frictionModel.mode === "generic") {
        const requiredFriction = -tangentialSum;

        if (Math.abs(requiredFriction) <= maxFriction) {
            frictionModule = requiredFriction;
        } else {
            frictionModule = -frictionModel.direction * maxFriction;
            alert("L'attrito statico massimo non è sufficiente a mantenere l'equilibrio lungo l'asse x.");
        }
    } else {
        // statico al limite oppure dinamico
        frictionModule = -frictionModel.direction * maxFriction;
    }

    const frictionX = frictionModule * tx;
    const frictionY = frictionModule * ty;

    if (existingFriction) {
        existingFriction.x = frictionX;
        existingFriction.y = frictionY;
        existingFriction.color = "#e76f51";
        existingFriction.kind = "constraint";
        existingFriction.subtype = "friction";
        existingFriction.name = "Fa";
    } else {
        vectors.push({
            name: "Fa",
            x: frictionX,
            y: frictionY,
            color: "#e76f51",
            kind: "constraint",
            subtype: "friction"
        });
    }
} else {
    if (existingFriction) {
        const index = vectors.indexOf(existingFriction);
        if (index !== -1)
            vectors.splice(index, 1);
    }
}

    updateVectorList();

    redraw();
}

function updateVectorList() {
    const list = document.getElementById("vector-list");
    if (!list)
        return;

    list.innerHTML = "";

    vectors.forEach((v, i) => {
        const div = document.createElement("div");
        div.className = "vector-item";

        // 👉 modulo e angolo rispetto agli assi scelti
        const info = getVectorModuleAndAngle(v);

        // 👉 componenti rispetto agli assi scelti
        const comp = projectVectorOnCurrentAxes(v);

        // pulizia numerica (evita -0.00)
        const Fx = Math.abs(comp.Fx) < 1e-10 ? 0 : comp.Fx;
        const Fy = Math.abs(comp.Fy) < 1e-10 ? 0 : comp.Fy;
        const r = Math.abs(info.module) < 1e-10 ? 0 : info.module;
        const theta = Math.abs(info.angleDeg) < 1e-10 ? 0 : info.angleDeg;

        div.innerHTML = `
            <strong>${v.name}</strong> =
            (${Fx.toFixed(2)} ; ${Fy.toFixed(2)}) → [${r.toFixed(2)} ; ${theta.toFixed(1)}°]
            <button class="btn small" onclick="toggleVectorAnalysis(${i})">
                ${analyzedVector === v ? "Nascondi" : "Analizza"}
            </button>
            <button class="btn small danger" onclick="removeVector(${i})">×</button>
        `;

        list.appendChild(div);
    });
}

function removeVector(index) {
    vectors.splice(index, 1);
    updateVectorList();

    redraw();
}

function clearVectors() {
    vectors.length = 0;
    updateVectorList();

    redraw();
}

function makeModalDraggable(modalId, panelId, handleId) {
    const modal = document.getElementById(modalId);
    const panel = document.getElementById(panelId);
    const handle = document.getElementById(handleId);

    if (!modal || !panel || !handle)
        return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    handle.addEventListener("mousedown", (e) => {
        isDragging = true;

        const rect = panel.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        startX = e.clientX;
        startY = e.clientY;

        e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging)
            return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newLeft = startLeft + dx;
        let newTop = startTop + dy;

        const panelRect = panel.getBoundingClientRect();
        const maxLeft = window.innerWidth - panelRect.width;
        const maxTop = window.innerHeight - panelRect.height;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        panel.style.left = newLeft + "px";
        panel.style.top = newTop + "px";
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

// ----------------------------
// Inizializzazione
// ----------------------------
window.addEventListener("DOMContentLoaded", () => {
    initCanvas();

    updateDidacticPanel();
    updateStepVisibility();
    updateDidacticButtons();

    makeModalDraggable("motorModal", "motorModalPanel", "motorModalHandle");
    makeModalDraggable("springModal", "springModalPanel", "springModalHandle");
	makeModalDraggable("frictionModal", "frictionModalPanel", "frictionModalHandle");

    document.getElementById("clearBtn")?.addEventListener("click", () => {

        // 🧹 Reset dati principali
        vectors.length = 0;
        pointMaterial = null;
        constraintConfig = null;
        springs = [];
        springDraft = null;
		frictionModel = null;

        // 🧭 Reset assi
        axesConfig = {
            showX: false,
            showY: false,
            angleXDeg: 0,
            angleYDeg: 90,
            preview: false,
            confirmed: false
        };

        // 🎯 Reset selezioni
        selectedVector = null;
        analyzedVector = null;

        // 🧠 Reset didattico
        DIDACTIC.step = "point";
        DIDACTIC.showNormalForce = false;
        DIDACTIC.forcesConfirmed = false;

        // 🪟 Chiudi eventuali modali aperti
        const motorModal = document.getElementById("motorModal");
        const springModal = document.getElementById("springModal");
		const frictionModal = document.getElementById("frictionModal");
        const constraintModal = document.getElementById("constraintModal");

        if (motorModal)
            motorModal.style.display = "none";
        if (springModal)
            springModal.style.display = "none";
        if (constraintModal)
            constraintModal.style.display = "none";

        // 🔄 Aggiorna tutto
        showSelectedVectorInfo(null);
        updateVectorList();
        updateDidacticPanel();
        updateStepVisibility();
        updateDidacticButtons();
        updateForceButtonsVisibility();
        redraw();
    });

    document.getElementById("step-point")?.addEventListener("click", () => {
        goToStep("point");
    });

    document.getElementById("step-constraint")?.addEventListener("click", () => {
        goToStep("constraint");
    });

    document.getElementById("step-axes")?.addEventListener("click", () => {
        goToStep("axes");
    });

    document.getElementById("step-forces")?.addEventListener("click", () => {
        goToStep("forces");
    });

    document.getElementById("step-projections")?.addEventListener("click", () => {
        goToStep("projections");
    });

    document.getElementById("step-equations")?.addEventListener("click", () => {
        goToStep("equations");
    });

    // debug da console, se ti serve ancora
    window.setStep = goToStep;
    window.getStep = function () {
        return DIDACTIC.step;
    };

    document.getElementById("applyPoint").addEventListener("click", () => {
        if (!pointMaterial)
            return;

        const nameInput = document.getElementById("pm-name");
        const massInput = document.getElementById("pm-mass").value;
        const gInput = document.getElementById("pm-g").value;

        pointMaterial.name = nameInput ? nameInput.value.trim() : "";

        const massValue = evalExpr(massInput);
        if (!isNaN(massValue) && massValue > 0) {
            pointMaterial.mass = massValue;
        }

        const gValue = evalExpr(gInput);
        if (!isNaN(gValue) && gValue > 0) {
            gravity = gValue;
        }

        updateWeightVector();
        updateConstraintForces();

        if (DIDACTIC.step === "point") {
            setDidacticStep("constraint");
        } else {
            redraw();
        }
    });

    document.getElementById("applyAxes").addEventListener("click", () => {
        const showX = document.getElementById("show-axis-x").checked;
        const showY = document.getElementById("show-axis-y").checked;
        const angleXInput = document.getElementById("axes-angle-x").value;
        const angleYInput = document.getElementById("axes-angle-y").value;

        axesConfig.showX = showX;
        axesConfig.showY = showY;

        const angleXValue = evalExpr(angleXInput);
        if (!isNaN(angleXValue)) {
            axesConfig.angleXDeg = angleXValue;
        }

        const angleYValue = evalExpr(angleYInput);
        if (!isNaN(angleYValue)) {
            axesConfig.angleYDeg = angleYValue;
        }

        updateConstraintForces();
        redraw();
    });

    const motorModal = document.getElementById("motorModal");
    const springModal = document.getElementById("springModal");

    document.getElementById("openMotorModalBtn")?.addEventListener("click", () => {
        motorModal.style.display = "block";
        const panel = document.getElementById("motorModalPanel");
        if (panel) {
            panel.style.left = "120px";
            panel.style.top = "120px";
        }
    });

    document.getElementById("closeMotorModalBtn")?.addEventListener("click", () => {
        motorModal.style.display = "none";
    });

    document.getElementById("openSpringModalBtn")?.addEventListener("click", () => {
        springDraft = null;
        springModal.style.display = "block";

        const panel = document.getElementById("springModalPanel");
        if (panel) {
            panel.style.left = "160px";
            panel.style.top = "140px";
        }

        document.getElementById("spring-angle-input").value = "0";
        document.getElementById("spring-invert-side").checked = false;
        document.getElementById("spring-k-input").value = "";
        document.getElementById("spring-delta-input").value = "";
        document.getElementById("spring-state-extension").checked = true;

        redraw();
    });

    document.getElementById("closeSpringModalBtn")?.addEventListener("click", () => {
        springModal.style.display = "none";
    });

    motorModal?.addEventListener("click", (e) => {
        if (e.target === motorModal) {
            motorModal.style.display = "none";
        }
    });

    springModal?.addEventListener("click", (e) => {
        if (e.target === springModal) {
            springModal.style.display = "none";
        }
    });

    document.getElementById("addMotorForceBtn")?.addEventListener("click", () => {
        const moduleValue = evalExpr(document.getElementById("motor-module-input").value);
        const angleValue = evalExpr(document.getElementById("motor-angle-input").value);

        if (isNaN(moduleValue) || moduleValue < 0) {
            alert("Inserisci un modulo valido per la forza motrice.");
            return;
        }

        if (isNaN(angleValue)) {
            alert("Inserisci un angolo valido per la forza motrice.");
            return;
        }

        addMotorForce(moduleValue, angleValue);
        motorModal.style.display = "none";
    });

    document.getElementById("drawSpringGeometryBtn")?.addEventListener("click", () => {
        const angleValue = evalExpr(document.getElementById("spring-angle-input").value);
        const inverted = document.getElementById("spring-invert-side").checked;

        if (isNaN(angleValue)) {
            alert("Inserisci un angolo valido per la molla.");
            return;
        }

        if (!pointMaterial) {
            alert("Prima devi inserire il punto materiale.");
            return;
        }

        createSpringDraft(angleValue, inverted);
    });

    document.getElementById("drawSpringForceBtn")?.addEventListener("click", () => {
        if (!springDraft) {
            alert("Prima devi disegnare la molla.");
            return;
        }

        const kValue = evalExpr(document.getElementById("spring-k-input").value);
        const deltaValue = evalExpr(document.getElementById("spring-delta-input").value);

        const mode = document.getElementById("spring-state-compression").checked
             ? "compression"
             : "extension";

        if (isNaN(kValue) || kValue < 0) {
            alert("Inserisci un valore valido per k.");
            return;
        }

        if (isNaN(deltaValue) || deltaValue < 0) {
            alert("Inserisci una deformazione valida.");
            return;
        }

        // Conferma la molla geometrica
        springs.push({
            ...springDraft
        });

        // Direzione dal punto materiale verso la molla
        const baseAngle = springDraft.inverted
             ? springDraft.angleDeg + 180
             : springDraft.angleDeg;

        // Regola fisica corretta:
        // - estensione: la molla tira il punto verso di sé
        // - compressione: la molla spinge il punto in verso opposto
        let forceAngle;
        if (mode === "extension") {
            forceAngle = baseAngle;
        } else {
            forceAngle = baseAngle + 180;
        }

        addElasticForce(kValue, deltaValue, forceAngle);

        // Azzera bozza e chiudi wizard
        springDraft = null;
        springModal.style.display = "none";

        // Reset campi
        document.getElementById("spring-angle-input").value = "0";
        document.getElementById("spring-invert-side").checked = false;
        document.getElementById("spring-k-input").value = "";
        document.getElementById("spring-delta-input").value = "";
        document.getElementById("spring-state-extension").checked = true;

        redraw();
    });

    const constraintModal = document.getElementById("constraintModal");
    const openConstraintModalBtn = document.getElementById("openConstraintModal");
    const closeConstraintModalBtn = document.getElementById("closeConstraintModal");
    const hasFrictionCheckbox = document.getElementById("hasFriction");
    const frictionFields = document.getElementById("frictionFields");

    function updateConstraintModalFields() {
        frictionFields.style.display = hasFrictionCheckbox.checked ? "flex" : "none";
    }

    openConstraintModalBtn.addEventListener("click", () => {
        constraintModal.style.display = "flex";
        updateConstraintModalFields();
    });

    closeConstraintModalBtn.addEventListener("click", () => {
        constraintModal.style.display = "none";
    });

    hasFrictionCheckbox.addEventListener("change", updateConstraintModalFields);

    // chiusura cliccando sullo sfondo
    constraintModal.addEventListener("click", (e) => {
        if (e.target === constraintModal) {
            constraintModal.style.display = "none";
        }
    });

    document.getElementById("addConstraintBtn").addEventListener("click", () => {
        const constraintType = document.getElementById("constraintType").value;
        const hasFriction = document.getElementById("hasFriction").checked;
        const muValue = evalExpr(document.getElementById("frictionMu").value);
        const angleValue = evalExpr(document.getElementById("constraintAngle").value);

        if (constraintType !== "plane") {
            return;
        }

        if (isNaN(angleValue)) {
            alert("Inserisci un angolo valido per il piano.");
            return;
        }

        if (hasFriction && (isNaN(muValue) || muValue < 0)) {
            alert("Inserisci un valore valido per μ.");
            return;
        }

        constraintConfig = {
            type: "plane",
            angleDeg: angleValue,
            hasFriction,
            mu: hasFriction ? muValue : 0
        };
        if (!hasFriction) {
            frictionModel = null;
        }

        updateConstraintForces();
        updateForceButtonsVisibility();
        constraintModal.style.display = "none";

        if (DIDACTIC.step === "constraint") {
            setDidacticStep("axes");
        } else {
            redraw();
        }

    });
	
	function updateFrictionModalVisibility() {
    const staticBox = document.getElementById("friction-static-mode-box");
    const isStatic = document.getElementById("friction-type-static").checked;
    if (staticBox) {
        staticBox.style.display = isStatic ? "block" : "none";
    }
}

document.getElementById("openFrictionModalBtn")?.addEventListener("click", () => {
    frictionModal.style.display = "block";

    const panel = document.getElementById("frictionModalPanel");
    if (panel) {
        panel.style.left = "200px";
        panel.style.top = "180px";
    }

    if (frictionModel) {
        document.getElementById("friction-type-static").checked = frictionModel.type === "static";
        document.getElementById("friction-type-dynamic").checked = frictionModel.type === "dynamic";

        document.getElementById("friction-static-generic").checked = frictionModel.mode === "generic";
        document.getElementById("friction-static-limit").checked = frictionModel.mode === "limit";

        document.getElementById("friction-dir-plus").checked = frictionModel.direction === 1;
        document.getElementById("friction-dir-minus").checked = frictionModel.direction === -1;

        document.getElementById("friction-mu-input").value = frictionModel.mu ?? "";
    } else {
        document.getElementById("friction-type-static").checked = true;
        document.getElementById("friction-static-generic").checked = true;
        document.getElementById("friction-dir-plus").checked = true;
        document.getElementById("friction-mu-input").value = constraintConfig?.mu ?? "";
    }

    updateFrictionModalVisibility();
});

document.getElementById("closeFrictionModalBtn")?.addEventListener("click", () => {
    frictionModal.style.display = "none";
});

document.getElementById("friction-type-static")?.addEventListener("change", updateFrictionModalVisibility);
document.getElementById("friction-type-dynamic")?.addEventListener("change", updateFrictionModalVisibility);

frictionModal?.addEventListener("click", (e) => {
    if (e.target === frictionModal) {
        frictionModal.style.display = "none";
    }
});

document.getElementById("applyFrictionBtn")?.addEventListener("click", () => {
    if (!constraintConfig || !constraintConfig.hasFriction) {
        alert("Prima devi inserire un vincolo con attrito.");
        return;
    }

    const type = document.getElementById("friction-type-dynamic").checked ? "dynamic" : "static";
    const mode = document.getElementById("friction-static-limit").checked ? "limit" : "generic";
    const direction = document.getElementById("friction-dir-minus").checked ? -1 : 1;
    const muValue = evalExpr(document.getElementById("friction-mu-input").value);

    if (isNaN(muValue) || muValue < 0) {
        alert("Inserisci un valore valido per μ.");
        return;
    }

    frictionModel = {
        type,
        mode,
        direction,
        mu: muValue
    };

    constraintConfig.mu = muValue;

    updateConstraintForces();
    frictionModal.style.display = "none";
});

    document.getElementById("applyAxesSmart").addEventListener("click", () => {

        if (!constraintConfig || constraintConfig.type !== "plane") {
            alert("Prima devi inserire un vincolo piano.");
            return;
        }

        const invertX = document.getElementById("invert-x").checked;
        const invertY = document.getElementById("invert-y").checked;

        let anglePlane = constraintConfig.angleDeg || 0;

        // asse x lungo il piano
        let angleX = anglePlane;
        if (invertX) {
            angleX += 180;
        }

        // asse y perpendicolare
        let angleY = anglePlane + 90;
        if (invertY) {
            angleY += 180;
        }

        axesConfig.mode = "two";
        axesConfig.angleDeg = angleX; // importante per compatibilità
        axesConfig.showX = true;
        axesConfig.showY = true;

        axesConfig.angleXDeg = angleX;
        axesConfig.angleYDeg = angleY;

        axesConfig.preview = true;
        axesConfig.confirmed = false;

        redraw();
    });

    document.getElementById("confirmAxesBtn").addEventListener("click", confirmAxes);

    document.getElementById("toggleAdvancedAxes").addEventListener("click", () => {
        const box = document.getElementById("axes-advanced-fields");
        box.style.display = box.style.display === "none" ? "block" : "none";
    });

    document.getElementById("drawNormalBtn")?.addEventListener("click", () => {
        DIDACTIC.showNormalForce = true;
        updateConstraintForces();
        redraw();
    });

    document.getElementById("confirmForcesBtn")?.addEventListener("click", confirmForces);

});
