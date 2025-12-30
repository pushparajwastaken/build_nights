import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "The first rule of Fight Club is you do not talk about Fight Club. The second rule of Fight Club is you do not talk about Fight Club.";
  useEffect(() => {
    startAnimating();
  });
  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        ease: "easeInOut",
      }
    );
  };
  return (
    <div
      ref={scope}
      className="font-mono text-white max-w-4xl mx-auto text-4xl"
    >
      {/* <motion.span
        style={{
          opacity: 0,
        }}
        className="inline-block"
      >
        {text}
      </motion.span> */}
      {text.split(" ").map((word, index) => {
        <motion.span
          key={word + index}
          style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        >
          {word}
        </motion.span>;
      })}
    </div>
  );
};
