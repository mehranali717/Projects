import { createSlice } from "@reduxjs/toolkit";
const addtocartSlice = createSlice({
  name: "addtocart",
  initialState: {cart:[], isDisplayed: false},
  reducers: {
    addtocart: (state, actions) => {
      const itemInCart = state.cart.find((item)=>item.id ===actions.payload.id)
      if(itemInCart){
        itemInCart.quantity++;
      }
      else{
        state.cart.push({...actions.payload , quantity:1});
      }
    },
    removeCartItems: (state, actions) => {
      state.cart = state.cart.filter(i => i.id !== actions.payload);
    },
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item) item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item) item.quantity--;
    },
    displayModal:(state)=>{
      state.isDisplayed=(!state.isDisplayed);
    }
  },
});
export const {addtocart, removeCartItems, increment, decrement, displayModal} = addtocartSlice.actions;
export default addtocartSlice.reducer;
