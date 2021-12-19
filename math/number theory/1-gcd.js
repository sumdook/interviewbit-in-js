function gcd(A, B) {
  if (!B) {
    return A;
  }
  return gcd(B, A % B);
}
