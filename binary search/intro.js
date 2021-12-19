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

console.log({ binarySearch: binarySearch([1, 2, 3, 4, 5, 6], 4) });
