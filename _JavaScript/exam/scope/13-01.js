function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조 가능
  console.log(x, y);
  return x + y;
}

add(2, 5);

console.log(x, y);