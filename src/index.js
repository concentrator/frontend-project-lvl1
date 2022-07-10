import readlineSync from 'readline-sync';
import { welcome } from './utils.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';

const gameRounds = 3;

let task;
let getQuestion;
let getCorrectAnswer;

const setGameParams = (game) => {
  switch (game) {
    case 'even':
      task = even.task;
      getQuestion = even.getQuestion;
      getCorrectAnswer = even.getCorrectAnswer;
      break;
    case 'calc':
      task = calc.task;
      getQuestion = calc.getQuestion;
      getCorrectAnswer = calc.getCorrectAnswer;
      break;
    case 'gcd':
      task = gcd.task;
      getQuestion = gcd.getQuestion;
      getCorrectAnswer = gcd.getCorrectAnswer;
      break;
    default:
      break;
  }
};

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

const showTask = () => {
  console.log(task);
};

const showCorrectAnswerMessage = () => {
  console.log('Correct!');
};

const showIncorrectAnswerMessage = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

const showLossMessage = (name) => {
  console.log(`Let's try again, ${name}`);
};

const showWinMessage = (name) => {
  console.log(`Congratulations, ${name}`);
};

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const validateAnswer = (answer, correctAnswer) => answer === correctAnswer;

const startGame = (name) => {
  showTask();
  for (let i = 1; i <= gameRounds; i += 1) {
    const question = getQuestion();
    showQuestion(question);
    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(question);

    if (!validateAnswer(answer, correctAnswer)) {
      showIncorrectAnswerMessage(answer, correctAnswer);
      showLossMessage(name);
      return;
    }
    showCorrectAnswerMessage();
  }
  showWinMessage(name);
};

const init = (game) => {
  welcome();
  const name = getName();
  greet(name);
  setGameParams(game);
  startGame(name);
};

export default init;
