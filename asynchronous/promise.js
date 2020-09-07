// Promise

let promise = new Promise(function (resolve, reject) {
    // 최초 비동기 처리 코드
});

// 화살표 함수 사용
let promise = new Promise((resolve, reject) => {
    // 최초 비동기 처리 코드
});

// resolve 상황
let promise = new Promise((resolve, reject) => {
    // 최초 비동기 처리 코드
    setTimeout(() => {
        console.log("A");
        resolve("B");
    }, 1000);
});

promise.then((hello) => {
    console.log(hello);
});

// reject 상황
let promise = new Promise((resolve, reject) => {
    // 최초 비동기 처리 코드
    setTimeout(() => {
        let num = parseInt(prompt("10 이하의 숫자를 입력하시오"));
        if (num <= 10) {
            resolve("정답");
        }else {
            reject(`오류 : 숫자 ${num}은(는) 10을 초과하였습니다.`);
        }
    }, 1000);
});

promise
    .then((hello) => {
        console.log(hello);
    })
    .catch((error) => {
        console.log(error);
    });

// then의 두 번째 인수로 reject 콜백 함수 넘기기

let promise = new Promise((resolve, reject) => {
    // 최초 비동기 처리 코드
    setTimeout(() => {
        let num = parseInt(prompt("10 이하의 숫자를 입력하시오"));
        if (num <= 10) {
            resolve(num);
        }else {
            reject(`오류 : 숫자 ${num}은(는) 10을 초과하였습니다.`);
        }
    }, 1000);
});

promise.then(
    (num) => {
        console.log(`정답 : 숫자 ${num}은(는) 10 이하입니다.`);
    },
    (error) => {
        console.log(error);
    }
);

// Promise가 실행하는 콜백 함수에 인수 넘기기

function buySomething(budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payment = parseInt(prompt("얼마를 지불하시겠습니까?"));
            let balance = budget - payment;
            if (balance > 0) {
                console.log(`${payment}원을 지불하였습니다.`);
                resolve(balance);
            } else {
                reject(`잔액이 부족합니다. 잔액은 ${budget}원 입니다.`);
            }
        }, 1000);
    });
}

buySomething(1000)
    .then((balance) =>{
        console.log(`잔액은 ${balance}원 입니다.`);
    })
    .catch((error) =>{
        console.log(error);
    });


// Promise 응용
// 비동기 처리 직렬로 연결하기

function buySomething(budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payment = parseInt(prompt("얼마를 지불하시겠습니까?"));
            let balance = budget - payment;
            if (balance > 0) {
                console.log(`${payment}원을 지불하였습니다.`);
                resolve(balance);
            } else {
                reject(`잔액이 부족합니다. 잔액은 ${budget}원 입니다.`);
            }
        }, 1000);
    });
}

buySomething(1000)
    .then((balance) =>{
        console.log(`잔액은 ${balance}원 입니다.`);
        return buySomething(balance);
    })
    .then((balance) =>{
        console.log(`잔액은 ${balance}원 입니다.`);
        return buySomething(balance);
    })
    .then((balance) =>{
        console.log(`잔액은 ${balance}원 입니다.`);
        return buySomething(balance);
    })
    .catch((error) =>{
        console.log(error);
    });

// 비동기 처리 병렬로 연결하기
Promise.all(iterable);

function buySomething(name, budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payment = parseInt(prompt(`${name}님, 얼마를 지불하시겠습니까?`));
            let balance = budget - payment;
            if (balance > 0) {
                console.log(`${name}님 ${payment}원을 지불하였습니다.`);
                resolve(balance);
            } else {
                reject(`잔액이 부족합니다. ${name}님의 잔액은 ${budget}원 입니다.`);
            }
        }, 1000);
    });
}

Promise.all([
    buySomething("탱구링", 600),
    buySomething("아저씨", 1000),
    buySomething("피카츄", 300)
])
    .then((balance) =>{
        console.log(balance);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.race 메서드

Promise.race(iterable);

function buySomething(name, budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let payment = parseInt(prompt(`${name}님, 얼마를 지불하시겠습니까?`));
            let balance = budget - payment;
            if (balance > 0) {
                console.log(`${name}님 ${payment}원을 지불하였습니다.`);
                resolve(balance);
            } else {
                reject(`잔액이 부족합니다. ${name}님의 잔액은 ${budget}원 입니다.`);
            }
        }, 1000);
    });
}

Promise.race([
    buySomething("탱구링", 600),
    buySomething("아저씨", 1000),
    buySomething("피카츄", 300)
])
    .then((balance) =>{
        console.log('balance:', balance);
    })
    .catch((error) => {
        console.log(error);
    });