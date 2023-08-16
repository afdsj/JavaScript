// 02_computed-property (계산된 프로퍼티 이름)

var prefix = 'key';
var index = 0;

var obj = {};

obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;

console.log(obj);

// ES6에서부터 변수를 이용하여 축약 표현이 가능하다
var obj2 = {
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index,
}

console.log(obj2);