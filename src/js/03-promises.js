// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onStart);
let promisEl;


function onStart(event) {
  event.preventDefault();
  const {  delay, step, amount } = formEl.elements;
  let pauseEl = Number(delay.value);
  
  if (Number(delay.value) < 0 && Number(step.value) < 0 && Number(amount.value) <= 0) {
    Notiflix.Notify.failure(`Congratulations, you are talented!
     You managed to enter incorrectly all the parameters at the same time. :-)`);
    return
  } else if (Number(delay.value) < 0 || Number(step.value) < 0) {
    Notiflix.Notify.failure(`"First delay" and/or "Delay step" parameters must be positive and negative numbers`);
    return
  } else if (Number(amount.value) <= 0) {
    Notiflix.Notify.failure(`Amount parameter must be greater than zero`);
    return
  }; 

  for (let i = 0; i <= amount.value - 1; i += 1) {   
    // let pauseEl = Number(delay.value) + i * Number(step.value);
    

    createPromise(i + 1, pauseEl);  
    promisEl
      .then(
        ({position,delay}) => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
      .catch(
      ({position,delay}) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    pauseEl += Number(step.value);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  promisEl = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position,delay});
      } else {
        // Reject
        reject({position,delay});
      }
    }, delay)
  });
};




