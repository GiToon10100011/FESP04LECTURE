let f3;
let x = 100;
let f1 = function(){    
    let x = 40;
    console.log("f1:", window.x, x);
    f3 = function(){
        console.log(x);
    }
}

console.log("global:", window.x, x);

f1();
f3();
f3();