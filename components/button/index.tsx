import { LegacyRef, forwardRef } from "react";

const Button = (
  {
    color,
    text,
    className,
  }: {
    color: "bg-primary-03" | "bg-primary-04" | "bg-secondry-05";
    text: string;
    className?: string;
  },
  ref: LegacyRef<HTMLButtonElement>,
) => {
  return (
    <button
      className={`rounded-[5px] ${color} ${className}`}
      ref={ref}
    >
      {text}
    </button>
  );
};

export default forwardRef(Button);
