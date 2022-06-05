const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = event.currentTarget.elements;
    
    if ( !formData.email.value || !formData.password.value ) { alert('All fields must be filled !'); return }    
    
    const formDataObj = {
                    email: formData.email.value,
                    password: formData.password.value,
                    }

    console.log('Form dada: ', formDataObj);    
    
    form.reset();
}