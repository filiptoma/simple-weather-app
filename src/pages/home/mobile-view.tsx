import { useRef, useState } from "react";

import { CurrentTime } from "../../components/atoms/current-time";
import { Icon } from "../../components/atoms/icon";
import {
  BottomSheet,
  BottomSheetRef,
} from "../../components/molecules/bottom-sheet";
import { DataGrid } from "../../components/organisms/data-grid";
import {
  PlaceSelect,
  PlaceSelectButton,
} from "../../components/organisms/place-select";

export const MobileView = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const expandBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const collapseBottomSheet = () => {
    bottomSheetRef.current?.collapse();
  };

  return (
    <>
      <figure>
        <img src="/graphic.png" className="object-cover" />
      </figure>
      <BottomSheet ref={bottomSheetRef} onChange={setIsSearchOpened}>
        {/* Expanded Bottom Sheet - search & select a place */}
        {isSearchOpened ? (
          <section className="flex flex-col gap-6 px-4">
            <div className="flex items-center justify-between py-4 text-secondary-500">
              <button
                className="w-10 active:text-secondary-300"
                onClick={collapseBottomSheet}
              >
                <Icon name="ChevronLeft" className="size-6" />
              </button>
              <h3 className="flex flex-grow justify-center">Location</h3>
              <span className="w-10" />
            </div>
            <PlaceSelect onSelect={collapseBottomSheet} />
          </section>
        ) : (
          <>
            {/* Collapsed Bottom Sheet - show weather data for selected place */}
            <div className="flex flex-row items-center justify-between">
              <CurrentTime className="mx-4" />
              <PlaceSelectButton onClick={expandBottomSheet} />
            </div>
            <DataGrid />
          </>
        )}
      </BottomSheet>
    </>
  );
};
