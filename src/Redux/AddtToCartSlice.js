import { createSlice } from "@reduxjs/toolkit";
const addtocartSlice = createSlice({
  name: "addtocart",
  initialState: {cart:[], isDisplayed: false, totalPrice:0},
  reducers: {
    addtocart: (state, action) => {
      const itemInCart = state.cart.find((item)=>item.id ===action.payload.id)
      state.totalPrice+=action.payload.price
      if(itemInCart){
        itemInCart.quantity++;
      }
      else{
        state.cart.push({...action.payload , quantity:1});
      }
    },
    removeCartItems: (state, action) => {
      // state.totalPrice=0;
      state.cart = state.cart.filter(i => i.id !== action.payload.id);
    },
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if(item){
        state.totalPrice+=action.payload.price
        item.quantity++;
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if(item)
      {
        state.totalPrice-=action.payload.price;
        item.quantity--;
        if(item.quantity === 0)
        state.cart = state.cart.filter(i => i.id !== action.payload.id);
      }
    },
    displayModal:(state)=>{
      state.isDisplayed=(!state.isDisplayed);
    }
  },
});
export const {addtocart, removeCartItems, increment, decrement, displayModal} = addtocartSlice.actions;
export default addtocartSlice.reducer;
