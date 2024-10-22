import { createContext, useEffect, useState } from "react";

import { DEFAULT_PLACE } from "../../const";
import { Coordinates, Location } from "../../types";
import { getGeolocationPlace } from "./utils";

export type PlaceContextState = {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  coordinates: Coordinates;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  isLoadingGeolocation: boolean;
};

export const PlaceContext = createContext<PlaceContextState | undefined>(
  undefined,
);

export const PlaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<Location>(DEFAULT_PLACE.location);
  const [coordinates, setCoordinates] = useState<Coordinates>(
    DEFAULT_PLACE.coordinates,
  );
  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false);

  // Initialize place, prefer geolocation place
  useEffect(() => {
    setIsLoadingGeolocation(true);
    getGeolocationPlace().then((place) => {
      setLocation(place.location);
      setCoordinates(place.coordinates);
      setIsLoadingGeolocation(false);
    });
  }, []);

  return (
    <PlaceContext.Provider
      value={{
        location,
        setLocation,
        coordinates,
        setCoordinates,
        isLoadingGeolocation,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};
