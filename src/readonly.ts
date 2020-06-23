export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("なり");

console.log(myVisaCard.owner);
// myVisaCard.owner = "どん";
