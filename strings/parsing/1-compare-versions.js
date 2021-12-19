function compareVersion(A, B) {
  let v1 = A.split(".").map((item) => parseInt(item));
  let v2 = B.split(".").map((item) => parseInt(item));
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    if (v1[i] > 0 && v2[i] === undefined) return 1;
    if (v1[i] === undefined && v2[i] > 0) return -1;
    if (v1[i] > v2[i]) return 1;
    if (v1[i] < v2[i]) return -1;
  }
  return 0;
}
