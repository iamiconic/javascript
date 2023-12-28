const buttons = document.querySelectorAll('.button');
const displayEquation = document.querySelector('.calc-equation')
const displayResult = document.querySelector('.calc-result')
let num1 = null;
let num2 = null;
let operator = null;
let decimalUsed = false;
let continueCalc = false;


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
                if (displayResult.textContent.length >= 8) {
                }
                else if (displayResult.textContent == '0') {
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
                if (displayResult.textContent.length >= 8) {

                }
                else if (displayResult.textContent == '0' || displayResult.textContent == num1) {
                    displayResult.textContent = '';
                    displayResult.textContent += element.textContent;
                }
                else {
                    displayResult.textContent += element.textContent;
                }
            }
            else if (isOperator) {
                if (continueCalc === true) {
                    operator = element.textContent;
                    displayEquation.textContent = num1 + operator;
                    displayResult.textContent = '0';
                    continueCalc = false;
                } else {
                    num2 = displayResult.textContent;
                    result = operate(num1, operator, num2);
                    displayResult.textContent = result
                    displayEquation.textContent = num1 + operator + num2 + "=";
                    num1 = result;
                    num2 = null;
                    operator = null;
                    decimalUsed = false;
                    continueCalc = true;
                }
            }
            else if (isEquals) {
                if (num1 !== null && operator !== null) {
                    num2 = displayResult.textContent;
                    result = operate(num1, operator, num2);
                    displayResult.textContent = result
                    displayEquation.textContent = num1 + operator + num2 + "=";
                    num1 = result;
                    num2 = null;
                    operator = null;
                    decimalUsed = false;
                    continueCalc = true;
                }
            }
        }
    });
});

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator == '+') {
        result = num1 + num2;
        resultString = result.toString();
        if (resultString.length > 8) {
            return result.toExponential(3);
        }
        return result;
    }
    else if (operator == '-') {
        result = num1 - num2;
        resultString = result.toString();
        if (resultString.length > 8) {
            return result.toExponential(3);
        }
        return result;
    }
    else if (operator == '*') {
        result = num1 * num2;
        resultString = result.toString()
        if (resultString.length > 8) {
            return result.toExponential(3);
        }
        return result
    }
    else if (operator == '/') {
        if (num2 == 0) {
            alert('Can not divide by zero')
            return 0
        }
        else {
            result = num1 / num2;
            resultString = result.toString();
            if (resultString.length > 8) {
                return result.toExponential(3);
            }
            return result;
        }
    }
}
document.addEventListener('keydown', function (event) {
    const key = event.key;

    const keyToClassMapping = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three',
        '4': 'four', '5': 'five', '6': 'six',
        '7': 'seven', '8': 'eight', '9': 'nine',
        '.': 'decimal', '=': 'equals', 'Enter': 'equals',
        '+': 'addition', '-': 'subtract', '*': 'multiply', '/': 'divide',
        'Escape': 'clear', 'Backspace': 'delete'
    };

    let buttonClass = keyToClassMapping[key];

    if (buttonClass) {
        const selector = `.button.${buttonClass}`;
        const button = document.querySelector(selector);

        if (button) {
            const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true });
            button.dispatchEvent(mouseDownEvent);

            const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true });
            button.dispatchEvent(mouseUpEvent);
        }
    }
});
