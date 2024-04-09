import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
const ChatContainer = () => {
  return (
    <>
      <div className="flex-1 rounded-xl bg-white">
        <ChatHeader />
        <ChatBody />
      </div>
    </>
  );
};

export default ChatContainer;
