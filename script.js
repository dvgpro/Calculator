let display = 0;
let operator = null;
let operand1 = null;
let operand2 = null;
const displayBox = document.querySelector('.display');

function updateDisplay()
{
    displayBox.textContent = display;
}

updateDisplay();