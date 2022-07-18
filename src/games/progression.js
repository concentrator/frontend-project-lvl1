import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const res = [start];
  for (let i = 1; i < length; i += 1) {
    const item = start + step * i;
    res.push(item);
  }
  return res;
};

const PROGRESSION = {
  start: {
    min: 1,
    max: 10,
  },
  length: {
    min: 5,
    max: 10,
  },
  step: {
    min: 2,
    max: 9,
  },
};

const getRoundData = () => {
  const start = getRandomNumber(PROGRESSION.start.min, PROGRESSION.start.max);
  const length = getRandomNumber(PROGRESSION.length.min, PROGRESSION.length.max);
  const step = getRandomNumber(PROGRESSION.step.min, PROGRESSION.step.max);
  const progression = getProgression(start, length, step);
  const missedIndex = getRandomNumber(0, progression.length - 1);
  const missedNumber = progression[missedIndex];
  progression[missedIndex] = '..';

  const question = progression.join(' ');
  const answer = missedNumber.toString();

  return [question, answer];
};

const gameData = {
  description,
  getRoundData,
};

export default () => {
  init(gameData);
};
