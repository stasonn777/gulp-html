const amountRange = document.getElementById('amount');
const amountThumb = document.querySelector('.amount-thumb');
const amountFilled = document.querySelector('.amount-filled');
const valueAmount = document.querySelector('.value-amount');
const termRange = document.getElementById('term');
const termThumb = document.querySelector('.term-thumb');
const termFilled = document.querySelector('.term-filled');
const valueTerm = document.querySelector('.value-term');
const showResult = document.querySelector('.show-result');
const resultContainer = document.querySelector('.result-container');
const topBanner = document.querySelector('.top-banner');
const amountUp = document.querySelector('.amount-up');
const amountDown = document.querySelector('.amount-down');
const termUp = document.querySelector('.term-up');
const termDown = document.querySelector('.term-down');
const steps = document.querySelector('.steps.mob');
const customEvent = new Event('input', { bubbles: true });

window.addEventListener("load", () => {
  termRange.dispatchEvent(customEvent);
  amountRange.dispatchEvent(customEvent);
});

amountUp.addEventListener('click', () => {
  amountRange.value = (+amountRange.value + 1000).toString();
  amountRange.dispatchEvent(customEvent);
})
amountDown.addEventListener('click', () => {
  amountRange.value = (+amountRange.value - 1000).toString();
  amountRange.dispatchEvent(customEvent);
})
termUp.addEventListener('click', () => {
  termRange.value = (+termRange.value + 1).toString();
  termRange.dispatchEvent(customEvent);
})
termDown.addEventListener('click', () => {
  termRange.value = (+termRange.value - 1).toString();
  termRange.dispatchEvent(customEvent);
})

amountRange.addEventListener('input', (e) => {
  const result = moveRange(e).result();
  amountThumb.style.left = result + '%';
  amountThumb.style.transform = `translate(${-result}%, 0)`;
  amountFilled.style.width = result + '%';
  valueAmount.innerHTML = e.target.value + ' zł';
});

termRange.addEventListener('input', (e) => {
  const result = moveRange(e).result();
  termThumb.style.left = result + '%';
  termThumb.style.transform = `translate(${-result}%, 0)`;
  termFilled.style.width = result + '%';
  valueTerm.innerHTML = e.target.value + ' miesięcy';
});

function moveRange(e) {
  return {
    min: e.target.attributes.min.value,
    max: e.target.attributes.max.value,
    inputValue: e.target.value,
    result: function () {
      return ((this.inputValue - this.min) * 100) / (this.max - this.min);
    },
  };
}

showResult.addEventListener('click', onShowResult)

function onShowResult() {
  topBanner.classList.toggle('opened')
  showResult.classList.toggle('opened');
  resultContainer.classList.toggle('opened');
  steps.classList.toggle('hide');
}