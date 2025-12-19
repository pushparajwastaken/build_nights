import { useState } from "react";

interface OrderFormProps {
  onSubmit: (order: { name: string; cups: number }) => void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevent page reload

    onSubmit({
      name,
      cups,
    });
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleCupsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCups(Number(e.target.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Tea Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>

      <div>
        <label>
          Cups:
          <input
            type="number"
            min={1}
            value={cups}
            onChange={handleCupsChange}
          />
        </label>
      </div>

      <button type="submit">Place Order</button>
    </form>
  );
}
