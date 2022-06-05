function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.widget .change-color');
const colorValue = document.querySelector('.widget .color');

button.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor =  getRandomHexColor();
  colorValue.textContent = getRandomHexColor();  
}