const buttons = document.querySelectorAll('.button');
const displayEquation = document.querySelector('.calc-equation')
const displayResult = document.querySelector('.calc-result')
let num1 = null;
let num2 = null;
let operator = null;
let decimalUsed = false;


buttons.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = 'white';
    });
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = 'lightgray';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'lightgray';
    });
});

buttons.forEach(element => {

    element.addEventListener('mousedown', () => {
        const isNumber = element.classList.contains('number');
        const isOperator = element.classList.contains('operator');
        const isDecimal = element.classList.contains('decimal');
        const isEquals = element.classList.contains('equals');
        const isClear = element.classList.contains('clear');
        const isDelete = element.classList.contains('delete');


        if (isDecimal) {
            if (!decimalUsed) {
                displayResult.textContent += element.textContent;
                decimalUsed = true;
            }
        }

        else if (isClear) {
            num1 = null;
            num2 = null;
            operator = null;
            decimalUsed = false;
            displayResult.textContent = '0';
            displayEquation.textContent = '0';
        }
        else if (isDelete) {
            if (displayResult.textContent[(displayResult.textContent.length) - 1] === '.') {
                displayResult.textContent = displayResult.textContent.slice(0, -1)
                decimalUsed = false;
            } else {
                displayResult.textContent = displayResult.textContent.slice(0, -1)
            }
        }
        else if (num1 === null) {
            if (isNumber) {
                if (displayResult.textContent == '0') {
                    displayResult.textContent = '';
                    displayResult.textContent += element.textContent;
                }
                else {
                    displayResult.textContent += element.textContent;
                }
            }
            else if (isOperator) {
                num1 = displayResult.textContent;
                operator = element.textContent;
                displayEquation.textContent = num1 + operator;
                decimalUsed = false;
                displayResult.textContent = '0';
            }

        }
        else if (num1 !== null) {
            if (isNumber) {
                if (displayResult.textContent.slice(0, 2) === '0.') {
                    displayResult.textContent = '0.';
                } else if (displayResult.textContent[0] === '0') {
                    displayResult.textContent = ''
                    displayResult.textContent += element.textContent;
                } else {
                    displayResult.textContent += element.textContent;
                }
            }
            else if (isOperator) {
                num2 = displayResult.textContent;
                num1 = operate(num1, operator, num2);
                displayResult.textContent = num1
                operator = element.textContent;
                displayEquation.textContent = num1 + operator;
                displayResult.textContent = '0';
                num2 = null;
                decimalUsed = false;
            }
            else if (isEquals) {
                if (num1 !== null && operator !== null) {
                    num2 = displayResult.textContent;
                    result = operate(num1, operator, num2);
                    displayResult.textContent = result
                    displayEquation.textContent = num1 + operator + num2 + "=";
                    num1 = result;
                    num2 = null;
                    decimalUsed = false;
                }
            }
        }
    });
});

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator == '+') {
        return num1 + num2;
    }
    else if (operator == '-') {
        return num1 - num2;
    }
    else if (operator == '*') {
        return num1 * num2;
    }
    else if (operator == '/') {
        if (num2 == 0) {
            alert('Can not divide by zero')
            return 0
        }
        else {
            return num1 / num2;
        }
    }
}