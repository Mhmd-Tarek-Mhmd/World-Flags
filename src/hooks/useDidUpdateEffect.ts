import React from "react";

export default function useDidUpdateEffect(
  callback: () => void,
  dependencies: unknown[],
): void {
  const hasMounted = React.useRef(false);

  React.useEffect(() => {
    if (hasMounted.current) {
      callback();
    } else {
      hasMounted.current = true;
    }
  }, dependencies);
}
