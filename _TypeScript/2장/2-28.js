var isPerson = function (object) { return !!object && object.discriminator === 'person'; };
// unkown 사용 ( 컴파일 오류 발생 )
var person3;
person3 = JSON.parse('{ "address": "25 Broadway" }');
if (isPerson(person3)) {
    console.log(person3.address);
}
else {
    console.log('person2 is not a Person');
}
