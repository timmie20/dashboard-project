import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SalesCard = () => {
  return (
    <>
      <div className="flex h-[145px] min-w-[321px] flex-1 flex-col justify-between rounded-xl bg-white px-[15px] py-[11px]">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary-clr-indigo bg-opacity-20">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3982 10.5743C13.9605 10.5743 14.4324 11.0384 14.3465 11.5936C13.8421 14.8603 11.0456 17.2857 7.6728 17.2857C3.94122 17.2857 0.916656 14.2612 0.916656 10.5305C0.916656 7.45677 3.25174 4.59362 5.88069 3.94625C6.4456 3.80677 7.02455 4.20414 7.02455 4.78572C7.02455 8.72607 7.15701 9.74537 7.90525 10.2998C8.6535 10.8541 9.53332 10.5743 13.3982 10.5743Z"
                stroke="#5570F1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0771 7.293C17.1218 4.76142 14.0122 0.680718 10.2227 0.750893C9.92797 0.756156 9.692 1.00177 9.67885 1.29563C9.58323 3.37721 9.71218 6.07458 9.78411 7.29738C9.80604 7.67809 10.1052 7.97721 10.485 7.99914C11.742 8.07107 14.5376 8.16931 16.5894 7.85879C16.8683 7.81668 17.0727 7.57458 17.0771 7.293Z"
                stroke="#5570F1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="flex items-center gap-[7px] text-[12px] font-normal text-[#BEC0CA]">
            This week
            <FaChevronDown />
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Sales</p>
            <h5 className="font-medium text-[#45464E]">#4,000,000.00</h5>
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Volume</p>
            <span className="flex items-center gap-1">
              <h5 className="font-medium text-[#45464E]">450</h5>
              <small className="text-[12px] text-[#519C66]">+20.00%</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesCard;
