import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../features/featureSlice.js'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const selectCarts = state => state.cartItem.carts;
function Cart() {

  const item = useSelector(selectCarts)
  const dispatch = useDispatch();

  const [productCount, setProductCount] = useState(item.length);
  // const [increase, setIncrease] = useState(0)

  useEffect(() => {
    setProductCount(item.length)
  }, [item])
  console.log(item)
  // setProductCount(item.length)

  // const increaseQty = () => {
  //   setIncrease(increase + 1);
  // };

  // const decreaseQty = () => {
  //   setIncrease(increase - 1);
  // };

  //const checkDisable = increase <= 1 ? "disabled" : "";

  function removeItem(id) {
    dispatch(removeCart(id))
    console.log(item)

    toast.success('Removed from Cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });  }



  return (
    <div>
      <div className='cart-container'>
        <h1>You have {productCount} Items in Cart</h1>

        <div className='cart-product-container'>
          {item.map(products => (
            <div className='product' key={products.id}>
              <div className='cart-image-container'>
                <img src={products.img}

                />
              </div>

              <div className='product-info'>
                <h1>{products.product}</h1>
                <h2>Price - {products.price}</h2>
                <h3>Qunatity - {products.quantity}</h3>
                {/* <div className='button-container'>
                    <CartButton
                      decreaseQty={decreaseQty}
                      checkDisable={checkDisable}
                      increase={increase}
                      increaseQty={increaseQty}
                      product={products.price}
                    />
                  </div> */}
                <button className='add_btn buy-now blinker-regular'
                  >
                  Buy Now</button>
                <button className='btn'
                  onClick={() => removeItem(products.id)}
                  style={{ maxWidth: '100px', fontSize: '17px', padding: '8px' }}>Remove</button>
              </div>
              <ToastContainer />


            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Cart;

