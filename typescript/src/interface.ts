type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};
function makeChai(Order: ChaiOrder) {
  console.log(Order);
}

function serveChai(Order: ChaiOrder) {
  console.log(Order);
}
type teaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}
interface cupSize {
  size: "small" | "large";
}

class Chai implements cupSize {
  size: "small" | "large" = "large";
}

// type Response={ok:true}| {ok:false}
// class myRes implements Response{
//     ok:boolean=true
// }

type TeaType = "Masala" | "Ginger" | "Lemon";
function orderChai(t: TeaType) {
  console.log(t);
}
type BaseChai = { tealeaves: number };
type Extra = { masala: number };

type MasalaTea = BaseChai & Extra;

const cup: MasalaTea = {
  tealeaves: 2,
  masala: 1,
};
type User = {
  username: string;
  bio?: string;
};
const u1: User = {
  username: "Lavanya",
  bio: "Cutest",
};
const u2: User = {
  username: "Pushparaj",
};
console.log(u1);

type Config = {
  readonly appName: string;
  version: number;
};
const cfg: Config = {
  appName: "Lavaa",
  version: 1,
};
const cf2: Config = {
  appName: "Pushpaa",
  version: 1,
};
