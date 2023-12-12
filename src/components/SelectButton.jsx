import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
// 안줄여들게하기
/**
 * SelectButton 컴포넌트
 * @component
 * @param {Object} props - 버튼 및 드롭다운 설정
 * @param {string} props.btnTitle - 버튼의 타이틀
 * @param {string[]} props.btnoptions - 드롭다운 메뉴 리스트 []
 * @returns {JSX.Element} SelectButton 컴포넌트
 */
const SelectButton = ({btnTitle,btnoptions}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(btnTitle);

  const options = btnoptions

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const containerControls = useAnimation();
  const dropdownControls = useAnimation();

  const handleOpen = async () => {
    await containerControls.start({ opacity: 1 });
    await dropdownControls.start({ y: 0, opacity: 1 });
  };

  const handleClose = async () => {
    await dropdownControls.start({ y: -10, opacity: 0 });
    await containerControls.start({ opacity: 0 });
  };

  return (
    <div className="relative w-60">
      <motion.button
        className=" bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none flex items-center"
        onClick={() => {
          setIsOpen(!isOpen);
          isOpen ? handleClose() : handleOpen();
        }}
      >
        <span className="mr-2">{selectedOption}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={containerControls}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border inline-flex justify-center rounded-md shadow-md overflow-hidden whitespace-nowrap"
        >
    
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={dropdownControls}
            className="py-2"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SelectButton;
