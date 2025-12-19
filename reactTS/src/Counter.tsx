import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={() => add()}>Add</button>
    </div>
  );
}
