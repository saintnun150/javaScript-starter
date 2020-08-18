// 생성자
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = function () {
        return `${this.gender}${this.age}${this.name}`;
    }
}

// 인스턴스
let p1 = new Person("준영", 30, "남");
console.log(p1); // Person {name: "준영", age: 30, gender: "남", id: ƒ}
console.log(p1.id()); // "남30준영"



