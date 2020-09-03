// 콜백 함수

// 다른 함수에 인수로 넘겨지는 함수
// 호출한 함수 안에서 특정 함수를 실행시켜 그 함수에 제어권을 부여함, 주체는 여전히 호출한 함수이다. 단 콜백 함수의 작업내용에는 관여하지 않음
// 함수 호출할 떼 다른 새로운 작업이 필요하거나 반드시 그 함수 실행이 끝나고 나서 다음 함수가 실행되어야할 때 사용
function f(callback) {
    callback();
}
function callback() {
    console.log("callback");
}

f1(callback);

function f2(a, b, callback) {
    let multiply = a * b;
    callback(multiply);
}

f2(5, 10, function (multiply) {
    console.log(multiply);
});

// 이벤트 핸들러, 리스너, 타이머
// 해당 메서드들은 특정 이벤트나 인터벌을 설정하지만

console.log("AA");
setTimeout(function () {
    console.log("BB")
}, 3000);
console.log("CC");