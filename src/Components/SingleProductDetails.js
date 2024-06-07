import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import CartButton from "./CartButton";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../features/featureSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingleProductDetails({ addToCartPage }) {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [increase, setIncrease] = useState(1);

  //const selector = useSelector();
  const dispatch = useDispatch();


  let productId = params.id;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, [productId]);

  const checkDisable = increase <= 1 ? "disabled" : "";

  const increaseQty = () => {
    setIncrease(increase + 1);
  };

  const decreaseQty = () => {
    setIncrease(increase - 1);
  };

  const addToCart = (id, product, img, price, quantity) => {
    dispatch(addCart({ id, product, img, price, quantity: increase }));
    toast.success('Added to the Cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div>
      <div className="single-container">
        <div className="single-image-image">
          <img src={product.image} className="main-image" />
        </div>
        <div className="main-single-container">
          <div className="single-description">
            <h2>Id-{product.id}</h2>
            <h1 className="heading">{product.title}</h1>
            <p className="banner-text">{product.description}</p>

              <CartButton
                decreaseQty={decreaseQty}
                checkDisable={checkDisable}
                increase={increase}
                increaseQty={increaseQty}     
                product={product.price}
              />
           
            <div className="button-container">
              <button
                className="add_btn blinker-regular"
                onClick={() =>
                  //addToCartPage(product.id)
                  addToCart(
                    product.id,
                    product.title,
                    product.image,
                    product.price,
                    increase
                  )
                }
              >
                Add to Cart
              </button>
              <ToastContainer />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;
