const apiKey = "47879972f55ed43b8de8ff074fd183b9";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const loader = document.getElementById("loader");
const toggleBtn = document.getElementById("toggleBtn");

let currentCity = "";

searchBtn.addEventListener("click", getWeather);

function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Enter city name");
        return;
    }

    currentCity = city;
    loader.style.display = "block";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {

        loader.style.display = "none";

        cityName.textContent = data.name;
        temperature.textContent = `🌡 Temperature: ${data.main.temp} °C`;
        description.textContent = `☁ Weather: ${data.weather[0].main}`;
        humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;

        changeBackground(data.weather[0].main);
    })
    .catch(error => {
        loader.style.display = "none";
        alert("City not found");
    });
}

function changeBackground(weather) {
    if (weather === "Rain") {
        document.body.style.background = "linear-gradient(to right, #314755, #26a0da)";
    } 
    else if (weather === "Clear") {
        document.body.style.background = "linear-gradient(to right, #f7971e, #ffd200)";
    } 
    else {
        document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
    }
}

// Dark Mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Auto refresh every 30 seconds
setInterval(() => {
    if (currentCity !== "") {
        getWeather();
    }
}, 30000);