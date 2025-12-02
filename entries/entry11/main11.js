let snowActive = false;
let snowInterval;

const button = document.getElementById("snowButton");

button.addEventListener("click", function () {
  if (!snowActive) {
    startSnow();
    button.textContent = "Stop Snow";
  } else {
    stopSnow();
    button.textContent = "Make it Snow ❄️";
  }
  snowActive = !snowActive;
});

function startSnow() {
  snowInterval = setInterval(() => {
    const flake = document.createElement("div");
    flake.classList.add("flake");

    flake.style.left = Math.random() * 100 + "vw";
    flake.style.animationDuration = (3 + Math.random() * 5) + "s";
    flake.style.opacity = Math.random();

    document.body.appendChild(flake);

    setTimeout(() => flake.remove(), 8000);
  }, 150);
}

function stopSnow() {
  clearInterval(snowInterval);
}
