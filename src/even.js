import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

const showRules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const showCorrectAnswerMessage = () => {
    console.log('Correct!');
}

const showIncorrectAnswerMessage = (answer, correctAnswer) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

const showLossMessage = (name) => {
    console.log(`Let's try again, ${name}`);
};

const showWinMessage = (name) => {
    console.log(`Congratulations, ${name}`);
};

const showQuestion = (number) => {
    console.log(`Question: ${number}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const validateAnswer = (answer, correctAnswer) => answer === correctAnswer;

const getCorrectAnswer = (number) => number % 2 === 0 ? 'yes' : 'no';

const getRandomNumber = () => {
    const maxNumber = 100;
    return Math.round(Math.random() * maxNumber);
};

const startGame = (name) => {
    const correctAnswersToWin = 3;
    for (let i = 1; i <= correctAnswersToWin; i += 1) {
        const number = getRandomNumber();
        showQuestion(number);
        const answer = getAnswer();
        const correctAnswer = getCorrectAnswer(number);

        if (!validateAnswer(answer, correctAnswer)) {
            showIncorrectAnswerMessage(answer, correctAnswer);
            showLossMessage(name);
            return;
        }
        showCorrectAnswerMessage();
    }
    showWinMessage(name);
};

const init = () => {
    const name = getName();
    greet(name);
    showRules();
    startGame(name);
};

export default init;
