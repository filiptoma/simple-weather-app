import { Place } from "./types";

export const PLACE_BRATISLAVA: Place = {
  location: {
    isCurrent: false,
    city: "Bratislava",
    country: "Slovakia",
  },
  coordinates: {
    lon: 17.107748,
    lat: 48.148598,
  },
};

export const PLACE_HUMENNE: Place = {
  location: {
    isCurrent: false,
    city: "Humenné",
    country: "Slovakia",
  },
  coordinates: {
    lon: 21.90769,
    lat: 48.938259,
  },
};

export const PLACE_KOROMLA: Place = {
  location: {
    isCurrent: false,
    city: "Koromľa",
    country: "Slovakia",
  },
  coordinates: {
    lon: 22.29248,
    lat: 48.714939,
  },
};

export const PLACE_KOSICE: Place = {
  location: {
    isCurrent: false,
    city: "Košice",
    country: "Slovakia",
  },
  coordinates: {
    lon: 21.261074,
    lat: 48.716385,
  },
};

export const PLACE_MICHALOVCE: Place = {
  location: {
    isCurrent: false,
    city: "Michalovce",
    country: "Slovakia",
  },
  coordinates: {
    lon: 21.91486,
    lat: 48.756001,
  },
};

export const PLACE_SOBRANCE: Place = {
  location: {
    isCurrent: false,
    city: "Sobrance",
    country: "Slovakia",
  },
  coordinates: {
    lon: 22.17977,
    lat: 48.745861,
  },
};

export const PLACES: Place[] = [
  PLACE_BRATISLAVA,
  PLACE_HUMENNE,
  PLACE_KOROMLA,
  PLACE_KOSICE,
  PLACE_MICHALOVCE,
  PLACE_SOBRANCE,
];

// Default place for cases when user did not allow geolocation or geolocation failed
export const DEFAULT_PLACE: Place = PLACE_BRATISLAVA;
