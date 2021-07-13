## Node.js에서 비밀 설정 정보(Secrets) 관리

애플리케이션을 개발할 때, 외부에 알려지면 않되는 민감한 정보들을 사용할 때가 있다.

- 세션 키
- 데이터베이스 접속을 위한 정보 (host, user, password..)

이런 정보들은 다음과 같은 방법으로 사용된다.

- 코드 내에 하드 코딩하기
- 설정파일 사용하기
- command-line에서 argument 요구하기
- 환경변수 사용하기

<hr >

### 코드 내에 하드 코딩하기

~~~ javascript
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password : 'secret',
    database : 'my_db'
});
~~~

#### 문제점

- 설정 정보가 변경되면 코드를 수정해야함. 물론 배포도 다시 해야 한다.

- github과 같은 SCM를 사용하는 경우, 비밀 정보가 노출된다.

<hr >

### 설정파일 사용하기

설정 정보를 Json file에 저장해 두고 require()를 사용하는 예제

~~~ javascript
var mysql = require('mysql');
var db_config = require('./config/db-config.json');

var connection = mysql.createConnection({
    host : db_config.host,
    user : db_config.user,
    password : db_config.password,
    database : db_config.database
});
~~~

~~~ json
{
    "host" : "localhost",
    "user" : "me",
    "password" : "secret",
    "database" : "my_db"
}
~~~

#### 문제점

- SCM을 이용한 배포시 주의해야 한다. (.gitignore file에 설정 파일을 추가하여 SCM에 저장하지 않는다.)
- 대신 db_config_sample.json과 같은 예제 파일을 등록하고 사용법을 명시한다.
- 설정 파일 내부에 비밀 정보가 존재하는 것은 여전히 문제로 남는다.

<hr >

### command-line에서 argument 요구하기

nopt package를 사용하여 argument로 세션 키를 요구하는 예제이다.

~~~ javascript

// secret-arg.js

var nopt = require("nopt");

var longOpts = {
    "sessionSecret": String,
}

var shortOpts = {
    "s": ["--sessionSecret"],
}

var parsed = nopt(longOpts, shortOpts, process.argv, 2);

console.log("session secret is:", parsed.sessionSecret());
~~~

설정 정보를 하드코딩하거나 설정 파일로 가지고 있는 것보다 비밀정보 노출에 보다 안전하다.

#### 문제점

- 앱을 실행할 때마다 입력해야할 정보의 양이 많다.

<hr>

### 환경변수(environment variable) 사용하기

OSX, Linux에서 환경변수를 설정할 때는 export를 사용하면 된다.

~~~ bash
export SESSION_SECRET = "keyboard cat"
~~~

Windows에서는 set을 사용하면 된다.

~~~ bash
set SESSION_SECRET = "keyboard cat"
~~~

실행할 때마다 환경변수 설정할 수도있다.

~~~ bash
SESSION_SECRET = "keyboard cat" node secret-env.js
~~~