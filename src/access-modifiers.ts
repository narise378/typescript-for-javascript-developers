export {};

class Person {
  // クラスの内外問わずアクセス可能、グローバルアクセス
  public name: string;
  // クラス内のみアクセスが可能、ローカルアクセス
  //private age: number;
  protected age: number;
  // サブクラスでもアクセスが可能
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    // 初期化処理
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  prfile(): string {
    return `名前: ${this.name}, 年齢: ${this.age}, 国籍: ${this.nationality}`;
  }
}

class Andoroid extends Person {
  //extendsで継承
  constructor(name: string, age: number, nationality: string) {
    // superメソッドでクラスのコンストラクターメソッドを継承出来る
    super(name, age, nationality);
  }

  prfile(): string {
    return `名前: ${this.name}, 年齢: ${this.age}, 国籍: ${this.nationality}`;
  }
}

let taro = new Person("Taro", 30, "日本");
console.log(taro.prfile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
