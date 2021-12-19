function fizzBuzz(A) {
  return [...new Array(A).keys()].map((item) => {
    let n = item + 1;
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        return "FizzBuzz";
      }
      return "Fizz";
    }
    if (n % 5 === 0) {
      return "Buzz";
    }
    return n;
  });
}
