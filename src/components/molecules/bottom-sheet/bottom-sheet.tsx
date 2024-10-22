import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef, useImperativeHandle, useState } from "react";

import { useMeasure } from "../../../hooks/useMeasure";
import { cn } from "../../../utils";

export type BottomSheetRef = {
  expand: () => void;
  collapse: () => void;
};

export type BottomSheetProps = {
  children: React.ReactNode;
  onChange?: (state: boolean) => void;
};

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({ children, onChange }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [measureRef, { height }] = useMeasure();

    const contentHeight = isExpanded ? "95%" : `${height}px`;

    useImperativeHandle(ref, () => ({
      expand: () => {
        setIsExpanded(true);
        onChange?.(true);
      },
      collapse: () => {
        setIsExpanded(false);
        onChange?.(false);
      },
    }));

    return (
      <Dialog.Root open={true} modal={false}>
        <Dialog.Portal>
          <Dialog.Content
            style={{ height: contentHeight }}
            className={cn(
              "fixed bottom-0 left-0 right-0 rounded-t-2xl bg-white shadow-[0_-16px_40px_0_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out",
            )}
            // Generally a bad idea because it breaks accessibility, but tolerable in this case
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div
              ref={measureRef}
              key={contentHeight}
              className="duration-700 animate-in fade-in"
            >
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
);
