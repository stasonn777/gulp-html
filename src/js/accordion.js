const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('open');
  })
})