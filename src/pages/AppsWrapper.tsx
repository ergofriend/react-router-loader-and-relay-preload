import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useMemo } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export const AppsWrapper: React.FC = () => {
  const location = useLocation();
  const o = useOutlet();

  const key = useMemo(
    () => location.pathname.split("/")[1],
    [location.pathname]
  );

  return (
    <motion.div
      style={{
        zIndex: 10,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        backgroundColor: "skyblue",
      }}
      initial={{
        scale: 0,
      }}
      animate={{ scale: 1, left: 0, top: 0 }}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
    >
      <AnimatePresence initial={false}>
        <Suspense key={key} fallback={<div>Suspense AppsWrapper</div>}>
          {o}
        </Suspense>
      </AnimatePresence>
    </motion.div>
  );
};
