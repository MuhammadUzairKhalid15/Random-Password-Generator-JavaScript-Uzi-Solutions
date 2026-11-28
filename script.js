const inputBox = document.querySelector("#password");
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");
const btn = document.querySelector("button");

const lengthSlider = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");

lengthSlider.addEventListener("input", function(){
    lengthValue.textContent = lengthSlider.value;
});

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_-[]{}'\|/?.`><,<\|";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    const length = Number(lengthSlider.value);

while(length > password.length){

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
}


    inputBox.value = password;
}

btn.addEventListener("click", createPassword);


function copyPassword(){
    if(!inputBox.value) return;

    inputBox.select();
    document.execCommand("copy");

    copied.classList.add("show");
    setTimeout(function(){
        copied.classList.remove("show");
    }, 1500);
}

copy.addEventListener("click", copyPassword)