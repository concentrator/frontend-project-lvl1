import { getRandomNumber, getGcd } from '../utils.js';

let number1;
let number2;

const task = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  number1 = getRandomNumber(100);
  number2 = getRandomNumber(100);

  return `${number1} ${number2}`;
};

const getCorrectAnswer = () => getGcd(number1, number2).toString();

export default {
  task,
  getQuestion,
  getCorrectAnswer,
};
