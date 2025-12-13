const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea keaves"],
};

type Cup = { size: String };
let smallCup: Cup = { size: "small" };
let BigCupL = { size: "big", material: "steel" };

smallCup = BigCupL;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaibrew: Brew = coffee;

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updatedChai = (updates: Partial<Chai>) => {
  console.log("Updating Chai with ", updates);
};
updatedChai({ price: 25 });

type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({
  name: "Masala Chai",
  quantity: 3,
});
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
function getPublicUser(user: User): Pick<User, "id" | "name"> {
  return {
    id: user.id,
    name: user.name,
  };
}
function toPublicUser(user: User): Omit<User, "password"> {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
