console.log('Hello gulp');

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
  const rangeInputs = document.querySelectorAll('input[type="range"]');
  
  rangeInputs.forEach(function(rangeInput) {
    // Set initial value
    updateRangeProgress(rangeInput);
    
    // Update on input
    rangeInput.addEventListener('input', function() {
      updateRangeProgress(this);
    });
  });
});