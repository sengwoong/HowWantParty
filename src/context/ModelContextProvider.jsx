// authContext.jsx
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [openMiniChatModel, setMiniOpenChatModel] = useState(false);

  useEffect(() => {
    // 여기에 모달이 열릴 때 또는 닫힐 때의 동작을 추가할 수 있습니다.
    // 예를 들면, 모달이 열릴 때 특정 API 호출 등을 처리할 수 있습니다.
    // 예: if (openMiniChatModel) { ... } else { ... }
  }, [openMiniChatModel]);

  const toggleMiniChatModel = () => {
    setMiniOpenChatModel((prev) => !prev);
  };

  return (
    <ModelContext.Provider value={{ openMiniChatModel, toggleMiniChatModel }}>
      {children}
    </ModelContext.Provider>
  );
};
