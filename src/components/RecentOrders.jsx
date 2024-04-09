import React from "react";
import phoneGold from "../assets/images/Rectangle 3 (1).png";
import phoneBlack from "../assets/images/Rectangle 3 (2).png";

const RecentOrders = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-scroll rounded-[12px] bg-white px-5 md:min-w-[426px]">
        <div className="sticky top-0 w-full bg-white py-3 font-medium text-[#45464E]">
          Recent Orders
        </div>
        <div className="">
          {Array(14)
            .fill(null)
            .map((_, index) => (
              <div
                className="flex items-center justify-center gap-[10px] border-b-[1px] border-[#F1F3F9] py-3 text-sm"
                key={index + 1}
              >
                {index % 2 ? <img src={phoneBlack} /> : <img src={phoneGold} />}
                <div className="flex w-full items-center justify-between">
                  <span className="space-y-2">
                    <small className="text-sm">iPhone 13</small>
                    <p className="text-[#33343A]">₦730,000.00 x 1</p>
                  </span>
                  <div className="flex flex-col items-end space-y-2 px-[15px] py-1">
                    <small className="text-[#A6A8B1]">12 Sept 2022</small>
                    <span
                      className={`rounded-lg px-[15px] py-[2px] text-[12px] ${index % 2 ? "bg-[#F57E771F] text-[#CC5F5F]" : "bg-[#32936F1F] text-green-700"}`}
                    >
                      {index % 2 ? "Pending" : "Completed"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
