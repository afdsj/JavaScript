// 함수 선언문

/* 실행시 
    위로 끌어올려서(호이스팅) 실행이 가능

    var hello = function hello(name){
        return `${name}님 안녕하세요`;
    }

    console.log(hello("길동"));
*/

// 실행전
console.log(hello("길동"));

function hello(name) {
    return `${name}님 안녕하세요`;
}