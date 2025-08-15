// Blocks page functionality
const blocks = [
  { name: 'World Lock', description: 'Lock your worlds with this & use it as a currency to buy/sell items!', obtained: 'Bought from the shop for 3,000 Gems.', type: 'Shop' },
  { name: 'Gold Lock', description: 'Lock your worlds with this & use it as a currency to buy/sell items!', obtained: 'Bought from the shop for 300,000 Gems.', type: 'Shop' },
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
  { name: 'Wood Background', description: 'Craftting Item', obtained: 'Can be crafted using the crafting table. 3 Grass + 5 Cave Backgrounds', type: 'Crafted'},
  { name: 'Cave Background', description: 'A basic cave background', obtained: 'Found behind dirt', type: 'Natural' },
  { name: 'Black Background', description: 'A black background', obtained: 'Can be crafted using the crafting table', type: 'Crafted' },
  { name: 'Lava Block', description: 'A damage dealing block', obtained: 'Basic Block found in worlds', type: 'Natural'},
  { name: 'Magma Block', description: 'Found underground of worlds', obtained: 'Basic Block found in worlds', type: 'Natural'},
  { name: 'Legendary Dirt', description: 'A legendary, golden variant of basic Dirt Block', obtained: 'Obtained from breaking Dirt Blocks', type: 'Natural'},
  { name: 'Ruby Block', description: 'Shiny, farmable block', obtained: 'Obtained from crafting', type: 'Crafted'},
  { name: 'Gold Block', description: 'Shiny, collectable block', obtained: 'Obtained from crafting', type: 'Crafted'},
  { name: 'Diamond Block', description: 'Shiny, rewarding block', obtained: 'Obtained from crafting', type: 'Crafted'},
  { name: 'Treasure Chest', description: 'Summer Gacha, Get different kinds of Summer Items!', obtained: 'Found in summer worlds.', type: 'Props' },
  { name: 'Easter Eggs', description: 'Easter Gacha, get different kinds of Easter and Old Timey Items!', obtained: 'Unobtainable. Was once found on top of Worlds and from breaking Dirt Blocks.', type: 'Props' },
  { name: 'Canopic Chest', description: 'Pre-summer Gacha, Get different kinds of Egyptian Items!', obtained: 'Unobtainable. Was once purchaseable from the shop.', type: 'Props' },
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

function highlightUpdateKeywords(text) {
  if (!text) return text;

  return text
    .replace(/Easter Update/gi, '<a href="updates.html#easter-update" style="color: #e74c3c; font-weight: bold; text-decoration: underline;">Easter Update</a>')
    .replace(/Summer Update/gi, '<a href="updates.html#summer-update" style="color: #f39c12; font-weight: bold; text-decoration: underline;">Summer Update</a>')
    .replace(/Egyptian Update/gi, '<a href="updates.html#egyptian-update" style="color: #e67e22; font-weight: bold; text-decoration: underline;">Egyptian Update</a>');
}

function createBlockElement(block, index) {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'item';

  // Support multiple tags
  const tags = Array.isArray(block.type) ? block.type : [block.type];
  blockDiv.setAttribute('data-category', tags.join(' '));

  // Generate tag HTML
  const tagHTML = tags.map(tag => `<span class="category-tag" data-category="${tag}">${tag}</span>`).join('');

  blockDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${block.name}</span>
      <div class="item-tags">
        ${tagHTML}
      </div>
      <span class="arrow">+</span>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${block.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.webp" alt="${block.name}" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>No Image Available</div>'">
      </div>
      <p><strong>Description:</strong><br>${highlightUpdateKeywords(block.description) || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${highlightUpdateKeywords(block.obtained) || '(Not yet filled)'}</p>
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
    const blockTypes = Array.isArray(block.type) ? block.type : [block.type];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => blockTypes.includes(cat));

    return matchesSearch && matchesCategory;
  });

  if (filteredBlocks.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No blocks found matching your criteria.</p>';
    return;
  }

  // Sort blocks based on whether filters are applied
  if (selectedCategories.length === 0) {
    // No filters selected - sort by tag priority, then alphabetically within each tag
    const tagOrder = ['Shop', 'Natural', 'Crafted', 'Decorative', 'Functional', 'Props', 'Misc'];

    filteredBlocks.sort((a, b) => {
      const aTypes = Array.isArray(a.type) ? a.type : [a.type];
      const bTypes = Array.isArray(b.type) ? b.type : [b.type];

      // Get the highest priority tag for each item
      const aPriority = Math.min(...aTypes.map(type => tagOrder.indexOf(type) >= 0 ? tagOrder.indexOf(type) : 999));
      const bPriority = Math.min(...bTypes.map(type => tagOrder.indexOf(type) >= 0 ? tagOrder.indexOf(type) : 999));

      // If same priority, sort alphabetically
      if (aPriority === bPriority) {
        return a.name.localeCompare(b.name);
      }

      return aPriority - bPriority;
    });
  } else {
    // Filters are selected - sort alphabetically only
    filteredBlocks.sort((a, b) => a.name.localeCompare(b.name));
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
