var student = {
    name: '유관순',
    age: 16,
    test: null // undefined 값이 존재하지 않는다는 것을 할당하기 위해서 사용하지만 습관을 만들어주기 위해서 null을 사용함 
};

console.log(student.name === undefined);
console.log(student.height === undefined);
console.log(student.test == undefined);

console.log("-----------")

// 여기 안에 키가 존재해?
console.log("name" in student);
console.log("height" in student);
console.log("test" in student);

