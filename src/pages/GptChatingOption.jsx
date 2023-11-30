import React, { useState, useEffect, useContext } from 'react';
import useGptChat from '../hooks/useGptChat';
import { isNumber } from '../../utils/Validation';

function Chating() {
  const [messages, setMessages] = useState([]);
  const [InputPrompt, setInputPrompt] = useState('');
  const [inputResponse, setInputResponse] = useState('');
  const [inputid, setInputId] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const { gptData, mutatePostProducts } = useGptChat();



  useEffect(() => {
    if (gptData) {
      const flattenedMessages = gptData.flatMap((entry) => [
        { id: entry.id, text: entry.prompt, response: entry.response, type: 'prompt', isUser: true },
        { id: entry.id, text: entry.response, type: 'response', isUser: false },
      ]);
  
      // Sort the flattenedMessages based on the id in ascending order
      const sortedMessages = flattenedMessages.sort((a, b) => a.id - b.id);
  
      setMessages(() => [...sortedMessages]);
    }
  }, [gptData]);
  

  const handleSendMessage = () => {
    console.log(inputid ,inputResponse, InputPrompt )
    if (!inputResponse.trim() === '' && !InputPrompt.trim() === '' && !isNumber(inputid) ) {
    // 에러 모달창
    alert("에러가 발생했습니다.");

      return;
    }

    // const newUserMessage = { text: inputText, isUser: true, id: Date.now() };
    // setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    
    mutatePostProducts({ id: inputid, Prompt: InputPrompt, Response: inputResponse });


    // You might want to call the GPT API here to get a response
    // and then add it to the state similar to the GPT messages above.


  };

  const handleClick = (id, text, response, type) => {
    if (type === 'response') {
      // Skip processing for response type
      return;
    }
    setInputId(id)
    setSelectedMessage({ id, text, response });
    setSelectedType(type);
  };
  

  return (
    <div className="m-auto h-screen mx-auto border border-gray-300 rounded p-2 bg-gray-500 flex flex-col">
      {/* 이부분 요약해서뺴기  */}
      <div className='flex justify-around'>
      <div className="w-[60%] h-[65vh] overflow-y-scroll">
      {messages.map((message) => (
  <div
    key={`${message.id}-${message.type}`}
    className={message.type === 'response' ? 'flex justify-start' : 'flex justify-end'}
    onClick={() => handleClick(message.id, message.text, message.response, message.type)}
  >
     <div
              className={message.isUser ? ' mr-0 p-2 mb-2 rounded shadow-md bg-blue-500 text-white text-right w-fit-content' : 'p-2 mb-4 rounded shadow-md bg-gray-200 text-left w-fit-content'}
              style={{ borderColor: message.isAdmin ? 'gold' : 'inherit' }}
            >
              {message.text}
            </div>
    {/* rest of the code */}
  </div>
))}


        {/* 이부분 컴포넌트로빼기
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.type=='response' ?'flex justify-end': `flex   justify-start `}
            onClick={() => handleClick(message.id, message.text, message.response, message.type)}
          >
           
          </div>
        ))} */}
          
      </div>

      <div className="w-[30%] p-2 bg-gray-300 h-[65vh] overflow-y-scroll">
        {selectedMessage && (
          <>
            <p className="my-2" >ID: {selectedMessage.id}</p>
            <p className="my-2" >{selectedType === 'prompt' ? 'Prompt' : 'Response'}: {selectedMessage.text}</p>
            {selectedType === 'prompt' && <p className="my-2" >Response: {selectedMessage.response}</p>}
          </>
        )}
      </div>


      </div>
      
    

      <div className='mt-2'>
      <div className="w-[100%] h-[50px] bottom-0  my-2 flex m-auto">
      <div className="flex items-center w-full">
  <input
    type="text"
    value={InputPrompt}
    onChange={(e) => setInputPrompt(e.target.value)}
    placeholder="Type another message..."
    className="flex-1 border rounded-l p-2  ml-2 focus:outline-none focus:border-blue-500"
  />
  <input
    type="text"
    value={inputResponse}
    onChange={(e) => setInputResponse(e.target.value)}
    placeholder="Type another message..."
    className="flex-1 border rounded-l p-2  ml-2 focus:outline-none focus:border-blue-500"
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
