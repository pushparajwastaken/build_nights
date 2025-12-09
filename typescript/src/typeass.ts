let response: any = "23234";
let numericLength: number = (response as string).length;
type Book = {
  name: string;
};
let bookString = '{"name":"One Thing"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}
const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user";

function redirectBasedRole(role: Role): void {
  if (role === "admin") {
    console.log("Dashboard");
    return;
  }
  if (role === "user") {
    console.log("User");
    return;
  }
  role;
}
function neverreturn(): never {
  while (true) {}
}
