const inputBox = document.querySelector("#password");
const copy = document.querySelector("#copy");
const btn = document.querySelector("button");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_-[]{}'\|/?.`><,<\|";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    inputBox.value = password;
}

btn.addEventListener("click", createPassword);


function copyPassword(){
    password.select();
    document.execCommand("copy");
}

copy.addEventListener("click", copyPassword)