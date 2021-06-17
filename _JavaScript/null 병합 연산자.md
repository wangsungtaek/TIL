## null 병합 연산자 '??'

> 최근에 추가 되어 구식 브라우저는 폴리필이 필요

null 병합 연산자를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이
'확정되어있는' 변수를 찾을 수 있다.

~~~javascript
a ?? b

// a가 null, undefined가 아니면 a
// 그 외의 경우는 b

x = (a !== null && a !== undefined) ? a : b;
~~~

~~~javascript
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자");
~~~

> null 병합 연산자 ??를 사용하면 피연산자 중 '값이 할당된'변수를 빠르게 찾을 수 있다.
> ?? 는 변수에 기본값을 할당하는 용도로 사용할 수 있다.

> ??의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 =보다는 높다.
> 
> 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어 있다.