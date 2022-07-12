import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  task,
  getRound,
};
