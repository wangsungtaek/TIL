const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'Sungtaek',
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, 'lastName', {
    value: 'Wang'
});


// { value: 'Sungtaek', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));
// { value: 'Wang', writable: false, enumerable: false, configurable: false }
console.log(Object.getOwnPropertyDescriptor(person, 'lastName'));

// lastName 프로퍼티는 [[Enumerable]] 의 값이 false 이므로 열거되지 않는다.
console.log(Object.keys(person)); // [ 'firstName' ]

// [[Writeable]]의 값이 false인 경우 해당 프로퍼티의 [[value]]의 값을 변경할 수 없다.
person.lastName = 'Kim';

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
delete person.lastName;

console.log(Object.getOwnPropertyDescriptor(person, 'lastName'));

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

console.log('fullName: ', Object.getOwnPropertyDescriptor(person, 'fullName'));

