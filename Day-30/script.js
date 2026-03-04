const productsGrid = document.getElementById("productsGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");

let allProducts = [
    { _id: "1", name: "Laptop", category: "electronics", price: 50000 },
    { _id: "2", name: "Phone", category: "electronics", price: 20000 },
    { _id: "3", name: "Shoes", category: "fashion", price: 3000 }
];

let cart = [];

function loadProducts(products = allProducts) {
    loader.style.display = "none";
    productsGrid.innerHTML = products.map(product => `
        <div class="card">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = allProducts.find(p => p._id === id);

    const existing = cart.find(item => item._id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function updateCartUI() {
    if (cart.length === 0) {
        document.getElementById("emptyCart").style.display = "block";
    } else {
        document.getElementById("emptyCart").style.display = "none";
    }

    cartItems.innerHTML = cart.map(item => `
        <p>${item.name} x ${item.quantity}</p>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartTotal.innerText = total;
    cartCount.innerText = cart.length;
}

function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("hidden");
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    loadProducts(filtered);
});

document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    alert("Order Placed Successfully! 🎉");
    cart = [];
    updateCartUI();
    this.reset();
});

window.onload = () => {
    setTimeout(() => loadProducts(), 1000); // simulate loading
};