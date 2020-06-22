export {};

enum Months {
  January = 1,
  Febuuary,
  March,
  April,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);

enum COLORS {
  RED = "#FF00000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  // YELLOW = "#FFFF00",
  BLUE = "#0000FF",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "#FFFF00",
  GRAY = "#808080",
}

COLORS.YELLOW;
