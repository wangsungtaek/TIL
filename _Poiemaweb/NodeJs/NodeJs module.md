## 1. Node.js 모듈

브라우저 상에서 동작하는 JavaScript는 script tag로 로드하며 복수의 JavaScript 파일을 로드할 경우 하나의 파일로 merge되며 동일한 유효범위를 갖게 된다.

> ES6에서는 Client-side JavaScript에서도 동작하는 모듈 기능을 추가하였다.
> 
> 단 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 ES6 모듈을 현재의 브라우저에서 사용하기 위해서는 SystemJs, RequireJs등 모듈 로더 또는 Webpack 등의 모듈번들러를 사용해야 한다.

모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다.

require 함수를 사용하여 공개된 모듈을 임포트한다.

<hr >

## 2. exports

모듈은 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은 기본적으로

해당 모듈 내부에서만 참조 가능하다.

모듈 안에 선언한 항목을 외부에 공개할때는 exports 객체를 사용해야 한다.

![image](https://user-images.githubusercontent.com/68735491/124942908-02404b80-e047-11eb-972f-66d5fdc7e025.png)

![image](https://user-images.githubusercontent.com/68735491/124943307-577c5d00-e047-11eb-8aa0-5d604d5cc9e0.png)

require 함수를 사용하여 임의의 이름으로 circle 모듈을 import할 수 있다.

![image](https://user-images.githubusercontent.com/68735491/124943423-70850e00-e047-11eb-8e3e-0a7e7f391f50.png)

<hr >

## 3. module.exports

exports 객체는 프로퍼티 또는 메소드를 여러 개 정의할 수 있다

하지만 module.exports에는 하나의 값(원시 타입, 함수, 객체)을

할당할 수 있다.

![image](https://user-images.githubusercontent.com/68735491/124944858-a1b20e00-e048-11eb-9df9-821ebe5e9f4c.png)

circle 모듈의 module.exports에는 하나의 함수를 할당

![image](https://user-images.githubusercontent.com/68735491/124944995-bdb5af80-e048-11eb-904b-c66d8df00a17.png)

circle 변수는 circle 모듈에서 module.exports에 할당한 값 자체 즉 객체를 반환하는 함수이다.

![image](https://user-images.githubusercontent.com/68735491/124945102-d2924300-e048-11eb-8994-bc1fbb49442c.png)

<br >

### 3.1 module.exports에 함수를 할당하는 방식

![image](https://user-images.githubusercontent.com/68735491/124946444-fd30cb80-e049-11eb-9948-b019d8c7c8c6.png)

![image](https://user-images.githubusercontent.com/68735491/124946510-0cb01480-e04a-11eb-9a59-3cb17c73d3cf.png)

![image](https://user-images.githubusercontent.com/68735491/124946604-1f2a4e00-e04a-11eb-85e0-9cb521643c5a.png)


<br >

### 3.2 exports에 객체를 할당하는 방식

![image](https://user-images.githubusercontent.com/68735491/124947495-d6bf6000-e04a-11eb-95e9-79495cc8e8f7.png)

![image](https://user-images.githubusercontent.com/68735491/124947612-f191d480-e04a-11eb-88e9-9fdc6f66b2d0.png)

![image](https://user-images.githubusercontent.com/68735491/124947673-02424a80-e04b-11eb-84af-6be3f122cb9a.png)

<hr >

## 4. require

![image](https://user-images.githubusercontent.com/68735491/124948093-5baa7980-e04b-11eb-9094-1a5a96b2b3ad.png)

![image](https://user-images.githubusercontent.com/68735491/124948199-711fa380-e04b-11eb-8fd9-35b860fe21e5.png)

![image](https://user-images.githubusercontent.com/68735491/124948361-92808f80-e04b-11eb-91e2-2acae7d1934d.png)

![image](https://user-images.githubusercontent.com/68735491/124948672-dd020c00-e04b-11eb-8648-f3b21f2b88f1.png)

![image](https://user-images.githubusercontent.com/68735491/124948741-ee4b1880-e04b-11eb-9c3e-5f86b0f4ce11.png)

## 5. 코어 모듈과 파일 모듈

Node.js는 기본으로 포함하고 있는 모듈이 있다. 이를 코어 모듈이라 한다.

코어 모듈을 로딩할 때에는 패스를 명시하지 않아도 무방하다.

~~~ javascript
const http = require('http');
~~~

npm을 통해 설치한 외부 패키지 또한 패스를 명시하지 않아도 무방하다.

~~~ javascript
const mongoose = require('mongoose');
~~~

코어 모듈과 외부 패키지 이외는 모두 파일 모듈이다.

파일 모듈을 로딩할 때에는 패스를 명시하여야 한다.

~~~ javascript
const foo = require('./lib/foo');
~~~

