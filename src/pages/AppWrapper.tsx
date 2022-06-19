import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export const AppWrapper = () => {
  const location = useLocation();
  const o = useOutlet();

  return (
    <AnimatePresence initial={false}>
      <Suspense
        key={location.pathname}
        fallback={<div>Suspense AppWrapper</div>}
      >
        {o}
      </Suspense>
    </AnimatePresence>
  );
};
