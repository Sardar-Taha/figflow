import React from "react";
import { twMerge } from "tailwind-merge";

const ButtonComp = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        "w-48 h-12 bg-lightBlueish rounded-md text-white text-base font-bold",
        className
      )}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
