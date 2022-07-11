import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

export const showTask = (task) => {
  console.log(task);
};

export const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const showCorrectAnswerMessage = () => {
  console.log('Correct!');
};

export const showIncorrectAnswerMessage = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export const showLossMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const showWinMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const validateAnswer = (answer, correctAnswer) => answer === correctAnswer;
