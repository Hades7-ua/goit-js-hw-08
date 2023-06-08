import throttle from 'lodash.throttle ';

const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

pageReload();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const data = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_STORAGE_KEY, data);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  console.log(formData);
}

function pageReload() {
  const formElements = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));

  if (formElements) {
    form.elements['email'].value = formElements.email;
    form.elements['message'].value = formElements.message;
  }
}
