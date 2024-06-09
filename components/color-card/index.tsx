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
    <div className="flex flex-col gap-y-[22px]">
      <div
        className={`h-[203px] w-[203px] rounded-[30px] border ${color}`}
      ></div>
      <div>
        <p className="font-jost text-head6 font-semibold">{name}</p>
        <p className="font-open-sans text-head6 font-semibold">{colorName}</p>
      </div>
    </div>
  );
};

export default ColorCard;
