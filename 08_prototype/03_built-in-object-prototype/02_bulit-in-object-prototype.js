/* 객체를 선언하면 */
// const obj = {};  // 아래 obj랑 중복이어서 주석 처리 해놨음
// obj.__proto__ = Object();
const num = new Number(123);

console.log(num.__proto__ === Number.prototype); // true

/* num.proto === Number.prototype === Object.prototype */
console.log(num.__proto__.__proto__ === Object.prototype); // true

/* 
    num.__proto__ -> number 
    .__proto__ -> Object
*/
/* null 체인 맨위에 있다 */
console.log(num.__proto__.__proto__.__proto__); // null

/* .참조를 하는 경우 가장 가까운 proto를 참조하게 된다 */
console.log(num); // [Number : 123]
console.log(num.toString()); // 123
/* num.toString, Number.toString(), Object.toString(); */

String.prototype.hello = function () {
    console.log(`hello, ${this}`); // hello, javascript
};

/* 
    문자열과 숫자, 불린처럼 원시 타입 값의 property에 접근하려고 하면
    내장 생성자 String, Number, boolean을 사용하는 임시 래퍼(wrapper) 객체가 생성되고
    임시 래퍼 객체는 메서드를 제공하고 난 후에 사라진다
    undifined, null에 대응하는 래퍼 객체는 없다
*/
"javascript".hello();

const obj = {
    0: "hello",
    1: "javascript",
    length: 2
};

obj.join = Array.prototype.join;
console.log(obj.join(',')); // hello,javascript
console.log(obj); // { '0': 'hello', '1': 'javascript', length: 2, join: [Function: join] }

/*
    내장 prototype 변경은 되도록 하지 않아야 한다
    내장 prototype은 새로 명세서에 등록된 기능을 사용하고 싶은데
    자바스크립트 에닌에는 이 기능이 구현 되어 있지 않을 때만 변경하는 것이 좋다
*/