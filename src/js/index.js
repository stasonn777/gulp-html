const selectBank = document.querySelector('.select-bank')
const bankOptions = document.querySelector('.bank-options')

selectBank.addEventListener('click', () => {
  bankOptions.classList.toggle("hide")
})

