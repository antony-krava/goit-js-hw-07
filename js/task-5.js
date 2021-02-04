const inputRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handlerInput);

function handlerInput(event) {
    spanNameRef.textContent = event.target.value;
    const { value } = event.target;
    if (!value) {
        spanNameRef.textContent = 'незнакомец';
    };
};