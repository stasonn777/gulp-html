class Slider {
  sliderWrapper;
  sliderControl;
  slideWidth;
  slidesArr = [];
  sliderWidth = 0;
  controlLeft;
  controlRight;
  constructor(id, loop) {
    this.loop = loop;
    this.id = id;
    this.sliderControl = document.querySelector('#slider-controls');
    this.sliderStatus = document.querySelector('#control-status');
    this.initSlider();
  }
  initSlider() {
    this.sliderWrapper = document.getElementById(this.id);
    this.controlLeft = this.sliderControl.children[0];
    this.controlRight = this.sliderControl.children[1];
    this.slidesArr = [...this.sliderWrapper.children];
    this.slideWidth = this.slidesArr[0].clientWidth;
    this.sliderWidth = this.slidesArr[0].clientWidth * this.slidesArr.length;
    this.sliderWrapper.style.width = this.sliderWidth + 'px';
    this.sliderControl.addEventListener('click', (e) => this.doControl(e));
    this.doStatusBar(this.slidesArr.length);
    this.setLeftForSlides();
    // debugger;
  }
  
  appendSlides() {
    console.log(this.slidesArr);
    this.slidesArr.forEach(el => {
      this.sliderWrapper.appendChild(el)
    })
  }
  
  setLeftForSlides() {
    this.slidesArr.forEach((slide, i) => {
      slide.style.left = (i * this.slideWidth)+'px';
    });
    this.appendSlides();
  }
  
  
  sliderLeft() {
    const last = this.slidesArr.pop(0)
    this.slidesArr.unshift(last)
    this.setLeftForSlides();
  }
  
  sliderRight() {
    const first = this.slidesArr.shift(0)
    this.slidesArr.push(first)
    this.setLeftForSlides();
  }
  
  // setActive() {}
  doControl(e) {
    switch (e.target.dataset.control) {
      case 'left':
        this.sliderLeft();
        break;
      case 'right':
        this.sliderRight();
        break;
    }
  }

  doStatusBar(num) {
    for (let i = 0; i < num; i++) {
      const bullet = document.createElement('div');
      bullet.classList.add('control-status__item');
      this.sliderStatus.appendChild(bullet);
    }
  }
}

const slider = new Slider('slider1', true);
