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
                    break;
                case this.classList.contains('clear'):
                    resetCalculator();
                    break;
                case this.classList.contains('sign'):
                    negateNumber();
                    updateDisplay();
                    break;
                case this.classList.contains('percent'):
                    getPercentage();
                    updateDisplay();
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
                resetCalculator();
                alert("Halt! You've violated the law!");
                return 0;
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
    if (operator==null){
        if(displayValue==0 || displayValue=="0"){
            displayValue=value;
        }else{
            displayValue+=value;
        }
        operand1 = displayValue;
    }else if(operator!=null){
        if(displayValue==0 || displayValue=="0"){
            displayValue=value;
        }else{
            displayValue+=value;
        }
        operand2 = displayValue;
    };
};

function getOperator(value)
{
    if (operator!=null){
        evaluateEquation();
    };
    operator=value;
};

function evaluateEquation()
{
    displayValue = operate(operator, Number(operand1), Number(operand2));
    displayValue = roundDecimal(Number(displayValue));
    operand1 = displayValue;
    operand2 = null;
    updateDisplay();
};

function negateNumber()
{
    if(displayValue===operand1){
        displayValue *= -1;
        operand1 = displayValue;
    } else if(displayValue===operand2){
        displayValue *= -1;
        operand2 = displayValue;
    };
};

function getPercentage()
{
    if(displayValue===operand1){
        displayValue /= 100;
        operand1 = displayValue;
    } else if(displayValue===operand2){
        displayValue /= 100;
        operand2 = displayValue;
    };
};

function resetCalculator()
{
    displayValue = 0;
    operator = null;
    operand1 = null;
    operand2 = null;
    updateDisplay();
};

function roundDecimal(num)
{
    return Math.round(num*1000)/1000;
};