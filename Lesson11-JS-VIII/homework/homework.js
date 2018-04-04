// Do not change any of the function names

// solve these recursively

function nFactorial(n, fac) {
  fac = fac || 1;
  if (n < 1) {
    return fac;
  }
  fac *= n;
  return nFactorial(n - 1, fac);
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n, a, b) {
  a = a || 1;
  b = b || 1;
  if (n <= 1) {
    return b;
  }
  let temp = a;
  a = b;
  b += temp;
  return nFibonacci(n - 1, a, b);


  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
