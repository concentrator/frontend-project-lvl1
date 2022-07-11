import { getRandomNumber, getGcd } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
