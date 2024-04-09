import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomersAnalysisCard = () => {
  return (
    <>
      <div className="flex h-[145px] min-w-[321px] flex-1 flex-col justify-between rounded-xl bg-white px-[15px] py-[11px]">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-[#FFCC9129] bg-opacity-20">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99291 11.6723C10.0671 11.6723 12.6946 12.1382 12.6946 13.999C12.6946 15.8598 10.0846 16.339 6.99291 16.339C3.91791 16.339 1.29125 15.8773 1.29125 14.0157C1.29125 12.154 3.90041 11.6723 6.99291 11.6723Z"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99291 9.01649C4.97458 9.01649 3.33791 7.38066 3.33791 5.36233C3.33791 3.34399 4.97458 1.70816 6.99291 1.70816C9.01041 1.70816 10.6471 3.34399 10.6471 5.36233C10.6546 7.37316 9.02958 9.00899 7.01875 9.01649H6.99291Z"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7359 8.06799C14.0701 7.88049 15.0976 6.73549 15.1001 5.34966C15.1001 3.98382 14.1042 2.85049 12.7984 2.63632"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4962 11.2768C15.7887 11.4693 16.6912 11.9227 16.6912 12.856C16.6912 13.4985 16.2662 13.9152 15.5795 14.176"
                stroke="#1C1D22"
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
            <p className="text-sm text-[#8B8D97]">Customers</p>
            <span className="flex items-center gap-1">
              <h5 className="font-medium text-[#45464E]">#1,250</h5>
              <small className="text-[12px] text-[#519C66]">+15.80%</small>
            </span>
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#8B8D97]">Active</p>
            <span className="flex items-center gap-1">
              <h5 className="font-medium text-[#45464E]">1,180</h5>
              <small className="text-[12px] text-[#519C66]">85%</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersAnalysisCard;
