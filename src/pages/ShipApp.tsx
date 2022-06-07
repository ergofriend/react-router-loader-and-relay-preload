import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AnimatedOutlet } from "../components/AnimatedOutlet";

export const ShipApp = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <AnimatedOutlet key={location.pathname} name={"ShipApp"} />
    </AnimatePresence>
  );
};
