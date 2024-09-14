import { getRandomNumber } from '../utils/utils.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const brainEvenGameLogic = {
  question: 'Find the greatest common divisor of given numbers.',
  getQuestionAndAnswer: () => {
    const [a, b] = [getRandomNumber(), getRandomNumber()];
    const correctAnswer = String(gcd(a, b));
    const questionValue = `${a} ${b}`;

    return { questionValue, correctAnswer };
  },
};

export default brainEvenGameLogic;
