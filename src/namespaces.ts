export {};

namespace Japanese {
  export namespace Kyoto {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Toyama {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Kyoto.Person("成田");
const meToyama = new Japanese.Toyama.Person("なり");
const me2 = new English.Person("Akinobu", "Ero", "Nrita");
console.log(me.name);
console.log(meToyama.name);
console.log(me2);
