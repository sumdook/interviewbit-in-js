function distributeInCircle(A, B, C) {
  return ((C + A - 2) % B) + 1;
}

console.log(distributeInCircle(10078, 19216, 32724));
