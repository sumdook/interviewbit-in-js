function spiralOrderMatrix(A) {
  let ans = [];
  for (let i = 0; i < A; i++) {
    ans.push(new Array(A).fill(0));
  }
  let t = 0,
    b = A - 1,
    l = 0,
    r = A - 1,
    dir = 0,
    counter = 1;

  while (t <= b && l <= r) {
    if (dir === 0) {
      for (let i = l; i <= r; i++) {
        ans[t][i] = counter;
        counter++;
      }
      t++;
    }
    if (dir === 1) {
      for (let i = t; i <= b; i++) {
        ans[i][r] = counter;
        counter++;
      }
      r--;
    }
    if (dir === 2) {
      for (let i = r; i >= l; i--) {
        ans[b][i] = counter;
        counter++;
      }
      b--;
    }
    if (dir === 3) {
      for (let i = b; i >= t; i--) {
        ans[i][l] = counter;
        counter++;
      }
      l++;
    }
    dir = (dir + 1) % 4;
  }

  console.log(ans);
}

spiralOrderMatrix(5);
