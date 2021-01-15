const prices = document.querySelectorAll('.js-price-card__price');
const form = document.querySelector('form');

form.addEventListener('change', () => {
  prices.forEach(price => {
    price.classList.toggle('price-card__price--hidden');
  });
});
