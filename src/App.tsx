import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatedOutlet } from "./components/AnimatedOutlet";
import "./App.css";
import { Suspense } from "react";

function App() {
  const location = useLocation();
  const o = useOutlet();

  return (
    <div className="App">
      <AnimatePresence initial={false}>
        {/* <AnimatedOutlet
          key={location.pathname === "/" ? "/" : "*"}
          name={"root"}
        /> */}
        <div key={location.pathname === "/" ? "/" : "*"}>
          <Suspense fallback={<div>Suspense Root</div>}>{o}</Suspense>;
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
