import { configureStore } from '@reduxjs/toolkit';
import AddtocartSlice from "./AddtToCartSlice"
const store = configureStore({
  reducer: {
    count: AddtocartSlice,
    modal: AddtocartSlice,
    addtocart : AddtocartSlice,
    removeCartItems : AddtocartSlice,
  },
});
export default store;