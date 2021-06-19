## while과 for 반복문

### while

~~~javascript
while (condition) {
    // 코드
}
~~~
condition (조건)이 true이면 반복문 본문의 코드가 실행됨.

~~~javascript
let i = 0;
while(i<3) {
    alert(i);
    i++;
}
~~~
위의 조건은 i<3을 만족할 동안 i를 출력함.

<hr >

### do..while 반복문

~~~javascript
do {
    // 반복문 본문
} while(condition);
~~~
본문이 먼저 실행되고, 조건을 확인한 후 조건이 true인 동안엔 본문이 계속 실행됨

~~~javascript
let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);
~~~
do..while 문법은 조건이 true인지 아닌지에 상관없이, 본문을 최소한 한번이라도 실행하고 싶을 때 사용

<hr >

### for 반복문

~~~javascript
for (begin; condition; step) {
    // body
}
~~~

begin : 반복문에 진입할 때 단 한번 실행됨

condition : 반복마다 해당 조건이 확인. false이면 반복문 멈춤

body : condition이 true일 동안 계속 실행

step : 각 반복의 body가 실행된 이후에 실행

> begin을 실행
> 
> (condition이 true이면 body실행 후, step을 실행)
> 
> (condition이 true이면 body실행 후, step을 실행)
> 
> (condition이 true이면 body실행 후, step을 실행)