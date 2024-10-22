import { cn } from "../../../utils";
import { Icon } from "../icon";

export type LoadingProps = {
  className?: string;
};

export const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <Icon name="Loader" className="size-6 animate-spin" />
    </div>
  );
};
