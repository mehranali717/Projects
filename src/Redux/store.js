import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducer';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
