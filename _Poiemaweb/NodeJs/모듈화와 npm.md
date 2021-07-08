## 1. 모듈화와 CommonJs

모듈이란 애플리케이션을 구성하는 개별적 요소를 말한다.

모듈은 기능별로 분리되어 작성되므로 개발효율성과 유지보수성의 향상을 기대할 수 있다.

자바스크립트는 웹페이지에 있어서 보조적인 기능을 수행하기 위해 한정적인 용도로 만들어진 태생적 한계로 다른 언어ㅔ 비해 부족한 부분이 있는 것이 사실이다.

대표적인 것이 모듈 기능이 없는 것이다.

C언어는 #include, Java는 import등 대부분의 언어는 모듈 기능을 가지고 있다.

이것을 보안하기 위해 제안된 것이 __CommonJs__ 와 __AMD__이며 NodeJs는 CommonJs방식을 채택하였고 현재 독자적인 진화를 거쳐 CommonJs사양과 100%동일하지 않지만 기본적인 방식을 따르고 있다.

<hr >

## 2. npm

npm(node pacage manager)은 자바스크립트 패키지 매니저이다. Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI를 제공한다.

<br >

### 2.1 패키지 설치

Node.js에서 사용할 수 있는 모듈인 패키지를 설치할 때는 npm install 명령어 뒤에 설치할 패키지 이름을 지정한다.

~~~ bash
npm install <package>
~~~

<br >

### 2.2 지역 설치와 전역 설치

npm install 명령어에는 지역(local)설치와 전역(global) 설치 옵션이 있다.

옵션을 별도로 지정하지 않으면 지역으로 설치되며,

프로젝트 루트 디렉터리에 node_modules 디렉터리가 자동생성되고

그 안에 패키지가 설치된다.

~~~ bash
# 지역 설치
$npm install <package>

# 전역 설치
$npm install -g <package>
~~~

지역으로 설치되면, 프로젝트 루트 디렉터리에 node_modules 디렉터리가 자동생성되고 그안에 패키지가 설치된다.

전역으로 설치하면, macOs의 경우 /usr/local/lib/node_modules

<br >

#### emoji 출력

![image](https://user-images.githubusercontent.com/68735491/124938137-036f7980-e043-11eb-9c86-99f0cb18f6e7.png)

<br >

### 2.3 package.json과 의존성 관리

package.json은 java의 maven에서 pom.xml과 비슷한 역할을 한다.

<br >

### 2.4 Semantic versioning(유의적 버전)

npm install 명령어의 패키지명 뒤에 @버전을 추가하면 패키지 버전을 지정하여 설치할 수 있다.

![image](https://user-images.githubusercontent.com/68735491/124940089-a379d280-e044-11eb-8e2a-e8b2e7844860.png)

![image](https://user-images.githubusercontent.com/68735491/124940235-c310fb00-e044-11eb-92f4-2871670f9493.png)

<br >

### 2.5 자주 사용하는 npm 명령어

package.json 생성

~~~ bash
$ npm init

$ npm init -y
~~~

<br >

패키지 설치

~~~ bash
# 로컬 설치
$ npm install <package-name>
# 전역 설치
$ npm install -g <package-name>
# 개발 설치
$ npm install --save-dev <package-name>
# package.json의 모든 패키지 설치
$ npm install
~~~

<br >

패키지 제거

~~~ bash
# 로컬/개발 패키지 제거
$ npm uninstall <package-name>
# 전역 패키지 제거
$ npm uninstall -g <package-name>
~~~

<br >

패키지 업데이트

~~~ bash
$ npm update <package-name>
~~~

<br >

전역 설치 패키지 확인

~~~ bash
$ npm ls -g --depth=0
~~~

![image](https://user-images.githubusercontent.com/68735491/124941101-81348480-e045-11eb-844e-5f6941eebd01.png)

<br >

package.json scripts 프로퍼티의 start 실행

~~~ bash
$ npm start
~~~

<br >

전역 패키지 설치 폴더 확인

~~~ bash
$ npm root -g
~~~

![image](https://user-images.githubusercontent.com/68735491/124941507-ce185b00-e045-11eb-9a9e-9c68b3574246.png)
