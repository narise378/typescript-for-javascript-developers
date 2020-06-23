export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // 初期化処理
    this.name = name;
    this.age = age;
  }

  prfile(): string {
    return `名前: ${this.name}, 年齢: ${this.age}`;
  }
}
let taro = new Person("Taro", 30);
console.log(taro.prfile());
// let hanako = new Person();
