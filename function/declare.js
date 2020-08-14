// 함수 선언문으로 정의
function sum(a, b) {
    return a + b;
}

// 함수 리터럴로 정의
let sum = function (a, b) {
    return a + b;
}

// Function() 생성자 정의
let sum = new Function('a, b', 'return a + b');
sum(10, 20);

// Arrow Function 표현식 정의
let sum3 = (a, b) => a + b;

// 중첩 함수
function calc(a) {
    let b = 10;
    let c = sum();
    return c;

    function sum() {
        return a + b;
    }
}
let n = calc(10);
console.log(n);
//20




