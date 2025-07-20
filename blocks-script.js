// Blocks page functionality
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

// Utility functions
function updateStats() {
  blockCountSpan.textContent = blocks.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createBlockElement(block, index) {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'item';
  blockDiv.setAttribute('data-category', block.type);

  blockDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${block.name}</span>
      <div>
        <span class="category-tag ${block.type}">${block.type}</span>
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${block.name.toLowerCase().replace(/\s+/g, '_')}.png" alt="${block.name}" onerror="this.style.display='none'">
      </div>
      <p><strong>Description:</strong><br>${block.description || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${block.obtained || '(Not yet filled)'}</p>
    </div>
  `;

  return blockDiv;
}

function renderBlocks() {
  container.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredBlocks = blocks.filter(block => {
    if (!block.name) return false;

    const matchesSearch = block.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(block.type);

    return matchesSearch && matchesCategory;
  });

  if (filteredBlocks.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No blocks found matching your criteria.</p>';
    return;
  }

  filteredBlocks.forEach((block, index) => {
    const blockElement = createBlockElement(block, index);
    container.appendChild(blockElement);
  });

  // Add click event listeners for dropdowns
  document.querySelectorAll('.item-header').forEach(header => {
    header.addEventListener('click', toggleDropdown);
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

// Event listeners
searchInput.addEventListener('input', renderBlocks);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderBlocks);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderBlocks();
});
