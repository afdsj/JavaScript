/* 
    생성자 함수 prototype
    new 연산자를 사용해 만든 객체는 생성자 함수의 prototype 정보를 사용해 [[Prototype]]을 설정한다
*/

const user = {
    activate: true,
    login: function () {
        console.log("로그인 되었습니다");
    }
};

function Student(name) {
    this.name = name;
}

/* new 연산자를 사용하기 전까지는 메서드이고 new 연산자를 사용하면 생성자가 됨 */
Student.prototype = user; 

let student = new Student("홍길동");
console.log(student.activate); // true