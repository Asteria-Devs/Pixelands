
// FAQ page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners for FAQ dropdowns
  document.querySelectorAll('.item-header').forEach(header => {
    header.addEventListener('click', function() {
      const itemDiv = this.closest('.item');
      const arrow = this.querySelector('.arrow');
      const isActive = itemDiv.classList.contains('active');

      // Toggle current dropdown only
      if (isActive) {
        itemDiv.classList.remove('active');
        arrow.textContent = '+';
      } else {
        itemDiv.classList.add('active');
        arrow.textContent = '−';
      }
    });
  });
});
