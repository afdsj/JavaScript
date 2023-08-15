/* 02_method
자바스크립트의 함수는 객체이다
함수는 값으로 취급할 수 있고 property 값으로 사용할 수 있다 
*/

var dog = {
    name : '단비',
    eat : function(food){
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어용`);
    }
}

dog.eat('고구마');