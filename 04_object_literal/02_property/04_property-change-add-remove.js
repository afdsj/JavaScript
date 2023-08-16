var dog = {
    name: '데마시아'
}

// dog.name = '두부'; // 이렇게 사용해도 이름이 바뀜
dog['name'] = "두부";
console.log(dog);

/* property 동적 추가
존재하지 않는 property에 값을 할당하면 property가 동적으로 생성 되어 추가 되고 property 값이 할당된다
*/

dog.age = 3;
console.log(dog);

// 속성 삭제
delete dog.age;
console.log(dog);

delete dog.something;
console.log(dog); // 자바인 경우 에러 발생, 자바스크립트는 무시함