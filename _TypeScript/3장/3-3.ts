// 슈퍼 클래스의 생성자 호출

class Person {
    constructor(public firstName: string,
        public lastName: string,
        private age: number) {}
}

class Employee extends Person {
    constructor(firstName: string, lastName: string, age: number, public department: string) {
        super(firstName, lastName, age);
    }
}

const empl = new Employee('Joe', 'Smith', 29, 'Accounting');