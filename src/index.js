import welcome from './welcome.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';
import * as app from './functions.js';

const games = {
  even,
  calc,
  gcd,
  progression,
  prime,
};

const gameRounds = 3;
let task;
let getQuestion;

const setupGame = (game) => {
  task = games[game].task;
  getQuestion = games[game].getQuestion;
};

const startGame = (name) => {
  app.showTask(task);
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = getQuestion();
    app.showQuestion(question);
    const answer = app.getAnswer();

    if (!app.validateAnswer(answer, correctAnswer)) {
      app.showIncorrectAnswerMessage(answer, correctAnswer);
      app.showLossMessage(name);
      return;
    }
    app.showCorrectAnswerMessage();
  }
  app.showWinMessage(name);
};

const init = (game) => {
  welcome();
  const name = app.getName();
  app.greet(name);
  setupGame(game);
  startGame(name);
};

export default init;
