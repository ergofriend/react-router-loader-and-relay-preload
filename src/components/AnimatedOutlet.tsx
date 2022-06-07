import { useState, Suspense, useEffect } from "react";
import { useOutlet } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

const animationOutletAtom = atom<string[]>({
  key: "animationOutletAtom",
  default: [],
});

type AnimatedOutletProps = {
  name: string;
};

export const AnimatedOutlet: React.FC<AnimatedOutletProps> = ({ name }) => {
  const o = useOutlet();
  const [outlet] = useState(o);

  // const [_o, so] = useRecoilState(animationOutletAtom);
  // useEffect(() => {
  //   so((c) => [name, ...c]);
  //   console.log("AnimatedOutlet mount at", name);
  //   return () => {
  //     console.log("AnimatedOutlet unmount at", name);
  //     so((c) => {
  //       const [, ...tmp] = c;
  //       return tmp;
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   0 < _o.length && console.log(name, _o[_o.length - 1], _o);
  // }, [_o, name]);

  // if (0 < _o.length && _o[_o.length] !== name) return o;

  return <Suspense fallback={<div>Suspense</div>}>{outlet}</Suspense>;
};
