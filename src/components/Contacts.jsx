import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contacts = ({ contact }) => {
  const { active, handleActiveContact } = useContext(AppContext);

  return (
    <>
      <div
        className={`contact flex h-fit cursor-pointer items-center justify-between border-b-[1px] px-6 py-3 ${active.id === contact.id ? "active" : ""} hover:bg-slate-100`}
        onClick={() => handleActiveContact(contact)}
      >
        <div className="w-fullitems-center flex gap-3">
          <div className="relative">
            <img src={contact.profileImg} alt="contact profile image" />
            <div className="absolute -top-1 left-9 flex size-3 items-center justify-center rounded-full bg-[#F7F7FC] xl:left-6 ">
              <div
                className={`size-2 rounded-full ${contact.isOnline ? "bg-primary-clr-indigo" : "bg-[#C4CAE8]"} `}
              ></div>
            </div>
          </div>

          <div className="flex w-full flex-col justify-between">
            <p>{contact.name}</p>
            <p className="w-[60%] truncate text-[12px] text-[#8B8D97]">
              {contact.text}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            {contact.hasRead === false && (
              <small className="rounded-lg bg-[#FEF5EA] px-[7px] py-[2px] text-[12px]">
                New
              </small>
            )}
          </div>
          <span className="flex items-center gap-2">
            <small className="text-[12px]">{contact.timeStamp}</small>
          </span>
        </div>
      </div>
    </>
  );
};

export default Contacts;
