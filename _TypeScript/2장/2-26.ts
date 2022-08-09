type Person = {
    address: String;
}

// any 사용
let person1: any;
person1 = JSON.parse('{ "adress": "25 Broadway" }');

console.log(person1.address);


// unkown 사용 ( 컴파일 오류 발생 )
let person2: unknown;
person2 = JSON.parse('{ "adress": "25 Broadway" }');

console.log(person2.address);

