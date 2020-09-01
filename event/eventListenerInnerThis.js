// bind 메서드

window.onload = function () {

    function Student(name) {
        this.name = name;
    }

    Student.prototype.introduce = function () {
        console.log(`소개글: ${this.name}`);
    }

    let s1 = new Student("탱구탱구");
    let button = document.getElementById("btn");

    button.addEventListener("click", s1.introduce.bind(s1), false);
}

// 익명 함수

window.onload = function () {

    function Student(name) {
        this.name = name;
    }

    Student.prototype.introduce = function () {
        console.log(`소개글: ${this.name}`);
    }

    let s1 = new Student("탱구탱구");
    let button = document.getElementById("btn");

    // 이벤트 리스너
    button.addEventListener("click", function (e) {
        s1.introduce();
    }, false);

    // 이벤트 핸들러
    button.onclick = function (e) {
        s1.introduce();
    }
}


// 화살표 함수

window.onload = function () {

    function Student(name) {
        this.name = name;
        this.introduce = () => {
            console.log(`소개글: ${this.name}`);
        }
    }

    /*Student.prototype.introduce = function () {
        console.log(`소개글: ${this.name}`);
    }*/

    let s1 = new Student("탱구탱구");
    let button = document.getElementById("btn");

    button.addEventListener("click", s1.introduce, false);
}

// addEventListner의 두번째 인수로 객체를 넘기고 handleEvent 메서드 정의하기
window.onload = function () {

    function Student(name) {
        this.name = name;
    }

    // 객체에 handleEvent 메서드 정의
    Student.prototype.handleEvent = function () {
        console.log(`소개글: ${this.name}`);
    }

    let s1 = new Student("탱구탱구");
    let button = document.getElementById("btn");

    button.addEventListener("click", s1, false);
}