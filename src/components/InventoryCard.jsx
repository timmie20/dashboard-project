import React from "react";

const InventoryCard = () => {
  return (
    <>
      <div className="flex h-[159px] min-w-[321px] flex-col justify-between rounded-xl bg-primary-clr-indigo px-[15px] py-[11px]">
        <div className="flex size-9 items-center justify-center rounded-lg bg-white bg-opacity-15">
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
              d="M16.8491 12.1101C16.8491 15.0917 15.0916 16.8492 12.1099 16.8492H5.62492C2.63575 16.8492 0.874916 15.0917 0.874916 12.1101V5.61008C0.874916 2.63258 1.96992 0.875076 4.95242 0.875076H6.61908C7.21742 0.87591 7.78075 1.15674 8.13908 1.63591L8.89992 2.64758C9.25992 3.12591 9.82325 3.40758 10.4216 3.40841H12.7799C15.7691 3.40841 16.8724 4.93008 16.8724 7.97258L16.8491 12.1101Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-8 text-white">
          <span className="flex flex-col gap-2">
            <p className="text-sm">All Products</p>
            <h5 className="font-medium">#45</h5>
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Active</p>
            <span className="flex items-center gap-1">
              <h5 className="font-medium">32</h5>
              <small className="text-[12px] text-[#DBDEEE]">+24%</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
