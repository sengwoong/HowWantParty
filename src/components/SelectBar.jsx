import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
// 애니메이션수정
const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const containerControls = useAnimation();
  const fullscreencontrol = useAnimation();
  const handleFocus = async () => {
    await fullscreencontrol.start({ right: '-50px' });
    await containerControls.start({ width: '70vw', right: '-50px' }); // 수정된 부분
    setIsFocused(true);
  };
  
  const handleBlur = async () => {
    await containerControls.start({ width: '30vw', right: '0px' });
    await fullscreencontrol.start({ right: '0px' });
    setIsFocused(false);
  };

  return (
    <motion.div className="absolute right-0"
    animate={fullscreencontrol} >
      <motion.input
        type="text"
        className={`p-2 pl-8 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-all w-[30vw]`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        animate={containerControls} // containerControls를 여기에 추가
      />
      {isFocused && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={handleBlur}
        />
      )}
      <motion.div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500">
        <IoIosSearch />
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
