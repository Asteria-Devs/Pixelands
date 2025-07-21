
// Guides page functionality
const guides = [
  { 
    title: 'Getting Started in Pixelands', 
    description: 'A comprehensive beginner guide to help new players start their journey in Pixelands.',
    content: 'Welcome to Pixelands! This guide will help you understand the basics of the game, including how to move, break blocks, place items, and interact with the world.',
    category: 'Beginner'
  },
  { 
    title: 'Building Your First World', 
    description: 'Learn the fundamentals of world building and construction techniques.',
    content: 'Building in Pixelands is one of the core activities. Lock you world to prevent others from taking it or griefing. Gather resources & build your first awesome world!',
    category: 'Building'
  },
  { 
    title: 'Crafting Guide', 
    description: 'Master the art of crafting awesome items.',
    content: 'Crafting allows you to create new items from raw materials. Learn recipes, optimal crafting strategies, and how to obtain rare materials.',
    category: 'Crafting'
  },
  { 
    title: 'How to earn your first World Lock:', 
    description: 'Earn your first World Lock using this Guide!',
    content: 'Once you have created your first world, dig down till you find magma blocks. Magma blocks are a great farmable they also give a lot gems! Farm them till you have 3,000 gems and after that open Shop and buy your first World Lock!',
    category: 'Economy'
  },
  { 
    title: 'How to earn your first Gold Lock:', 
    description: 'Earn your first Gold Lock/100 World Locks using this Guide!',
    content: 'Stone Blocks are one the most important and demanded blocks in the whole game. You can easily find those in every world. People tend to buy Stone Blocks for a fair price (e.g. 25-40 Stone Blocks/1 World Lock) and you can earn many World Locks by selling Stone Blocks.',
    category: 'Economy'
  },
  { 
    title: 'Block Placement Tips', 
    description: 'Essential tips for efficient and aesthetic block placement.',
    content: 'Try not to use same block over and over again for most aesthetics. Learn multiple block blending.',
    category: 'Building'
  },
  { 
    title: 'Understanding Item Rarity', 
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
  guideDiv.setAttribute('data-category', guide.category);

  guideDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${guide.title}</span>
      <div>
        <span class="category-tag ${guide.category}">${guide.category}</span>
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
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
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(guide.category);

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

// Event listener/s
searchInput.addEventListener('input', renderGuides);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderGuides);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderGuides();
});
