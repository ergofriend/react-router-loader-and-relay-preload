import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import "./App.css";
import { PageWrapper } from "./components/PageWrapper";

type AnimatedOutletProps = {};

const AnimatedOutlet: React.FC<AnimatedOutletProps> = () => {
  const o = useOutlet();
  const [outlet] = useState(o);
  return <Suspense fallback={<div>Suspense</div>}>{outlet}</Suspense>;
};

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence initial={false}>
        <PageWrapper key={location.pathname}>
          <AnimatedOutlet />
        </PageWrapper>
      </AnimatePresence>
    </div>
  );
}

export default App;
