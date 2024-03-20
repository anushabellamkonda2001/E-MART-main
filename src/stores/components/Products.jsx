import React from "react";
import Mobiles from './Mobiles';
import Computers from './Computers';
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
const Products = () => {
  return (
    <div>
      <Mobiles />
    <Computers />
    <AC />
    <Watch />
    <Men/>
    <Woman/>
    <Furniture/>
    <Kitchen/>
    </div>
  )
}

export default Products;
