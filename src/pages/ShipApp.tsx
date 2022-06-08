import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatedOutlet } from "../components/AnimatedOutlet";

export const ShipApp = () => {
  const location = useLocation();
  const o = useOutlet();

  return (
    <AnimatePresence initial={false}>
      {/* <AnimatedOutlet key={location.pathname} name={"ShipApp"} /> */}
      <div key={location.pathname}>
        <Suspense fallback={<div>Suspense ShipApp</div>}>{o}</Suspense>;
      </div>
    </AnimatePresence>
  );
};
