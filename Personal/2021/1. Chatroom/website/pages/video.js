import CamSpace from "../components/chatroom/CamSpace";
import ChatSpace from "../components/chatroom/ChatSpace";
import TextBoxSpace from "../components/chatroom/TextBoxSpace";

const Chat = () => {
  return (
    <div class="grid grid-rows-6 grid-flow-col bottom-0 top-16 absolute w-full p-2 gap-2">
      <div class="row-span-6 col-span-1 bg-gray-100 rounded-md border-2 border-gray-300">
        <CamSpace />
      </div>
      <div class="col-span-2 row-span-5 bg-gray-100 rounded-md border-2 border-gray-300 p-2">
        <ChatSpace />
      </div>
      <div class="row-span-1 col-span-2 bg-gray-100  rounded-md border-2 border-gray-300">
        <TextBoxSpace />
      </div>
    </div>
  );
};

export default Chat;
