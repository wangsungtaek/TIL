## 1.Introduction

Node.js는 Chorm V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경으로 주로 서버 사이드 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.

Node.js는 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 Request처리 성능을 가지고 있다.

일반적으로 데이터베이스 처리에 대기시간(blocking)이 발생하기 때문에 웹페이지 표시가 지연되는 현상이 발생한다. Node.js의 모든 API는 비동기 방식으로 동작하여 Non-blocking I/O가 가능하고 단일 스레드 이벤트 루프 모델을 사용하여 보다 가벼운 환경에서도 높은 Request 처리 성능을 가지고 있다.


## 2. Install 확인

~~~ bash
$ node -v

$ npm -v
~~~

[ 완료사진 ]
![img.png](img.png)

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


