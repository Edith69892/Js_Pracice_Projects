const btnCalculate = document.querySelector("#calculateBtn");
const resetBtn = document.querySelector("#resetBtn");
const result = document.querySelector("#result");


btnCalculate.addEventListener("click", calculateFactorial);

function calculateFactorial() {
    let number = document.querySelector("#numberInput").value.trim();
    let factorialNumber = 1;
    result.textContent = "";
    if (number === "") {
        result.textContent = "Please enter a number";
        return;
    }
    number = parseInt(number);
    if (isNaN(number)) {
        result.textContent = "Please enter a valid number";
    } else if (number < 0) {
        result.textContent = "Please enter a positive number";
    } else if (number === 0) {
        displayresult(1);
    } else {
        for (let i = 1; i <= number; i++) {
            factorialNumber *= i;
        }
        displayresult(factorialNumber);
    }
}

function displayresult(value) {
    result.textContent = `${value}`;
}

resetBtn.addEventListener('click', resetForm);

function resetForm() {
    document.querySelector('#numberInput').value = ''; // clear input
    result.textContent = ''; // clear result
}