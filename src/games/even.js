import greeting, { brainGameEngine } from '../index.js';
import { getRandomInRange } from '../lib.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const data = () => {
  const num = getRandomInRange(1, 100);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const question = `${num}`;
  return [question, correctAnswer];
};

export default () => {
  greeting();
  brainGameEngine(gameRules, data);
};
