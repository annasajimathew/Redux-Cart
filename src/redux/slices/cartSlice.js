import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState:[],
    reducers:{
        //add to cart - action.payload is the product to be added to cart
        addToCart : (state,action)=>{
            // add cheyyande product state undo ennu check cheyyanam
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

                //remaining products
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }else{// add quantity and totalprice in state
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },

        //romove cart item
        removeCartItem : (state,action)=>{
             return state.filter(item=>item.id!=action.payload)

        },
        // increment quantity (+)
        incrementCartItem : (state,action)=>{
             const existingProduct = state.find(item=>item.id==action.payload.id)
             existingProduct.quantity++
             existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

             //remaining remainingProducts
             const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
        },
        // decrement quantity (+)
        decrementCartItem : (state,action)=>{
             const existingProduct = state.find(item=>item.id==action.payload.id)
             existingProduct.quantity--
             existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

             //remaining remainingProducts
             const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
        },
        //empty cart
        emptyCart : (state)=>{
            return [] // return empty array

        }

    }
})
 export const { addToCart, removeCartItem, incrementCartItem, decrementCartItem, emptyCart } = cartSlice.actions
 export default cartSlice.reducer