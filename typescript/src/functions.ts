function makeChai(type: String, cups: number): number {
  console.log(`Making ${cups} of ${type} `);
  return 5;
}
makeChai("Masala", 5);

function chai(type?: string): number {
  if (!type) return 0;
  return 1;
}
function order(type: string = "Masala") {}
function order1(type?: string) {}

function create(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 1;
}
