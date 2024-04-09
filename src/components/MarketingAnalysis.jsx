import React from "react";
import { FaChevronDown } from "react-icons/fa";
import MarketingPieChart from "./MarketingPieChart";

const MarketingAnalysis = () => {
  return (
    <>
      <div className="flex h-[337px] min-w-[321px] flex-auto flex-col items-center gap-6 rounded-xl bg-white px-[20px] py-[21px]">
        <div className="flex w-full items-center justify-between">
          <p className="font-medium">Marketing</p>
          <span className="flex items-center gap-[7px] text-[12px] font-normal text-[#BEC0CA]">
            This week
            <FaChevronDown />
          </span>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-primary-clr-indigo"></div>
            <small className="text-[11px] font-normal text-[#A6A8B1]">
              Acquistion
            </small>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[#97A5EB]"></div>
            <small className="text-[11px] font-normal text-[#A6A8B1]">
              Purchase
            </small>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-orange-clr-full"></div>
            <small className="text-[11px] font-normal text-[#A6A8B1]">
              Retention
            </small>
          </div>
        </div>
        <MarketingPieChart />
      </div>
    </>
  );
};

export default MarketingAnalysis;
