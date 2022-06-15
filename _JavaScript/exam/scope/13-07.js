// var은 함수레벨 스코프임 ( 아래와 같이 블록레벨 예제를 조심 )

var x = 1;

if(true) {
  var x = 10;
}

console.log(x);