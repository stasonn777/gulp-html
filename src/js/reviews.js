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