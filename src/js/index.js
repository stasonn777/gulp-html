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
}
);
function closeMenu() {
  menuWrapper.style.display = 'none';
  header.style.position = 'fixed';
  document.body.style.position = 'initial';
}


document.querySelector('.scroll-up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
