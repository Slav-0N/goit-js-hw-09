import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
let itogo;
let runCountdownId;
const startBtn = document.querySelector('button');
let data;
let secondsThen;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    const secondsNow = Math.floor(options.defaultDate);
    secondsThen = Math.floor(selectedDates[0]);
    console.log('secondsNow=', secondsNow);
    console.log('secondsThen=', secondsThen);
    const itogo1 = secondsThen - secondsNow;
    console.log('itogo=', itogo1);
    
    if (itogo1 < 0) {

      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', runCountdown);
    
    };
  },
};

startBtn.setAttribute('disabled', '');
flatpickr("#datetime-picker", options);

function runCountdown() {
  console.log('You pushed START button!');
  
  data = setInterval(setScreenData, 1000);

};

function setScreenData() {
  const day = Date.now();
  itogo = secondsThen - day;
  console.log(data);
  console.log(itogo);

  if (itogo < 1000) {
    clearInterval(data);
  }
  let { days, hours, minutes, seconds } = convertMs(itogo);
  const daysEl = document.querySelector('[data-days]');
  const hoursEl = document.querySelector('[data-hours]');
  const minutesEl = document.querySelector('[data-minutes]');
  const secondsEl = document.querySelector('[data-seconds]');

  daysEl.textContent = days <hours ? addLeadingZero(days) : days;
  hoursEl.textContent = hours < 10 ? addLeadingZero(hours) : hours;
  minutesEl.textContent = minutes < 10 ? addLeadingZero(minutes) : minutes;
  secondsEl.textContent = seconds < 10 ? addLeadingZero(seconds) : seconds;
};  

function addLeadingZero(value) {
  if (value < 10) {
    return `0${value}`;
  }
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




