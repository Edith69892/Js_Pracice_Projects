const number =  document.querySelector('#numberInput');
const btnCalculate = document.querySelector('#calculateBtn');
const result = document.querySelector('#result');
let factorialNumber = 1;
btnCalculate.addEventListener('click', calculateFactorial);

function calculateFactorial(){
    result.textContent = ''; 
    for (let i = 1; i <= number.value; i++) {
       factorialNumber = factorialNumber * i;
       console.log(factorialNumber);
       
    }
    displayresult(factorialNumber)
}


function displayresult(value){
    result.textContent += `${value} `;
    factorialNumber = 1; 

}