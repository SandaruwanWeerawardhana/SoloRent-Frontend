import React,{useState} from "react";
import "./massage.css"

function Massage() {

  
// Main WhatsApp component
const WhatsAppUI = () => {
  const [activeChat, setActiveChat] = useState('අයිස්ක්‍රීම් Party');
  const [inputText, setInputText] = useState('');

  // Sample data
  const chats = [
    {
      id: 1,
      name: 'Sandaru One (You)',
      message: 'https://github.com/hello-iftekhsa/...',
      time: '4/2/2025',
      avatar: '/api/placeholder/48/48',
      unread: 0
    },
    {
      id: 2,
      name: 'Tharu',
      message: 'You deleted this message.',
      time: '4:48 PM',
      avatar: '/api/placeholder/48/48',
      unread: 0
    },
    {
      id: 3,
      name: 'අයිස්ක්‍රීම් Party',
      message: 'Sanoj: Sticker',
      time: '4:16 PM',
      avatar: '/api/placeholder/48/48',
      unread: 0,
      isSticker: true
    },
    {
      id: 4,
      name: 'Sanoj',
      message: 'Gihin blmu ijin',
      time: '4:04 PM',
      avatar: '/api/placeholder/48/48',
      unread: 0
    },
    {
      id: 5,
      name: 'Pabasara Jayakodi',
      message: 'Gedra',
      time: '4:04 PM',
      avatar: '/api/placeholder/48/48',
      unread: 0
    },
    {
      id: 6,
      name: 'තමුසිත අරීස 🌱',
      message: '😎 Image',
      time: '3:27 PM',
      avatar: '/api/placeholder/48/48',
      unread: 52,
      isImage: true
    },
    {
      id: 7,
      name: 'Seniru (ICET)',
      message: 'Sticker',
      time: '2:42 PM',
      avatar: '/api/placeholder/48/48',
      unread: 0,
      isSticker: true
    },
    {
      id: 8,
      name: '🌺රජයේ සත්ය සන්නිවේ G(10)...',
      message: '+94 76 686 8394 added +966 54...',
      time: '3:02 PM',
      avatar: '/api/placeholder/48/48',
      unread: 37
    },
    {
      id: 9,
      name: 'ICET - Awurudu 2025 ✨ - Stu...',
      message: '~Dulina Dulaj: Atta',
      time: '2:08 PM',
      avatar: '/api/placeholder/48/48',
      unread: 3
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Kalhara (ASM)',
      content: 'ගහමු 😁',
      time: '10:38 AM',
      isOutgoing: false,
      highlight: {
        text: 'Kanishka Dilshan\nGahmu අන්ද'
      }
    },
    {
      id: 2,
      sender: 'Kanishka Dilshan',
      image: '/api/placeholder/300/300',
      time: '11:30 AM',
      isOutgoing: false
    },
    {
      id: 3,
      sender: 'Sanoj',
      image: '/api/placeholder/300/300',
      time: '4:16 PM',
      isOutgoing: false
    }
  ];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Send message logic would go here
      setInputText('');
    }
  };

  return (
    <>
        <div className="container">
      <Sidebar chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
      <MainChat 
        activeChat={activeChat} 
        messages={messages} 
        inputText={inputText} 
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
    </>
  );
};
}
const Sidebar = ({ chats, activeChat, setActiveChat }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Chats</div>
        <div className="sidebar-actions">
          <span className="action-icon">✏️</span>
          <span className="action-icon">≡</span>
        </div>
      </div>
      
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search or start a new chat" />
      </div>
      
      <div className="chat-list">
        {chats.map(chat => (
          <ChatItem 
            key={chat.id}
            chat={chat}
            isActive={chat.name === activeChat}
            onClick={() => setActiveChat(chat.name)}
          />
        ))}
      </div>
    </div>
  );
};

// Chat Item Component
const ChatItem = ({ chat, isActive, onClick }) => {
  return (
    <div className={`chat-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img src={chat.avatar} alt="Profile" className="avatar" />
      <div className="chat-info">
        <div className="chat-name">{chat.name}</div>
        <div className="chat-message">
          {chat.isSticker && <span className="sticker-indicator"><span className="sticker-icon">📋</span> </span>}
          {chat.isImage && <span className="sticker-indicator"><span className="sticker-icon">🖼️</span> </span>}
          {chat.message}
        </div>
      </div>
      <div className="chat-meta">
        <div className="chat-time">{chat.time}</div>
        {chat.unread > 0 && <div className="chat-badge">{chat.unread}</div>}
      </div>
    </div>
  );
};

// Main Chat Component
const MainChat = ({ activeChat, messages, inputText, handleInputChange, handleSendMessage }) => {
  return (
    <div className="main-chat">
      <ChatHeader activeChat={activeChat} />
      <MessageArea messages={messages} />
      <ChatInputArea 
        inputText={inputText} 
        handleInputChange={handleInputChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

// Chat Header Component
const ChatHeader = ({ activeChat }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <img src="/api/placeholder/40/40" alt="Group" className="avatar" style={{ width: '40px', height: '40px' }} />
        <div>
          <div className="chat-header-title">{activeChat}</div>
          <div className="chat-header-subtitle">Dulara, Kalhara (ASM), Kanishka, Pabasara, Pushpitha, Sanoj, Savindu, You</div>
        </div>
      </div>
      <div className="chat-header-actions">
        <span className="action-icon">🎥</span>
        <span className="action-icon">📞</span>
        <span className="action-icon">🔍</span>
      </div>
    </div>
  );
};

// Message Area Component
const MessageArea = ({ messages }) => {
  return (
    <div className="chat-messages">
      <div className="time-tag">10:38 AM</div>
      
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      
      <div className="time-tag">11:30 AM</div>
    </div>
  );
};

// Message Component
const Message = ({ message }) => {
  return (
    <div className={`message ${message.isOutgoing ? 'message-outgoing' : 'message-incoming'}`}>
      <div className="message-content">
        <div className="message-sender">{message.sender}</div>
        {message.highlight && (
          <div className="highlighted-message">
            {message.highlight.text}
          </div>
        )}
        {message.content && <div>{message.content}</div>}
        {message.image && <img src={message.image} alt="Message" className="message-image" />}
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );
};

// Chat Input Area Component
const ChatInputArea = ({ inputText, handleInputChange, handleSendMessage }) => {
  return (
    <form className="chat-input-area" onSubmit={handleSendMessage}>
      <div className="emoji-button">😊</div>
      <div className="attachment-button">📎</div>
      <input 
        type="text" 
        className="chat-input" 
        placeholder="Type a message"
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit" className="voice-button" style={{ border: 'none', background: 'none', padding: 0 }}>
        🎤
      </button>
    </form>
  );
};

export default Massage;
