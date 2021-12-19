function rotatedSortedArraySort(A, B) {
  let low = 0,
    high = A.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (A[mid] === B) return mid;
    else if (A[mid] <= A[high]) {
      if (B > A[mid] && B <= A[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (B >= A[low] && B < A[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}
