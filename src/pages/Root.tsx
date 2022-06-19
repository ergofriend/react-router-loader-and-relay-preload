import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import "./Root.css";
import { Suspense } from "react";

export const Root = () => {
  const location = useLocation();
  const o = useOutlet();

  return (
    <div className="App">
      <AnimatePresence initial={false}>
        <div key={location.pathname === "/" ? "/" : "*"}>
          <Suspense fallback={<div>Suspense Root</div>}>{o}</Suspense>;
        </div>
      </AnimatePresence>
    </div>
  );
};
