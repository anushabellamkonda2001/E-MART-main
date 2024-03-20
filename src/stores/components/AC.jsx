import React from "react";
import { acData } from "../data/ac";
//import { Link } from "react-router-dom";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
<div className="proTitle">
    <h2>Air Condition</h2>
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

export default AC;
//Line 10 <div className="proTitle">
//Line17 <Link to='/ac'>
//Line-19   </Link>