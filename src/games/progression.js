import { getRandomNumber, getProgression } from '../utils.js';

const task = 'What number is missing in the progression?';

const getQuestion = () => {
  const start = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 9);
  const progression = getProgression(start, length, step);
  const missedIndex = getRandomNumber(0, progression.length - 1);
  const missedNumber = progression[missedIndex];
  progression[missedIndex] = '..';

  const question = progression.join(' ');
  const answer = missedNumber.toString();

  return [question, answer];
};

export default {
  task,
  getQuestion,
};
