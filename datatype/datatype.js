// 특수한 숫자값을 표현

// 1. 전역변수 - 플러스 무한대
Infinity

// 2. 전역변수 - 부정 값(Not a Number)
NaN

// 3. Number의 프로퍼티 - 플러스 무한대
Number.POSITIVE_INFINITY

// 4. Number의 프로퍼티 - 마이너스 무한대
Number.NEGATIVE_INFINITY

// 5. Number의 프로퍼티 - 표현할 수 있는 최댓값
Number.MAX_VALUE

// 6. Number의 프로퍼티 - 표현할 수 있는 최솟값
Number.MIN_VALUE

// 7. Number의 프로퍼티 - 부정 값(Not a Number)
Number.NaN

// 8. Number의 프로퍼티 - 2.22044604925031e-16
Number.EPSILON

// 9. Number의 프로퍼티 - 900071992547400990
Number.MAX_SAFE_INTEGER

// 10. Number의 프로퍼티 - -900071992547400990
Number.MIN_SAFE_INTEGER

// 심벌

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 == symbol2); // false

let symbol3 = Symbol('사랑');
console.log(symbol3.toString()); // Symbol(사랑)

// 오셀로 게임 -> 칸의 상태를 값으로 표현할 때
let none = 0; // 칸에 돌이 놓여 있지 않은 상태
let black = -1; // 칸에 흑돌이 놓여 있는 상태
let white = 1; // 칸에 백돌이 놓여 있는 상태

// 칸의 상태를 cell 변수에 저장할 때 위의 코드의 경우 아래와 같이 두 코드로 작성했을 경우
// 프로그램이 모두 동작할 수 있다.
// 그러나 프로그램 읽는데 혼동이 올 수 있다.
let cell;
cell == white;
cell == 1;

// 심벌을 사용하면 변수명만을 이용해서 상태를 구분할 수 있다.
let none = Symbol('none');
let black = Symbol('black');
let white = Symbol('white');

// 심벌과 문자열 연결하기
let sym1 = Symbol.for('love');
let sym2 = Symbol.for('love');
console.log(sym1 == sym2); // true

let sym3 = Symbol('love');
console.log(Symbol.keyFor(sym1)); // love
console.log(Symbol.keyFor(sym3)); // undefined

// 템플릿 리터럴

// 기본적인 사용법 : 역따옴표(`)로 묶은 문자열

let t1 = `I'm a IronMan`;

let t2 = `I'm a
            IronMan`;

let t3 = String.raw`I'm a \n IronMan`;

console.log('t1:', t1); //t1: I'm a IronMan
console.log('t2:', t2); //t2: I'm a (\n) IronMan => 실제로 줄바꿈 이스케이프 시퀀스 문자 사용한 것 처럼 두 줄로 출력
console.log('t3:', t3); //t3: I'm a \n IronMan
