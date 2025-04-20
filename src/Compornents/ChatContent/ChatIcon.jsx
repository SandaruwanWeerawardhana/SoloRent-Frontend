import React from 'react'
import { useState } from "react";
import ChatWindow from "./Chatwindow";
import { MessageCircle } from "lucide-react";

export default function ChatIcon() {
    const [isOpen, setIsOpen] = useState(false);

  return (
   <>
   <div className="fixed bottom-5 right-5 z-50 m-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 p-4 rounded-full shadow-lg hover:bg-teal-500 text-white"
      >
        <MessageCircle size={24} />
      </button>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </div>
   </>
  )
}

// Removed duplicate default export