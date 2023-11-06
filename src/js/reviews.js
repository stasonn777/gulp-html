const reviewsWrapper = document.querySelector('.reviews-wrapper');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
let styleLeft = 0;
const itemWidth = reviewsWrapper.children[0].clientWidth;

left.forEach((el) => {
  el.addEventListener('click', (e) => moveLeft(e));
});

right.forEach((el) => {
  el.addEventListener('click', (e) => moveRight(e));
});


function moveLeft(e) {
  const activeControl = document.querySelector('.review-control .control-item.active');
  console.log(activeControl);
  e.target.parentNode.parentNode.classList.remove('active');
  e.target.parentNode.parentNode.previousElementSibling.classList.add('active');
  if (styleLeft < 0) {
    styleLeft = styleLeft + itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
    activeControl.classList.remove('active');
    activeControl.previousElementSibling.classList.add('active');
  }
}

function moveRight(e) {
  const activeControl = document.querySelector('.review-control .control-item.active');
  console.log(activeControl);
  e.target.parentNode.parentNode.classList.remove('active');
  e.target.parentNode.parentNode.nextElementSibling.classList.add('active');
  if (styleLeft > -reviewsWrapper.clientWidth + itemWidth) {
    styleLeft = styleLeft - itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
    activeControl.classList.remove('active');
    activeControl.nextElementSibling.classList.add('active')
  }
}

// Slide Reviews
let touchStart = 0;
let touchEnd = 0;

reviewsWrapper.addEventListener('touchstart', (e) => {
  touchStart = e.touches[0].clientX;
  console.log(touchStart);
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
      iconsLeft -= 83;
      iconsSlider.style.left = `-${iconsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.previousElementSibling.classList.add('active')
    }
  } else {
    if (iconsLeft < 83) {
      iconsLeft += 83;
      iconsSlider.style.left = `-${iconsLeft}%`;
      activeControl.classList.remove('active');
      activeControl.nextElementSibling.classList.add('active')
    }
  }
});