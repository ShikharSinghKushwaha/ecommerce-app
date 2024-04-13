import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios'
import { useParams,NavLink } from "react-router-dom";
import ProductCard from "../HomeFolder/ProductCard";
import './AllCategory.css'
function Categories (){
    const [ product, setCategoryProduct]  = useState([])
    const [ categoryBtn, setCategoryBtn ]= useState();
    const categoryParam = useParams();
    let selectedCategoryName = categoryParam.categoryName.toLowerCase() ?categoryParam.categoryName.toLowerCase() : 'electronics';

    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/${selectedCategoryName }`? `https://fakestoreapi.com/products/category/${selectedCategoryName }` : `https://fakestoreapi.com/products/category/electronics`)
        .then(response => {
            setCategoryProduct(response.data)
            console.log(response.data)
        }) .catch((err) => {
            console.log(err);
        })
    },[selectedCategoryName])

    const allBtn = [
        {
            category:'electronics'
        },
        {
            category :'jewelery'
        },
        {
            category:`men's clothing`
        },
        {
            category: `women's clothing`
        }
    ]
    return(
        <div>
            <h1 className="heading">Categories Section</h1>

            <div className="parent-btn-container">
                {allBtn.map((btn,index) => {
                   
                  return(
                    <div className="btn-container">
                    <NavLink to={`/categories/${btn.category}`} key={index}>
                     <button data-param={btn.category} className="blinker-regular" key={index}>{btn.category.charAt(0).toUpperCase() + btn.category.slice(1)}</button>
                   </NavLink>
                   </div>
                    
                    )

})}
                     {/* {alert(categoryBtn)} */}

            </div>
            <h1 className="heading"> {selectedCategoryName.charAt(0).toUpperCase() + selectedCategoryName.slice(1)}</h1>    

            <ProductCard productData={product} />
            
        </div>
    );
}

export default Categories;