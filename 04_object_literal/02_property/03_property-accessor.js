/* 03_property-accessor(프로퍼티 접근) */
var dog = {
    name: '민영',
    eat: function (food) {
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`)
    }
}

console.log(dog.name);
dog.eat("상한 된장찌개");

console.log(dog['name']); // dog name에 있는 property 속성을 가지고 오기

// name = "name";
// console.log(dog[name]);

dog['eat']('상한 계란');

var obj = {
    'dash-key': 'dash-value',
    0: 1 // 0도 네이밍 규칙에 어긋나는데 자동으로 속성 값을 "0"으로 변경해준다 (암묵적) "0" :
}

// var $엘리먼트 = document.getElementById("root");
// 허용하는 특수문자 $ _
// var _시작 = "이거도 됌";
// var 변_수 = "";
// var 변1수1 = "";
// const API_KEY = ""; 

// 사용 불가
// var 1변수 = ""; // 숫자가 처음에 있으면 불가능 하지만 중간에 있으면 사용 가능 
// var @변수 = "";
// var 변-수 = "";ㄴ

/* property 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법 사용 */
console.log(obj["dash-key"]) // 문자열 형태로 키에 접근을 해야 한다
// console.log(obj.dash-key); 지원되지 않는 표현식
console.log(obj[0]);   // 자바스크립트에서는 프로퍼티 키를 숫자 형태에서 자동으로 문자열로 바꿔준다
console.log(obj["0"]);

