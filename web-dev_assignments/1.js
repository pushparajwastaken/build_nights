const username = (user) => {
  return `Hello,${user}`;
};
console.log(username("Lavanya"));
const sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 4));
console.log(sum(3, "Lavanya"));
const canVote = (age) => {
  return age > 18;
};
console.log(canVote(19));
const users1 = [
  { name: "Lavanya", age: 20, gender: "female" },
  {
    name: "Pushparaj",
    age: 21,
    gender: "male",
  },
  {
    name: "Sajal",
    age: 21,
    gender: "male",
  },
  {
    name: "Ayush",
    age: 17,
    gender: "male",
  },
];
const ass1 = (users) => {
  const arr = users.filter((user) => user.age > 18 && user.gender == "female");
  console.log(arr);
};
ass1(users1);
