## switch문

복수의 if 조건문은 switch 문으로 바꿀 수 있음.

switch문은 하나 이상의 case문으로 구성됨.

대개 default문도 있지만, 필수는 아니다.

~~~javascript
var a;

switch(x) {
    case 'value1':
        a = 1;
        break
    case 'value2':
        a = 2;
        break
    default :
        a =  3;
        break
}
~~~


변수 x의 값과 첫 번째 case문의 값 'value1'를 일치 비교한 후, 두 번째 case문의 값 'value2'와 비교

case 문에서 변수 x의 값과 일치하는 값을 참으면 해당 case 문의 아래의 코드가 실행됩니다. 이때, break 문을 만나거나 switch 문이 끝나면 코드의 실행은 멈춥니다.

값과 일치하는 case문이 없다면, default문 아래의 코드가 실행됩니다(default 문이 있는 경우)

~~~javascript
let a = 2 + 2;

switch(a) {
    case 3:
        alert( '비교하려는 값보다 작습니다.' );
        break;
    case 4:
        alert( '비교하려는 값과 일치합니다.' );
        break;
    case 5:
        alert( '비교하려는 값보다 큽니다.' );
        break;
    default:
        alert( '어떤 값인지 파악이 되지 않습니다.' );
~~~

switch 문은 a의 값인 4와 첫 번째 case 문의 값인 3을 비교합니다. 두 값은 같지 않기 때문에 다음 case 문으로 넘어갑니다.

a와 그다음 case문의 값인 4는 일치합니다. 따라서 break문을 만날 때까지 case 4 아래의 코드가 실행됩니다.

case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행합니다.

break문이 없는 경우 어떤 일이 일어나는지 예시를 통해 살펴봅니다.

~~~javascript
let a = 2 + 2;

switch (a) {
    case 3 :
        alert( '비교하려는 값보다 작습니다.' );
    case 4 :
        alert( '비교하려는 값과 일치합니다.' );
    case 5 :
        alert( '비교하려는 값보다 큽니다.' );
    default :
        alser( '어떤 값인지 파악이 되지 않습니다.' );
}
alert( '비교하려는 값과 일치합니다. ');
alert( '비교하려는 값보다 큽니다. ');
alert( '어떤 값인지 파악이 되지 않습니다.');
~~~