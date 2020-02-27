import { useEffect, useRef } from "react";

// Will do nothing the first time a component is mounted
// On subsequent mounts, will invoke func
// @param func: function
// @param deps: Array<dependencies>
export const usePreviouslyMountedEffect = (func, deps) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};
