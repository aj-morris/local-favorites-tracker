let favorites = [];

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');


function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById ('name').value.trim();
    const category = document.getElementById('category').value;

    if (!name|| !category) {
        alert('Please fill in name and category!');
        return;
    }

    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById('rating').value),
        notes: document.getElementById('notes').value.trim(),
        dateAdded: new Date().toLocaleDateString()
    };

    favorites.push(newFavorite);
    form.reset();
    displayFavorites();
}


form.addEventListener('submit', addFavorite);

function displayFavorites() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    searchFavorites();
}

function deleteFavorite(index) {
    const favorite = favorites[index];
    if (confirm(`Delete "${favorite.name}"?`)) {
        favorites.splice(index, 1);   // remove 1 item at index
        searchFavorites();            // re-render, keeping current filter
    }
}

searchInput.addEventListener('input', searchFavorites);
    categoryFilter.addEventListener('change', searchFavorites);

function searchFavorites() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const filtered = favorites.filter(function(favorite) {
        const matchesSearch = searchText === '' ||
            favorite.name.toLowerCase().includes(searchText) ||
            favorite.notes.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === 'all' ||
            favorite.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

favoritesList.innerHTML = '';
filtered.forEach(function(favorite) {
    const index = favorites.indexOf(favorite);
    favoritesList.innerHTML += `
        <div class="favorite-card">
            <!-- the card contents from Lab 13.5 -->
            <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
        </div>`;
});
}

// The last line in js/app.js
displayFavorites();
