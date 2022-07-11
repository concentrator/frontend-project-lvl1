import { getRandomNumber, isPrime } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = () => {
  const number = getRandomNumber(0, 100);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
