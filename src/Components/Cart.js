import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './SingleProductDetails.js';
import axios from 'axios';

function Cart() {
  //const selectedProduct = useContext(CartContext);
  const [product, setProduct] = useState([]);
  //const [ cartItem, setCartItem] = useContext(CartContext)
  //const [ cartItem, setCartItem ] = useContext(CartContext);
  const getItem = localStorage.getItem('product')
  const [selectedProduct, increase] = useContext(CartContext);
//const item = useContext(CartContext);
  return (
    <div>
      <h2>{selectedProduct}</h2>
      <h2>{increase}</h2>

    
   
    </div>
  ); 
}  
  
export default Cart;

