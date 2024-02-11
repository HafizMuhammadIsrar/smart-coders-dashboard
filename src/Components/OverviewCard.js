import React from "react";
import { Icon } from "@iconify/react";

const OverviewCard = ({ key, id, heading, numbers, percentage }) => {
  console.log("keys", id);
  return (
    <div
      className={`p-5 flex rounded-[15px] justify-between ${
        id === 3 ? "bg-[#FEFBF7] " : "bg-[#F6F6FF] "
      }`}
    >
      <div className="left flex flex-col">
        <p>{heading}</p>
        <p className="text-[28px]">{numbers}</p>
      </div>
      <div className="right  justify-center">
        <div className="flex items-start bg-white p-1 rounded">
          <Icon icon="ri:arrow-up-line" width="24" height="24" />
          <span
            className={` ${
              id === 1
                ? "text-[green]"
                : id === 2
                ? " text-[red]"
                : id === 3
                ? "text-[green]"
                : id === 4
                ? "text-[red]"
                : ""
            } `}
          >
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
