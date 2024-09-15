import { getRandomNumber } from '../utils/utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeGameLogic = {
  question: "Answer 'yes' if given number is prime. Otherwise answer 'no'.",
  getQuestionAndAnswer: () => {
    const questionValue = getRandomNumber();
    const correctAnswer = isPrime(questionValue) ? 'yes' : 'no';

    return { questionValue, correctAnswer };
  },
};

export default brainPrimeGameLogic;
