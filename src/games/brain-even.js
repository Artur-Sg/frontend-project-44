import { getRandomNumber } from '../utils/utils.js';

const brainEvenGameLogic = {
  question: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionAndAnswer: () => {
    const questionValue = getRandomNumber();
    const isEven = questionValue % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    return { questionValue, correctAnswer };
  },
};

export default brainEvenGameLogic;
