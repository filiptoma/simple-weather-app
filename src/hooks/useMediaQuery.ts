import { useCallback, useSyncExternalStore } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

// Modelled using TailwindCSS default breakpoints.
// https://tailwindcss.com/docs/screens#configuring-custom-screens
const MEDIA_QUERY: Record<Breakpoint, string> = {
  sm: "only screen and (min-width : 640px)",
  md: "only screen and (min-width : 768px)",
  lg: "only screen and (min-width : 1024px)",
  xl: "only screen and (min-width : 1280px)",
  "2xl": "only screen and (min-width : 1536px)",
};

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const query = MEDIA_QUERY[breakpoint];

  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("'useMediaQuery' is a client-only hook");
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
