// Tools page - let's make this thing work! 🛠️
document.addEventListener('DOMContentLoaded', function() {
  // Handle clicks on tool dropdowns (ez pz)
  document.querySelectorAll('.item-header').forEach(header => {
    // Skip locked tools - ain't nobody got time for that
    if (header.querySelector('.lock-icon')) {
      header.style.cursor = 'not-allowed';
      return;
    }

    header.addEventListener('click', function() {
      const itemDiv = this.closest('.item');
      const arrow = this.querySelector('.arrow');
      const isActive = itemDiv.classList.contains('active');

      // Close other dropdowns (one at a time, folks!)
      document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('active');
        const itemArrow = item.querySelector('.arrow');
        if (itemArrow) itemArrow.textContent = '+';
      });

      // Toggle this bad boy
      if (!isActive && arrow) {
        itemDiv.classList.add('active');
        arrow.textContent = '−';
      }
    });
  });
});

// Fish gem calc - time to make bank! 💰
function calculateAdvancedFishGems() {
  const result = document.getElementById('fishResult');
  const wlRate = parseInt(document.getElementById('wlRate').value);

  if (isNaN(wlRate) || wlRate <= 0) {
    result.innerHTML = '<span style="color: #e74c3c;">Bruh, enter a valid WL rate!</span>';
    return;
  }

  // Fish data (with auto image magikk mwehehehe ✨)
  const fishData = [
    { id: 'fish1', gems: 20, name: 'Shrimp' },
    { id: 'fish2', gems: 20, name: 'Carp' },
    { id: 'fish3', gems: 35, name: 'Starfish' },
    { id: 'fish4', gems: 40, name: 'Crab' },
    { id: 'fish5', gems: 50, name: 'Clownfish' },
    { id: 'fish6', gems: 75, name: 'Electric Eel' },
    { id: 'fish7', gems: 75, name: 'Octopus' },
    { id: 'fish8', gems: 100, name: 'Bluefin Tuna' },
    { id: 'fish9', gems: 125, name: 'Pink Salmon' },
  ];

  let totalGems = 0;
  let breakdown = [];
  let hasValidInput = false;

  // Crunch the numbers for each fishy 🐟
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
    result.innerHTML = '<span style="color: #e74c3c;">Yo, put in some fish numbers!</span>';
    return;
  }

  // Convert to locks (stonks time! 📈)
  const totalWLs = totalGems / wlRate;
  const goldLocks = Math.floor(totalWLs / 100);
  const remainingWLs = totalWLs % 100;

  // Build the fancy breakdown display
  let breakdownHTML = '';
  if (breakdown.length > 0) {
    breakdownHTML = '<div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #555;">';
    breakdownHTML += '<div style="color: #bdc3c7; font-size: 0.9rem; margin-bottom: 0.5rem;">Breakdown:</div>';
    breakdown.forEach((item) => {
      const imageFileName = item.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
      breakdownHTML += `<div style="color: #95a5a6; font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
        <span style="display: flex; align-items: center;">
          <img src="images/${imageFileName}.webp" style="width: 16px; height: 16px; margin-right: 0.3rem; border-radius: 2px;" onerror="this.style.display='none'">
          ${item.name}: ${item.amount.toLocaleString()} × ${item.gemsEach} gems
        </span>
        <span>${item.total.toLocaleString()} gems</span>
      </div>`;
    });
    breakdownHTML += '</div>';
  }

  // Lock icons (cause we fancy like that 💅)
  const wlIcon = '<img src="images/world_lock.webp" style="width: 16px; height: 16px; margin-right: 0.2rem;" onerror="this.innerHTML=\'🔒\'">';
  const glIcon = '<img src="images/gold_lock.webp" style="width: 16px; height: 16px; margin-right: 0.2rem;" onerror="this.innerHTML=\'🟨\'">';

  result.innerHTML = `
    <div style="text-align: center;">
      <div style="color: #27ae60; font-size: 1.2rem; margin-bottom: 0.5rem;">
        💎 Total Gems: ${totalGems.toLocaleString()}
      </div>
      <div style="color: #f39c12; font-size: 1.1rem; margin-bottom: 0.3rem; display: flex; align-items: center; justify-content: center;">
        ${wlIcon} World Locks: ${remainingWLs.toFixed(2)} WLs
      </div>
      ${goldLocks > 0 ? `<div style="color: #ffd700; font-size: 1.1rem; margin-bottom: 0.3rem; display: flex; align-items: center; justify-content: center;">
        ${glIcon} Gold Locks: ${goldLocks} GLs
      </div>` : ''}
      <div style="color: #3498db; font-size: 0.9rem;">
        Rate: ${wlRate.toLocaleString()} gems per WL
      </div>
      ${goldLocks > 0 ? `<div style="color: #95a5a6; font-size: 0.8rem; margin-top: 0.3rem;">
        (Auto-swapped: ${goldLocks * 100} WLs → ${goldLocks} GLs)
      </div>` : ''}
    </div>
    ${breakdownHTML}
  `;
}

// Avatar planner - dress up time! 👕
const itemValues = {
  // Hats
  'cat_hat': { value: 2500, rarity: 'Rare' },
  'snake_crown': { value: 15000, rarity: 'Ultra Rare' },

  // Hair
  'black_afro': { value: 5000, rarity: 'Rare' },
  'sea_hair': { value: 8000, rarity: 'Ultra Rare' },

  // Face Gear
  'white_lenses': { value: 7500, rarity: 'Rare' },
  'rich_boy_glasses': { value: 15500, rarity: 'Ultra Rare' },
  'zeus_eyes': { value: 6000, rarity: 'Rare' },
  'flaming_eyes': { value: 7000, rarity: 'Rare' },
  'ninja_mask': { value: 7500, rarity: 'Rare' },
  'snake_lenses': { value: 20000, rarity: 'Ultra Rare' },
  'snorkle': { value: 4000, rarity: 'Rare' },

  // Weapons
  'golden_rod': { value: 50000, rarity: 'Legendary' },
  'golden_sword': { value: 30000, rarity: 'Exclusive' },
  'sacred_katana': { value: 75000, rarity: 'Legendary' },
  'wooden_sword': { value: 7500, rarity: 'Rare' },
  'diamond_pickaxe': { value: 15000, rarity: 'Rare' },
  'golden_pickaxe': { value: 40000, rarity: 'Legendary' },
  'flames_of_the_deep': { value: 60000, rarity: 'Legendary' },
  'solstice_slicer': { value: 8000, rarity: 'Rare' },

  // Wings
  'night_owl_wings': { value: 100000, rarity: 'Legendary' },
  'devil_wings': { value: 25500, rarity: 'Ultra Rare' },
  'bubble_wings': { value: 30000, rarity: 'Ultra Rare' },
  'pixie_wings': { value: 12500, rarity: 'Rare' },
  'fairy_wings': { value: 12500, rarity: 'Rare' },
  'da_vinci_wings': { value: 150000, rarity: 'Legendary' },
  'seraphim_wings': { value: 200000, rarity: 'Legendary' },
  'skeleton_wings': { value: 500000, rarity: 'Legendary' },

  // Back Items
  'eye_of_rah': { value: 250000, rarity: 'Legendary' },
  'emerald_dragon': { value: 75000, rarity: 'Legendary' },
  'golden_dragon': { value: 125000, rarity: 'Legendary' },
  'rabbit_rocket': { value: 20000, rarity: 'Rare' },
  'steam_cloak': { value: 15000, rarity: 'Rare' },

  // Shoes
  'golden_shoes': { value: 50000, rarity: 'Legendary' }
};

function updateSetStats() {
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];
  let totalValue = 0;
  let itemCount = 0;
  let rarities = {};

  // Count up the drip 💧
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

  // Update the flex display
  document.getElementById('itemCount').textContent = itemCount;
  document.getElementById('setValue').textContent = totalValue.toLocaleString();

  const rarityText = Object.entries(rarities)
    .map(([rarity, count]) => `${count} ${rarity}`)
    .join(', ') || 'None';
  document.getElementById('rarityBreakdown').textContent = rarityText;
}

function saveSet() {
  const setData = {};
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Grab all the gear
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select && select.value) {
      setData[slotId] = select.value;
    }
  });

  localStorage.setItem('pixelandsAvatarSet', JSON.stringify(setData));
  showSetResult('Set saved successfully! 💾', '#27ae60');
}

function shareSet() {
  const setData = {};
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Pack it up for sharing
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select && select.value) {
      setData[slotId] = select.value;
    }
  });

  const setCode = btoa(JSON.stringify(setData));
  navigator.clipboard.writeText(`Pixelands Set: ${setCode}`).then(() => {
    showSetResult('Set code copied! Share the drip! 🔗', '#3498db');
  }).catch(() => {
    showSetResult(`Set code: ${setCode}`, '#3498db');
  });
}

function clearSet() {
  const slots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];

  // Yeet everything
  slots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select) {
      select.value = '';
    }
  });

  updateSetStats();
  showSetResult('Set cleared! 🗑️', '#e74c3c');
}

function showSetResult(message, color) {
  const result = document.getElementById('setResult');
  result.textContent = message;
  result.style.backgroundColor = color;
  result.style.display = 'block';

  // Auto-hide after 3 secs
  setTimeout(() => {
    result.style.display = 'none';
  }, 3000);
}

// Boot up everything when page loads 🚀
document.addEventListener('DOMContentLoaded', function() {
  console.log('Fish calculator initialized');

  // Hook up fish inputs
  for (let i = 1; i <= 10; i++) {
    const input = document.getElementById(`fish${i}`);
    if (input) {
      input.addEventListener('input', calculateAdvancedFishGems);
    }
  }

  // WL rate listener
  const wlRateInput = document.getElementById('wlRate');
  if (wlRateInput) {
    wlRateInput.addEventListener('input', calculateAdvancedFishGems);
  }

  // Set planner listeners
  const setSlots = ['hatSlot', 'hairSlot', 'faceSlot', 'weaponSlot', 'wingsSlot', 'backSlot', 'shoesSlot'];
  setSlots.forEach(slotId => {
    const select = document.getElementById(slotId);
    if (select) {
      select.addEventListener('change', updateSetStats);
    }
  });

  // Start fresh
  updateSetStats();
});
