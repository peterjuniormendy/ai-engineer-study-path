// Week 2 · Thursday
// Task: Solve 2 Exercism TypeScript exercises. Paste your solutions here.
// Write your solution below, run it, then commit and push.

// Solution one

export function twoFer(name: string): string {
  if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
}

// Solution two

export function hello(): string {
  return "Hello, World!";
}

// Solution three
interface ColorCoding {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

const colorCoding: ColorCoding = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
export function decodedResistorValue(colors: string[]): string {
  const [color1, color2, color3] = colors;

  const firstDigit = colorCoding[color1 as keyof ColorCoding];
  const secondDigit = colorCoding[color2 as keyof ColorCoding];
  const multiplier = colorCoding[color3 as keyof ColorCoding];

  const resistance = (firstDigit * 10 + secondDigit) * Math.pow(10, multiplier);

  if (resistance >= 1_000_000_000) {
    return `${resistance / 1_000_000_000} gigaohms`;
  }

  if (resistance >= 1_000_000) {
    return `${resistance / 1_000_000} megaohms`;
  }

  if (resistance >= 1_000) {
    return `${resistance / 1_000} kiloohms`;
  }

  return `${resistance} ohms`;
}
