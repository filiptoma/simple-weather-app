import { useContext } from "react";

import { DEFAULT_PLACE } from "../../const";
import { Place } from "../../types";
import { PlaceContext, PlaceContextState } from "./place-context";

// Get place using geolocation, fallback to default place if not succeeded.
export const getGeolocationPlace = (): Promise<Place> => {
  return new Promise((resolve) => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { longitude, latitude } = pos.coords;
          resolve({
            location: { isCurrent: true },
            coordinates: {
              lon: longitude,
              lat: latitude,
            },
          });
        },
        (err) => {
          console.warn(err);
          resolve(DEFAULT_PLACE);
        },
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      resolve(DEFAULT_PLACE);
    }
  });
};

export const usePlace = (): PlaceContextState => {
  const ctx = useContext(PlaceContext);
  if (ctx === undefined) {
    throw new Error("'usePlace' must be used within 'PlaceProvider'");
  }
  return ctx;
};
