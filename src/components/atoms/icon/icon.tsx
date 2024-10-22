import { type LucideProps, icons } from "lucide-react";

import { cn } from "../../../utils";

export type Icons = keyof typeof icons;

export type IconProps = {
  name: Icons;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
} & LucideProps;

export const Icon = ({ name, className, ...iconProps }: IconProps) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon className={cn("size-4 stroke-2", className)} {...iconProps} />
  );
};
