class Slider {
  sliderWrapper;
  sliderControl;
  slideWidth;
  slidesArr = [];
  sliderWidth = 0;
  controlLeft;
  controlRight;
  activeSlide = {};
  statusBullets = [];
  activeBullet = {};
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

    [...this.sliderWrapper.children].forEach((el, i, arr) => {
      const clone = el.cloneNode(true);
      clone.classList.remove('active');
       if (i <= arr.length-1 && i > 0) {
        this.sliderWrapper.insertBefore(clone, this.sliderWrapper.children[i-1]);
      } else {
        return;
      }
    });

    this.slidesArr = [...this.sliderWrapper.children];
    this.slideWidth = this.slidesArr[0].clientWidth;
    this.sliderWidth = this.slidesArr[0].clientWidth * this.slidesArr.length;
    this.sliderWrapper.style.width = this.sliderWidth + 'px';

    this.eventListenners();
    this.setLeftForSlides();
    this.initActive();
    // this.doStatusBar();
    // debugger;
  }

  eventListenners() {
    //Control buttons click event
    this.sliderControl.addEventListener('click', (e) =>
      this.doControl(e.target.dataset.control)
    );

    //Swipe events
    let touchStart = 0;
    let touchEnd = 0;
    this.sliderWrapper.addEventListener(
      'touchstart',
      (e) => (touchStart = e.touches[0].clientX)
    );
    this.sliderWrapper.addEventListener(
      'touchmove',
      (e) => (touchEnd = e.touches[0].clientX)
    );
    this.sliderWrapper.addEventListener('touchend', (e) => {
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

  prevSlide() {
    const last = this.slidesArr.pop(0);
    this.slidesArr.unshift(last);
    this.setLeftForSlides();
    last.style.display = 'none';
    setTimeout(() => {
      last.style.display = 'block';
    }, 0);
    this.setActive(false);
  }

  nextSlide() {
    const first = this.slidesArr.shift(0);
    this.slidesArr.push(first);
    this.setLeftForSlides();
    first.style.display = 'none';
    setTimeout(() => {
      first.style.display = 'block';
    }, 0);
    this.setActive(true);
  }

  initActive() {
    this.activeSlide.obj = this.slidesArr.find((sl) =>
      sl.classList.contains('active')
    );
    this.activeSlide.index = this.slidesArr.indexOf(this.activeSlide.obj);

    // this.activeBullet.obj = this.statusBullets.find((sb) =>
    //   sb.classList.contains('active')
    // );
    // this.activeBullet.index = this.statusBullets.indexOf(this.activeBullet.obj);
  }

  setActive(isNext) {
    this.initActive();
    this.activeSlide.obj.classList.remove('active');
    // this.activeBullet.obj.classList.remove('active');
    if (isNext) {
      this.slidesArr[this.activeSlide.index + 1].classList.add('active');
      // if (this.statusBullets[this.activeBullet.index + 1]) {
      //   this.statusBullets[this.activeBullet.index + 1].classList.add('active');
      // } else {
      //   this.statusBullets[0].classList.add('active');
      // }
    } else {
      this.slidesArr[this.activeSlide.index - 1].classList.add('active');
      // if (this.statusBullets[this.activeBullet.index - 1]) {
      //   this.statusBullets[this.activeBullet.index - 1].classList.add('active');
      // } else {
      //   this.statusBullets[this.statusBullets.length - 1].classList.add(
      //     'active'
      //   );
      // }
    }
    // debugger
  }

  // doStatusBar() {
  //   for (let i = 0; i < this.slidesArr.length; i++) {
  //     const bullet = document.createElement('div');
  //     bullet.classList.add('control-status__item');
  //     if (i == this.activeSlide.index) {
  //       bullet.classList.add('active');
  //       this.activeBullet.index = i;
  //       this.activeBullet.obj = bullet;
  //     }
  //     this.sliderStatus.appendChild(bullet);
  //     this.statusBullets.push(bullet);
  //   }
  // }
}

const slider = new Slider('slider1', true);
