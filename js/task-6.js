const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

inputRef.addEventListener('blur', handlerBlur);
inputRef.addEventListener('focus', handlerFocus);

function validate(str) {
    if (str.length == inputLength) return str;
};

function handlerBlur(event) {
    const { value } = event.target;
    if (!validate(value)) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};

function handlerFocus(event) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
};