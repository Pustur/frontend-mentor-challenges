// Functions
function handleAccordionClick(e) {
  if (e.target.tagName !== 'BUTTON') return;

  const item = e.target.closest('li');

  item.classList.toggle('accordion__item--active');
}

// DOM caching
const accordions = document.querySelectorAll('.js-accordion');

// Events
accordions.forEach(accordion => {
  accordion.addEventListener('click', handleAccordionClick);
});
