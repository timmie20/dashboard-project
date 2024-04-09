import React from "react";
import { FaChevronDown } from "react-icons/fa";
import SummaryBarChart from "./SummaryBarChart";

const SummaryAnalysis = () => {
  return (
    <>
      <div className="h-full rounded-[12px] bg-white px-[20px] py-[15px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[21px]">
            <p className="font-medium text-[#45464E]">Summary</p>
            <div className="flex items-center gap-3 rounded-lg bg-[#5570F114] bg-opacity-10 px-3 py-1 text-sm text-[#5570F1]">
              Sales <FaChevronDown size={12} />
            </div>
          </div>
          <span className="flex items-center gap-[7px] text-[12px] font-normal text-[#1C1D22]">
            Last 7 Days
            <FaChevronDown />
          </span>
        </div>
        <SummaryBarChart />
      </div>
    </>
  );
};

export default SummaryAnalysis;
