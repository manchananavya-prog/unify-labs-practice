const API = "http://localhost:5000/products";

// ADD PRODUCT (POST)
async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, stock })
    });

    const data = await response.json();
    document.getElementById("message").innerText = "Product Added Successfully!";
}

// UPDATE STOCK (PATCH)
async function updateStock() {
    const id = document.getElementById("updateId").value;
    const stock = document.getElementById("newStock").value;

    const response = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock })
    });

    const data = await response.json();
    document.getElementById("message").innerText = "Stock Updated Successfully!";
}

// DELETE PRODUCT (DELETE)
async function deleteProduct() {
    const id = document.getElementById("deleteId").value;

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    document.getElementById("message").innerText = "Product Deleted Successfully!";
}