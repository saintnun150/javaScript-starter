// 자바스크립트 스코프(scope)

var a = 10;

function scope() {
    var a = 20;
    console.log('a:', a); // 1. a.value = ?

    if (true) {
        console.log('a:', a); // 2. a.value = ?
        var a = 50;
        console.log('a:', a); // 3. a.value = ?
    }

    var f1 = inner();

    function inner() {
        console.log("aa:", a);
        var a = 30;
        var b = 5;
        console.log('a:', a); // 4. a.value = ?
        console.log('b:', b); // 5. b.value = ?
    }
    console.log('a:', a); // 6. a.value = ?
    console.log('b:', b); // 7. b.value = ?
}

scope();
console.log('a:', a); // 8. a.value = ?
console.log('b:', b); // 9. b.value = ?