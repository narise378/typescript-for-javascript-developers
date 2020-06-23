export {};

class Me {
  static isProgrammer: boolean = true;
  static firstNmae: string = "Akinobu";
  static lastNmae: string = "Narita";

  static work() {
    // "Hey, guys! This is Akinobu! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstNmae}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
