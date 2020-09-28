window.onload = function () {
    // 1. XMLHttpRequest 객체 생성
    let req = new XMLHttpRequest();
    // 2. 서버와 통신할 때 사용할 처리 방법을 등록
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.getElementById("view").innerHTML = req.responseText;
            }
        }
    };
    // 3. 요청을 전송하고 통신을 시작함
    //req.open("GET", "file:///C:/Users/junyoung/Desktop/data.txt");
    req.open("GET", "https://naver.com");
    req.send(null);
}