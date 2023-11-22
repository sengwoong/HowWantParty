/** @jsxImportSource @emotion/react */

import React from "react";
import Bio from "../components/Bio";
import Sponsored from "../components/Sponsored";
import Poster from "./Poster";
import useProducts from "../hooks/useProducts";
import SideMenu from "../components/Slider/SideMenu";

function Home() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  console.log(products)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="d-flex flex-direction-column">
    <SideMenu></SideMenu>
    <div className=" col-lg-10 col-md-11 col-sm-12 mx-auto text-black  ">
      
    

      <div>
        <h2>Videos</h2>
        <ul>
          {Array.isArray(products.items) ? (
            products.items.map((video) => (
              <li 
              className="mb-3 p-1 "
              key={video.id}>{video.snippet.title}</li>

            ))
          ) : (
            <div>Error: Invalid video data</div>
          )}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Home;
