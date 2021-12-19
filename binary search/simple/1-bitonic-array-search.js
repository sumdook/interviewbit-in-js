function bitonicArraySearch(A, B) {
  let peak = findPeak(A);
  if (B === A[peak]) return peak;
  if (B > A[peak]) return -1;

  let arr1 = A.slice(0, peak + 1);
  let arr2 = A.slice(peak + 1);
  const ans1 = binarySearch(arr1, B);
  const ans2 = binarySearch(arr2.reverse(), B);

  if (ans1 === -1 && ans2 === -1) return -1;
  if (ans1 !== -1) return ans1;
  if (ans2 !== -1) return A.length - 1 - ans2;
}

function findPeak(arr) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid + 1] < arr[mid] && arr[mid - 1] < arr[mid]) return mid;
    if (arr[mid + 1] > arr[mid]) low = mid + 1;
    if (arr[mid + 1] < arr[mid]) high = mid - 1;
  }
}

function binarySearch(arr, item) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] === item) return mid;
    else if (item > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(
  bitonicArraySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
    12
  )
);
