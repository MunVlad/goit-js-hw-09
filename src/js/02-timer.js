import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector('[data-start]');
const daysEL = document.querySelector('[data-days]');
const hoursEL = document.querySelector('[data-hours]');
const minutesEL = document.querySelector('[data-minutes]');
const secondsEL = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    if (Date.now() > selectedTime) {
      return alertWrongDate();
    }
    startBtn.disabled = false;
  },
};

let selectedTime = 0;

startBtn.addEventListener('click', onStartBtnClick);
startBtn.disabled = true;

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
setInterval(() => {
    if (selectedTime < Date.now()) {
      return (selectedTime = 0);
    }
    updateCounter(selectedTime - Date.now());
  }, 1000);
}

function alertWrongDate() {
  Notify.init({ position: 'center-top', distance: '10px'});
  Notify.failure('Please choose a date in the future');
}

function updateCounter(countdownTime) {
  const { days, hours, minutes, seconds } = convertMs(countdownTime);
  daysEL.textContent = pad(days);
  hoursEL.textContent = pad(hours);
  minutesEL.textContent = pad(minutes);
  secondsEL.textContent = pad(seconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
