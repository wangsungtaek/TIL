## Event

## 1. introduction

- 이벤트는 어떤 사건을 의미한다. 브라우저에서의 이벤트란 예를 들어 사용자가 버튼을 클릭했을 때,

    웹페이지가 로드되었을때와 같은 것인데 이것은 DOM 요소와 관련이 있다.

    이벤트가 발생하는 시점이나 순서를 사전에 인지할 수 없으므로 일반적인 제어 흐름과는 다른 접근 방식이 필요하다.

    즉, 이벤트가 발생하면 누군가 이를 감지할 수 있어야 하며 그에 대응하는 처리를 호출해 주어야 한다.

- 이벤트가 발생하면 그에 맞는 반응을 하여야 한다. 이를 위해 이벤트는 일반적으로 함수에 연결되며 그 함수는

    이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되면 실행된다.

    이 함수를 이벤트 핸들러라 하며 이벤트에 대응하는 처리를 기술한다.

<hr >

## 2. 이벤트 루프와 동시성

- 브라우저는 단일 쓰레드에서 이벤트 드리븐 방식으로 동작한다.

- 웹 애플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴진다. 이처럼 자바스크립트의 동시성을

    지원하는 것이 바로 이벤트 루프(Event Loop)이다.

- 구글의 V8을 비롯한 대부분의 자바스크립트 엔진은 크게 2개의 영역으로 나뉜다.

> Call Stack(호출스택)
> 작업이 요청되면(함수가 호출되면) 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고 순차적으로 실행된다.
> 자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 task가 종료하기 전까지는 다른 어떤 task도 수행될 수 없다.

> Heap
> 동적으로 생성된 객체 인스턴스가 할당되는 영역

- 앞에서 언급한 동시성을 지원하기 위해 필요한 비동기 요청(이벤트를 포함)처리는 자바스크립트 엔진을 구동하는 환경 즉

    브라우저(또는 Node.js)가 담당한다.

> Event Queue
> 비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수의 콜백 함수가 보관되는 영역으로
> 이벤트 루프에 의해 특정 시점에 순차적으로 Call stack으로 이동되어 실행된다.

> Event Loop
> Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인한다.
> 만약 Call Stack이 비어있다면 Event Queue 내의 task가 Call stack으로 이동하고 실행된다.

<hr >

## 4. 이벤트 핸들러 등록

###  4.1 인라인 이벤트 핸들러 방식

~~~ javascript
<!DOCTYPE html>
<html>
<body>
  <button onclick="myHandler()">Click me</button>
  <script>
    function myHandler() {
      alert('Button clicked!');
    }
  </script>
</body>
</html>
~~~

<br >

### 4.2 이벤트 핸들러 프로퍼티 방식

- 인라인 이벤트 핸들러 방식처럼 HTML과 JS가 뒤섞이는 문제는 해결할 수 있는 방식이다.

    하지만 핸들러 프로퍼티에 하나의 이벤트 핸들러만을 바인딩할 수 있다는 단점이 있다.

~~~ javascript
<!DOCTYPE html>
<html>
<body>
  <button class="btn">Click me</button>
  <script>
    const btn = document.querySelector('.btn');

    // 이벤트 핸들러 프로퍼티 방식은 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다
    // 첫번째 바인딩된 이벤트 핸들러 => 실행되지 않는다.
    btn.onclick = function () {
      alert('① Button clicked 1');
    };

    // 두번째 바인딩된 이벤트 핸들러
    btn.onclick = function () {
      alert('① Button clicked 2');
    };

    // addEventListener 메소드 방식
    // 첫번째 바인딩된 이벤트 핸들러
    btn.addEventListener('click', function () {
      alert('② Button clicked 1');
    });

    // 두번째 바인딩된 이벤트 핸들러
    btn.addEventListener('click', function () {
      alert('② Button clicked 2');
    });
  </script>
</body>
</html>
~~~

<br >

### 4.3 addEventListener 메소드 방식

- DOM 요소에 이벤트를 바인딩하고 해당 이벤트가 발생했을 때 실행될 콜백 함수를 지정한다.

<hr >

## 5. 이벤트 핸들러 함수 내부의 this

### 5.1 인라인 이벤트 핸들러 방식

- 전역 객체 window를 가리킨다.

<br >

### 5.2 이벤트 핸들러 프로퍼티 방식

- 이벤트 핸들러 내부의 this는 이벤트에 바인딩된 요소(currentTarger)를 가리킨다.

<br >

### 5.3 addEventListener 메소드 방식

- this는 이벤트 리스너에 바인딩된 요소(currentTarger)를 가리킨다.

<hr >

## 6. 이벤트의 흐름

- 계층적 구조에 포함되어 있는 HTML 요소에 이벤트가 발생할 경우 연쇄적 반응이 일어난다.

  즉, 이벤트가 전파되는데 전파 방향에 따라 버플링(Event Bubbling)과 캡처링(Event Capturing)으로 구분할 수 있다.

- 자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것을 버블링이라고 하고, 자식 요소에서 발생한 이벤트가 부모요소부터

  시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것을 캡처링이라고 한다.

> 캡처링부터 시작하여 버블링으로 종료한다

<hr >

## 7. Event 객체

- event 객체는 이벤트를 발생시킨 요소와 발생한 이벤트에 대한 유용한 정보를 제공한다.

  이벤트가 발생하면 event 객체는 동적으로 생성되며 이벤트를 처리할 수 있는 이벤트 핸들러에 인자로 전달된다.

<br >

### 7.1 Event Property

### 7.1.1 Event.target

- 실제로 이벤트를 발생시킨 요소를 가리킨다.

<br >

### 7.1.2 Event.currentTarget

- 이벤트에 바인딩된 DOM 요소를 가리킨다. 즉, addEventListener 앞에 기술된 객체를 가리킨다.

<br >

### 7.1.3 Event.type

- 발생한 이벤트의 종류를 나타내는 문자열을 반환한다.

<br >

### 7.1.4 Event.cancelable

- 요소의 기본 동작을 취소시킬 수 있는지 여부를 나타낸다.

<br >

### 7.1.5 Event.eventPhase

- 이벤트 흐름상에서 어느 단계에 있는지를 반환한다.

- 0 : 이벤트 없음

- 1 : 캡처링 단계

- 2 : 타깃

- 3 : 버블링 단계

<hr >

## 8. Event Delegation (이벤트 위임)

- 이벤트 위임은 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를

  바인딩하는 방법이다.

- 이는 이벤트가 이벤트 흐름에 의해 이벤트를 발생시킨 요소의 부모 요소에도 영향(버블링)을 미치기 때문에 가능한 것이다.

- 실제로 이벤트를 발생시킨 요소를 알아내기 위해서는 Event.target을 사용한다.

<br >

## 9. 기본 동작의 변경

- 이벤트 객체는 요소의 기본 동작과 요소의 부모 요소들이 이벤트에 대응하는 방법을 변경하기 위한 메소드는 가지고 있다.

<br >

### 9.1 Event.preventDefault()

- 폼을 submit하거나 링크를 클릭하면 다른 페이지로 이동하게 된다.

  이와 같이 요소가 가지고 있는 기본 동작을 중단시키기 위한 메소드이다.

<br >

### 9.2 Event.stopPropagation()

- 부모 요소로 이벤트가 전파되는 것을 중단시키기 위한 메소드이다.

- 부모 요소에 동일한 이벤트에 대한 다른 핸들러가 지정되어 있을 경우 사용된다.

<br >

### 9.3 preventDefault & stopPropagation

- 기본 동작의 중단과 버블링 또는 캡처링의 중단을 동시에 실시하는 방법