
import React from 'react'
import { menData } from '../data/men'
//import { Link } from 'react-router-dom'

const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
    <h2>Men Fashion</h2>
    </div>
        
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                      
                         <img className='proImage' src={item.image} alt="" />
                      
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Men
//Line-19 <Link to='/men'>
//Line-21 </Link>