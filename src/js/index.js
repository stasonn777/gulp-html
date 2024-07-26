const accordeonItems = document.querySelectorAll('.item-title');
accordeonItems.forEach((el) => {
  el.addEventListener('click', (e) => {
    const item = e.target.parentElement.children[1];
    item.classList.toggle('opened');
    if (item.classList.contains('opened')) {
      item.style.maxHeight = item.scrollHeight + 'px';
    } else {
      item.style.maxHeight = '0px';
    }
  });
});

const radioButtons = document.querySelectorAll('input[name="month"]');
const price = document.querySelector('#price');
radioButtons.forEach((el) => {
  el.addEventListener('change', () => {
    const result = (45 - 1 * +el.value).toFixed(2) + ' zł'; // Ad your formula here
    price.innerHTML = result;
    
    radioButtons.forEach((r) => {
      
      +r.value < +el.value ? r.parentElement.classList.add('active') : r.parentElement.classList.remove('active');
      +r.value === +el.value ? r.parentElement.classList.add('checked') : r.parentElement.classList.remove('checked');
    });
  });
});

function showMore(e) {
  e.target.parentElement.parentElement.querySelector('.more').style.display = 'contents';
  e.target.parentElement.parentElement.querySelector('.short').style.display = 'none';
  e.target.style.display = 'none';
}