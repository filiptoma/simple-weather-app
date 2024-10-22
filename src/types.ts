export type Place = {
  location: Location;
  coordinates: Coordinates;
};

export type Location =
  | { isCurrent: true }
  | { isCurrent: false; city: string; country: string };

export type Coordinates = {
  lat: number;
  lon: number;
};
