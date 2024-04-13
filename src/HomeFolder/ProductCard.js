import React from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom'
function ProductCard({ productData }) {

  return (
    <div>
       <div className='product-box-container'>
        <div className='single-product-card'>
           {productData.map(item => (
            <NavLink to={`/products/${item.id}`} style={{textDecoration:'none'}}>           
             <div className='products' key={item.id}>
              <div className='product-img'>

                <img src={item.image} alt={item.image}/>
               </div>
                <div className='product-text'>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                
                </div>
            </div>
            </NavLink>
           ))}
        </div>
       </div>
    </div>
  )
}

export default ProductCard
