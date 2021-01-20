// Functions
function submitFormHandler(e) {
  e.preventDefault();
  alert('Form submitted succesfully!');
  e.currentTarget.reset();
}

function invalidInputHandler(e) {
  const input = e.target;
  const id = input.getAttribute('id');
  const errorLabel = input
    .closest('form')
    .querySelector(`.signup-form__error[for=${id}]`);

  e.preventDefault();
  errorLabel.textContent = input.validationMessage;
}

function changeInputHandler(e) {
  const input = e.target;

  if (!input.validity.valid) return;

  const id = input.getAttribute('id');
  const errorLabel = input
    .closest('form')
    .querySelector(`.signup-form__error[for=${id}]`);

  errorLabel.textContent = '';
}

// Variables
const form = document.querySelector('.js-signup-form');
const inputs = form.querySelectorAll('input');

// Events
form.addEventListener('submit', submitFormHandler);
inputs.forEach(input => {
  input.addEventListener('invalid', invalidInputHandler);
  input.addEventListener('change', changeInputHandler);
});
