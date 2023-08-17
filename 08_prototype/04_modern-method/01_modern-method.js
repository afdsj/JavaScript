const user = {
    activate: true
};

/* Object의 prototype을 이용하여 user를 만듬 */
const student = Object.create(user);
console.log(student.activate); // true

/* Object.getPrototypeOf(obj) - obj의 [[prototype]]을 반환 */
console.log(Object.getPrototypeOf(student) === user); // true

/* student의 prototype이 user에서 {}(빈값)로 변경 */
Object.setPrototypeOf(student, {});
console.log(Object.getPrototypeOf(student) === user); // false

const obj = {};
let key = "__proto__";

/* 여기 key에서는 obj.__proto__ */
obj[key] = "값 설정";
console.log(obj[key]); // [Object: null prototype] {}

obj[key] = {test : "새로운 객체 덮어쓰기"};
console.log(obj[key]); // { test: '새로운 객체 덮어쓰기' }