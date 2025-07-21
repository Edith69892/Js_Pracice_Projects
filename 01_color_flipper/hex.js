// const body = document.querySelector('body');
// const button = document.getElementById('btn');  
// const colortext = document.querySelector('.color');
// let hex = "0123456789abcdef";
// let color ;

// function changeBgColor() {
//      color = '#'
//     document.body.style.backgroundColor = getRandomColor();;
//     colortext.textContent = color;
// }

// function getRandomColor() {
//     for(let i=0; i< 6; i++){
//         let randomColor = Math.floor(Math.random() * hex.length);
//         color += hex[randomColor];
//     }
//     return color;
// }
// document.querySelector('button').addEventListener('click', changeBgColor);

//yt code

const hex ="0123456789abcdef";
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {

        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}