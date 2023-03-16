function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');


startButton.addEventListener('click', onStartChangeColor);
stopButton.addEventListener('click', onStopChangeColor);

let intervalId = null;
stopButton.disabled = true;

function onStartChangeColor() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000); 
}

function onStopChangeColor() {
  startButton.disabled = false;
  stopButton.disabled = true;
  // document.body.style.backgroundColor = 'inherit'; //приводим к первоначальному состоянию
  clearInterval(intervalId);
}






































    // const startButton = document.querySelector('[data-start]');
    // const stopButton = document.querySelector('[data-stop]');
    // let intervalId;

    // function startBackgroundChanging() {
    //   startButton.disabled = true; // отключаем кнопку Start
    //   intervalId = setInterval(() => {
    //     document.body.style.backgroundColor = getRandomHexColor();
    //   }, 1000);
    // }

    // function stopBackgroundChanging() {
    //   startButton.disabled = false; // включаем кнопку Start обратно
    //   clearInterval(intervalId);
    // }

    // startButton.addEventListener('click', startBackgroundChanging);
    // stopButton.addEventListener('click', stopBackgroundChanging);
