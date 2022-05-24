function divisor(a, b) {
  if (b) {
    return divisor(b, a % b);
  } else {
    return Math.abs(a);
  }
}

console.log(divisor(15, 5));
