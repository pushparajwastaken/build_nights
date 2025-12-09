function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai order:${kind}`;
}
console.log(getChai(6));

function serveChai(msg?: string) {
  if (msg) {
    return `${msg}`;
  }
  return "Default Message";
}

function orderChai(size: "medium" | "small" | "cutting" | number) {
  if (size === "small") {
    return `Serving ${size}`;
  }
  if (size === "medium" || "cutting") {
    return `Serving extra ${size}`;
  }
  return `Serving ${size} cups of Chai`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.sugar}`;
  }
  return `Serving Custom Chai ${item}`;
}
type MasalaChai = { type: "Masala"; spicelevel: number };

type Chai = "string" | MasalaChai;
