import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import { solveDay1 } from './solver.ts';

Deno.test('day 1 part 1', () => {
  const input = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
  ];

  assertEquals(solveDay1(input), 142);
});
