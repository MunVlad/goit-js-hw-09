import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const delay = Number(this.elements.delay.value); 
  const step = Number(this.elements.step.value);
  const amount = Number(this.elements.amount.value); 

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step) 
      .then(({ position, delay }) => {
        alertResolve(position, delay);
      })
      .catch(({ position, delay }) => {
        alertReject(position, delay);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function alertResolve(paramP, paramD) {
  Notify.init({ useIcon: false });
  Notify.success(`✅ Fulfilled promise ${paramP} in ${paramD}ms`);
}

function alertReject(paramP, paramD) {
  Notify.init({ useIcon: false });
  Notify.failure(`❌ Rejected promise ${paramP} in ${paramD}ms`);
}