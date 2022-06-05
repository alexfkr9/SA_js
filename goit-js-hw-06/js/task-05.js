const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {    
    outputName.textContent = event.currentTarget.value || 'Anonymous';
}