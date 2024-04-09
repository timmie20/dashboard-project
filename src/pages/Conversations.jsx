import React, { useContext } from "react";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import { AppContext } from "../context/AppContext";

const Conversations = () => {
  const { contactListData } = useContext(AppContext);
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#45464E] md:text-base">
            Conversations with Customers
          </span>
          <p className="rounded-xl bg-primary-clr-indigo px-5 py-2 text-sm text-white">
            New Message
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px] lg:flex-nowrap">
          <ContactList contactListData={contactListData} />
          <ChatContainer />
        </div>
      </div>
    </>
  );
};

export default Conversations;
