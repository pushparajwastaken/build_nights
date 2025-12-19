import { ChaiCard } from "./ChaiCard.tsx";
import { Counter } from "./Counter.tsx";
import type { Chai } from "./Chai.tsx";
import { Section } from "./Props.tsx";
function App() {
  return (
    <>
      <div>
        <h1>Lavanya</h1>
        <ChaiCard name="Ear buds" price={2500} />
      </div>
      <Counter />
      <Section
        title={
          <h2>
            🫖 Order <span style={{ color: "gray" }}>Summary</span>
          </h2>
        }
        footer={<button>Confirm Order</button>}
      >
        <p>Tea: Masala</p>
        <p>Cups: 2</p>
      </Section>
    </>
  );
}

export default App;
