function factorial(number) {
  var fact = 1;
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(4));
