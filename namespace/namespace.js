// 네임스페이스 패턴

// 객체 리터럴

var app = app || {};

// 프로퍼티 추가
app.name = "준영";
app.age = 30;
app.gender = "남";
app.nameCard = function () {
    console.log('nameCard:', this); // app을 가리킴
    return `${this.age}세 ${this.name}`;
};

// 부분 네임스페이스 생성
app.subApp = {};
app.subApp.tempDate = new Date();
app.subApp.temp = function () {
    console.log('temp:', this); // subApp을 가리킴
    return `${app.name}의 입사일은 ${this.tempDate}입니다.`
};

// 즉시 실행 함수

(function () {
 // 이곳에 프로그램을 작성하자
})();

// 즉시 실행 함수를 활용한 모듈 패턴
var Module = Module || {};

(function (_Module) {
    var name = "noName";

    function getName() {
        return name;
    }

    _Module.showName = function () {
        console.log(getName());
    };
    _Module.setName = function (x) {
        name = x;
    };

})(Module);
