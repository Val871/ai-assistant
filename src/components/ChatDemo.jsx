import React, { useState } from "react";

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: "I'm here to help!", sender: "ai" },
      ]);
      setInput("");
    }
  };

  return (
    <section id="demo" className="py-12 md:py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Try Our AI Chat
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="min-h-48 md:min-h-64 max-h-64 md:max-h-80 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 md:py-2 rounded-lg text-sm md:text-base ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-2 md:px-4 md:py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-r-lg hover:bg-blue-600 transition text-sm md:text-base"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
