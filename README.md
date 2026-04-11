# 👨‍🍳 Jacob's Recipes

A modern, sleek recipe website to store and manage all your recipes digitally. Features a beautiful dashboard, full recipe details, and the ability to export recipes to PDF or print them.

## Features

✨ **Modern Design** - Sleek, responsive UI with smooth animations
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
🖼️ **Recipe Images** - Beautiful banner images for each recipe
📋 **Easy Recipe Management** - Simple form to add new recipes
🖨️ **Print & Export** - Download recipes as PDF or print them
💾 **Local Storage** - All recipes saved in your browser (no server needed)
🎨 **Animated UI** - Smooth transitions and hover effects

## File Structure

```
jacobs-recipes/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Application logic
├── images/             # Folder for recipe images
│   └── classic-chocolate-chip-cookies.svg  # Example recipe image
└── README.md           # This file
```

## Getting Started

1. **Open the website** - Simply open `index.html` in your web browser
2. **View the example** - You'll see the "Classic Chocolate Chip Cookies" recipe as an example
3. **Add your own recipes** - Click "+ New Recipe" button to add your recipes
4. **Add images** - Place recipe images in the `images/` folder

## Adding Recipes

### Via the Web Interface

1. Click the **"+ New Recipe"** button in the top navigation
2. Fill in the recipe details:
   - **Recipe Name** ⭐ (required) - Used to match images in the `images/` folder
   - **Origin** - Where the dish is from (e.g., "Italian", "Mexican")
   - **Servings** - How many people it serves (e.g., "4-6 people")
   - **Description** - Brief description of the dish
   - **Date Created** - When you added the recipe (auto-filled with today)
   - **Ingredients** ⭐ (required) - One ingredient per line
   - **Method / Steps** ⭐ (required) - One step per line

3. Click **"Add Recipe"** to save

### Image Naming Convention

Recipe images should be named based on the recipe name, converted to lowercase with hyphens:

**Examples:**
- Recipe: "Classic Chocolate Chip Cookies" → Image: `classic-chocolate-chip-cookies.jpg`
- Recipe: "Spaghetti Carbonara" → Image: `spaghetti-carbonara.png`
- Recipe: "Caesar Salad" → Image: `caesar-salad.svg`

**Supported image formats:** `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`, `.gif`

If no image is found, a cooking pot emoji (🍳) will be displayed as a placeholder.

## Using Recipes

- **Dashboard View** - See all your recipes with image thumbnails, servings, and cooking date
- **View Recipe** - Click any recipe card to see the full recipe with ingredients and steps
- **Check Off Ingredients** - Click checkboxes next to ingredients while cooking
- **Export to PDF** - Click "📥 Export to PDF" on any recipe to download it
- **Print Recipe** - Click "🖨️ Print" to print the recipe
- **Delete Recipe** - Click "Delete" on the recipe card to remove it (with confirmation)

## Data Storage

All your recipes are stored locally in your browser's **localStorage**. This means:

✅ Recipes persist between browser sessions
✅ No data sent to any server
✅ Works completely offline
⚠️ Recipes are specific to this browser on this device
⚠️ Clearing browser data will delete your recipes

### Backing Up Your Recipes

To backup your recipes:
1. Open the browser's Developer Tools (F12 or right-click → Inspect)
2. Go to the **Console** tab
3. Paste and run: `copy(JSON.stringify(JSON.parse(localStorage.getItem('recipes')), null, 2)))`
4. Paste the JSON into a text file and save it

### Restoring from Backup

1. Open Developer Tools (F12)
2. Go to the **Console** tab
3. Paste and run:
```javascript
localStorage.setItem('recipes', JSON.stringify([PASTE_YOUR_JSON_HERE]))
```
4. Refresh the page

## Tips & Tricks

💡 **Format ingredients clearly** - Use standard measurements (e.g., "2 cups flour" not "2 c flour")

💡 **Number your steps** - The website automatically numbers them, but clear steps are easier to read

💡 **Add high-quality images** - JPG works best for photos, PNG for graphics with transparency

💡 **Use consistent naming** - Keep recipe names consistent when updating images

💡 **Responsive images** - Keep image file sizes reasonable for faster loading

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Customization

### Change Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;      /* Red, used for buttons and accents */
    --secondary-color: #4ecdc4;    /* Teal, used for secondary elements */
    --accent-color: #ffe66d;       /* Yellow, used for highlights */
    --dark-bg: #1a1a2e;            /* Dark background */
    --light-bg: #f8f9fa;           /* Light background */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #ecf0f1;         /* Light text */
}
```

### Customize Logo

Edit the logo in `index.html`:
```html
<div class="logo">👨‍🍳 Jacob's Recipes</div>
```

Change the emoji or text to your preference!

## Troubleshooting

**Q: My recipes disappeared!**
- Recipes are stored in localStorage. Clearing browser data will delete them. Check the "Backing Up Your Recipes" section above.

**Q: Images not showing**
- Check the filename matches the recipe name (in the required format)
- Make sure the image file is in the `images/` folder
- Try different image formats (.jpg, .png, .svg, etc.)
- Check browser console for errors (F12 → Console tab)

**Q: PDF export not working**
- Ensure you have an internet connection (pdf library loads from CDN)
- Try printing instead (🖨️ Print button)
- Check browser console for errors

**Q: Recipes don't save**
- Check if your browser allows localStorage
- Try a different browser
- Disable browser extensions that might block storage

## Technologies Used

- **HTML5** - Structure and forms
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript** - No frameworks, pure JavaScript logic
- **html2pdf.js** - PDF export functionality
- **LocalStorage API** - Recipe data persistence

## Future Enhancements

Possible features to add:
- Recipe categories and tags
- Search and filtering
- Difficulty levels and cooking times
- Nutrition information
- Recipe ratings and reviews
- Shared recipe database
- Cloud synchronization

## License

Free to use and modify for personal use.

---

**Happy Cooking!** 👨‍🍳💚

Made with ❤️ for the kitchen
