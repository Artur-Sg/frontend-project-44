#!/usr/bin/env node

import { getRandomEquation, calculateEquation } from '../utils/utils.js';

const brainCalcGameLogic = {
  question: 'What is the result of the expression?',
  getQuestionAndAnswer: () => {
    const randomEquation = getRandomEquation();
    const correctAnswer = calculateEquation(randomEquation);

    return { questionValue: randomEquation, correctAnswer };
  },
};

export default brainCalcGameLogic;
