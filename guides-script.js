
// Guides page functionality
const guides = [
  { 
    title: 'Best farmables for XP and Gems',
    shortTitle: 'Best Farmables',
    description: 'If you are looking for to earn Gems or XP by breaking the blocks, here are the best ones to farm - ranked by how many Gems or XP they can give you on average.',
    content: '• Best Farmable for Gems: <br><br>1. Magma Blocks - 0-10 Gems per block on average, 1,5K - 2,3K Per 250 Magma Blocks, <br> 2. Ruby Tiles - 0 to 9 Gems per block on average, 1.3K - 2K Gems per 250 Ruby Tiles, <br> 3. Jewel Blocks - 0 to 7 Gems per block on average, 1.2K - 1.7K Gems per 250 Jewel Blocks. <br> ~ Summary: Magma gives the highest Gem yield on average. Prioritize it for Gem grinding.<br><br> • Best farmable for XP: <br><br> 1. Jewel Blocks - 3 XP per Block, <br>2. Magma Blocks - 3 XP per Block,<br>3. Ruby Tiles - 3 XP per Block.<br> ~ Summary: All 3 farmables are great for XP, but prioritize farming Magma Blocks, as they give a lot of Gems and XP.',
    category: 'Beginner'
  },
  { 
    title: 'Building Your First World',
    shortTitle: 'First World',
    description: 'Learn the fundamentals of world building and construction techniques.',
    content: 'Building in Pixelands is one of the core activities. Lock you world to prevent others from taking it or griefing. Gather resources & build your first awesome world!',
    category: 'Building'
  },
  { 
    title: 'What is the best craftable for beginners?',
    shortTitle: 'Best Craftables',
    description: 'Learn what is the best craftable for begineers.',
    content: 'Starting off, we have color blocks. Materials for color blocks are mostly nature/natural blocks which can be found in worlds. The waiting time is not too long, color blocks usually sell for 10-50 blocks per world lock. Color blocks can also be used to craft other stuff such as glass blocks, glass pane and concrete blocks. It is an easy and fun way to start massing!',
    category: ['Crafting','Beginner']
  },
  { 
    title: 'How to earn your first World Lock:',
    shortTitle: 'First WL',
    description: 'Earn your first World Lock using this Guide!',
    content: 'Once you have created your first world, dig down till you find magma blocks. Magma blocks are a great farmable they also give a lot gems! Farm them till you have 3,000 gems and after that open Shop and buy your first World Lock!',
    category: ['Economy','Beginner']
  },
  { 
    title: 'How to earn your first Gold Lock:',
    shortTitle: 'First GL',
    description: 'Earn your first Gold Lock/100 World Locks using this Guide!',
    content: '• Stone Blocks are one the most important and demanded blocks in the whole game. You can easily find those in every world. People tend to buy Stone Blocks for a fair price (e.g. 25-40 Stone Blocks/1 World Lock) and you can earn many World Locks by selling Stone Blocks.<br><br>• Earn 5,000 Gems and purchase Golden Chest from the game shop and sell it to players 3 World Locks each! On Events they rises up to 5 World Locks per Chest! That\'s a big difference between spending 5,000 Gems to earn 3 World Locks instead of spending 9,000 Gems to Purchase 3 World Locks.',
    category: ['Economy','Advanced']
  },
  { 
    title: 'Block Placement Tips',
    shortTitle: 'Placement Tips',
    description: 'Essential tips for efficient and aesthetic block placement.',
    content: 'Try not to use same block over and over again for most aesthetics. Learn multiple block blending.',
    category: 'Building'
  },
  { 
    title: 'Understanding Item Rarity',
    shortTitle: 'Item Rarity',
    description: 'Learn about item rarity systems and how to obtain rare items.',
    content: 'Understand the different rarity tiers, where to find rare items, and how rarity affects item values and trading.',
    category: 'Beginner'
  }
];

// DOM elements
const container = document.getElementById('guidesContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const guideCountSpan = document.getElementById('guideCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Utility functions
function updateStats() {
  guideCountSpan.textContent = guides.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createGuideElement(guide, index) {
  const guideDiv = document.createElement('div');
  guideDiv.className = 'item';

  // Support multiple tags
  const tags = Array.isArray(guide.category) ? guide.category : [guide.category];
  guideDiv.setAttribute('data-category', tags.join(' '));

  // Generate tag HTML
  const tagHTML = tags.map(tag => `<span class="category-tag ${tag}">${tag}</span>`).join('');

  // Use shortTitle for display, full title in dropdown header
  const displayTitle = guide.shortTitle || guide.title;

  guideDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${displayTitle}</span>
      <div class="item-tags">
        ${tagHTML}
      </div>
      <span class="arrow">+</span>
    </div>
    <div class="dropdown-content">
      <h4 style="color: #3498db; margin-bottom: 0.5rem; font-size: 1.1rem;">${guide.title}</h4>
      <p><strong>Description:</strong><br>${guide.description}</p>
      <p><strong>Guide Content:</strong><br>${guide.content}</p>
    </div>
  `;

  return guideDiv;
}

function renderGuides() {
  container.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredGuides = guides.filter(guide => {
    if (!guide.title) return false;

    const matchesSearch = guide.title.toLowerCase().includes(searchTerm) || 
                         guide.description.toLowerCase().includes(searchTerm) || 
                         searchTerm === '';
    const guideCategories = Array.isArray(guide.category) ? guide.category : [guide.category];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => guideCategories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  if (filteredGuides.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No guides found matching your search.</p>';
    return;
  }

  filteredGuides.forEach((guide, index) => {
    const guideElement = createGuideElement(guide, index);
    container.appendChild(guideElement);
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

  // Close all other dropdowns NWO
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

// Event listener/s
searchInput.addEventListener('input', renderGuides);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderGuides);
});

// Initializing page... silly gos
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderGuides();
});
