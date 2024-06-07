
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts:[
        {
        id:13,
        product:'Mens clothing wear shirt',
        img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg ',
        price:300,
        quantity:20
    },
    {
        id:10,
        product:'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
        img:'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg ',
        price:500,
        quantity:2
    },
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