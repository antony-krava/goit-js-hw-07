const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sizeControlRef.addEventListener('input', handlerSize);

function handlerSize(e) {
    e.preventDefault();
    textRef.style.fontSize = `${sizeControlRef.value}px`
};