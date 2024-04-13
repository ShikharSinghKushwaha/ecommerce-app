import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TopBar from './Components/Navbar';
import Categories from './Components/AllCategory';
import Cart from './Components/Cart';

import { BrowserRouter as Router, Routes,Route, useSearchParams } from 'react-router-dom';
import LandingProducts from './HomeFolder/LandingProducts';
import SingleProductDetails, { CartContext } from './Components/SingleProductDetails';
import axios from 'axios'
import Footer from './HomeFolder/Footer';
import AllProductsPage from './Components/AllProductsPage'
//import Categories from './Components/AllCategory'


function App() {

const [cartItem, setCartItem] = useState([]);

const addToCart = (item) => {
  setCartItem([...cartItem, item]);
};
useEffect(() => {
  const json = localStorage.getItem("cartItem");
  const savedCart = JSON.parse(json);
  if (savedCart) {
    setCartItem(savedCart);
  }
}, []);

useEffect(() => {
  const json = JSON.stringify(cartItem);
  localStorage.setItem("cartItem", json);
}, [cartItem]);

  return (
    <div className="app">
<CartContext.Provider value={{cartItem, addToCart, setCartItem }}>
      <Router>
      <TopBar />

       <Routes>
        <Route path='/' element={<LandingProducts />} />
         <Route path={`/categories/${':categoryName'}`} element={<Categories />} />
         <Route path='/allproducts' element={<AllProductsPage />} />
         <Route path='products/:id' element={<SingleProductDetails />}/>
         {/* <Route path='/categories/:name' element={<Products />} /> */}
         <Route path='/cart' element={<Cart />} />

       </Routes>
      <Footer />

      </Router>
    
      {/* <LandingProducts /> */}
      </CartContext.Provider>
    </div>
  );
}

export default App;
