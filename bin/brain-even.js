#!/usr/bin/env node

import readlineSync from 'readline-sync';

import userName from './brain-games.js';

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

let isWin = true;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(`Question ${randomNumber}`);

  const answer = getUserAnswer();
  const isEven = randomNumber % 2 === 0;

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
  } else {
    isWin = false;
    break;
  }
}

const resultMessage = isWin
  ? `Congratulations, ${userName}!`
  : `Let's try again, ${userName}!`;

console.log(resultMessage);
