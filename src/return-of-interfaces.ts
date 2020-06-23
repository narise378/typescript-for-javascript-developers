export {};

// TypeScriptでは複数のクラスを継承（extends）できないが、interfaceは複数同時に継承出来るので多重継承が出来る
class Mahoutukai {}
class Souryo {}

class Taro extends Mahoutukai {}

interface Kenja {
  // 処理の実態がわからないメソッドをシグネチャーという
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("イオナズン！！");
  }
  kougeki(): void {
    console.log("攻撃！！");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
