let displayValue = ''; 

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateModulus() {
    try {
        const result = eval(displayValue) % 1 === 0 ? eval(displayValue) : eval(displayValue).toFixed(2);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
