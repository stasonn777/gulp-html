// const menuButton = document.querySelector('.menu-icon');
// const menuWrapper = document.querySelector('.menu-wrapper');
// const header = document.querySelector('header');
// let isMenuOpen = false;

// menuButton.addEventListener('click', () => {
//   isMenuOpen = !isMenuOpen;
//   menuButton.classList.toggle('close');
//   if (isMenuOpen) {
//     menuWrapper.style.display = 'block';
//     header.style.position = 'fixed';
//     document.body.style.position = 'fixed';
//   } else {
//     closeMenu();
//   }
// });
// function closeMenu() {
//   menuWrapper.style.display = 'none';
//   header.style.position = 'fixed';
//   document.body.style.position = 'initial';
// }

// document.querySelector('.scroll-up').addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });

// // Hover effect for target icons
// const targetImages = document.querySelectorAll('.target-img__wrapper.desktop');
// const targetIcons = document.querySelectorAll('.target-icon__item');
// targetIcons.forEach((item, i) => {
//   item.addEventListener('mouseenter', () => {
//     targetImages[0].children[i].classList.add('active');
//   });
//   item.addEventListener('mouseleave', () => {
//     targetImages[0].children[i].classList.remove('active');
//     targetImages[0].children[0].classList.add('active');
//   });
// });

// // Swipe events for target icons
// const targetWrapper = document.querySelector('.target-wrapper');
// const targetImgWrapper = document.querySelector('.target-img__wrapper.mobile');
// const targetIconWrapper = document.querySelector('.target-icon__wrapper');
// const statusBarItems = document.querySelectorAll('.status-bar__item');
// let touchStart = 0;
// let touchEnd = 0;
// let currentIndex = 0;
// const totalSlides = 6;

// targetWrapper.addEventListener(
//   'touchstart',
//   (e) => (touchStart = e.touches[0].clientX)
// );
// targetWrapper.addEventListener(
//   'touchmove',
//   (e) => (touchEnd = e.touches[0].clientX)
// );
// targetWrapper.addEventListener('touchend', (e) => {
//   if (touchStart < touchEnd) {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     setActiveSlide();
//   } else if (touchStart > touchEnd) {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     setActiveSlide();
//   }
// });

// function setActiveSlide() {
//   const offset = currentIndex * 100;
//   targetImgWrapper.style.left = `-${offset}%`;
//   targetIconWrapper.style.left = `-${offset}%`;
//   statusBarItems.forEach((item) => item.classList.remove('active'));
//   statusBarItems[currentIndex].classList.add('active');
// }

function $(selector) {
  return document.querySelector(selector);
}

// Close popup
$('.close').addEventListener('click', ()=> {
  $('.popup-wrapper').style.display = 'none';
})
// Show popup
$('#qr').addEventListener('click', (e)=> {
  e.preventDefault();
  $('.popup-wrapper').style.display = 'block';
})

// Copy url
$('.copy-link').addEventListener('click', (e) => {
  navigator.clipboard.writeText(e.target.textContent);
  $('.copied').style.display = 'block';
  setTimeout(() => {
    $('.copied').style.display = 'none';
  }, 2000);
})

// Show share
$('#showShare').addEventListener('click', (e) => {
  e.target.style.opacity = '80%';
  $('.share-wrapper').style.display = 'block';
})

// Show how-to
$('#how-to').addEventListener('click', (e) => {
  e.preventDefault();
  $('.info').style.display = 'block';
})