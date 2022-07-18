import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === b) return a;
  const min = Math.min(Math.abs(a), Math.abs(b));
  if (a % b === 0 || b % a === 0) return min;
  const max = Math.max(Math.abs(a), Math.abs(b));
  const diff = max - min;
  return getGcd(min, diff);
};

const minNumber = 1;
const maxNumber = 100;

const getRoundData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

const gameData = {
  description,
  getRoundData,
};

export default () => {
  init(gameData);
};
