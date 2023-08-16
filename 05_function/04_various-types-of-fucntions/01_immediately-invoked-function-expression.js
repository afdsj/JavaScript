// 익명 함수 : 선언과 동시에 실행, 재사용 불가능(한번만 사용 가느앟다)


// 익명함수는 선언과 동시에 실행이 되기 때문에 호이스팅이 실행되지 않음
(function () {
    console.log("익명 즉시 실행 함수! 함수 정의와 동시에 호출");
})();

console.log("-------------------------------")

(function test(name) {
    console.log("기명 즉시 실행 함수");
    console.log(`${name}님 안녕하세요`);
})("홍길동");

// test("길동");