import greeting, { brainGameEngine } from '../index.js';
import { calcExpression, getRandomInRange } from '../lib.js';

const gameRules = 'What is the result of the expression?';

const data = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInRange(0, 2);
  const operator = operators[operatorIndex];
  const correctAnswer = String(calcExpression(operator, num1, num2));
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

export default () => {
  greeting();
  brainGameEngine(gameRules, data);
};
