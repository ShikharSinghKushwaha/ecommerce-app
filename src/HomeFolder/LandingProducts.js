import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CategoriesStyle from './CategoriesStyle'
import './CategoryStyle.css'
import { NavLink } from 'react-router-dom'
import ProudProducts from './ProudProducts'
import Banner from './Banner'
import AllProducts from './AllProducts'


function LandingProducts() {
  const [data, setData] = useState([])
  const [ index, setIndex ] = useState(0)

  // let hasNext = data.length > index;
  
  // function handleNext() {
  //   if (data.length > 0) {
  //     if (index < data.length - 1) {
  //       setIndex(index + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   }
  // }
  

  useEffect(() => {
   axios.get('https://fakestoreapi.com/products/categories')
   .then(res => {
     console.log(res)
     setData(res.data)
   }).catch(err => {
    console.log(err);
   })

  }, [])

  let allCategoryImages = {
    electronics: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    jewelery : 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fHww',
    mens : 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJ3MlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    women:'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjAlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D'
  }
  return ( 
    <div>
 <div className='parent'>
       {/* <div className='container'> */}
        <div className='comp'>
        <NavLink to="/categories/Electronics">

       {data.length > 0 && typeof data[0] === 'string' && (
        <CategoriesStyle categoryName={data[0].charAt(0).toUpperCase() + data[0].slice(1)} imageName={allCategoryImages.electronics}/>
        )}

        </NavLink>

      </div>

<div className='comp'>
<NavLink to="/categories/Jewelery">

  {data.length > 0 && typeof data[1] === 'string' && (
  <CategoriesStyle categoryName={data[1].charAt(0).toUpperCase() + data[1].slice(1)} imageName={allCategoryImages.jewelery}/>
)}
               </NavLink>

</div>
<div className='comp'>
<NavLink to="/categories/Men's clothing">

  {data.length > 0 && typeof data[2] === 'string' && (
  <CategoriesStyle categoryName={data[2].charAt(0).toUpperCase() + data[2].slice(1)} imageName={allCategoryImages.mens}/>

)}
  </NavLink>

</div>
<div className='comp'>
<NavLink to="/categories/Women's clothing">

  {data.length > 0 && typeof data[3] === 'string' && (
  <CategoriesStyle categoryName={data[3].charAt(0).toUpperCase() + data[3].slice(1)} imageName={allCategoryImages.women}/>
)}
  </NavLink>

</div>

{/* </div>  */}
</div>
       <ProudProducts />
       <Banner firstBanner={true}/>
       {/* <Banner /> */}
       <AllProducts />
       <Banner />

    </div>

  )
}

export default LandingProducts
