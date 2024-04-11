let currentValue = 0;
let operator = null;
let firstOperand = null;
let secondOperand = null;

const buttons = document.querySelectorAll('button');

function updateDisplay()
{
    const displayBox = document.querySelector('.display');
    if (currentValue.toString().length > 10){
        displayBox.textContent = roundNumber(currentValue);
        currentValue = parseFloat(currentValue).toFixed(9);
    }else if(currentValue.toString().length <= 10){  
        displayBox.textContent = currentValue;
    };
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
                    assignOperand();
                    break;
                case this.classList.contains('operator'):
                    getOperator(buttons[i].value);
                    currentValue=0
                    assignOperand();
                    break;
                case this.classList.contains('clear'):
                    resetCalculator();
                    break;
                case this.classList.contains('sign'):
                    negateNumber();
                    updateDisplay();
                    assignOperand();
                    break;
                case this.classList.contains('percent'):
                    getPercentage();
                    updateDisplay();
                    assignOperand();
                    break;
                case this.classList.contains('decimal'):
                    addDecimal(buttons[i].value);  
                    assignOperand();
                    updateDisplay();
                    break;
                case this.classList.contains('backspace'):
                    removeValue();
                    updateDisplay();
                    assignOperand();
                    break;
                case this.classList.contains('enter'):
                    evaluateEquation();
                    operator=null;
                    assignOperand();
                    break;
            };
            
        });
    };
};

clickButton();

function assignOperand()
{
    if (operator==null){
        firstOperand = currentValue;
    } else if(operator!=null){
        secondOperand = currentValue;
    };
    console.log("Current:" + currentValue);
    console.log("first:" + firstOperand);
    console.log(operator);
    console.log("second:" + secondOperand);
};

function operate(operator, operand1, operand2)
{ 
    switch(operator)
    {
        case '+':
            return operand1 + operand2; 
            break;
        case '-':
            return operand1 - operand2; 
            break;
        case '*':
            return operand1 * operand2
            break;
        case '/':
            if (operand2==0) {
                resetCalculator();
                alert("Halt! You've violated the law!");
                return 0;
            }else{
                return operand1 / operand2;
            };
            break;
        case '^':
            return operand1 ** operand2;
            break;
    };
};

function getOperands(value)
{
    if(currentValue.toString()==='0'){
        currentValue=value;
    }else{
        currentValue+=value;
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
    currentValue = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand ));
    firstOperand = currentValue;
    secondOperand  = 0;
    updateDisplay();
};

function negateNumber()
{
    currentValue *= -1;
};

function getPercentage()
{
    currentValue /= 100;
};

function addDecimal(dot)
{
    if (currentValue.toString().includes('.')){
        currentValue;
    }else{
        currentValue += dot;
    };
};

function removeValue()
{
    if (currentValue===0 || currentValue==="0"){
        currentValue;
    } else if (currentValue.length==1){
        currentValue=0;
    }else{
        currentValue = currentValue.toString().slice(0,-1);
    };
};

function resetCalculator()
{
    currentValue = 0;
    operator = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
};

function roundNumber(num)
{
    return parseFloat(num).toExponential(2);
};