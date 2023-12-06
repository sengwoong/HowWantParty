import React, { useState, useEffect, useContext , useRef} from 'react';
import { AuthContext } from '../context/AuthContext';

import useGptChat from '../hooks/Gpt/useGptChat';

function Chating({id}) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const chatContainerRef = useRef(null);
  const { gptChatData, mutatePostGptChat,refetch } = useGptChat({id:"ac224"});

  useEffect(() => {
    if (gptChatData) {
      const flattenedMessages = gptChatData.conversation_list.map((entry) => [
        { id: entry.id, text: entry.User, response: entry.response, type: 'prompt', isUser: true },
        { id: entry.id, text: entry.Ai, type: 'response', isUser: false },
      ]);
      // Flatten the array of arrays into a single array
      const sortedMessages = flattenedMessages.flat().sort((a, b) => a.id - b.id);
      setMessages([...sortedMessages]);
      console.log("messages");
      console.log(messages);
    }
  }, [gptChatData]);

  useEffect(() => {
    // Scroll to the bottom of the chat window
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = async() => {
    if (inputText.trim() === '') {
      return;
    }

    await mutatePostGptChat({ id: "as", Prompt: inputText });
    refetch()

    setInputText('');
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <div className="m-auto w-95vw h-screen mx-auto border border-gray-300 rounded p-2 bg-gray-500">
        <div className="h-[75vh] w-[95vh] overflow-y-scroll mx-auto" ref={chatContainerRef}>
          {messages.map((message) => (
            <div
              key={`${message.id}-${message.type}`}
              className={message.type === 'response' ? 'flex justify-start' : 'flex justify-end'}
              onClick={() => handleClick(message.id, message.text, message.response, message.type)}
            >
              <div
                className={
                  message.isUser
                    ? 'mr-0 p-2 mb-2 rounded shadow-md bg-blue-500 text-white text-right w-fit-content'
                    : 'p-2 mb-4 rounded shadow-md bg-gray-200 text-left w-fit-content'
                }
                style={{ borderColor: message.isAdmin ? 'gold' : 'inherit', maxWidth: '75%' }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[92vw] h-[50px] bottom-0  flex m-auto">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="flex-1 border rounded-l p-2"
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-r p-2">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chating;
