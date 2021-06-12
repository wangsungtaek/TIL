## alert, prompt, confirm을 이용한 상호작용

### alert

~~~javascript
alert("Hello");
~~~

메시지가 있는 작은 창을 모달 창(modal window)이라고 부른다.

'모달'이란 단어엔 페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포되어 있음.

확인 버튼을 누르기 전까지 바깥에 있는 버튼을 누르는 행동을 할 수 없다.

<br>

### prompt

~~~javascript
result = prompt(title, [default]);
~~~

- title : 사용자에게 보여줄 문자열

- default : 입력 필드의 초깃값(선택값)

> 인수를 감싸는 대괄호 [...]의 의미
> default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미

prompt 함수는 사용자가 입력 필드에 기재한 문자열을 반환한다. 사용자가 입력을 취소한 경우 null이 반환

~~~javascript
let age = prompt('나이를 입력해주세요.', 100);

alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.
~~~

프롬프트 함수의 두 번째 매개변수는 선택사항이지만, 이 매개변수가 없는 경우 IE는 "undefind"를 입력 필드에 명시합니다.

IE 사용자를 비롯한 모든 사용자에게 깔끔한 프롬프트를 보여주려면 아래와 같이 두 번째 매개변수를 항상 전달해 줄 것을 권장

~~~javascript
let test = prompt('Test', ''); // IE 사용자를 위한 매개변수 처리
~~~

<br>

### 컨펌 대화상자

~~~javascript
resuslt = confirm(question);
~~~

사용자가 확인버튼을 누르면 true, 그 외의 경우는 false를 반환

~~~javascript
let isBoss = confirm("당신이 주인인가요?");

alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력
~~~

> 브라우저는 사용자와 상호작용할 수 있는 세 가지 함수를 제공

> 위 함수들은 모두 모달 창을 띄워주는데, 모달 창이 떠 있는 동안은 스크립트의 실행이 일시 중단된다.
> 사용자가 창을 닫기 전까지 나머지 페이지와 상호 작용이 불가능

