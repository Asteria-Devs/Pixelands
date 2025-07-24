// Items page functionality
const items = [
  { name: 'Four Leaf Clover', description: 'Misc Item', obtained: 'Unobtainable', type: 'Misc' },
  { name: 'Blue Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Green Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Basic Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Golden Chest', description: 'Gives 5000 gems on use', obtained: 'Obtained by purchasing in the shop for 5000 gems', type: 'Misc' },
  { name: 'Diamond Ore', description: 'Uncommon. used to craft Diamond Blocks', obtained: 'Found when fishing', type: 'Misc' },
  { name: 'Ruby Ore', description: 'Uncommon. used to craft Ruby Blocks', obtained: 'Breaking stone blocks', type: 'Misc' },
  { name: 'Stick', description: 'Used to craft various items!', obtained: 'Obtained from breaking wood blocks', type: 'Misc' },
  { name: 'Stretched Canvas', description: 'Material used for the Legendary Da Vinci Wings Quest!', obtained: 'Obtainable from the LEGENDARY QUEST', type: 'Misc'},
  { name: 'Wingframe', description: 'Material used for the Legendary Da Vinci Wings Quest!', obtained: 'Unobtainable Was obtained from crafting.', type: 'Misc' },
  { name: 'Night Owl Wings', description: 'Legendary. Special owl wings, owned by the very best!', obtained: 'Unobtainable. Was a part of the IAP bundle 2025 May.', type: 'Wings' },
  { name: 'White Lenses', description: 'Rare. Lenses that makes your eyes white.', obtained: 'Unobtainable. Was once purchaseable in the shop for 7,500 gems', type: 'Accessory' },
  { name: 'Rich Boy Glasses', description: 'Ultra Rare. Glasses which only rich people dare to wear!', obtained: 'Unobtainable. Was once purchaseable in the shop for 15,500 gems', type: 'Accessory' },
  { name: 'Devil Wings', description: 'Ultra Rare. Wings of the devil.', obtained: 'Unobtainable. Was once purchaseable in the shop for 25,500 gems.', type: 'Wings' },
  { name: 'Cat Hat', description: 'Rare. A sleepy cat sleeps on your head', obtained: 'Unobtainable. Was once purchaseable in the shop for 2,500 gems.', type: 'Accessory' },
  { name: 'Invisible Skin', description: 'Legendary. Makes you disappear? ', obtained: 'Obtained from doing the LEGENDARY QUEST.', type: 'Quest' },
  { name: 'Eye Of Rah', description: 'Legendary. Floating eye that sees everything!', obtained: 'Unobtainable. Was once obtainable from doing the LEGENDARY QUEST.', type: ['Quest', 'Back Gear']},
  { name: 'Golden Rod', description: 'Legendary. Use this tod to get extra benefits from fishing.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', type: 'Weapon' },
  { name: 'Golden Sword', description: 'Exclusive Item. Such a shiny sword, makes you stand out!', obtained: 'Crafted using 1 wooden sword and 250 lost coins.', type: 'Weapon' },
  { name: 'Bubble Wings', description: 'Ultra Rare. Bubbly wings that gives you a double jump ability!', obtained: 'Unobtainable. Was once obtained from easter eggs.', type: 'Wings' },
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
  { name: 'Pixie Wings', description: 'Rare. Wings taken from a Pixie.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Golden Jade Dragon', description: 'Legendary. Golden variation of the legendary Jade Dragon.', obtained: 'Unobtainable. Once could be bought for 125,000 gems in the shop.', type: 'Wings' },
  { name: 'Fairy Wings', description: 'Rare. Wings taken from a Fairy.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Rabbit Rocket', description: 'Rare. Fly up in the sky with 2 Rabbits!', obtained: 'Unobtainable. Easter item.', type: 'Back Gear'},
  { name: 'Da Vinci Wings', description: 'Legendary. These wings make you look like an inventor!', obtained: 'Obtainable from doing the LEGENDARY QUEST.', type: ['Quest', 'Wings']},
  { name: 'Seraphim Wings', description: 'Legendary. Radiant Angelic Flight.', obtained: 'Unobtainable, were once obtainable from the LEGENDARY QUEST.', type: ['Quest', 'Wings']}
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

  // Support multiple tags
  const tags = Array.isArray(item.type) ? item.type : [item.type];
  itemDiv.setAttribute('data-category', tags.join(' '));

  // Generate tag HTML
  const tagHTML = tags.map(tag => `<span class="category-tag ${tag}">${tag}</span>`).join('');

  itemDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${item.name}</span>
      <div class="item-tags">
        ${tagHTML}
      </div>
      <span class="arrow">+</span>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${item.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.webp" alt="${item.name}" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>No Image Available</div>'">
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

  // Define wearable categories
  const wearableCategories = ['Weapon', 'Wings', 'Shirts', 'Pants', 'Shoes', 'Headgear', 'Back Gear', 'Quest'];

  const filteredItems = items.filter(item => {
    if (!item.name) return false;

    const itemTypes = Array.isArray(item.type) ? item.type : [item.type];

    // Only show wearables and quest items
    const isWearable = itemTypes.some(type => wearableCategories.includes(type));
    if (!isWearable) return false;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || searchTerm === '';
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => itemTypes.includes(cat));

    return matchesSearch && matchesCategory;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No wearables found matching your criteria.</p>';
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
