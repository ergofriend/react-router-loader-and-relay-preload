import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          x: "100%",
          y: 0,
        },
        in: {
          x: 0,
          y: 0,
        },
        out: {
          x: "-100%",
          y: 0,
        },
      }}
      transition={{
        duration: 3,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      {children}
    </motion.div>
  );
};
