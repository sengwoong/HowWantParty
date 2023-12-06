import React, { useState, useEffect } from 'react';
import useGptChatOptions from '../../hooks/Gpt/useGptChatOptions';
import { isNumber } from '../../../utils/Validation';
import ShowOption from './ShowOption';

function Chating() {
  const [messages, setMessages] = useState([]);
  const [InputPrompt, setInputPrompt] = useState('');
  const [inputResponse, setInputResponse] = useState('');
  const [inputid, setInputId] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const { gptData, mutatePutGptOption } = useGptChatOptions();

  useEffect(() => {
    if (gptData) {
      const flattenedMessages = gptData.flatMap((entry) => [
        { id: entry.id, text: entry.prompt, response: entry.response, type: 'prompt', isUser: true },
        { id: entry.id, text: entry.response, type: 'response', isUser: false },
      ]);

      const sortedMessages = flattenedMessages.sort((a, b) => a.id - b.id);

      setMessages([...sortedMessages]);
    }
  }, [gptData]);

  const handleSendMessage = () => {
    if (!inputResponse.trim() || !InputPrompt.trim() || !isNumber(inputid)) {
      alert('에러가 발생했습니다.');
      return;
    }

    mutatePutGptOption({ id: inputid, Prompt: InputPrompt, Response: inputResponse });
    setSelectedMessage({});
  };

  const handleClick = (id, text, response, type) => {
    if (type === 'response') {
      return;
    }
    setInputId(id);
    setSelectedMessage({ id, text, response });
    setSelectedType(type);
  };

  return (
    <div className="m-auto h-screen mx-auto border border-gray-300 rounded p-2 bg-gray-500 flex flex-col">
      <div className='flex justify-around'>
        <div className="w-[60%] h-[65vh] overflow-y-scroll">
          {messages.map((message) => (
            <div
              key={`${message.id}-${message.type}`}
              className={`flex ${message.type === 'response' ? 'justify-start' : 'justify-end'}`}
              onClick={() => handleClick(message.id, message.text, message.response, message.type)}
            >
              <div
                className={`p-2 rounded shadow-md w-fit-content mb-4 ${
                  message.isUser ? 'mr-0 bg-blue-500 text-white text-right' : 'bg-gray-200 text-left'
                }`}
                style={{ borderColor: message.isAdmin ? 'gold' : 'inherit' }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <ShowOption selectedMessage={selectedMessage} selectedType={selectedType} />
      </div>

      <div className='mt-2'>
        <div className="w-[100%] h-[50px] bottom-0 my-2 flex m-auto">
          <div className="flex items-center w-full">
            <input
              type="text"
              value={InputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="set Prompt"
              className="flex-1 border rounded-l p-2 ml-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={inputResponse}
              onChange={(e) => setInputResponse(e.target.value)}
              placeholder="Response Prompt"
              className="flex-1 border rounded-l p-2 ml-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white rounded-r p-2 ml-2 hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chating;
