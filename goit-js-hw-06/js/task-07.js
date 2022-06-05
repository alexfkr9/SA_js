const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('span#text');
 
sizeControl.addEventListener('input', changeSize );

function changeSize(event) {    
    text.style.fontSize = event.currentTarget.value + 'px';
}