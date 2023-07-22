const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')
const body = document.querySelector('body');
let changeBgColorId;
const styleElement = document.querySelector('style');

startButton.addEventListener('click', startClicking);
function startClicking(event) {
  console.log('You pushed Start button.');
  changeBgColorId = setInterval(bodyStyleAdding, 1000);
  startButton.setAttribute('disabled', '');
}

stopButton.addEventListener('click', stopClicking);
function stopClicking(event) {
  console.log('You pushed STOP button.');
  clearInterval(changeBgColorId);
  body.lastElementChild.innerHTML = '';
  startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
} 

function bodyStyleAdding() {
  if (document.querySelector('#style')) {
    body.lastElementChild.remove();
  };
  body.insertAdjacentHTML('beforeend', `<style id='style'>body {background-color: ${getRandomHexColor()};}</style>`);
};







