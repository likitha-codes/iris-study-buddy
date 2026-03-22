



import React, { useState } from "react";
import Avatar from "./Avatar";

function Aipage() {
  const [messages, setMessages] = useState([
    { text: "Hi, I'm your AI Companion 👋", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      { text: "Thinking... 🤔", sender: "ai" }
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">

      {/* LEFT SIDE → AVATAR */}
      <div className="w-1/3 border-r border-gray-700 flex items-center justify-center">
        <Avatar />
      </div>

      {/* RIGHT SIDE → CHAT */}
      <div className="w-2/3 flex flex-col">

        {/* HEADER */}
        <div className="p-4 border-b border-gray-700 text-lg font-semibold">
          AI Companion
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-600 ml-auto"
                  : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-4 border-t border-gray-700 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Aipage;
