// 자바스크립트 var, let , const

// var
// 유효 범위
var a = 'red'; // 함수 밖에서 선언 시 전역 변수
function f() {
    console.log('f함수 a:', a);
    var b = 'blue'; // 함수 안에서 선언시 해당 함수 내부에서 접근 가능한 지역 변수
    console.log('f함수 b:', b);
}

f();
console.log('외부 a:', a);
console.log('외부 b:', b);

////// 재선언 및 재할당 //////
var aa = 10;
console.log("sdfsdf");
function f2() {
    var aa = 20; // 변수 aa 재선언
    console.log('aa:', aa); // 20

    aa = 30; // 변수 aa 재할당
    console.log('aa:', aa); // 30
}

console.log('aa:', aa); // 10

f2();

//////////////////////////////////////////

console.log('outer x:', x) // global
var x = 'global';

function f1() {
    console.log('inner x:', x) // undefined
}
f1();
console.log('outer x:', x) // global

// let, const
// 블록 레벨 스코프

let a = 10;
function f1() {
    //console.log('a:', a);
    let a = 20;
    console.log('a:', a);
    //let a = 30;

    if (true) {
        let b = 5;
        for (let i = 1; i < 5; i++) {
            b = b + 1;
        }
        console.log('b:', b);
    }
    console.log('b:', b); // Uncaught ReferenceError: b is not defined
}

f1();

console.log('a:', a);

////////// let, const와 TDZ //////////

// var

console.log('x:', x); // undefined
var x = 'global';
console.log('x:', x); // global

// 위 코드는 실제로 아래와 같이 실행된다.

var x; // 변수 x선언과 동시에 undefined 초기화
console.log('x:', x); // undefined 출력

x = 'global' // global 할당
console.log('x:', x); // global 출력

///////// let const ///////////

console.log('x:', x);
let x = 'global';

// 위 코드의 실제 실행 구조
let x; // 변수 x선언은 되지만 초기화가 안 됨
console.log('x:', x);

// 초기화 전에 접근해서
// Uncaught ReferenceError: Cannot access 'a' before initialization 발생 후 프로그램 중지
x = 'global' // 어휘적 바인딩이 실행되어 실제로 값을 할당 받음


// 변수 x가 정상적으로 출력되기 위한 수정 코드
let x = 'global';
console.log('x:', x);


// 위 코드의 실제 실행 구조
let x; // 변수 x선언
x = 'global'; // 어휘적 바인딩이 실행되어 변수가 초기화 됨

console.log('x:', x); // x: global


//////////// 재할당 문제 ///////////////

// let : 가능
// const : 불가능

// let
let a = 10;
a = 20;
console.log('a:', a);

function f3() {
    let b = 100;
    b = 200;
    b = 'string';
    console.log('b:', b);
}

f3();

// const
const a = 100;
a = 200; // Uncaught TypeError: Assignment to constant variable
console.log('a:', a);

function f4() {
    const b = 1000;
    b = 'string';
    console.log('b:', b);
}

f4();

// 초기화 문제

let x;
console.log('x:', x); // undefined

const x; // Uncaught SyntaxError: Missing initializer in const declaration
console.log('x:', x);

console.log(a);
let a;

// 위 코드의 실제 실행 구문

let a; // 호이스팅 됨
console.log(a); // 어휘적 바인딩이 실행되지 않았는데 접근 => 참조 에러

// 위 코드의 수정 코드
let a;
console.log(a);

let a;
a = ?? // 어휘적 바인딩 실행 시 초기화 구문이 없음

a = undefined; // undefined 할당
console.log(a); // undefined 출력





