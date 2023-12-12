export const solveDay1 = (input: string[]): number => input.reduce((acc, current) => {
  const m = current.match(/\d/g) ?? [];
  return acc + Number(m[0] + m[m.length - 1])
}, 0);
