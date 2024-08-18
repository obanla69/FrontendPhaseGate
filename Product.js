const BASE_URL = "https://dummyjson.com/products";
const IMAGE_URL = "https://dummyjson.com/image/150";

// Function to fetch products from the API
const fetchProducts = async (url) => {
    try {
        const response = await fetch(url);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        showProducts(data.products); // Access products directly
    } catch (error) {
        console.log('Error fetching products:', error);
    }
};

// Function to display products on the UI
const showProducts = (products) => {
    const productContainer = document.querySelector('.productContainer');
    if (!productContainer) {
        console.error('Product container not found');
        return;
    }

    productContainer.innerHTML = ''; // Clear previous products

    products.forEach((product) => {
        const { description, image, price, category } = product; // Ensure these match the API response

        const divTag = document.createElement('div');
        divTag.classList.add('product');

        divTag.innerHTML = `
            <div class="productImage">
                <img src="${IMAGE_URL}/${image}" alt="Product Image">
            </div>
            <div class="titleAndRating">
                <p>Price: $${price}</p>
            </div>
            <div class="productDescription">
                <p>${description}</p>
            </div>
            <div class="category">
                <p>Category: ${category}</p>
            </div>
        `;
        productContainer.appendChild(divTag);
    });
};

// Fetch and display products
fetchProducts(BASE_URL);
