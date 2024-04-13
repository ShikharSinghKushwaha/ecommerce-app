import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
function AllProducts() {
    const [ product, setProduct ] = useState([])

    useEffect(() => {
      axios('https://fakestoreapi.com/products')
      .then((data) => {
        setProduct(data.data);
      })
    },[])
  return (
    <div>
      <h1 style={{textAlign:'center',fontSize:'2.3em'}}>Our All Products</h1>
       <div className='products-container'>
       
          <ProductCard productData={product} />
        
       </div>
    </div>
  )
}

export default AllProducts
