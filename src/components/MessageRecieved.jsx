import React from "react";

const MessageRecieved = ({ message }) => {
  return (
    <>
      <div className="mt-2 rounded-t-[16px] rounded-br-[16px] bg-primary-clr-indigo p-4 text-base text-white">
        {message}
      </div>
      <small className="mt-1">12:55am</small>
    </>
  );
};

export default MessageRecieved;
