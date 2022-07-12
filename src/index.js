import readlineSync from 'readline-sync';
import * as games from './games/index.js';

const gameRounds = 3;

export const getName = () => readlineSync.question('May I have your name? ');
export const getAnswer = () => readlineSync.question('Your answer: ');

const selectGame = (gameName) => games[gameName];

const startGame = (game, name) => {
  console.log(game.task);
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = game.getRound();
    console.log(`Question: ${question}`);
    const answer = getAnswer();

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const init = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const game = selectGame(gameName);
  const name = getName();
  console.log(`Hello, ${name}!`);
  startGame(game, name);
};

export default init;
