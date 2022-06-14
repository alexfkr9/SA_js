import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name=email]'),
  message: document.querySelector('.feedback-form textarea[name=message]'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const savedData = localStorage.getItem(STORAGE_KEY);
const parsedSavedData = JSON.parse(savedData);

if (parsedSavedData) {
  refs.email.value = parsedSavedData.email || '';
  refs.message.value = parsedSavedData.message || '';
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Object formData -', parsedSavedData);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
