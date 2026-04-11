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
    },
    {
    id: '2',
    name: 'Simple Chicken Paella',
    origin: 'Spanish',
    description: 'A simple, flavour-packed chicken paella with smoky spices, tender rice, and a fresh lemon finish. Perfect for a family dinner.',
    servings: '4 people',
    dateCreated: '2026-04-11',
    ingredients: [
        '2 chicken breasts (cut into chunks)',
        '1 onion (chopped)',
        '2 cloves garlic (crushed)',
        '1 red pepper (sliced)',
        '1 tsp smoked paprika',
        '1/2 tsp saffron (optional)',
        '250g paella rice',
        '750ml chicken stock',
        '1 tin chopped tomatoes (optional)',
        '100g frozen peas',
        'Olive oil',
        'Salt & pepper',
        'Lemon wedges'
    ],
    steps: [
        'Heat olive oil in a large pan over medium-high heat',
        'Cook chicken for 5–6 minutes until lightly golden, then remove and set aside',
        'In the same pan, cook onion and red pepper for 3–4 minutes until soft',
        'Add garlic and cook for 1 minute',
        'Stir in smoked paprika and saffron',
        'Add rice and cook for 1–2 minutes to coat in flavour',
        'Pour in chicken stock (and tomatoes if using) and stir once',
        'Add the chicken back into the pan',
        'Simmer on medium-low heat for 15–20 minutes without stirring much',
        'Add peas in the last 5 minutes of cooking',
        'Season with salt and pepper to taste',
        'Serve with lemon wedges and enjoy'
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
        try {
            // Navigation - use safe element access
            const dashboardBtn = document.getElementById('dashboardBtn');
            const backBtn = document.getElementById('backBtn');
            
            if (dashboardBtn) {
                dashboardBtn.addEventListener('click', () => this.showView('dashboard'));
            }
            
            if (backBtn) {
                backBtn.addEventListener('click', () => this.showView('dashboard'));
            }
        } catch (e) {
            console.error('Error setting up event listeners:', e);
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
        try {
            const recipes = this.recipeManager.getAllRecipes();
            const grid = document.getElementById('recipesGrid');
            const countEl = document.getElementById('recipeCount');

            if (!grid || !countEl) {
                console.error('Dashboard elements not found');
                return;
            }

            countEl.textContent = `${recipes.length} recipe${recipes.length !== 1 ? 's' : ''}`;

            if (recipes.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1/-1;">
                        <div class="empty-state-icon">👩‍🍳</div>
                        <h2>No recipes yet</h2>
                        <p>Add recipes to the RECIPES_DATABASE in script.js</p>
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
        } catch (e) {
            console.error('Error rendering dashboard:', e);
        }
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
        try {
            const recipe = this.recipeManager.getRecipe(id);
            if (!recipe) {
                console.error('Recipe not found:', id);
                return;
            }

            this.recipeManager.currentRecipeId = id;
            const detailDiv = document.getElementById('recipeDetail');
            
            if (!detailDiv) {
                console.error('Recipe detail element not found');
                return;
            }

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
        } catch (e) {
            console.error('Error viewing recipe:', e);
        }
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
// Wait for DOM to be ready before initializing
function initializeApp() {
    try {
        // Initialize the app
        window.recipeManager = new RecipeManager();
        window.ui = new UIManager(window.recipeManager);
        console.log('App initialized successfully');
    } catch (e) {
        console.error('Error initializing app:', e);
        // Show error message to user
        document.body.innerHTML = '<div style="padding: 20px; font-family: Arial; color: red;">Error initializing app. Check console.</div>';
    }
}

// Check if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already ready
    initializeApp();
}

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
