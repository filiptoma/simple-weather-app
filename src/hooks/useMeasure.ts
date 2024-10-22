import { RefCallback, useCallback, useRef, useState } from "react";

type Dimensions = {
  width: number | null;
  height: number | null;
};

// Measure element's width and height and react to layout changes.
export const useMeasure = (): [
  ref: RefCallback<HTMLElement>,
  dimensions: Dimensions,
] => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  const resizeObserver = useRef<ResizeObserver | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    if (resizeObserver.current) {
      resizeObserver.current.disconnect();
      resizeObserver.current = null;
    }

    if (node?.nodeType === Node.ELEMENT_NODE) {
      resizeObserver.current = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } =
            entry.borderBoxSize[0];
          setDimensions({
            width,
            height,
          });
        }
      });

      resizeObserver.current.observe(node);
    }
  }, []);

  return [ref, dimensions];
};

// Measure element's width and height only once on initial render.
export const useMeasureOnce = (): [
  ref: RefCallback<HTMLElement>,
  dimensions: Dimensions,
] => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  const isMeasured = useRef<boolean>(false);

  const isMeasuredRef = useCallback(() => {
    return (node: HTMLElement | null) => {
      if (node?.nodeType === Node.ELEMENT_NODE && !isMeasured.current) {
        const { width, height } = node.getBoundingClientRect();
        setDimensions({
          width,
          height,
        });
        isMeasured.current = true;
      }
    };
  }, []);

  const ref = isMeasuredRef();

  return [ref, dimensions];
};
