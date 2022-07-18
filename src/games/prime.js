import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const minNumber = 0;
const maxNumber = 100;

const getRoundData = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const gameData = {
  description,
  getRoundData,
};

export default () => {
  init(gameData);
};
