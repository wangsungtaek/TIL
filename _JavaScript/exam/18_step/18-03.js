function square(number) {
  return number * number;
}

console.log(square);
console.log(Object.getOwnPropertyDescriptors(square));


// 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트는 다음과 같다.
/**
{
  length: { value: 1, writable: false, enumerable: false, configurable: true },
  name: { value: 'square', writable: false, enumerable: false, configurable: true},
  arguments: { value: null, writable: false, enumerable: false, configurable: false },
  caller: { value: null, writable: false, enumerable: false, configurable: false },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
 */

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.