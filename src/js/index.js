const resume = document.querySelector('.resume');
const colorsBody = document.querySelector('.colors-body');

const windowWidth = window.innerWidth;
let scale = 1;
const step = 0.154;

if (windowWidth <= 450) {
  resume.style.transform = `scale(${(windowWidth * step) / 100})`;
}

const colors = [
  { title: 'Oxford Blue', color: '#102a73' },
  { title: 'Turquoise', color: '#00bca3' },
  { title: 'Jungle Green', color: '#075700' },
  { title: 'Tuscan Yellow', color: '#facd05' },
  { title: 'Indian Red', color: '#9b3016' },
  { title: 'Contessa Rose', color: '#f98c79' },
  { title: 'Steel Blue', color: '#a3b8de' },
  { title: 'Mint Teal', color: '#b5e8e2' },
  { title: 'Pixie Green', color: '#b7d1ad' },
  { title: 'Sand Dollar', color: '#c4b08f' },
  { title: 'Red Fox', color: '#c46531' },
  { title: 'Azalea Pink', color: '#f7bfb5' },
  { title: 'Denim Blue', color: '#394d6b' },
  { title: 'Empress Teal', color: '#016b5d' },
  { title: 'Moss Green', color: '#789c30' },
  { title: 'Medallion', color: '#cd8b00' },
  { title: 'Orange Sunrise', color: '#e37929' },
  { title: 'Camelot', color: '#8c3c4b' },
  { title: 'Olympic Blue', color: '#2b98de' },
  { title: 'Carolina Blue', color: '#2b98de' },
  { title: 'Slate Blue', color: '#094d73' },
  { title: 'Outer Space', color: '#34383c' },
  { title: 'Nobel Grey', color: '#7d7d7d' },
  { title: 'Silver White', color: '#e4e2de' },
];

colors.forEach((color) => {
  createColorItem(color);
});

function createColorItem(color) {
  const colorItem = document.createElement('div');
  colorItem.classList.add('color-item');
  const innerColor = document.createElement('span');
  innerColor.style.background = color.color;
  colorItem.appendChild(innerColor);
  colorsBody.appendChild(colorItem);
  colorItem.addEventListener('click', () => {
    removeActive();
    colorItem.classList.add('active');
    changeColor(color.color)
  });
}

function removeActive() {
  const colorItems = document.querySelectorAll('.color-item');

  colorItems.forEach((el) => {
    el.classList.remove('active');
  });
}

function changeColor(color) {
  const titles = document.querySelectorAll('.title');
  const userName = document.querySelector('.user-name');
  const svgAll = document.querySelectorAll('svg');
  const before = document.querySelectorAll('.history-item');

  titles.forEach(title => {
    title.style.color = color
  })
  svgAll.forEach(svg => {
    svg.style.fill = color;
  })
  before.forEach(svg => {
    console.log(svg);
    console.log(svg.querySelector('::before'));
    // svg.querySelector('::before').style.backgroundColor = color
  })
  document.querySelectorAll('.default-fill').forEach(svg => {
    svg.style.fill = color;
  })
  userName.style.color = color
}
