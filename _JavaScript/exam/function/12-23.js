function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모 숫자 값어야 합니다.');
  }

  return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));