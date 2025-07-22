
// Blocks page functionality with performance optimizations
const blocks = [
  { name: 'Dirt Block', description: 'A basic dirt block', obtained: 'Basic Block found in worlds.', type: 'Natural' },
  { name: 'Grass', description: 'Covering the upper Dirt Blocks', obtained: 'Found on top of worlds or drops from the Dirt Block', type: 'Natural' },
  { name: 'Stone Block', description: 'Crafting item', obtained: 'Basic Block found in worlds', type: 'Natural' },
  { name: 'Sand Block', description: 'Summer Block', obtained: 'Found in Summer Worlds', type: 'Natural' },
  { name: 'Green Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Yellow Blocks + 50 Blue Blocks.', type: 'Crafted' },
  { name: 'Black Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 50 Magma Blocks.', type: 'Crafted' },
  { name: 'Blue Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 120 Water Blocks', type: 'Crafted' },
  { name: 'Orange Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 Yellow Blocks', type: 'Crafted' },
  { name: 'Red Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 50 Lava Blocks', type: 'Crafted' },
  { name: 'Purple Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 Blue Blocks', type: 'Crafted' },
  { name: 'Yellow Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 120 Sand Blocks', type: 'Crafted' },
  { name: 'Pink Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 White Blocks', type: 'Crafted' },
  { name: 'Cyan Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Blue Blocks + 50 White Blocks', type: 'Crafted' },
  { name: 'Grey Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Black Blocks + 50 White Blocks', type: 'Crafted' },
  { name: 'Wood Background', description: 'Craftting Item', obtained: 'Can be crafted using the crafting tabble. 3 Grass + 5 Cave Backgrounds', type: 'Crafted'},
  { name: 'Cave Background', description: 'A basic cave background', obtained: 'Found behind dirt', type: 'Natural' }
];

// DOM elements
const container = document.getElementById('blocksContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const blockCountSpan = document.getElementById('blockCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Performance optimization: debounce search input
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy image loading
function setupLazyImageLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Utility functions
function updateStats() {
  blockCountSpan.textContent = blocks.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createBlockElement(block, index) {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'item';

  // Support multiple tags
  const tags = Array.isArray(block.type) ? block.type : [block.type];
  blockDiv.setAttribute('data-category', tags.join(' '));

  // Generate tag HTML
  const tagHTML = tags.map(tag => `<span class="category-tag ${tag}">${tag}</span>`).join('');

  blockDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${block.name}</span>
      <div class="item-tags">
        ${tagHTML}
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img data-src="images/${block.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.webp" alt="${block.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>No Image Available</div>'">
      </div>
      <p><strong>Description:</strong><br>${block.description || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${block.obtained || '(Not yet filled)'}</p>
    </div>
  `;

  return blockDiv;
}

// Virtual scrolling for large lists
function renderBlocks() {
  const fragment = document.createDocumentFragment();
  
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredBlocks = blocks.filter(block => {
    if (!block.name) return false;

    const matchesSearch = block.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const blockTypes = Array.isArray(block.type) ? block.type : [block.type];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => blockTypes.includes(cat));

    return matchesSearch && matchesCategory;
  });

  if (filteredBlocks.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No blocks found matching your criteria.</p>';
    return;
  }

  filteredBlocks.forEach((block, index) => {
    const blockElement = createBlockElement(block, index);
    fragment.appendChild(blockElement);
  });

  container.innerHTML = '';
  container.appendChild(fragment);

  // Setup lazy loading for new images
  setupLazyImageLoading();

  // Add click event listeners for dropdowns
  requestAnimationFrame(() => {
    document.querySelectorAll('.item-header').forEach(header => {
      header.addEventListener('click', toggleDropdown);
    });
  });
}

function toggleDropdown(event) {
  const itemDiv = event.currentTarget.closest('.item');
  const arrow = itemDiv.querySelector('.arrow');
  const isActive = itemDiv.classList.contains('active');

  // Close all other dropdowns
  document.querySelectorAll('.item').forEach(item => {
    item.classList.remove('active');
    item.querySelector('.arrow').textContent = '+';
  });

  // Toggle current dropdown
  if (!isActive) {
    itemDiv.classList.add('active');
    arrow.textContent = '−';
  }
}

// Debounced search
const debouncedRender = debounce(renderBlocks, 300);

// Event listeners
searchInput.addEventListener('input', debouncedRender);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderBlocks);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderBlocks();
});
