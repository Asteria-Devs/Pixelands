// Wiki page functionality - Updated with new items
const items = [
  // Items from items-script.js (newer, more complete data)
  { name: 'Four Leaf Clover', description: 'Misc Item', obtained: 'Unobtainable', category: 'Material' },
  { name: 'Golden Chest', description: 'Gives 5000 gems on use', obtained: 'Obtained by purchasing in the shop for 5000 gems', category: 'Material' },
  { name: 'Diamond Ore', description: 'Uncommon. used to craft Diamond Blocks', obtained: 'Found when fishing', category: 'Material' },
  { name: 'Ruby Ore', description: 'Uncommon. used to craft Ruby Blocks', obtained: 'Breaking stone blocks', category: 'Material' },
  { name: 'White Lenses', description: 'Rare. Lenses that makes your eyes white.', obtained: 'Unobtainable. Was once purchaseable in the shop for 7,500 gems', category: 'Accessory' },
  { name: 'Rich Boy Glasses', description: 'Ultra Rare. Glasses which only rich people dare to wear!', obtained: 'Unobtainable. Was once purchaseable in the shop for 15,500 gems', category: 'Accessory' },
  { name: 'Devil Wings', description: 'Ultra Rare. Wings of the devil.', obtained: 'Unobtainable. Was once purchaseable in the shop for 25,500 gems.', category: 'Wings' },
  { name: 'Cat Hat', description: 'Rare. A sleepy cat sleeps on your head', obtained: 'Unobtainable. Was once purchaseable in the shop for 2,500 gems.', category: 'Accessory' },
  { name: 'Invisible Skin', description: 'Legendary. Makes you disappear? ', obtained: 'Obtained from doing the LEGENDARY QUEST.', category: 'Quest' },
  { name: 'Eye Of Rah', description: 'Legendary. Floating eye that sees everything!', obtained: 'Unobtainable. Was once obtainable from doing the LEGENDARY QUEST.', category: 'Quest' },
  { name: 'Golden Rod', description: 'Legendary. Use this rod to get extra benefits from fishing.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', category: 'Weapon' },
  { name: 'Golden Sword', description: 'Exclusive Item. Such a shiny sword, makes you stand out!', obtained: 'Crafted using 1 wooden sword and 250 lost coins.', category: 'Weapon' },
  { name: 'Bubble Wings', description: 'Ultra Rare. Bubbly wings that gives you a double jump ability!', obtained: 'Unobtainable. Was once obtained from easter eggs.', category: 'Wings' },
  { name: 'Sacred Katana', description: 'Legendary. So sharp it takes souls with one swipe', obtained: 'Could be obtained from the VIP spin back in June.', category: 'Weapon' },
  { name: 'Wooden Sword', description: 'Rare', obtained: 'Bought in the shop for 7,500 gems', category: 'Weapon' },
  { name: 'Black Afro', description: 'Rare. Hair so fluffy and big, makes you look attractive', obtained: 'Obtained from treasure chests.', category: 'Accessory' },
  { name: 'Diamond Pickaxe', description: 'Halloween item', obtained: 'Obtainable from breaking Diamond Blocks.', category: 'Weapon' },
  { name: 'Golden Pickaxe', description: '2 hits any block.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', category: 'Weapon' },
  { name: 'Ghost Pirate Skin', description: 'Ultra Rare. Makes you look so spooky!', obtained: 'Obtained from Treasure Chests and Brawlbuccaneer Pack.', category: 'Accessory' },
  { name: 'Zeus Eyes', description: 'Rare', obtained: 'Obtained from treasure chests.', category: 'Accessory' },
  { name: 'Flaming Eyes', description: 'Rare. Eyes that are on fire..', obtained: 'Obtained from treasure chests and phoenix packs!', category: 'Accessory' },
  { name: 'Ninja Mask', description: 'Halloween Item. Mask of the famous ninja!', obtained: 'Unobtainable. Once was purchaseable in the shop for 7,500 gems.', category: 'Accessory' },
  { name: 'Snake Lenses', description: 'Ultra Rare. Eyes of the snake!', obtained: 'unobtainable.', category: 'Accessory' },
  { name: 'Golden Shoes', description: 'No need for any other shoe.....', obtained: 'unobtainable', category: 'Accessory' },
  { name: 'Sea hair', description: 'Ultra Rare.', obtained: 'Obtained from the summer treasure chests.', category: 'Accessory' },
  { name: 'Jade Dragon', description: 'Legendary. The legendary Jade Dragon.', obtained: 'Could be bought for 75,000 gems in the shop. Now is obtainable from the VIP Wheel.', category: 'Wings' },
  { name: 'Golden Jade Dragon', description: 'Legendary. Golden variation of the legendary Jade Dragon.', obtained: 'Unobtainable. Once could be bought for 125,000 gems in the shop. Unobtainable now.', category: 'Wings' },
  { name: 'Night Owl Wings', description: 'Legenadry. Special owl wings, owned by the very best!', obtained: 'Unobtainable. Was a part of the IAP bundle 2025 May.', category: 'Wings' },
  { name: 'Pixie Wings', description: 'Rare. Wings taken from a Pixie.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Fairy Wings', description: 'Rare. Wings taken from a Fairy.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Rabbit Jetpack', description: 'Rare. Fly up in the sky with 2 Rabbits!', obtauned: 'Unobtainable. Easter item.', type: 'Wings'},












  
  // Blocks
  { name: 'Dirt Block', description: 'A basic dirt block', obtained: 'Basic Block found in worlds.', category: 'Block' },
  { name: 'Grass Block', description: 'Covering the upper Dirt Blocks', obtained: 'Found on top of worlds or drops from the Dirt Block', category: 'Block' },
  { name: 'Stone Block', description: 'Crafting item', obtained: 'Basic Block found in worlds', category: 'Block' },
  { name: 'Sand Block', description: 'Summer Block', obtained: 'Found in Summer Worlds', category: 'Block' },
  { name: 'Green Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Yellow Blocks + 50 Blue Blocks.', category: 'Block' },
  { name: 'Black Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 50 Magma Blocks.', category: 'Block' },
  { name: 'Blue Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 120 Water Blocks', category: 'Block' },
  { name: 'Orange Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 Yellow Blocks', category: 'Block' },
  { name: 'Red Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 50 Lava Blocks', category: 'Block' },
  { name: 'Purple Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 Blue Blocks', category: 'Block' },
  { name: 'Yellow Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Stone Blocks + 120 Sand Blocks', category: 'Block' },
  { name: 'Pink Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Red Blocks + 50 White Blocks', category: 'Block' },
  { name: 'Cyan Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Blue Blocks + 50 White Blocks', category: 'Block' },
  { name: 'Grey Block', description: 'Crafting Item', obtained: 'Can be crafted using the crafting table. 50 Black Blocks + 50 White Blocks', category: 'Block' },
  { name: 'Cave Background', description: 'A basic cave background', obtained: 'Found behind dirt', category: 'Background' },
  { name: 'Wood Background', description: 'Craftting Item', obtained: 'Can be crafted using the crafting tabble. 3 Grass + 5 Cave Backgrounds', type: 'Background'},

  // Additional items
  { name: 'Sign', description: 'Place to write things for all too see', obtained: 'Bought from the shop for 75 gems in the signs and doors pack', category: 'Item' },
  { name: 'Door', description: 'Wrench to open or close', obtained: 'Bought from the shop for 75 gems in the signs and doors pack', category: 'Item' },
  { name: 'Block Crate', description: 'Gives 1 random coloured block', obtained: 'Bought in the shop for 50 gems', category: 'Item' },
  { name: 'Crafting table block', description: 'With this table you can craft items', obtained: 'Bought for 50 gems in the shop', category: 'Block' }
];

// DOM elements
const container = document.getElementById('itemsContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const itemCountSpan = document.getElementById('itemCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');
const maxItems = 20;

// Utility functions
function updateStats() {
  itemCountSpan.textContent = items.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function determineCategory(itemName) {
  if (itemName.includes('Block')) return 'Block';
  if (itemName.includes('Wings')) return 'Wings';
  if (itemName.includes('Background')) return 'Background';
  return 'Item';
}

function createItemElement(item, index) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  const category = item.category || determineCategory(item.name);
  itemDiv.setAttribute('data-category', category);

  itemDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${item.name}</span>
      <div>
        <span class="category-tag ${category}">${category}</span>
        <span class="arrow">+</span>
      </div>
    </div>
    <div class="dropdown-content">
      <div class="item-image-container">
        <img src="images/${item.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.png" alt="${item.name}" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>No Image Available</div>'">
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
    const category = item.category || determineCategory(item.name);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

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
