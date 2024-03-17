const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');


startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);


let intervalId = null;

function startColorSwitch() {
  intervalId = setInterval(changeBodyColor, 1000);
  startButton.disabled = true;
}

function stopColorSwitch() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}