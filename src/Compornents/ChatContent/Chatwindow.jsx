import React, { useEffect, useState, useRef } from "react";
import { X, Send, Loader2Icon } from "lucide-react";
import MessageBubble from "./MessageBubble";

const suggestedQuestions = [
  "What services do you offer?",
  "How can I contact support?",
  "What are your business hours?",
  "Where are location?",
];
function ChatWindow({ onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      text: "Hello! How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    try {
    
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const botResponse = {
        id: `bot-${Date.now()}`,
        text: getBotResponse(text),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      
      console.error("Failed to get response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          text: "Sorry, I couldn't process your request. Please try again.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }

    
  // try {
  //   const response = await fetch("http://localhost:8080/api/chat", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ text }),  
  //   });

  //   if (!response.ok) {
  //     throw new Error("API error");
  //   }

  //   const data = await response.json();

  //   const geminiText =
  //     data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  //     "Sorry, I didn't understand that.";

  //   const botResponse = {
  //     id: `bot-${Date.now()}`,
  //     text: geminiText,
  //     isUser: false,
  //     timestamp: new Date(),
  //   };

  //   setMessages((prev) => [...prev, botResponse]);
  // } catch (error) {
  //   console.error("Failed to get response:", error);
  //   setMessages((prev) => [
  //     ...prev,
  //     {
  //       id: `error-${Date.now()}`,
  //       text: "Sorry, I couldn't process your request. Please try again.",
  //       isUser: false,
  //       timestamp: new Date(),
  //     },
  //   ]);
  // } finally {
  //   setIsLoading(false);
  // }

  };
  const getBotResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi")) {
      return "Hello there! How can I help you today?";
    } else if (lowerQuestion.includes("service")) {
      return "We offer a wide range of services including Rent a Car, Airport Transfer, and Wedding Rental.";
    } else if (
      lowerQuestion.includes("contact") ||
      lowerQuestion.includes("support")
    ) {
      return "You can reach our support team at solorent@premiumcars.com or call us at +94-704679758.";
    } else if (lowerQuestion.includes("hour")) {
      return "Our business hours are Monday to Friday, 9 AM to 5 PM.";
    } else if (lowerQuestion.includes("location")) {
      return "635/01 Aluthgama road,Mathugama";
    }
    return "I'm not sure I understand. Could you rephrase your question?";
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
    }
  };
  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };
  return (
    <div className="w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-2xl absolute bottom-16 right-0 flex flex-col overflow-hidden border border-gray-500 ">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">
            <span className="text-sm">AI</span>
          </div>
          <h2 className="font-semibold text-lg ml-2 ">Chat Assistant</h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
      {/* Messages field*/}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg.text}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-500 p-3 max-w-[80%] bg-gray-100 rounded-lg">
            <Loader2Icon size={16} className="animate-spin" />
            <span className="text-sm">Typing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Suggested questions */}
      {messages.length < 3 && (
        <div className="p-3 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Input area */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message...."
            className="flex-1 bg-transparent outline-none text-gray-800"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={() => handleSendMessage(message)}
            disabled={!message.trim() || isLoading}
            className={`ml-2 p-1 rounded-full ${
              message.trim() && !isLoading
                ? "text-blue-600 hover:bg-blue-100"
                : "text-gray-400"
            }`}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChatWindow;
