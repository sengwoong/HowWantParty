import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// 버튼 타입을 받아야함
// 하나는 오케이버튼 하나는 none 버튼임
function SliderButton({ showMenu, toggleMenu }) {
  return (
    <div>
         { <slidemenubutoon
          style={{
            top: "10px",
            left: "50px",
            order: 1,
            zIndex: 1,
            transition: "transform 0.3s ease-in-out",
            transform: showMenu ? "translateX(230px)" : "translateX(0%)", // Updated
          }}
          onClick={toggleMenu}
        >
    

          {showMenu ? (
         <FaTimes
         style={{ marginRight: "5px", width: "40px", height: "40px" }}
        />
          ) : (
            <>
            <FaBars
              style={{ marginRight: "5px", width: "40px", height: "40px" ,position: "fixed"}}
            />
            <div>asd</div>
            </>
          )}
        </slidemenubutoon>}

    </div>
  )
}

export default SliderButton