import { getRandomNumber, calc } from '../utils.js';

const task = 'What is the result of the expression?';

const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calc(number1, number2, operator).toString();
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
