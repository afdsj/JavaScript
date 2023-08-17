/*
    함수의 prototype과 constructor property
    개발자가 특별히 할당하지 않더라도 모든 함수는 기본적으로
    "prototype" property를 갖는다
    default property "prototype"은 constructor property 하나만 있는 객체를 가리키는데
    여기서 constructor property는 함수 자신을 가리킨다
*/

function Student() { }

console.log(Student.prototype.constructor == Student); // true

let student = new Student();
console.log(student.constructor == Student); // true