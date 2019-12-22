import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const delay = 250; // delay between calls
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    let throttled = false; // are we currently throttled?
    function updateSize() {
      if (!throttled) {
        setSize([window.innerWidth, window.innerHeight]);
        throttled = true;
        setTimeout(() => (throttled = false), delay);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return {
    wWidth: size[0],
    wHeight: size[1],
    isMobile: size[0] < 600,
    isLandscape: size[0] > size[1]
  };
}

export const calcTimeDiffFromNow = time => Date.now() - time;
