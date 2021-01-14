// Functions
function toggleMenu() {
  html.classList.toggle(CLASS_MENU_OPEN);
}

function scrollHandler() {
  const distance =
    Math.min(window.innerHeight, MAX_HERO_HEIGHT) - HEADER_HEIGHT;

  if (window.scrollY > 20) html.classList.remove(CLASS_HEADER_EXPANDED);
  else html.classList.add(CLASS_HEADER_EXPANDED);

  if (window.scrollY > distance) html.classList.add(CLASS_HEADER_FULL);
  else html.classList.remove(CLASS_HEADER_FULL);
}

function enableTransitions() {
  html.classList.remove('disable-transitions');
}

// DOM elements
const html = document.documentElement;
const menuToggle = document.querySelector('.js-menu__toggle');

// Variables
const CLASS_MENU_OPEN = 'menu-open';
const CLASS_HEADER_FULL = 'header-full';
const CLASS_HEADER_EXPANDED = 'header-expanded';
const MAX_HERO_HEIGHT = 650;
const HEADER_HEIGHT = 50;

// Events
menuToggle.addEventListener('click', toggleMenu);
window.addEventListener('scroll', scrollHandler);

// Body
setTimeout(enableTransitions, 100);
