/*  순수 함수와 비순수 함수
    순수 함수 : 외부 상태에 의존하지 않고 변경하지도 않는 함수
    비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수 
*/

var cnt = 0;

// 순수 함수
function increase(n) {
    return ++n;
}

cnt = increase(cnt); // 1 cnt가 가지고 있는 값을 전달
console.log(cnt);

// 비순수 함수
// 스코프 내부에서 바뀌는게 아니라 var cnt = 0; 바뀌기 때문에 콘솔 여러개 찍으면 -1씩 감소
function decrease() {
    return --cnt;
}

cnt = decrease();
console.log(cnt);

cnt = decrease();
console.log(cnt); // -1