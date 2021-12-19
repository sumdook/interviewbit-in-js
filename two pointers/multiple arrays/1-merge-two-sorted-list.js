function merge(arr1, arr2) {
  const ans = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      ans.push(arr1.shift());
    } else {
      ans.push(arr2.shift());
    }
  }
  return [...ans, ...arr1, ...arr2];
}

//two pointer
function mergeTwoPointer(arr1, arr2) {
  let p = 0;
  while (p < arr1.length && arr2.length) {
    if (arr1[p] < arr2[0]) {
      p++;
    } else {
      arr1 = [...arr1.slice(0, p + 1), arr2.shift(), ...arr1.slice(p + 1)];
    }
  }
  arr1 = [...arr1, ...arr2];
  return arr1;
}

console.log(mergeTwoPointer([1, 5, 8], [6, 9]));
