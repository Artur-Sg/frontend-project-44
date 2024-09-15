import { getUserName } from '../cli/cli.js';

export const welcomeAndGetName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandomNumber = (minValue = 1, maxValue = 100) => Math.floor(Math.random()
  * (maxValue - minValue + 1)) + minValue;

export const getRandomMathOperator = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);

  return operations[randomIndex];
};

export const getRandomEquation = () => `${getRandomNumber()} ${getRandomMathOperator()} ${getRandomNumber()}`;

export const calculateEquation = (equationStr) => {
  const [a, operation, b] = equationStr.split(' ');
  const numA = Number(a);
  const numB = Number(b);

  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  const operationFunc = operations[operation];

  if (!operationFunc) {
    return null;
  }

  return String(operationFunc(numA, numB));
};
