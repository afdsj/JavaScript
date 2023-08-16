function hello(name) {
    console.log(name);

    console.log(arguments);

    return `${name}님 안녕하세요`;
};

// 자바에서는 인자의 개수, 타입을 확인 (자바스크립트는 타입이 존재하지만 어떤 값을 넣을 수 있기 때문에 확인할 필요가 없음)
var result = hello("길동");
console.log(result);

console.log("----------");

result = hello();
console.log(result);

console.log("----------");

result = hello("홍길동", "홍박사", "님을 아세요?");
console.log(result);

console.log("----------");

// ES6 문법에서 지원되는 기본 매개변수 값을 이용하는 방법
function hi(name = "아무개") {
    // 기본 값을 이용하는 경우 arguments의 인자로 인식되지 않는다
    console.log(arguments);
    // if (arguments.length !== 1 || typeof name !== 'string' || name.length === 0) {
    //     throw new TypeError("인수는 1개여야하고 문자열 값을 가져야 하며 빈문자는 허용하지 않습니다");
    // }
    return `${name}님 안녕하세요`;
};

result = hi("홍길동");
console.log(result);

// result = hi("홍길동","홍박사");
// result = hi(1); // 인자로 넘어온 값이 string이랑 다를 경우 에러 발생
// result = hi(''); // 빈문자
result = hi(' ');