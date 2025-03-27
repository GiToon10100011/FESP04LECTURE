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
    template:`
    <section id="calc-app">
      <h1>덧셈 계산기</h1>
      <form>
        <fieldset>
          <legend>계산기 입력폼</legend>
          <div>
            <label>x:</label>
            <input class="x-input" dir="rtl" value="0" v-model.number="x" />
            <label>y:</label>
            <input class="y-input" dir="rtl" value="0" v-model.number="y" />
            <span>=</span>
            <span class="result-span" v-text="result">0</span>
          </div>
          <hr />
          <div>
            <input type="submit" value="초기화" />
            <input
              class="submit-input"
              type="submit"
              value="계산하기"
              @click.prevent="submitHandler"
            />
          </div>
        </fieldset>
      </form>
    </section>`
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
