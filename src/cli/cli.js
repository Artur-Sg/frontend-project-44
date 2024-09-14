import readlineSync from 'readline-sync';

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};
