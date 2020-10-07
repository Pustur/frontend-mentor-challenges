// Functions
function togglePopup() {
  document.documentElement.classList.toggle('share-popup-active');
}

function closePopupOnClickOutside(e) {
  if (e.target.closest('.js-actions')) return;
  document.documentElement.classList.remove('share-popup-active');
}

function shareArticle(e) {
  e.preventDefault();
  alert(`Shared to ${e.currentTarget.textContent}`);
}

// Variables
const shareButton = document.querySelector('.js-share-button');
const shareLinks = document.querySelectorAll('.js-share-links a');

// Events
document.addEventListener('click', closePopupOnClickOutside);
shareButton.addEventListener('click', togglePopup);
shareLinks.forEach(link => link.addEventListener('click', shareArticle));
