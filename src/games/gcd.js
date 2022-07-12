import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === b) return a;
  const min = Math.min(Math.abs(a), Math.abs(b));
  if (a % b === 0 || b % a === 0) return min;
  const max = Math.max(Math.abs(a), Math.abs(b));
  const diff = max - min;
  return getGcd(min, diff);
};

const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

export default {
  task,
  getRound,
};
