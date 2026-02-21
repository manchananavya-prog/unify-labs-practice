 const card = document.getElementById("card");
const colorTheme = document.getElementById("colorTheme");
const fontStyle = document.getElementById("fontStyle");
const boxShape = document.getElementById("boxShape");
const resetBtn = document.getElementById("resetBtn");

// Change Theme Color
colorTheme.addEventListener("change", function() {
    card.classList.remove("blue","green","purple","red");
    card.classList.add(colorTheme.value);
});

// Change Font Style
fontStyle.addEventListener("change", function() {
    document.body.style.fontFamily = fontStyle.value;
});

// Change Box Shape
boxShape.addEventListener("change", function() {
    if (boxShape.value === "square") {
        card.style.borderRadius = "0px";
    } else {
        card.style.borderRadius = "15px";
    }
});

// Reset
resetBtn.addEventListener("click", function() {
    card.classList.remove("blue","green","purple","red");
    document.body.style.fontFamily = "Arial";
    card.style.borderRadius = "15px";

    colorTheme.value = "blue";
    fontStyle.value = "Arial";
    boxShape.value = "rounded";
});