// Constants
const root = document.documentElement;
const windowWidth = window.screen.width;
const defaultColor = {
  mainColor: getComputedStyle(root).getPropertyValue('--main-color'),
  cascadeColor: getComputedStyle(root).getPropertyValue('--cascade-main-color'),
}
const defaultValues = {
  fontSelector: getComputedStyle(root).getPropertyValue('--font-family'),
  fontSizeSelector: getComputedStyle(root).getPropertyValue('--font-size'),
  headingSizeSelector:
    getComputedStyle(root).getPropertyValue('--title-font-size'),
  sectionSpacing: getComputedStyle(root).getPropertyValue('--padding-bottom'),
  paragraphSpacing: getComputedStyle(root).getPropertyValue(
    '--paragraph-spacing'
  ),
  lineSpacing: getComputedStyle(root).getPropertyValue('--line-height'),
};

// Scale resume for mobile
if (windowWidth <= 450) {
  const resume = document.querySelectorAll('.resume');
  resume.forEach((r) => {
    r.style.transform = `scale(${(windowWidth * 0.154) / 100})`;
  });
}

// Color settings
const colorsBody = document.querySelector('.colors-body');
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
  { title: 'Carolina Blue', color: '#8ac3f5' },
  { title: 'Slate Blue', color: '#094d73' },
  { title: 'Outer Space', color: '#34383c' },
  { title: 'Nobel Grey', color: '#7d7d7d' },
  { title: 'Silver White', color: '#e4e2de' },
  { title: 'default', color: 'default' },
];

colors.forEach((color) => {
  createColorItem(color);
});

function createColorItem(color) {
  const colorItem = document.createElement('div');
  colorItem.classList.add('color-item');
  const innerColor = document.createElement('span');
  innerColor.style.background = color.color;
  innerColor.dataset.color = color.color;
  colorItem.appendChild(innerColor);
  colorsBody.appendChild(colorItem);
  colorItem.addEventListener('click', () => {
    if (innerColor.dataset.color === 'default') {
      changeColor(defaultColor.mainColor);
    } else {
      changeColor(color.color);
    }
    removeActive('.color-item');
    colorItem.classList.add('active');
  });
}

function removeActive(id) {
  const colorItems = document.querySelectorAll(id);
  colorItems.forEach((el) => {
    el.classList.remove('active');
  });
}

function changeColor(color) {
  root.style.setProperty('--main-color', color);
  root.style.setProperty('--cascade-main-color', color);
}

function showColors() {
  document.querySelector('.colors').classList.toggle('show');
}

// Formatting settings
function showSettings() {
  document.querySelector('.format').classList.toggle('show');
}

document.querySelector('#fontSelector').addEventListener('change', (e) => {
  root.style.setProperty('--font-family', e.target.value);
});
document.querySelector('#fontSizeSelector').addEventListener('change', (e) => {
  root.style.setProperty('--font-size', `${e.target.value}px`);
});
document
  .querySelector('#headingSizeSelector')
  .addEventListener('change', (e) => {
    root.style.setProperty('--title-font-size', `${e.target.value}px`);
  });
document.querySelector('#sectionSpacing').addEventListener('input', (e) => {
  root.style.setProperty('--padding-bottom', `${e.target.value}px`);
});
document.querySelector('#paragraphSpacing').addEventListener('input', (e) => {
  root.style.setProperty('--paragraph-spacing', `${e.target.value}px`);
});
document.querySelector('#lineSpacing').addEventListener('input', (e) => {
  root.style.setProperty('--line-height', `${e.target.value}px`);
});

function resetSettings() {
  root.style.setProperty('--font-family', defaultValues.fontSelector);
  root.style.setProperty('--font-size', defaultValues.fontSizeSelector);
  root.style.setProperty(
    '--title-font-size',
    defaultValues.headingSizeSelector
  );
  root.style.setProperty('--padding-bottom', defaultValues.sectionSpacing);
  root.style.setProperty('--paragraph-spacing', defaultValues.paragraphSpacing);
  root.style.setProperty('--line-height', defaultValues.lineSpacing);
}

// Choose template
const templates = document.querySelectorAll('.template-item a');

templates.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const anchorElement = e.target.closest('a');
    const templName = anchorElement.dataset.item;
    removeActive('.resume-container');
    removeActive('.template-item a');
    anchorElement.classList.add('active');
    document.getElementById(templName).classList.add('active');
  });
});

// Download popup
function showDownloadPopup(){
  document.querySelector('.download-popup').style.display = 'flex'
}
function  hideDownloadPopup(){
  document.querySelector('.download-popup').style.display = 'none'
}