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
    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("mouseover", function (e) {
        e.currentTarget.style.backgroundColor = "blue";
    }, false);
};
