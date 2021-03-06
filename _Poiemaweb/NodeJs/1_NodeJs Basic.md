## 1.Introduction

Node.js는 Chorm V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경으로 주로 서버 사이드 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.

Node.js는 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 Request처리 성능을 가지고 있다.

일반적으로 데이터베이스 처리에 대기시간(blocking)이 발생하기 때문에 웹페이지 표시가 지연되는 현상이 발생한다. Node.js의 모든 API는 비동기 방식으로 동작하여 Non-blocking I/O가 가능하고 단일 스레드 이벤트 루프 모델을 사용하여 보다 가벼운 환경에서도 높은 Request 처리 성능을 가지고 있다.


## 2. Install 확인

~~~ bash
$ node -v

$ npm -v
~~~

## 3. Update

### 3.1 Node.js

설치된 Node.js를 업데이트하기 위해 Node.js 버전 매니저인 n을 설치한다.

~~~ bash
$ sudo npm install -g n
~~~

캐시를 강제 삭제

~~~ bash
$ npm cache clean -f
~~~

버전을 지정하거나 lts/stable/latest를 지정하여 Node.js를 설치한다.

~~~ bash
$ n 10.0.0  # 버전 지정 설치
$ n lts     # 최신 LTS 버전 설치
$ n stable  # stable 버전 설치
$ n latest  # 최신 currunt 버전 설치
~~~

latest 버전을 설치하도록 하자.

~~~ bash
$ node -v

$ n latest # sudo n latest
$ n
    node/10.15.1
  o node/11.10.0
$ node -v
~~~

### 3.2 npm

npm은 Node.js에 포함되어 있어 Node.js 설치 시 자동 설치된다.

따라서 별도의 설치가 필요 없다. 하지만 Node.js보다 자주 업데이트 되므로 최신 버전이 아닐 수 있다.

~~~ bash
$ npm install -g npm@latest

$ npm -v
~~~

## 4. REPL

REPL(Read Eval Print Loop : 입력 수행 출력 반복)은 Node.js는 물론

대부분의 언어(Java, Python 등)가 제공하는 가상환경으로 간단한 코드를

직접 실행해 결과를 확인해 볼 수 있다.

![image](https://user-images.githubusercontent.com/68735491/124935032-3c5a1f00-e040-11eb-871c-739ec5c1e069.png)

## Node.js 맛보기 : HTTP Server

Node.js는 http 서버 모듈을 내장하고 있어서 아파치와 같은 별도의 웹서버

를 설치할 필요가 없다.

- 코드

![image](https://user-images.githubusercontent.com/68735491/124936339-67913e00-e041-11eb-940a-8d32e34cb6a6.png)

- 실행화면

![image](https://user-images.githubusercontent.com/68735491/124936516-99a2a000-e041-11eb-9674-3912479e1df1.png)