import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "../../public/logo.jpg";

const ChatSpace = (props) => {
  console.log(props.messages);
  const chat = useRef();
  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  const scrollToBottom = () => {
    chat.current.scrollTop = chat.current.scrollHeight;
  };
  return (
    <>
      <div class="flex flex-col h-full overflow-x-auto mb-4" ref={chat}>
        <div class="flex flex-col h-full">
          <h2 className="text-gray-700">
            {props.searching && "Looking for a stranger to chat with..."}
            {props.connected && "You're now chatting with a random stranger."}
            {!props.connected && !props.searching && "Click NEW to find a new stranger to talk to."}
          </h2>
          <div class="grid grid-cols-12 gap-y-2">
            {props.messages.map((msg) => {
              if (msg.sender == null) {
                return (
                  <div
                    key={msg.id.toString()}
                    class="col-start-6 col-end-13 p-3 rounded-lg"
                  >
                    <div class="flex items-center justify-start flex-row-reverse">
                      <div class="flex items-center justify-center h-10 w-10 rounded-full text-gray-50 bg-indigo-500 flex-shrink-0">
                        YOU
                      </div>
                      <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>{msg.content}</div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={msg.id.toString()}
                    class="col-start-1 col-end-8 p-3 rounded-lg"
                  >
                    <div class="flex flex-row items-center">
                      <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        <img src="/logo.jpg" className="rounded-full" />
                      </div>
                      <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>{msg.content}</div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSpace;
