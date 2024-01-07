type GameSet = Record<'red' | 'green' | 'blue', number>

const isPossible = (max: GameSet) => (set: GameSet): boolean => set.red <= max.red && set.green <= max.green && set.blue <= max.blue;

const GAME_LOG_PATTERN = /^Game (?<id>\d+): (?<results>.*)$/;

const parseGameLog = (rawGame: string): { id: number, sets: readonly GameSet[] } => {
  const { id, results } = GAME_LOG_PATTERN.exec(rawGame)?.groups ?? {};

  return {
    id: parseInt(id, 10),
    sets: results.split('; ').map(parseGameSet),
  };
};

// parse a string like `3 blue, 4 red, 5 green`
const parseGameSet = (rawSet: string): GameSet =>
  rawSet.split(', ').reduce((acc, curr) => {
    const [count, color] = curr.split(" ");

    return { ...acc, [color]: parseInt(count, 10) };
  }, { red: 0, green: 0, blue: 0 })

export const solvePart1 = (input: string[]): number => input
  .map(parseGameLog)
  .filter(({ sets }) => sets.every(isPossible({ red: 12, green: 13, blue: 14 })))
  .reduce((sum, { id }) => sum + id, 0)

export const solvePart2 = (input: string[]): number => input
  .map(parseGameLog)
  .map(({ sets }) =>
    Math.max(...sets.map(s => s.red)) *
    Math.max(...sets.map(s => s.green)) *
    Math.max(...sets.map(s => s.blue)))
  .reduce((sum, x) => sum + x, 0)

