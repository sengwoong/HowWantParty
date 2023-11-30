import React, { useState, useEffect, useContext } from 'react';
import { ModelContext } from '../context/ModelContextProvider';
import { AuthContext } from '../context/authContext';

function Chating() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const { openMiniChatModel, toggleMiniChatModel } = useContext(ModelContext);
  const { currentUser, logout } = useContext(AuthContext);
  let isUser = true;

  const isMe = currentUser?.user.email
  // console.log(currentUser)
  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = { text: inputText, isUser, id: Date.now() };
    if (messages === null) {
      setMessages([newMessage]);
    } else {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }

    setInputText('');
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const getMessageStyle = (isUser) => {
    const baseMessageStyle = 'p-2 mb-2 rounded shadow-md';
    const baseProfileStyle = 'w-8 h-8 bg-black rounded flex-shrink-0 align-middle self-center shadow-md';
    const baseChatStyle = 'flex';
    return isUser
      ? {
          message: `${baseMessageStyle} bg-blue-500 text-white text-right w-fit-content`,
          profile: `${baseProfileStyle} ml-2`,
          chat: `${baseChatStyle} justify-end`,
        }
      : {
          message: `${baseMessageStyle} bg-gray-200 text-left w-fit-content`,
          profile: `${baseProfileStyle} mr-2`,
          chat: `${baseChatStyle} justify-start`,
        };
  };

  const displayUser = (isUser) => {
    return isUser
      ? { falseProfile: 0, content: 1, lastProfile: 1 }
      : { falseProfile: 1, content: 1, lastProfile: 0 };
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
        onClick={toggleMiniChatModel}
      >
        <span className="text-white">Open Chat</span>
      </div>
      {openMiniChatModel && (
        <div className="fixed bottom-4 right-4 w-96 border border-gray-300 rounded p-4 bg-gray-500">
          <div
            className="fixed top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleMiniChatModel}
          >
            <span className="text-white">Close Chat</span>
          </div>
          <div className="h-52 overflow-y-scroll">
            {messages.map((message) => (
              <div key={message.id} className={getMessageStyle(message.isUser).chat}>
                {displayUser(message.isUser).falseProfile === 1 && (
                  <div className={getMessageStyle(message.isUser).profile}>{messages}</div>
                )}
                {displayUser(message.isUser).content === 1 && (
                  <div
                    className={getMessageStyle(message.isUser).message}
                    style={{ borderColor: message.isAdmin ? 'gold' : 'inherit' }}
                  >
                    {message.text}
                  </div>
                )}
                {displayUser(message.isUser).lastProfile === 1 && (
                  <div className={getMessageStyle(message.isUser).profile}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 border rounded-l p-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white rounded-r p-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chating;
