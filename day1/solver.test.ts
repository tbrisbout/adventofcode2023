import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import { solvePart1, solvePart2 } from './solver.ts';

Deno.test('day 1 part 1', () => {
  const input = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];

  assertEquals(solvePart1(input), 142);
});

Deno.test('day 1 part 2', () => {
  const input = [
    'two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen',
    'sevenine',
  ];

  assertEquals(solvePart2(input), 360);
})
