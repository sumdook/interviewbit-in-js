function excelColumnFunction(A) {
  return A.split("").reduce((acc, item, index) => {
    return acc + Math.pow(26, A.length - index - 1) * (item.charCodeAt() - 64);
  }, 0);
}
