import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const minNumber = 1;
const maxNumber = 100;

const getRoundData = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const gameData = {
  description,
  getRoundData,
};

export default () => {
  init(gameData);
};
