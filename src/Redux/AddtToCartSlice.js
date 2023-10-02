import { createSlice } from "@reduxjs/toolkit";
const addtocartSlice = createSlice({
  name: "addtocart",
  initialState: { product: [],count:0 , isDisplayed: false},
  reducers: {
    addtocart: (state, actions) => {
      state.product.push(actions.payload);
    },
    removeCartItems: (state, actions) => {
      state.product = state.product.filter(i => i.id !== actions.payload);
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    displayModal:(state)=>{
      state.isDisplayed=(!state.isDisplayed);
    }
  },
});
export const {addtocart, removeCartItems, increment, decrement, displayModal} = addtocartSlice.actions;
export default addtocartSlice.reducer;
