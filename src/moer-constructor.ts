export {};

class Person {
  // constructorの引数にアクセス修飾節を実装すると初期化処理を自動でやってくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person("Nari", 32);
console.log(me);
