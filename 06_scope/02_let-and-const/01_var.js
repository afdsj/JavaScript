/* 01_var
    ES5까지 변수를 선언할 수 있는 유일한 방법은 var를 이용하는 것이였으나 
    다음과 같은 몇 가지 문제를 이야기 한다
*/

var message = "안녕하세요";
console.log(message);
var message = "중복 선언에도 문제가 없지";
console.log(message);
var message;
console.log(message);

// 엔진이 해석을 다음과 같이 한다
// var message;
// var message;
// var message;

// message = "안녕하세요";
// console.log(message);
// message = "중복 선언에도 문제가 없지";
// console.log(message);
// console.log(message);

// 02_함수 레벨 스코프
var i = 0;
for (var i = 0; i < 10; i++) { }
console.log(i); // 10

// 엔진이 해석을 다음과 같이 한다
// var i;
// var i;
// i = 0;

// for (i = 0; i < 10; i++) { }
// console.log(i);

console.log(test); // undefined
test = "반가워요";
console.log(test); // 반가워요
var test;
