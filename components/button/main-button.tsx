import React from "react";
import Button from ".";

const MainBtn = ({
  text,
  color,
  size,
}: {
  text: string;
  color: "primary-01" | "primary-03" | ;
  size: "small" | "large";
}) => {
  let s = null;
  if (size === "small") {
    s = "";
  } else if (size === "large") {
    s = "";
  }
  return <Button className={`bg-${color} `}>{text}</Button>;
};

export default MainBtn;
