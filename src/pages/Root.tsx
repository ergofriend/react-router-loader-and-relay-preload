import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

export const Root = () => {
  const location = useLocation();
  const o = useOutlet();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false}>
        <Suspense
          key={location.pathname === "/" ? "/" : "*"}
          fallback={<div>Suspense Root</div>}
        >
          {o}
        </Suspense>
        ;
      </AnimatePresence>
    </div>
  );
};
