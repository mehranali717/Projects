import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducer';
import Modalreduser from './Modal/Reducer'
const store = configureStore({
  reducer: {
    count: counterReducer,
    modal: Modalreduser,
  },
});
export default store;
