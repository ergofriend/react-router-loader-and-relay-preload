import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import {
  useLocation,
  useOutlet,
  UNSAFE_DataRouterContext,
} from "react-router-dom";
import "./App.css";
import { PageWrapper } from "./components/PageWrapper";

const AnimatedOutlet: React.FC = () => {
  let [loaderContext] = useState(useContext(UNSAFE_DataRouterContext));
  return (
    <UNSAFE_DataRouterContext.Provider value={loaderContext}>
      <AnimatedOutletInner />
    </UNSAFE_DataRouterContext.Provider>
  );
};

const AnimatedOutletInner = () => {
  const o = useOutlet();
  const [outlet] = useState(o);
  return outlet;
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
