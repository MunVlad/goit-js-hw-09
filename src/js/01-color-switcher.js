    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
    let intervalId;

    function startBackgroundChanging() {
      startButton.disabled = true; // отключаем кнопку Start
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }

    function stopBackgroundChanging() {
      startButton.disabled = false; // включаем кнопку Start обратно
      clearInterval(intervalId);
    }

    startButton.addEventListener('click', startBackgroundChanging);
    stopButton.addEventListener('click', stopBackgroundChanging);
