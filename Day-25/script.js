let products = [
    { name: "Laptop", category: "Electronics", price: 600, stock: 5, featured: false },
    { name: "Phone", category: "Electronics", price: 400, stock: 0, featured: false },
    { name: "Shoes", category: "Fashion", price: 700, stock: 10, featured: false },
    { name: "TV", category: "Electronics", price: 800, stock: 3, featured: false }
];

function displayProducts() {
    document.getElementById("output").innerHTML =
        "<pre>" + JSON.stringify(products, null, 2) + "</pre>";
}

// Mass Update 1: Increase Electronics price by +10
function increasePrice() {
    products.forEach(item => {
        if (item.category === "Electronics") {
            item.price += 10;
        }
    });
    displayProducts();
}

// Mass Update 2: Set featured true where price > 500
function setFeatured() {
    products.forEach(item => {
        if (item.price > 500) {
            item.featured = true;
        }
    });
    displayProducts();
}

// Cleanup: Delete stock = 0
function deleteOutOfStock() {
    products = products.filter(item => item.stock !== 0);
    displayProducts();
}

// Verify Count
function showCount() {
    document.getElementById("output").innerHTML =
        "<h2>Total Documents: " + products.length + "</h2>";
}

displayProducts();