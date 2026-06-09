
// ----------------------------
// Stato e variabili globali
// ----------------------------
const vectors = [];
let vectorCount = 0;
let selectedVector = null;
let temporaryLines = []; // Linee tratteggiate temporanee

// Variabili temporanee per drag preciso
let dragStartWorld = null;
let dragVectorInitial = null;
let dragStartScreen = null;

const LAB = {
    canvas: null,
    ctx: null,
    pan: {
        x: 0,
        y: 0
    },
    zoom: 1,
    pixelsPerUnit: 40,
    dragging: false,
    dragMode: null,
    dragVector: null,
    last: {
        x: 0,
        y: 0
    }
};

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

function getVectorById(id) {
    return vectors.find(v => v.name === id);
}

function selectLastVector() {
    const last = vectors[vectors.length - 1];
    if (!last)
        return;
    const selects = ["opA", "opASum", "opB", "dotA", "dotB", "crossA", "crossB", "opDecompose"];
    selects.forEach(id => {
        const sel = document.getElementById(id);
        if (sel)
            sel.value = last.name;
    });
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
        y: -(y - LAB.canvas.height / 2 - LAB.pan.y) / (LAB.zoom * LAB.pixelsPerUnit)
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

    // Se ci sono linee di costruzione attive, le cancello immediatamente
    if (temporaryLines.length > 0) {
        temporaryLines = [];
    }

    redraw();
}

// ----------------------------
// Disegno
// ----------------------------
function getNiceStep(rawStep) {
    const exp = Math.floor(Math.log10(rawStep));
    const base = rawStep / Math.pow(10, exp);

    let niceBase;
    if (base < 1.5) niceBase = 1;
    else if (base < 3) niceBase = 2;
    else if (base < 7) niceBase = 5;
    else niceBase = 10;

    return niceBase * Math.pow(10, exp);
}

function drawGridLines(ctx, step, width, height) {
    const startX = screenToWorld(0, 0).x;
    const endX = screenToWorld(width, 0).x;
    const startY = screenToWorld(0, height).y;
    const endY = screenToWorld(0, 0).y;

    const x0 = Math.floor(startX / step) * step;
    const y0 = Math.floor(startY / step) * step;

    ctx.beginPath();

    for (let x = x0; x <= endX; x += step) {
        const sx = worldToScreen(x, 0).x;
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx, height);
    }

    for (let y = y0; y <= endY; y += step) {
        const sy = worldToScreen(0, y).y;
        ctx.moveTo(0, sy);
        ctx.lineTo(width, sy);
    }

    ctx.stroke();
}

function formatAxisLabel(value) {
    const rounded = Math.abs(value) < 1e-10 ? 0 : value;
    const decimals = Math.abs(rounded) >= 1 ? 2 : 4;
    return rounded
        .toFixed(decimals)
        .replace(/\.0+$/, "")
        .replace(/(\.\d*?)0+$/, "$1");
}

function drawAxisLabels(ctx, step, width, height) {
    const startX = screenToWorld(0, 0).x;
    const endX = screenToWorld(width, 0).x;
    const startY = screenToWorld(0, height).y;
    const endY = screenToWorld(0, 0).y;

    const x0 = Math.floor(startX / step) * step;
    const y0 = Math.floor(startY / step) * step;

    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let x = x0; x <= endX; x += step) {
        if (Math.abs(x) < 1e-8) continue;
        const p = worldToScreen(x, 0);
        if (p.x < -40 || p.x > width + 40) continue;
        ctx.fillText(formatAxisLabel(x), p.x, p.y + 4);
    }

    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    for (let y = y0; y <= endY; y += step) {
        if (Math.abs(y) < 1e-8) continue;
        const p = worldToScreen(0, y);
        if (p.y < -20 || p.y > height + 20) continue;
        ctx.fillText(formatAxisLabel(y), p.x + 4, p.y);
    }
}

function drawAxes() {
    const ctx = LAB.ctx;
    const width = LAB.canvas.width;
    const height = LAB.canvas.height;
    const origin = worldToScreen(0, 0);

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

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, origin.y);
    ctx.lineTo(width, origin.y);
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(origin.x, height);
    ctx.stroke();

    ctx.fillStyle = "#666";
    ctx.font = "11px Arial";
    drawAxisLabels(ctx, majorStep, width, height);

    ctx.restore();
}

function drawVector(v) {
    const from = worldToScreen(0, 0);
    const to = worldToScreen(v.x, v.y);
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

function redraw() {
    LAB.ctx.clearRect(0, 0, LAB.canvas.width, LAB.canvas.height);
    drawAxes();
    vectors.forEach(drawVector);

    // Disegna linee tratteggiate temporanee
    const ctx = LAB.ctx;
    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1;
    temporaryLines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.from.x, line.from.y);
        ctx.lineTo(line.to.x, line.to.y);
        ctx.stroke();
    });
    ctx.restore();

    updateVectorList();
}




// ----------------------------
// Eventi mouse
// ----------------------------
function onMouseDown(e) {
    const rect = LAB.canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    selectedVector = null;
    LAB.dragVector = null;

    // Tolleranza costante in pixel (10px)
    const tolerancePx = 10;

    for (let v of vectors) {
        const tipScreen = worldToScreen(v.x, v.y);
        const distPx = Math.hypot(canvasX - tipScreen.x, canvasY - tipScreen.y);

        if (distPx < tolerancePx) {
            LAB.dragMode = "vector";
            LAB.dragVector = v;
            LAB.dragging = true;
            selectedVector = v;

            // Salvo stato iniziale per calcolare delta
            dragStartScreen = { x: canvasX, y: canvasY };
            dragVectorInitial = { x: v.x, y: v.y };

            redraw();
            return;
        }
    }

    // Se non clicco un vettore → pan
    LAB.dragMode = "pan";
    LAB.dragging = true;
    LAB.last = { x: e.clientX, y: e.clientY };
    redraw();
}

function onMouseMove(e) {
    if (!LAB.dragging) return;

    if (LAB.dragMode === "vector" && LAB.dragVector) {
        const rect = LAB.canvas.getBoundingClientRect();
        const canvasX = e.clientX - rect.left;
        const canvasY = e.clientY - rect.top;

        // Calcola delta in pixel schermo
        const dx = canvasX - dragStartScreen.x;
        const dy = canvasY - dragStartScreen.y;

        // Converto delta in coordinate mondo
const dxWorld = dx / (LAB.zoom * LAB.pixelsPerUnit);
const dyWorld = -dy / (LAB.zoom * LAB.pixelsPerUnit);

        // Aggiorna il vettore rispetto alla posizione iniziale
        LAB.dragVector.x = dragVectorInitial.x + dxWorld;
        LAB.dragVector.y = dragVectorInitial.y + dyWorld;

        updateVectorList();
        redraw();
    } else if (LAB.dragMode === "pan") {
        const dx = e.clientX - LAB.last.x;
        const dy = e.clientY - LAB.last.y;
        LAB.pan.x += dx;
        LAB.pan.y += dy;
        LAB.last = { x: e.clientX, y: e.clientY };
        redraw();
    }
}

function onMouseUp() {
    LAB.dragging = false;
    LAB.dragVector = null;
    LAB.dragMode = null;
    dragStartScreen = null;
    dragVectorInitial = null;
}





// ----------------------------
// Gestione vettori
// ----------------------------
function getRandomColor() {
    const colors = ["#d90429", "#3a86ff", "#06d6a0", "#f9c74f", "#ff006e"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function addVector(x, y, name = null) {
    const id = name || "v" + (++vectorCount);
    const color = getRandomColor();
    const vector = {
        name: id,
        x,
        y,
        color
    };
    vectors.push(vector);
    updateVectorList();
    updateSelectOptions();

    // Imposta selezioni automatiche solo per il primo e secondo vettore
    if (vectors.length === 1) {
         ["opA", "opASum", "dotA", "crossA", "opDecompose"].forEach(id => {
            const sel = document.getElementById(id);
            if (sel)
                sel.value = vector.name;
        });
    } else if (vectors.length === 2) {
        ["opB", "dotB", "crossB"].forEach(id => {
            const sel = document.getElementById(id);
            if (sel)
                sel.value = vector.name;
        });
    }

    selectedVector = vector;
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
        const r = Math.hypot(v.x, v.y).toFixed(2);
        const theta = (Math.atan2(v.y, v.x) * 180 / Math.PI).toFixed(1);
        div.innerHTML = `<strong>${v.name}</strong> = (${v.x.toFixed(2)} ; ${v.y.toFixed(2)}) → [${r} ; ${theta}°]
      <button class="btn small danger" onclick="removeVector(${i})">×</button>`;
        list.appendChild(div);
    });
}

function updateSelectOptions() {
const ids = ["opA", "opASum", "opB", "dotA", "dotB", "crossA", "crossB", "opDecompose"];
    ids.forEach(id => {
        const select = document.getElementById(id);
        if (!select)
            return;

        const currentValue = select.value; // Salva selezione corrente
        select.innerHTML = ""; // Svuota le opzioni

        vectors.forEach(v => {
            const option = document.createElement("option");
            option.value = v.name;
            option.textContent = v.name;
            select.appendChild(option);
        });

        // Ripristina selezione se ancora esistente
        if ([...select.options].some(opt => opt.value === currentValue)) {
            select.value = currentValue;
        } else if (select.options.length > 0) {
            select.value = select.options[0].value;
        }
    });
}

function removeVector(index) {
    vectors.splice(index, 1);
    updateVectorList();
    updateSelectOptions();
    redraw();
}

function clearVectors() {
    vectors.length = 0;
    vectorCount = 0; // <--- questa è la riga da aggiungere
    updateVectorList();
    updateSelectOptions();
    redraw();
}

function drawDashedProjectionLines(v) {
    const tip = worldToScreen(v.x, v.y);
    const projX = worldToScreen(v.x, 0);
    const projY = worldToScreen(0, v.y);
    drawDashedLine(tip, projX);
    drawDashedLine(tip, projY);
}

function drawDashedLine(from, to) {
    temporaryLines.push({
        from,
        to
    });
}

function decomposeVector(v) {
    // Componenti
    const xComp = {
        name: v.name + "_x",
        x: v.x,
        y: 0,
        color: "#888"
    };
    const yComp = {
        name: v.name + "_y",
        x: 0,
        y: v.y,
        color: "#888"
    };

    // Aggiungi i due vettori alla lista
    vectors.push(xComp);
    vectors.push(yComp);

    // Disegna linee tratteggiate temporanee
    drawDashedProjectionLines(v);
    setTimeout(() => {
        temporaryLines = [];
        redraw();
    }, 3000);

    redraw();
}

function drawParallelogramSum(v1, v2) {
    const sum = {
        name: `${v1.name}+${v2.name}`,
        x: v1.x + v2.x,
        y: v1.y + v2.y,
        color: getRandomColor()
    };

    const from = worldToScreen(0, 0);
    const tipA = worldToScreen(v1.x, v1.y);
    const tipB = worldToScreen(v2.x, v2.y);
    const tipSum = worldToScreen(sum.x, sum.y);

    drawDashedLine(tipA, tipSum);
    drawDashedLine(tipB, tipSum);

    vectors.push(sum);
    selectedVector = sum;
    updateVectorList();
    updateSelectOptions();
    redraw();

    setTimeout(() => {
        temporaryLines = [];
        redraw();
    }, 3000);
}

function drawParallelogramDiff(v1, v2) {
    const diff = {
        name: `${v1.name}-${v2.name}`,
        x: v1.x - v2.x,
        y: v1.y - v2.y,
        color: getRandomColor()
    };

    const origin = worldToScreen(0, 0);
    const tipA = worldToScreen(v1.x, v1.y);
    const tipDiff = worldToScreen(diff.x, diff.y);

    // Tratteggio: origine → v1, v1 → diff
    drawDashedLine(origin, tipA);
    drawDashedLine(tipA, tipDiff);

    vectors.push(diff);
    selectedVector = diff;
    updateVectorList();
    updateSelectOptions();
    redraw();

    setTimeout(() => {
        temporaryLines = [];
        redraw();
    }, 3000);
}

function latexify(expr) {
    return `\\[${expr}\\]`;
}

function showLatexResult(id, expr) {
    const container = document.getElementById(id);
    if (!container)
        return;
    container.innerHTML = latexify(expr);
    if (typeof MathJax !== "undefined") {
        MathJax.typesetPromise([container]);
    }
}

function calculateDotProduct(v1, v2) {
    const dot = (v1.x * v2.x + v1.y * v2.y).toFixed(2);

    const a1 = v1.x.toFixed(2);
    const a2 = v2.x.toFixed(2);
    const b1 = v1.y.toFixed(2);
    const b2 = v2.y.toFixed(2);

    const p1 = `(${a1} \\cdot ${a2.startsWith('-') ? `(${a2})` : a2})`;
    const p2 = `(${b1} \\cdot ${b2.startsWith('-') ? `(${b2})` : b2})`;

    const steps = `${v1.name} \\cdot ${v2.name} = ${p1} + ${p2} = ${dot}`;
    showLatexResult("dotResult", steps);
}

function calculateCrossProduct(v1, v2) {
    const cross = (v1.x * v2.y - v1.y * v2.x).toFixed(2);

    const a1 = v1.x.toFixed(2);
    const a2 = v2.y.toFixed(2);
    const b1 = v1.y.toFixed(2);
    const b2 = v2.x.toFixed(2);

    const p1 = `(${a1} \\cdot ${a2.startsWith('-') ? `(${a2})` : a2})`;
    const p2 = `(${b1} \\cdot ${b2.startsWith('-') ? `(${b2})` : b2})`;

    const steps = `${v1.name} \\times ${v2.name} = ${p1} - ${p2} = ${cross}`;
    showLatexResult("crossResult", steps);
}

// ----------------------------
// Inizializzazione
// ----------------------------
window.addEventListener("DOMContentLoaded", () => {
    initCanvas();

    document.getElementById("addVector").addEventListener("click", () => {
        let name = document.getElementById("vname").value.trim();
        const x = evalExpr(document.getElementById("vx").value);
        const y = evalExpr(document.getElementById("vy").value);
        if (!name) {

            name = null;
        }
        if (isNaN(x) || isNaN(y)) {
            alert("Coordinate non valide.");
            return;
        }
        addVector(x, y, name);
    });

    document.getElementById("addVectorPolar").addEventListener("click", () => {
        let name = document.getElementById("vnamePolar").value.trim();
        const r = evalExpr(document.getElementById("vr").value);
        const thetaInput = document.getElementById("vtheta").value;
        const unit = document.querySelector('input[name="theta-unit"]:checked').value;
        const theta = evalExpr(thetaInput);
        const thetaRad = unit === "deg" ? theta * Math.PI / 180 : theta;
        if (!name) {

            name = null;
        }
        if (isNaN(r) || isNaN(thetaRad) || r < 0) {
            alert("Inserisci un modulo r positivo e un angolo valido.");
            return;
        }

        const x = r * Math.cos(thetaRad);
        const y = r * Math.sin(thetaRad);
        addVector(x, y, name);
    });

    document.getElementById("clearVectors").addEventListener("click", clearVectors);

    document.getElementById("drawComponents").addEventListener("click", () => {
        const id = document.getElementById("opDecompose").value;
        const v = getVectorById(id);
        if (!v) {
            alert("Seleziona un vettore valido da scomporre.");
            return;
        }
        decomposeVector(v);
    });

    document.getElementById("drawParallelogram").addEventListener("click", () => {
        const idA = document.getElementById("opASum").value;
        const idB = document.getElementById("opB").value;
        const v1 = getVectorById(idA);
        const v2 = getVectorById(idB);
        if (!v1 || !v2) {
            alert("Seleziona due vettori validi.");
            return;
        }
        drawParallelogramSum(v1, v2);
    });

    document.getElementById("drawDifference").addEventListener("click", () => {
        const idA = document.getElementById("opASum").value;
        const idB = document.getElementById("opB").value;
        const v1 = getVectorById(idA);
        const v2 = getVectorById(idB);
        if (!v1 || !v2) {
            alert("Seleziona due vettori validi.");
            return;
        }
        drawParallelogramDiff(v1, v2);
    });

    document.getElementById("calcDot").addEventListener("click", () => {
        const idA = document.getElementById("dotA").value;
        const idB = document.getElementById("dotB").value;
        const v1 = getVectorById(idA);
        const v2 = getVectorById(idB);
        if (!v1 || !v2) {
            alert("Seleziona due vettori validi.");
            return;
        }
        calculateDotProduct(v1, v2);
    });

    document.getElementById("calcCross").addEventListener("click", () => {
        const idA = document.getElementById("crossA").value;
        const idB = document.getElementById("crossB").value;
        const v1 = getVectorById(idA);
        const v2 = getVectorById(idB);
        if (!v1 || !v2) {
            alert("Seleziona due vettori validi.");
            return;
        }
        calculateCrossProduct(v1, v2);
    });

    document.getElementById("drawScaled").addEventListener("click", () => {
        const k = evalExpr(document.getElementById("kA").value);
        const id = document.getElementById("opA").value;
        const v = getVectorById(id);

        if (isNaN(k)) {
            alert("Valore di k non valido.");
            return;
        }
        if (!v) {
            alert("Vettore non valido.");
            return;
        }

        vectorCount++;
        const scaled = {
            name: "v" + vectorCount,
            x: v.x * k,
            y: v.y * k,
            color: getRandomColor()
        };

        vectors.push(scaled);
        selectedVector = scaled;
        updateVectorList();
        updateSelectOptions();
        redraw();
    });

});
