import React, { useState , useEffect, createContext, useContext } from 'react'
import axios from 'axios'
import  { useParams , useLocation} from 'react-router-dom'
import './SingleProduct.css'
import Cart from './Cart'

export const CartContext = createContext();


function SingleProductDetails() {
  const params = useParams();
  const [ product, setProduct ]= useState([]);
  const [ increase, setIncrease] = useState(1);
  const location = useLocation();

  
  // console.log(params);
// const  addToCart  = useContext(CartContext);

  let productId = params.id;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response => {
      console.log(response.data);
      setProduct(response.data)
      
    })
  },[productId])

 
 
  const checkDisable = increase <= 1 ? 'disabled' : '';
 
  const increaseQty = () => {

    setIncrease(increase + 1);

  }

  const decreaseQty = () => {
    setIncrease(increase - 1 );
  } 


  const isCartPage = location.pathname === '/cart';
  const [selectedProduct, setSelectedProduct] = useState(null)
  

  const addToCartPage = () => {

    setSelectedProduct(productId);
    setIncrease(increase);
   //addLocal += localStorage.setItem('product',productId);
    setProduct(product);
  }


  
  return (
    <div> 
      <div className='single-container'>
       {/* {product.map((item) => ( */}
        {/* <div> */}
         <div className='single-image-image' >
         <img src={product.image} className='main-image'/>
       </div>
       <div className='single-description'>
         <h2>Id-{product.id}</h2>
         <h1 className='heading'>{product.title}</h1>
         <p className='banner-text'>{product.description}</p>
       
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
       <h3>Price - {increase === 1 ? Math.round(product.price) : Math.round(product.price) * increase}</h3>

 
      </div>
  <div className='button-container'>
      <button className='add_btn blinker-regular' 
      onClick={ 
      addToCartPage   
      }>
        Add to Cart</button>
        <button className='add_btn buy-now blinker-regular' 
      onClick={ 
      addToCartPage   
      }>
       Buy Now</button>
       </div>
       </div>
       {isCartPage ? 
       
       <CartContext.Provider value={[selectedProduct,increase,product]}>
       
      <Cart addToCart/>
      </CartContext.Provider>
       :null
      }
    
             </div>
    </div>
  )
}

export default SingleProductDetails
