import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//actions with asynchronous function call
export const getAllProducts = createAsyncThunk('products/getAllProducts',async()=>{
   const result =  await axios.get("https://dummyjson.com/products")
   //console.log(result.data.products);
   sessionStorage.setItem("products",JSON.stringify(result.data.products))
   return result.data.products
})

const productSlice = createSlice({
    name : 'products',
    initialState :{
        allProducts:[], //to hold all products-array;multiple products
        dummyAllProducts : [],
        loading : true, //pending is true
        error :"" //empty string
    },
    reducers:{
        //actions are synchronous
 
        //action payload - search key from header should come
        searchProduct:(state,action)=>{ 
            state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))


        }

    },
    extraReducers : (builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.loading = false // when fulfilled, no pending , so loading : false
            state.error = "" //when fulfilled, no error ,so keep it empty
        })
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts = [] // when pending ,there will no value in allProducts, so keep empty
            state.dummyAllProducts = []
            state.loading = true //  when pending, keep loading : true
            state.error = ""  // no error 
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts = [] // no value in reject
            state.dummyAllProducts = [] 
            state.loading = false // no pending
            state.error = "Something went Wrong!!! API Calling Failed" // there is error
        })
    }

})

export const { searchProduct } = productSlice.actions
export default productSlice.reducer