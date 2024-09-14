#!/usr/bin/env node

import { getRandomEquation, calculateEquation } from '../utils/utils.js';

const brainCalcGameLogic = {
  question: 'What is the result of the expression?',
  getQuestionAndAnswer: () => {
    const questionValue = getRandomEquation();
    const correctAnswer = calculateEquation(questionValue);

    return { questionValue, correctAnswer };
  },
};

export default brainCalcGameLogic;
