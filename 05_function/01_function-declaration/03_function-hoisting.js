// 함수 호이스팅

/* 출력 순서? 끌어올림
var hello = function (name) {
    return `hello : ${name}님 안녕하세요`;
}
var hi; : 호이스팅은 선언부를 끌어올린다
*/

console.log(hello);
console.log(hi); // undefined

console.log(hello("길동"));
// console.log(hi("길동"));

// 함수를 선언
function hello(name) {
    return `hello : ${name}님 안녕하세요`;
}

// 함수를 할당
var hi = function (name) {
    return `hi : ${name}님 안녕하세요`;
}
console.log(hi("길동"));