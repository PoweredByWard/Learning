import { useEffect, useRef, useState } from "react";
import CamSpace from "../components/chatroom/CamSpace";
import ChatSpace from "../components/chatroom/ChatSpace";
import TextBoxSpace from "../components/chatroom/TextBoxSpace";
import webSocket from "../components/websocket/websocket";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const socketCon = webSocket();

  const [socket, setSocket] = useState();

  const input = useRef();

  useEffect(() => {
    if (socketCon) {
      socketCon.on("connect", () => {
        console.log("SOCKET CONNECTED!", socketCon.id);
        setSocket(socketCon);
      });
      socketCon.on("disconnect", () => {
        console.log("SOCKET Disconnected!", socketCon.id);
        setSocket(socketCon);
      });
      socketCon.on("message", (message) => {
        console.log("msg:" + message);
        setMessages([...messages, message]);
      });
    }
  }, [socketCon]);
  String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(
      new RegExp(
        str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
        ignore ? "gi" : "g"
      ),
      typeof str2 == "string" ? str2.replace(/\$/g, "$$$$") : str2
    );
  };

  function sendMessage() {
    let content = input.current.value;
    if (socket?.connected && content.replaceAll(" ", "") != "") {
      socket.emit("message", { sender: "stranger", message: content });
      setMessages([...messages, { sender: null, message: content }]);
      input.current.value = "";
      return true;
    }
    return false;
  }

  return (
    <div class="flex flex-col flex-auto absolute bottom-0 top-20 flex-grow m-2 right-0 left-0 p-4">
      <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <ChatSpace messages={messages} />
        <TextBoxSpace sendMessage={sendMessage}>
          {console.log(socket)}
          <input
            type="text"
            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 pr-10 h-10"
            disabled={!socket?.connected}
            ref={input}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                sendMessage();
              }
            }}
          />
        </TextBoxSpace>
      </div>
    </div>
  );
};

export default Chat;
