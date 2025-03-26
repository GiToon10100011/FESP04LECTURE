const section = document.querySelector('#calc-app');
const xInput = section.querySelector('.x-input');
const yInput = section.querySelector('.y-input');
const resultSpan = section.querySelector('.result-span');
const submitInput = section.querySelector('.submit-input');

submitInput.onclick = (e) => {
    e.preventDefault();

    const x = Number(xInput.value);
    const y = Number(yInput.value);
    const result = x + y;
    resultSpan.textContent = result;
};
