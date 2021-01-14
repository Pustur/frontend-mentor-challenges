// Functions
function mod(a, b) {
  return ((a % b) + b) % b;
}

function renderSlider(isAnimationBack) {
  const keyframesActive = [
    {
      opacity: 0,
      transform: `translateX(${isAnimationBack ? '-' : ''}50px)`,
    },
    { opacity: 1, transform: 'translateX(0)' },
  ];
  const keyframesPrevious = [
    { opacity: 1, transform: 'translateX(0)' },
    {
      opacity: 0,
      transform: `translateX(${isAnimationBack ? '' : '-'}50px)`,
    },
  ];

  Array.from(testimonials.children).forEach((testimonial, i) => {
    if (i === activeTestimonial) {
      testimonial.classList.add('testimonials__item--active');
      testimonial.animate(keyframesActive, { ...animationOptions, delay: 150 });
    } else if (i === prevTestimonial) {
      testimonial.classList.remove('testimonials__item--active');
      testimonial.animate(keyframesPrevious, animationOptions);
    }
  });
}

function updateActiveSlide(isPrevButton) {
  prevTestimonial = activeTestimonial;
  activeTestimonial = mod(
    activeTestimonial + (isPrevButton ? -1 : 1),
    testimonials.childElementCount,
  );
  renderSlider(isPrevButton);
}

function clickHandler(e) {
  if (e.target.tagName !== 'BUTTON') return;

  const isPrevButton = typeof e.target.dataset.prev !== 'undefined';

  updateActiveSlide(isPrevButton);
}

function keyDownHandler(e) {
  if (e.keyCode === ARROW_RIGHT) updateActiveSlide(false);
  if (e.keyCode === ARROW_LEFT) updateActiveSlide(true);
}

function touchStartHandler(e) {
  const firstTouch = e.touches[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function touchMoveHandler(e) {
  if (!xDown || !yDown) return;

  const xUp = e.touches[0].clientX;
  const yUp = e.touches[0].clientY;
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  const isHorizontal = Math.abs(xDiff) > Math.abs(yDiff);

  if (isHorizontal) {
    const isRight = xDiff > 0;

    if (isRight) updateActiveSlide(false);
    else updateActiveSlide(true);
  }

  xDown = null;
  yDown = null;
}

// DOM elements
const testimonials = document.querySelector('.js-testimonials');
const sliderControls = document.querySelector('.js-slider-controls');

// Variables
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const animationOptions = {
  duration: 300,
  fill: 'forwards',
};
let prevTestimonial = null;
let activeTestimonial = 0;
let xDown = null;
let yDown = null;

// Events
sliderControls.addEventListener('click', clickHandler);
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('touchstart', touchStartHandler);
document.addEventListener('touchmove', touchMoveHandler);

// Body
renderSlider();
