import { getRandomNumber } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const question = getRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default {
  task,
  getQuestion,
};
