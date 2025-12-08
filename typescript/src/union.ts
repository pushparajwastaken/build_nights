let chai: string | number = "3 cups";
console.log(chai);
let cups = ["11", "22", "32", "34"];
let orderedCups: string | undefined;
let typeofChai: "Masala" | "Sugarless" | "Cutting";
for (let cup of cups) {
  if (cup == "22") {
    orderedCups = cup;
    break;
  }
  orderedCups = "8";
}

console.log(orderedCups);
