import { LegacyRef, forwardRef } from "react";

const Button = (
  {
    color,
    text,
    className,
    onClick,
    children,
  }: {
    color: "bg-primary-03" | "bg-primary-04" | "bg-secondry-05";
    text: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  },
  ref: LegacyRef<HTMLButtonElement>,
) => {
  return (
    <button
      className={`rounded-[5px] ${color} ${className}`}
      ref={ref}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default forwardRef(Button);
