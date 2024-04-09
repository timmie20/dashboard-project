import React from "react";
import { FaChevronDown } from "react-icons/fa";

const OrdersAnalysisCard = () => {
  return (
    <>
      <div className="flex h-[145px] w-full flex-1 flex-col justify-between rounded-xl bg-white px-[15px] py-[11px] md:min-w-[426px]">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFCC9129] bg-opacity-20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7614 17.9167H6.80492C4.24962 17.9167 2.28928 16.9937 2.84611 13.279L3.49447 8.24466C3.83772 6.39111 5.02002 5.68173 6.0574 5.68173H14.5395C15.5921 5.68173 16.7058 6.44451 17.1024 8.24466L17.7508 13.279C18.2237 16.5742 16.3167 17.9167 13.7614 17.9167Z"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.8759 5.49865C13.8759 3.51026 12.264 1.89835 10.2756 1.89835V1.89835C9.31806 1.89429 8.39839 2.27182 7.7199 2.94744C7.04141 3.62307 6.66 4.54114 6.66 5.49865H6.66"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.747 9.25151H12.7088"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.88807 9.25151H7.84993"
                stroke="#130F26"
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
            <p className="text-sm text-[#8B8D97]">All Orders</p>
            <h5 className="font-medium text-[#45464E]">450</h5>
          </span>
          <span className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Pending</p>
            <h5 className="font-medium text-[#45464E]">5</h5>
          </span>
          <span className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Completed</p>
            <h5 className="font-medium text-[#45464E]">445</h5>
          </span>
        </div>
      </div>
    </>
  );
};

export default OrdersAnalysisCard;
