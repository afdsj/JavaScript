/* 02_let
    var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입
*/

// 01_같은 스코프 내의 변수 중복 선언 안됨
let mes = "안녕";
// let mes = "중복이 안되네";

/* 02_ 블록 레벨 스코프 지원 
같은 스코프 내의 생명주기가 다르다 */
let i = 0;
for (let i = 0; i < 10; i++) { }
console.log(i); // 0

// console.log(y);
let y = "1";
if(true){
    // let y="2";
    console.log(y); // 1
}

/* 엔진 동작시
let y;
y = '1';

if(true){
    let y; // 마치 호이스팅이 안된 것 처럼 만든다
    console.log(y);
    y = "2";
}
*/

let m;
console.log(m);

