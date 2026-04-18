// ==================== RECIPE DATABASE ==================== //
const RECIPES_DATABASE = [
    {
        id: '1',
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
            'Cook chicken for 5-6 minutes until lightly golden, then remove and set aside',
            'In the same pan, cook onion and red pepper for 3-4 minutes until soft',
            'Add garlic and cook for 1 minute',
            'Stir in smoked paprika and saffron',
            'Add rice and cook for 1-2 minutes to coat in flavour',
            'Pour in chicken stock (and tomatoes if using) and stir once',
            'Add the chicken back into the pan',
            'Simmer on medium-low heat for 15-20 minutes without stirring much',
            'Add peas in the last 5 minutes of cooking',
            'Season with salt and pepper to taste',
            'Serve with lemon wedges and enjoy'
        ]
    },
    {
    id: '2',
    name: 'Creamy Tomato & Cheddar Chicken Rigatoni',
    origin: 'Italian-inspired',
    description: 'A rich, cheesy tomato rigatoni with a smooth, glossy sauce and tender chicken. Simple ingredients, but cooked properly for a restaurant-level finish.',
    servings: '2–3 people',
    dateCreated: '2026-04-11',
    ingredients: [
        '200g rigatoni pasta',
        '140g sliced cooked chicken (deli chicken)',
        '1 tbsp olive oil',
        '100g chopped onion',
        '2 tsp chopped garlic',
        '1 tin (400g) chopped tomatoes',
        '1 tbsp tomato purée',
        '1 tsp sugar',
        '1/2 tsp dried oregano or mixed herbs',
        '1/2 tsp salt (plus extra for pasta water)',
        '1/2 tsp black pepper',
        '20g butter',
        '50ml milk (or cream)',
        '80–100g grated cheddar cheese'
    ],
    steps: [
        'Fill a large pot with water, add 1 tbsp salt, and bring to a boil over high heat',
        'At the same time, heat 1 tbsp olive oil in a pan over medium heat',
        'Add 100g chopped onion and cook for 3–4 minutes until soft',
        'Add 2 tsp chopped garlic and cook for 30 seconds',
        'Add 1 tin (400g) chopped tomatoes and 1 tbsp tomato purée, then stir',
        'Add 1 tsp sugar, 1/2 tsp salt, 1/2 tsp pepper, and 1/2 tsp herbs, then simmer on low–medium heat for 10–15 minutes',
        'Once the water is boiling, add 200g rigatoni and cook for 2 minutes less than packet instructions (usually about 8–10 minutes total)',
        'Before draining pasta, save 1 mug of pasta water, then drain',
        'Turn the sauce to low heat and add 20g butter and 50ml milk, stirring until combined',
        'Gradually add 80–100g grated cheddar cheese, stirring continuously on low heat until smooth',
        'Add the cooked pasta into the sauce and mix well',
        'Add a splash of reserved pasta water and stir until the sauce becomes glossy and coats the pasta',
        'Add 140g sliced chicken and heat through for 1–2 minutes',
        'Taste and adjust seasoning if needed, then serve immediately'
    ]
},
{
    id: '3',
    name: 'Flapjacks',
    origin: 'Ashford School Food Department',
    description: 'Classic golden flapjacks made with oats, sugar, and syrup. Soft when warm and crisp as they cool.',
    servings: '8–12 pieces',
    dateCreated: '2026-04-16',
    ingredients: [
        '250g rolled oats',
        '100g sugar (any kind)',
        '100g margarine',
        '1 tbsp golden syrup'
    ],
    steps: [
        'Preheat the oven to 190°C (Gas mark 5)',
        'Line a square tin with parchment paper',
        'Place 100g margarine and 1 tbsp golden syrup into a saucepan and melt gently over low heat',
        'In a large bowl, mix 250g rolled oats and 100g sugar',
        'Pour the melted mixture into the oats and mix well',
        'Press the mixture into the lined tin and flatten using the back of a spoon',
        'Bake for approximately 20 minutes',
        'Allow to cool for 5 minutes, then cut into squares; it will firm up as it cools'
    ]
},
{
    id: '4',
    name: 'Jam Buns',
    origin: 'Ashford School Food Department',
    description: 'Soft, lightly sweet buns with a jam centre and a slightly crisp sugary coating.',
    servings: '10–12 buns',
    dateCreated: '2026-04-16',
    ingredients: [
        '40g butter or margarine',
        '115g self-raising flour',
        '55g sugar',
        '2–3 tbsp milk',
        'Jam',
        'Demerara sugar'
    ],
    steps: [
        'Preheat the oven to 180°C (Gas mark 5)',
        'Rub 40g butter or margarine into 115g self-raising flour until it resembles breadcrumbs',
        'Stir in 55g sugar',
        'Add milk gradually and mix until a dough forms',
        'Roll the dough into a sausage shape',
        'Sprinkle demerara sugar onto a tray and roll the dough in it',
        'Cut into rounds approximately 2cm thick',
        'Place onto a lined baking tray and make a dip in the centre of each',
        'Add about 1/3 teaspoon of jam into each centre and partially cover with dough',
        'Bake for approximately 15 minutes or until golden brown'
    ]
},
{
    id: '5',
    name: "Millie’s Style Cookies",
    origin: 'Ashford School Food Department',
    description: 'Soft, chewy cookies with a slightly crisp edge and gooey chocolate chips throughout.',
    servings: '8–10 cookies',
    dateCreated: '2026-04-16',
    ingredients: [
        '62g butter',
        '62g caster sugar',
        '55g light brown sugar',
        '1/2 egg',
        '1/2 tsp vanilla extract',
        'Pinch of salt',
        '112g self-raising flour',
        '100g chocolate chips'
    ],
    steps: [
        'Preheat the oven to 180°C (Gas mark 4)',
        'Cream 62g butter and 62g caster sugar until light and fluffy',
        'Beat the egg and add half to the mixture',
        'Add 1/2 tsp vanilla extract',
        'Sieve in 112g self-raising flour and mix',
        'Add 55g light brown sugar and mix in',
        'Stir in 100g chocolate chips until a dough forms',
        'Roll into golf ball-sized portions',
        'Place on a lined baking tray, leaving space between each',
        'Bake for 10–15 minutes until golden',
        'Allow to cool before serving'
    ]
},
{
    id: '6',
    name: 'Brown Butter Chocolate Chip Banana Bread',
    origin: 'Original Recipe Creator',
    description: 'A rich, soft banana bread made with nutty brown butter and loaded with chocolate chips for a deep, indulgent flavour.',
    servings: '6 people',
    dateCreated: '2026-04-16',
    ingredients: [
        '3 ripe bananas',
        '9 tbsp unsalted butter',
        '1 large egg',
        '150g brown sugar (approx. 3/4 cup)',
        '50g white sugar (approx. 1/4 cup)',
        '190g plain flour (approx. 1 1/2 cups)',
        '1 tsp baking soda',
        '1/2 tsp baking powder',
        '1/2 tsp salt',
        '1 tsp cinnamon',
        '1 tsp vanilla extract',
        '150–200g chocolate chips'
    ],
    steps: [
        'Add 9 tbsp butter to a saucepan over medium heat and cook until it melts, foams, and turns golden brown with a nutty smell, then pour into a bowl and cool slightly (about 5 minutes)',
        'In a large bowl, mash 3 ripe bananas until mostly smooth',
        'Add the browned butter, 150g brown sugar, 50g white sugar, 1 egg, and 1 tsp vanilla extract, then whisk for 1–2 minutes until smooth and glossy',
        'Add 190g flour, 1 tsp baking soda, 1/2 tsp baking powder, 1/2 tsp salt, and 1 tsp cinnamon, then mix thoroughly until fully combined',
        'Preheat the oven to 175°C',
        'Fold in about 150g chocolate chips, saving some for topping',
        'Line or grease a loaf tin and pour in the batter',
        'Sprinkle remaining chocolate chips on top',
        'Bake for 60 minutes, covering loosely with foil halfway through to prevent over-browning',
        'Check with a toothpick; it should come out with a few moist crumbs (not wet batter)',
        'Allow to cool slightly, then slice and serve'
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
