import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =  createSlice({
    name : "wishlist",
    initialState:[], 
    reducers:{
        //add to wishlist - addToWishlist button clicked in view component. so for view component to access it, export it (2nd last line)
        addToWishlist : (state,action)=>{
            state.push(action.payload)
        },
        //remove from  wishlist
        removeWishlistItem : (state,action)=>{
             return state.filter(item=>item.id!=action.payload)

        }
    }
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer