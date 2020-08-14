// 선언문

function f() {
    return;
}

// 호이스팅

console.log('step 1');
console.log(sum);
let sum = 10;

function calcsum(sum) {
    let x = sum + 10;
    console.log(sum);
    console.log('step 2');
    return x;
}

function f1(x) {
    return x * x;
}

let x = 3;

console.log(f1(x));


