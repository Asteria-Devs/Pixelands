// Tools page stuff :P
document.addEventListener('DOMContentLoaded', function() {
  // Handle clicks on tool dropdowns
  document.querySelectorAll('.item-header').forEach(header => {
    // Skip locked tools cause they dont work yet
    if (header.querySelector('.lock-icon')) {
      header.style.cursor = 'not-allowed';
      return;
    }

    header.addEventListener('click', function() {
      const itemDiv = this.closest('.item');
      const arrow = this.querySelector('.arrow');
      const isActive = itemDiv.classList.contains('active');

      // Close other dropdowns first
      document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('active');
        const itemArrow = item.querySelector('.arrow');
        if (itemArrow) itemArrow.textContent = '+';
      });

      // Toggle this
      if (!isActive && arrow) {
        itemDiv.classList.add('active');
        arrow.textContent = '−';
      }
    });
  });
});

// Fish gem calculator stuff
function calculateAdvancedFishGems() {
  const result = document.getElementById('fishResult');
  const wlRate = parseInt(document.getElementById('wlRate').value);

  if (isNaN(wlRate) || wlRate <= 0) {
    result.innerHTML = '<span style="color: #e74c3c;">Bruh enter a valid WL rate!</span>';
    return;
  }

  // Fish data with their gem values
  const fishData = [
    { id: 'fish1', gems: 20, name: 'Shrimp' },
    { id: 'fish2', gems: 20, name: 'Carp' },
    { id: 'fish3', gems: 35, name: 'Starfish' },
    { id: 'fish4', gems: 40, name: 'Crab' },
    { id: 'fish5', gems: 50, name: 'Clownfish' },
    { id: 'fish6', gems: 75, name: 'Electric Eel' },
    { id: 'fish7', gems: 75, name: 'Octopus' },
    { id: 'fish8', gems: 100, name: 'Bluefin Tuna' },
    { id: 'fish9', gems: 125, name: 'Pink Salmon' }
  ];

  let totalGems = 0;
  let breakdown = [];
  let hasValidInput = false;

  // Go through each fish and do the math
  fishData.forEach(fish => {
    const amount = parseInt(document.getElementById(fish.id).value) || 0;
    if (amount > 0) {
      hasValidInput = true;
      const fishTotalGems = amount * fish.gems;
      totalGems += fishTotalGems;
      breakdown.push({
        name: fish.name,
        amount: amount,
        gemsEach: fish.gems,
        total: fishTotalGems
      });
    }
  });

  if (!hasValidInput) {
    result.innerHTML = '<span style="color: #e74c3c;">Yo put in some fish numbers!</span>';
    return;
  }

  // Convert gems to world locks and gold locks
  const totalWLs = totalGems / wlRate;
  const goldLocks = Math.floor(totalWLs / 100);
  const remainingWLs = totalWLs % 100;

  // Build the breakdown display
  let breakdownHTML = '';
  if (breakdown.length > 0) {
    breakdownHTML = '<div class="fish-breakdown">';
    breakdownHTML += '<div class="breakdown-title">Breakdown:</div>';
    breakdown.forEach((item) => {
      const imageFileName = item.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      breakdownHTML += `<div class="breakdown-item">
        <span class="breakdown-item-info">
          <div class="breakdown-item-image">
            <img src="images/${imageFileName}.webp" alt="${item.name}" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>${item.name.charAt(0)}</div>'">
          </div>
          ${item.name}: ${item.amount.toLocaleString()} × ${item.gemsEach} gems
        </span>
        <span class="breakdown-item-total">${item.total.toLocaleString()} gems</span>
      </div>`;
    });
    breakdownHTML += '</div>';
  }

  // Lock icons for the display
  const wlIcon = '<img src="images/world_lock.webp" class="lock-icon" onerror="this.outerHTML=\'🔒\'">';
  const glIcon = '<img src="images/gold_lock.webp" class="lock-icon" onerror="this.outerHTML=\'🟨\'">';

  result.innerHTML = `
    <div class="fish-result-container">
      <div class="total-gems-display">
        <img src="images/total_gems.webp" class="gems-icon" alt="Total Gems" onerror="this.outerHTML='💎'">
        Total Gems: ${totalGems.toLocaleString()}
      </div>
      <div class="world-locks-display">
        ${wlIcon} World Locks: ${remainingWLs.toFixed(2)} WLs
      </div>
      ${goldLocks > 0 ? `<div class="gold-locks-display">
        ${glIcon} Gold Locks: ${goldLocks} GLs
      </div>` : ''}
      <div class="rate-display">
        Rate: ${wlRate.toLocaleString()} gems per WL
      </div>
      ${goldLocks > 0 ? `<div class="swap-info">
        (Auto-swapped: ${goldLocks * 100} WLs → ${goldLocks} GLs)
      </div>` : ''}
    </div>
    ${breakdownHTML}
  `;
}

// Avatar planner stuff for later
const itemValues = {
  // Hat stuff
  'cat_hat': { value: 2500, rarity: 'Rare' },
  'snake_crown': { value: 15000, rarity: 'Ultra Rare' },

  // Hair stuff
  'black_afro': { value: 5000, rarity: 'Rare' },
  'sea_hair': { value: 8000, rarity: 'Ultra Rare' },

  // Face stuff
  'white_lenses': { value: 7500, rarity: 'Rare' },
  'rich_boy_glasses': { value: 15500, rarity: 'Ultra Rare' },
  'zeus_eyes': { value: 6000, rarity: 'Rare' },
  'flaming_eyes': { value: 7000, rarity: 'Rare' },
  'ninja_mask': { value: 7500, rarity: 'Rare' },
  'snake_lenses': { value: 20000, rarity: 'Ultra Rare' },
  'snorkle': { value: 4000, rarity: 'Rare' },

  // Weapon stuff
  'golden_rod': { value: 50000, rarity: 'Legendary' },
  'golden_sword': { value: 30000, rarity: 'Exclusive' },
  'sacred_katana': { value: 75000, rarity: 'Legendary' },
  'wooden_sword': { value: 7500, rarity: 'Rare' },
  'diamond_pickaxe': { value: 15000, rarity: 'Rare' },
  'golden_pickaxe': { value: 40000, rarity: 'Legendary' },
  'flames_of_the_deep': { value: 60000, rarity: 'Legendary' },
  'solstice_slicer': { value: 8000, rarity: 'Rare' },

  // Wing stuff
  'night_owl_wings': { value: 100000, rarity: 'Legendary' },
  'devil_wings': { value: 25500, rarity: 'Ultra Rare' },
  'bubble_wings': { value: 30000, rarity: 'Ultra Rare' },
  'pixie_wings': { value: 12500, rarity: 'Rare' },
  'fairy_wings': { value: 12500, rarity: 'Rare' },
  'da_vinci_wings': { value: 150000, rarity: 'Legendary' },
  'seraphim_wings': { value: 200000, rarity: 'Legendary' },
  'skeleton_wings': { value: 500000, rarity: 'Legendary' },

  // Back stuff
  'eye_of_rah': { value: 250000, rarity: 'Legendary' },
  'emerald_dragon': { value: 75000, rarity: 'Legendary' },
  'golden_dragon': { value: 125000, rarity: 'Legendary' },
  'rabbit_rocket': { value: 20000, rarity: 'Rare' },
  'steam_cloak': { value: 15000, rarity: 'Rare' },

  // Shoe stuff
  'golden_shoes': { value: 50000, rarity: 'Legendary' }
};

function updateSetStats() {
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];
  let totalValue = 0;
  let itemCount = 0;
  let rarities = {};

  // Count up all the items and their values
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select && select.value) {
      itemCount++;
      const item = itemValues[select.value];
      if (item) {
        totalValue += item.value;
        rarities[item.rarity] = (rarities[item.rarity] || 0) + 1;
      }
    }
  });

  // Update the display if elements exist
  const itemCountEl = document.getElementById('itemCount');
  const setValueEl = document.getElementById('setValue');
  const rarityBreakdownEl = document.getElementById('rarityBreakdown');

  if (itemCountEl) itemCountEl.textContent = itemCount;
  if (setValueEl) setValueEl.textContent = totalValue.toLocaleString();

  const rarityText = Object.entries(rarities)
    .map(([rarity, count]) => `${count} ${rarity}`)
    .join(' ') || 'None';
  if (rarityBreakdownEl) rarityBreakdownEl.textContent = rarityText;
}

function saveSet() {
  const setData = {};
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Get all the selected items
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select && select.value) {
      setData[slotId] = select.value;
    }
  });

  localStorage.setItem('pixelandsAvatarSet', JSON.stringify(setData));
  showSetResult('Set saved successfully!', '#27ae60');
}

function shareSet() {
  const setData = {};
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Get items for sharing
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select && select.value) {
      setData[slotId] = select.value;
    }
  });

  const setCode = btoa(JSON.stringify(setData));
  navigator.clipboard.writeText(`Pixelands Set: ${setCode}`).then(() => {
    showSetResult('Set code copied! Share it!', '#3498db');
  }).catch(() => {
    showSetResult(`Set code: ${setCode}`, '#3498db');
  });
}

function clearSet() {
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Clear all selections
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select) {
      select.value = '';
    }
  });

  updateSetStats();
  showSetResult('Set cleared!', '#e74c3c');
}

function showSetResult(message, color) {
  const result = document.getElementById('setResult');
  if (result) {
    result.textContent = message;
    result.style.backgroundColor = color;
    result.style.display = 'block';

    // Hide after 3 seconds
    setTimeout(() => {
      result.style.display = 'none';
    }, 3000);
  }
}

// Setup everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Fish calculator initialized');

  // Event listeners for fish inputs :P
  for (let i = 1; i <= 9; i++) {
    const input = document.getElementById(`fish${i}`);
    if (input) {
      input.addEventListener('input', calculateAdvancedFishGems);
    }
  }

  // Event listener for WL rate input
  const wlRateInput = document.getElementById('wlRate');
  if (wlRateInput) {
    wlRateInput.addEventListener('input', calculateAdvancedFishGems);
  }

  // Event listeners for set planner selects
  const setSlots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];
  setSlots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select) {
      select.addEventListener('change', updateSetStats);
    }
  });

  // Start with fresh stats
  updateSetStats();
});
