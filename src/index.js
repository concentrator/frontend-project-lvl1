import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const startGame = (gameData, name) => {
  console.log(gameData.description);
  for (let i = 1; i <= gameRoundsCount; i += 1) {
    const [question, correctAnswer] = gameData.getRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const init = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  startGame(gameData, name);
};

export default init;
