import React from 'react'
// Define GridItem component

  
function SideBackDesign() {
    const colors = ['bg-white', 'bg-red-500', 'bg-blue-500', 'bg-white'];

  return (
    <>   
    <div className="grid grid-cols-2 h-full w-full absolute z-30">
      {Array.from({ length: 8 }, (_, index) => (
        <GridItem key={index} color={colors[index % colors.length]} />
      ))}
    </div></>
  )
}
const GridItem = ({ color }) => (
    <div className={`grid-item ${color}`}></div>
  );


export default SideBackDesign