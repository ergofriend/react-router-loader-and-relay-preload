import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { AnimatedOutlet } from "../components/AnimatedOutlet";

type Props = {
  // children: React.ReactNode;
};

export const AppPage: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <motion.div
      style={{
        zIndex: 10,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        backgroundColor: "skyblue",
      }}
      initial={{ scale: 0, x: "200px", y: "200px" }}
      animate={{ scale: 1, x: 0, y: 0 }}
      exit={{ scale: 0, x: "200px", y: "200px" }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
    >
      <AnimatePresence initial={false}>
        <AnimatedOutlet
          key={location.pathname.includes("app1") ? "app1" : "other"}
          name={"apps"}
        />
      </AnimatePresence>
    </motion.div>
  );
};
