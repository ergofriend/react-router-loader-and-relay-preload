import { useState, Suspense } from "react";
import { useOutlet } from "react-router-dom";

type AnimatedOutletProps = {};

export const AnimatedOutlet: React.FC<AnimatedOutletProps> = () => {
  const o = useOutlet();
  const [outlet] = useState(o);
  return <Suspense fallback={<div>Suspense</div>}>{outlet}</Suspense>;
};
