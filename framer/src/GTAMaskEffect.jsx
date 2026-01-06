import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from "motion/react";

const springVars = {
  stiffness: 100,
  damping: 10,
};

export const MaskEffect = () => {
  const { scrollYProgress } = useScroll();

  const maskSize = useSpring(
    useTransform(scrollYProgress, [0, 1], [1400, 400]),
    springVars
  );

  const maskPosition = useSpring(
    useTransform(scrollYProgress, [0, 1], [-180, 100]),
    springVars
  );
  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.3, 1]),
    springVars
  );
  const outerImageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0]),
    springVars
  );
  const whiteFillOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  return (
    <div className="h-[300vh] bg-black">
      {/* Background image */}
      <motion.div
        style={{
          scale: imageScale,
          opacity: outerImageOpacity,
        }}
        className="fixed inset-0 h-full w-full bg-[url('/haaland.webp')] bg-cover bg-center"
      />

      {/* Mask layer */}
      <motion.div
        className="fixed inset-0 w-full h-full
        [mask-image:url('/mask.svg')]
        [mask-repeat:no-repeat]
        [mask-position:center]
        [mask-size:400px]
        [-webkit-mask-image:url('/mask.svg')]
        [-webkit-mask-repeat:no-repeat]"
        style={{
          maskSize: useMotionTemplate`${maskSize}px`,
          WebkitMaskSize: useMotionTemplate`${maskSize}px`,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
          WebkitMaskPosition: useMotionTemplate`center ${maskPosition}px`,
        }}
      >
        <motion.div
          className="fixed inset-0 h-full w-full bg-[url('/haaland.webp')] bg-fixed bg-cover"
          style={{ scale: imageScale }}
        ></motion.div>
        <motion.div
          style={{
            opacity: whiteFillOpacity,
          }}
          className="fixed inset-0 h-full w-full bg-white"
        ></motion.div>
      </motion.div>
    </div>
  );
};
