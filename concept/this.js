// this
function test1() {
    return this;
}

test1(); // window{...}

// 객체 리터럴 안의 this
let t1 = {
    a : "name",
    b : function () {
        return this;
    }
}
console.log(t1.b()); // {a: "name", b: ƒ} => t1 객체

// 생성자 함수 안의 this
function Member(name, age) {
    console.log('this:', this); // this: Member {}
    this.name = name;
    this.age = age;
}

let m1 = new Member("준영", 30);
console.log(m1); // Member {name: "준영", age: 30}

// new 생성자 없이 객체 생성 시 디스 바인딩 컴포넌트 위치
function Member(name, age) {
    console.log('this:', this); // this: Member {}
    this.name = name;
    this.age = age;
}

Member("준영", 30); // this: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

function f1() {
    console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
}
f1();

// apply와 call 메서드
function introduce(greetings, closing) {
    console.log(`${greetings}! 내 이름은 ${this.name}이고 나이는 ${this.age}살이야 ${closing}!`);
}

let h1 = {
    name: "준영",
    age: 30
};

//apply => 인수가 배열
introduce.apply(h1, ["Hello!", "Nice to Meet you"]); // Hello!! 내 이름은 준영이고 나이는 30살이야 Nice to Meet you!
introduce.apply(h1, ["Hi", "Good Luck"]); // Hi! 내 이름은 준영이고 나이는 30살이야 Good Luck!

// 유사 배열 객체도 가능
let text = {
    greetings : "hi",
    closing : "잘 부탁해"
}

introduce.apply(h1, [text.greetings, text.closing]); //hi! 내 이름은 준영이고 나이는 30살이야 잘 부탁해!

// call => 인수가 쉼표로 구분한 값의 목록
introduce.call(h1, "안녕", "잘 부탁해"); // 안녕! 내 이름은 준영이고 나이는 30살이야 잘 부탁해!
introduce.call(h1, "반가워", "잘 지내자"); // 반가워! 내 이름은 준영이고 나이는 30살이야 잘 지내자!

// bind 메서드
function introduce(greetings, closing) {
    console.log(`${greetings}! 내 이름은 ${this.name}이고 나이는 ${this.age}살이야 ${closing}!`);
}

let h1 = {
    name: "준영",
    age: 30
};

let introduceH1 = introduce.bind(h1);
introduceH1("잘 들어~", "한 번 잘 지내보자"); // 잘 들어~! 내 이름은 준영이고 나이는 30살이야 한 번 잘 지내보자!



