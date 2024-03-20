import React from "react";
import { womanData } from "../data/woman";
//import { Link } from "react-router-dom";

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
    <div className="proTitle">
    <h2>Woman Fashion</h2>
    </div>
      
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              
              <img className="proImage" src={item.image} alt="" />
           
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Woman;
//Line-17 <Link to='/men'>
//Line-19 </Link>