import React from 'react';
import {  useState } from 'react';
import SliderButton from './SliderButton';
import SlideMenuContent from './SlideMenuContent';
import useWindowSize from '../../hooks/useWindowSzie';
import SideBackDesign from './SideBackDesign';

import MenuItem from './MenuItem';





function SideMenu() {
  const [showMenu, setShowMenu] = useState(true);
  const { screenSize } = useWindowSize();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {["md", "sm"].includes(screenSize) ? (
        <>
          <div className="shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)] w-screen h-1/6">
            {/* 햄버거 버튼 가운데 정렬 */}
            <div className="flex my-3 justify-center w-screen h-1/6">
              <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} isOpen="open" />
            </div>
          </div>
        </>
      ) : (
        <>
<div className="w-24  ">
            {/* 햄버거 버튼 가운데 정렬 */}
            <div className="flex mt-4 justify-center h-full   ">
              <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} isOpen="open" />
            </div>
          </div>
        </>
      )}

<SlideMenuContent className="relative" isInside={["md", "sm"].includes(screenSize) ? "inside" : "outside"} showMenu={showMenu} toggleMenu={toggleMenu}>
        <SideBackDesign></SideBackDesign>
        <div className='absolute z-40 left-1/2 transform -translate-x-1/2 text-center'>
        <MenuItem text="파티는 여기로" textDesign="text-3xl"  herf="/home" />
        <MenuItem text="파티신청" textDesign="text-2xl"  herf="/home" />
        <MenuItem text="파티등록" textDesign="text-xl"  herf="/home" />
        <MenuItem text="채팅" textDesign="text-3xl"  herf="/home" />
        <MenuItem text="채팅 열기" textDesign="text-2xl"  herf="/home" />
        <MenuItem text="채팅 닫기" textDesign="text-xl"  herf="/home" />
        <MenuItem text="상품" textDesign="text-3xl"  herf="/home" />
        <MenuItem text="전체 상품" textDesign="text-2xl"  herf="/home" />
        <MenuItem text="찜한 상품" textDesign="text-xl"  herf="/home" />
    </div>
      </SlideMenuContent>
    </>
  );
}

export default SideMenu;

