/*
    일반적인 의미의 배열은 각 요소가 동일한 데이터 크기를 가지며
    빈틈 없이 연속적으로 이어져 있어 인덱스를 통한 임의의 요소에
    한 번에 접근할 수 있는 고속 동작을 장점으로 한다
    하지만 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸
    특수한 객체로 각각이ㅡ 메모리 공간이 동일한 크기를 갖지 않아도 되고
    연속적으로 이어지지 않을 수도 있다

    연속적으로 이어지지 않는 배열을 희소배열이라고 한다
    자바스크립트의 배열은 내부적으로 해쉬 테이블로 구성 되어 있다
*/

/* 
    getOwnPropertyDescriptor 객체가 가지고 있는 property를 찾는 함수이다
    
    프로퍼티 플래그
    객체 프로퍼티는 값(value)와 함꼐 플래그(flag)라 불리는 특별한 속성 세가질르 가짐
    writable - true이면 값을 수정할 수 있다 그렇지 않으면 읽기만 가느앟다
    enumerable - ture이면 반복문을 사용해 나열할 수 있다 그렇지 않으면 반복문을 사용해 나열할 수 없다
    configurable - ture이면 프로퍼니 삭제나 플래그 수정이 가능하다
    그렇지 안다면 프로퍼티 삭제와 플래그 수정이 불가능하다
*/
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

console.log("-----------------")

const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
]

console.log(arr);
