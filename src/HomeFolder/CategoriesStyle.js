import React from 'react'
import './CategoryStyle.css'
function CategoriesStyle({ categoryName, imageName }) {
  return (
    <div>
       <div className='categories-container'>
         <div className='image-container'>
            <div className=' categories_image'>
                <img src={imageName} alt="" className='main-image'/>
                
               <div className='cat-name'>
               <h1>{categoryName}</h1>
               </div>
            </div>
            
         </div>
        
        </div>
    </div>
  )
}

export default CategoriesStyle
