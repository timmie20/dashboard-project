import React from "react";
import Contacts from "./Contacts";

const ContactList = ({ contactListData }) => {
  return (
    <>
      <div className="h-full w-full space-y-4 overflow-scroll bg-white py-[22px] lg:h-[84vh] lg:max-w-[410px] lg:rounded-xl">
        <div className="mx-auto flex w-[90%] flex-col gap-[15px]">
          <div className="flex items-center justify-between">
            <h5>Contacts</h5>
            <h5 className="text-[#A6A8B1]">34</h5>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-[1px] border-[#CFD3D4] px-4 py-2">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.80547"
                cy="10.3055"
                r="7.49047"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0153 15.9043L17.9519 18.8333"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              placeholder=" Search"
              className="w-full focus:ring-0"
            />
          </div>
        </div>
        <div>
          {contactListData.map((contact) => (
            <Contacts contact={contact} key={contact.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactList;
