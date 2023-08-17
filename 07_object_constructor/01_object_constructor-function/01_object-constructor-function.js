/* 
    Object 생성자 함수
    new 연산자와 함께 object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다
    빈 객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다 
*/



const student = new Object();
student.name = "유관순";
student.age = 16;

console.log(student);

let name = new String("스트링 객체");
// 원시 타입도 객체로 관리
let age = new Number("123");
console.log(name);
console.log(age);
console.log(global);