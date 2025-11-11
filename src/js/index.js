// Update range input filled area for WebKit browsers
function updateRangeProgress(rangeInput) {
  const min = parseFloat(rangeInput.min) || 0;
  const max = parseFloat(rangeInput.max) || 100;
  const value = parseFloat(rangeInput.value) || min;
  const percentage = ((value - min) / (max - min)) * 100;
  rangeInput.style.setProperty('--range-progress', `${percentage}%`);
}

// Initialize range inputs
document.addEventListener('DOMContentLoaded', function() {
  const amountSpan = document.getElementById('amount');
  const periodSpan = document.getElementById('period');
  const amountInput = document.querySelector('.amount-filter input[type="range"]');
  const periodInput = document.querySelector('.period-filter input[type="range"]');
  const applyButton = document.getElementById('apply');

  const formatAmount = (num) => {
    const n = Number(num) || 0;
    return n.toLocaleString('pl-PL'); // e.g., 150 000
  };

  const syncAmount = () => {
    if (amountSpan && amountInput) {
      amountSpan.textContent = formatAmount(amountInput.value);
    }
  };

  const syncPeriod = () => {
    if (periodSpan && periodInput) {
      periodSpan.textContent = `${Number(periodInput.value) || 0}`;
    }
  };

  const rangeInputs = document.querySelectorAll('input[type="range"]');
  
  rangeInputs.forEach(function(rangeInput) {
    // Set initial value
    updateRangeProgress(rangeInput);
    // Sync specific displays on load
    if (rangeInput === amountInput) syncAmount();
    if (rangeInput === periodInput) syncPeriod();
    
    // Update on input
    rangeInput.addEventListener('input', function() {
      updateRangeProgress(this);
      if (this === amountInput) syncAmount();
      if (this === periodInput) syncPeriod();
    });
  });

  // FAQ Accordion
  const accordionHeaders = document.querySelectorAll('.faq-accordion .faq-accordion-item .faq-accordion-item-header');
  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      const item = this.closest('.faq-accordion-item');
      if (!item) return;
      item.classList.toggle('open');
    });
  });

  // Mobile nav toggle
  const burger = document.querySelector('.burger-wrapper');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeMenu = document.querySelector('.mobile-nav .close-menu');

  if (burger && mobileNav) {
    burger.addEventListener('click', function() {
      mobileNav.classList.add('open');
      document.documentElement.style.overflow = 'hidden';
    });
  }

  if (closeMenu && mobileNav) {
    closeMenu.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      document.documentElement.style.overflow = '';
    });
  }

  // Apply button -> log both results
  if (applyButton) {
    applyButton.addEventListener('click', function() {
      const amountValue = amountInput ? Number(amountInput.value) || 0 : 0;
      const periodValue = periodInput ? Number(periodInput.value) || 0 : 0;
      console.log('Amount:', amountValue, 'Period:', periodValue);
    });
  }
});

