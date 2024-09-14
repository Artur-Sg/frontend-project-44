import { getRandomNumber } from '../utils/utils.js';

const brainEvenGameLogic = {
  question: "Answer 'yes' if the number is even, otherwise answer 'no'.",
  getQuestionAndAnswer: () => {
    const randomNumber = getRandomNumber();
    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    return { questionValue: randomNumber, correctAnswer };
  },
};

export default brainEvenGameLogic;
