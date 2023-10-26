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
  e.target.parentNode.parentNode.classList.remove('active');
  e.target.parentNode.parentNode.previousElementSibling.classList.add('active');
  if (styleLeft < 0) {
    styleLeft = styleLeft + itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
  }
}

function moveRight(e) {
  e.target.parentNode.parentNode.classList.remove('active');
  e.target.parentNode.parentNode.nextElementSibling.classList.add('active');
  if (styleLeft > -reviewsWrapper.clientWidth + itemWidth) {
    styleLeft = styleLeft - itemWidth;
    reviewsWrapper.style.left = styleLeft + 'px';
  }
}

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
