// ==================== RECIPE DATABASE ==================== //
const RECIPES_DATABASE = [
    {
        id: '1',
        name: 'Classic Chocolate Chip Cookies',
        origin: 'American',
        description: 'Delicious, chewy chocolate chip cookies with crispy edges. A timeless classic that never goes out of style.',
        servings: '24 cookies',
        dateCreated: '2024-01-15',
        ingredients: [
            '2 1/4 cups all-purpose flour',
            '1 tsp baking soda',
            '1 tsp salt',
            '1 cup (2 sticks) butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup packed brown sugar',
            '2 large eggs',
            '2 tsp vanilla extract',
            '2 cups chocolate chips'
        ],
        steps: [
            'Preheat oven to 375°F (190°C)',
            'In a small bowl, combine flour, baking soda and salt; set aside',
            'In a large mixer bowl, beat the softened butter and both sugars until creamy',
            'Add eggs and vanilla extract to butter mixture; beat well',
            'Gradually beat in flour mixture',
            'Stir in chocolate chips',
            'Drop rounded tablespoons of dough onto ungreased cookie sheets',
            'Bake for 9 to 12 minutes or until golden brown',
            'Cool on baking sheets for 2 minutes, then transfer to wire racks',
            'Enjoy warm with a glass of milk!'
        ]
    }
];

// ==================== RECIPE MANAGER ==================== //
class RecipeManager {
    constructor() {
        this.recipes = [...RECIPES_DATABASE];
        this.currentRecipeId = null;
    }

    getRecipe(id) {
        return this.recipes.find(r => r.id === id);
    }

    getAllRecipes() {
        return this.recipes;
    }
}

// ==================== UI MANAGER ==================== //
class UIManager {
    constructor(recipeManager) {
        this.recipeManager = recipeManager;
        this.setupEventListeners();
        this.renderDashboard();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('dashboardBtn').addEventListener('click', () => this.showView('dashboard'));
        document.getElementById('backBtn').addEventListener('click', () => this.showView('dashboard'));

        // Set today's date as default (if date input exists)
        const dateInput = document.getElementById('recipeDate');
        if (dateInput) {
            dateInput.valueAsDate = new Date();
        }
    }

    showView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        // Show selected view
        if (viewName === 'dashboard') {
            document.getElementById('dashboardView').classList.add('active');
            this.renderDashboard();
        } else if (viewName === 'recipe') {
            document.getElementById('recipeDetailView').classList.add('active');
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    renderDashboard() {
        const recipes = this.recipeManager.getAllRecipes();
        const grid = document.getElementById('recipesGrid');
        const countEl = document.getElementById('recipeCount');

        countEl.textContent = `${recipes.length} recipe${recipes.length !== 1 ? 's' : ''}`;

        if (recipes.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <div class="empty-state-icon">👩‍🍳</div>
                    <h2>No recipes yet</h2>
                    <p>Click "New Recipe" to add your first recipe!</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = recipes.map(recipe => `
            <div class="recipe-card">
                <div class="recipe-card-image">
                    ${this.getRecipeImageOrEmoji(recipe.name)}
                </div>
                <div class="recipe-card-content">
                    <h3 class="recipe-card-title">${this.escapeHtml(recipe.name)}</h3>
                    <div class="recipe-card-meta">
                        ${recipe.origin ? `<span class="recipe-meta-item">🌍 ${this.escapeHtml(recipe.origin)}</span>` : ''}
                        ${recipe.servings ? `<span class="recipe-meta-item">🍽️ ${this.escapeHtml(recipe.servings)}</span>` : ''}
                        ${recipe.dateCreated ? `<span class="recipe-meta-item">📅 ${this.formatDate(recipe.dateCreated)}</span>` : ''}
                    </div>
                    ${recipe.description ? `<p class="recipe-card-description">${this.escapeHtml(recipe.description.substring(0, 100))}${recipe.description.length > 100 ? '...' : ''}</p>` : ''}
                    <div class="recipe-card-footer">
                        <button class="btn-view" onclick="ui.viewRecipe('${recipe.id}')">View Recipe</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getRecipeImageOrEmoji(recipeName) {
        const imageName = recipeName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        // Try multiple image formats
        const formats = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
        
        return `<img src="images/${imageName}.jpg" alt="${this.escapeHtml(recipeName)}" 
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     onerror="loadImageWithFallback(this, '${imageName}', 1)" />`;
    }

    viewRecipe(id) {
        const recipe = this.recipeManager.getRecipe(id);
        if (!recipe) return;

        this.recipeManager.currentRecipeId = id;
        const detailDiv = document.getElementById('recipeDetail');
        
        const ingredientsHtml = recipe.ingredients.map(ing => `
            <div class="ingredient-item">
                <input type="checkbox" id="ing-${recipe.id}-${recipe.ingredients.indexOf(ing)}">
                <label for="ing-${recipe.id}-${recipe.ingredients.indexOf(ing)}" style="display: inline;">${this.escapeHtml(ing)}</label>
            </div>
        `).join('');

        const stepsHtml = recipe.steps.map((step, idx) => `
            <div class="step-item">
                <div class="step-number">${idx + 1}</div>
                <div class="step-content">${this.escapeHtml(step)}</div>
            </div>
        `).join('');

        detailDiv.innerHTML = `
        detailDiv.innerHTML = `
            <img src="images/${recipe.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg" 
                 alt="${this.escapeHtml(recipe.name)}" 
                 class="recipe-detail-banner"
                 onerror="loadDetailImageWithFallback(this, '${recipe.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}')" />
            
            <div class="recipe-detail-content">
                <div class="recipe-detail-header">
                    <div class="recipe-detail-title">
                        <h1>${this.escapeHtml(recipe.name)}</h1>
                    </div>
                </div>

                <div class="recipe-detail-meta">
                    ${recipe.origin ? `
                        <div class="meta-item">
                            <div class="meta-label">Origin</div>
                            <div class="meta-value">${this.escapeHtml(recipe.origin)}</div>
                        </div>
                    ` : ''}
                    ${recipe.servings ? `
                        <div class="meta-item">
                            <div class="meta-label">Servings</div>
                            <div class="meta-value">${this.escapeHtml(recipe.servings)}</div>
                        </div>
                    ` : ''}
                    ${recipe.dateCreated ? `
                        <div class="meta-item">
                            <div class="meta-label">Date Created</div>
                            <div class="meta-value">${this.formatDate(recipe.dateCreated)}</div>
                        </div>
                    ` : ''}
                </div>

                ${recipe.description ? `<div class="recipe-description">${this.escapeHtml(recipe.description)}</div>` : ''}

                <div class="recipe-section">
                    <h2>Ingredients</h2>
                    <div class="ingredients-list">
                        ${ingredientsHtml}
                    </div>
                </div>

                <div class="recipe-section">
                    <h2>Method</h2>
                    <div class="steps-list">
                        ${stepsHtml}
                    </div>
                </div>

                <div class="detail-actions">
                    <button class="btn-print-pdf" onclick="ui.exportToPDF('${recipe.id}')">📥 Export to PDF</button>
                    <button class="btn-print-pdf" style="background: linear-gradient(135deg, #667eea, #764ba2); flex: 0.5;" onclick="window.print()">🖨️ Print</button>
                </div>
            </div>
        `;

        this.showView('recipe');
    }

    exportToPDF(id) {
        const recipe = this.recipeManager.getRecipe(id);
        if (!recipe) return;

        if (typeof html2pdf === 'undefined') {
            alert('PDF export is not available. Please try printing instead.');
            return;
        }

        const element = document.getElementById('recipeDetail');
        const opt = {
            margin: 10,
            filename: `${recipe.name.replace(/\s+/g, '_')}_recipe.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };

        try {
            html2pdf().set(opt).from(element).save();
        } catch (err) {
            alert('Error exporting PDF. Please try printing instead.');
            console.error('PDF export error:', err);
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// ==================== INITIALIZATION ==================== //
const recipeManager = new RecipeManager();
const ui = new UIManager(recipeManager);

// ==================== HELPER FUNCTIONS ==================== //
// Image loading helper that tries multiple formats
function loadImageWithFallback(img, imageName, attemptNumber = 1) {
    const formats = ['jpeg', 'png', 'gif', 'webp', 'svg'];
    
    if (attemptNumber <= formats.length) {
        img.src = `images/${imageName}.${formats[attemptNumber - 1]}`;
        img.onerror = function() {
            loadImageWithFallback(this, imageName, attemptNumber + 1);
        };
    } else {
        // All formats failed, show emoji
        img.parentElement.innerHTML = '🍳';
        img.parentElement.style.fontSize = '3rem';
        img.parentElement.style.display = 'flex';
        img.parentElement.style.alignItems = 'center';
        img.parentElement.style.justifyContent = 'center';
    }
}

// Image loading helper for detail view
function loadDetailImageWithFallback(img, imageName, attemptNumber = 1) {
    const formats = ['jpeg', 'png', 'gif', 'webp', 'svg'];
    
    if (attemptNumber <= formats.length) {
        img.src = `images/${imageName}.${formats[attemptNumber - 1]}`;
        img.onerror = function() {
            loadDetailImageWithFallback(this, imageName, attemptNumber + 1);
        };
    } else {
        // All formats failed, show gradient background with emoji
        img.style.background = 'linear-gradient(135deg, #ff6b6b, #4ecdc4)';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.fontSize = '6rem';
        img.style.color = 'rgba(255,255,255,0.2)';
        img.innerHTML = '🍳';
    }
}
