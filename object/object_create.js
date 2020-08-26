// Object.create로 객체 생성
// 명시적으로 객체의 프로토타입을 지정할 수 있다,
// 상속에서 사용

let fruit = Object.create(Object.prototype, {
    name: {
        value: "사과",
        writable: true,
        enumerable: true,
        configurable: true
    },
    brix: {
        value: 10,
        writable: true,
        enumerable: true,
        configurable: true
    }
});