export const getRandomNumber = (min, max) => Math.round((Math.random() * (max - min) + min));

export const getGcd = (a, b) => {
  if (a === b) return a;
  const min = Math.min(Math.abs(a), Math.abs(b));
  if (a % b === 0 || b % a === 0) return min;
  const max = Math.max(Math.abs(a), Math.abs(b));
  const diff = max - min;
  return getGcd(min, diff);
};

export const getProgression = (start, length, step) => {
  let acc = start;
  const res = [start];

  for (let i = 1; i < length; i += 1) {
    acc += step;
    res.push(acc);
  }

  return res;
};
