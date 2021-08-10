## 자바스크립트 배열은 배열이 아니다

- 일반적으로 배열이라는 자료 구조의 개념은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로

    나열된 자료 구조를 말한다.

- 자바스크립트의 배열은 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며

    연속적으로 이어져 있지 않을 수도 있다.

> 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열이라 한다.

- 자바스크립의 배열은 엄밀히 말해 일반적 의미의 배열이 아니다.

    자바스크립의 배열은 일발적인 배열의 동작을 흉내낸 특수한 객체이다.

~~~ javascript
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
~~~

- 자바스크립트의 배열은 인덱스를 프로퍼티 키로 갖으며 length 프로퍼티를 갖는 특수한 객체이다.

- 자바스크립트 배열의 요소는 사실 프로퍼티 값이다.

<br >

일반적인 배열과 자바스크립트 배열의 장단점

- 일반적인 배열은 인덱스로 배열 요소에 빠르게 접근할 수 있다. 하지만 특정 요소를 탐색하거나 요소를 삽입

    또는 삭제하는 경우에는 효율적이지 않다.

- 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 배열 요소에 접근하는 경우, 일반적인 배열보다

    성능적인 면에서 느릴 수 밖에 없는 구조적인 단점이 있다. 하지만 특정 요소를 탐색하거나 요소를 삽입

    또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.

    