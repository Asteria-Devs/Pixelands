// Staff page functionality
const staff = [
  // Sycotik Studios
  { 
    name: 'Stone', 
    role: 'Sycotik Studios', 
    description: 'Developer of Pixelands',
    responsibilities: 'Game development and core programming',
    joinDate: '2024'
  },
  { 
    name: 'Flames', 
    role: 'Sycotik Studios', 
    description: 'General Manager',
    responsibilities: 'Project management and team coordination',
    joinDate: '2025'
  },
  { 
    name: 'Neo', 
    role: 'Sycotik Studios', 
    description: 'General Administrator',
    responsibilities: 'General administration and oversight',
    joinDate: '2024'
  },
  { 
    name: 'Bimn', 
    role: 'Sycotik Studios', 
    description: 'Lead Artist',
    responsibilities: 'Art direction and visual design',
    joinDate: '2025'
  },
  { 
    name: 'Congrats', 
    role: 'Sycotik Studios', 
    description: 'Community Manager',
    responsibilities: 'Community management and player engagement',
    joinDate: '2025'
  },
  // Game Staff
  { 
    name: 'FyXD', 
    role: 'Game Staff', 
    description: 'In-game Administrator',
    responsibilities: 'In-game administration, player support, server management',
    joinDate: '2024'
  },
  { 
    name: 'Plat', 
    role: 'Game Staff', 
    description: 'Game staff member',
    responsibilities: 'Player assistance, game moderation, community support',
    joinDate: '2025'
  },
  { 
    name: 'Devil', 
    role: 'Game Staff', 
    description: 'Game staff member',
    responsibilities: 'Player assistance, game moderation, community support',
    joinDate: '2025'
  },
  // Discord Staff
  { 
    name: 'Freeze', 
    role: 'Discord Staff', 
    description: 'Discord community moderator',
    responsibilities: 'Discord moderation, community management, chat support',
    joinDate: '2025'
  },
  { 
    name: 'Asteria', 
    role: 'Discord Staff', 
    description: 'Discord community moderator and music specialist',
    responsibilities: 'Discord moderation, music management, community events',
    joinDate: '2025'
  },
  // Artists
  { 
    name: 'Awto', 
    role: 'Artist', 
    description: 'Game artist creating visual content',
    responsibilities: 'Art creation, visual design, game assets',
    joinDate: '2025'
  },
  { 
    name: 'Qwerty', 
    role: 'Artist', 
    description: 'Game artist creating visual content',
    responsibilities: 'Art creation, visual design, game assets',
    joinDate: '2025'
  }
];

// DOM elements
const container = document.getElementById('staffContainer');
const searchInput = document.getElementById('search');
const filterCheckboxes = document.querySelectorAll('.filter');
const staffCountSpan = document.getElementById('staffCount');
const lastUpdatedSpan = document.getElementById('lastUpdated');

// Utility functions
function updateStats() {
  staffCountSpan.textContent = staff.length;
  const today = new Date().toLocaleDateString();
  lastUpdatedSpan.textContent = today;
}

function createStaffElement(member, index) {
  const staffDiv = document.createElement('div');
  staffDiv.className = 'item';
  staffDiv.setAttribute('data-category', member.role);

  staffDiv.innerHTML = `
    <div class="item-header" data-index="${index}">
      <span class="item-title">${member.name}</span>
      <div class="item-tags">
        <span class="category-tag ${member.role}">${member.role}</span>
      </div>
      <span class="arrow">+</span>
    </div>
    <div class="dropdown-content">
      <p><strong>Role:</strong><br>${member.role}</p>
      <p><strong>Description:</strong><br>${member.description}</p>
      <p><strong>Responsibilities:</strong><br>${member.responsibilities}</p>
      <p><strong>Joined:</strong><br>${member.joinDate}</p>
    </div>
  `;

  return staffDiv;
}

function renderStaff() {
  container.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filteredStaff = staff.filter(member => {
    if (!member.name) return false;

    const matchesSearch = member.name.toLowerCase().includes(searchTerm) || 
                         member.role.toLowerCase().includes(searchTerm) || 
                         searchTerm === '';
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(member.role);

    return matchesSearch && matchesCategory;
  });

  if (filteredStaff.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No staff members found matching your criteria.</p>';
    return;
  }

  filteredStaff.forEach((member, index) => {
    const staffElement = createStaffElement(member, index);
    container.appendChild(staffElement);
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
searchInput.addEventListener('input', renderStaff);

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderStaff);
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  updateStats();
  renderStaff();
});
