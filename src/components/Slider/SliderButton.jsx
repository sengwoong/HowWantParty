import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


/**
 * SliderButton 컴포넌트는 슬라이딩 메뉴를 열고 닫는 버튼을 렌더링합니다.
 * 
 * @param {Object} props - SliderButton 컴포넌트에 전달되는 프로퍼티들
 * @param {boolean} props.showMenu - 메뉴가 열려있는지 닫혀있는지 여부를 나타내는 부울 값
 * @param {string} props.isOpen - 버튼 상태를 나타내는 문자열 ('open' 또는 'close')
 * @param {Function} props.toggleMenu - 메뉴를 열거나 닫기 위한 콜백 함수
 * @returns {React.ReactElement} SliderButton 컴포넌트
 */
function SliderButton({ showMenu, isOpen, toggleMenu }) {
  const iconMap = {
    open: {
      show: !showMenu,
      icon: <FaBars className="w-10 h-10 mr-2" />,
    },
    close: {
      show: showMenu,
      icon: <FaTimes className="w-10 h-10 mr-2" />,
    },
  };

  const { show, icon } = iconMap[isOpen];

  return (
    <div>
      <button
        className={` transform transition-transform top-10 l-4 z-50 `}
        onClick={toggleMenu}
      >
        {icon}
      </button>
    </div>
  );
}

export default SliderButton;
