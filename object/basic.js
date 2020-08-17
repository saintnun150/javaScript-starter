// 객체 리터럴로 객체 생성
let student = {name: '준영', grade: '3', rank: 'S'};

// 프로퍼티 이름은 문자열로 작성해도 됨
let student2 = {"name": '준영', "grade": '3', "rank": 'S'};

// 빈 객체 생성
let student3 = {};

// 객체 읽기

console.log(student.name); // 준영
console.log(student["grade"]); // 3
console.log(student.teacher); // 객체에 없는 프로퍼티 읽을 때 : undefined
console.log(student3); // 빈 객체 Object{}

// 프로퍼티 추가 & 삭제
student.className = '돌고래';
console.log(student); // {name: "준영", grade: "3", rank: "S", className: "돌고래"}

delete student.rank; // true
console.log(student); // {name: "준영", grade: "3", className: "돌고래"}

console.log(student); // {name: "준영", grade: "3", className: "돌고래"}
console.log("rank" in student); // false
console.log("name" in student); // true

// student객체는 Object 객체를 상속받았기 때문에 toString 프로퍼티가 true가 나옴
console.log("toString" in student);

// 객체는 참조 타입
let address = {city : 'seoul', tel : '010-1234-1234'};

// 변수 deliveryInfo가 address 객체를 참조
let deliveryInfo = address;

deliveryInfo.city = "인천";

console.log(address.city); // 인천
console.log(deliveryInfo.city); // 인천