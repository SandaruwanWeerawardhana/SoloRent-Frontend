import React from 'react'


function MessageBubble({ message, isUser, timestamp }) {
  
// Format time as HH:MM
  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  return (
    <div className={`flex mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message}</p>
        <div
          className={`text-[10px] mt-1 ${
            isUser ? 'text-blue-200' : 'text-gray-500'
          }`}
        >
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  )
}
export default MessageBubble