import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';

const games = {
  even,
  calc,
  gcd,
  progression,
};

const gameRounds = 3;
let task;
let getQuestion;

const setupGame = (game) => {
  task = games[game].task;
  getQuestion = games[game].getQuestion;
};

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

const showTask = () => {
  console.log(task);
};

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const showCorrectAnswerMessage = () => {
  console.log('Correct!');
};

const showIncorrectAnswerMessage = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

const showLossMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const showWinMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const validateAnswer = (answer, correctAnswer) => answer === correctAnswer;

const startGame = (name) => {
  showTask();
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = getQuestion();
    showQuestion(question);
    const answer = getAnswer();

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
  setupGame(game);
  startGame(name);
};

export default init;
