// script.js
let displayValue = '';

function appendValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue || '0';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').innerText = displayValue;
    } catch {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
