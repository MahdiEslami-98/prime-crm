import React from "react";

const ColorCard = ({
  name,
  colorName,
  color,
}: {
  name: string;
  colorName: string;
  color: string;
}) => {
  return (
    <>
      <div className={`w-[203px] h-[203px] ${color}`}></div>
      <p className="pt-5.5">{name}</p>
      <p className="pt-1">{colorName}</p>
    </>
  );
};

export default ColorCard;
