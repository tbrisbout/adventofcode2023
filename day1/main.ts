import { input } from './input.ts';
import { solvePart1, solvePart2 } from './solver.ts';

const main = (input: string[]) => {
  console.log('Part1:', solvePart1(input));
  console.log('Part2:', solvePart2(input));
};

main(input);
