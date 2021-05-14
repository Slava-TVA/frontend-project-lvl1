import greeting, { brainGameEngine } from '../index.js';
import { getRandomInRange } from '../lib.js';

const gameRules = 'What number is missing in the progression?';

const data = () => {
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
  const question = `${str}`;
  const correctAnswer = String(hiddenItem);
  return [question, correctAnswer];
};

export default () => {
  greeting();
  brainGameEngine(gameRules, data);
};
