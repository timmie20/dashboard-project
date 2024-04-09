import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import profile_avatar from "../assets/icons/profile 1.png";
import { AppContext } from "../context/AppContext";
import { IoMenu } from "react-icons/io5";
import NavMobileView from "./NavMobileView";

const Header = () => {
  const { pathname } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative h-fit bg-white">
        <div className="flex items-center justify-between px-[21px] py-[14px]">
          {/* side bar content for mobile view*/}

          <div className="block lg:hidden">
            {!isOpen ? (
              <IoMenu size={30} onClick={() => setIsOpen(true)} />
            ) : (
              <NavMobileView isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </div>

          <h5 className="text-[18px] font-medium text-[#45464E] md:text-[20px]">
            {pathname === "/dashboard" ? "Dashboard" : "Conversations"}
          </h5>
          <div className="flex items-center gap-[20px]">
            <span className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#FEF5EA] px-3 py-[5px] md:gap-3">
              <p className="text-sm">Nanny's shop</p>
              <FaChevronDown size={16} />
            </span>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M14.4746 8.70444C13.8659 7.99357 13.5892 7.37753 13.5892 6.33095V5.9751C13.5892 4.61127 13.2754 3.73254 12.5929 2.85382C11.5411 1.48915 9.77034 0.666656 8.03688 0.666656H7.96317C6.26615 0.666656 4.55091 1.45138 3.48085 2.76066C2.76113 3.65701 2.41079 4.5735 2.41079 5.9751V6.33095C2.41079 7.37753 2.15239 7.99357 1.52543 8.70444C1.06411 9.22815 0.916687 9.90125 0.916687 10.6297C0.916687 11.3591 1.15604 12.0498 1.63641 12.6113C2.26337 13.2844 3.14873 13.7141 4.05315 13.7888C5.36256 13.9382 6.67197 13.9944 8.00043 13.9944C9.32807 13.9944 10.6375 13.9004 11.9477 13.7888C12.8513 13.7141 13.7367 13.2844 14.3636 12.6113C14.8432 12.0498 15.0834 11.3591 15.0834 10.6297C15.0834 9.90125 14.9359 9.22815 14.4746 8.70444Z"
                fill="#5570F1"
              />
              <path
                opacity="0.4"
                d="M9.6739 15.0236C9.25731 14.9347 6.71882 14.9347 6.30223 15.0236C5.9461 15.1059 5.56097 15.2972 5.56097 15.7169C5.58168 16.1172 5.81607 16.4706 6.14073 16.6946L6.1399 16.6955C6.5598 17.0228 7.05259 17.2309 7.56857 17.3056C7.84354 17.3434 8.12348 17.3417 8.40839 17.3056C8.92354 17.2309 9.41633 17.0228 9.83623 16.6955L9.83541 16.6946C10.1601 16.4706 10.3945 16.1172 10.4152 15.7169C10.4152 15.2972 10.03 15.1059 9.6739 15.0236Z"
                fill="#5570F1"
              />
            </svg>
            <img src={profile_avatar} alt="profile image" />
          </div>
        </div>
        <div className="cursor-pointer border-t px-[21px] py-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.09581 12.8548V10.8102C5.0958 10.2921 5.5171 9.87115 6.03895 9.86789H7.95506C8.47924 9.86789 8.90417 10.2898 8.90417 10.8102V12.8488C8.90416 13.2982 9.26934 13.6634 9.72195 13.6667H11.0292C11.6397 13.6682 12.2258 13.4285 12.6581 13.0005C13.0904 12.5724 13.3333 11.9912 13.3333 11.385V5.57724C13.3333 5.0876 13.1147 4.62315 12.7364 4.30901L8.29531 0.782856C7.519 0.166092 6.41024 0.186016 5.65692 0.830266L1.31133 4.30901C0.91515 4.61389 0.678358 5.07972 0.666656 5.57724V11.3791C0.666656 12.6425 1.69824 13.6667 2.97077 13.6667H4.24818C4.4661 13.6682 4.67565 13.5834 4.8303 13.431C4.98496 13.2785 5.07194 13.0711 5.07193 12.8548H5.09581Z"
              fill="#5570F1"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
