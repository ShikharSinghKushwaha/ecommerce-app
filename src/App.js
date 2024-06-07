
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


  return (
    <div className="app">

      <Router>
      <TopBar />

       <Routes>
        <Route path='/' element={<LandingProducts />} />  
         <Route path={`/categories/${':categoryName'}`} element={<Categories />} />
         <Route path='/allproducts' element={<AllProductsPage />} />
         <Route path='products/:id' element={<SingleProductDetails />}/>
        
         <Route path='/cart' element={<Cart />} />

       </Routes>
      <Footer />

      </Router>
   

    </div>
  );
}

export default App;
