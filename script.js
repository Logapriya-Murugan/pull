const breedInput = document.getElementById('breedInput');
const searchButton = document.getElementById('searchButton');
const imageDisplay = document.getElementById('imageDisplay');
const favoritesSection = document.getElementById('favorites');

searchButton.addEventListener('click', async () => {
    const breedName = breedInput.value.trim();
    if (breedName === '') return;

    // Call the API to fetch images by breed using fetch or XMLHttpRequest
    const images = await fetchImagesByBreed(breedName);

    // Clear previous images
    imageDisplay.innerHTML = '';

    // Display fetched images
    images.forEach(imageUrl => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageDisplay.appendChild(imageElement);
        
        // Add favorite button to each image
        const favoriteButton = document.createElement('button');
        favoriteButton.innerText = 'Favorite';
        favoriteButton.addEventListener('click', () => addToFavorites(imageUrl));
        imageDisplay.appendChild(favoriteButton);
    });
});

function addToFavorites(imageUrl) {
    // Create image element for the favorites section
    const favoriteImage = document.createElement('img');
    favoriteImage.src = imageUrl;
    favoritesSection.appendChild(favoriteImage);
}
