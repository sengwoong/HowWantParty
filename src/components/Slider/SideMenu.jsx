import React from 'react';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SliderButton from './SliderButton';
import SlideMenuContent from './SlideMenuContent';
import useWindowSize from '../../hooks/useWindowSize';

// Define GridItem component
const GridItem = ({ color }) => (
  <div className={`grid-item ${color}`}></div>
);

function SideMenu() {
  const [showMenu, setShowMenu] = useState(true);
  const { screenSize } = useWindowSize();
  const colors = ['bg-white', 'bg-red-500', 'bg-blue-500', 'bg-white'];

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
          <div className="shadow-[20px_0px_60px_0px_rgba(0,0,0,0.3)] w-24">
            {/* 햄버거 버튼 가운데 정렬 */}
            <div className="flex mt-4 justify-center h-full">
              <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} isOpen="open" />
            </div>
          </div>
        </>
      )}

      <SlideMenuContent isInside={["md", "sm"].includes(screenSize) ? "inside" : "outside"} showMenu={showMenu} toggleMenu={toggleMenu}>
        <div className="grid grid-cols-2 h-full">
          {Array.from({ length: 8 }, (_, index) => (
            <GridItem key={index} color={colors[index % colors.length]} />
          ))}
        </div>
      </SlideMenuContent>
    </>
  );
}

export default SideMenu;
