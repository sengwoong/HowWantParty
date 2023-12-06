import React from 'react'
/* 선택한 메세지 보기 **/
function ShowOption({selectedMessage,selectedType}) {
  return (
    <div className="w-[30%] p-2 bg-gray-300 h-[65vh] overflow-y-scroll">
    {selectedMessage && (
      <>
        <p className="my-2" >ID: {selectedMessage.id}</p>
        <p className="my-2" >{selectedType === 'prompt' ? 'Prompt' : 'Response'}: {selectedMessage.text}</p>
        {selectedType === 'prompt' && <p className="my-2" >Response: {selectedMessage.response}</p>}
      </>
    )}
  </div>
  )
}

export default ShowOption