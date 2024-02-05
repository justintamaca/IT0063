let displayValue = '0';
let operator = '';
let prevValue = '0';

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function operate(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    prevValue = displayValue;
    displayValue = '0';
}

function calculate() {
    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(displayValue);

    if (isNaN(num1) || isNaN(num2)) {
        displayValue = 'Error';
    } else {
        switch (operator) {
            case '+':
                displayValue = (num1 + num2).toString();
                break;
            case '-':
                displayValue = (num1 - num2).toString();
                break;
            case '*':
                displayValue = (num1 * num2).toString();
                break;
            case '/':
                if (num2 === 0) {
                    displayValue = 'Error';
                } else {
                    displayValue = (num1 / num2).toString();
                }
                break;
            default:
                break;
        }
    }

    operator = '';
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function () {
    updateDisplay();
});
