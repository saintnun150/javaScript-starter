// 접근자 메서드
// join 메서드

let a = ["A", "B", "C", date, ["AA", "BB"]];
a.join("/");
typeof a.join("/")
console.log;

// concat 메서드

let b = ["A", "B", "C"];
b.concat(["1", "2"], "Z", "Y", true, 10);

let bb = ["A", "B", "C"];
let cc = ["100", "200"];
bb.concat(["1", "2"], "Z", "Y", cc);

let bbb = ["A", "B", "C"];
bbb.concat("D", [["E", "F", "G"]]);

// slice 메서드

let d = ["A", "B", "C", "D", "E", "F"];
d.slice(1, 4); // (3)["B", "C", "D"]

d.slice(1, -1); // (4) ["B", "C", "D", "E"]

d.slice(-2, -3); // [] => 제거된 요소가 없으니 빈 배열 반환

d.slice(-3, -2); // ["D"]

// indexOf & lastIndexOf

let e = ["A", "A", "B", "C", "D", "E", "F"];
e.indexOf("A");
e.lastIndexOf("A");

e.indexOf("A", 1);

// toString &toLocaleString

let date = new Date();
let a = ["A", "B", "C", date, ["AA", "BB"]];

a.toString(); // "A,B,C,Thu Sep 10 2020 12:10:29 GMT+0900 (대한민국 표준시),AA,BB"

a.toLocaleString(); // "A,B,C,2020. 9. 10. 오후 12:10:38,AA,BB"

a.join(); // "A,B,C,Thu Sep 10 2020 12:10:44 GMT+0900 (대한민국 표준시),AA,BB"