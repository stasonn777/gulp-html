const menuButton = document.querySelector('.menu-icon');
const menuWrapper = document.querySelector('.menu-wrapper');
const header = document.querySelector('header');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuButton.classList.toggle('close');
  if (isMenuOpen) {
    menuWrapper.style.display = 'block';
    header.style.position = 'fixed';
    document.body.style.position = 'fixed';
  } else {
    closeMenu();
  }
});
function closeMenu() {
  menuWrapper.style.display = 'none';
  header.style.position = 'fixed';
  document.body.style.position = 'initial';
}

document.querySelector('.scroll-up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Hover effect for target icons
const targetImages = document.querySelectorAll('.target-img__wrapper.desktop');
const targetIcons = document.querySelectorAll('.target-icon__item');
targetIcons.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    targetImages[0].children[i].classList.add('active');
  });
  item.addEventListener('mouseleave', () => {
    targetImages[0].children[i].classList.remove('active');
    targetImages[0].children[0].classList.add('active');
  });
});

// Swipe events for target icons
const targetWrapper = document.querySelector('.target-wrapper');
const targetImgWrapper = document.querySelector('.target-img__wrapper.mobile');
const targetIconWrapper = document.querySelector('.target-icon__wrapper');
const statusBarItems = document.querySelectorAll('.status-bar__item');
let touchStart = 0;
let touchEnd = 0;
let left = 0;
let bulletIndex = 0;
targetWrapper.addEventListener(
  'touchstart',
  (e) => (touchStart = e.touches[0].clientX)
);
targetWrapper.addEventListener(
  'touchmove',
  (e) => (touchEnd = e.touches[0].clientX)
);
targetWrapper.addEventListener('touchend', (e) => {
  if (touchStart < touchEnd && left > 0) {
    left = left - 325;
    bulletIndex = bulletIndex - 1;
    setActiveSlide();
  } else if (touchStart > touchEnd && left < 1625) {
    left = left + 325;
    bulletIndex = bulletIndex + 1;
    setActiveSlide();
  }
});

function setActiveSlide() {
  targetImgWrapper.style.left = `-${left}px`;
  targetIconWrapper.style.left = `-${left}px`;
  statusBarItems.forEach((item) => item.classList.remove('active'));
  statusBarItems[bulletIndex].classList.add('active');
}
