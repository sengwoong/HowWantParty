import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * MenuItem 컴포넌트
 * @component
 * @param {Object} props - 메뉴내용
 * @param {string} props.text - 표시될 텍스트 내용
 * @param {string} props.textDesign - 텍스트의 디자인 (e.g., "text-2xl", "text-3xl" 등)
 * @param {string} props.herf - 클릭 시 이동할 링크 주소
 * @returns {JSX.Element} MenuItem 컴포넌트
 */
function MenuItem({ text, textDesign, herf }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();
  
  const handleHover = () => {
    setIsHovered(true);
    controls.start({ width: '100%' });
  };

  const handleUnhover = () => {
    setIsHovered(false);
    controls.start({ width: 0 });
  };

  const handleClick = () => {
    navigate(herf); // 수정된 부분
    console.log('Text clicked!');
  };

  return (
    <motion.div
      className={`text-black ${textDesign} mb-4 cursor-pointer relative overflow-hidden `}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      onClick={handleClick}
    >
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      />
      {text}
    </motion.div>
  );
}

export default MenuItem;
