class Slider {
  sliderBody;
  sliderControl;
  slideWidth;
  slidesArr = [];
  sliderWidth = 0;
  controlLeft;
  controlRight;
  activeSlide = {};
  statusBullets = [];
  activeBullet = {};
  constructor(id, clone) {
    this.clone = clone;
    this.id = id;
    this.initSlider();
  }
  initSlider() {
    this.sliderBody = document.querySelector(`#${this.id} .slider-body`);
    this.sliderControl = document.querySelector(`#${this.id} .slider-controls`);
    this.sliderStatus = document.querySelector(`#${this.id} .control-status`);

    this.controlLeft = this.sliderControl.children[0];
    this.controlRight = this.sliderControl.children[1];
    this.combineSlides();
    this.slideWidth = this.slidesArr[0].clientWidth;
    this.sliderWidth = this.slidesArr[0].clientWidth * this.slidesArr.length;
    this.sliderBody.style.width = this.sliderWidth + 'px';

    this.eventListenners();
    this.setLeftForSlides();
    this.initActive();
    this.doStatusBar();
  }

  combineSlides() {
    const deviceWidth = window.innerWidth;
    this.slidesArr = [...this.sliderBody.children];
    if (this.sliderBody.children.length <= 4 && this.clone) {
      this.slidesArr.forEach((el, i) => {
        const clonedEl = el.cloneNode(true);
        this.sliderBody.appendChild(clonedEl);
      });
      this.slidesArr = [...this.sliderBody.children];
    }
    const clone = this.slidesArr[1].cloneNode(true)
    if (deviceWidth < 600 && this.slidesArr.length % 2 == 0) {
      console.log(clone);
      this.sliderBody.appendChild(clone);
      this.slidesArr.push(clone);
      this.slidesArr = [...this.sliderBody.children];
    }
    if (deviceWidth > 1200 && this.slidesArr.length % 2 !== 0 && this.clone) {
      this.sliderBody.appendChild(clone);
      this.slidesArr.push(clone);
      this.slidesArr = [...this.sliderBody.children];
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
    this.setActive(false);
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
    this.setActive(true);
  }

  initActive() {
    this.activeSlide.obj = this.slidesArr.find((sl) =>
      sl.classList.contains('active')
    );
    this.activeSlide.index = this.slidesArr.indexOf(this.activeSlide.obj);

    this.activeBullet.obj = this.statusBullets.find((sb) =>
      sb.classList.contains('active')
    );
    this.activeBullet.index = this.statusBullets.indexOf(this.activeBullet.obj);
  }

  setActive(isNext) {
    this.initActive();
    this.activeSlide.obj.classList.remove('active');
    this.activeBullet.obj.classList.remove('active');
    if (isNext) {
      this.slidesArr[this.activeSlide.index + 1].classList.add('active');
      if (this.statusBullets[this.activeBullet.index + 1]) {
        this.statusBullets[this.activeBullet.index + 1].classList.add('active');
      } else {
        this.statusBullets[0].classList.add('active');
      }
    } else {
      this.slidesArr[this.activeSlide.index - 1].classList.add('active');
      if (this.statusBullets[this.activeBullet.index - 1]) {
        this.statusBullets[this.activeBullet.index - 1].classList.add('active');
      } else {
        this.statusBullets[this.statusBullets.length - 1].classList.add(
          'active'
        );
      }
    }
    // debugger
  }

  doStatusBar() {
    for (let i = 0; i < this.slidesArr.length; i++) {
      const bullet = document.createElement('div');
      bullet.classList.add('control-status__item');
      if (i == this.activeSlide.index) {
        bullet.classList.add('active');
        this.activeBullet.index = i;
        this.activeBullet.obj = bullet;
      }
      this.sliderStatus.appendChild(bullet);
      this.statusBullets.push(bullet);
    }
  }
}