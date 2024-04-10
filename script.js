let displayValue = 0;
let operator = null;
let operand1 = null;
let operand2 = null;
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
                    break;
            };
        });
    };
};

clickButton();

function getOperands(value)
{
    if (operand1==null || operator==null)
    {
        if (displayValue==0||displayValue=='0')
        {
            displayValue = value
        }
        else
        {
        displayValue += value;
        };
        operand1 = displayValue;
    }
    else if (operand1!=null && operator!=null)
        if (displayValue==0||displayValue=='0')
        {
            displayValue = value
        }
        else
        {
            displayValue += value;
        };
    operand2 = displayValue;
};

function operate()
{
    switch(operator)
    {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            operand1 /= operand2;
            break;
        case '^':
            operand1 **= operand2;
            break;
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