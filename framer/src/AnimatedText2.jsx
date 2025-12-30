//Animation Sequences
import { motion, useAnimate } from "motion/react";
export const AnimatedText2 = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    await animate(".text", { opacity: 0 }, { duration: 0.1 });

    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "10000px",
      },
      { duration: 0.3 }
    );

    await animate(
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right,#00ff99,#00ccff)",
      },
      { duration: 0.8 }
    );
    await animate(
      ".loader",
      {
        opacity: 1,
        width: "2rem",
      },
      { duration: 0.1 }
    );
    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      { duration: 2 }
    );

    animate(
      ".loader",
      {
        opacity: 0,
        scale: 0,
      },
      { duration: 0.1 }
    );

    await animate(".check-icon", { opacity: 1 }, { duration: 0.1 });

    await animate(".check-icon path", { pathLength: 1 }, { duration: 0.3 });
  };
  return (
    <div className="font-mono" ref={scope}>
      <motion.button
        onClick={startAnimating}
        style={{
          width: "30rem",
        }}
        className="h-20 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500
            text-white font-medium"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader absolute inset-0 m-auto h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <span className="text">Buy Now</span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth={3}
        style={{
          opacity: 0,
        }}
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
          }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeOut",
          }}
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
};
