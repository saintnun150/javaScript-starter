// 렉시컬 유효 범위

var a = "A";

function aa() {
    let b = "B"

    function bb() {
        let c = "C"
        console.log(a + b + c);
    }

    bb();
}

aa(); // "ABC"

// 자유, 속박 변수

함수 bb의 LexicalEnvironmentComponent: {
    //환경 레코드
    EnvironmentRecord : {
        // 선언적 환경 레코드
        DeclarativeEnvironmentRecord : {
            c : "C"
        },
    },
    // 외부 렉시컬 환경 참조
    OuterLexicalEnvironmentReference : 함수 aa의 LexicalEnvironment
},


함수 aa의 LexicalEnvironmentComponent: {
    //환경 레코드
    EnvironmentRecord : {
        // 선언적 환경 레코드
        DeclarativeEnvironmentRecord : {
            b : "B"
        },
    },
    // 외부 렉시컬 환경 참조
    OuterLexicalEnvironmentReference : 전역 LexicalEnvironment ->
},

전역 LexicalEnvironmentComponent: {
    //환경 레코드
    EnvironmentRecord : {
        // 선언적 환경 레코드
        ObjectEnvironmentRecord : {
            bindObject: 전역객체(ex. window)
        }
    },
    // 외부 렉시컬 환경 참조
    OuterLexicalEnvironmentReference : null
}




