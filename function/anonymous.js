// 즉시 실행 함수

// 기본적인 익명함수 실행
let f = function () {
    return 10;
}

f();

// 즉시 실행 함수 방법 1
(function () {
    return 10;
})();

// 즉시 실행 함수 방법 2
(function () {
    return 10;
}());

// 즉시 실행 함수는 함수 정의식을 그룹 연산자 ()로 묶은 것이다
(
    function (){
        return 10;
    }()
);

// 그룹 연산자() 대신 +, !, ~
+function () {
    return 30;
}();

!function () {
    return 40;
}();

~function () {
    return 50;
}();

// 인수 넘기기
(function (a, b) {
    return a + b;
})(1, 2);

// 이름 붙이기
(function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
})(5);

// 표현식으로 사용
let a = (function () {
    return 10;
})();

a;

// 이름 공간으로 활용
var x = "global x";
(function () {
    var x = "local x";
    var y = "local y";
})();
console.log(x); // global x
console.log(y); // Uncaught ReferenceError: y is not defined

(function () {
   // 이곳에 프로그램을 작성한다.
})();