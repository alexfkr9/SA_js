function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('#controls input');
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('div#boxes');

buttonCreate.addEventListener("click", () => createBoxes(inputNumber.value) );
buttonDestroy.addEventListener("click", destroyBoxes );

function createBoxElement(size) {
  const divEl = document.createElement('div');
    divEl.style.width = size + 'px';
    divEl.style.height = size + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.append(divEl);
}

function createBoxes(amount) {
  if (amount <=0 ) { return };
  let size = 30;  
  createBoxElement(size);  

  for ( let n=2; n<=amount; n++ ) {
    size += 10;
    createBoxElement(size);
  }    
}

function destroyBoxes() { boxes.innerHTML = ''; }