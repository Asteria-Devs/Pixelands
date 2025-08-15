// Items page functionality
const items = [
  { name: 'Blue Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Green Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Basic Lure', description: 'Used for fishing', obtained: 'Obtainable from the lure pack', type: 'Misc'},
  { name: 'Golden Chest', description: 'Gives 5000 gems on use', obtained: 'Obtained by purchasing in the shop for 5000 gems', type: 'Misc' },
  { name: 'Diamond Ore', description: 'Uncommon. Used to craft Diamond Blocks', obtained: 'Found when fishing', type: 'Misc' },
  { name: 'Ruby Ore', description: 'Uncommon. Used to craft Ruby Blocks', obtained: 'Breaking stone blocks', type: 'Misc' },
  { name: 'Gold Ore', description: 'Uncommon. Used to craft Gold fragments', obtained: 'From fishing', type: 'Misc' },
  { name: 'Diamond Fragment', description: 'Uncommon. Used to craft Diamond Blocks', obtained: 'From crafting', type: 'Misc'},
  { name: 'Ruby Fragment', description: 'Uncommon. Used to craft Ruby Blocks', obtained: 'From crafting', type: 'Misc'},
  { name: 'Gold Fragment', description: 'Uncommon. Used to craft Gold Blocks', obtained: 'From crafting', type: 'Misc'},
  { name: 'Stick', description: 'Used to craft various items!', obtained: 'Obtained from breaking wood blocks', type: 'Misc' },
  { name: 'Stretched Canvas', description: 'Material used for the Legendary Da Vinci Wings Quest!', obtained: 'Obtainable from the LEGENDARY QUEST', type: 'Misc'},
  { name: 'Wingframe', description: 'Material used for the Legendary Da Vinci Wings Quest!', obtained: 'Unobtainable Was obtained from crafting.', type: 'Misc' },
  { name: 'Night Owl Wings', description: 'Legendary. Special owl wings, owned by the very best!', obtained: 'Unobtainable. Was a part of the IAP bundle 2025 May.', type: 'Wings' },
  { name: 'White Lenses', description: 'Rare. Lenses that makes your eyes white.', obtained: 'Unobtainable. Was once purchaseable in the shop for 7,500 gems', type: 'Face Gear' },
  { name: 'Rich Boy Glasses', description: 'Ultra Rare. Glasses which only rich people dare to wear!', obtained: 'Unobtainable. Was once purchaseable in the shop for 15,500 gems', type: 'Face Gear' },
  { name: 'Devil Wings', description: 'Ultra Rare. Wings of the devil.', obtained: 'Unobtainable. Was once purchaseable in the shop for 25,500 gems.', type: 'Wings' },
  { name: 'Cat Hat', description: 'Rare. A sleepy cat sleeps on your head', obtained: 'Unobtainable. Was once purchaseable in the shop for 2,500 gems.', type: 'Hats' },
  { name: 'Invisible Skin', description: 'Legendary. Makes you disappear? ', obtained: 'Obtained from doing the LEGENDARY QUEST.', type: 'Quest' },
  { name: 'Eye Of Rah', description: 'Legendary. Floating eye that sees everything!', obtained: 'Unobtainable. Was once obtainable from doing the LEGENDARY QUEST.', type: ['Quest', 'Back Items']},
  { name: 'Golden Rod', description: 'Legendary. Use this tod to get extra benefits from fishing.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', type: 'Weapon' },
  { name: 'Golden Sword', description: 'Exclusive Item. Such a shiny sword, makes you stand out!', obtained: 'Crafted using 1 wooden sword and 250 lost coins.', type: 'Weapon' },
  { name: 'Bubble Wings', description: 'Ultra Rare. Bubbly wings that gives you a double jump ability!', obtained: 'Unobtainable. Was once obtained from easter eggs.', type: 'Wings' },
  { name: 'Sacred Katana', description: 'Legendary. So sharp it takes souls with one swipe', obtained: 'Could be obtained from the VIP spin back in June.', type: 'Weapon' },
  { name: 'Wooden Sword', description: 'Rare', obtained: 'Bought in the shop for 7,500 gems', type: 'Weapon' },
  { name: 'Black Afro', description: 'Rare. Hair so fluffy and big, makes you look attractive', obtained: 'Obtained from treasure chests.', type: 'Hair' },
  { name: 'Diamond Pickaxe', description: 'Shiny, blue and a hard pickaxe', obtained: 'Obtainable from breaking Diamond Blocks.', type: 'Weapon' },
  { name: 'Golden Pickaxe', description: '2 hits any block.', obtained: 'Unobtainable. Was once obtainable from easter eggs.', type: 'Weapon' },
  { name: 'Ghost Pirate Skin', description: 'Ultra Rare. Makes you look so spooky!', obtained: 'Obtained from Treasure Chests and Brawlbuccaneer Pack.', type: 'Accessory' },
  { name: 'Zeus Eyes', description: 'Rare', obtained: 'Obtained from treasure chests.', type: 'Face Gear' },
  { name: 'Flaming Eyes', description: 'Rare. Eyes that are on fire..', obtained: 'Obtained from treasure chests and phoenix packs!', type: 'Face Gear' },
  { name: 'Ninja Mask', description: 'Halloween Item. Mask of the famous ninja!', obtained: 'Unobtainable. Once was purchaseable in the shop for 7,500 gems.', type: 'Face Gear' },
  { name: 'Snake Lenses', description: 'Ultra Rare. Eyes of the snake!', obtained: 'unobtainable.', type: 'Face Gear' },
  { name: 'Golden Shoes', description: 'No need for any other shoe.....', obtained: 'unobtainable', type: 'Shoes' },
  { name: 'Sea hair', description: 'Ultra Rare.', obtained: 'Obtained from the summer treasure chests.', type: 'Hair' },
  { name: 'Emerald Dragon', description: 'Legendary. The legendary Jade Dragon.', obtained: 'Could be bought for 75,000 gems in the shop. Now is obtainable from the VIP Wheel.', type: 'Back Items' },
  { name: 'Pixie Wings', description: 'Rare. Wings taken from a Pixie.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Golden Dragon', description: 'Legendary. Golden variation of the legendary Jade Dragon.', obtained: 'Unobtainable. Once could be bought for 125,000 gems in the shop.', type: 'Back Items' },
  { name: 'Fairy Wings', description: 'Rare. Wings taken from a Fairy.', obtained: 'Unobtainable. Could be bought for 12,500 gems', type: 'Wings'},
  { name: 'Rabbit Rocket', description: 'Rare. Fly up in the sky with 2 Rabbits!', obtained: 'Unobtainable. Easter item.', type: 'Back Items'},
  { name: 'Da Vinci Wings', description: 'Legendary. These wings make you look like an inventor!', obtained: 'Obtainable from doing the LEGENDARY QUEST.', type: ['Quest', 'Wings']},
  { name: 'Seraphim Wings', description: 'Legendary. Radiant Angelic Flight.', obtained: 'Unobtainable, were once obtainable from the LEGENDARY QUEST.', type: ['Quest', 'Wings']},
  { name: 'Flames of the Deep', description: 'Legendary. Flaming blade with a blue fire.', obtained: 'Obtained. Through the summer IAP  07/25', type: 'Weapon'},
  { name: 'Skeleton Wings', description: 'Legendary. Halloween Item', obtained: 'Currently one of a wing, only owner is ASTERIA ', type: 'Wings' },
  { name: 'Solstice Slicer', description: 'Rare. Celestical.', obtained: 'Obtainable from beach world treasure chests.', type: 'Weapon'},
  { name: 'Snake Crown', description: 'Ultra Rare. Be the ruler of all snakes!', obtained: 'Unobtainable. From Canopic Chests', type: 'Hats'},
  { name: 'Snorkle', description: 'Rare. Comes in many differnt colours.', obtained: 'Obtainable from beach world treasure chests.', type: 'Face Gear'},
  { name: 'Steam Cloak', description: 'Rare, so old and fluffy, makes you look mysterious!', obtained: 'Unobtainable. Was once obtained from the Easter Eggs', type: 'Back Items'},
  { name: 'Phoenix Wings', description: 'Legendary. These wings are on FIRE!', obtained: 'Unobtainable. Was obtainable from the Phoenix Pack Summer 2025.', type : 'Wings'},
  { name: 'Scruffy Black Hair', description: 'NA', obtained: 'Can be obtained from the shop by buying the Scruffy Hair Pack for 50.000 gems.', type: 'Hair' },
  { name: 'Black Pigtails', description: 'NA', obtained: 'Can be obtained as common drop by breaking Jack-o-Lanterns on Halloween Event.', type: 'Hair' },
  { name: 'Black Short Hair', description: 'NA', obtained: 'Can be obtained from the shop by buying the Basic Hair Pack for 15.000 gems.', type: 'Hair' },
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

function highlightUpdateKeywords(text) {
  if (!text) return text;

  return text
    .replace(/Easter Update/gi, '<a href="updates.html#easter-update" style="color: #e74c3c; font-weight: bold; text-decoration: underline;">Easter Update</a>')
    .replace(/Summer Update/gi, '<a href="updates.html#summer-update" style="color: #f39c12; font-weight: bold; text-decoration: underline;">Summer Update</a>')
    .replace(/Egyptian Update/gi, '<a href="updates.html#egyptian-update" style="color: #e67e22; font-weight: bold; text-decoration: underline;">Egyptian Update</a>');
}

function createItemElement(item, index) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';

  // Support multiple tags
  const tags = Array.isArray(item.type) ? item.type : [item.type];
  itemDiv.setAttribute('data-category', tags.join(' '));

  // Generate tag HTML
  const tagHTML = tags.map(tag => `<span class="category-tag" data-category="${tag}">${tag}</span>`).join('');

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
      <p><strong>Description:</strong><br>${highlightUpdateKeywords(item.description) || '(Not yet filled)'}</p>
      <p><strong>How it's obtained:</strong><br>${highlightUpdateKeywords(item.obtained) || '(Not yet filled)'}</p>
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
 const wearableCategories = ['Weapon', 'Wings', 'Shirts', 'Pants', 'Shoes', 'Hair', 'Hats', 'Face Gear', 'Back Gear', 'Back Items', 'Quest'];

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

  // Sort items based on whether filters are applied
  if (selectedCategories.length === 0) {
    // No filters selected - sort by tag priority, then alphabetically within each tag
    const tagOrder = ['Wings', 'Weapon', 'Accessory', 'Shirts', 'Pants', 'Shoes', 'Hair', 'Hats', 'Face Gear', 'Back Items', 'Quest', 'Misc'];

    filteredItems.sort((a, b) => {
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
    filteredItems.sort((a, b) => a.name.localeCompare(b.name));
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
