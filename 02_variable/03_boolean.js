/* 03. boolean 타입
boolean 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다
*/

var flag = true;
console.log(flag); // true

flag = false;
console.log(flag); // false

// 문자열과 숫자를 넣어도 아무런 상관이 없다
// flag = "sdfas";
// flag = 12314;

console.log(`나는 졸리다 ${flag}`);         // 나는 졸리다 false
console.log(typeof `나는 졸리다 ${flag}`);  // 타입 : string