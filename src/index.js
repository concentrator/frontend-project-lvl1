import welcome from './welcome.js';
import * as app from './functions.js';
import * as games from './games/index.js';

const gameRounds = 3;

const selectGame = (gameName) => games[gameName];

const startGame = (game, name) => {
  app.showTask(game.task);
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = game.getQuestion();
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

const init = (gameName) => {
  welcome();
  const game = selectGame(gameName);
  const name = app.getName();
  app.greet(name);
  startGame(game, name);
};

export default init;
