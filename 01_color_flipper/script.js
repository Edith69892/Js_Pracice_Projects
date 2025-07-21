const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const body = document.querySelector('body');
const button = document.getElementById('btn');
const colortext = document.querySelector('.color');
// let color = '';

function changeBgColor() {
    const randomNumber = GetRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    colortext.textContent = colors[randomNumber];
}

function GetRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

document.querySelector('button').addEventListener('click', changeBgColor);