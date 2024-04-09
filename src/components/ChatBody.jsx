import React from "react";
import phone from "../assets/images/Rectangle 3 (1).png";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";

const ChatBody = () => {
  return (
    <>
      <div className="px-5 py-3">
        <div className="flex justify-center">
          <p className="rounded-lg bg-[#F4F5FA] px-3 py-3 text-sm">
            12 August 2022
          </p>
        </div>
        <div className="flex w-[43%] flex-col ">
          <div className="flex w-full gap-2 border-b-[1px] pb-3">
            <img src={phone} alt="" />
            <div className="flex w-full flex-col justify-between">
              <small className="text-[#45464E]">iPhone 13</small>
              <div className="flex items-center justify-between">
                <small className="font-medium text-[#33343A]">
                  ₦730,000.00
                </small>
                <small>
                  <span className="font-medium text-primary-clr-indigo">
                    12
                  </span>{" "}
                  in stock
                </small>
              </div>
            </div>
          </div>
          <MessageRecieved message="Hello, I want to make enquiries about your product" />
        </div>
        <div className="flex flex-col items-end gap-3">
          <MessageSent message="Hello Janet, thank you for reaching out" />
          <MessageSent message="What do you need to know?" />
        </div>

        <div className="w-[43%] ">
          <MessageRecieved message="I want to know if the price is negotiable, i need about 2 Units" />
        </div>

        <div className="flex w-full items-center gap-3 rounded-xl border-[1px] border-[#E1E2E9] px-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#FFF2E2]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="#1C1D22"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="#1C1D22"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex w-full items-center">
            <input type="text" className="w-full" placeholder="Your message" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#5570F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                stroke="#5570F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 9H15.01"
                stroke="#5570F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9H9.01"
                stroke="#5570F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-md bg-[#FFF2E2] px-4 py-2 text-base hover:bg-opacity-50">
            send
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8563 2.14857C17.4396 1.72274 16.8229 1.56524 16.2479 1.73191L2.8396 5.60607C2.23293 5.77441 1.80293 6.25524 1.6871 6.86524C1.56876 7.48691 1.9821 8.27691 2.5221 8.60691L6.7146 11.1669C7.1446 11.4302 7.6996 11.3644 8.05543 11.0077L12.8563 6.20691C13.0979 5.95607 13.4979 5.95607 13.7396 6.20691C13.9813 6.44774 13.9813 6.84024 13.7396 7.09024L8.93043 11.8911C8.57377 12.2477 8.5071 12.8011 8.7696 13.2319L11.3313 17.4402C11.6313 17.9394 12.1479 18.2236 12.7146 18.2236C12.7813 18.2236 12.8563 18.2236 12.9229 18.2144C13.5729 18.1319 14.0896 17.6894 14.2813 17.0644L18.2563 3.75691C18.4313 3.19024 18.2729 2.57357 17.8563 2.14857Z"
                fill="#1C1D22"
              />
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.50882 14.0065C2.34882 14.0065 2.18882 13.9457 2.06716 13.8232C1.82299 13.579 1.82299 13.184 2.06716 12.9398L3.20466 11.8015C3.44883 11.5582 3.84466 11.5582 4.08883 11.8015C4.33216 12.0457 4.33216 12.4415 4.08883 12.6857L2.95049 13.8232C2.82882 13.9457 2.66882 14.0065 2.50882 14.0065ZM5.64316 15.0002C5.48316 15.0002 5.32316 14.9393 5.20149 14.8168C4.95733 14.5727 4.95733 14.1777 5.20149 13.9335L6.33899 12.7952C6.58316 12.5518 6.97899 12.5518 7.22316 12.7952C7.46649 13.0393 7.46649 13.4352 7.22316 13.6793L6.08483 14.8168C5.96316 14.9393 5.80316 15.0002 5.64316 15.0002ZM5.85458 17.9735C5.97624 18.096 6.13624 18.1568 6.29624 18.1568C6.45624 18.1568 6.61624 18.096 6.73791 17.9735L7.87624 16.836C8.11958 16.5918 8.11958 16.196 7.87624 15.9518C7.63207 15.7085 7.23624 15.7085 6.99207 15.9518L5.85458 17.0902C5.61041 17.3343 5.61041 17.7293 5.85458 17.9735Z"
                fill="#1C1D22"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
