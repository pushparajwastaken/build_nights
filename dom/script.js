//4 Pillars of DOM
/*
Selection of an Element
Changing HTML
Changing CSS
Event listener
*/
const main = document.getElementById("main");
const h1 = document.querySelector("h1");
console.log(h1);
h1.addEventListener("click", () => {
  h1.innerHTML = "Lavanya Cutie";
  h1.style.color = "white";
  h1.style.backgroundColor = "blue";
});
main.addEventListener("click", () => {
  console.log("hello");
});
