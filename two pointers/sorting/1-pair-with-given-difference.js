function pairWithGivenDifference(A, B) {
  let set = new Set();
  for (let item of A) {
    if (set.has(item - B) || set.has(B + item)) {
      return 1;
    } else set.add(item);
  }
  return 0;
}
