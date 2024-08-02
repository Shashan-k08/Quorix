import React, { useState } from "react";
import "./ChatBox.css";
import axios from "axios";
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
  const API_KEY =process.env.REACT_APP_API_KEY
  console.log(API_KEY)
  const [isTyping, setTyping] = useState(false);
  const [firstMessage, setFirstMessage] = useState(true);

  const [messages, setMessages] = useState([
    {
      message:
        " Tell me something about the Big Bang so that I can explain it to my 5-year-old child",
      sender: "Chat Bot",
      direction: "incoming", // Message from Chat Bot, should appear on the left
    },
    {
      message: " Please provide me with 1O gift ideas for my friend's birthday",
      sender: "Chat Bot",
      direction: "incoming", // Message from Chat Bot, should appear on the left
    },
    {
      message:
        " Generate five catchy titles for my writing about the use case of ChatGPT",
      sender: "Chat Bot",
      direction: "incoming", // Message from Chat Bot, should appear on the left
    },
  ]);

  const handleSend = async (message) => {
    setTyping(true);
    const newMessage = {
      message,
      direction: "outgoing", // Message from user, should appear on the right
      sender: "user",
    };

    setMessages((prevMessages) => {
      const newMessages = firstMessage
        ? [newMessage]
        : [...prevMessages, newMessage];
      setFirstMessage(false);
      processMessageToChatGPT(message);
      return newMessages;
    });
  };

  async function processMessageToChatGPT(message) {
    console.log(message);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: message }] }],
        },
      });
      const data =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      console.log(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
      console.log(response);
      if (response.status === 200) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: data,
            sender: "Chat Bot",
            direction: "incoming", // Message from Chat Bot, should appear on the left
          },
        ]);
      } else {
        console.error("Error:", data);
        alert("An error occurred: ");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while communicating with the API.");
    } finally {
      setTyping(false);
    }
  }

  return (
    <div id="chat-box">
      <MainContainer style={{ width: "100%", height: "38vh" }}>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? <TypingIndicator content="Chat Bot is typing" /> : null
            }
            className="question"
          >
            {messages.map((message, i) => {
              console.log(message);
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
          ></MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBox;
