function nobleInteger(A) {
  A.sort((a, b) => a - b);
  const ans = A.some((element, index) => {
    if (element === A[index + 1]) return false;
    return element === A.length - 1 - index;
  });
  return ans ? 1 : -1;
}
