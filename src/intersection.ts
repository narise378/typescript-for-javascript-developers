export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimaginSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHromitu: Batter1 = {
  battingAverage: 0.367,
};

// intersectionで型を＆でつなげる事で流用出来る
type TwoWayPlayer = Pitcher1 & Batter1;

const OtainShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
