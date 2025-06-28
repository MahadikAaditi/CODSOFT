let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        previousInput = '';
        operator = '';
        resultDisplayed = false;
    }

    currentInput += number;
    updateFullDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;

    if (previousInput !== '' && operator !== '') {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateFullDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result = '';

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    resultDisplayed = true;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    resultDisplayed = false;
    updateDisplay('0');
}

function updateFullDisplay() {
    if (previousInput !== '' && operator !== '') {
        display.value = `${previousInput} ${operator} ${currentInput}`;
    } else {
        display.value = currentInput || '0';
    }
}

function updateDisplay(value) {
    display.value = value;
}