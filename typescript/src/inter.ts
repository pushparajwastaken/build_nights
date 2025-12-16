interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const Masala: Chai = {
  flavour: "Masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;
interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    {
      console.log("Stop");
    }
  },
};
interface ChaiRating {
  [flavour: string]: number;
}
const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 3.6,
};
interface User {
  age: number;
}
const U: User = {
  // name: "Lavanya",
  age: 21,
};
interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
