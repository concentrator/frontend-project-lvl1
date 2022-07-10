import { getRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];

let number1;
let number2;
let operator;

const task = 'What is the result of the expression?';

const getQuestion = () => {
  number1 = getRandomNumber(100);
  number2 = getRandomNumber(100);
  operator = operators[getRandomNumber(2)];

  return `${number1} ${operator} ${number2}`;
};

const getCorrectAnswer = () => {
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

const calc = {
  task,
  getQuestion,
  getCorrectAnswer,
};

export default calc;
