import greeting, { brainGameEngine } from '../index.js';
import { isPrime, getRandomInRange } from '../lib.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const data = () => {
  const num = getRandomInRange(1, 100);
  const question = `${num}`;
  const correctAnswer = isPrime(num);
  return [question, correctAnswer];
};

export default () => {
  greeting();
  brainGameEngine(gameRules, data);
};
