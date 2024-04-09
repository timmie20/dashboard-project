import React from "react";
import { FaChevronDown } from "react-icons/fa";

const AbandonedCart = () => {
  return (
    <>
      <div className="flex h-[159px] min-w-[321px] flex-col justify-between rounded-xl bg-white px-[15px] py-[11px]">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFCC9129] bg-opacity-20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5055_150)">
                <path
                  d="M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0398 17.1269 16.6667 16.6667 16.6667C16.2064 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6667 18.3333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 18.3333C7.96024 18.3333 8.33333 17.9602 8.33333 17.5C8.33333 17.0398 7.96024 16.6667 7.5 16.6667C7.03976 16.6667 6.66667 17.0398 6.66667 17.5C6.66667 17.9602 7.03976 18.3333 7.5 18.3333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.833332 0.833332H4.16667L6.4 11.9917C6.4762 12.3753 6.68492 12.72 6.98962 12.9652C7.29432 13.2105 7.67558 13.3408 8.06666 13.3333H16.1667C16.5577 13.3408 16.939 13.2105 17.2437 12.9652C17.5484 12.72 17.7571 12.3753 17.8333 11.9917L19.1667 5H5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5055_150">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="flex items-center gap-[7px] text-[12px] font-normal text-[#BEC0CA]">
            This week
            <FaChevronDown />
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="flex flex-col gap-2">
            <p className="text-sm text-[#CC5F5F]">Abandoned Cart</p>
            <span className="flex items-center gap-1">
              <h5 className="font-medium text-[#45464E]">20%</h5>
              <small className="text-[12px] text-[#519C66]">+0.00%</small>
            </span>
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Customers</p>
            <h5 className="font-medium text-[#45464E]">30</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbandonedCart;
