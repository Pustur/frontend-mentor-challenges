// Functions
function changeTheme(newTheme) {
  localStorage.setItem('theme', newTheme);
  root.style.setProperty('--theme', newTheme);

  Object.keys(window.COLORS.dark).forEach(name => {
    root.style.setProperty(`--color-${name}`, window.COLORS[newTheme][name]);
  });
}

function toggleChangeHandler(e) {
  const newTheme = e.target.checked ? 'dark' : 'light';

  changeTheme(newTheme);
}

// DOM Elements
const themeToggle = document.querySelector('#theme');
const root = document.documentElement;

// Variables
const INITIAL_THEME = root.style.getPropertyValue('--theme');

// Events
themeToggle.addEventListener('change', toggleChangeHandler);

// Body
themeToggle.checked = INITIAL_THEME === 'dark';
