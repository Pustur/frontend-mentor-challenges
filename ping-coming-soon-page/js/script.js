// Functions
function socialLinkHandler(e) {
  e.preventDefault();
  alert(`Navigated to ${e.currentTarget.getAttribute('aria-label')}`);
}

function submitFormHandler(e) {
  e.preventDefault();
  alert('Form submitted succesfully!');
}

function invalidInputHandler(e) {
  const input = e.target;
  const id = input.getAttribute('id');
  const errorLabel = input
    .closest('form')
    .querySelector(`.newsletter-form__error[for=${id}]`);

  e.preventDefault();
  errorLabel.textContent = input.validationMessage;
  input.classList.add('invalid');
}

function changeInputHandler(e) {
  const input = e.target;

  if (!input.validity.valid) return;

  const id = input.getAttribute('id');
  const errorLabel = input
    .closest('form')
    .querySelector(`.newsletter-form__error[for=${id}]`);

  errorLabel.textContent = '';
  input.classList.remove('invalid');
}

// Variables
const socialLinks = document.querySelectorAll('.js-social-links a');
const form = document.querySelector('.js-newsletter-form');
const inputs = form.querySelectorAll('input');

// Events
socialLinks.forEach(link => link.addEventListener('click', socialLinkHandler));
form.addEventListener('submit', submitFormHandler);
inputs.forEach(input => {
  input.addEventListener('invalid', invalidInputHandler);
  input.addEventListener('change', changeInputHandler);
});
