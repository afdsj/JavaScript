// 메서드 단축 표현

var dog = {
    name: '조조',
    eat: function (food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`)
    }
}

dog.eat('고구마');

// 펑션 name을 키 값으로 받음
var dog2 = {
    name: '두부',
    eat(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`)
    }
}

dog2.eat("고구마");