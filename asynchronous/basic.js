// 비동기 처리 setTimeout

console.log("A");
setTimeout(function () {
    console.log("B");
}, 0);
console.log("C");

function f1() {
    let a = document.getElementById("btn");
    console.log("A");
    a.addEventListener("click", function () {
        console.log("B");
    });
    a.addEventListener("click", )
    console.log("C");
}

function f1() {
    console.log("D");
}




