const slider = document.getElementById("tempSlider");
const tempValueEl = document.getElementById("tempValue");

const DEFAULTS = {
  unit: "C",   // "C" or "F"
  tempC: 50,   // canonical temperature stored in Celsius
};

let state = { ...DEFAULTS };

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function getAccentForTempC(tempC) {
  if (tempC <= 25) return { accent: "#08ec08ff", soft: "rgba(34, 197, 94, 0.25)" };   // green
if (tempC <= 50) return { accent: "#e7f529ff", soft: "rgba(234, 179, 8, 0.25)" };  // yellow
if (tempC <= 75) return { accent: "#f97316", soft: "rgba(249, 115, 22, 0.25)" }; // orange
return { accent: "#ef4444", soft: "rgba(239, 68, 68, 0.25)" };                  // red
}

function updateUI() {
  slider.value = String(state.tempC);
  const displayValue = state.tempC;
  tempValueEl.textContent = String(displayValue);

  const { accent, soft } = getAccentForTempC(state.tempC);
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.style.setProperty("--accent-soft", soft);
}

// Event: user moves slider
slider.addEventListener("input", (e) => {
  state.tempC = clamp(Number(e.target.value), 0, 100);
  updateUI();
});

// init
updateUI();

