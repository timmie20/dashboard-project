import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChatHeader = () => {
  const { active } = useContext(AppContext);
  return (
    <>
      <div className="flex gap-[10px] border-b-[1px] px-5 py-3">
        <img src={active.profileImg} alt="" />
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-between">
            <p>{active.name}</p>
            <div className="flex items-center gap-2">
              <div
                className={`size-2 rounded-full ${active.isOnline ? "bg-primary-clr-indigo" : "bg-[#C4CAE8]"} `}
              ></div>
              <small className="text-[#B6BFE8]">
                {active.isOnline ? "Online" : "Offline"}
              </small>
              <small className="text-[#8B8D97]">{active.timeStamp}</small>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="flex gap-3">
              <div className="rounded-lg bg-[#FEF5EA] px-[7px] py-[2px] text-[12px]">
                New customer
              </div>
              <p className="text-sm text-primary-clr-indigo">View Profile</p>
            </div>
            <div className="flex items-center gap-2">
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
              <p className="text-sm text-[#A6A8B1]">0 orders</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
