
// FAQ page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners for FAQ dropdowns
  document.querySelectorAll('.item-header').forEach(header => {
    header.addEventListener('click', function() {
      const itemDiv = this.closest('.item');
      const arrow = this.querySelector('.arrow');
      const isActive = itemDiv.classList.contains('active');

      // Close all the other dropdowns
      document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.arrow').textContent = '+';
      });

      // Toggle current dropdown
      if (!isActive) {
        itemDiv.classList.add('active');
        arrow.textContent = '−';
      }
    });
  });
});
