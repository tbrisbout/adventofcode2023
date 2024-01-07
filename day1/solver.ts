export const solvePart1 = (input: string[]): number => input.reduce((acc, current) => {
  const m = current.match(/\d/g) ?? [];
  return acc + Number(m[0] + m[m.length - 1])
}, 0);

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const solvePart2 = (input: string[]): number => solvePart1(
  input.map(
    item => Array.from(item).reduce(
      (acc, curr) => {
        const now = acc + curr;
        const i = numbers.findIndex(n => now.includes(n));

        return i > -1
          ? now.replace(numbers[i], `${now[0]}${i + 1}${now[now.length - 1]}`)
          : now;
      },
      '',
    ),
  ),
);
