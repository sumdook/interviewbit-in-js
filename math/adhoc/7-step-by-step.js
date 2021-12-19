function stepByStep(A) {
  A = Math.abs(A);
  let i = 1;
  let distance = (i * (i + 1)) / 2;
  while (distance < A) {
    i++;
    distance = (i * (i + 1)) / 2;
  }
  while ((distance - A) % 2 !== 0) {
    i++;
    distance = (i * (i + 1)) / 2;
  }
  return i;
}

console.log({ stepByStep: stepByStep(3) });
