import { useState } from "react";

import { useWeatherData } from "../../../api/weather";
import { PLACES } from "../../../const";
import { usePlace } from "../../../context/place";
import { Place } from "../../../types";
import { containsNormalized, round } from "../../../utils";
import { Icon } from "../../atoms/icon";
import { Input } from "../../molecules/input";

export type PlaceSelectProps = {
  onSelect: () => void;
};

export const PlaceSelect = ({ onSelect }: PlaceSelectProps) => {
  const [searchString, setSearchString] = useState("");
  const [places, setPlaces] = useState<Place[]>(PLACES);

  const handleInputChange = (value: string) => {
    setSearchString(value);
    setPlaces(
      PLACES.filter((place) => {
        if (place.location.isCurrent) {
          return false;
        }
        return containsNormalized(value, place.location.city);
      }),
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search Input */}
      <Input
        value={searchString}
        onValueChange={handleInputChange}
        placeholder="Search city"
        RightElement={<Icon name="MapPin" className="size-5" />}
      />

      {/* Results */}
      <div>
        {places.length === 0 ? (
          <span className="flex justify-center text-secondary-500">
            No results found
          </span>
        ) : (
          <>
            {places.map((place, index) => (
              <PlaceItem
                key={`${place.coordinates.lon}-${place.coordinates.lat}-${index}`}
                place={place}
                onSelect={onSelect}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const PlaceItem = ({
  place,
  onSelect,
}: {
  place: Place;
  onSelect: PlaceSelectProps["onSelect"];
}) => {
  const { setLocation, setCoordinates } = usePlace();

  const { data, isLoading } = useWeatherData({
    lon: place.coordinates.lon,
    lat: place.coordinates.lat,
  });

  const handleClick = () => {
    setLocation(place.location);
    setCoordinates(place.coordinates);
    onSelect();
  };

  // Render only non-geolocation places
  if (place.location.isCurrent) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="flex w-full flex-row items-center justify-between p-2 active:opacity-50 sm:py-3"
    >
      <span>{place.location.city}</span>
      {isLoading ? (
        <Icon name="Loader" className="animate-spin text-secondary-400" />
      ) : (
        <>
          {data ? (
            <span className="text-secondary-400">
              {round(data.current.temp, 0)}°C
            </span>
          ) : null}
        </>
      )}
    </button>
  );
};
