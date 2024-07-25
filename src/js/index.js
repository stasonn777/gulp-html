const accordeonItems = document.querySelectorAll('.item-title')
accordeonItems.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.target.parentElement.children[1].classList.toggle('opened');
  })
})