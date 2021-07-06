## Node.js 모듈

브라우저 상에서 동작하는 JavaScript는 script tag로 로드하며 복수의 JavaScript 파일을 로드할 경우 하나의 파일로 merge되며 동일한 유효범위를 갖게 된다.

> ES6에서는 Client-side JavaScript에서도 동작하는 모듈 기능을 추가하였다.
> 
> 단 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 ES6 모듈을 현재의 브라우저에서 사용하기 위해서는 SystemJs, RequireJs등 모듈 로더 또는 Webpack 등의 모듈번들러를 사용해야 한다.

모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다.

require 함수를 사용하여 공개된 모듈을 임포트한다.

## 2. exports

exports 객체는 프로퍼티 또는 메소드릴 여러 개 정의할 수 있다.

하지만 module.exports에는 하나의 값(원시타입, 함수, 객체)을 할당할 수 있다.

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

