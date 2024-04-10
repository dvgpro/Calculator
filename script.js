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
        buttons[i].addEventListener('click', function()
        {
            if (buttons[i].classList.contains('operand'))
            {
                getInput();
                updateDisplay();
            };
        });
    };
};

clickButton();