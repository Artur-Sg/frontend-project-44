import { welcomeAndGetName } from './src/utils/utils.js';
import { getUserAnswer } from './src/cli/cli.js';

const startGame = (gameLogic) => {
  const userName = welcomeAndGetName();

  let isWin = true;

  console.log(gameLogic.question);

  for (let i = 0; i < 3; i += 1) {
    const { questionValue, correctAnswer } = gameLogic.getQuestionAndAnswer();

    console.log(`Question: ${questionValue}`);

    const answer = getUserAnswer();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isWin = false;
      break;
    }
  }

  const resultMessage = isWin
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`;

  console.log(resultMessage);
};

export default startGame;
