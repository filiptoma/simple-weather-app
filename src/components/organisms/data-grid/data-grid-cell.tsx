import { cva } from "class-variance-authority";

import { cn } from "../../../utils";
import { Icon, Icons } from "../../atoms/icon";

type MainCellProps = {
  className?: string;
  children: React.ReactNode;
};

export const MainCell = ({ className, children }: MainCellProps) => {
  return (
    <div
      className={cn(
        "flex h-28 flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

const dataCellVariants = cva(
  [
    "flex h-28 flex-col items-center justify-center gap-1",
    "sm:h-40 sm:text-lg sm:gap-2",
  ],
  {
    variants: {
      elevated: {
        true: "shadow-[0_8px_24px_0_rgba(0,0,0,0.10)] rounded-2xl sm:bg-slate-50 sm:shadow-inner",
        false: "",
      },
    },
  },
);

type DataCellProps = {
  value: string;
  label: string;
  iconName: Icons;
  elevated?: boolean;
};

export const DataCell = ({
  value,
  label,
  iconName,
  elevated = false,
}: DataCellProps) => {
  return (
    <div className={cn(dataCellVariants({ elevated }))}>
      <Icon
        name={iconName}
        className="mb-1 size-8 stroke-1 text-secondary-400 sm:mb-2 sm:size-12"
      />
      <h3>{value}</h3>
      <span className="text-xs text-secondary-500 sm:text-sm">{label}</span>
    </div>
  );
};
