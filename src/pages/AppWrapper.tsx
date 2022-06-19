import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export const AppWrapper = () => {
  const location = useLocation();
  const o = useOutlet();

  return (
    <AnimatePresence initial={false}>
      <div key={location.pathname}>
        <Suspense fallback={<div>Suspense ShipApp</div>}>{o}</Suspense>;
      </div>
    </AnimatePresence>
  );
};
