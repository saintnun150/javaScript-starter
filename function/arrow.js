// 화살표 함수 표현식

// 화살표 함수는 함수 리터럴(익명함수)의 단축 표현

// 함수 리터럴
let a = function(x) {
    return x * x;
}

// 화살표 함수
let a = (x) => {
    return x * x
};

// 인수가 하나일 때 인수 묶는 소괄호 생략
let a = x => {
    return x * x;
}

// 인수 여러개
let b = (x, y, z) => {
    return x + y + z;
}

// 인수가 없다면 소괄호 생략 불가
let c = () => {
    return false;
}

// 함수 코드가 return 뿐일때 중괄호, return 생략가능
let d = x => x * x;

// 반환값이 객체 리터럴이면 객체 리터럴을 그룹연산자 ()로 묶어야함
let e = (x, y) => ({a: x, b: y});

// 즉시 실행 함수
(x => x * x)(10; // 100


// 함수 리터럴 방식과 차이점

// 1. this의 값이 함수를 정의할 때 결정된다.

let obj = {
    hello: function () {
        console.log('hello:', this); // obj
        let x = function () {
            console.log('x:', this);
        }
        x();
        let y = () => console.log('y:', this);
        y();
    }
};
obj.hello();

let bb = function () {
    console.log(this.name);
}

let cc = () => console.log(this.name);

let oh = {
    name: "준영"
};

bb.call(oh); // 준영
cc.call(oh); // ""

// 2. arguments 변수가 없다.

let a = (a, b) => console.log(arguments);
a(); // Uncaught ReferenceError: arguments is not defined

// 함수 리터럴
let b = function (a, b) {
    console.log(arguments);
}
b(); // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]



// 3. 생성자로 사용할 수 없다.

// 화살표 함수
let Animal = (name, type) => {
    this.name = name;
    this.type = type;
};

let mammal = new Animal("호랑이", "육식동물"); // Uncaught TypeError: Animal is not a constructor

// 함수 리터럴
let Animal = function (name, type) {
    this.name = name;
    this.type = type;
};

let mammal = new Animal("호랑이", "육식동물"); // Animal{name: "호랑이", type: "육식동물"}

// 4. yield 키워드를 사용할 수 없다.
// 제너레이터로 사용 불가

