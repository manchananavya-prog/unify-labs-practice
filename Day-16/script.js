// TITLE CASE

function titleCase(){

let text = document.getElementById("textInput").value;

let result = text
.trim()
.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

document.getElementById("output").innerText =
"Title Case: " + result;

}



// VOWEL COUNT

function countVowels(){

let text = document.getElementById("textInput").value;

let vowels = "aeiouAEIOU";

let count = 0;

for(let char of text){

if(vowels.includes(char)){

count++;

}

}

document.getElementById("output").innerText =
"Vowel Count: " + count;

}



// SECRET MESSAGE

function secretMessage(){

let text = document.getElementById("textInput").value;

let result = text.replaceAll("JavaScript","***");

document.getElementById("output").innerText =
"Secret Message: " + result;

} 