function getRow(A) {
  if (A === 0) return [1];
  let ans = [1, 1];
  for (i = 0; i < A - 1; i++) {
    ans = [
      1,
      ...ans.map((item, index, arr) =>
        index === arr.length - 1 ? 1 : item + arr[index + 1]
      ),
    ];
  }
  return ans;
}
