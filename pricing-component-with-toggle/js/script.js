// Functions
function inputChangeHandler() {
  prices.forEach(price => {
    price.toggleAttribute('hidden');
  });
}

// DOM Elements
const prices = document.querySelectorAll('.js-price-card__price');
const inputs = document.querySelectorAll('input');

// Events
inputs.forEach(input => {
  input.addEventListener('change', inputChangeHandler);
});
