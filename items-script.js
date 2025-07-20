// Items page functionality
const items = [
  { name: 'Diamond Sword', description: 'A powerful weapon', obtained: 'Crafted', type: 'Weapon' },
  { name: 'Angel Wings', description: 'Allows flight', obtained: 'Quest reward', type: 'Wings' },
  { name: 'Magic Pickaxe', description: 'Breaks blocks faster', obtained: 'Crafted', type: 'Weapon' },
  { name: 'Fire Wings', description: 'Red wings with fire effect', obtained: 'Shop', type: 'Wings' },
  { name: 'Golden Crown', description: 'Royal headwear', obtained: 'Special event', type: 'Accessory' }
];

// DOM elements
const container = document.getElementById('itemsContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const itemCountSpan = document.getElementById('itemCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Utility functions
function updateStats() {
  itemCountSpan.textContent = items.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createItemElement(item, index) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  itemDiv.setAttribute('data-category', item.type);

  itemDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${item.name}</span>
      <div>
        <span class="category-tag ${item.type}">${item.type}</span>
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${item.name.toLowerCase().replace(/\s+/g, '_')}.png" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <p><strong>Description:</strong><br>${item.description || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${item.obtained || '(Not yet filled)'}</p>
    </div>
  `;

  return itemDiv;
}

function renderItems() {
  container.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredItems = items.filter(item => {
    if (!item.name) return false;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.type);

    return matchesSearch && matchesCategory;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No items found matching your criteria.</p>';
    return;
  }

  filteredItems.forEach((item, index) => {
    const itemElement = createItemElement(item, index);
    container.appendChild(itemElement);
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
searchInput.addEventListener('input', renderItems);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderItems);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderItems();
});
const items = [
  { name: 'Four Leaf Clover', description: 'Misc Item', obtained: 'Unobtainable', type: 'Material' },
  { name: 'Golden Chest', description: 'Gives 5000 gems on use', obtained: 'Obtained by purchasing in the shop for 5000 gems', type: 'Material' },
  { name: 'Diamond Ore', description: 'Uncommon. used to craft Diamond Blocks', obtained: 'Found when fishing', type: 'Material' },
  { name: 'Ruby Ore', description: 'Uncommon. used to craft Ruby Blocks', obtained: 'Breaking stone blocks', type: 'Material' },
  { name: 'Devil Wings', description: 'Ultra Rare. Part Of the Devil Set', obtained: 'Could be bought for ', type: 'Wings' },
  { name: 'White Lenses', description: 'Rare. Lenses that makes your eyes white.', obtained: 'Unobtainable. Was once purchaseable in the shop for 7,500 gems', type: 'Accessory' },
  { name: 'Rich Boy Glasses', description: 'Ultra Rare. Glasses which only rich people dare to wear!', obtained: 'Unobtainable. Was once purchaseable in the shop for 15,500 gems', type: 'Accessory' },
  { name: 'Devil Wings', description: 'Ultra Rare. Wings of the devil.', obtained: 'Unobtainable. Was once purchaseable in the shop for 25,500 gems.', type: 'Wings' },
  { name: 'Cat Hat', description: 'Rare. A sleepy cat sleeps on your head', obtained: 'Unobtainable. Was once purchaseable in the shop for 2,500 gems.', type: 'Accessory' },
  { name: 'Invisible Skin', description: 'Legendary. Makes you disappear? ', obtained: 'Obtained from doing the LEGENDARY QUEST.', type: 'Quest' },
  { name: 'Eye Of Rah', description: 'Legendary. Floating eye that sees everything!', obtained: 'Unobtainable. Was once obtainable from doing the LEGENDARY QUEST.', type: 'Quest' },
  { name: 'Golden Rod', description: 'Legendary. Use this tod to get extra benefits from fishing.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', type: 'Weapon' },
  { name: 'Golden Sword', description: 'Exclusive Item. Such a shiny sword, makes you stand out!', obtained: 'Crafted using 1 wooden sword and 250 lost coins.', type: 'Weapon' },
  { name: 'Bubble Wings', description: 'Ultra Rare. Bubbly wings that gives you a double jump ability!', obtained: 'Unobtainable. Was once obtained from easter eggs.', type: 'Weapon' },
  { name: 'Sacred Katana', description: 'Legendary. So sharp it takes souls with one swipe', obtained: 'Could be obtained from the VIP spin back in June.', type: 'Weapon' },
  { name: 'Wooden Sword', description: 'Rare', obtained: 'Bought in the shop for 7,500 gems', type: 'Weapon' },
  { name: 'Black Afro', description: 'Rare. Hair so fluffy and big, makes you look attractive', obtained: 'Obtained from treasure chests.', type: 'Accessory' },
  { name: 'Diamond Pickaxe', description: 'Halloween item', obtained: 'Obtainable from breaking Diamond Blocks.', type: 'Weapon' },
  { name: 'Golden Pickaxe', description: '2 hits any block.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', type: 'Weapon' },
  { name: 'Ghost Pirate Skin', description: 'Ultra Rare. Makes you look so spooky!', obtained: 'Obtained from Treasure Chests and Brawlbuccaneer Pack.', type: 'Accessory' },
  { name: 'Zeus Eyes', description: 'Rare', obtained: 'Obtained from treasure chests.', type: 'Accessory' },
  { name: 'Flaming Eyes', description: 'Rare. Eyes that are on fire..', obtained: 'Obtained from treasure chests and phoenix packs!', type: 'Accessory' },
  { name: 'Ninja Mask', description: 'Halloween Item. Mask of the famous ninja!', obtained: 'Unobtainable. Once was purchaseable in the shop for 7,500 gems.', type: 'Accessory' },
  { name: 'Snake Lenses', description: 'Ultra Rare. Eyes of the snake!', obtained: 'unobtainable.', type: 'Accessory' },
  { name: 'Golden Shoes', description: 'No need for any other shoe.....', obtained: 'unobtainable', type: 'Accessory' },
  { name: 'Sea hair', description: 'Ultra Rare.', obtained: 'Obtained from the summer treasure chests.', type: 'Accessory' },
  { name: 'Jade Dragon', description: 'Legendary. The legendary Jade Dragon.', obtained: 'Could be bought for 75,000 gems in the shop. Now is obtainable from the VIP Wheel.', type: 'Wings' },
  { name: 'Golden Jade Dragon', description: 'Legendary. Golden variation of the legendary Jade Dragon.', obtained: 'Unobtainable. Once could be bought for 125,000 gems in the shop. Unobtainable now.', type: 'Wings' }
];

// DOM elements
const container = document.getElementById('itemsContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const itemCountSpan = document.getElementById('itemCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Utility functions
function updateStats() {
  itemCountSpan.textContent = items.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createItemElement(item, index) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  itemDiv.setAttribute('data-category', item.type);

  itemDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${item.name}</span>
      <div>
        <span class="category-tag ${item.type}">${item.type}</span>
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${item.name.toLowerCase().replace(/\s+/g, '_')}.png" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <p><strong>Description:</strong><br>${item.description || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${item.obtained || '(Not yet filled)'}</p>
    </div>
  `;

  return itemDiv;
}

function renderItems() {
  container.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredItems = items.filter(item => {
    if (!item.name) return false;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.type);

    return matchesSearch && matchesCategory;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No items found matching your criteria.</p>';
    return;
  }

  filteredItems.forEach((item, index) => {
    const itemElement = createItemElement(item, index);
    container.appendChild(itemElement);
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
searchInput.addEventListener('input', renderItems);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderItems);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderItems();
});
