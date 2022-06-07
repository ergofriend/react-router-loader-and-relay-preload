import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AnimatedOutlet } from "./components/AnimatedOutlet";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence initial={false}>
        <AnimatedOutlet key={location.pathname === "/" ? "/" : "*"} />
      </AnimatePresence>
    </div>
  );
}

export default App;
