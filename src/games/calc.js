import { getRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];

const task = 'What is the result of the expression?';

const calc = (number1, number2, operator) => {
  let res;
  switch (operator) {
    case '+':
      res = number1 + number2;
      break;
    case '-':
      res = number1 - number2;
      break;
    case '*':
      res = number1 * number2;
      break;
    default:
      break;
  }
  return res.toString();
};

const getQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calc(number1, number2, operator);
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
