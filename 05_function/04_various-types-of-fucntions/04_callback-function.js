/* 04-04 콜백 함수
    함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 한다
    매개변수를 통해 함수의 외부에서 콜백 함수를 전달 받은 함수를 고차 함수라고 한다
    콜백 함수는 고차 함수에 전달 되어 헬퍼 함수의 역할을 한다
    즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다
*/
var increase = function(){
    
}

function increse(value) {
    return value + 1;
}

function decrease(value) {
    return value - 1;
}

// 고차 함수
function apply(func, value) {
    return func(value);
}

// 함수가 매개변수로 전달될 수 있다
console.log(apply(increse, 5));
console.log(apply(decrease, 5));

/* increase, decrease 두가지 모두 1회만 사용하고 있다 (일회성) */
console.log(apply(function (value) { return value * 2; }, 5));
