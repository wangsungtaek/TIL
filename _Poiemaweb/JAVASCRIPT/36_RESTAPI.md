## 1. REST API 중심 규칙

- URI는 자원을 표현하는 데에 집중하고 행위에 대한 정의는 HTTP Method를 통해 하는 것이

    REST한 API를 설계하는 중심 규칙이다.

~~~ code
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
~~~

- URI는 정보의 자원을 표현해야 한다.

~~~ code
# bad
GET /todos/delete/1

# good
DELETE /todos/1
~~~

- 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.

<hr >

## 2. HTTP Method

- 주로 5가지의 Method를 사용하여 CRUD를 구현한다.

    - GET : 모든/특정 리소스를 조회

    - POST : 리소스를 생성

    - PUT : 리소스의 전체를 교체

    - PATCH : 리소스의 일부를 수정

    - DELETE : 모든/특정 리소스를 삭제

