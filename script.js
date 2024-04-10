let display = 0;
let operator = null;
let operand1 = null;
let operand2 = null;
const displayBox = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function updateDisplay()
{
    displayBox.textContent = display;
};

updateDisplay();


function clickButton()
{
    for (let i=0; i<buttons.length; i++)
    {
        switch (buttons[i].classList)
        {
            case 'operand':
                break;
            case 'operator':
                break;
            case 'clear':
                break;
            case 'sign':
                break;
            case 'percent':
                break;
            case 'decimal':
                break;
            case 'backspace':
                break;
            case 'enter':
                break;
        };
    };
};

clickButton();
