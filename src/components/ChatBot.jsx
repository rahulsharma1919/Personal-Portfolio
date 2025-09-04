import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Send } from "lucide-react";
import getBotReply from "../constants/chatbotlogic";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle send
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = getBotReply(input);

      // Special condition for chatbot intro
      const lower = input.toLowerCase();
      if (
        lower.includes("who are you") ||
        lower.includes("about you") ||
        lower.includes("your name") ||
        lower.includes("chatbot") ||
        lower.includes("zeppy")
      ) {
        botReply =
          "I'm Zeppy 🤖, your friendly AI assistant, created with love by Rahul Sharma 💙";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1200);
  };

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            sender: "bot",
            text: "Hey there 👋 I'm Zeppy! Ask me about Rahul, his skills, experience, or just chat 😄",
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 cursor-pointer"
      >
        <MessageCircle size={22} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-6 w-80 bg-gradient-to-br from-gray-100 via-white to-gray-100 shadow-2xl border border-gray-200 rounded-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "h-96 opacity-100 scale-100" : "h-0 opacity-0 scale-95"
        } overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              alt="robot"
              className="w-6 h-6"
            />
            <div>
              <h2 className="font-semibold text-sm">Zeppy</h2>
              <div className="flex items-center text-xs text-green-300">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-1"></span>
                Active now
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm hover:text-gray-200 cursor-pointer"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-transparent text-[13px]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-2xl text-sm shadow-sm break-words max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none border border-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-600 px-3 py-2 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex space-x-1 w-14 justify-center items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-2 flex items-center border-t bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Write a message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-500 text-black placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
