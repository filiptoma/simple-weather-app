import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "../../../utils";

const inputVariants = cva(
  [
    "h-full flex-grow bg-secondary-100 px-4 placeholder-secondary-500",
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0",
  ],
  {
    variants: {
      withLeftElement: {
        true: "",
        false: "",
      },
      withRightElement: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        withLeftElement: true,
        withRightElement: true,
        class: "rounded-none",
      },
      {
        withLeftElement: true,
        withRightElement: false,
        class: "rounded-r-lg rounded-l-none",
      },
      {
        withLeftElement: false,
        withRightElement: true,
        class: "rounded-r-none rounded-l-lg",
      },
      {
        withLeftElement: false,
        withRightElement: false,
        class: "rounded-lg",
      },
    ],
  },
);

export type InputProps = {
  value: string;
  LeftElement?: React.ReactElement;
  RightElement?: React.ReactElement;
  onValueChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, onValueChange, LeftElement, RightElement, className, ...rest },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value);
    };

    return (
      <div className="flex h-12 flex-row items-center rounded-lg bg-secondary-100">
        {LeftElement && (
          <div className="flex min-w-12 justify-center">{LeftElement}</div>
        )}
        <input
          ref={ref}
          value={value}
          onChange={handleChange}
          className={cn(
            inputVariants({
              withLeftElement: !!LeftElement,
              withRightElement: !!RightElement,
            }),
            className,
          )}
          {...rest}
        />
        {RightElement && (
          <div className="flex min-w-12 justify-center">{RightElement}</div>
        )}
      </div>
    );
  },
);
