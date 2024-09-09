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
      +r.value < +el.value
        ? r.parentElement.classList.add('active')
        : r.parentElement.classList.remove('active');
      +r.value === +el.value
        ? r.parentElement.classList.add('checked')
        : r.parentElement.classList.remove('checked');
    });
  });
});

function showMore(e) {
  e.target.parentElement.parentElement.querySelector('.more').style.display =
    'contents';
  e.target.parentElement.parentElement.querySelector('.short').style.display =
    'none';
  e.target.style.display = 'none';
}

const caregoriesWrapper = document.querySelector('.caregories-wrapper');
const scrolledElement = document.querySelector('.scrolled');
let left = 0;
const step = 147 + 72;
const elementsOnInit = window.screen.width < 500 ? 2 : 6;
let elementsOnView = elementsOnInit;
scrolledElement && (scrolledElement.style.width = `${getScrolled()}%`);
function getScrolled() {
  return (elementsOnView * 100) / caregoriesWrapper.children.length;
}
function moveSlide(dir) {
  switch (dir) {
    case 'left':
      if (left > 0) {
        left -= step;
        elementsOnView -= 1;
        caregoriesWrapper.style.left = `-${left}px`;
        scrolledElement.style.width = `${getScrolled()}%`;
      }
      break;
    case 'right':
      if (elementsOnView < caregoriesWrapper.children.length) {
        left += step;
        elementsOnView += 1;
        caregoriesWrapper.style.left = `-${left}px`;
        scrolledElement.style.width = `${getScrolled()}%`;
      }
  }
}

function showMoreInCategory(e) {
  const lazyLoaded =
    e.target.parentElement.parentElement.querySelector('.more');
  lazyLoaded.style.display = 'flex';
  console.log(lazyLoaded.offsetHeight);
  lazyLoaded.style.height = lazyLoaded.scrollHeight + 'px';
  e.target.style.display = 'none';
}

document.querySelectorAll('.input-wrapper').forEach((el) => {
  el.addEventListener('click', (e) => {
    const targetInfo = e.target.parentElement.querySelector('.info');
    if (e.target.tagName === 'IMG') {
      targetInfo.classList.toggle('show');
      closeInfo(targetInfo);
    }
  });
});

const infoElements = document.querySelectorAll('.info');
function closeInfo(el) {
  infoElements.forEach((info) => {
    if (el !== info) {
      info.classList.remove('show');
    }
  });
}

// Select delivery option
const deliveryoptions = document.querySelectorAll('.select-radio');
deliveryoptions.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    const post = document.querySelector('.post');
    const courier = document.querySelector('.courier');
    switch (e.target.id) {
      case 'post':
        post.style.display = 'flex';
        courier.style.display = 'none';
        break;
      case 'courier':
        post.style.display = 'none';
        courier.style.display = 'block';
        break;
    }
  });
});

// Check all newsletters
let allChecked = false;
const allOptions = document.querySelectorAll('.newsletter-opions input')
document.querySelector('#newsletter').addEventListener('change', () => {
  allChecked = !allChecked;
  allOptions.forEach(input => {
    allChecked ? input.checked = true : input.checked = false;
  })
})
allOptions.forEach(option => {
  option.addEventListener('change', () => {
    allChecked = false;
    document.querySelector('#newsletter').checked = false;
  })
})