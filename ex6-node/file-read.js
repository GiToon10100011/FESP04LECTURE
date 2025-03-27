let module1 = require('./module1.js');
let fs = require('fs');
let m2 = require('newlec-hello');
console.log(m2.hello()); // Hello, Node.js!

// 1. 동기형 함수사용
// let data = fs.readFileSync('data.txt', 'utf8');
// 2. 비동기형 콜백함수 사용
// fs.readFile('data.txt', 'utf8', (err,data)=>{
//     console.log(data); // Hello, Node.js!
// });
// 3. 비동기형 프로미스 사용
(async ()=>{
    let data = await fs.readFile('data.txt', 'utf8');
    console.log(data); // Hello, Node.js!
})();

// const promise = fs.readFile('data.txt', 'utf8');
// promise
// .then((data)=>{
//     // console.log(data); // Hello, Node.js!
//     return data.substring(0,5);
// })
// .then((sub)=>{
//     console.log(sub); 
// }
// )



console.log(module1.add()); // 7