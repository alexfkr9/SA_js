let counterValue = 0;
const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");

const valueEl = document.querySelector("#value");

buttonDecrement.addEventListener('click', () => {counterValue--; valueEl.textContent = counterValue} );
buttonIncrement.addEventListener('click', () => {counterValue++; valueEl.textContent = counterValue} );