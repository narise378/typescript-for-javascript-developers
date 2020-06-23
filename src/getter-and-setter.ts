export {};

// * owner
//  * 所有者
//   * 初期化時に設定出来る
//   * 途中で変更できない
//   * 参照出来る
// * secretNumber
//  * 個人番号
//   * 初期化時に設定出来る
//   * 途中で変更出来る
//   * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    // 参照するメソッドをgetterという
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    // 更新を管理するメソッドをsetterという
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("なり", 123456789);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 12121212;
console.log(card.debugPrint());
console.log(card.secretNumber);
