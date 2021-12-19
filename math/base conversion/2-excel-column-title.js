function excelColumnTitle(A) {
  let ans = [];
  while (A > 0) {
    let remainder = ((A - 1) % 26) + 1;
    ans.push(String.fromCharCode(remainder + 64));
    A = parseInt((A - remainder) / 26);
  }
  console.log(ans);
  return ans.reverse().join("");
}

excelColumnTitle(943566);
