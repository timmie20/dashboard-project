import React from "react";

const MessageSent = ({ message }) => {
  return (
    <>
      <div className="flex w-[43%] flex-col items-end">
        <div className="w-full rounded-t-[16px] rounded-bl-[16px] bg-[#FFEAD1] p-4 text-base text-black">
          {message}
        </div>
        <div className="flex items-center">
          <small className="mt-1">12:55am</small>
          <div className="flex size-4 items-center justify-center rounded-full bg-[#FFEAD1]">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L3.5 6.5L1 4"
                stroke="#1C1D22"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSent;
