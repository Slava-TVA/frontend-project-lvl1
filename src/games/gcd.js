import greeting, { brainGameEngine } from '../index.js';
import { getRandomInRange, gcd } from '../lib.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const num1 = getRandomInRange(1, 50);
  const num2 = getRandomInRange(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

export default () => {
  greeting();
  brainGameEngine(gameRules, data);
};
