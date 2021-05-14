const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calcExpression = (mathSymbol, a, b) => {
  switch (mathSymbol) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const gcd = (a, b) => {
  if (b > a) return gcd(b, a);
  if (!b) return a;
  return gcd(b, a % b);
};

const isPrime = (n) => {
  if (n === 0 || n === 1) {
    return 'no';
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export {
  calcExpression, getRandomInRange, gcd, isPrime,
};
