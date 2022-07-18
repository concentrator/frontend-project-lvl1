import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'What is the result of the expression?';

const evaluateExpression = (number1, number2, operator) => {
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return res;
};

const minNumber = 1;
const maxNumber = 100;
const operators = ['+', '-', '*'];

const getRoundData = () => {
  const operatorsMaxIndex = operators.length - 1;
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operator = operators[getRandomNumber(0, operatorsMaxIndex)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = evaluateExpression(number1, number2, operator).toString();
  return [question, answer];
};

const gameData = {
  description,
  getRoundData,
};

export default () => {
  init(gameData);
};
