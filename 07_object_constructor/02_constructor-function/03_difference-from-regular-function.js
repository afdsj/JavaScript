/* 03_difference-from-regular-function (일반 함수와 차이점) */

function Student(name, age) {
    // 일반 메서드 내부의 this는 global을 바라보게 된다
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}은 ${this.age}세 입니다`;
    }
    // return; 숨어져 있는데 반환타입이 없어서 밑에 undefined 출력
}

/* 
    일반 함수와 생성자 함수의 특별한 형식적인 차이는 없다
    (첫 문자를 대문자로 기술하여 구별하려고 노력함) 
    new 연산자와 함께 호출하면 생성자 함수로 동작하는 것이다
    만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다
*/
const student = Student("강감찬", 35);
console.log(student); // undefined /* 메서드가 종료된 이후에 return이 묵시되어 있다 반환되는게 없기 때문에 undefined가 출력 */
console.log(age); // 35
// console.log(this);
// console.log(global);

console.log("------------------");

function Dog(name, age) {
    console.log(new.target); // undefined

    if (!new.target/* 자기 자신을 가리킴 (Truty)*/) {
        // 재귀 호출
        return new Dog(name, age);
    }
    
    console.log(this);
    this.name = name;
    this.age = age;
}

const dog = Dog("조조,", 10);
console.log(dog);