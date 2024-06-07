import {  configureStore,combineReducers } from "@reduxjs/toolkit";
import  addToCartReducer  from "../features/featureSlice";


export const store =configureStore({
    reducer : {
      cartItem: addToCartReducer
    } 
})