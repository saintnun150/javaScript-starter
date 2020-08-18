// 클래스를 통한 객체 생성

// 클래스 선언문
class Person {

    // 생성자 정의
    constructor(name, age, gender) {
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    // 메서드 정의
    id() {
        return `${this.gender}${this.age}${this.name}`;
    }
}

// 인스턴스
let p2 = new Person("연주", "26", "여");
console.log(p2); // Person {age: "26", name: "연주", gender: "여"}
console.log(p2.id()); //여26연주

// 클래스 표현식
let Person = class {
    // 생성자 정의
    constructor(name, age, gender) {
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    // 메서드 정의
    id() {
        return `${this.gender}${this.age}${this.name}`;
    }
}

// 인스턴스
let p3 = new Person("지환", 28, "남");
console.log(p3); // Person {age: "28", name: "지환", gender: "남"}
console.log(p3.id()); //남28지환

// new 생성자를 통한 인스턴스를 생성해야함
console.log(Person('영구', 31, '남')); //Uncaught TypeError: Class constructor Person cannot be invoked without 'new'

