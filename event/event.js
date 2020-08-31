// DOM요소 객체의 이벤트 처리기(핸들러) 프로퍼티에 설정
function showSideNav() {
    sideNav.style.display = "block";
}

let sideNav = document.getElementById("sideNav");
let btn = document.getElementById("btn");
btn.onclick = showSideNav();

// addEventListner 메서드 사용
let btn2 = document.getElementById("btn2");
btn2.addEventListener(type, listner, useCapture);

window.onload = function () {
    let button = document.getElementById("btn3");
    button.addEventListener("mouseover", function (e) {
        e.currentTarget.style.backgroundColor = "blue";
    }, false);
};

// 이벤트 전파를 제어

// stopPropagation 메서드

window.onload = function () {
    let div1 = document.getElementById("outer");
    let div2 = document.getElementById("inner2");

    div1.addEventListener("click", function (e) {
        console.log("여기는 outer 캡쳐링");
    }, true); // outer 이벤트 : 캡처링 단계에 실행

    div1.addEventListener("click", function (e) {
        console.log("여기는 outer 버블링");
    }, false); // outer 이벤트 : 버블링 단계에 실행

    div2.addEventListener("click", function (e) {
        console.log("여기는 inner2 버블링1");
        e.stopPropagation(); // 이벤트 전파 막음
    }, false);

    div2.addEventListener("click", function (e) {
        console.log("여기는 inner2 버블링2");
    }, false);
}

// stopImmediatePropagation 메서드 : 같은 레벨의 다른 이벤트 리스너까지 막음

window.onload = function () {
    let div1 = document.getElementById("outer");
    let div2 = document.getElementById("inner2");

    div1.addEventListener("click", function (e) {
        console.log("여기는 outer 캡쳐링");
    }, true); // outer 이벤트 : 캡처링 단계에 실행

    div1.addEventListener("click", function (e) {
        console.log("여기는 outer 버블링");
    }, false); // outer 이벤트 : 버블링 단계에 실행

    div2.addEventListener("click", function (e) {
        console.log("여기는 inner2 버블링1");
        e.stopImmediatePropagation(); // 이벤트 전파 즉시 막음
    }, false);

    div2.addEventListener("click", function (e) {
        console.log("여기는 inner2 버블링2");
    }, false);
}

// preventDefault 메서드 : 웹 브라우저 기본 동작 막음

window.onload = function () {
    let anchor = document.getElementById("move-to");
    anchor.addEventListener("click", function (e) {
        if (!confirm("구글로 이동하시겠습니까?")) {
            e.preventDefault();
        }
    }, false);
}