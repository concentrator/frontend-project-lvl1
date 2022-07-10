export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

export const getGcd = (a, b) => {
  if (a === b) return a;
  const min = Math.min(Math.abs(a), Math.abs(b));
  if (a % b === 0 || b % a === 0) return min;
  const max = Math.max(Math.abs(a), Math.abs(b));
  const diff = max - min;
  return getGcd(min, diff);
};
