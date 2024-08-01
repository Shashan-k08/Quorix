import React, { useState } from "react";
import "./ChatBox.css";
import { BiSolidSend } from "react-icons/bi";
import { RiScissorsLine } from "react-icons/ri";
import { TiPin } from "react-icons/ti";
import { IoIosTimer } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      message:
        " Tell me something about the Big Bang so that I can explain it to my 5-year-old child",
      sender: "Chat Bot",
    },
    {
      message: " Please provide me with 1O gift ideas for my friend's birthday",
      sender: "Chat Bot",
    },
    {
      message:
        " Generate five catchy titles for my writing about the use case of ChatGPT",
      sender: "Chat Bot",
    },
  ]);
  return (
    <div id="chat-box">
      <MainContainer style={{ width: "100%" }}>
        <ChatContainer>
          <MessageList scrollBehavior="smooth" className="question">
            {messages.map((message, i) => {
              console.log(message);
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBox;
