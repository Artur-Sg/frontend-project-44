import { getRandomNumber } from '../utils/utils.js';

const brainEvenGameLogic = {
  question: 'What number is missing in the progression?',
  getQuestionAndAnswer: () => {
    const progressionLength = getRandomNumber(5, 10);

    const [start, sum, answerIndex] = [
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber(0, progressionLength - 1),
    ];

    const progression = Array.from({ length: progressionLength }, (_, i) => start + i * sum);
    const correctAnswer = String(progression.splice(answerIndex, 1, '..'));
    const questionValue = progression.join(' ');

    return { questionValue, correctAnswer };
  },
};

export default brainEvenGameLogic;
