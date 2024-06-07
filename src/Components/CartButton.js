import React from 'react'
import './SingleProduct.css'

function CartButton({decreaseQty,checkDisable,increase,increaseQty,product}) {
    return (
        <div>
             <div className='button-container'>
          <h4>Quantity</h4>
          <div className='quantity'>
            <label>
              <input onClick={decreaseQty} type='button' value='-' disabled={checkDisable}/>
            </label>
            <h1 className='qty-number'>{increase}</h1>
            <label>
              <input onClick={increaseQty} type='button' value='+'/>
            </label>
       </div>
       <h3>Price - {increase === 1 ? Math.round(product) : Math.round(product) * increase}</h3>

 
      </div>
        </div>
    )
}

export default CartButton;