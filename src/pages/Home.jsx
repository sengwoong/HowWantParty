/** @jsxImportSource @emotion/react */

import React from "react";
import Bio from "../components/Bio";
import Sponsored from "../components/Sponsored";
import Poster from "./Poster";
import useProducts from "../hooks/useProducts";
import SideMenu from "../components/Slider/SideMenu";
import SelectBar from "../components/selectBar";
import SelectButton from "../components/SelectButton";

function Home() {
  return (
    <>
    <div className="flex">
      <SideMenu></SideMenu>
      <div className="w-full h-32">
          <h2>Videos</h2>
          <div className="flex relative">
  <SelectButton
    btnTitle="Select an option"
    btnoptions={['Option 1', 'Option 2', 'Option 3']}
  />
  <SelectBar />
</div>

          <ul>
            {/* Check if products.items is an array before mapping */}
            {/* {Array.isArray(products.items) ? (
              products.items.map((video) => (
                <li className="mb-3 p-1" key={video.id}>
                  {video.snippet.title}
                </li>
              ))
            ) : (
              <div>Error: Invalid video data</div>
            )} */}
          </ul>
          </div>
    </div>
    
    </>
  );
}

export default Home;
