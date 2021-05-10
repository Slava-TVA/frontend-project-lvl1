import readlineSync from 'readline-sync';

let name;

export default () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calcExp = (mathSymbol, a, b) => {
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

const calcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomInRange(0, 2);
    const operator = operators[operatorIndex];
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(calcExp(operator, num1, num2));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(gcd(num1, num2));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let progressionTerm = getRandomInRange(1, 100);
    const difference = getRandomInRange(5, 50);
    const progressionLength = getRandomInRange(5, 10);
    const hiddenIndex = getRandomInRange(0, progressionLength - 1);
    let hiddenItem;
    let str = `${progressionTerm}`;
    for (let k = 0; k < progressionLength; k += 1) {
      progressionTerm += difference;
      if (k === hiddenIndex) {
        str = `${str} ..`;
        hiddenItem = progressionTerm;
      } else {
        str = `${str} ${progressionTerm}`;
      }
    }
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(hiddenItem);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInRange(1, 100);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(num);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export {
  isEvenGame, calcGame, gcdGame, progressionGame, primeGame,
};
