var student = {
    name: '유관순',
    age: 16,
    getInfo() {
        console.log(`${this.name}은 ${this.age}세 입니다`);
    }
};

for (var key in student) {
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}