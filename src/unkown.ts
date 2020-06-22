export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkown: unknown = kansu();

let sumAby = numberAny + 10;

//typeofを使い、型を確認しながら実行することを”タイプガード”
if (typeof numberUnkown === "number") {
  let sumUnkown = numberUnkown + 10;
}
