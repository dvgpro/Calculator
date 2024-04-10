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
            var cls = this.classList;
            switch (true)
            {
                case cls.contains('operand'):
                    getOperands(buttons[i].value);
                    updateDisplay();
                    break;
                case cls.contains('operator'):
                    break;
                case cls.contains('clear'):
                    resetCalculator();
                    break;
                case cls.contains('sign'):
                    break;
                case cls.contains('percent'):
                    break;
                case cls.contains('decimal'):
                    break;
                case cls.contains('backspace'):
                    break;
                case cls.contains('enter'):
                    break;
            };
        });
    };
};

clickButton();



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
    let displayValue = 0;
    let operator = null;
    let operand1 = null;
    let operand2 = null;
    updateDisplay();
};