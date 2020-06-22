export {};

type Mojiretu = string;

const fooString: string = "こんちは！";
const fooMojiretu: Mojiretu = "こんちは〜";

const example1 = {
  name: "nari",
  age: 32,
};

type Profile = {
  //型エイリアス
  name: string;
  age: number;
};

const example2: Profile = {
  name: "don",
  age: 32,
};

type Profile2 = typeof example1;
//追従して型を設定して定義する、typeofで参照する
