let products = [];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  if (name === "" || price === "" || stock === "") {
    alert("Please fill all fields");
    return;
  }

  const product = { name, price, stock };
  products.push(product);

  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(item => {
    list.innerHTML += `
      <div class="product">
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Price:</strong> ₹${item.price}</p>
        <p><strong>Stock:</strong> ${item.stock}</p>
      </div>
    `;
  });
}