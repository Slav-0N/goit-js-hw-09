import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
let itogo;
let runCountdownId;
const startBtn = document.querySelector('button');
let data;
let secondsThen = 0;
let secondsNow = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //  const totalSeconds - визначає різницю між поточним часом і часом що обрав юзер, виключно для  блоку if...else (щоб визначити, чи є обрана дата - датаю в майбутньму). Не використовується при обчисленні показників таймера. 
    secondsThen = selectedDates[0];   
    const totalSeconds = secondsThen - Date.now();
    
    if (totalSeconds < 0) {
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
  startBtn.setAttribute('disabled', '');
  startBtn.previousElementSibling.setAttribute('disabled', '');
  data = setInterval(setScreenData, 1000);
};

function setScreenData() {
  // const dayNow - визначає поточний час для обчислення показників лічильника зворотнього відліку в реальному часі, після натискання на кнопку "Start".
  const dayNow = Date.now();
  let leftTime = secondsThen - dayNow;

  if (leftTime < 1000) {
    clearInterval(data);
    startBtn.previousElementSibling.removeAttribute('disabled');
  }
  let { days, hours, minutes, seconds } = convertMs(leftTime);
  const daysEl = document.querySelector('[data-days]');
  const hoursEl = document.querySelector('[data-hours]');
  const minutesEl = document.querySelector('[data-minutes]');
  const secondsEl = document.querySelector('[data-seconds]');

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
};  

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




