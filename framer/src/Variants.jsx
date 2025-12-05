import { motion } from "motion/react";

const Variants = () => {
  const buttonVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.1, rotate: 2 },
    tap: { scale: 0.95 },
  };

  <motion.button
    variants={buttonVariants}
    initial="normal"
    whileHover="hover"
    whileTap="tap"
  >
    Click Me
  </motion.button>;
};
export default Variants;
