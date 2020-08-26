// 프로토타입 객체

function F1() {}

console.log(F1.prototype); // {constructor: ƒ}

// 프로토타입 객체의 프로터티 사용
F1.prototype.humanName = "탱구링";

// 프로토타입 객체로 F1 함수의 프로퍼티 추가
F1.prototype.constructor.age = 30;

// 결과
console.log("F1.prototype.humanName:", F1.prototype.humanName); // F1.prototype.humanName: 탱구링
console.log("F1.age:", F1.age); // F1.age: 30
console.log("F1.humanName:", F1.humanName); // F1.humanName: undefined

// F1 함수객체 인스턴스 생성
let a = new F1();
a; // F1()
console.log("a.humanName:", a.humanName);

// 동일한 이름의 프로퍼티가 있으면 그 프로퍼티에 값을 대입
// 없으면 그 이름으로 프로퍼티를 추가한 후 값 대입
a.humanName = "탱구링2";
console.log("a:", a.humanName); //a: 탱구링2
console.log("prototype:", F1.prototype.humanName); // prototype: 탱구링


// 프로토타입 객체 프로퍼티 변경

// 수정
F1.prototype.humanName = "탱구링3";
console.log("prototype:", F1.prototype.humanName); // prototype: 탱구링3
// 삭제
delete F1.prototype.humanName; // true

// 프로토타입 객체를 통한 메서드 정의 후 인스턴스에서 참조하기

function Calc(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
}

// 동일한 기능을 하는 메서드가 인스턴스 마다 생성
let calc1 = new Calc(1, 2);
let calc2 = new Calc(3, 4);

function Calc2(a, b) {
    this.a = a;
    this.b = b;
    Calc2.prototype.sum = function () {
        return this.a + this.b;
    }
}

Calc2();

// 프로토타입 상속

// 프로토타입 체인

let a = {
    name: "탱구링",
    age: 30,
    sayHello: function () {
        return `안녕 내 이름은 ${this.name}이고 나이는 ${this.age}야 잘 부탁해`;
    }
};

let b = {
    name: "준영"
};

b.__proto__ = a;

let c = {};
c.__proto__ = b;
c.sayHello(); //

// 프로토타입 가져오기
function Calc(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
}

let calc5 = new Calc(1, 2);
console.log(Object.getPrototypeOf(calc5));

// new 연산자로 인스턴스 생성시 내부 프로세스

function Calc2(a, b) {
    this.a = a;
    this.b = b;
}

Calc2.prototype.sum = function () {
    return this.a + this.b;
}


let a = new Calc2({x: 10, y: 30}, 20);

// 내부 프로세스

// 1. 빈 객체 생성
let newObj = {};

// 2. Calc2.prototype을 생성된 객체의 프로토타입으로 설정
// 만약 Calc2.prototype이 가리키는 값이 객체가 아니라면 Object.prototype을 프로토타입으로 설정
newObj.__proto__ = Calc2.prototype;

// 3. Calc2 생성자를 실행하고 newObj를 초기화. 이때 this는 1에서 생성한 객체로 설정됨, 인수는 new 연산자와 함께 사용한 인수를 사용
Calc2.apply(newObj, arguments);

// 4. 완성된 객체를 결괏값으로 반환
return newObj;


// 인스턴스 프로퍼티 생성 시간

function F1(a, b) {
    this.a = a;
    this.b = b;
}

let a = new F1(1, 2);

F1.prototype = {
    constructor: F1,
    sum: function () {
        return this.a + this.b;
    }
}

a.sum(); // Uncaught TypeError: a.sum is not a function

// 인스턴스가 생성될 때 프로토타입 객체에 프로퍼티 추가

let a = new F1(1, 2);

F1.prototype.sum = function () {
    return this.a + this.b;
}

a.sum(); // 3

// 프로토타입의 확인

// 1. instanceof 연산자 : 지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어있는지 확인
// 사용법 : 객체 instanceof 생성자

function F() {}

let obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);


// 2. isPrototypeOf 메서드 : 특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판정
// 사용법 : 프로토타입객체.isPrototypeOf(객체)

function F() {}

let obj = new F();
console.log(F.prototype.isPrototypeOf(obj)); // true
console.log(Object.prototype.isPrototypeOf(obj)); // true
console.log(Date.prototype.isPrototypeOf(obj)); // false

// Object.create를 통해 프로토타입을 지정해 객체 생성하기
// 사용법 : Object.create(arg1, arg2)
// 첫번째 인수는 필수이며 생성할 객체의 프로토타입을 지정한다.
// 두번째 인수는 선택이며 생성할 객체의 프로퍼티를 지정한다.

// 첫번째 인수 : 객체의 프로토 타입 지정
let apple = {
    name: "사과",
    brix: 10,
    describe: function () {
        return `과일 이름은 ${this.name}이고 당도는 ${this.brix}브릭스이다.`
    }
};
apple.describe(); // "과일 이름은 사과이고 당도는 10브릭스이다."

let orange = Object.create(apple);
orange.name = "오렌지";
orange.describe(); // "과일 이름은 오렌지이고 당도는 7브릭스이다."

// 프로토타입이 없는 객체 생성
let nothingProto = Object.create(null);

// 빈 객체를 프로토타입 객체로
let emptyProto = Object.create(Object.prototype);

// 두번째 인수 : 객체의 프로퍼티 지정
let team = {
    teamName: "고척동 스쿠버다이빙",
    introduce: function () {
        return `역사를 자랑하는 ${this.teamName}에 초대합니다!`
    }
};

let member = Object.create(team, {
    name: {
        value: "준영",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    },
    sayHello: {
        value: function () {
            return `내 이름은 ${this.name}이고 ${this.age}살이야. 잘 부탁해`;
        },
        writable: true,
        enumerable: false,
        configurable: true
    }
});

console.log(member); // {name: "준영", age: 30, sayHello: ƒ}
console.log(member.teamName); // 고척동 스쿠버다이빙 => 프로토타입 객체 프로퍼티 상속
member.introduce(); // "역사를 자랑하는 고척동 스쿠버다이빙에 초대합니다!" => 프로토타입 객체 프로퍼티 상속
member.sayHello(); // "내 이름은 준영이고 30살이야. 잘 부탁해"


