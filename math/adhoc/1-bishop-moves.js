function bishopMoves(a, b) {
  let ans = 0;
  let x = a,
    y = b;
  while (x < 8 && y < 8) {
    x++;
    y++;
    ans++;
  }
  x = a;
  y = b;
  while (x > 1 && y < 8) {
    x--;
    y++;
    ans++;
  }
  x = a;
  y = b;
  while (x < 8 && y > 1) {
    x++;
    y--;
    ans++;
  }
  x = a;
  y = b;
  while (x > 1 && y > 1) {
    x--;
    y--;
    ans++;
  }
  return ans;
}
console.log(bishopMoves(4, 4));
