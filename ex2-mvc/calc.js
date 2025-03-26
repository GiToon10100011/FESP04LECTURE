Vue.createApp({
    data() {
        return {
            // model 데이터를 정의하고
            x: 0,
            y: 0,
            result: 0,
        };
    },
    methods: {
        submitHandler() {
            // model 데이터를 변경하는 로직을 정의한다.
            this.result = this.x + this.y;
        },
    },
}).mount('#calc-app');


// ---- MVC를 이용할 경우의 코드량 비교 ------------
// const section = document.querySelector('#calc-app');
// const xInput = section.querySelector('.x-input');
// const yInput = section.querySelector('.y-input');
// const resultSpan = section.querySelector('.result-span');
// const submitInput = section.querySelector('.submit-input');

// submitInput.onclick = (e) => {
//     e.preventDefault();

//     const x = Number(xInput.value);
//     const y = Number(yInput.value);
const result = x + y;
//     resultSpan.textContent = result;
// };
