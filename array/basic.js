// 배열 리터럴

let array1 = [1, 2, 3, 4, 5];

// 인덱스
//각 값에 해당하는 인덱스는 왼쪽부터 0, 1, 2...

// 빈 배열 생성
let array2 = [];
console.log(array2);

// 배열 요소 생략
let array3 = [1, , 3];
console.log(array3); // (3) [1, empty, 3]

// 다양한 타입의 배열 요소
let array4 = [1, 2.5, "apple", true, false, {a: 1, b: 2}, [10, 20, 30, 40]];

// length 프로퍼티
let array4 = [1, 2, 3, 4];
console.log(array4); // (4) [1, 2, 3, 4]
console.log(array4.length); // 4

// 배열 길이 삭제
array4.length = 2;
console.log(array4); // (2) [1, 2]

// 배열 길이 증가
let array5 = [1, 2, 3, 4];
array5.length = 6;
console.log(array5); //(6) [1, 2, 3, 4, empty × 2]
console.log(array5.length); // 6

// Array 생성자를 통한 생성
let array6 = new Array(1, 2, 3); // [1, 2, 3]
console.log(array6);
let array7 = new Array(); // 빈 배열 생성

let array8 = new Array(1, 2.5, "apple", true, false, {a: 1, b: 2}, [10, 20, 30, 40]);

// 생성자의 인수가 1개이고 양의 정수 일때는 해당 정수 값 길이를 가진 빈 배열 생성
let array9 = new Array(3);

// 생성자의 인수가 1개이고 음수일 때는 오류
let array10 = new Array(-1); // Uncaught RangeError: Invalid array length

// 배열 요소의 참조
console.log(array8[2]); // apple

let variable1 = array8[0];
let variable2 = array8[1];
let variable3 = array8[3];
let variable4 = array8[5];
let variable5 = array8[6];

console.log(variable1); // 1
console.log(variable2); // 2.5
console.log(variable3); // true
console.log(variable4); // {a:1, b: 2}
console.log(variable5); // [10,20,30,40]

// 배열도 객체
let array11 = ["A", "B"];
console.log(array11[0]); // A
console.log(array11["0"]); // A
console.log(array11[2]); // undefined

//배열 요소 추가 및 삭제
let array12 = ["A", "B"];

// 없는 배열 요소에 값 대입, 대입한 요소 리턴
array12[2] = "C";
console.log(array12); // (3) ["A", "B", "C"]

// push 메서드를 사용해 배열 끝에 요소를 추가, 배열 length 리턴
array12.push("D");
console.log(array12); // (4) ["A", "B", "C", "D"]

// 배열 요소 삭제 -> length는 바뀌지 않음, true 리턴
delete array12[0];
console.log(array12); // (4) [empty, "B", "C", "D"]
console.log(array12.length); // 4

// pop 메서드를 사용해 배열의 마지막 요소 제거, 제거된 요소 리턴
array12.pop(); // D

// shift 메서드를 사용해 배열의 첫번째 요소 제거, 제거된 요소 리턴
array12.shift(); // empty 이었기 때문에 undefined

// unshift 메서드를 사용해 배열의 첫번째 요소로 추가, 배열 lenth 리턴
array12.unshift("AA");
console.log(array12); //(3) ["AA", "B", "C"]

// splice 메서드를 사용해 배열의 특정 위치에 배열 요소를 추가하거나 특정 위치에 있는 요소를 지정한 수만큼 삭제
// array.splice(start, deleteCnt, items);

let array13 = ["A", "B", "C"];
array13.splice(1, 0, "D", "E"); // []
console.log(array13); // (5) ["A", "D", "E", "B", "C"]

array13.splice(0, 1); // ["A"]
console.log(array13); // (4) ["D", "E", "B", "C"]

array13.splice(1, 1, "F", "G", "H"); // ["E"]
console.log(array13); // (6) ["D", "F", "G", "H", "B", "C"]

// 희소배열
let array14 = ["A", "B"];
array14[3] = "C";
console.log(array14); // (4) ["A", "B", empty, "C"]
console.log(array14.length); // 4

let array15 = ["A", "B", "C"];
console.log(array15.length); // 3

// 배열 요소 확인법

for (let i in array14) {
    console.log(i); // 0, 1, 3
}

array14.hasOwnProperty("0"); // true
array14.hasOwnProperty("2"); // false


// 배열 요소의 정렬과 순서 반전
// sort 메서드 => 배열 요소를 문자열로 변경 후 정렬시키기 때문에 원하는 결과가 안나온다.

let array15 = [10, 3, 7, 40, 111, 32, 60, 300, 237];
array15.sort(); //(9) [10, 111, 237, 3, 300, 32, 40, 60, 7]

// 비교함수 function(a, b)의 반환값에 따른 정렬 규칙을 적용한다.
    // 1. 결과값이 0보다 작으면 a가 낮은 index로 정렬
    // 2. 결과값이 0이면 a와 b의 순서 변경하지 않음
    // 3. 결과값이 0보다 크면 b가 낮은 index로 정렬

array15.sort(function (a, b) {
    return a - b;
}); // (9) [3, 7, 10, 32, 40, 60, 111, 237, 300]


// reverse 메서드
let array17 = [1, 2, 3, 4];
array17.reverse(); //(4) [4, 3, 2, 1]















