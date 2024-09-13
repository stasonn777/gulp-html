function showMore(e) {
  document.querySelector('.read-more').style.display = 'inline';
  e.target.style.display = 'none';
  e.preventDefault();
}

const menuButton = document.querySelector('.burger-button');
const menuWrapper = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuButton.classList.toggle('close');
  if (isMenuOpen) {
    menuWrapper.style.display = 'block';
  } else {
    closeMenu();
  }
}
);
function closeMenu() {
  menuWrapper.style.display = 'none';
}

function openForm(e) {
  document.querySelector('.promocode-form').style.display = 'block';
  e.preventDefault();
}
function closeForm() {
  document.querySelector('.promocode-form').style.display = 'none';
}
