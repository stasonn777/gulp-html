const reviewsWrapper = document.querySelector('.reviews-wrapper');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
let itemWidth = 0;
let styleLeft = -1122;
if (reviewsWrapper.clientWidth < 3000) {
  itemWidth = reviewsWrapper.children[0].clientWidth + 16;
} else {
  styleLeft = -1018;
  itemWidth = reviewsWrapper.children[0].clientWidth + 93;
}

console.log([...reviewsWrapper.children]);


left.forEach((el) => {
  el.addEventListener('click', (e) => moveLeft(e));
});

right.forEach((el) => {
  el.addEventListener('click', (e) => moveRight(e));
});


function moveLeft(e) {
  console.log('left');
  const activeControl = document.querySelector('.review-control .control-item.active');
  // e.target.parentNode.parentNode.classList.remove('active');
  // e.target.parentNode.parentNode.previousElementSibling.classList.add('active');
  if (activeControl.previousElementSibling) {
    styleLeft = styleLeft + itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
    activeControl.classList.remove('active');
    activeControl.previousElementSibling.classList.add('active');
  }
}

function moveRight(e) {
  const activeControl = document.querySelector('.review-control .control-item.active');
  // e.target.parentNode.parentNode.classList.remove('active');
  // e.target.parentNode.parentNode.nextElementSibling.classList.add('active');
  if (activeControl.nextElementSibling) {
    styleLeft = styleLeft - itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
    activeControl.classList.remove('active');
    activeControl.nextElementSibling.classList.add('active');
  }
}

// Slide Reviews
let touchStart = 0;
let touchEnd = 0;

reviewsWrapper.addEventListener('touchstart', (e) => {
  touchStart = e.touches[0].clientX;
});

reviewsWrapper.addEventListener('touchmove', (e) => {
  touchEnd = e.touches[0].clientX;
});

reviewsWrapper.addEventListener('touchend', (e) => {
  if (touchStart < touchEnd) {
    moveLeft(e);
  } else {
    moveRight(e);
  }
});

// Steps slider
const stepsWrapper = document.querySelector('#steps-wrapper');
let touchStartSteps = 0;
let touchEndSteps = 0;
let stepsLeft = 0;

stepsWrapper.addEventListener('touchstart', (e) => {
  touchStartSteps = e.touches[0].clientX;
});

stepsWrapper.addEventListener('touchmove', (e) => {
  touchEndSteps = e.touches[0].clientX;
});

stepsWrapper.addEventListener('touchend', (e) => {
  const activeControl = document.querySelector('.steps .control-item.active');
  if (touchStartSteps < touchEndSteps) {
    if (stepsLeft > 1) {
      stepsLeft -= 77;
      stepsWrapper.style.left = `-${stepsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.previousElementSibling.classList.add('active')
    }
  } else {
    if (stepsLeft < 154) {
      stepsLeft += 77;
      stepsWrapper.style.left = `-${stepsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.nextElementSibling.classList.add('active')
    }
  }
});

// Icons slider
const iconsSlider = document.querySelector('.icons-slider');
let touchStartIcons = 0;
let touchEndIcons = 0;
let iconsLeft = 0;
const iconsStep = 91;

iconsSlider.addEventListener('touchstart', (e) => {
  touchStartIcons = e.touches[0].clientX;
});

iconsSlider.addEventListener('touchmove', (e) => {
  touchEndIcons = e.touches[0].clientX;
});

iconsSlider.addEventListener('touchend', () => {
  const activeControl = document.querySelector('.icons .control-item.active');
  if (touchStartIcons < touchEndIcons) {
    if (iconsLeft > 1) {
      iconsLeft -= iconsStep;
      iconsSlider.style.left = `-${iconsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.previsElementSibling.classList.add('active')
    }ou
  } else {
    if (iconsLeft < iconsStep) {
      iconsLeft += iconsStep;
      iconsSlider.style.left = `-${iconsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.nextElementSibling.classList.add('active')
    }
  }
});