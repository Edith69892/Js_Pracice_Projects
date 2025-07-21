// My code success

// const value = document.getElementById('value');
// const buttons = document.querySelectorAll('.btn');
// const incrementBtn = document.querySelector('.increase');
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');
// let count = 0;

// resetBtn
// .addEventListener('click',function(){
//     count = 0;
//     displayCount(count)
//     value.style.color = 'black'
// })

// incrementBtn.addEventListener('click', function(){
//     count++;
//     value.style.color = 'green'
//     displayCount(count)
// })

// decreaseBtn.addEventListener('click', function(){
//     count--;
//     value.style.color = 'red'
//     displayCount(count)
// })

// function displayCount(num){
//     value.textContent = num;
// }

//////////////////////////////////////////////yt video code ///////////////////////////////////////////////////////////

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;

    if (style.contains("increase")) {
      count++;
    } else if (style.contains ("decrease")) {
      count--;
    } else {
      count = 0;
    }

    
    if (count > 0) {
        value.style.color = "green";
    } 
    if (count < 0) {
        value.style.color = "red";
    }
    if (count === 0) {
        value.style.color = "black";
    }

     // display the count
    value.textContent = count;
  });
});

