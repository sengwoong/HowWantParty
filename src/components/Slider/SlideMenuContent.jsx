import React from 'react'
import SliderButton from './SliderButton'


/**
 * SlideMenuContent 컴포넌트는 메뉴의 내용 밖의 디자인 입니다.
 * 
 * @param {string} props.isInside - 내부 또는 외부 여부를 나타내는 문자열 ('inside' 또는 'outside')
 * @param {boolean} props.showMenu - 메뉴가 열려있는지 닫혀있는지 여부를 나타내는 부울 값
 * @param {Function} props.toggleMenu - 메뉴를 열거나 닫기 위한 콜백 함수
 * @param {React.ReactNode} props.children - 내부에 메뉴
 * @returns {React.ReactElement} 일반적인 메뉴 디자인 제공
 */


function SlideMenuContent({ children ,isInside,showMenu,toggleMenu}) {
  return (
    <>
<div className={`fixed top-0 left-0 flex   z-50
  transition-transform duration-500 transform ${showMenu ? '-translate-x-full' : 'translate-x-0'}`}
>
  <div className="flex bg-white w-screen h-screen md:w-[420px] bg-white">
<div className="w-full">
        {/* 애는 오른쪽으로 짝 붙어야함 무조권임 */}
        {/* x포지션 내부 */}
        <div className="mt-8"/>
        <div className="w-full flex justify-end">
      
            {isInside == "inside"?( <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} isOpen="close" />):(<></>)}
      </div>
{/* 박스메뉴  소메뉴 2개씩 나누어서 색깔을 번갈아가는메뉴임*/}
{ children }
   
        {/* 추가적인 메뉴 항목들 */}
      </div>
      </div>

 {/* 애는 완쪽으로 짝 붙어야함 무조권임 */}
        {/* x포지션 외부 */}
        <div className="mt-8">
        {isInside == "outside"?( <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} isOpen="close" />):(<></>)}
        </div>
      </div>
  </>
  )
}

export default SlideMenuContent