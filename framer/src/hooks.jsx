import { Axis3d, DotSquare } from "lucide-react";
import { useMotionTemplate, useSpring, useTransform } from "motion/react";
import { ArrowsUpFromLine } from "lucide-react";
import { BatteryFull } from "lucide-react";
import { Apple } from "lucide-react";
import haaland from "./assets/haaland.jpeg";
import DeBruyne from "./assets/DeBruyne.jpeg";
import Messi from "./assets/Messi.jpeg";
import lamine from "./assets/lamine.jpeg";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { useState } from "react";
export function Hooks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#171717", "#0f172a", "#111827", "#36454F"];
  const [background, setBackground] = useState(backgrounds[0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setBackground(backgrounds[Math.floor(latest * backgrounds.length)]);
  });
  return (
    <motion.div
      animate={{ background }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      ref={containerRef}
      className="min-h-screen bg-neutral-900 flex items-center justify-center "
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature, idx) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}
const Card = ({ feature }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -350]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} className=" grid grid-cols-2 py-40 items-center gap-20">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-mono text-white">{feature.title}</h2>
        <p className="text-neutral-400 text-lg">{feature.description}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

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
