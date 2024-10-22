import { cn } from "../../../utils";
import { Icon } from "../icon";

export type QueryErrorProps = {
  className?: string;
  refetch: () => void;
};

export const QueryError = ({ className, refetch }: QueryErrorProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 text-secondary-600",
        className,
      )}
    >
      <Icon name="CircleAlert" className="size-6" />
      <h3>Failed to fetch data</h3>
      <button onClick={refetch} className="text-sm active:text-secondary-500">
        Tap to retry
      </button>
    </div>
  );
};
