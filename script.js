let displayValue = 0;
let operator = null;
let operand1 = null;
let operand2 = null;
let total = null;
const displayBox = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function updateDisplay()
{
    displayBox.textContent = displayValue;
};

updateDisplay();

function clickButton()
{
    for (let i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener('click', function()
        {
            switch (true)
            {
                case this.classList.contains('operand'):
                    getOperands(buttons[i].value);
                    updateDisplay();
                    break;
                case this.classList.contains('operator'):
                    getOperator(buttons[i].value);
                    displayValue=0;
                    updateDisplay;
                    break;
                case this.classList.contains('clear'):
                    resetCalculator();
                    break;
                case this.classList.contains('sign'):
                    break;
                case this.classList.contains('percent'):
                    break;
                case this.classList.contains('decimal'):
                    break;
                case this.classList.contains('backspace'):
                    break;
                case this.classList.contains('enter'):
                    evaluateEquation();
                    break;
            };
        });
    };
};

clickButton();

function operate(operator, operand1, operand2)
{
    let operateTotal=0;
    switch(operator)
    {
        case '+':
            operateTotal = operand1 + operand2;
            return operateTotal;
            break;
        case '-':
            operateTotal = operand1 - operand2;
            return operateTotal;
            break;
        case '*':
            operateTotal = operand1 * operand2
            return operateTotal;
            break;
        case '/':
            if (operand2==0) {
                alert("Halt! You've violated the law!");
                resetCalculator();
            }else{
                operateTotal = operand1 / operand2;
                return operateTotal;
            };
            break;
        case '^':
            operateTotal = operand1 ** operand2;
            return operateTotal;
            break;
    };
};

function getOperands(value)
{
    
};

function getOperator(value)
{
    operator=value;
};

function evaluateEquation()
{

};

function resetCalculator()
{
    displayValue = 0;
    operator = null;
    operand1 = null;
    operand2 = null;
    updateDisplay();
};