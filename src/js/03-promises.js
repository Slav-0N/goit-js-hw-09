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



function onStart(event) {
  event.preventDefault();
  const {  delay, step, amount } = formEl.elements;

  for (let i = 0; i <= amount.value - 1; i += 1) {   
    let pauseEl = Number(delay.value) + i * Number(step.value);

    createPromise(i+1, pauseEl);  
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promisEl = new Promise((resolve, reject) => {
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


  promisEl
    .then(
      ({position,delay}) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
        
    .catch(
     ({position,delay}) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  
};




