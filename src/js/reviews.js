const reviewsWrapper = document.querySelector('.reviews-wrapper');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
let styleLeft = 0;
const itemWidth = reviewsWrapper.children[0].clientWidth;

left.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.parentNode.classList.remove('active');
    e.target.parentNode.parentNode.previousElementSibling.classList.add('active');
    if(styleLeft < 0) {
      styleLeft = styleLeft + itemWidth;
      reviewsWrapper.style.left = styleLeft+"px";
    }
  })
})

right.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.parentNode.classList.remove('active');
    e.target.parentNode.parentNode.nextElementSibling.classList.add('active');
    if(styleLeft > -reviewsWrapper.clientWidth+itemWidth) {
      styleLeft = styleLeft - itemWidth;
      reviewsWrapper.style.left = styleLeft+"px";
    }
  })
})