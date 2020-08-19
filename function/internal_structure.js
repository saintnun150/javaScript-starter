// 실행 문맥의 구조
ExecutionContext = {
    // 렉시컬 환경 컴포넌트
    LexicalEnvironmentComponent: {
        //환경 레코드
        EnvironmentRecord : {
            // 선언적 환경 레코드
            DeclarativeEnvironmentRecord : {},
            // 객체 환경 레코드
            ObjectEnvironmentRecord : {}
        },
        // 외부 렉시컬 환경 참조
        OuterLexicalEnvironmentReference : {}
    },
    // 변수 환경 컴포넌트
    VariableEnvironmentComponent: {},
    // 디스 바인딩 컴포넌트
    ThisBindingComponent: {},
}

// 외부 렉시컬 환경 참조

function f1() {
    let a = 10;

    function f2() {
        a = a + 1;
    }
    f2();
    return a;
};

f1();

// 전역 환경
GlobalEnvironment = {
    ObjectEnvironmentRecord : {
        bindObject : window
    },
    OuterLexicalEnvironmentReference : null
}

// 전역 실행 문맥
ExecutionContext = {
    // 렉시컬 환경 컴포넌트
    LexicalEnvironmentComponent: GlobalEnvironment,
    // 디스 바인딩 컴포넌트
    ThisBindingComponent: window
}

// 프로그램 실행과 실행 문맥
function multiply(x, y) {
    return x * y;
}

function calculateSquare(a) {
    let result = multiply(a, a);
    console.log(result);
    return result;
}

// 호출 스택 비동기 처리
function eventTask() {
    console.log("step 0");
    setTimeout(function f1 () {
        console.log("step 1");
    }, 100);

    setTimeout(function f2() {
        console.log("step 3");
    }, 50);
    console.log("step 2");
}
eventTask();