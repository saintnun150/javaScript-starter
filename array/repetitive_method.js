// 반복 메서드

//forEach 메서드

let a = [1, 2, 3, 4, 5];
let sum = 0;
a.forEach((v) => {
    sum += v;
});
console.log('sum:', sum);

a.forEach((v, i) => {
    a[i] = v * v;
});
console.log(`a:`, a);

// map 메서드

let a = [1, 2, 3, 4, 5];
let b = a.map(v => {
    return v * v;
});

// 배열 요소의 요소별 제곱근으로 배열 생성
let x = [1, 4, 9, 16, 25];
let y = x.map(Math.sqrt);
y;

// 객체 배열의 요소를 순회하여 각 객체가 가진 특정 프로터티 값으로 배열을 생성

let people = [
    {name: "준영", age: 30},
    {name: "영구", age: 30},
    {name: "뇌병", age: 30},
    {name: "경북", age: 30},
    {name: "염탁", age: 30}
];

let names = people.map(person => person.name);
let ages = people.map(person => person.age);
console.log('names:', names);
console.log('ages:', ages);



let people = [
    {name: "준영", age: 30},
    {name: "영구짱", age: 30},
    {name: "뇌병", age: 30},
    {name: "경북", age: 30},
    {name: "염탁짱", age: 30}
];

people
    .map(person => person.name)
    .map(name => name.length);


// reduce 메서드

array.reduce(callback, initial);

function callback(prev, value, index, array) {}

// 배열 요소들의 합
let a = [1, 2, 3, 4, 5];
a.reduce((prev, value) => {
    return prev + value
}, 0);
a.reduce((prev, value) => {
    return prev + value
});

// 배열 요소의 곱
let a = [1, 2, 3, 4, 5];
a.reduce((prev, value) => {
    return prev * value;
});

// 최댓값
a.reduce((p, v) => {
    return (p > v) ? p : v;
});

// 배열 요소 연결

let aa = ["A", "B", "C"];
aa.reduce((p, v) => {
    return p + " " + v;
});

aa.join(" ");

// 문자열 배열의 요소별 길이를 반환하는 객체

let bb = ["saint", "nun", "tang-goo"];
bb.reduce((p, v) => {
    p[v] = v.length;
    return p;
}, {});
