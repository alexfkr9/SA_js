const inputData = document.querySelector('#validation-input');

inputData.addEventListener('blur', checkData );

function checkData(event) {    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length) ) {
        inputData.classList.remove('invalid');
        inputData.classList.add('valid')        
    } else { 
        inputData.classList.remove('valid');
        inputData.classList.add('invalid');        
    }
}