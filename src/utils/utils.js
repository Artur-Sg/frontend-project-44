import { getUserName } from '../cli/cli.js';

export const welcomeAndGetName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

export const getRandomMathOperator = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);

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
