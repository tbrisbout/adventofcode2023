const log = <T>(x: T): T => (console.log(x), x)

type GameSet = Record<'red' | 'green' | 'blue', number>

const MAX: GameSet = {
  red: 12,
  green: 13,
  blue: 14,
};

const isPossible = (set: GameSet): boolean => set.red <= MAX.red && set.green <= MAX.green && set.blue <= MAX.blue;

const GAME_ROW_PATTERN = /^Game (?<id>\d+): (?<results>.*)$/;

// parse a string like `3 blue, 4 red, 5 green`
const parseGameSet = (rawSet: string): GameSet =>
  rawSet.split(', ').reduce((acc, curr) => {
    const [count, color] = curr.split(" ");

    return { ...acc, [color]: parseInt(count, 10) };
  }, { red: 0, green: 0, blue: 0 })

export const solvePart1 = (input: string[]): number => input
  .map((row) => {
    const { id, results } = GAME_ROW_PATTERN.exec(row)?.groups ?? {};

    return {
      id: parseInt(id, 10),
      sets: results.split('; ').map(parseGameSet),
    };
  })
  .filter(({ sets }) => sets.every(isPossible))
  .reduce((acc, { id }) => acc + id, 0)

// TODO
export const solvePart2 = (input: string[]): number => 0;
