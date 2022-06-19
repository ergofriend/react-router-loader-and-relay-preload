import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";

type Props = {
  // children: React.ReactNode;
};

export const AppsWrapper: React.FC<Props> = () => {
  const location = useLocation();
  const o = useOutlet();

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
        <div key={location.pathname.includes("app1") ? "app1" : "other"}>
          <Suspense fallback={<div>Suspense AppPage</div>}>{o}</Suspense>;
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
