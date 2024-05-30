import { LegacyRef, forwardRef } from "react";

const Button = (
  {
    color,
    text,
    className,
    onClick,
    children,
    type,
  }: {
    color: "bg-primary-03" | "bg-primary-04" | "bg-secondry-05";
    text: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
  },
  ref: LegacyRef<HTMLButtonElement>,
) => {
  return (
    <button
      className={`rounded-[5px] ${color} ${className}`}
      ref={ref}
      onClick={onClick}
      type={type}
    >
      {text}
      {children}
    </button>
  );
};

export default forwardRef(Button);
