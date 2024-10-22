import { useState } from "react";

import { usePlace } from "../../../context/place";
import { cn } from "../../../utils";
import { Icon } from "../../atoms/icon";

// Transition duration for bg color change when button is in active state
const TRANSITION_DURATION = 50;

export type PlaceSelectButtonProps = {
  onClick: () => void;
};

export const PlaceSelectButton = ({ onClick }: PlaceSelectButtonProps) => {
  const { location, isLoadingGeolocation } = usePlace();

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    onClick();
    // Ensure that whole transition plays
    setTimeout(() => {
      setIsActive(false);
    }, TRANSITION_DURATION);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        `flex flex-row items-center gap-1 rounded-bl-2xl rounded-tr-2xl bg-primary-100 p-3 text-primary transition-colors duration-[${TRANSITION_DURATION}] ease-in-out active:bg-primary-200 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-4 sm:text-lg`,
        isActive && "bg-primary-200",
      )}
    >
      <Icon name="MapPin" className="stroke-3 sm:size-5" />
      {location.isCurrent ? (
        <h3 className="min-w-fit">My location</h3>
      ) : (
        <h3 className="min-w-fit">
          {location.city}, {location.country}
        </h3>
      )}
      {isLoadingGeolocation && (
        <Icon
          name="Loader"
          className="animate-spin stroke-3 text-primary sm:size-5"
        />
      )}
    </button>
  );
};
