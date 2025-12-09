import { Axis3d } from "lucide-react";
import { ArrowsUpFromLine } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { Apple } from "lucide-react";
import haaland from "./assets/haaland.jpeg";
import DeBruyne from "./assets/DeBruyne.jpeg";
import Messi from "./assets/Messi.jpeg";
import lamine from "./assets/lamine.jpeg";
import { useScroll } from "motion/react";
import { useRef } from "react";
export function Hooks() {
  const ref = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center ">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature, idx) => {
          return (
            <div
              key={feature.title}
              className="grid grid-cols-2 py-40 items-center gap-20"
            >
              <div className="flex flex-col gap-5">
                {feature.icon}
                <h2 className="text-4xl font-mono text-white">
                  {feature.title}
                </h2>
                <p className="text-neutral-400 text-lg">
                  {feature.description}
                </p>
              </div>
              <div>{feature.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Axis3d className="h-8 w-8 text-neutral-200" />,
    title: "Erling Braut Haaland",
    description: "One of the greatest Striker Premier League has seen",
    content: (
      <div>
        <img
          src={haaland}
          alt="striker"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <ArrowsUpFromLine className="h-8 w-8 text-neutral-200" />,
    title: "Kevin DeBruyne",
    description: "The Best Premier League Player Ever",
    content: (
      <div>
        <img
          src={DeBruyne}
          alt="kev"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <BatteryFull className="h-8 w-8 text-neutral-200" />,
    title: "Lionel Andres Messi",
    description: "The Best Football Player Ever",
    content: (
      <div>
        <img
          src={Messi}
          alt="GOAT"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Apple className="h-8 w-8 text-neutral-200" />,
    title: "Lamine Yamal",
    description: "Barcelona's Star Boy",
    content: (
      <div>
        <img
          src={lamine}
          alt="Star Boy"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
];
