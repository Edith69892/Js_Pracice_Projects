///////////////////////////////////// My code success //////////////////////////////////////

// const value1 = document.querySelector("#value1");
// const value2 = document.querySelector("#value2");
// const buttons = document.querySelectorAll(".btn")
// let result = document.querySelector(".Result")

// buttons.forEach(function (btn) {
//     btn.addEventListener('click',function(e){
//         let outputresult = '';
//         let classes = e.currentTarget.classList
//         let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 20
//         if(value1.value === "" || value2.value === ""){
//             result.textContent = "Please enter both numbers";
//             return;
//         }
        

//         else if(randomNumber <= 10){
//              if(classes.contains("add-btn")){
//             outputresult = parseFloat(value1.value) - parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//             else if(classes.contains("minus-btn")){
//             outputresult = parseFloat(value1.value)/parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//             else if(classes.contains("multiply-btn")){
//             outputresult = parseFloat(value1.value) +  parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//             else if(classes.contains("divide-btn")){
//             outputresult = parseFloat(value1.value) **  parseFloat(value2.value);
//             displayResult(outputresult);
//             }}
//         else{
//             if(classes.contains("add-btn")){
//             outputresult = parseFloat(value1.value) + parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//             else if(classes.contains("minus-btn")){
//             outputresult = parseFloat(value1.value) - parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//                 else if(classes.contains("multiply-btn")){
//             outputresult = parseFloat(value1.value) *  parseFloat(value2.value);
//             displayResult(outputresult);
//             }
//             else if(classes.contains("divide-btn")){
//             outputresult = (parseFloat(value1.value) /  parseFloat(value2.value)).toFixed(2); // Fixed to 2 decimal places
//             displayResult(outputresult);
//             }
//         }
//     })
//   });

//   function displayResult(num) {
//     result.textContent = num;
//   }


////////////////////////////////////////////// Optimized code ///////////////////////////////////////////////////////////

const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".Result");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const num1 = parseFloat(value1.value);
    const num2 = parseFloat(value2.value);

    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter both numbers";
      return;
    }

    const isFaulty = Math.random() < 0.1; // 10% chance
    const operation = getOperation(e.currentTarget.classList, isFaulty);

    const output = calculate(num1, num2, operation);
    result.textContent = formatResult(output, operation);
  });
});

// Operation handler
function getOperation(classList, faulty) {
  if (classList.contains("add-btn")) return faulty ? "subtract" : "add";
  if (classList.contains("minus-btn")) return faulty ? "divide" : "subtract";
  if (classList.contains("multiply-btn")) return faulty ? "add" : "multiply";
  if (classList.contains("divide-btn")) return faulty ? "power" : "divide";
}

// Core logic
function calculate(a, b, op) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide": return a / b;
    case "power": return a ** b;
  }
}

// Format for decimal display
function formatResult(num, op) {
  return ["divide", "power"].includes(op)
    ? num.toFixed(2)
    : num;
}
