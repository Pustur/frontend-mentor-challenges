// Functions
function updatePrice() {
  const monthlyPrice = PAGEVIEW_PRICE * slider.value;
  const newPrice = monthlyInput.checked
    ? monthlyPrice
    : monthlyPrice * MONTHS_IN_YEAR * YEARLY_DISCOUNT;

  pageviews.textContent = slider.value / 1000;
  price.textContent = newPrice.toFixed(2);
  period.textContent = monthlyInput.checked ? 'month' : 'year';
}

// DOM elements
const slider = document.querySelector('input[type="range"]');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const [monthlyInput] = radioInputs;
const pageviews = document.querySelector('.js-pageviews');
const price = document.querySelector('.js-price');
const period = document.querySelector('.js-period');

// Variables
const PAGEVIEW_PRICE = 0.00016;
const YEARLY_DISCOUNT = 0.75;
const MONTHS_IN_YEAR = 12;

// Events
slider.addEventListener('input', updatePrice);
radioInputs.forEach(input => input.addEventListener('change', updatePrice));
