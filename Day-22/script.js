// ================= STATE =================
const State = {
    cryptoData: [],
    favorites: [],
    theme: "light"
};

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");
const container = document.getElementById("cryptoContainer");
const loader = document.getElementById("loader");
const notification = document.getElementById("notification");

// ================= INIT =================
async function init() {
    showLoader();

    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
        );

        if (!response.ok) {
            throw new Error("Network error");
        }

        State.cryptoData = await response.json();
        renderCrypto(State.cryptoData);

    } catch (error) {
        notification.innerText = "Failed to fetch data. Check internet.";
    }

    hideLoader();
}

init();

// ================= RENDER =================
function renderCrypto(data) {
    container.innerHTML = "";

    data.forEach(coin => {
        const isFav = State.favorites.includes(coin.id);

        container.innerHTML += `
            <div class="card">
                <img src="${coin.image}">
                <h3>${coin.name}</h3>
                <p>Price: $${coin.current_price}</p>
                <button onclick="toggleFavorite('${coin.id}')">
                    ${isFav ? "Remove Favorite" : "Add Favorite"}
                </button>
            </div>
        `;
    });
}

// ================= SEARCH =================
searchInput.addEventListener("input", function () {
    const filtered = State.cryptoData.filter(coin =>
        coin.name.toLowerCase().includes(this.value.toLowerCase())
    );

    renderCrypto(filtered);
});

// ================= SORT =================
sortSelect.addEventListener("change", function () {
    let sorted = [...State.cryptoData];

    if (this.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (this.value === "price") {
        sorted.sort((a, b) => a.current_price - b.current_price);
    }

    renderCrypto(sorted);
});

// ================= FAVORITES =================
function toggleFavorite(id) {
    if (State.favorites.includes(id)) {
        State.favorites = State.favorites.filter(fav => fav !== id);
    } else {
        State.favorites.push(id);
    }

    renderCrypto(State.cryptoData);
}

// ================= THEME =================
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// ================= LOADER =================
function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}