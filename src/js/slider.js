class Slider {
  sliderBody;
  sliderControl;
  slideWidth;
  slidesArr = [];
  sliderWidth = 0;
  controlLeft;
  controlRight;
  statusBullets = [];
  constructor(id) {
    this.id = id;
    this.initSlider();
  }
  initSlider() {
    this.sliderBody = document.querySelector(`#${this.id} .slider-body`);
    this.sliderControl = document.querySelector(`#${this.id} .slider-controls`);

    this.controlLeft = this.sliderControl.children[0];
    this.controlRight = this.sliderControl.children[1];
    this.combineSlides();
    this.slideWidth = this.slidesArr[0].clientWidth;
    this.sliderWidth = this.slidesArr[0].clientWidth * this.slidesArr.length;
    this.sliderBody.style.width = this.sliderWidth + 'px';

    this.eventListenners();
    this.setLeftForSlides();
  }

  combineSlides() {
    const deviceWidth = window.innerWidth;
    console.log(deviceWidth);
    this.slidesArr = [...this.sliderBody.children];
    if (this.sliderBody.children.length <= 4) {
      this.slidesArr.forEach((el, i) => {
        const clonedEl = el.cloneNode(true);
        this.sliderBody.appendChild(clonedEl);
      });
      this.slidesArr = [...this.sliderBody.children];
    }
    if (deviceWidth < 600 && this.slidesArr.length % 2 == 0) {
      console.log('here');
      this.slidesArr.pop();
    }
    if (deviceWidth > 1200 && this.slidesArr.length % 2 !== 0) {
      console.log('here2');
      this.slidesArr.pop();
    }
  }

  eventListenners() {
    //Control buttons click event
    this.sliderControl.addEventListener('click', (e) => {
      this.doControl(e.target.dataset.control);
    });

    //Swipe events
    let touchStart = 0;
    let touchEnd = 0;
    this.sliderBody.addEventListener(
      'touchstart',
      (e) => (touchStart = e.touches[0].clientX)
    );
    this.sliderBody.addEventListener(
      'touchmove',
      (e) => (touchEnd = e.touches[0].clientX)
    );
    this.sliderBody.addEventListener('touchend', (e) => {
      if (touchStart < touchEnd) {
        this.doControl('left');
      } else {
        this.doControl('right');
      }
    });
  }

  setLeftForSlides() {
    this.slidesArr.forEach((slide, i) => {
      slide.style.left = i * this.slideWidth + 'px';
    });
  }

  prevSlide() {
    const last = this.slidesArr.pop(0);
    this.slidesArr.unshift(last);
    this.setLeftForSlides();
    last.style.display = 'none';
    setTimeout(() => {
      last.style.display = 'block';
    }, 0);
  }

  doControl(e) {
    switch (e) {
      case 'left':
        this.prevSlide();
        break;
      case 'right':
        this.nextSlide();
        break;
    }
  }

  nextSlide() {
    const first = this.slidesArr.shift(0);
    this.slidesArr.push(first);
    this.setLeftForSlides();
    first.style.display = 'none';
    setTimeout(() => {
      first.style.display = 'block';
    }, 0);
  }
}

const financeBooks = new Slider('finance');
const personalBooks = new Slider('personal');
const popularBooks = new Slider('popular');
