import React from "react";
import { X } from "lucide-react";

function Chatwindow({onClose}) {
  return (
    <>
      <div className="w-80 h-96 bg-white rounded-xl shadow-2xl p-4 absolute bottom-16 right-0 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">👋 Hi! How can we help?</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-gray-200 p-2 rounded">I have a question</button>
          <button className="bg-gray-200 p-2 rounded">Tell me more</button>
        </div>
        <input
          type="text"
          placeholder="Type here and press enter..."
          className="mt-4 p-2 border rounded w-full"
        />
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
      </div>
    </>
  );
}

export default Chatwindow;
