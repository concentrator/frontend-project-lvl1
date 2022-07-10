import { getRandomNumber } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => getRandomNumber(100);

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const even = {
  task,
  getQuestion,
  getCorrectAnswer,
};

export default even;
