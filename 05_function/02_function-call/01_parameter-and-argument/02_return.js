function hello(name) {
    return `${name}님 안녕하세요`;
    // 함수의 종단점은 return이다 이로인해 return 이후의 구문은 실행되지 않는다
    console.log("asdsaf");
};

console.log(hello("단비"));

console.log("------------------");

// 
function cal(a, b) {
    console.log(a + b); // 3
    return;
};

console.log(cal(1, 2)); // undefined