import { useState } from "react";

import { CurrentTime } from "../../components/atoms/current-time";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../components/molecules/dialog";
import { DataGrid } from "../../components/organisms/data-grid";
import {
  PlaceSelect,
  PlaceSelectButton,
} from "../../components/organisms/place-select";

export const DesktopView = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const openDialog = () => {
    setIsSearchOpened(true);
  };

  const closeDialog = () => {
    setIsSearchOpened(false);
  };

  return (
    <>
      {/* Show weather data for selected place */}
      <div className="my-10 flex min-h-screen items-center justify-center">
        <div className="flex w-full max-w-xl flex-col items-center gap-4">
          <figure>
            <img src="/graphic.png" className="rounded-3xl object-cover" />
          </figure>
          <section className="w-full rounded-3xl p-4 shadow-inner">
            <div className="mb-6 mt-4 flex flex-row items-center justify-between sm:mt-0">
              <CurrentTime />
              <PlaceSelectButton onClick={openDialog} />
            </div>
            <DataGrid />
          </section>
        </div>
      </div>
      {/* Dialog contains view for searching & selecting a place */}
      <Dialog open={isSearchOpened} onOpenChange={setIsSearchOpened}>
        <DialogContent
          className="gap-6 p-6"
          // Generally a bad idea because it breaks accessibility, but tolerable in this case
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogTitle>
            <h3 className="flex justify-center text-lg text-secondary-500">
              Location
            </h3>
          </DialogTitle>
          <PlaceSelect onSelect={closeDialog} />
        </DialogContent>
      </Dialog>
    </>
  );
};
