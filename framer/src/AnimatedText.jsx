import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "The first rule of Fight Club is you do not talk about Fight Club. The second rule of Fight Club is you do not talk about Fight Club.";

  const StartAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  return (
    <div
      ref={scope}
      className="font-mono text-white max-w-4xl mx-auto text-4xl leading-relaxed"
    >
      <button
        onClick={StartAnimating}
        className="px-4 py-2 rounded-md bg-neutral-800"
      >
        What is Fight Club?
      </button>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
            display: "inline-block",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};
