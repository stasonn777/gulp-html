(function () {
  const slider = document.querySelector('.slider');
  const wrapper = document.querySelector('.slider-wrapper');
  const slides = Array.from(document.querySelectorAll('.slider .slide'));
  const controlLeft = document.querySelector('.slider-control .left');
  const controlRight = document.querySelector('.slider-control .right');
  const numberEl = document.querySelector('.slider-control .number');

  if (!slider || !wrapper || slides.length === 0 || !controlLeft || !controlRight || !numberEl) {
    return;
  }

  slides.forEach((slide, i) => {
    if (!slide.id) slide.id = `slide-${i + 1}`;
  });

  let activeIndex = 0;
  let startX = 0;
  let isTouching = false;

  function isDesktop() {
    return window.innerWidth >= 1124; // desktop breakpoint
  }

  function getStepPx() {
    if (isDesktop()) {
      return 441 + 51; // width + gap on desktop
    }

    return slider.clientWidth;
  }

  function clampIndex(i) {
    const max = slides.length - 1;
    if (i < 0) return 0;
    if (i > max) return max;
    return i;
  }

  function setActive(index) {
    activeIndex = clampIndex(index);
    slides.forEach((s, i) => s.classList.toggle('active', i === activeIndex));
    const step = getStepPx();
    const offset = step * activeIndex;
    wrapper.style.transform = `translateX(-${offset}px)`;
    updateCounter();
  }

  function updateCounter() {
    numberEl.textContent = `${activeIndex + 1}/${slides.length}`;
  }

  function goPrev() {
    setActive(activeIndex - 1);
  }

  function goNext() {
    setActive(activeIndex + 1);
  }

  // Click controls
  controlLeft.addEventListener('click', goPrev);
  controlRight.addEventListener('click', goNext);

  // Touch swipe (mobile)
  slider.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length === 0) return;
    isTouching = true;
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchmove', (e) => {
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    if (!isTouching) return;
    isTouching = false;
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const deltaX = endX - startX;
    const threshold = Math.min(60, getStepPx() * 0.2); // swipe threshold
    if (Math.abs(deltaX) >= threshold) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  });

  // Recalculate on resize (e.g., rotate device)
  window.addEventListener('resize', () => {
    // Maintain current index but recompute offset
    setActive(activeIndex);
  });

  // Initialize
  setActive(0);
})();

// Mobile menu toggle
(function () {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header .burger');
  if (!header || !burger) return;
  burger.addEventListener('click', () => {
    header.classList.toggle('menu-open');
  });
})();

