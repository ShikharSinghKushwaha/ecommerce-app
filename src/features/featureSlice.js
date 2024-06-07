
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts:[
        {
        id:13,
        product:'Demo Product',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg ',
        price:300,
        quantity:20
    }
]
}

export const addToCartReducer = createSlice({
    name:'cartItem',
    initialState,
    reducers:{
        addCart:(state,action) => {
            const  {
                id,
                product,
                img,
                price,
                quantity
            } = action.payload;

            state.carts.push({id,product,img,price,quantity})
        },
        removeCart:(state,action) => {
           state.carts =  state.carts.filter(item => item.id !== action.payload);
        }
    }
})

export const {addCart,removeCart} = addToCartReducer.actions;

export default addToCartReducer.reducer;