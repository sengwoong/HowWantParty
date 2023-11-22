import React, { useState } from 'react';

function Chating() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');


    // 메세지보내기 앤훅으로 빼야함
    // 들어올땨 리엑트 쿼리로 데이터를 가져옴 -> 쿼리로받고 하나는 sse 하나는 하나는 리엑트쿼리 캐쉬시간없이 해서가져옴
    // 해당 유저가 맞는지 확인해서 가져옴


    const handleSendMessage = () => {
      if (inputText.trim() === '') {
        return;
      }
      // 채팅창을 맨아래로 내림
  
  
      // 여기서 데이터를 보냄 //qna 인지 채팅인지 (파람 첫번째가 qna 이면)// 입력값 날자 // 입력값 //유저의 세션정보
      const newMessage = { text: inputText, isUser, id: Date.now() };
      // 데이터를 실시간으로 가져옴 (캐쉬없이)
      // 그거나인가?(isUser) 메세지 네용만 들고오면됌
      if(messages == null){
        setMessages([ newMessage]);
      }
      else{
        setMessages([...messages, newMessage]);
      }
     
      setInputText('');
    };

// 로컬스토리지에서 유저정보와 채팅정보가 맞는지 가져와서 bool 값으로 들고옴
    const isUser = true;





  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };











  const getMessageStyle =(isUser)=>{
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
    }
    const displayUser = (isUser)=>{
      // 로컬나 == 채팅에있는 유저
      return isUser
      ? { falseProfile: 0, content: 1, lastProfile: 1 }
      : { falseProfile: 1, content: 1, lastProfile: 0 };
    }




  
   

  



  return (
    <div className="fixed bottom-4 right-4 w-96 border border-gray-300 rounded p-4 bg-gray-500">
      <div className="h-52 overflow-y-scroll">
      {/* 채팅창 */}
        {messages.map((message) => (
          <div key={message.id} className={getMessageStyle(message.isUser).chat}>
            {displayUser(message.isUser).falseProfile === 1 && <div className={getMessageStyle(message.isUser).profile}></div>}
            {displayUser(message.isUser).content === 1 &&  
              <div
                className={getMessageStyle(message.isUser).message}
                style={{ borderColor: message.isAdmin ? 'gold' : 'inherit' }}
              >
                {message.text}
              </div>
            }
            {displayUser(message.isUser).lastProfile === 1 && <div className={getMessageStyle(message.isUser).profile}></div>}
          </div>
        ))}
      </div>
      {/* 보내기 */}
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
  );
}

export default Chating;
