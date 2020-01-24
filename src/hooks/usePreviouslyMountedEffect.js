import { useEffect, useRef } from "react";

export const usePreviouslyMountedEffect = (func, deps) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
