import { getRandomNumber, isEven } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
