import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  task,
  getRound,
};
