/* 전역과 지역 스코프
    전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다
    전역에 변수를 선언하면 전역 스포크를 갖는 전역 변수가 되며 전역 변수는 어디서든지 참조 할 수 있다 
    지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다
    지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 하위 지역 스코프에서 유효한다
*/

// 전역 변수
var x = "global x";
var y = "global y";

function outer() {
    console.log(x);
    // outer의 지역 변수
    var z = "outer's local z";
    console.log(y);
    console.log(z);

    function inner() {
        // inner의 지역 변수
        var x = "inner's local x";
        console.log(x); // global x == inner x가 중복되어 있음
        console.log(y);
        console.log(z);
    }
    console.log("outer의 x : " + x); // global x
    inner();
}
outer();

console.log(x);

/* 프로그램 동작 시
// 선언부
var x;
var y;
var outer = function(){
    var z;
    var inner = function(){
        var x;
        x = "inner's local x"; // 할당 됌
        console.log(x);
        console.log(y); 
        console.log(z);
    }
    z = "outer's local z";
}
x = "global x";
y = "global y";

// 실행부
// outer(); 
*/