const counterRef = document.querySelector('#counter');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"');
const valueRef = document.querySelector('#value');

btnDecrementRef.addEventListener('click', decrementCalc);
btnIncrementRef.addEventListener('click', incrementCalc);

let counterValue = 0;

function decrementCalc() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

function incrementCalc() {
    counterValue += 1;
    valueRef.textContent = counterValue;
};