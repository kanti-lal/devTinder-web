import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { createSocketConnection } from "../utils/socket";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);
  const userId = user?._id;

  const fetchMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    // as soon as the page loaded, the socket connection is made and joinChat event is emitted
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      console.log(firstName + " : " + text);
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  // Send message
  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto mt-8 bg-base-200 dark:bg-base-300 rounded-lg shadow-lg border border-base-300 dark:border-base-100">
      {/* Title with user name */}
      <div className="p-4 border-b border-base-300 dark:border-base-100 text-xl font-bold bg-base-100 dark:bg-base-200 rounded-t-lg flex items-center gap-2">
        <span className="text-base-content dark:text-base-content">
          Chat with{" "}
          {messages.find((m) => m.senderId !== user?.id)?.senderName ||
            targetUserId}
        </span>
      </div>
      {/* Chat window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-base-200 dark:bg-base-300">
        {messages.map((msg, idx) => {
          console.log("🚀 ~ {messages.map ~ msg:", msg);
          const isMe = user.firstName === msg.firstName;
          console.log("🚀 ~ {messages.map ~ isMe:", isMe);
          return (
            <div
              key={idx}
              className={`chat ${isMe ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-header">
                {`${msg?.firstName} ${msg?.lastName}`}
                <time className="text-xs opacity-50">2 hors ago</time>
              </div>
              <div className="chat-bubble bg-gray-500">{msg.text}</div>
              <div className="chat-footer opacity-50">
                {isMe ? "Seen" : "Delivered"}
              </div>
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>
      {/* Input box */}
      <div className="p-4 border-t border-base-300 dark:border-base-100 bg-base-100 dark:bg-base-200 rounded-b-lg flex gap-2">
        <input
          className="input input-bordered flex-1 bg-base-200 dark:bg-base-300 text-base-content dark:text-base-content"
          placeholder="Type your message…"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
