// ============================================
// GameVault Admin - Helper Functions
// ============================================

// Auth guard
function requireAuth() {
  if (!GameDB.isLoggedIn()) {
    window.location.href = 'index.html';
  }
}

// Toast notifications
const AdminToast = {
  show(message, type = 'success', duration = 3000) {
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const container = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'toast-in 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

function createToastContainer() {
  const el = document.createElement('div');
  el.id = 'toast-container';
  el.className = 'admin-toast';
  document.body.appendChild(el);
  return el;
}

// Confirm delete
const AdminHelper = {
  confirmDelete(id, name, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-dialog';
    overlay.innerHTML = `
      <div class="confirm-box">
        <div class="confirm-icon">🗑️</div>
        <div class="confirm-title">DELETE GAME</div>
        <div class="confirm-text">Are you sure you want to delete "<strong>${name}</strong>"? This action cannot be undone.</div>
        <div class="confirm-actions">
          <button class="btn btn-secondary" onclick="this.closest('.confirm-dialog').remove()">Cancel</button>
          <button class="btn btn-danger" id="confirm-yes">Delete</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('#confirm-yes').addEventListener('click', () => {
      overlay.remove();
      onConfirm();
    });
  },

  confirmDeleteCat(id, name, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-dialog';
    overlay.innerHTML = `
      <div class="confirm-box">
        <div class="confirm-icon">🏷️</div>
        <div class="confirm-title">DELETE CATEGORY</div>
        <div class="confirm-text">Delete category "<strong>${name}</strong>"?</div>
        <div class="confirm-actions">
          <button class="btn btn-secondary" onclick="this.closest('.confirm-dialog').remove()">Cancel</button>
          <button class="btn btn-danger" id="confirm-yes">Delete</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('#confirm-yes').addEventListener('click', () => {
      overlay.remove();
      onConfirm();
    });
  }
};

// Tags input helper
const TagsInput = {
  init(containerId, inputId, initial = []) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    let tags = [...initial];

    function render() {
      // Remove old chips
      container.querySelectorAll('.tag-chip').forEach(el => el.remove());
      tags.forEach(tag => {
        const chip = document.createElement('span');
        chip.className = 'tag-chip';
        chip.innerHTML = `${tag}<span class="tag-chip-remove" data-tag="${tag}">✕</span>`;
        chip.querySelector('.tag-chip-remove').addEventListener('click', () => {
          tags = tags.filter(t => t !== tag);
          render();
        });
        container.insertBefore(chip, input);
      });
    }

    input.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ',') && input.value.trim()) {
        e.preventDefault();
        const val = input.value.trim().replace(',', '');
        if (val && !tags.includes(val)) {
          tags.push(val);
          render();
        }
        input.value = '';
      } else if (e.key === 'Backspace' && !input.value && tags.length) {
        tags.pop();
        render();
      }
    });

    container.addEventListener('click', () => input.focus());
    render();

    return { getTags: () => tags, setTags: (t) => { tags = [...t]; render(); } };
  }
};

// Platform chips helper
const PlatformChips = {
  init(containerId, initial = []) {
    const container = document.getElementById(containerId);
    const platforms = ['PC', 'PS5', 'Xbox', 'Switch', 'Mobile'];
    let selected = [...initial];

    function render() {
      container.innerHTML = '';
      platforms.forEach(p => {
        const chip = document.createElement('span');
        chip.className = 'platform-chip' + (selected.includes(p) ? ' selected' : '');
        chip.textContent = p;
        chip.addEventListener('click', () => {
          if (selected.includes(p)) selected = selected.filter(s => s !== p);
          else selected.push(p);
          render();
        });
        container.appendChild(chip);
      });
    }

    render();
    return { getPlatforms: () => selected, setPlatforms: (p) => { selected = [...p]; render(); } };
  }
};

// Game form modal
const GameForm = {
  open(game = null, onSave) {
    const isEdit = !!game;
    const cats = GameDB.getCategories();
    const catOptions = cats.map(c => `<option value="${c.name}" ${game?.category === c.name ? 'selected' : ''}>${c.name}</option>`).join('');

    const overlay = document.createElement('div');
    overlay.className = 'admin-modal-overlay';
    overlay.innerHTML = `
      <div class="admin-modal">
        <div class="admin-modal-header">
          <span class="admin-modal-title">${isEdit ? '✏️ Edit Game' : '➕ Add New Game'}</span>
          <button class="admin-modal-close" onclick="this.closest('.admin-modal-overlay').remove()">✕</button>
        </div>
        <div class="admin-modal-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Game Title *</label>
              <input type="text" class="form-input" id="f-title" placeholder="e.g. Shadow Realm Chronicles" value="${game?.title || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Developer *</label>
              <input type="text" class="form-input" id="f-dev" placeholder="Developer name" value="${game?.developer || ''}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Category *</label>
              <select class="form-select" id="f-cat">${catOptions}</select>
            </div>
            <div class="form-group">
              <label class="form-label">Status</label>
              <select class="form-select" id="f-status">
                <option value="active" ${game?.status==='active'?'selected':''}>Active</option>
                <option value="featured" ${game?.status==='featured'?'selected':''}>Featured</option>
                <option value="new" ${game?.status==='new'?'selected':''}>New</option>
                <option value="hot" ${game?.status==='hot'?'selected':''}>Hot</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Price ($) *</label>
              <input type="number" class="form-input" id="f-price" step="0.01" min="0" placeholder="49.99" value="${game?.price || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Rating (0-10) *</label>
              <input type="number" class="form-input" id="f-rating" step="0.1" min="0" max="10" placeholder="8.5" value="${game?.rating || ''}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Release Date</label>
              <input type="date" class="form-input" id="f-date" value="${game?.releaseDate || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Platforms</label>
              <div class="platform-chips" id="f-platforms"></div>
            </div>
          </div>
          <div class="form-row full">
            <div class="form-group">
              <label class="form-label">Tags (press Enter to add)</label>
              <div class="tags-input-container" id="f-tags-container">
                <input type="text" class="tags-input" id="f-tags-input" placeholder="Add tag...">
              </div>
            </div>
          </div>
          <div class="form-row full">
            <div class="form-group">
              <label class="form-label">Description *</label>
              <textarea class="form-textarea" id="f-desc" placeholder="Game description...">${game?.description || ''}</textarea>
            </div>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="btn btn-secondary" onclick="this.closest('.admin-modal-overlay').remove()">Cancel</button>
          <button class="btn btn-primary" id="save-game-btn">${isEdit ? '💾 Save Changes' : '➕ Add Game'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const tagsHelper = TagsInput.init('f-tags-container', 'f-tags-input', game?.tags || []);
    const platformHelper = PlatformChips.init('f-platforms', game?.platform || []);

    overlay.querySelector('#save-game-btn').addEventListener('click', () => {
      const title = document.getElementById('f-title').value.trim();
      const dev = document.getElementById('f-dev').value.trim();
      const desc = document.getElementById('f-desc').value.trim();
      const price = parseFloat(document.getElementById('f-price').value);
      const rating = parseFloat(document.getElementById('f-rating').value);

      if (!title || !dev || !desc || isNaN(price) || isNaN(rating)) {
        AdminToast.show('Please fill in all required fields', 'error');
        return;
      }

      const saved = GameDB.saveGame({
        ...(game || {}),
        title,
        developer: dev,
        description: desc,
        category: document.getElementById('f-cat').value,
        status: document.getElementById('f-status').value,
        price: Math.max(0, price),
        rating: Math.min(10, Math.max(0, rating)),
        releaseDate: document.getElementById('f-date').value,
        platform: platformHelper.getPlatforms(),
        tags: tagsHelper.getTags(),
      });

      overlay.remove();
      AdminToast.show(isEdit ? 'Game updated successfully!' : 'Game added successfully!', 'success');
      onSave && onSave(saved);
    });
  }
};

// Category form
const CatForm = {
  open(cat = null, onSave) {
    const isEdit = !!cat;
    const overlay = document.createElement('div');
    overlay.className = 'admin-modal-overlay';
    overlay.innerHTML = `
      <div class="admin-modal" style="max-width:440px">
        <div class="admin-modal-header">
          <span class="admin-modal-title">${isEdit ? '✏️ Edit Category' : '➕ New Category'}</span>
          <button class="admin-modal-close" onclick="this.closest('.admin-modal-overlay').remove()">✕</button>
        </div>
        <div class="admin-modal-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Name *</label>
              <input type="text" class="form-input" id="cf-name" placeholder="e.g. RPG" value="${cat?.name || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Icon (emoji) *</label>
              <input type="text" class="form-input" id="cf-icon" placeholder="🧙" value="${cat?.icon || ''}">
            </div>
          </div>
          <div class="form-row full">
            <div class="form-group">
              <label class="form-label">Color</label>
              <input type="color" class="form-input" id="cf-color" value="${cat?.color || '#6c63ff'}" style="height:44px;padding:.3rem .5rem;cursor:pointer">
            </div>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="btn btn-secondary" onclick="this.closest('.admin-modal-overlay').remove()">Cancel</button>
          <button class="btn btn-primary" id="save-cat-btn">${isEdit ? '💾 Save' : '➕ Add'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#save-cat-btn').addEventListener('click', () => {
      const name = document.getElementById('cf-name').value.trim();
      const icon = document.getElementById('cf-icon').value.trim();
      if (!name || !icon) {
        AdminToast.show('Name and icon are required', 'error');
        return;
      }
      const saved = GameDB.saveCategory({
        ...(cat || {}),
        name, icon,
        color: document.getElementById('cf-color').value,
      });
      overlay.remove();
      AdminToast.show(isEdit ? 'Category updated!' : 'Category added!', 'success');
      onSave && onSave(saved);
    });
  }
};

// Format helpers
function fmtNumber(n) {
  if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n/1000).toFixed(1) + 'K';
  return n;
}

function getGameGradient(cat) {
  const m = { RPG:'linear-gradient(135deg,#2d1b69,#9b59b6)', Action:'linear-gradient(135deg,#7f1d1d,#ff4757)', Strategy:'linear-gradient(135deg,#064e3b,#2ecc71)', Adventure:'linear-gradient(135deg,#78350f,#f39c12)', Shooter:'linear-gradient(135deg,#1e3a5f,#3498db)', Puzzle:'linear-gradient(135deg,#064e3b,#1abc9c)', Sports:'linear-gradient(135deg,#7c2d12,#e74c3c)', Horror:'linear-gradient(135deg,#0f172a,#374151)' };
  return m[cat] || 'linear-gradient(135deg,#1a1a2e,#6c63ff)';
}

function getGameIcon(cat) {
  const m = { RPG:'🧙‍♂️', Action:'⚔️', Strategy:'♟️', Adventure:'🗺️', Shooter:'🎯', Puzzle:'🧩', Sports:'⚽', Horror:'👻' };
  return m[cat] || '🎮';
}
