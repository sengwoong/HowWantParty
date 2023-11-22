import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import SliderButton from "./SliderButton";

function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuStyle = {
    width: "300px",
    height: "100vh",
    backgroundColor: "red",
    position: "fixed",
    top: 0,
    left: 0, // Updated
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    
    transition: "transform 0.3s ease-in-out",
    transform: showMenu ? "translateX(0)" : "translateX(-100%)", // Updated
  };

  return (
    <div>
      {/* 슬라이드타입이 있음 하나는 메뉴를밀고 하나는 위에덮음 */}
       <SliderButton showMenu={showMenu} toggleMenu={toggleMenu} />
      <div style={menuStyle}>

        {/* 애는 오른쪽으로 짝 붙어야함 무조권임 */}
      {showMenu ? (
        
            <FaTimes
         
            className="mr-5 w-32 h-32"
              style={{ marginRight: "5px", width: "40px", height: "40px" }}
            />
          ):(<>
          
          
          </>)}
        {/* 슬라이드버튼끝 */}

{/* 박스메뉴  소메뉴 2개씩 나누어서 색깔을 번갈아가는메뉴임*/}
{/* 일반메뉴 일반적인 깔끔한 메뉴바임*/}
        <div style={{ color: "white", marginBottom: "20px" }}>

        </div>
        <div
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            marginBottom: "10px",
          }}
        >
         
        </div>asdasd
        {/* 추가적인 메뉴 항목들 */}
      </div>

      {
       
      }
    </div>
  );
}

export default SideMenu;
