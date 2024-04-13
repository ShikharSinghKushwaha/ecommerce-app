import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
function ProudProducts() {

    const [ product, setProduct ] = useState([]);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products?limit=8')
        .then((response) => { 
            console.log("API response", response.data)
            setProduct(response.data)
        } ).catch(err => {
            console.log(err)
        })
    }, []);
  return ( 
    <div>
       <div className='products-container'>
         <h1 className='heading'>Products we are Proud of</h1>
        {console.log(product)}
        <ProductCard productData={product} />
        </div>
    </div>
  )
}

export default ProudProducts;
