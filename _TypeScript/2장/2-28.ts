type Person1 = {
    address: String;
}

const isPerson = (object: any): object is Person1 => !!object && "address" in object;

// unkown 사용 ( 컴파일 오류 발생 )
let person3: unknown;
person3 = JSON.parse('{ "adress": "25 Broadway" }');

if(isPerson(person3)) {
    console.log(person3.address);
} else {
    console.log('person2 is not a Person');
}